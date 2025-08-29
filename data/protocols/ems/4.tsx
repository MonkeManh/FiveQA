import { IEMSProtocol } from "@/models/interfaces";

export const ASSAULT: IEMSProtocol = {
  protocol: 4,
  name: "Assault / Sexual Assault / Stun Gun",
  shortName: "Assault",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "C" },
    { name: "Police", priority: true },
  ],
  defaultPriority: "B",
  defaultCode: "04B03",
  defaultPlan: 14,
  preSend: true,
  information: <></>,
  availableTracks: [
    { id: 1, name: "Assault" },
    { id: 2, name: "Sexual Assault" },
    { id: 3, name: "Stun Gun" },
  ],
  questions: [
    {
      text: (
        <p>
          <b className="font-bold">When</b> did this{" "}
          <b className="font-bold">happen</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "NOW",
          display: "Assault in progress",
          answerDisplay: (
            <p className="text-red-500">
              The assault is happening <b className="font-bold">NOW</b>.
            </p>
          ),
          answerPriority: 1,
          dependency(_patient, _answers, _currentCode, _currentSuffix, track) {
            if (track === "Assault") {
              return {
                pushSuffixes: ["S"],
              };
            } else if (track === "Sexual Assault") {
              return {
                pushSuffixes: ["S"],
              };
            } else if (track === "Stun Gun") {
              return {
                pushSuffixes: ["S"],
              };
            }
          },
          dependencyLogic: "load the tracks suffixes",
          dependencyDeps: ["track"],
          continue: true,
          setSceneSecure: false,
        },
        {
          answer: "Less than 6 hours ago",
          display: "Happened now (<= 6 hours)",
          answerDisplay: (
            <p className="text-green-500">
              **pronoun** was assaulted now (&lt;= 6 hours ago).
            </p>
          ),
          dependency(_patient, _answers, _currentCode, _currentSuffix, track) {
            if (track === "Assault") {
              return {
                pushSuffixes: ["S"],
              };
            } else if (track === "Sexual Assault") {
              return {
                pushSuffixes: ["S"],
              };
            } else if (track === "Stun Gun") {
              return {
                pushSuffixes: ["S"],
              };
            }
          },
          dependencyLogic: "load the tracks suffixes",
          dependencyDeps: ["track"],
          continue: true,
        },
        {
          answer: "More than 6 hours ago",
          display: "Happened earlier (> 6 hours)",
          answerDisplay: (
            <p className="text-green-500">
              **pronoun** was assaulted earlier (&gt; 6 hours ago).
            </p>
          ),
          dependency(_patient, _answers, _currentCode, _currentSuffix, track) {
            if (track === "Assault") {
              return {
                pushSuffixes: ["S"],
              };
            } else if (track === "Sexual Assault") {
              return {
                pushSuffixes: ["S"],
              };
            } else if (track === "Stun Gun") {
              return {
                pushSuffixes: ["S"],
              };
            }
          },
          dependencyLogic: "load the tracks suffixes",
          dependencyDeps: ["track"],
          pushCodes: ["04A03"],
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk when attack happened",
          answerDisplay: (
            <p className="text-blue-500">
              Unknown when **pronoun** was assaulted.
            </p>
          ),
          dependency(_patient, _answers, _currentCode, _currentSuffix, track) {
            if (track === "Assault") {
              return {
                pushSuffixes: ["S"],
              };
            } else if (track === "Sexual Assault") {
              return {
                pushSuffixes: ["S"],
              };
            } else if (track === "Stun Gun") {
              return {
                pushSuffixes: ["S"],
              };
            }
          },
          dependencyLogic: "load the tracks suffixes",
          dependencyDeps: ["track"],
          continue: true,
        },
      ],
    },

    {
      text: (
        <p className="text-red-500">
          Is the <b className="font-bold">assailant</b>{" "}
          <span className="text-sm">(attacker)</span>{" "}
          <b className="font-bold">still nearby</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "Attacker is NOT nearby",
          answerDisplay: (
            <p className="text-red-500">The attacker is not nearby.</p>
          ),
          continue: true,
        },
        {
          answer: "Yes",
          display: "Attacker is nearby",
          answerDisplay: (
            <p className="text-red-500">The attacker is nearby.</p>
          ),
          setSceneSecure: false,
          continue: true,
        },
        {
          answer: "Assailant is LEO",
          display: "LEO involved incident",
          answerDisplay: (
            <p className="text-red-500">
              Law Enforcement Officer (LEO) involved incident.
            </p>
          ),
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if attacker is nearby",
          answerDisplay: (
            <p className="text-red-500">Unknown if the attacker is nearby.</p>
          ),
          setSceneSecure: false,
          continue: true,
        },
      ],
    },

    {
      text: (
        <p className="text-red-500">
          Were <b className="font-bold">any weapons</b> involved?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No wpns involved/rptd",
          answerDisplay: (
            <p className="text-red-500">
              No weapons were involved or reported.
            </p>
          ),
          continue: true,
        },
        {
          answer: "Yes",
          display: "Wpn(s) involved/rptd",
          answerDisplay: (
            <p className="text-red-500">Weapons were involved or reported.</p>
          ),
          continue: true,
          setSceneSecure: false,
        },
        {
          answer: "Unknown",
          display: "Unk if wpns involved",
          answerDisplay: (
            <p className="text-red-500">Unknown if weapons were involved.</p>
          ),
          continue: true,
        },
      ],
    },

    {
      text: (
        <p className="text-red-500">
          What <b className="font-bold">type</b> of weapon was involved?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const targetAnswer = answers.find(
          (a) => a.rawText === "Were any weapons involved?"
        )?.answer;
        return targetAnswer === "Yes";
      },
      preRenderLogic: "there were weapons involved",
      preRenderDeps: ["answers"],
      answers: [
        {
          answer: "Firearm (not stun gun/taser):",
          display: "Firearm: {input}",
          answerDisplay: (
            <p className="text-red-500">
              The weapon involved is a firearm: **input**.
            </p>
          ),
          continue: true,
          input: true,
        },
        {
          answer: "Knife:",
          display: "Knife: {input}",
          answerDisplay: (
            <p className="text-red-500">
              The weapon involved is a knife: **input**.
            </p>
          ),
          continue: true,
          input: true,
        },
        {
          answer: "Club:",
          display: "Club: {input}",
          answerDisplay: (
            <p className="text-red-500">
              The weapon involved is a club: **input**.
            </p>
          ),
          continue: true,
          input: true,
        },
        {
          answer: "Explosive:",
          display: "Explosive: {input}",
          answerDisplay: (
            <p className="text-red-500">
              The weapon involved is an explosive: **input**.
            </p>
          ),
          continue: true,
          input: true,
        },
        {
          answer: "Stun gun/Taser",
          display: "Stun gun/Taser",
          answerDisplay: (
            <p className="text-red-500">
              The weapon involved is a stun gun or taser.
            </p>
          ),
          pushSuffixes: ["S"],
          continue: true,
        },
        {
          answer: "Other:",
          display: "Other wpn: {input}",
          answerDisplay: (
            <p className="text-red-500">Other weapon type: **input**.</p>
          ),
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk wpn type",
          answerDisplay: <p className="text-red-500">Unknown weapon type.</p>,
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is there any <b className="font-bold">SERIOUS bleeding</b>{" "}
          <span className="text-sm">(spurting or pouring)</span>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No bleeding",
          display: "No bleeding",
          answerDisplay: <p className="text-green-500">No bleeding.</p>,
          dependency: (patient) => {
            if (patient.consciousness === "no") {
              return { end: true };
            }
          },
          dependencyLogic: "end key questioning if patient is unconscious",
          dependencyDeps: ["patient"],
          continue: true,
        },
        {
          answer: "Not SERIOUS bleeding",
          display: "Some bleeding, not SERIOUS",
          answerDisplay: (
            <p className="text-green-500">
              Some bleeding is present, but it is not serious.
            </p>
          ),
          dependency: (patient) => {
            if (patient.consciousness === "no") {
              return { end: true };
            }
          },
          dependencyLogic: "end key questioning if patient is unconscious",
          dependencyDeps: ["patient"],
          continue: true,
        },
        {
          answer: "Yes",
          display: "SERIOUS bleeding",
          answerDisplay: (
            <p className="text-red-500">SERIOUS bleeding is present.</p>
          ),
          dependency: (patient) => {
            if (patient.consciousness === "no") {
              return { end: true };
            }
          },
          dependencyLogic: "end key questioning if patient is unconscious",
          dependencyDeps: ["patient"],
          pushCodes: ["04B02"],
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if SERIOUS bleeding",
          answerDisplay: (
            <p className="text-green-500">
              Unknown if SERIOUS bleeding is present.
            </p>
          ),
          dependency: (patient) => {
            if (patient.consciousness === "no") {
              return { end: true };
            }
          },
          dependencyLogic: "end key questioning if patient is unconscious",
          dependencyDeps: ["patient"],
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is **pronoun** <b className="font-bold">responding normally</b>{" "}
          <span className="text-sm">(completely alert)</span>?
        </p>
      ),
      firstPersonText: (
        <p className="text-blue-500">
          Is **pronoun** <b className="font-bold">responding normally</b>{" "}
          <span className="text-sm">(completely alert)</span>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Responding nlly",
          answerDisplay: (
            <p className="text-green-500">
              **pronoun** is responding normally.
            </p>
          ),
          continue: true,
        },
        {
          answer: "No",
          display: "NOT responding nlly",
          answerDisplay: (
            <p className="text-red-500">
              **pronoun** is NOT responding normally.
            </p>
          ),
          pushCodes: ["04D03"],
          send: true,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if responding nlly",
          answerDisplay: (
            <p className="text-green-500">
              Unknown if **pronoun** is responding normally.
            </p>
          ),
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Does **pronoun** have any <b className="font-bold">other injuries</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions(
        _patient,
        _answers,
        _currentCode,
        _currentSuffix,
        track
      ) {
        return track === "Sexual Assault";
      },
      preRenderLogic: "track is Sexual Assault",
      preRenderDeps: ["track"],
      answers: [
        {
          answer: "No",
          display: "No other injs",
          answerDisplay: (
            <p className="text-green-500">**pronoun** has no other injuries.</p>
          ),
          continue: true,
        },
        {
          answer: "Yes",
          display: "Has other injs",
          answerDisplay: (
            <p className="text-yellow-500">**pronoun** has other injuries.</p>
          ),
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if other injs",
          answerDisplay: (
            <p className="text-green-500">
              Unknown if **pronoun** has other injuries.
            </p>
          ),
          pushCodes: ["04B03"],
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          What <b className="font-bold">part</b> of the body was{" "}
          <b className="font-bold">injured</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions(
        _patient,
        answers,
        _currentCode,
        _currentSuffix,
        track
      ) {
        const targetAnswer = answers.find(
          (a) => a.rawText === "Does **pronoun** have any other injuries?"
        )?.answer;
        return track !== "Sexual Assault" || targetAnswer === "Yes";
      },
      preRenderLogic:
        "track is not Sexual Assault or patient has other injuries (track is Sexual Assault)",
      preRenderDeps: ["track"],
      answers: [
        {
          answer: "NOT DANGEROUS body area (not chest, neck or head)",
          display: "Inj to NOT DANG body area (not chest/neck/head)",
          answerDisplay: (
            <p className="text-green-500">
              **pronoun** has injuries to a{" "}
              <b className="font-bold">NOT DANGEROUS</b> body area.
            </p>
          ),
          answerPriority: 3,
          continue: true,
        },
        {
          answer: "POSSIBLY DANGEROUS body area (not chest, neck or head)",
          display: "Inj to POSSIBLY DANG body area (not chest/neck/head)",
          answerDisplay: (
            <p className="text-yellow-500">
              **pronoun** has injuries to a{" "}
              <b className="font-bold">POSSIBLY DANGEROUS</b> body area.
            </p>
          ),
          answerPriority: 2,
          continue: true,
        },
        {
          answer: "Chest",
          display: "Inj to chest",
          answerDisplay: (
            <p className="text-red-500">
              **pronoun** has injuries to the <b className="font-bold">chest</b>
              .
            </p>
          ),
          answerPriority: 1,
          continue: true,
        },
        {
          answer: "Neck",
          display: "Inj to neck",
          answerDisplay: (
            <p className="text-red-500">
              **pronoun** has injuries to the <b className="font-bold">neck</b>.
            </p>
          ),
          answerPriority: 1,
          continue: true,
        },
        {
          answer: "Head",
          display: "Inj to head",
          answerDisplay: (
            <p className="text-red-500">
              **pronoun** has injuries to the <b className="font-bold">head</b>.
            </p>
          ),
          answerPriority: 1,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk body area injs",
          answerDisplay: (
            <p className="text-green-500">
              Unknown what body area **pronoun** has injuries to.
            </p>
          ),
          pushCodes: ["04B03"],
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is **pronoun** having any{" "}
          <b className="font-bold">difficulty breathing</b>?
        </p>
      ),
      firstPersonText: (
        <p>
          Are you having any <b className="font-bold">difficulty breathing</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const targetAnswer = answers.find(
          (a) => a.rawText === "What part of the body was injured?"
        )?.answer;
        return (
          targetAnswer === "Chest" ||
          targetAnswer === "Neck" ||
          targetAnswer === "Head"
        );
      },
      preRenderLogic: "injury to chest, neck, or head",
      preRenderDeps: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No diff breathing",
          answerDisplay: (
            <p className="text-green-500">
              **pronoun** is not having difficulty breathing.
            </p>
          ),
          answerPriority: 1,
          pushCodes: ["04B01"],
          continue: true,
        },
        {
          answer: "Yes",
          display: "Diff breathing",
          answerDisplay: (
            <p className="text-red-500">
              **pronoun** is having difficulty breathing.
            </p>
          ),
          answerPriority: 1,
          pushCodes: ["04D04"],
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if diff breathing",
          answerDisplay: (
            <p className="text-green-500">
              Unknown if **pronoun** is having difficulty breathing.
            </p>
          ),
          pushCodes: ["04B01"],
          continue: true,
          send: true,
        },
      ],
    },

    {
      text: (
        <p>
          What <b className="font-bold">POSSIBLY DANGEROUS</b> body area was
          injured?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const targetAnswer = answers.find(
          (a) => a.rawText === "What part of the body was injured?"
        )?.answer;
        return (
          targetAnswer ===
          "POSSIBLY DANGEROUS body area (not chest, neck or head)"
        );
      },
      preRenderLogic: "injury to possibly dangerous body area",
      preRenderDeps: ["answers"],
      answers: [
        {
          answer: "Abdomen",
          display: "POSSIBLY DANG area: abdomen",
          answerDisplay: (
            <p className="text-yellow-500">
              The <b className="font-bold">POSSIBLY DANGEROUS</b> body area is:
              abdomen
            </p>
          ),
          pushCodes: ["04B01"],
          send: true,
          answerPriority: 1,
          continue: true,
        },
        {
          answer: "Amputation (excluding finger/toe)",
          display: "POSSIBLY DANG area: amputation",
          answerDisplay: (
            <p className="text-yellow-500">
              The <b className="font-bold">POSSIBLY DANGEROUS</b> body area is:
              amputation
            </p>
          ),
          pushCodes: ["04B01"],
          send: true,
          answerPriority: 1,
          continue: true,
        },
        {
          answer: "Back",
          display: "POSSIBLY DANG area: back",
          answerDisplay: (
            <p className="text-yellow-500">
              The <b className="font-bold">POSSIBLY DANGEROUS</b> body area is:
              back
            </p>
          ),
          pushCodes: ["04B01"],
          send: true,
          answerPriority: 1,
          continue: true,
        },
        {
          answer: "Chest (breathing normally)",
          display: "POSSIBLY DANG area: chest (breathing normally)",
          answerDisplay: (
            <p className="text-yellow-500">
              The <b className="font-bold">POSSIBLY DANGEROUS</b> body area is:
              chest (breathing normally)
            </p>
          ),
          pushCodes: ["04B01"],
          send: true,
          answerPriority: 1,
          continue: true,
        },
        {
          answer: "Genitalia",
          display: "POSSIBLY DANG area: genitalia",
          answerDisplay: (
            <p className="text-yellow-500">
              The <b className="font-bold">POSSIBLY DANGEROUS</b> body area is:
              genitalia
            </p>
          ),
          pushCodes: ["04B01"],
          send: true,
          answerPriority: 1,
          continue: true,
        },
        {
          answer: "Head (alert)",
          display: "POSSIBLY DANG area: head (alert)",
          answerDisplay: (
            <p className="text-yellow-500">
              The <b className="font-bold">POSSIBLY DANGEROUS</b> body area is:
              head (alert)
            </p>
          ),
          pushCodes: ["04B01"],
          send: true,
          answerPriority: 1,
          continue: true,
        },
        {
          answer: "Leg, upper (obvious deformity)",
          display: "POSSIBLY DANG area: leg, upper",
          answerDisplay: (
            <p className="text-yellow-500">
              The <b className="font-bold">POSSIBLY DANGEROUS</b> body area is:
              leg, upper (obvious deformity)
            </p>
          ),
          pushCodes: ["04B01"],
          send: true,
          answerPriority: 1,
          continue: true,
        },
        {
          answer: "Neck (breathing normally)",
          display: "POSSIBLY DANG area: neck (breathing normally)",
          answerDisplay: (
            <p className="text-yellow-500">
              The <b className="font-bold">POSSIBLY DANGEROUS</b> body area is:
              neck (breathing normally)
            </p>
          ),
          pushCodes: ["04B01"],
          send: true,
          answerPriority: 1,
          continue: true,
        },
        {
          answer: "None of these",
          display: "No POSSIBLY DANG area ID'd",
          answerDisplay: (
            <p className="text-green-500">
              No <b className="font-bold">POSSIBLY DANGEROUS</b> body area
              identified.
            </p>
          ),
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          What <b className="font-bold">NOT DANGEROUS</b> body area is injured?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const targetAnswer = answers.find(
          (a) => a.rawText === "What part of the body was injured?"
        )?.answer;
        const possDangAnswer = answers.find(
          (a) => a.rawText === "What POSSIBLY DANGEROUS body area is injured?"
        )?.answer;
        return (
          targetAnswer ===
            "NOT DANGEROUS body area (not chest, neck or head)" ||
          possDangAnswer === "None of these"
        );
      },
      preRenderLogic:
        "injury to not dangerous body area or no possibly dang area identified",
      preRenderDeps: ["answers"],
      answers: [
        {
          answer: "Ankle",
          display: "NOT DANG area: ankle",
          answerDisplay: (
            <p className="text-green-500">
              The <b className="font-bold">NOT DANGEROUS</b> body area is: ankle
            </p>
          ),
          answerPriority: 3,
          pushCodes: ["04A02"],
          continue: true,
        },
        {
          answer: "Arm, upper*",
          display: "NOT DANG area: arm, upper*",
          answerDisplay: (
            <p className="text-green-500">
              The <b className="font-bold">NOT DANGEROUS</b> body area is: arm,
              upper*
            </p>
          ),
          answerPriority: 3,
          continue: true,
        },
        {
          answer: "Collar bone (clavicle)",
          display: "NOT DANG area: collar bone (clavicle)",
          answerDisplay: (
            <p className="text-green-500">
              The <b className="font-bold">NOT DANGEROUS</b> body area is:
              collar bone (clavicle)
            </p>
          ),
          answerPriority: 3,
          pushCodes: ["04A02"],
          continue: true,
        },
        {
          answer: "Elbow*",
          display: "NOT DANG area: elbow*",
          answerDisplay: (
            <p className="text-green-500">
              The <b className="font-bold">NOT DANGEROUS</b> body area is:
              elbow*
            </p>
          ),
          answerPriority: 3,
          continue: true,
        },
        {
          answer: "Finger",
          display: "NOT DANG area: finger",
          answerDisplay: (
            <p className="text-green-500">
              The <b className="font-bold">NOT DANGEROUS</b> body area is:
              finger
            </p>
          ),
          answerPriority: 3,
          pushCodes: ["04A02"],
          continue: true,
        },
        {
          answer: "Foot",
          display: "NOT DANG area: foot",
          answerDisplay: (
            <p className="text-green-500">
              The <b className="font-bold">NOT DANGEROUS</b> body area is: foot
            </p>
          ),
          answerPriority: 3,
          pushCodes: ["04A02"],
          continue: true,
        },
        {
          answer: "Forearm",
          display: "NOT DANG area: forearm",
          answerDisplay: (
            <p className="text-green-500">
              The <b className="font-bold">NOT DANGEROUS</b> body area is:
              forearm
            </p>
          ),
          answerPriority: 3,
          pushCodes: ["04A02"],
          continue: true,
        },
        {
          answer: "Hand",
          display: "NOT DANG area: hand",
          answerDisplay: (
            <p className="text-green-500">
              The <b className="font-bold">NOT DANGEROUS</b> body area is: hand
            </p>
          ),
          answerPriority: 3,
          pushCodes: ["04A02"],
          continue: true,
        },
        {
          answer: "Hip/Pelvis",
          display: "NOT DANG area: hip/pelvis",
          answerDisplay: (
            <p className="text-green-500">
              The <b className="font-bold">NOT DANGEROUS</b> body area is:
              hip/pelvis
            </p>
          ),
          answerPriority: 3,
          pushCodes: ["04A02"],
          continue: true,
        },
        {
          answer: "Knee*",
          display: "NOT DANG area: knee*",
          answerDisplay: (
            <p className="text-green-500">
              The <b className="font-bold">NOT DANGEROUS</b> body area is: knee*
            </p>
          ),
          answerPriority: 3,
          continue: true,
        },
        {
          answer: "Leg, lower",
          display: "NOT DANG area: leg, lower",
          answerDisplay: (
            <p className="text-green-500">
              The <b className="font-bold">NOT DANGEROUS</b> body area is: leg,
              lower
            </p>
          ),
          answerPriority: 3,
          pushCodes: ["04A02"],
          continue: true,
        },
        {
          answer: "Leg, upper (without deformity)",
          display: "NOT DANG area: leg, upper (without deformity)",
          answerDisplay: (
            <p className="text-green-500">
              The <b className="font-bold">NOT DANGEROUS</b> body area is: leg,
              upper (without deformity)
            </p>
          ),
          answerPriority: 3,
          continue: true,
        },
        {
          answer: "Shoulder",
          display: "NOT DANG area: shoulder",
          answerDisplay: (
            <p className="text-green-500">
              The <b className="font-bold">NOT DANGEROUS</b> body area is:
              shoulder
            </p>
          ),
          answerPriority: 3,
          pushCodes: ["04A02"],
          continue: true,
        },
        {
          answer: "Toe",
          display: "NOT DANG area: toe",
          answerDisplay: (
            <p className="text-green-500">
              The <b className="font-bold">NOT DANGEROUS</b> body area is: toe
            </p>
          ),
          answerPriority: 3,
          pushCodes: ["04A02"],
          continue: true,
        },
        {
          answer: "Wrist",
          display: "NOT DANG area: wrist",
          answerDisplay: (
            <p className="text-green-500">
              The <b className="font-bold">NOT DANGEROUS</b> body area is: wrist
            </p>
          ),
          answerPriority: 3,
          pushCodes: ["04A02"],
          continue: true,
        },
        {
          answer: "Other:",
          display: "NOT DANG area: {input}",
          answerDisplay: (
            <p className="text-green-500">
              The <b className="font-bold">NOT DANGEROUS</b> body area is:
              **input**
            </p>
          ),
          answerPriority: 3,
          pushCodes: ["04A02"],
          continue: true,
          input: true,
        },
        {
          answer: "None of these",
          display: "No NOT DANG area ID'd",
          answerDisplay: (
            <p className="text-yellow-500">
              No <b className="font-bold">NOT DANGEROUS</b> body area
              identified.
            </p>
          ),
          answerPriority: 3,
          pushCodes: ["04B03"],
          send: true,
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is it <b className="font-bold">obviously</b> bent{" "}
          <b className="font-bold">out of shape</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const targetAnswer = answers.find(
          (a) => a.rawText === "What NOT DANGEROUS body area is injured?"
        )?.answer;
        return (
          targetAnswer?.includes("*") ||
          targetAnswer === "Leg, upper (without deformity)"
        );
      },
      preRenderLogic: "the pt has a designated * injury or an upper leg inj",
      preRenderDeps: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No obvious deformity",
          answerDisplay: (
            <p className="text-green-500">
              Injury has <b className="font-bold">no</b> obvious deformity.
            </p>
          ),
          pushCodes: ["04A02"],
          send: true,
          answerPriority: 3,
          continue: true,
        },
        {
          answer: "Yes",
          display: "Obvious deformity",
          answerDisplay: (
            <p className="text-red-500">
              Injury has an <b className="font-bold">obvious deformity</b>.
            </p>
          ),
          dependency: (_patient, answers) => {
            const targetAnswer = answers.find(
              (a) => a.rawText === "What NOT DANGEROUS body area is injured?"
            )?.answer;
            if (targetAnswer === "Leg, upper (without deformity)") {
              return { pushCodes: ["04B01"], send: true };
            } else {
              return { pushCodes: ["04A01"], send: true };
            }
          },
          answerPriority: 2,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if obvious deformity",
          answerDisplay: (
            <p className="text-green-500">
              Unknown if the injury has an obvious deformity.
            </p>
          ),
          answerPriority: 1,
          continue: true,
        },
      ],
    },
  ],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "04A01",
          text: (
            <p>
              <b className="font-bold">Marked</b> (
              <b className="font-bold">*</b>){" "}
              <b className="font-bold">NOT DANGEROUS</b> body area with{" "}
              <b className="font-bold">deformity</b>
            </p>
          ),
          recResponse: 14,
          priority: 2,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 14,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 14,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 14,
              priority: 0,
            },
          ],
        },
        {
          code: "04A02",
          text: (
            <p>
              <b className="font-bold">NOT DANGEROUS</b> body area
            </p>
          ),
          priority: 3,
          recResponse: 14,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 14,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 14,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 14,
              priority: 0,
            },
          ],
        },
        {
          code: "04A03",
          text: (
            <p>
              <b className="font-bold">NON-RECENT</b> (&gt;=6hrs) injuries{" "}
              <span className="text-sm">
                (<b className="font-bold">without</b> priority symptoms)
              </span>
            </p>
          ),
          recResponse: 15,
          priority: 1,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 15,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 15,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 15,
              priority: 0,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "04B00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 14,
          priority: 0,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 14,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 14,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 14,
              priority: 0,
            },
          ],
        },
        {
          code: "04B01",
          text: (
            <p>
              <b className="font-bold">POSSIBLY DANGEROUS</b> body area
            </p>
          ),
          recResponse: 14,
          priority: 2,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 14,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 14,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 14,
              priority: 0,
            },
          ],
        },
        {
          code: "04B02",
          text: (
            <p>
              <b className="font-bold">SERIOUS</b> hemorrhage
            </p>
          ),
          recResponse: 14,
          priority: 1,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 14,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 14,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 14,
              priority: 0,
            },
          ],
        },
        {
          code: "04B03",
          text: (
            <p>
              <b className="font-bold">Unknown</b> status/
              <b className="font-bold">Other</b> codes{" "}
              <b className="font-bold">not</b> applicable
            </p>
          ),
          recResponse: 14,
          priority: 3,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 14,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 14,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 14,
              priority: 0,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "04D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 16,
          priority: 0,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 16,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 16,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 16,
              priority: 0,
            },
          ],
        },
        {
          code: "04D01",
          text: <p className="font-bold">Arrest</p>,
          recResponse: 17,
          notBreathing: true,
          priority: 1,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 17,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 17,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 17,
              priority: 0,
            },
          ],
        },
        {
          code: "04D02",
          text: <p className="font-bold">Unconscious</p>,
          recResponse: 18,
          notConscious: true,
          priority: 2,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 18,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 18,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 18,
              priority: 0,
            },
          ],
        },
        {
          code: "04D03",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 16,
          priority: 3,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 16,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 16,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 16,
              priority: 0,
            },
          ],
        },
        {
          code: "04D04",
          text: (
            <p>
              <b className="font-bold">Chest/Neck/Head</b> injury{" "}
              <span className="text-sm">
                (with <b className="font-bold">difficulty</b> breathing)
              </span>
            </p>
          ),
          recResponse: 16,
          priority: 4,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 16,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 16,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 16,
              priority: 0,
            },
          ],
        },
        {
          code: "04D05",
          text: (
            <p>
              <b className="font-bold">Multiple</b> victims
            </p>
          ),
          recResponse: 19,
          multPatient: true,
          priority: 5,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 19,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 19,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 19,
              priority: 0,
            },
          ],
        },
      ],
    },
  ],
  pdis: {
    instructions: [],
    dls: [],
  },
};
