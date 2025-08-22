import { InputModal } from "@/components/modals/input-modal";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { emsProtocols } from "@/data/protocols";
import {
  getPronoun,
  getPronoun2,
  handleEMSPreRenderInstructions,
  isHigherPriority,
} from "@/lib/emsCaseHelpers";
import { replacePronounInNode } from "@/lib/utils";
import {
  IEMSAnswer,
  IEMSCase,
  IEMSProtocol,
  IEMSQuestion,
} from "@/models/interfaces";
import { CircleArrowLeft, CircleArrowRight, CheckCircle } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface IEMSKeyQuestionsProps {
  emsCase: IEMSCase;
  setEMSCase: React.Dispatch<React.SetStateAction<IEMSCase>>;
  setActiveTab: React.Dispatch<
    React.SetStateAction<
      "entry" | "kq" | "pdi-cei" | "dls" | "summary" | "send"
    >
  >;
  handleEMSQuestionsChange: (
    qIndex: number,
    answer: IEMSAnswer,
    currentQuestion: IEMSQuestion,
    adjustedIndex: number,
    inputValue?: string
  ) => void;
  setCodeSendingNow: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function EMSKeyQuestions({
  emsCase,
  setEMSCase,
  setActiveTab,
  handleEMSQuestionsChange,
  setCodeSendingNow,
}: IEMSKeyQuestionsProps) {
  // Ensure all hooks are called in the same order on every render
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [activeKqTab, setActiveKqTab] = useState<
    "answers" | "ai" | "ps" | "dets" | "detc" | "rules"
  >("answers");

  const protocol =
    emsProtocols.find(
      (c) => emsCase.case_entry.chief_complaint === c.protocol
    ) || null;

  const [selectOpen, setSelectOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLSpanElement>(null);
  const [allQuestionsAnswered, setAllQuestionsAnswered] =
    useState<boolean>(false);
  const [filteredQuestions, setFilteredQuestions] = useState<IEMSQuestion[]>(
    []
  );
  const [originalQuestionIndex, setOriginalQuestionIndex] =
    useState<number>(-1);
  const [currentQuestion, setCurrentQuestion] = useState<IEMSQuestion | null>(
    null
  );
  const [pendingAnswer, setPendingAnswer] = useState<IEMSAnswer | null>(null);
  const [isInputModalOpen, setIsInputModalOpen] = useState<boolean>(false);

  // New states for handling question re-answering
  const [editMode, setEditMode] = useState<boolean>(false);
  const [previousState, setPreviousState] = useState<{
    questionIndex: number;
    allQuestionsAnswered: boolean;
  } | null>(null);

  // Define callbacks before effects that might use them
  const onRightArrowHotKey = useCallback((e: React.KeyboardEvent) => {
    const key = e.key.toLowerCase();
    if (key === "arrowright") {
      const evtInit: KeyboardEventInit = {
        key: "Enter",
        code: "Enter",
        keyCode: 13,
        which: 13,
        bubbles: true,
        cancelable: true,
      };
      const active = document.activeElement as HTMLElement | null;
      if (!active) return;
      return active.dispatchEvent(new KeyboardEvent("keydown", evtInit));
    }
  }, []);

  const processAnswer = useCallback(
    (answerObj: IEMSAnswer, inputValue?: string) => {
      if (!currentQuestion) return;

      setSelectOpen(false);

      // Pass the original question index (position in protocol questions array)
      // and the adjusted index (visible question number)
      handleEMSQuestionsChange(
        originalQuestionIndex,
        answerObj,
        currentQuestion,
        questionIndex, // This is the adjusted index after filtering
        inputValue
      );

      // If in edit mode, return to the previous state
      if (editMode && previousState) {
        if (previousState.allQuestionsAnswered) {
          setAllQuestionsAnswered(true);
          // Set is_completed to true in the emsCase
          setEMSCase((prev) => ({
            ...prev,
            questions: {
              ...prev.questions,
              is_completed: true,
              key_questions_completed_time:
                prev.questions.key_questions_completed_time ||
                new Date().toISOString(),
            },
          }));
        } else {
          setQuestionIndex(previousState.questionIndex);
        }
        setEditMode(false);
        setPreviousState(null);
      } else {
        // Regular flow - move to next question
        const nextIndex = questionIndex + 1;

        // Check if we need to re-filter questions because preRenderInstructions might have changed
        // after this answer was provided
        setTimeout(() => {
          if (nextIndex < filteredQuestions.length) {
            setQuestionIndex(nextIndex);
          } else {
            // Only mark as all questions answered if we've actually answered all required questions
            // Count answered questions (excluding omitted)
            const answeredQuestions = emsCase.questions.list.filter(
              (q) => !q.omit
            ).length;

            // Map answered questions to their indices in filtered questions array
            const answeredIndices = emsCase.questions.list
              .filter((q) => !q.omit)
              .map((answeredQ) => {
                const originalIndex = answeredQ.number;
                return filteredQuestions.findIndex(
                  (q) => protocol?.questions.indexOf(q) === originalIndex
                );
              })
              .filter((index) => index !== -1);

            // If the number of answered questions equals the number of filtered questions
            if (answeredIndices.length === filteredQuestions.length) {
              setAllQuestionsAnswered(true);
              // Set is_completed to true in the emsCase
              setEMSCase((prev) => ({
                ...prev,
                questions: {
                  ...prev.questions,
                  is_completed: true,
                  key_questions_completed_time: new Date().toISOString(),
                },
              }));

              if (!emsCase.codes.selected_code && protocol) {
                // Find the highest code in selectable_codes and set as codeSendingNow
                const highestCode =
                  emsCase.codes.selectable_codes.reduce((prev, current) => {
                    return isHigherPriority(prev, current) ? prev : current;
                  }, emsCase.codes.selectable_codes[0]) || protocol.defaultCode;
                setCodeSendingNow(highestCode);
                setActiveTab("send");
              }
            } else {
              // We haven't actually answered all the questions
              // This happens when preRenderInstructions changes after an answer
              setQuestionIndex(
                nextIndex >= filteredQuestions.length
                  ? filteredQuestions.length - 1
                  : nextIndex
              );
            }
          }
        }, 0);
      }

      // Clear the current answers of the select
      setSelectOpen(true);
    },
    [
      originalQuestionIndex,
      handleEMSQuestionsChange,
      filteredQuestions,
      currentQuestion,
      questionIndex,
      editMode,
      previousState,
      setEMSCase,
      emsCase.questions.list,
      emsCase.codes.selected_code,
      emsCase.codes.selectable_codes,
      protocol,
      setCodeSendingNow,
      setActiveTab,
    ]
  );

  const answerQuestion = useCallback(
    (answer: string) => {
      if (!currentQuestion) return;

      const parts = answer.split("-");
      const answerIndex = parseInt(parts[0], 10);

      const answerObject = currentQuestion.answers[answerIndex];

      if (answerObject.input) {
        setPendingAnswer(answerObject);
        setIsInputModalOpen(true);
        return;
      }

      // Pass the original index of the current question in the protocol
      processAnswer(answerObject);
    },
    [currentQuestion, processAnswer]
  );

  // Function to handle clicking on a question to re-answer it
  const handleQuestionClick = useCallback(
    (questionNumber: number, adjustedNumber: number) => {
      if (!protocol) return;

      // Find the question in the protocol
      const questionToEdit = protocol.questions[questionNumber];
      if (!questionToEdit) return;

      // Check if this question is in the filtered questions
      const filteredIndex = filteredQuestions.findIndex(
        (q) => q === questionToEdit
      );
      if (filteredIndex === -1) return;

      // Save current state
      setPreviousState({
        questionIndex: questionIndex,
        allQuestionsAnswered: allQuestionsAnswered,
      });

      // Set edit mode
      setEditMode(true);
      setAllQuestionsAnswered(false);
      setQuestionIndex(filteredIndex);
      setOriginalQuestionIndex(questionNumber);
      setCurrentQuestion(questionToEdit);

      // Open select for editing
      setSelectOpen(true);
    },
    [protocol, filteredQuestions, questionIndex, allQuestionsAnswered]
  );

  // Process the questions based on preRenderInstructions
  useEffect(() => {
    if (protocol) {
      const filtered = protocol.questions.filter((question) => {
        if (!question.preRenderInstructions) {
          return true; // Include questions without preRenderInstructions
        }

        // Apply preRenderInstructions to determine if the question should be included
        return handleEMSPreRenderInstructions(
          question.preRenderInstructions,
          emsCase.case_entry.patient,
          emsCase.questions.list,
          emsCase.codes.selected_code,
          emsCase.codes.selected_suffix
        );
      });

      setFilteredQuestions(filtered);
    }
  }, [
    protocol,
    emsCase.case_entry.patient,
    emsCase.questions.list,
    emsCase.codes,
  ]);

  // Update current question when index or filtered questions change
  useEffect(() => {
    if (
      filteredQuestions.length > 0 &&
      questionIndex >= 0 &&
      questionIndex < filteredQuestions.length
    ) {
      const question = filteredQuestions[questionIndex];
      setCurrentQuestion(question);

      if (protocol) {
        // Find the original index of the current question in the protocol questions array
        const origIndex = protocol.questions.findIndex((q) => q === question);
        setOriginalQuestionIndex(origIndex);
      }
    } else {
      setCurrentQuestion(null);
      setOriginalQuestionIndex(-1);
    }
  }, [questionIndex, filteredQuestions, protocol]);

  // When the component mounts or emsCase.questions.list changes,
  // set the questionIndex to the last answered question + 1
  useEffect(() => {
    if (!protocol || editMode) return; // Skip this effect when in edit mode

    // If we have filtered questions and have answered questions
    if (filteredQuestions.length > 0 && emsCase.questions.list.length > 0) {
      // Map the answered questions to their indices in the filtered questions array
      const answeredIndices = emsCase.questions.list
        .map((answeredQ) => {
          const originalIndex = answeredQ.number;
          // Find the corresponding index in the filtered questions
          return filteredQuestions.findIndex(
            (q) => protocol.questions.indexOf(q) === originalIndex
          );
        })
        .filter((index) => index !== -1); // Filter out questions that aren't in filtered list

      if (answeredIndices.length === 0) {
        // No answered questions found in the filtered list
        setQuestionIndex(0);
        setAllQuestionsAnswered(false);

        // Update emsCase.questions.is_completed to false
        if (emsCase.questions.is_completed) {
          setEMSCase((prev) => ({
            ...prev,
            questions: {
              ...prev.questions,
              is_completed: false,
            },
          }));
        }
        return;
      }

      // Get the highest answered index and move to the next one
      const highestAnsweredIndex = Math.max(...answeredIndices);
      const nextIndex = highestAnsweredIndex + 1;

      // If there are more questions to answer
      if (nextIndex < filteredQuestions.length) {
        setQuestionIndex(nextIndex);
        setAllQuestionsAnswered(false);

        // Update emsCase.questions.is_completed to false if not all questions answered
        if (emsCase.questions.is_completed) {
          setEMSCase((prev) => ({
            ...prev,
            questions: {
              ...prev.questions,
              is_completed: false,
            },
          }));
        }
      } else {
        // We've answered all the currently filtered questions
        // But we should check if the filtered questions length matches
        // the number of answered questions to handle dynamically filtered questions

        // Count the number of questions actually answered (excluding omitted ones)
        const answeredQuestions = emsCase.questions.list.filter(
          (q) => !q.omit
        ).length;

        // If the number of filtered questions matches the number of answered questions
        // (accounting for questions with preRenderInstructions that might be filtered out)
        if (answeredIndices.length === filteredQuestions.length) {
          setQuestionIndex(filteredQuestions.length - 1);
          setAllQuestionsAnswered(true);

          // Update emsCase.questions.is_completed to true if all questions answered
          if (!emsCase.questions.is_completed) {
            setEMSCase((prev) => ({
              ...prev,
              questions: {
                ...prev.questions,
                is_completed: true,
                key_questions_completed_time: new Date().toISOString(),
              },
            }));
            if (!emsCase.codes.selected_code) {
              const highestCode =
                emsCase.codes.selectable_codes.reduce((prev, current) => {
                  return isHigherPriority(prev, current) ? prev : current;
                }, emsCase.codes.selectable_codes[0]) || protocol.defaultCode;
              setCodeSendingNow(highestCode);
              return setActiveTab("send");
            } else {
              setActiveTab("summary");
            }
          }
        } else {
          // We're missing some answers - this could be due to preRenderInstructions
          // Set to the next available unanswered question
          setQuestionIndex(
            nextIndex >= filteredQuestions.length
              ? filteredQuestions.length - 1
              : nextIndex
          );
          setAllQuestionsAnswered(false);

          // Update emsCase.questions.is_completed to false
          if (emsCase.questions.is_completed) {
            setEMSCase((prev) => ({
              ...prev,
              questions: {
                ...prev.questions,
                is_completed: false,
              },
            }));
          }
        }
      }
    } else if (filteredQuestions.length > 0) {
      // If no questions have been answered yet, start from the beginning
      setQuestionIndex(0);
      setAllQuestionsAnswered(false);

      // Update emsCase.questions.is_completed to false
      if (emsCase.questions.is_completed) {
        setEMSCase((prev) => ({
          ...prev,
          questions: {
            ...prev.questions,
            is_completed: false,
          },
        }));
      }
    } else {
      // No filtered questions available
      setAllQuestionsAnswered(true); // No questions to answer

      // Update emsCase.questions.is_completed to true
      if (!emsCase.questions.is_completed) {
        setEMSCase((prev) => ({
          ...prev,
          questions: {
            ...prev.questions,
            is_completed: true,
            key_questions_completed_time: new Date().toISOString(),
          },
        }));
        // if (!emsCase.codes.selected_code) {
        //   const highestCode =
        //     emsCase.codes.selectable_codes.reduce((prev, current) => {
        //       return isHigherPriority(prev, current) ? prev : current;
        //     }, emsCase.codes.selectable_codes[0]) || protocol.defaultCode;
        //   setCodeSendingNow(highestCode);
        //   return setActiveTab("send");
        // } else {
        //   setActiveTab("summary");
        // }
      }
    }
  }, [
    emsCase.questions.list,
    filteredQuestions,
    protocol,
    emsCase.questions.is_completed,
    setEMSCase,
    editMode,
    setActiveTab,
  ]);

  useEffect(() => {
    setSelectOpen(true);
  }, [questionIndex]);

  // Render conditions - moved to the top to ensure early return if needed
  if (!protocol) {
    return (
      <div className="text-center h-full">
        <p className="text-lg my-25 text-blue-500 font-semibold">
          No chief complaint selected.
        </p>
      </div>
    );
  }

  if (filteredQuestions.length === 0) {
    return (
      <div className="text-center h-full">
        <p className="text-lg my-25 text-blue-500 font-semibold">
          No applicable questions for this patient.
        </p>
      </div>
    );
  }

  // Early return for null currentQuestion when not in allQuestionsAnswered mode
  if (!currentQuestion && !allQuestionsAnswered) {
    return (
      <div className="text-center h-full">
        <p className="text-lg my-25 text-blue-500 font-semibold">
          No question found.
        </p>
      </div>
    );
  }

  if (allQuestionsAnswered && !editMode) {
    // Get the sorted questions for display
    const sortedQuestions = [...emsCase.questions.list].sort((a, b) => {
      // First try to sort by adjusted_number if available
      if (a.adjusted_number !== undefined && b.adjusted_number !== undefined) {
        return a.adjusted_number - b.adjusted_number;
      }
      // Fall back to number if adjusted_number is not available
      return a.number - b.number;
    });

    return (
      <div className="flex flex-col items-center justify-center p-12 min-h-[300px]">
        <h2 className="text-2xl font-semibold text-green-500">
          All Key Questions Answered
        </h2>
        <p className="text-muted-foreground mt-2 mb-6">
          You have completed all key questions for this protocol. Click on any
          question to edit your answer.
        </p>
        <div className="p-6 w-full bg-muted/20 rounded-xs border space-y-2 cursor-default">
          {sortedQuestions.map((item, i) => (
            <div
              className="flex items-center gap-2 rounded-xs p-1"
              key={i}
              onClick={() =>
                handleQuestionClick(item.number, item.adjusted_number || i)
              }
              role="button"
              tabIndex={0}
            >
              <p>
                {(item.adjusted_number !== undefined
                  ? item.adjusted_number
                  : i) + 1}
                .
              </p>
              <p
                dangerouslySetInnerHTML={{
                  __html: item.answer_list_display,
                }}
                className="first-letter:uppercase"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Final safety check for currentQuestion before rendering the main UI
  if (!currentQuestion) {
    return (
      <div className="text-center h-full">
        <p className="text-lg my-25 text-blue-500 font-semibold">
          Could not load the current question.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Top Buttons */}
      <div className="w-full flex justify-end items-center gap-2 mb-6">
        {editMode && (
          <Button
            variant="outline"
            className="w-[20%] mr-auto rounded-xs"
            onClick={() => {
              if (previousState) {
                if (previousState.allQuestionsAnswered) {
                  setAllQuestionsAnswered(true);
                } else {
                  setQuestionIndex(previousState.questionIndex);
                }
                setEditMode(false);
                setPreviousState(null);
              }
            }}
          >
            Cancel Edit
          </Button>
        )}
        <Button
          variant="outline"
          className="w-[10%] rounded-xs"
          disabled={questionIndex === 0}
          onClick={() => setQuestionIndex(questionIndex - 1)}
        >
          <CircleArrowLeft className="h-4 w-4 scale-125 text-destructive" />
        </Button>
        <Button
          variant="outline"
          className="w-[20%] rounded-xs"
          disabled={questionIndex === filteredQuestions.length - 1}
          onClick={() => setQuestionIndex(questionIndex + 1)}
        >
          <CircleArrowRight className="h-4 w-4 scale-125 text-green-500" />
        </Button>
      </div>

      {/* Question and Answer */}
      <div className="w-full flex gap-6 mb-12 text-lg items-start">
        <div className="flex-1 flex gap-2">
          {editMode ? (
            <span className="text-blue-500 font-semibold">Editing: </span>
          ) : null}
          {/* Display the adjusted question number (questionIndex + 1) */}
          {questionIndex + 1}.
          {emsCase.case_entry.patient.caller_type === "first" ||
          emsCase.case_entry.patient.caller_type === "first-alone"
            ? replacePronounInNode(
                currentQuestion.firstPersonText ?? currentQuestion.text, // fallback
                getPronoun(emsCase.case_entry.patient.gender),
                getPronoun2(emsCase.case_entry.patient.gender)
              )
            : replacePronounInNode(
                currentQuestion.text,
                getPronoun(emsCase.case_entry.patient.gender),
                getPronoun2(emsCase.case_entry.patient.gender)
              )}
        </div>
        <div className="flex-1">
          <Select
            open={selectOpen}
            defaultOpen
            onOpenChange={setSelectOpen}
            onValueChange={answerQuestion}
          >
            <SelectTrigger className="w-full rounded-xs">
              <SelectValue ref={selectRef} />
            </SelectTrigger>
            <SelectContent
              onKeyDown={onRightArrowHotKey}
              className="rounded-xs"
            >
              {currentQuestion.answers
                .map((answer, index) => {
                  // Check if answer has preRenderInstructions
                  if (
                    answer.preRenderInstructions &&
                    !handleEMSPreRenderInstructions(
                      answer.preRenderInstructions,
                      emsCase.case_entry.patient,
                      emsCase.questions.list,
                      emsCase.codes.selected_code,
                      emsCase.codes.selected_suffix
                    )
                  ) {
                    return null; // Skip this answer option
                  }

                  return (
                    <SelectItem
                      key={index}
                      className="rounded-xs"
                      value={`${index}-${questionIndex}`}
                    >
                      {answer.answer}
                    </SelectItem>
                  );
                })
                .filter(Boolean)}{" "}
              {/* Filter out null items */}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Variable depending on if it's the first question */}
      <div className="mb-4">
        <p className="text-md">
          <span className="text-blue-500">Caller Statement:</span>{" "}
          {emsCase?.case_entry?.caller_statement}
        </p>
      </div>

      <div className="mb-2">
        <Tabs
          defaultValue={activeKqTab}
          value={activeKqTab}
          className="w-full gap-0"
        >
          <TabsList className="grid w-full grid-cols-6 rounded-xs bg-transparent space-x-0.5">
            <TabsTrigger
              className="rounded-xs rounded-t-md bg-muted"
              onClick={() => setActiveKqTab("answers")}
              value="answers"
              style={{
                backgroundColor:
                  activeKqTab === "answers" ? "#14b8a6" : undefined,
              }}
            >
              KQ Answers
            </TabsTrigger>
            <TabsTrigger
              className="rounded-xs rounded-t-md bg-muted"
              onClick={() => setActiveKqTab("ai")}
              value="ai"
              style={{
                backgroundColor: activeKqTab === "ai" ? "#14b8a6" : undefined,
              }}
            >
              Additional Info
            </TabsTrigger>
            <TabsTrigger
              className="rounded-xs rounded-t-md bg-muted"
              onClick={() => setActiveKqTab("ps")}
              value="ps"
              style={{
                backgroundColor: activeKqTab === "ps" ? "#14b8a6" : undefined,
              }}
            >
              Problem Suffixes
            </TabsTrigger>
            <TabsTrigger
              className="rounded-xs rounded-t-md bg-muted"
              onClick={() => setActiveKqTab("dets")}
              value="dets"
              style={{
                backgroundColor: activeKqTab === "dets" ? "#14b8a6" : undefined,
              }}
            >
              Determinants w/ Suffixes
            </TabsTrigger>
            <TabsTrigger
              className="rounded-xs rounded-t-md bg-muted"
              onClick={() => setActiveKqTab("detc")}
              value="detc"
              style={{
                backgroundColor: activeKqTab === "detc" ? "#14b8a6" : undefined,
              }}
            >
              Det. Codes
            </TabsTrigger>
            <TabsTrigger
              className="rounded-xs rounded-t-md bg-muted"
              onClick={() => setActiveKqTab("rules")}
              value="rules"
              style={{
                backgroundColor:
                  activeKqTab === "rules" ? "#14b8a6" : undefined,
              }}
            >
              CC Selection Rules
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="answers"
            className="p-6 min-h-[300px] bg-muted/20 rounded-xs border space-y-2 cursor-default"
          >
            {emsCase.questions.list.length > 0
              ? [...emsCase.questions.list]
                  .sort((a, b) => {
                    // First try to sort by adjusted_number
                    if (
                      a.adjusted_number !== undefined &&
                      b.adjusted_number !== undefined
                    ) {
                      return a.adjusted_number - b.adjusted_number;
                    }
                    // Fall back to number
                    return a.number - b.number;
                  })
                  .map((item, i) => (
                    <div
                      className="flex items-center gap-2 rounded-xs p-1"
                      key={i}
                      onClick={() =>
                        handleQuestionClick(
                          item.number,
                          item.adjusted_number || i
                        )
                      }
                      role="button"
                      tabIndex={0}
                    >
                      <p>
                        {(item.adjusted_number !== undefined
                          ? item.adjusted_number
                          : i) + 1}
                        .
                      </p>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: item.answer_list_display,
                        }}
                        className="first-letter:uppercase"
                      />
                    </div>
                  ))
              : null}
          </TabsContent>
          {/* Other tabs content remains unchanged */}
        </Tabs>
      </div>
      <InputModal
        isOpen={isInputModalOpen}
        onClose={() => {
          setIsInputModalOpen(false);
          setPendingAnswer(null);
        }}
        onConfirm={(inputValue: string) => {
          if (pendingAnswer) {
            processAnswer(pendingAnswer, inputValue);
            setIsInputModalOpen(false);
            setPendingAnswer(null);
          }
        }}
        title={
          pendingAnswer
            ? `Enter value for: ${pendingAnswer.answer}`
            : "Enter Value"
        }
        placeholder="Enter your input..."
      />
    </>
  );
}
