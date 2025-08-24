"use client";

import { IEMSAnswer, IEMSProtocol } from "@/models/interfaces";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { ChevronDown, ChevronRight, Star } from "lucide-react";
import { processQuestionText } from "@/lib/utils";
import { getEMSPlan, getEMSPlans } from "@/data/plans/ems/emsPlans";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { emsProtocols } from "@/data/protocols";
import Link from "next/link";

type PriorityLetter = "O" | "A" | "B" | "C" | "D" | "E";
type ServicePriority = boolean | PriorityLetter | undefined;

const priorityColors: Record<PriorityLetter, string> = {
  O: "bg-muted text-white",
  A: "bg-green-600 text-white",
  B: "bg-blue-600 text-white",
  C: "bg-yellow-500 text-black",
  D: "bg-red-500 text-white",
  E: "bg-purple-600 text-white",
};

const priorityNames = {
  O: "Omega",
  A: "Alpha",
  B: "Bravo",
  C: "Charlie",
  D: "Delta",
  E: "Echo",
} satisfies Record<PriorityLetter, string>;

function isPriorityLetter(p: unknown): p is PriorityLetter {
  return typeof p === "string" && p in priorityNames;
}

function getPriorityBadgeClass(priority: ServicePriority): string {
  if (typeof priority === "boolean") {
    return priority ? "bg-green-500 text-green-100" : "bg-muted-foreground";
  }
  if (isPriorityLetter(priority)) {
    return priorityColors[priority];
  }
  return "bg-muted";
}

function getPriorityLabel(priority: ServicePriority): string {
  if (typeof priority === "boolean") {
    return priority ? "Always Responds" : "No Response";
  }
  if (isPriorityLetter(priority)) {
    return `${priorityNames[priority]} Level`;
  }
  return "Depends on Situation";
}

