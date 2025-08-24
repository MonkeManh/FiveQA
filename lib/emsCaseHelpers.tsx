import { IEMSCase, IEMSProtocol } from "@/models/interfaces";
import { IDependencyResult } from "@/models/interfaces/protocols/ems/IEMSAnswer";
import { IPatient } from "@/models/interfaces/protocols/ems/IPatient";

export const getHelpContent = (field: string) => {
  const helpContent: Record<
    string,
    { title: string; description: React.ReactNode }
  > = {
    caller_statement: {
      title: "Caller Statement",
      description: (
        <p>
          <span className="text-blue-500">If choking, verify:</span> &quot;Is
          s/he <b>breathing</b> or <b>coughing</b> at all?&quot; (You go check
          and tell me what you find.){" "}
          <span className="text-blue-500">Then tell the caller:</span> &quot;
          <b>Do not slap</b> her/him on the back.&quot;
          <br />
          <br />
          <span className="text-purple-500">
            NOT BREATHING or INEFFECTIVE/AGONAL BREATHING , code as ECHO on
            Protocols <b>2, 6, 9, 11, 15, 31 only</b>, dispatch, give PDIs, and{" "}
            <b>return</b> to question sequence.
          </span>
        </p>
      ),
    },
    caller_type: {
      title: "Caller Type",
      description: (
        <p className="text-blue-500">
          <span>
            Ask only if <b>not</b> obvious.
          </span>
          <br />
          <br />
          <span>
            If <b className="font-bold">1st party</b>, ask{" "}
            <span className="text-primary">
              Are you <b className="font-bold">alone</b>?
            </span>
          </span>
          <br />
          <br />
          <span>
            <b>4th party = referring agency</b> such as police, airport, or
            other <b>professional</b> comm. center.
          </span>
        </p>
      ),
    },
    patient_count: {
      title: "Number of Patients",
      description: (
        <p className="text-blue-500">
          The <b>number</b> of people <b>injured</b> or <b>sick</b>. More than
          one <b>serious</b> patient will trigger a <b>DELTA</b> response on
          Protocols <b>4, 7, 8, 14, 15, 20, 22, 27, 29, 32</b>
        </p>
      ),
    },
    patient_age: {
      title: "Patient Age",
      description: (
        <p className="text-blue-500">
          The <b>closest age</b> (even if approximate) <b>must</b> be entered.
          <br />
          <br />
          <b>(Unsure)</b>{" "}
          <span className="text-primary">
            Tell me <b>approximately</b>, then
          </span>
        </p>
      ),
    },
    gender: {
      title: "Patient Gender",
      description: (
        <p className="text-blue-500">
          The <b>gender</b> of the patient. Ask only if <b>not</b> obvious.
        </p>
      ),
    },
    consciousness: {
      title: "Level of Consciousness",
      description: (
        <p className="text-blue-500">
          If consciousness is <b>unknown</b>, immediately <b>verify</b> whether
          the patient is <b>breathing</b>.
        </p>
      ),
    },
    breathing: {
      title: "Breathing Status",
      description: (
        <p className="text-blue-500">
          Hasn&apos;t checked: Ask{" "}
          <b>&quot;You go check and tell me what you find&quot;</b>
          <br />
          <b>Uncertain:</b> a 2nd party caller who is unsure. <b>Unknown:</b> a
          3rd or 4th party caller who doesn&apos;t know. Select{" "}
          <b>INEFFECTIVE</b> when unconscious <b>and</b> breathing is{" "}
          <b>irregular</b> or <b>very slow</b>, or <b>AGONAL</b>, when the time{" "}
          <b>between</b> breaths is 10 seconds or more.
        </p>
      ),
    },
    chief_complaint: {
      title: "Chief Complaint Code",
      description: (
        <>
          <p className="text-blue-500">
            Enter the Chief Complaint code that <b>most closely describes</b>{" "}
            the <b>foremost</b> symptom or incident.
          </p>
          <p className="mt-2">
            The report of an <b>&quot;unknown problem&quot;</b> in a{" "}
            <b>patient who is not with or near the caller,</b> or a call for
            help from someone whose language cannot be understood (no
            interpreter in the center), should be sent as protocol 32 (Unknown
            Problem)
          </p>
          <p className="mt-2">
            Please note that <b>Protocol 26</b> should be used for patients with
            an <b>&quot;unknown problem&quot;</b> who are{" "}
            <b>with or near the caller (2nd party).</b>
          </p>
        </>
      ),
    },
  };

  return (
    helpContent[field] || {
      title: "Caller Statement",
      description: (
        <p>
          <span className="text-blue-500">If choking, verify:</span> &quot;Is
          s/he <b>breathing</b> or <b>coughing</b> at all?&quot; (You go check
          and tell me what you find.){" "}
          <span className="text-blue-500">Then tell the caller:</span> &quot;
          <b>Do not slap</b> her/him on the back.&quot;
          <br />
          <br />
          <span className="text-purple-500">
            NOT BREATHING or INEFFECTIVE/AGONAL BREATHING , code as ECHO on
            Protocols <b>2, 6, 9, 11, 15, 31 only</b>, dispatch, give PDIs, and{" "}
            <b>return</b> to question sequence.
          </span>
        </p>
      ),
    }
  );
};

