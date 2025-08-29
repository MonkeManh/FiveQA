import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Combobox } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getHelpContent } from "@/lib/emsCaseHelpers";
import { calculateAgeFromDate, formatPhoneNumber } from "@/lib/utils";
import { IEMSCase, ISavedNewCall } from "@/models/interfaces";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { TestCaseModal } from "@/components/modals/test-case-modal";
import { emsProtocols, getEMSProtocols } from "@/data/protocols/emsProtocols";

interface IEMSCaseEntryProps {
  initialCall: ISavedNewCall | null;
  setInitialCall: React.Dispatch<React.SetStateAction<ISavedNewCall | null>>;
  emsCase: IEMSCase;
  setEMSCase: React.Dispatch<React.SetStateAction<IEMSCase>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isInitialLoad: boolean;
  userInitiatedChange: string | null;
  setUserInitiatedChange: React.Dispatch<React.SetStateAction<string | null>>;
  handleEMSDispatchChange: (
    field: keyof IEMSCase["dispatch"],
    value: string | number | boolean
  ) => void;
  setActiveTab: React.Dispatch<
    React.SetStateAction<
      "entry" | "kq" | "pdi-cei" | "dls" | "summary" | "send"
    >
  >;
}

export default function EMSCaseEntry({
  initialCall = null,
  emsCase,
  isInitialLoad,
  userInitiatedChange,
  setInitialCall,
  setEMSCase,
  setIsLoading,
  setUserInitiatedChange,
  handleEMSDispatchChange,
  setActiveTab,
}: IEMSCaseEntryProps) {
  const [focusedInput, setFocusedInput] = useState<string>("");
  const [focusedField, setFocusedField] = useState<string>("");
  const [tempAge, setTempAge] = useState<string>("");
  // Add state to control the age unit select dropdown
  const [isAgeUnitSelectOpen, setIsAgeUnitSelectOpen] = useState(false);
  const [isGenderSelectOpen, setIsGenderSelectOpen] = useState(false);
  const [isConsciousnessSelectOpen, setIsConsciousnessSelectOpen] =
    useState(false);
  const [isBreathingSelectOpen, setIsBreathingSelectOpen] = useState(false);
  const [isTestModalOpen, setIsTestModalOpen] = useState(false);
  const [pendingTestCheck, setPendingTestCheck] = useState(false);
  const callerNumberRef = useRef<HTMLInputElement>(null);
  const callerStatmentRef = useRef<HTMLInputElement>(null);
  const callerLocationRef = useRef<HTMLButtonElement>(null);
  const numPatientsRef = useRef<HTMLInputElement>(null);
  const patient_ageRef = useRef<HTMLInputElement>(null);
  const patient_ageUnitRef = useRef<HTMLButtonElement>(null);
  const patientGenderRef = useRef<HTMLButtonElement>(null);
  const patientConsciousnessRef = useRef<HTMLButtonElement>(null);
  const patientBreathingRef = useRef<HTMLButtonElement>(null);
  const chiefComplaintRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const sortedComplaintOptions = useMemo(() => {
    const allComplaints = getEMSProtocols();

    const breathing = emsCase.case_entry.patient.breathing;
    const consciousness = emsCase.case_entry.patient.consciousness;

    const highLight = (complaints: number[]) => {
      const priority = allComplaints.filter((c) =>
        complaints.includes(c.value)
      );
      const others = allComplaints.filter((c) => !complaints.includes(c.value));

      priority.sort(
        (a, b) => complaints.indexOf(a.value) - complaints.indexOf(b.value)
      );

      const priorityOptions = priority.map((c) => ({
        value: c.value,
        label: c.label,
        subOptions: c.subOptions,
        className: "bg-red-500/20 hover:bg-red-500/40 transition-colors",
      }));

      const otherOptions = others.map((c) => ({
        value: c.value,
        label: c.label,
      }));

      return [...priorityOptions, ...otherOptions];
    };

    if (breathing === "no" || breathing === "agonal/ineffective") {
      return highLight([9, 11, 12, 14, 15]);
    }

    if (consciousness === "no") {
      return highLight([31, 9, 11, 12, 14, 15]);
    }

    return allComplaints.map((c) => ({
      value: c.value,
      label: c.label,
      subOptions: c.subOptions,
    }));
  }, [
    emsCase.case_entry.patient.breathing,
    emsCase.case_entry.patient.consciousness,
  ]);

  useEffect(() => {
    const storedInitialCall = localStorage.getItem("NEW_CALL");
    if (storedInitialCall) {
      const parsedInitialCall = JSON.parse(storedInitialCall) as ISavedNewCall;
      if (parsedInitialCall.case_entry) {
        setInitialCall(parsedInitialCall);
      }
      if (parsedInitialCall.ems_case) {
        setEMSCase(parsedInitialCall.ems_case);
        if (parsedInitialCall.ems_case.case_entry?.patient?.age) {
          setTempAge(
            parsedInitialCall.ems_case.case_entry.patient.age.toString()
          );
        }
      } else {
        // Set the start time for the EMS case entry
        setEMSCase((prev) => ({
          ...prev,
          case_entry: {
            ...prev.case_entry,
            page_opened_time: new Date().toISOString(),
          },
        }));
        localStorage.setItem(
          "NEW_CALL",
          JSON.stringify({
            ...parsedInitialCall,
            ems_case: {
              ...emsCase,
              case_entry: {
                ...emsCase.case_entry,
                page_opened_time: new Date().toISOString(),
              },
            },
          })
        );
      }
    } else {
      router.push("/create-call");
      toast.error("No initial call data found. Please start a new call.");
    }
    setIsLoading(false);
  }, [router]);

  const handlePhoneNumberChange = (value: string) => {
    setInitialCall((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        case_entry: {
          ...prev.case_entry,
          caller_number: value,
        },
      };
    });
    localStorage.setItem(
      "NEW_CALL",
      JSON.stringify({
        ...initialCall,
        case_entry: {
          ...initialCall?.case_entry,
          caller_number: value,
        },
      })
    );
  };

  const handleEMSCaseEntryChange = (
    field: keyof IEMSCase["case_entry"],
    value: string | number | boolean,
    userInitiated: boolean = false
  ) => {
    setEMSCase((prev) => ({
      ...prev,
      case_entry: {
        ...prev.case_entry,
        [field]: value,
      },
    }));
    localStorage.setItem(
      "NEW_CALL",
      JSON.stringify({
        ...initialCall,
        ems_case: {
          ...emsCase,
          case_entry: { ...emsCase.case_entry, [field]: value },
        },
      })
    );

    // Track user-initiated changes for auto-navigation
    if (userInitiated && !isInitialLoad) {
      setUserInitiatedChange(field);
      // Clear the flag after a short delay
      setTimeout(() => setUserInitiatedChange(null), 100);
    }
  };

  const handleEMSPatientChange = (
    field: keyof IEMSCase["case_entry"]["patient"],
    value: string | number,
    userInitiated: boolean = false
  ) => {
    setEMSCase((prev) => ({
      ...prev,
      case_entry: {
        ...prev.case_entry,
        patient: {
          ...prev.case_entry.patient,
          [field]: value,
        },
      },
    }));
    localStorage.setItem(
      "NEW_CALL",
      JSON.stringify({
        ...initialCall,
        ems_case: {
          ...emsCase,
          case_entry: {
            ...emsCase.case_entry,
            patient: { ...emsCase.case_entry.patient, [field]: value },
          },
        },
      })
    );

    // Track user-initiated changes for auto-navigation
    if (userInitiated && !isInitialLoad) {
      setUserInitiatedChange(field);
      // Clear the flag after a short delay
      setTimeout(() => setUserInitiatedChange(null), 100);
    }
  };

  const getLabelText = (field: string, isFocused: boolean) => {
    const labels: Record<string, { normal: string; focused: string }> = {
      caller_statement: {
        normal: "Caller's problem description is:",
        focused: "Okay, tell me exactly what happened:",
      },
      caller_type: {
        normal: "With patient now:",
        focused: "Are you with the patient now?",
      },
      patient_count: {
        normal: "The number of hurt/sick is:",
        focused: "How many people are hurt (sick)?",
      },
      patient_age: {
        normal: "The patient's age is:",
        focused: "How old is the patient?",
      },
      gender: {
        normal: "The patient's gender is:",
        focused: "Is the patient a male or female?",
      },
      consciousness: {
        normal: `Is ${
          emsCase?.case_entry?.patient?.gender === "male"
            ? "he"
            : emsCase?.case_entry?.patient?.gender === "female"
            ? "she"
            : "he"
        } awake (conscious)?`,
        focused: "Is the patient awake (conscious)?",
      },
      breathing: {
        normal: `Is ${
          emsCase?.case_entry?.patient?.gender === "male"
            ? "he"
            : emsCase?.case_entry?.patient?.gender === "female"
            ? "she"
            : "he"
        } breathing?`,
        focused: "Is the patient breathing?",
      },
      chief_complaint: {
        normal: "The Chief Complaint is:",
        focused: "Chief Complaint Code:",
      },
    };

    return isFocused ? labels[field]?.focused : labels[field]?.normal;
  };

  const handleCompleteCaseEntry = async () => {
    if (!initialCall)
      return toast.error(
        "No initial call data found. Please start a new call."
      );

    if (emsCase.case_stage === "kq") return setActiveTab("kq");

    handleEMSCaseEntryChange(
      "chief_complaint",
      emsCase?.case_entry.initial_complaint
    );

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
        : tb === "unknown"
        ? "Unk Breathing"
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
    ]
      .flat()
      .filter(Boolean)
      .join("\n");
    await handleEMSDispatchChange("summary", text);
    setActiveTab("summary");
  };

  // Focus on caller statement after phone
  useEffect(() => {
    if (
      initialCall?.case_entry.caller_number &&
      initialCall.case_entry.caller_number.length >= 14 &&
      !isInitialLoad
    ) {
      callerStatmentRef.current?.focus();
    }
  }, [initialCall?.case_entry.caller_number, isInitialLoad]);

  // After caller type -> number of patients
  useEffect(() => {
    if (userInitiatedChange === "caller_type") {
      setTimeout(() => {
        numPatientsRef.current?.focus();
        numPatientsRef.current?.select();
      }, 50);
    }
  }, [userInitiatedChange]);

  // After age unit -> gender
  useEffect(() => {
    if (userInitiatedChange === "age_unit") {
      setTimeout(() => {
        numPatientsRef.current?.focus();
        numPatientsRef.current?.select();
      }, 50);
    }
  }, [userInitiatedChange]);

  // Gender -> open consciousness
  useEffect(() => {
    if (userInitiatedChange === "gender") {
      setTimeout(() => {
        patientConsciousnessRef.current?.click();
      }, 50);
    }
  }, [userInitiatedChange]);

  // Consciousness -> open breathing
  useEffect(() => {
    if (userInitiatedChange === "consciousness") {
      setTimeout(() => {
        patientBreathingRef.current?.click();
      }, 50);
    }
  }, [userInitiatedChange]);

  // Breathing -> open chief complaint
  useEffect(() => {
    if (userInitiatedChange === "breathing") {
      setTimeout(() => {
        chiefComplaintRef.current?.click();
      }, 50);
    }
  }, [userInitiatedChange]);

  const onCallerTypeHotKey = useCallback((e: React.KeyboardEvent) => {
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
      active.dispatchEvent(new KeyboardEvent("keydown", evtInit));
    }
  }, []);

  // Hotkey for Age Unit select
  const onAgeUnitHotKey = useCallback(
    (e: React.KeyboardEvent) => {
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
      const map: Record<string, "year" | "month" | "day"> = {
        y: "year",
        m: "month",
        d: "day",
      };
      const next = map[key];
      if (next) {
        e.preventDefault();
        handleEMSPatientChange("age_unit", next, true);
        setIsAgeUnitSelectOpen(false);
        setTimeout(() => {
          alert("Hello 2");
          patientGenderRef?.current?.click();
        }, 50);
      }
    },
    [handleEMSPatientChange]
  );

  // Hotkey for Gender select
  const onGenderHotKey = useCallback(
    (e: React.KeyboardEvent) => {
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
      const map: Record<string, "male" | "female" | "unknown"> = {
        m: "male",
        f: "female",
        u: "unknown",
      };
      const value = map[key];
      if (value) {
        e.preventDefault();
        handleEMSPatientChange("gender", value, true);
        setIsGenderSelectOpen(false);
        setTimeout(() => {
          patientConsciousnessRef.current?.click();
        }, 100);
      }
    },
    [handleEMSPatientChange]
  );

  // Hotkey for Consciousness select
  const onConsciousnessHotKey = useCallback(
    (e: React.KeyboardEvent) => {
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
      const map: Record<string, "yes" | "no" | "unknown"> = {
        y: "yes",
        n: "no",
        u: "unknown",
      };
      const value = map[key];
      if (value) {
        e.preventDefault();
        handleEMSPatientChange("consciousness", value, true);
        setIsConsciousnessSelectOpen(false);
        setTimeout(() => {
          patientBreathingRef.current?.click();
        }, 100);
      }
    },
    [handleEMSPatientChange]
  );

  // Hotkey for Breathing select
  const onBreathingHotKey = useCallback(
    (e: React.KeyboardEvent) => {
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
      let value: string | undefined;

      if (key === "y") value = "yes";
      else if (key === "n") value = "no";
      else if (key === "i" || key === "a") value = "agonal/ineffective";
      else if (key === "u") {
        // Determine the appropriate value based on caller type
        const callerType = emsCase.case_entry?.patient?.caller_type;
        if (callerType === "yes") {
          value = "uncertain";
        } else if (callerType === "fourth" || callerType === "no") {
          value = "unknown";
        } else {
          value = "unknown"; // Default
        }
      }

      if (value) {
        e.preventDefault();
        handleEMSPatientChange("breathing", value, true);
        setIsBreathingSelectOpen(false);
        setTimeout(() => {
          chiefComplaintRef.current?.click();
        }, 100);
      }
    },
    [handleEMSPatientChange, emsCase.case_entry?.patient?.caller_type]
  );

  // Handle patient age keydown for "u" key (unknown)
  const handlePatientAgeKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key.toLowerCase() === "u") {
        e.preventDefault();
        setTempAge("Unknown");
        handleEMSPatientChange("age", 0, true);
        handleEMSPatientChange("age_unit", "unk", true);
        // Move focus to the next field
        setTimeout(() => {
          patientGenderRef.current?.click();
        }, 100);
      }
      if ((e.nativeEvent as any).isComposing) return;
      if (
        e.key !== "ArrowRight" ||
        e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey
      )
        return;

      const el = e.currentTarget;
      const { selectionStart, selectionEnd, value } = el;

      if (
        selectionStart !== null &&
        selectionEnd !== null &&
        selectionStart === selectionEnd &&
        selectionEnd === value.length
      ) {
        e.preventDefault();
        patient_ageUnitRef.current?.click();
      }
    },
    [handleEMSPatientChange]
  );

  // Handle next button keydown (right arrow)
  const handleNextButtonKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        handleCompleteCaseEntry();
      }
    },
    [handleCompleteCaseEntry]
  );

  const handleSetTestCase = useCallback(
    (isTest: boolean) => {
      setInitialCall((prev) => {
        if (!prev) return null;
        return {
          ...prev,
          case_entry: {
            ...prev.case_entry,
            isTestCase: isTest,
          },
        };
      });

      localStorage.setItem(
        "NEW_CALL",
        JSON.stringify({
          ...initialCall,
          case_entry: {
            ...initialCall?.case_entry,
            isTestCase: isTest,
          },
        })
      );

      setIsTestModalOpen(false);
    },
    [initialCall, setInitialCall]
  );

  const checkForTestCase = useCallback(
    (statement: string) => {
      // Only set pendingTestCheck if the caller statement contains "test -"
      // AND this is not already marked as a test case
      if (
        statement.toLowerCase().includes("test -") &&
        initialCall?.case_entry.isTestCase === false
      ) {
        setPendingTestCheck(true);
      } else {
        setPendingTestCheck(false);
      }
    },
    [initialCall?.case_entry.isTestCase]
  );

  const handleCallerStatementKeyDown = useCallback<
    React.KeyboardEventHandler<HTMLInputElement>
  >((e) => {
    if ((e.nativeEvent as any).isComposing) return;
    if (
      e.key !== "ArrowRight" ||
      e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey
    )
      return;

    const el = e.currentTarget;
    const { selectionStart, selectionEnd, value } = el;

    if (
      selectionStart !== null &&
      selectionEnd !== null &&
      selectionStart === selectionEnd &&
      selectionEnd === value.length
    ) {
      e.preventDefault();
      callerLocationRef.current?.click();
    }
  }, []);

  const canEditCallerStatement = !!initialCall?.case_entry.caller_number;
  const canEditCallerType = !!emsCase.case_entry.caller_statement;
  const canEditNumPatients = !!emsCase.case_entry.patient.caller_type;
  const canEditPatientAge = !!emsCase.case_entry.patient.caller_type;
  const canEditPatientAgeUnit = !!tempAge;
  const canEditPatientGender = !!emsCase.case_entry.patient.age_unit;
  const canEditPatientConsciousness = !!emsCase.case_entry.patient.gender;
  const canEditPatientBreathing = !!emsCase.case_entry.patient.consciousness;
  const canEditChiefComplaint = !!emsCase.case_entry.patient.breathing;
  const canSubmitCaseEntry =
    canEditCallerStatement &&
    canEditCallerType &&
    canEditNumPatients &&
    canEditPatientAge &&
    canEditPatientAgeUnit &&
    canEditPatientGender &&
    canEditPatientConsciousness &&
    canEditPatientBreathing &&
    canEditChiefComplaint;

  return (
    <>
      {/* Initial Case Entry Stuff */}
      <div className="grid grid-cols-5 gap-4 items-center">
        {/* Call Location */}
        <div className="col-span-2 flex items-center justify-end">
          <Label className="text-sm font-medium">Location is:</Label>
        </div>
        <div className="col-span-3">
          <Input
            value={`${initialCall?.case_entry.location || ""}`}
            className="bg-gray-50 rounded-xs h-fit"
            disabled
          />
        </div>
        {/* Phone Number */}
        <div className="col-span-2 flex items-center justify-end">
          <Label className="text-sm font-medium">Phone number is:</Label>
        </div>
        <div className="col-span-3">
          <Input
            value={initialCall?.case_entry.caller_number || ""}
            onChange={(e) => {
              const formatted = formatPhoneNumber(e.target.value);
              handlePhoneNumberChange(formatted);
            }}
            onFocus={() => {
              setFocusedInput("caller_number");
              setFocusedField("caller_number");
            }}
            onBlur={() => setFocusedInput("")}
            autoFocus={!initialCall?.case_entry.caller_number}
            disabled={!!initialCall?.case_entry.caller_number}
            ref={callerNumberRef}
            className="bg-white rounded-xs h-fit"
          />
        </div>
        {/* Caller Statement */}
        <div className="col-span-2 flex items-center justify-end">
          <Label
            className={`text-sm ${
              focusedInput === "caller_statement" ? "font-bold" : "font-normal"
            }`}
          >
            {getLabelText(
              "caller_statement",
              focusedInput === "caller_statement"
            )}
          </Label>
        </div>
        <div className="col-span-3 relative flex items-start gap-4">
          {initialCall && initialCall.case_entry.isTestCase && (
            <p className="text-md text-destructive flex-1 whitespace-nowrap font-bold tracking-wide">
              **TEST CASE**
            </p>
          )}
          <Input
            value={emsCase.case_entry.caller_statement || ""}
            onChange={(e) => {
              const newValue = e.target.value;
              handleEMSCaseEntryChange("caller_statement", newValue);
              checkForTestCase(newValue);
            }}
            onFocus={() => {
              setFocusedInput("caller_statement");
              setFocusedField("caller_statement");
            }}
            onBlur={() => {
              setFocusedInput("");
              // Check if we need to show the test modal after blur
              if (pendingTestCheck) {
                setIsTestModalOpen(true);
                setPendingTestCheck(false);
              }
            }}
            autoFocus={
              initialCall?.case_entry.caller_number &&
              !emsCase.case_entry.caller_statement
                ? true
                : false
            }
            ref={callerStatmentRef}
            onKeyDown={handleCallerStatementKeyDown}
            className="rounded-xs h-fit"
            disabled={!canEditCallerStatement}
          />
          {/* Caller Statement Options Popup */}
          {focusedInput === "caller_statement" && (
            <div className="absolute top-full mt-2 left-0 z-50 w-80">
              <Card className="shadow-lg p-2 rounded-xs">
                <div className="rounded-xs ring-1 ring-inset ring-border">
                  <CardContent className="p-2">
                    {[
                      "Hanging (now)",
                      "Underwater",
                      "Verified COMPLETE obstruction (choking)",
                      "Strangulation",
                      "Suffocation",
                      "Sinking vehicle - Caller inside",
                      "Person on fire",
                    ].map((statement, index) => (
                      <p
                        key={index}
                        className="text-sm cursor-pointer p-1 rounded"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          handleEMSCaseEntryChange(
                            "caller_statement",
                            statement,
                            true
                          );
                          setFocusedInput("");
                          callerStatmentRef.current?.blur();
                          setTimeout(
                            () => callerLocationRef.current?.click(),
                            100
                          );
                        }}
                      >
                        {statement}
                      </p>
                    ))}
                  </CardContent>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>

      {/* Patient Information */}
      <div className="grid grid-cols-5 gap-4">
        {/* Caller Type */}
        <div className="col-span-2 flex items-center justify-end">
          <Label
            className={`text-sm ${
              focusedInput === "caller_type" ? "font-bold" : "font-normal"
            }`}
          >
            {getLabelText("caller_type", focusedInput === "caller_type")}
          </Label>
        </div>
        <div className="col-span-1">
          <Select
            value={emsCase.case_entry?.patient?.caller_type}
            onValueChange={(value) =>
              handleEMSPatientChange("caller_type", value, true)
            }
            onOpenChange={(open) => {
              if (open) {
                setFocusedInput("caller_type");
                setFocusedField("caller_type");
              } else {
                setFocusedInput("");
              }
            }}
            disabled={!canEditCallerType}
          >
            <SelectTrigger
              className="w-full rounded-xs"
              size="fit"
              ref={callerLocationRef}
              onFocus={() => {
                //
                setFocusedInput("caller_type");
                setFocusedField("caller_type");
              }}
              onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
                if (e.key === "ArrowRight") {
                  e.preventDefault();
                  callerLocationRef.current?.click();
                }
              }}
            >
              <SelectValue className="h-fit" />
            </SelectTrigger>

            <SelectContent
              className="rounded-xs h-fit"
              onKeyDown={onCallerTypeHotKey}
            >
              <SelectItem className="rounded-xs" value="yes">
                Yes
              </SelectItem>
              <SelectItem className="rounded-xs" value="no">
                No
              </SelectItem>
              <SelectItem className="rounded-xs" value="first">
                First (1st) party
              </SelectItem>
              <SelectItem className="rounded-xs" value="first-alone">
                First (1st) party alone
              </SelectItem>
              <SelectItem className="rounded-xs" value="fourth">
                Fourth (4th) party
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Helper Box */}
        <div className="col-span-2 row-span-6">
          <Card className="h-fit-content rounded-lg">
            <CardHeader>
              <CardTitle className="text-lg">
                {getHelpContent(focusedField).title}
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-[-1rem]">
              <CardDescription className="text-sm">
                {getHelpContent(focusedField).description}
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        {/* Number of Patients */}
        <div className="col-span-2 flex items-center justify-end">
          <Label
            className={`text-sm ${
              focusedInput === "patient_count" ? "font-bold" : "font-normal"
            }`}
          >
            {getLabelText("patient_count", focusedInput === "patient_count")}
          </Label>
        </div>
        <div className="col-span-1">
          <Input
            type="text"
            value={emsCase?.case_entry?.patient?.count?.toString()}
            onChange={(e) => {
              // Clean the input to allow only numbers
              const value = e.target.value.replace(/[^0-9]/g, "");
              handleEMSPatientChange("count", value, false);
            }}
            onFocus={() => {
              setFocusedInput("patient_count");
              setFocusedField("patient_count");
            }}
            // disabled={!canEditNumPatients}
            ref={numPatientsRef}
            className="rounded-xs h-fit"
            onBlur={() => {
              // If the current value is 0, set it to 1
              if (emsCase?.case_entry?.patient?.count === 0) {
                handleEMSPatientChange("count", "1", false);
              }
            }}
            disabled={!canEditNumPatients}
          />
        </div>
        {/* Patient Age */}
        <div className="col-span-2 flex items-center justify-end">
          <Label
            className={`text-sm ${
              focusedInput === "patient_age" ? "font-bold" : "font-normal"
            }`}
          >
            {getLabelText("patient_age", focusedInput === "patient_age")}
          </Label>
        </div>

        <div className="col-span-1">
          <div className="flex gap-2">
            <Input
              value={tempAge}
              onChange={(e) => {
                setTempAge(e.target.value);
              }}
              onFocus={() => {
                setFocusedInput("patient_age");
                setFocusedField("patient_age");
              }}
              onKeyDown={handlePatientAgeKeyDown}
              onBlur={() => {
                const input = tempAge.trim();

                // If the value is "Unknown", keep it as is
                if (input.toLowerCase() === "unknown") {
                  return;
                }

                const isLikelyDate =
                  /[/-]/.test(input) ||
                  /^\d{4}$/.test(input) ||
                  /^\d{1,2}[/-]\d{1,2}[/-]?\d{0,4}$/.test(input);

                if (isLikelyDate) {
                  const parsed = calculateAgeFromDate(input);
                  if (parsed) {
                    handleEMSPatientChange("age_unit", parsed.unit, false);
                    setTempAge(parsed.value.toString());
                    return;
                  }
                }

                const numeric = parseInt(input, 10);
                const safeAge = isNaN(numeric) ? 0 : numeric;

                handleEMSPatientChange("age", safeAge, false);
                setTempAge(safeAge.toString());
              }}
              className="flex-1 rounded-xs h-fit"
              ref={patient_ageRef}
              disabled={!canEditPatientAge}
            />
            {/* Age Unit - Only show if tempAge is not "Unknown" */}
            {tempAge && tempAge.toLowerCase() !== "unknown" && (
              <Select
                value={emsCase?.case_entry?.patient?.age_unit}
                onValueChange={(value) =>
                  handleEMSPatientChange("age_unit", value, false)
                }
                open={isAgeUnitSelectOpen}
                onOpenChange={setIsAgeUnitSelectOpen}
                disabled={!canEditPatientAge}
              >
                <SelectTrigger
                  className="w-fit rounded-xs flex-3"
                  size="fit"
                  ref={patient_ageUnitRef}
                  onFocus={() => {
                    //
                    setFocusedInput("age_unit");
                    setFocusedField("age_unit");
                  }}
                  onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
                    if (e.key === "ArrowRight") {
                      e.preventDefault();
                      patient_ageUnitRef.current?.click();
                    }
                  }}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent
                  className="rounded-xs"
                  onKeyDown={onAgeUnitHotKey}
                >
                  <SelectItem className="rounded-xs" value="year">
                    year(s)
                  </SelectItem>
                  <SelectItem className="rounded-xs" value="month">
                    month(s)
                  </SelectItem>
                  <SelectItem className="rounded-xs" value="day">
                    day(s)
                  </SelectItem>
                </SelectContent>
              </Select>
            )}
          </div>
        </div>
        {/* Patient Gender */}
        <div className="col-span-2 flex items-center justify-end">
          <Label
            className={`text-sm ${
              focusedInput === "gender" ? "font-bold" : "font-normal"
            }`}
          >
            {getLabelText("gender", focusedInput === "gender")}
          </Label>
        </div>
        <div className="col-span-1">
          <Select
            value={emsCase?.case_entry?.patient?.gender}
            onValueChange={(value) =>
              handleEMSPatientChange("gender", value, true)
            }
            onOpenChange={(open) => {
              setIsGenderSelectOpen(open);
              if (open) {
                setFocusedInput("gender");
                setFocusedField("gender");
              } else {
                setFocusedInput("");
              }
            }}
            open={isGenderSelectOpen}
            disabled={!canEditPatientGender}
          >
            <SelectTrigger
              className="w-full rounded-xs"
              size="fit"
              ref={patientGenderRef}
              onFocus={() => {
                //
                setFocusedInput("gender");
                setFocusedField("gender");
              }}
              onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
                if (e.key === "ArrowRight") {
                  e.preventDefault();
                  patientGenderRef.current?.click();
                }
              }}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="rounded-xs" onKeyDown={onGenderHotKey}>
              <SelectItem className="rounded-xs" value="male">
                Male
              </SelectItem>
              <SelectItem className="rounded-xs" value="female">
                Female
              </SelectItem>
              <SelectItem className="rounded-xs" value="unknown">
                Unknown
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Patient Consciousness */}
        <div className="col-span-2 flex items-center justify-end">
          <Label
            className={`text-sm ${
              focusedInput === "consciousness" ? "font-bold" : "font-normal"
            }`}
          >
            {getLabelText("consciousness", focusedInput === "consciousness")}
          </Label>
        </div>
        <div className="col-span-1">
          <Select
            value={emsCase?.case_entry?.patient?.consciousness}
            onValueChange={(value) =>
              handleEMSPatientChange("consciousness", value, true)
            }
            onOpenChange={(open) => {
              setIsConsciousnessSelectOpen(open);
              if (open) {
                setFocusedInput("consciousness");
                setFocusedField("consciousness");
              } else {
                setFocusedInput("");
              }
            }}
            open={isConsciousnessSelectOpen}
            disabled={!canEditPatientConsciousness}
          >
            <SelectTrigger
              className="w-full rounded-xs"
              ref={patientConsciousnessRef}
              size="fit"
              onFocus={() => {
                //
                setFocusedInput("consciousness");
                setFocusedField("consciousness");
              }}
              onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
                if (e.key === "ArrowRight") {
                  e.preventDefault();
                  patientConsciousnessRef.current?.click();
                }
              }}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent
              className="rounded-xs"
              onKeyDown={onConsciousnessHotKey}
            >
              <SelectItem className="rounded-xs" value="yes">
                Yes
              </SelectItem>
              <SelectItem className="rounded-xs" value="no">
                No
              </SelectItem>
              <SelectItem className="rounded-xs" value="unknown">
                Unknown
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-2 flex items-center justify-end">
          <Label
            className={`text-sm ${
              focusedInput === "breathing" ? "font-bold" : "font-normal"
            }`}
          >
            {getLabelText("breathing", focusedInput === "breathing")}
          </Label>
        </div>
        <div className="col-span-1">
          <Select
            value={emsCase?.case_entry?.patient?.breathing}
            onValueChange={(value) =>
              handleEMSPatientChange("breathing", value, true)
            }
            onOpenChange={(open) => {
              setIsBreathingSelectOpen(open);
              if (open) {
                setFocusedInput("breathing");
                setFocusedField("breathing");
              } else {
                setFocusedInput("");
              }
            }}
            open={isBreathingSelectOpen}
            disabled={!canEditPatientBreathing}
          >
            <SelectTrigger
              className="w-full rounded-xs"
              ref={patientBreathingRef}
              size="fit"
              onFocus={() => {
                //
                setFocusedInput("breathing");
                setFocusedField("breathing");
              }}
              onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
                if (e.key === "ArrowRight") {
                  e.preventDefault();
                  patientBreathingRef.current?.click();
                }
              }}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="rounded-xs" onKeyDown={onBreathingHotKey}>
              <SelectItem className="rounded-xs" value="yes">
                Yes
              </SelectItem>
              <SelectItem className="rounded-xs" value="no">
                No
              </SelectItem>
              <SelectItem className="rounded-xs" value="unknown">
                Unknown (3rd/4th party)
              </SelectItem>
              <SelectItem className="rounded-xs" value="uncertain">
                Uncertain (2nd party)
              </SelectItem>
              <SelectItem className="rounded-xs" value="agonal/ineffective">
                INEFFECTIVE/AGONAL
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 items-center">
        <div className="col-span-2 flex items-center justify-end">
          <Label
            className={`text-sm ${
              focusedInput === "chief_complaint" ? "font-bold" : "font-normal"
            }`}
          >
            {getLabelText(
              "chief_complaint",
              focusedInput === "chief_complaint"
            )}
          </Label>
        </div>
        <div className="col-span-3 grid grid-cols-5 items-center gap-20">
          <div className="w-full col-span-4">
            <Combobox
              options={sortedComplaintOptions}
              value={{
                main:
                  emsCase?.case_entry?.chief_complaint
                    ? emsCase?.case_entry?.chief_complaint
                    : emsCase?.case_entry?.initial_complaint
                    ? emsCase?.case_entry?.initial_complaint
                    : null,
                sub: emsCase?.case_entry?.track ?? null,
              }}
              onValueChange={({ main, sub }) => {
                if (main !== null) {
                  handleEMSCaseEntryChange("initial_complaint", main, true);
                }
                // store the sub complaint string, or "" if none selected
                handleEMSCaseEntryChange(
                  "track",
                  sub ? String(sub) : "",
                  true
                );
              }}
              onClick={() => {
                setFocusedInput("chief_complaint");
                setFocusedField("chief_complaint");
              }}
              ref={chiefComplaintRef}
              smallRounded
              noInput
              heightFit
              onFocus={() => {
                setFocusedInput("chief_complaint");
                setFocusedField("chief_complaint");
              }}
              onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
                if (e.key === "ArrowRight") {
                  e.preventDefault();
                  chiefComplaintRef.current?.click();
                }
              }}
              disabled={!canEditChiefComplaint}
            />
          </div>
          <Button
            ref={nextButtonRef}
            variant="outline"
            disabled={!canSubmitCaseEntry}
            onClick={() => handleCompleteCaseEntry()}
            onKeyDown={handleNextButtonKeyDown}
            className="rounded-xs w-fit"
          >
            <CircleArrowRight className="h-4 w-4 scale-125 text-green-400" />
          </Button>
        </div>
      </div>
      <div className="mt-12">
        <Button
          variant="outline"
          onClick={() => {
            router.back();
          }}
          className="rounded-xs flex items-center gap-4"
        >
          <CircleArrowLeft className="h-8 w-8 scale-125 text-destructive" />
          Back
        </Button>
      </div>

      {/* Test Case Modal */}
      <TestCaseModal
        isOpen={isTestModalOpen && initialCall?.case_entry.isTestCase === false}
        onOpenChange={setIsTestModalOpen}
        onConfirm={handleSetTestCase}
      />
    </>
  );
}