function ServicesList({ services }: { services: IEMSProtocol["services"] }) {
  return (
    <div className="space-y-2">
      <h4 className="font-semibold text-sm">Services & Response Priority:</h4>
      <div className="grid gap-2">
        {services.map((service) => (
          <div
            key={service.name}
            className="flex justify-between items-center p-2 bg-muted rounded-xs"
          >
            <span className="font-medium">{service.name}</span>
            <Badge
              variant="outline"
              className={`${getPriorityBadgeClass(
                service.priority
              )} rounded-xs`}
            >
              {getPriorityLabel(service.priority)}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnswerItem({ answer }: { answer: IEMSAnswer }) {
  const actionBadges = [
    {
      condition: answer.continue,
      label: "Continue",
      className: "bg-blue-100 text-blue-800",
    },
    {
      condition: answer.end,
      label: "End",
      className: "bg-gray-100 text-gray-800",
    },
    {
      condition: answer.send,
      label: "Send",
      className: "bg-red-100 text-red-800",
    },
    {
      condition: answer.input,
      label: "Input Required",
      className: "bg-purple-100 text-purple-800",
    },
    {
      condition: answer.pushCodes,
      label: `Code: ${answer.pushCodes}`,
      className: "bg-orange-100 text-orange-800",
    },
    {
      condition: answer.gotoProtocol,
      label: `→ Protocol ${answer.gotoProtocol}`,
      className: "bg-indigo-100 text-indigo-800",
    },
  ];

  return (
    <div className="ml-4 p-3 bg-muted/50 rounded-xs border-l-4 border-blue-200">
      <div className="flex flex-wrap gap-2 items-start">
        <Badge variant="outline" className="text-xs  rounded-xs">
          {answer.answer}
        </Badge>
        <span className="text-sm text-muted-foreground">
          {answer.display && `→ ${answer.display}`}
        </span>
      </div>

      <div className="mt-2 flex flex-wrap gap-1">
        {actionBadges
          .filter(({ condition }) => condition)
          .map(({ label, className }, idx) => (
            <Badge key={idx} className={`text-xs ${className}  rounded-xs`}>
              {label}
            </Badge>
          ))}
      </div>

      {answer.preRenderLogic && (
        <div className="mt-2 p-2 bg-black/15 rounded-xs text-xs">
          <strong>Condition:</strong> {answer.preRenderLogic}
        </div>
      )}

      {answer.dependencyLogic && (
        <div className="mt-2 p-2 bg-blue-900/25 rounded-xs text-xs">
          <strong>Dependency:</strong> {answer.dependencyLogic}
        </div>
      )}
    </div>
  );
}

function QuestionsList({
  questions,
}: {
  questions: IEMSProtocol["questions"];
}) {
  const [openQuestions, setOpenQuestions] = useState<Set<number>>(new Set());

  const toggleQuestion = (index: number) => {
    setOpenQuestions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-sm">Protocol Questions:</h4>
      {questions.map((question, index) => {
        const isOpen = openQuestions.has(index);
        return (
          <div key={index} className="border rounded-xs bg-card">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full p-4 text-left hover:bg-muted/50 transition-colors duration-200 flex items-center justify-between"
            >
              <div className="flex items-start gap-3">
                <Badge className="text-xs bg-slate-100 text-slate-800 min-w-fit rounded-xs">
                  Q{index + 1}
                </Badge>
                <div className="flex-1 text-sm font-medium">
                  {question.text}
                </div>
                {question.preRenderDeps &&
                  question.preRenderDeps.some((dep) =>
                    ["age", "gender", "patient"].includes(dep)
                  ) && (
                    <Badge
                      variant="outline"
                      className="bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-xs"
                    >
                      Patient Dependant
                    </Badge>
                  )}

                {question.preRenderDeps &&
                  question.preRenderDeps?.some((dep) =>
                    ["answers", "responses"].includes(dep)
                  ) && (
                    <Badge
                      variant="outline"
                      className="bg-purple-50 text-purple-700 dark:bg-purple-900 dark:text-purple-300  rounded-xs"
                    >
                      Answer Dependent
                    </Badge>
                  )}
              </div>
              {isOpen ? (
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              ) : (
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              )}
            </button>

            {isOpen && (
              <div className="px-4 py-4 border-t">
                {question.firstPersonText && (
                  <div className="mb-6 flex items-center gap-2">
                    <p className="text-xs">First Person Text:</p>
                    <Badge className="text-xs bg-muted text-muted-foreground rounded-xs">
                      {question.firstPersonText}
                    </Badge>
                  </div>
                )}

                <div className="mb-6 flex items-center gap-2">
                  <p className="text-xs">Question Type:</p>
                  <Badge className="text-xs bg-muted text-muted-foreground  rounded-xs">
                    {question.questionType}
                  </Badge>
                </div>

                {question.preRenderLogic && (
                  <div className="mb-6 p-3 bg-blue-900/25 rounded-xs text-xs">
                    <strong>Show when:</strong> {question.preRenderLogic}
                  </div>
                )}

                <div className="space-y-2 mb-3">
                  <div className="text-xs font-medium text-muted-foreground">
                    Possible Answers:
                  </div>
                  {question.answers.map((answer, answerIndex) => (
                    <AnswerItem key={answerIndex} answer={answer} />
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function DeterminantsList({
  determinants,
}: {
  determinants: IEMSProtocol["determinants"];
}) {
  const getBorderColor = (priority: keyof typeof priorityColors): string => {
    switch (priority) {
      case "O":
        return "#64748b"; // Slate
      case "A":
        return "#22c55e"; // Green
      case "B":
        return "#3b82f6"; // Blue
      case "C":
        return "#eab308"; // Yellow
      case "D":
        return "#ef4444"; // Red
      case "E":
      default:
        return "#a855f7"; // Purple
    }
  };

  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-sm">Determinant Codes:</h4>
      {determinants.map((determinant, index) => (
        <div key={index} className="border rounded-xs p-4">
          <div className="flex items-center gap-2 mb-3">
            <Badge
              className={`${
                priorityColors[determinant.priority]
              } font-medium rounded-xs`}
            >
              {determinant.priority}
            </Badge>
            <span className="text-sm font-medium">
              {priorityNames[determinant.priority]}
            </span>
          </div>

          <div className="space-y-2">
            {determinant.codes.map((code, codeIndex) => (
              <div
                key={codeIndex}
                className="p-3 bg-muted/30 rounded-xs border-l-4"
                style={{
                  borderLeftColor: getBorderColor(determinant.priority),
                }}
              >
                <div className="flex justify-between items-center gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge
                        variant="outline"
                        className="text-xs font-mono rounded-xs"
                      >
                        {code.code}
                      </Badge>
                    </div>
                    <div className="text-sm flex items-center gap-1">
                      {processQuestionText(code.text).includes("Override") && (
                        <Star className="text-yellow-500 w-4 h-4" />
                      )}
                      {code.text}
                    </div>
                  </div>
                  <Link
                    href={`/response-plans/ems?plan=${
                      getEMSPlan(code.recResponse)?.id
                    }`}
                  >
                    <Badge className="text-xs bg-gray-100 text-gray-800 rounded-xs">
                      Plan: {getEMSPlan(code.recResponse)?.name}
                    </Badge>
                  </Link>
                </div>

                {code.suffixes && code.suffixes?.length > 0 && (
                  <div className="mt-2 ml-4">
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <button className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
                          <ChevronRight className="h-3 w-3" />
                          Sub-codes ({code.suffixes.length})
                        </button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-2 space-y-1">
                        {code.suffixes.map((suffix, subIndex) => (
                          <div
                            key={subIndex}
                            className="flex justify-between items-center p-2 bg-muted rounded-xs text-xs"
                          >
                            <span>
                              <Badge
                                variant="outline"
                                className="text-xs font-mono mr-2 rounded-xs"
                              >
                                {suffix.suffix}
                              </Badge>
                              {suffix.text}
                            </span>
                            {suffix.recResponse && (
                              <Link
                                href={`/response-plans/ems?plan=${
                                  getEMSPlan(suffix.recResponse)?.id
                                }`}
                              >
                                <Badge className="text-xs rounded-xs">
                                  Plan: {getEMSPlan(suffix.recResponse)?.name}
                                </Badge>
                              </Link>
                            )}
                          </div>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProtocolCard({ protocol }: { protocol: IEMSProtocol }) {
  const [isOpen, setIsOpen] = useState(false);
  const paddedProtocol = protocol.protocol.toString().padStart(2, "0");
  const defaultPriority = protocol.defaultPriority;
  const defaultPriorityClass = priorityColors[defaultPriority];
  const defaultPriorityName = priorityNames[defaultPriority];

  return (
    <Card className="w-full py-2 rounded-xs">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="-my-2">
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors duration-200 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Badge className="bg-primary text-primary-foreground font-mono">
                  {paddedProtocol}
                </Badge>
                <div>
                  <CardTitle className="text-lg">{protocol.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    Short Name: {protocol.shortName}
                  </p>
                </div>
              </div>
              {isOpen ? (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              )}
            </div>
          </CardHeader>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <CardContent className="space-y-6 py-4">
            {protocol.description && (
              <div>
                <h4 className="font-bold text-md mb-2">Description:</h4>
                <span className="text-sm text-muted-foreground">
                  {protocol.description}
                </span>
              </div>
            )}

            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-sm">Default Priority:</h4>
              <Badge className={`${defaultPriorityClass} font-mono rounded-xs`}>
                {defaultPriority} - {defaultPriorityName}
              </Badge>
            </div>

            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-sm">Default Code:</h4>
              <Badge className="bg-muted-foreground/25 text-primary font-mono rounded-xs">
                {protocol.defaultCode} -{" "}
                {protocol.determinants
                  .flatMap((d) => d.codes)
                  .find((c) => c.code === protocol.defaultCode)?.text ||
                  "Unknown"}
              </Badge>
            </div>

            {protocol.services?.length > 0 && (
              <ServicesList services={protocol.services} />
            )}

            {protocol.determinants?.length > 0 && (
              <DeterminantsList determinants={protocol.determinants} />
            )}

            {protocol.questions?.length > 0 && (
              <QuestionsList questions={protocol.questions} />
            )}
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}

export default function EMSProtocolsContent() {
  return (
    <div className="container mx-auto py-8 px-4 min-h-[100vh]">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">EMS Protocols</h1>
        <p className="text-muted-foreground">
          Emergency Medical Services dispatch protocols with determinant codes
          and response priorities.
        </p>

        <div className="mt-4 p-4 bg-muted/30 rounded-xs">
          <h3 className="font-semibold text-sm mb-2">Priority Color Legend:</h3>
          <div className="flex flex-wrap gap-2">
            {Object.entries(priorityNames).map(([key, name]) => (
              <Badge
                key={key}
                className={`${priorityColors[key as keyof typeof priorityColors]} rounded-xs`}
              >
                {key} - {name}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {emsProtocols.map((protocol) => (
          <ProtocolCard key={protocol.protocol} protocol={protocol} />
        ))}
      </div>
    </div>
  );
}
