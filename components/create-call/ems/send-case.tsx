import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { emsPlans } from "@/data/plans";
import { getEMSPlan } from "@/data/plans/ems/emsPlans";
import { emsProtocols } from "@/data/protocols";
import { isSameOrHigherPriority } from "@/lib/emsCaseHelpers";
import { IEMSCase, IEMSProtocol, ISavedNewCall } from "@/models/interfaces";
import {
  ArrowLeft,
  ArrowRight,
  ChartPie,
  CircleArrowRight,
} from "lucide-react";
import React, { useCallback } from "react";

interface ISendEMSCaseProps {
  initialCall: ISavedNewCall | null;
  emsCase: IEMSCase;
  codeSendingNow: string | null;
  setEMSCase: React.Dispatch<React.SetStateAction<IEMSCase>>;
  setActiveTab: React.Dispatch<
    React.SetStateAction<
      "entry" | "kq" | "pdi-cei" | "dls" | "summary" | "send"
    >
  >;
}

const colorDictionary: Record<string, string> = {
  O: "text-slate-500",
  A: "text-emerald-600",
  B: "text-blue-500",
  C: "text-amber-700",
  D: "text-red-500",
  E: "text-purple-500",
};

export default function SendEMSCase({
  initialCall,
  emsCase,
  codeSendingNow,
  setEMSCase,
  setActiveTab,
}: ISendEMSCaseProps) {
  const protocol = emsProtocols.find(
    (p) => p.protocol === Math.floor(Number(emsCase.case_entry.chief_complaint))
  );
  if (!protocol) return <div>Couldn't find protocol</div>;
  const tableRows = protocol.determinants.flatMap((det) =>
    det.codes.map((c, i) => ({
      priority: i === 0 ? det.priority : null,
      code: c.code,
      text: c.text,
      plan: c.recResponse,
      isFirstInPriority: i === 0,
    }))
  );

  const handleBack = useCallback(() => {
    setActiveTab("kq");
  }, [setActiveTab]);

  const handleSend = useCallback(() => {
    const date = new Date().toISOString();

    setEMSCase((prev) => ({
      ...prev,
      codes: {
        ...prev.codes,
        selected_code: codeSendingNow
          ? codeSendingNow
          : prev.codes.selected_code,
        code_sent_at_time: date,
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
            selected_code: codeSendingNow
              ? codeSendingNow
              : emsCase.codes.selected_code,
            code_sent_at_time: date,
          },
        },
      })
    );

    setActiveTab("kq");
  }, [setEMSCase, codeSendingNow]);

  const getRecResponseForCode = (
    codeString: string,
    suffix?: string
  ): number => {
    // Find the code object in the protocol determinants
    const codeObj = protocol.determinants
      .flatMap((det) => det.codes)
      .find((code) => code.code === codeString);

    if (!codeObj) return 1; // Default fallback

    // If we have a suffix and the code has suffixes, look for the suffix
    if (suffix && suffix !== "DEFAULT_SUFFIX" && codeObj.suffixes) {
      const subCode = codeObj.suffixes.find((sub) => sub.suffix === suffix);
      if (subCode && subCode.recResponse !== undefined) {
        return subCode.recResponse;
      }
    }

    // Return the default recResponse for the code
    return codeObj.recResponse;
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-5 gap-4">
        {emsCase.questions.is_completed ? (
          <div className="col-span-3"></div>
        ) : (
          <>
            <Button
              className="col-span-2 rounded-xs"
              variant="outline"
              onClick={() => {
                alert("Delay Send & continue clicked");
              }}
            >
              <ChartPie className="w-6 h-6 text-red-500" />
              Delay Send & continue
            </Button>
            <Button
              variant="outline"
              onClick={handleBack}
              className="rounded-xs"
            >
              <ArrowLeft className="w-6 h-6 text-red-500" />
            </Button>
          </>
        )}

        <Button
          className="col-span-2 rounded-xs focus:ring-2 focus:ring-blue-500"
          variant="outline"
          onClick={() => {
            handleSend();
          }}
        >
          {codeSendingNow === emsCase.codes.selected_code ? (
            <>Confirm</>
          ) : emsCase.codes.selected_code !== "DEFAULT_CODE" &&
            emsCase.codes.code_sent_at_time ? (
            <>Reconfigure</>
          ) : (
            <>Send</>
          )}
          :{" "}
          {codeSendingNow &&
            `${parseInt(
              codeSendingNow.slice(0, 2),
              10
            )}-${codeSendingNow.charAt(2)}-${parseInt(
              codeSendingNow.slice(3),
              10
            )}${
              emsCase.codes.selected_suffix &&
              emsCase.codes.selected_suffix !== "DEFAULT_SUFFIX"
                ? `${emsCase.codes.selected_suffix}`
                : ""
            }`}
          <CircleArrowRight className="w-6 h-6 text-green-500" />
        </Button>
      </div>
      <div className="relative w-full">
        {/* Left vertical label */}
        <div className="absolute inset-y-0 left-0 w-8 flex items-center justify-center pointer-events-none select-none">
          <p className="text-center rotate-270 whitespace-nowrap">KQ Answers</p>
        </div>

        {/* Content with left gutter so it doesn't overlap the label */}
        <div className="w-full pl-8">
          <div className="bg-muted/20 rounded-xs border space-y-1 cursor-default w-full h-full pl-4 py-1 min-h-[150px]">
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
                      className="flex items-center gap-2 rounded-xs p-1 last:mb-10"
                      key={i}
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
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="bg-muted/20 w-full rounded-xs">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-4">
                <th
                  className="text-left px-4 font-semibold text-muted-foreground"
                  colSpan={2}
                >
                  Determinants
                </th>
                {/* Match thickness with body column divider */}
                <th className="text-left px-4 font-semibold text-muted-foreground border-l-2">
                  Responses
                </th>
              </tr>
            </thead>

            {/* Add vertical padding to all cells, plus extra top padding on first row */}
            <tbody className="[&>tr>td]:py-1.5 [&>tr:first-child>td]:pt-3">
              {tableRows.map((row, index) => {
                const isRecommended = row.code === codeSendingNow;
                // Allows for overrides and ensures the code is in the selectable list if not an override.
                const isSelectable =
                  isSameOrHigherPriority(codeSendingNow || "", row.code) &&
                  (emsCase.codes.selectable_codes.includes(row.code) ||
                    row.code.endsWith("00"));

                return (
                  <tr
                    key={index}
                    className={
                      isRecommended
                        ? "bg-green-600 text-black cursor-pointer hover:bg-green-700"
                        : isSelectable
                        ? "bg-yellow-600 text-black cursor-pointer hover:bg-yellow-700"
                        : "text-muted-foreground cursor-default   "
                    }
                  >
                    <td className="px-2 w-12">
                      {row.priority && (
                        <span
                          className={`ml-4 font-bold ${
                            colorDictionary[row.priority]
                          }`}
                        >
                          {row.priority}
                        </span>
                      )}
                    </td>
                    <td className="px-2 flex gap-2 items-center">
                      {parseInt(row.code.slice(-2), 10)} {row.text}
                    </td>
                    {/* Continuous vertical rule preserved with collapsed borders */}
                    <td className="px-2 border-l-4 text-left">
                      {getEMSPlan(
                        getRecResponseForCode(
                          row.code,
                          emsCase.codes.selected_suffix
                        )
                      )?.name || "Not Found"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