type PriorityLetter = "O" | "A" | "B" | "C" | "D" | "E";

export const formatElapsedTime = (startTime: string): string => {
  if (!startTime) return "00:00";

  const start = new Date(startTime);
  const now = new Date();
  const elapsed = Math.floor((now.getTime() - start.getTime()) / 1000);

  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;

  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

export function getPronoun(gender: string): string {
  switch (gender) {
    case "male":
      return "he";
    case "female":
      return "she";
    default:
      return "the patient";
  }
}

export function getPronoun2(gender: string): string {
  switch (gender) {
    case "male":
      return "his";
    case "female":
      return "her";
    default:
      return "the patient's";
  }
}

export function handleEMSPreRenderInstructions(
  func: (
    patient: IPatient,
    answers: IEMSCase["questions"]["list"],
    currentCode: string,
    currentSuffix: string,
    track?: string
  ) => boolean,
  patient: IPatient,
  answers: IEMSCase["questions"]["list"],
  currentCode: string,
  currentSuffix: string,
  track?: string
) {
  try {
    return func(patient, answers, currentCode, currentSuffix, track);
  } catch (error) {
    console.error(`Error in pre-render instructions: ${error}`);
    return true;
  }
}

export function evaluateEMSDependency(
  func: (
    patient: IPatient,
    answers: IEMSCase["questions"]["list"],
    currentCode: string,
    currentSuffix: string,
    track?: string
  ) => IDependencyResult | undefined,
  patient: IPatient,
  answers: IEMSCase["questions"]["list"],
  currentCode: string,
  currentSuffix: string,
  track?: string
): IDependencyResult | undefined {
  try {
    return func(patient, answers, currentCode, currentSuffix, track);
  } catch (error) {
    console.error(`Error in dependency function: ${error}`);
    return undefined;
  }
}

export function isSameOrHigherPriority(
  baseCode: string,
  compareCode: string
): boolean {
  const re = /^\s*\d{2}([OABCDE])\d{2}\s*$/i;

  const m1 = baseCode.match(re);
  const m2 = compareCode.match(re);
  if (!m1 || !m2) return false;

  const rank = (letter: string) => "OABCDE".indexOf(letter.toUpperCase());
  return rank(m2[1]) >= rank(m1[1]);
}

const rankPriority = (letter: string): number =>
  "OABCDE".indexOf(letter.toUpperCase());

export function isHigherPriority(
  baseCode: string,
  compareCode: string
): boolean {
  // In this case we want to check if compareCode has a strictly higher priority than baseCode
  const re = /^\s*\d{2}([OABCDE])\d{2}\s*$/i;

  const m1 = baseCode.match(re);
  const m2 = compareCode.match(re);
  if (!m1 || !m2) return false;

  const rank = (letter: string) => "OABCDE".indexOf(letter.toUpperCase());
  return rank(m2[1]) > rank(m1[1]);
}

export const getBestCode = (
  codes: string[],
  protocol: IEMSProtocol
): string | null => {
  if (!codes?.length || !protocol?.determinants?.length) return null;

  // Build a quick lookup: code -> { letter, numPriority }
  const lookup = new Map<string, { letter: PriorityLetter; num: number }>();

  for (const det of protocol.determinants) {
    for (const c of det.codes) {
      // If duplicates ever exist in data, keep the highest numeric priority.
      const existing = lookup.get(c.code);
      if (
        !existing ||
        c.priority > existing.num ||
        (c.priority === existing.num &&
          rankPriority(det.priority) > rankPriority(existing.letter))
      ) {
        lookup.set(c.code, { letter: det.priority, num: c.priority });
      }
    }
  }

  let best: { code: string; letter: PriorityLetter; num: number } | null = null;

  for (const code of codes) {
    const info = lookup.get(code);
    if (!info) continue; // ignore codes not found in the protocol

    if (!best) {
      best = { code, letter: info.letter, num: info.num };
      continue;
    }

    const currRank = rankPriority(info.letter);
    const bestRank = rankPriority(best.letter);

    if (
      currRank > bestRank || // better letter
      (currRank === bestRank && info.num > best.num) // higher numeric
      // if tie on both, keep the earlier (stable, deterministic)
    ) {
      best = { code, letter: info.letter, num: info.num };
    }
  }

  return best ? best.code : null;
};
