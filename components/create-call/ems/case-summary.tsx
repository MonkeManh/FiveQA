import { ConfirmDispatchModal } from "@/components/modals/confirm-dispatch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { getEMSPlan } from "@/data/plans/ems/emsPlans";
import { emsProtocols } from "@/data/protocols";
import { processQuestionText } from "@/lib/utils";
import { IEMSCase, ISavedNewCall } from "@/models/interfaces";
import { CircleArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

interface IEMSCaseSummaryProps {
  initialCall: ISavedNewCall | null;
  emsCase: IEMSCase;
  setEMSCase: React.Dispatch<React.SetStateAction<IEMSCase>>;
  setActiveTab: React.Dispatch<
    React.SetStateAction<
      "entry" | "kq" | "pdi-cei" | "dls" | "summary" | "send"
    >
  >;
  handleEMSDispatchChange: (
    field: keyof IEMSCase["dispatch"],
    value: string | number | boolean
  ) => void;
}

export default function EMSCaseSummary({
  initialCall,
  emsCase,
  setEMSCase,
  setActiveTab,
  handleEMSDispatchChange,
}: IEMSCaseSummaryProps) {
  const [isDispatchEarlyModalOpen, setDispatchEarlyModalOpen] = useState(false);

  const handleEMSCaseChange = (
    field: keyof IEMSCase,
    value: string | number | boolean
  ) => {
    setEMSCase((prev) => ({
      ...prev,
      [field]: value,
    }));
    localStorage.setItem(
      "NEW_CALL",
      JSON.stringify({
        ...initialCall,
        ems_case: { ...emsCase, [field]: value },
      })
    );
  };

  const handleSummaryClick = () => {
    if (emsCase.case_stage === "entry") {
      handleEMSCaseChange("case_stage", "kq");
      setActiveTab("kq");
      // Copy the summary text to the clipboard
      navigator.clipboard.writeText(emsCase.dispatch.summary);
      toast.success("Initial case copied to clipboard.");
    } else if (emsCase.case_stage === "kq" && !emsCase.questions.is_completed) {
      setDispatchEarlyModalOpen(true);
    } else {
      handleEMSCaseChange("case_stage", "pdi-cei");
      setActiveTab("pdi-cei");
    }
  };

  const handleSummaryKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    // If the key is right arrow, run createCall()
    if (e.key === "ArrowRight") {
      e.preventDefault();
      handleSummaryClick();
    }
  };

  function titleCase(s: string) {
    return s.replace(
      /(^|[ \t/_-])([a-z])/g,
      (_, sep, c) => sep + c.toUpperCase()
    );
  }

  const computedSummary = useMemo(() => {
    if (!initialCall) return "";

    const temp_caller_type = emsCase.case_entry.patient.caller_type;
    const caller_type =
      temp_caller_type === "first"
        ? "First Pty - "
        : temp_caller_type === "first-alone"
        ? "First Pty Alone -  "
        : temp_caller_type === "yes"
        ? ""
        : temp_caller_type === "no"
        ? "Third Pty - "
        : temp_caller_type === "fourth"
        ? "Fourth Pty - "
        : "Unk Caller - ";

    const count = emsCase.case_entry.patient.count;
    const age =
      emsCase.case_entry.patient.age !== 0
        ? emsCase.case_entry.patient.age
        : "Unk";
    const ageUnit = emsCase.case_entry.patient.age_unit;
    const gender =
      emsCase.case_entry.patient.gender.charAt(0).toUpperCase() +
      emsCase.case_entry.patient.gender.slice(1);

    const tc = emsCase.case_entry.patient.consciousness;
    const consciousness =
      tc === "yes"
        ? "Conscious"
        : tc === "no"
        ? "Unconscious"
        : "Unk Consciousness";

    const tb = emsCase.case_entry.patient.breathing;
    const breathing =
      tb === "yes"
        ? "Breathing"
        : tb === "no"
        ? "Not Breathing"
        : tb === "uncertain"
        ? "Uncertain Breathing"
        : "Unk Breathing";

    const patientInfo = `${caller_type}${
      count > 1
        ? `${count}x Patients`
        : `${age}-${ageUnit}-old, ${gender}, ${consciousness}, ${breathing}`
    }`;

    const callerInfo = initialCall.case_entry.caller_name
      ? `${initialCall.case_entry.isLocalCaller ? "Local " : ""}Caller: ${
          initialCall.case_entry.caller_name || "Unknown"
        } | Phone: ${initialCall.case_entry.caller_number || "Unknown"}`
      : "";

    const protocol = emsProtocols.find(
      (c) =>
        c.protocol === Math.floor(Number(emsCase?.case_entry?.chief_complaint))
    );

    const codeMatch = protocol?.determinants
      .flatMap((d) => d.codes)
      .find((c) => c.code === emsCase.codes.selected_code);

    const subCodeMatch =
      emsCase.codes.selected_suffix && codeMatch?.suffixes
        ? codeMatch.suffixes.find(
            (s) => s.suffix === emsCase.codes.selected_suffix
          )
        : null;

    const response = subCodeMatch?.recResponse ?? codeMatch?.recResponse;
    const responsePlan = getEMSPlan(response || protocol?.defaultPlan || 1);
    const shouldSendPolice = !!responsePlan?.sendPolice;
    const shouldSendFire = !!responsePlan?.sendFire;

    const responseUnits =
      [
        ...(responsePlan?.units?.map((u) => {
          const unitType = u.type;

          if (unitType === "Police Notification") return "PD Notify";
          if (unitType === "OFI Notification") return "OFI Notify";
          if (unitType === "Fire Notification") return "Fire Notify";
          if (unitType === "EMS Notification") return "EMS Notify";
          if (unitType === "MEO Notification") return "MEO Notify";

          return `${u.quantity}x ${unitType}`;
        }) || []),
        ...(responsePlan?.sendPolice ? ["PD Notify"] : []),
        ...(responsePlan?.sendFire ? ["Fire Notify"] : []),
      ].join(", ") || "No Response Units";

    const text = [
      `Location: ${initialCall.case_entry.location}, ${
        initialCall.case_entry.city
      } ${
        initialCall.case_entry.loc_name &&
        `- ${initialCall.case_entry.loc_name}`
      }`,
      `Cross: ${initialCall.case_entry.cross_streets}`,
      callerInfo,
      "==============================",
      patientInfo,
      `CC Text: ${
        emsProtocols.find(
          (c) => c.protocol === emsCase.case_entry.initial_complaint
        )?.name
      }`,
      `Caller Statement: ${emsCase.case_entry.caller_statement}`,
      emsCase.codes.selected_code &&
        `Code: ${emsCase.codes.selected_code}${
          emsCase.codes.selected_suffix && emsCase.codes.selected_suffix
        }\nCode Text: ${
          codeMatch?.text !== undefined
            ? `${processQuestionText(codeMatch.text)}`
            : ""
        }`,
      emsCase.codes.selected_suffix &&
        `Suffix Text:${
          emsCase.codes.selected_suffix
            ? `${
                subCodeMatch?.text
                  ? ` - ${processQuestionText(subCodeMatch?.text)}`
                  : ""
              }`
            : ""
        }`,
      emsCase.questions.list.length > 0 &&
        `========== Answers ===========\n${emsCase.questions.list
          .filter((a) => a.answer_display)
          .slice()
          .sort((a, b) => {
            const weight = (p?: number) =>
              p === 1 ? 0 : p === 2 ? 1 : p === 3 ? 2 : 3;
            return weight(a.priority) - weight(b.priority);
          })
          .map((a) => `-- ${a.answer_display}`)
          .join("\n")}\n==============================`,
      `Recc: ${responseUnits}`,
      `Disp: Pending`,
      `Scene Status: ${
        emsCase.dispatch.scene_status === "secure" ? "Secure" : "!!Not Secure!!"
      } | Command: Not Established`,
      `Operations Channel: ${titleCase(
        emsCase.dispatch.channel
      )} | Staging Loc: ${emsCase.dispatch.staging_location}`,
    ]
      .flat()
      .filter(Boolean)
      .join("\n");

    return text;
  }, [
    // Only the fields that actually affect the summary:
    initialCall?.case_entry.location,
    initialCall?.case_entry.loc_name,
    initialCall?.case_entry.cross_streets,
    initialCall?.case_entry.caller_name,
    initialCall?.case_entry.caller_number,
    initialCall?.case_entry.isLocalCaller,
    emsCase.dispatch.scene_status,
    emsCase.dispatch.channel,
    emsCase.dispatch.staging_location,
    emsCase.case_entry.patient.caller_type,
    emsCase.case_entry.patient.count,
    emsCase.case_entry.patient.age,
    emsCase.case_entry.patient.age_unit,
    emsCase.case_entry.patient.gender,
    emsCase.case_entry.patient.consciousness,
    emsCase.case_entry.patient.breathing,
    emsCase.case_entry.initial_complaint,
    emsCase.case_entry.caller_statement,
    emsCase.questions.list,
  ]);

  useEffect(() => {
    if (emsCase.case_stage === "entry") return;
    if (emsCase.dispatch.summary !== computedSummary) {
      handleEMSDispatchChange("summary", computedSummary);
    }
    // Do NOT setActiveTab here—doing so on every render can also cause loops.
  }, [emsCase.case_stage, computedSummary]);

  return (
    <>
      <header>
        <h2 className="text-xl font-bold mb-4">
          {emsCase.case_stage === "entry"
            ? "Initial Dispatch"
            : "Dispatch Summary"}
        </h2>
      </header>

      {emsCase.case_stage !== "entry" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Scene Status */}
          <div className="space-y-2">
            <Label>Scene Status</Label>
            <Select
              value={
                emsCase.dispatch.scene_status === "secure"
                  ? "secure"
                  : "not secure"
              }
              onValueChange={(value) => {
                const status = value === "secure" ? "secure" : "not secure";
                handleEMSDispatchChange("scene_status", status);
              }}
              defaultValue={emsCase.dispatch.scene_status}
            >
              <SelectTrigger className="w-full rounded-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="secure">Secure</SelectItem>
                <SelectItem value="not secure">Not Secure</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Channel */}
          <div className="space-y-2">
            <Label>Channel</Label>
            <Select
              value={emsCase.dispatch.channel}
              onValueChange={(value) => {
                handleEMSDispatchChange("channel", value);
              }}
              defaultValue={emsCase.dispatch.channel}
            >
              <SelectTrigger className="w-full rounded-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="statewide dispatch">Statewide</SelectItem>
                <SelectItem value="los santos dispatch">Los Santos</SelectItem>
                <SelectItem value="blaine county dispatch">
                  Blaine County
                </SelectItem>
                <SelectItem value="tac 1">Tac 1</SelectItem>
                <SelectItem value="tac 2">Tac 2</SelectItem>
                <SelectItem value="fire dispatch">Fire Dispatch</SelectItem>
                <SelectItem value="fire tac 1">Fire Tac 1</SelectItem>
                <SelectItem value="fire tac 2">Fire Tac 2</SelectItem>
                <SelectItem value="fire tac 3">Fire Tac 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Staging Location */}
          <div className="space-y-2">
            <Label>Staging Location</Label>
            <Input
              value={emsCase.dispatch.staging_location}
              onChange={(e) =>
                handleEMSDispatchChange("staging_location", e.target.value)
              }
              placeholder="Enter staging location"
              className="w-full rounded-xs"
            />
          </div>
        </div>
      )}
      <Textarea
        value={emsCase.dispatch?.summary}
        onChange={(e) => handleEMSDispatchChange("summary", e.target.value)}
        className="w-full min-h-[500px] font-mono text-sm p-4 border rounded-xs resize-none auto-expand mt-8"
        style={{ resize: "none" }}
        spellCheck={false}
        readOnly
      />
      <div className="flex justify-end space-x-2 pt-2">
        <Button
          variant="outline"
          className="cursor-pointer focus:outline-none rounded-xs"
          autoFocus
          onClick={() => handleSummaryClick()}
          onKeyDown={handleSummaryKeyDown}
        >
          {emsCase.case_stage === "entry"
            ? "Begin Key Questions"
            : "Dispatch Units"}
          <CircleArrowRight className="h-4 w-4 text-green-500" />
        </Button>
      </div>
      <ConfirmDispatchModal
        isOpen={isDispatchEarlyModalOpen}
        onOpenChange={setDispatchEarlyModalOpen}
        onConfirm={(isDispatchingEarly) => {
          setDispatchEarlyModalOpen(false);
        }}
      />
    </>
  );
}
