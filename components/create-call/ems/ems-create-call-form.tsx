"use client";

import { Button } from "@/components/ui/button";
import {
  Plus,
  Minus,
  Phone,
  FileText,
  Target,
  ArrowUp,
  ArrowDown,
  Zap,
  X,
  Radiation,
  Biohazard,
  CheckCircle,
  Skull,
  HelpCircle,
  Heart,
  User,
  Baby,
  Pill,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import {
  IEMSAnswer,
  IEMSCase,
  IEMSQuestion,
  ISavedNewCall,
} from "@/models/interfaces";
import LoadingState from "@/components/loading-state";
import {
  evaluateEMSDependency,
  getBestCode,
  getPronoun,
  getPronoun2,
  isHigherPriority,
} from "@/lib/emsCaseHelpers";
import EMSCaseEntry from "./case-entry";
import EMSCaseSummary from "./case-summary";
import { emsProtocols } from "@/data/protocols";
import EMSKeyQuestions from "./key-questions";
import TimerDisplay from "@/components/timer";
import {
  processQuestionText,
  reactNodeToHtml,
  replacePronounInNode,
} from "@/lib/utils";
import SendEMSCase from "./send-case";

export default function EMSCreateCallForm() {
  const [initialCall, setInitialCall] = useState<ISavedNewCall | null>(null);
  const [emsCase, setEMSCase] = useState<IEMSCase>({
    case_entry: {
      page_opened_time: "",
      first_keystroke_time: "",
      caller_statement: "",
      patient: {
        caller_type: "",
        count: 0,
        age: 0,
        age_unit: "",
        gender: "",
        consciousness: "",
        breathing: "",
      },
      chief_complaint: 0,
      initial_complaint: 0,
      sub_complaint: 0,
      case_entry_completed_time: "",
    },
    questions: {
      key_questions_start_time: "",
      list: [],
      is_completed: false,
      key_questions_completed_time: "",
    },
    codes: {
      code_sent_at_time: "",
      selectable_codes: [],
      selectable_suffixes: [],
      selected_code: "",
      selected_suffix: "",
    },
    dispatch: {
      scene_status: "secure",
      channel: "fire dispatch",
      staging_location: "N/A",
      units_assigned: [],
      dispatch_time: "",
      summary: "",
    },
    pdi: {
      pdi_start_time: "",
      has_completed_disconnect: false,
      pdi_completed_time: "",
    },
    case_stage: "entry",
    case_completed_time: "",
  });
  const [activeTab, setActiveTab] = useState<
    "entry" | "kq" | "pdi-cei" | "dls" | "summary" | "send"
  >("entry");
  const [codeSendingNow, setCodeSendingNow] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [userInitiatedChange, setUserInitiatedChange] = useState<string | null>(
    null
  );

  // Set isInitialLoad to false after the first render to prevent auto-navigation during load
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setIsInitialLoad(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  //   This will handle input changes for the initial call data

  const handleEMSDispatchChange = (
    field: keyof IEMSCase["dispatch"],
    value: string | number | boolean
  ) => {
    setEMSCase((prev) => ({
      ...prev,
      dispatch: {
        ...prev.dispatch,
        [field]: value,
      },
    }));
    localStorage.setItem(
      "NEW_CALL",
      JSON.stringify({
        ...initialCall,
        ems_case: {
          ...emsCase,
          dispatch: { ...emsCase.dispatch, [field]: value },
        },
      })
    );
  };

  const handleEMSQuestionsChange = (
    qIndex: number,
    answer: IEMSAnswer,
    question: IEMSQuestion,
    adjustedIndex: number,
    inputValue?: string
  ) => {
    setEMSCase((prev) => {
      // Create a copy of the existing questions list
      let list = [...prev.questions.list];

      // Find the protocol
      const protocol = emsProtocols.find(
        (c) => c.protocol === prev.case_entry.chief_complaint
      );

      if (!protocol) {
        console.error("Protocol not found");
        return prev;
      }

      // Handle dependency results
      if (answer.dependency) {
        const depResult = evaluateEMSDependency(
          answer.dependency,
          prev.case_entry.patient,
          list,
          prev.codes.selected_code,
          prev.codes.selected_suffix
        );
        if (depResult) {
          if (depResult.pushCodes) {
            const newCodes = Array.isArray(depResult.pushCodes)
              ? depResult.pushCodes.filter(
                  (code) => !prev.codes.selectable_codes.includes(code)
                )
              : [];

            setEMSCase((prevCase) => ({
              ...prevCase,
              codes: {
                ...prevCase.codes,
                selectable_codes: [
                  ...prevCase.codes.selectable_codes,
                  ...newCodes,
                ],
              },
            }));
            localStorage.setItem(
              "NEW_CALL",
              JSON.stringify({
                ...initialCall,
                ems_case: {
                  ...emsCase,
                  codes: {
                    ...emsCase.codes,
                    selectable_codes: [
                      ...emsCase.codes.selectable_codes,
                      ...newCodes,
                    ],
                  },
                },
              })
            );
          }

          if (
            depResult.send &&
            !emsCase.codes.selected_code &&
            getBestCode(emsCase.codes.selectable_codes, protocol) !== null
          ) {
            setCodeSendingNow(
              getBestCode(emsCase.codes.selectable_codes, protocol)
            );
            setActiveTab("send");
          }
        }
      }

      if (answer.pushCodes) {
        const newCodes = Array.isArray(answer.pushCodes)
          ? answer.pushCodes.filter(
              (code) => !prev.codes.selectable_codes.includes(code)
            )
          : [];

        setEMSCase((prevCase) => ({
          ...prevCase,
          codes: {
            ...prevCase.codes,
            selectable_codes: [...prevCase.codes.selectable_codes, ...newCodes],
          },
        }));
        localStorage.setItem(
          "NEW_CALL",
          JSON.stringify({
            ...initialCall,
            ems_case: {
              ...emsCase,
              codes: {
                ...emsCase.codes,
                selectable_codes: [
                  ...emsCase.codes.selectable_codes,
                  ...newCodes,
                ],
              },
            },
          })
        );
      }

      if (
        answer.send &&
        !emsCase.codes.selected_code &&
        getBestCode(emsCase.codes.selectable_codes, protocol) !== null
      ) {
        alert("Auto-navigating to Send tab based on answer");
        setCodeSendingNow(
          getBestCode(emsCase.codes.selectable_codes, protocol)
        );
        setActiveTab("send");
      }

      if (answer.pushSuffix) {
        // setEMSCase((prevCase) => ({
        //   ...prevCase,
        //   codes: {
        //     ...prevCase.codes,
        //     selectable_suffixes: {
        //       ...prevCase.codes.selectable_suffixes,
        //       ...answer.pushSuffix,
        //     },
        //   },
        // }));
        // localStorage.setItem(
        //   "NEW_CALL",
        //   JSON.stringify({
        //     ...initialCall,
        //     ems_case: {
        //       ...emsCase,
        //       codes: {
        //         ...emsCase.codes,
        //         selectable_suffixes: {
        //           ...emsCase.codes.selectable_suffixes,
        //           ...answer.pushSuffix,
        //         },
        //       },
        //     },
        //   })
        // );
      }

      // Generate a unique identifier for this question based on its index in the protocol
      const questionIdentifier = qIndex;

      // Prepare the new answer object
      const newAnswer = {
        number: questionIdentifier,
        adjusted_number: adjustedIndex, // Add the adjusted number (position after filtering)
        text: `${reactNodeToHtml(
          replacePronounInNode(
            question.text,
            getPronoun(prev.case_entry.patient.gender),
            getPronoun2(prev.case_entry.patient.gender)
          )
        )}`,
        rawText: `${processQuestionText(question.text)}`,
        answer: answer.answer,
        answer_display: answer?.display
          ?.replace(
            /\*\*pronoun\*\*/gi,
            getPronoun(prev.case_entry.patient.gender)
          )
          ?.replace(
            /\*\*pronoun2\*\*/gi,
            getPronoun2(prev.case_entry.patient.gender)
          )
          ?.replace(/\{input\}/gi, inputValue || ""),
        answer_list_display: reactNodeToHtml(
          replacePronounInNode(
            answer.answerDisplay,
            getPronoun(prev.case_entry.patient.gender),
            getPronoun2(prev.case_entry.patient.gender),
            inputValue
          )
        ),
        priority: answer.answerPriority || undefined,
        omit: false,
        timestamp: new Date().toISOString(),
      };

      // Find if there's an existing answer with this question identifier
      const existingIndex = list.findIndex(
        (item) => item.number === questionIdentifier
      );

      if (existingIndex !== -1) {
        // Update existing answer at this index, preserving the adjusted number if present
        list[existingIndex] = {
          ...newAnswer,
          adjusted_number: adjustedIndex,
        };
      } else {
        // Add new answer to the list
        list.push(newAnswer);
      }

      // Create the updated case
      const updatedCase = {
        ...prev,
        questions: {
          ...prev.questions,
          list,
          key_questions_start_time:
            prev.questions.key_questions_start_time || new Date().toISOString(),
        },
      };

      // Update localStorage inside the state update function
      try {
        localStorage.setItem(
          "NEW_CALL",
          JSON.stringify({ ...initialCall, ems_case: updatedCase })
        );
      } catch (error) {
        console.error("Error saving to localStorage:", error);
      }

      return updatedCase;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {isLoading && (
        // Make the loading state take up the entire page
        <div className="absolute z-50 min-w-screen min-h-screen flex justify-center items-center">
          <LoadingState />
        </div>
      )}
      <div className="mx-auto">
        {/* Header with diagnostic tools */}
        <div className="flex items-center gap-1 p-2 bg-card border-b border-border mb-6">
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-transparent rounded-xs"
          >
            <Plus className="h-4 w-4 scale-150" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-transparent rounded-xs"
          >
            <Minus className="h-4 w-4 scale-150" />
          </Button>

          <div className="w-2" />

          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-transparent rounded-xs"
          >
            <Phone className="h-4 w-4 scale-125" />
          </Button>

          <div className="w-2" />

          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-transparent rounded-xs"
          >
            <FileText className="h-4 w-4 scale-125" />
          </Button>

          <div className="w-2" />

          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-transparent rounded-xs"
          >
            <Target className="h-4 w-4 scale-125 text-red-500" />
          </Button>

          <div className="w-2" />

          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-transparent rounded-xs"
          >
            <ArrowUp className="h-4 w-4 scale-125" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-transparent rounded-xs"
          >
            <ArrowDown className="h-4 w-4 scale-125" />
          </Button>

          <div className="w-2" />

          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-transparent rounded-xs"
          >
            <Zap className="h-4 w-4 scale-125" />
          </Button>

          <div className="w-2" />

          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-transparent rounded-xs"
          >
            <X className="h-4 w-4 scale-125" />
          </Button>

          <div className="w-2" />

          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-transparent rounded-xs"
          >
            <Radiation className="h-4 w-4 scale-125 text-red-500" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-transparent rounded-xs"
          >
            <Biohazard className="h-4 w-4 scale-125 text-green-400" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-transparent rounded-xs"
          >
            <CheckCircle className="h-4 w-4 scale-125" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-transparent rounded-xs"
          >
            <Skull className="h-4 w-4 scale-125" />
          </Button>

          <div className="w-2" />

          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-transparent rounded-xs"
          >
            <HelpCircle className="h-4 w-4 scale-125" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-transparent rounded-xs"
          >
            <Heart className="h-4 w-4 scale-125" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-transparent rounded-xs"
          >
            <ArrowDown className="h-4 w-4scale-125" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-transparent rounded-xs"
          >
            <Baby className="h-4 w-4 scale-125" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-transparent rounded-xs"
          >
            <div className="h-4 w-4 rounded-full border-2 border-current scale-125" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-transparent rounded-xs"
          >
            <Pill className="h-4 w-4 scale-125" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-orange-500 text-white border-orange-500 rounded-xs"
          >
            <div
              className="h-3 w-3 bg-white scale-125"
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            />
          </Button>

          <div className="w-2" />

          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 text-red-600 border-red-600 bg-transparent rounded-xs"
          >
            <User className="h-4 w-4 scale-125" />
          </Button>
        </div>

        {/* Protocol Grid */}
        <div className="grid grid-cols-5 gap-4 py-4 mb-4 items-center">
          <div className="text-center p-3">
            <TimerDisplay emsCase={emsCase} />
          </div>
          {emsCase?.case_entry.chief_complaint !== 0 && (
            <div className="col-span-3 text-center p-4 border border-border rounded-xs bg-muted/50">
              <div className="text-2xl font-bold text-blue-500 mb-1">
                {Math.floor(Number(emsCase?.case_entry?.chief_complaint))} -{" "}
                {
                  emsProtocols.find(
                    (c) => c.protocol === emsCase?.case_entry?.chief_complaint
                  )?.name
                }
              </div>
            </div>
          )}

          <div className="text-center p-3">
            <div className="text-lg font-bold text-destructive">
              {emsCase.codes.selected_code && emsCase.codes.selected_code}
            </div>
          </div>
        </div>

        <Tabs
          defaultValue={activeTab}
          value={activeTab}
          className="w-full gap-0"
        >
          <TabsList className="grid w-full grid-cols-5 rounded-xs">
            <TabsTrigger
              className="rounded-xs"
              onClick={() => setActiveTab("entry")}
              value="entry"
            >
              Entry
            </TabsTrigger>
            <TabsTrigger
              className="rounded-xs"
              onClick={() => setActiveTab("kq")}
              value="kq"
            >
              KQ
            </TabsTrigger>
            <TabsTrigger
              className="rounded-xs"
              onClick={() => setActiveTab("pdi-cei")}
              value="pdi-cei"
            >
              PDI/CEI
            </TabsTrigger>
            <TabsTrigger
              className="rounded-xs"
              onClick={() => setActiveTab("dls")}
              value="dls"
            >
              DLS
            </TabsTrigger>
            <TabsTrigger
              className="rounded-xs"
              onClick={() => setActiveTab("summary")}
              value="summary"
            >
              Summary
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="entry"
            className="p-6 min-h-[400px] bg-muted/20 rounded-xs border space-y-6"
          >
            <EMSCaseEntry
              initialCall={initialCall}
              setInitialCall={setInitialCall}
              emsCase={emsCase}
              setEMSCase={setEMSCase}
              setIsLoading={setIsLoading}
              isInitialLoad={isInitialLoad}
              userInitiatedChange={userInitiatedChange}
              setUserInitiatedChange={setUserInitiatedChange}
              handleEMSDispatchChange={handleEMSDispatchChange}
              setActiveTab={setActiveTab}
            />
          </TabsContent>

          <TabsContent
            value="kq"
            className="p-6 min-h-[400px] bg-muted/20 rounded-xs border px-10"
          >
            <EMSKeyQuestions
              emsCase={emsCase}
              setEMSCase={setEMSCase}
              setActiveTab={setActiveTab}
              handleEMSQuestionsChange={handleEMSQuestionsChange}
              setCodeSendingNow={setCodeSendingNow}
            />
          </TabsContent>

          <TabsContent
            value="send"
            className="p-6 min-h-[400px] bg-muted/20 rounded-xs border px-10"
          >
            <SendEMSCase
              initialCall={initialCall}
              emsCase={emsCase}
              codeSendingNow={codeSendingNow}
              setEMSCase={setEMSCase}
              setActiveTab={setActiveTab}
            />
          </TabsContent>

          <TabsContent
            value="pdi-cei"
            className="p-6 min-h-[400px] bg-muted/20 rounded-xs border"
          >
            <div className="text-center text-muted-foreground">
              PDI/CEI content will be displayed here
            </div>
          </TabsContent>

          <TabsContent
            value="dls"
            className="p-6 min-h-[400px] bg-muted/20 rounded-xs border"
          >
            <div className="text-center text-muted-foreground">
              DLS content will be displayed here
            </div>
          </TabsContent>

          <TabsContent
            value="summary"
            className="p-6 min-h-[400px] bg-muted/20 rounded-xs border space-y-6"
          >
            <EMSCaseSummary
              initialCall={initialCall}
              emsCase={emsCase}
              setEMSCase={setEMSCase}
              setActiveTab={setActiveTab}
              handleEMSDispatchChange={handleEMSDispatchChange}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
