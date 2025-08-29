import { IEMSProtocol } from "@/models/interfaces";

export const ANIMAL_BITE: IEMSProtocol = {
  protocol: 3,
  name: "Animal Bites / Attacks",
  shortName: "Animal Bite",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "C" },
    { name: "Police", priority: "B" },
  ],
  defaultPriority: "B",
  defaultCode: "03B03",
  defaultPlan: 9,
  preSend: true,
  availableTracks: [
    { id: 1, name: "Animal bite" },
    { id: 2, name: "Animal attack in progress" },
    { id: 3, name: "MAULING" },
    { id: 4, name: "Multiple animal situation" },
  ],
  information: <></>,
  questions: [
    {
      text: (
        <p>
          <span className="text-blue-400">(Not obvious)</span>{" "}
          <b className="font-bold">When</b> did this{" "}
          <b className="font-bold">happen</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "NOW",
          display: "Attack in progress",
          answerDisplay: (
            <p className="text-red-500">
              The attack is happening <b className="font-bold">now</b>
            </p>
          ),
          answerPriority: 1,
          pushCodes: ["03D09"],
          send: true,
          continue: true,
        },
        {
          answer: "Less than 6 hours ago",
          display: "Happened now (<= 6 hours)",
          answerDisplay: (
            <p className="text-green-500">
              **pronoun** was attacked now (&lt;= 6 hours ago)
            </p>
          ),
          continue: true,
        },
        {
          answer: "More than 6 hours ago",
          display: "Happened earlier (> 6 hours)",
          answerDisplay: (
            <p className="text-green-500">
              **pronoun** was attacked earlier (&gt; 6 hours ago)
            </p>
          ),
          pushCodes: ["03A03"],
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk when attack happened",
          answerDisplay: (
            <p className="text-blue-500">
              Unknown when **pronoun** was attacked
            </p>
          ),
          continue: true,
        },
      ],
    },

    {
      text: (
        <p className="text-red-500">
          What <b className="font-bold">kind</b> of{" "}
          <b className="font-bold">animal</b> is it?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "LARGE animal:",
          display: "Large animal: {input}",
          answerDisplay: (
            <p className="text-red-500">
              The animal is <b className="font-bold">LARGE</b>: **input**.
            </p>
          ),
          pushCodes: ["03D06"],
          answerPriority: 1,
          continue: true,
          input: true,
        },
        {
          answer: "EXOTIC:",
          display: "Exotic animal: {input}",
          answerDisplay: (
            <p className="text-red-500">
              The animal is <b className="font-bold">EXOTIC</b>: **input**.
            </p>
          ),
          pushCodes: ["03D07"],
          answerPriority: 1,
          continue: true,
          input: true,
        },
        {
          answer: "Insect",
          display: "Insect",
          answerDisplay: (
            <p className="text-green-500">The animal is an insect.</p>
          ),
          gotoProtocol: 2,
        },
        {
          answer: "Spider",
          display: "Spider",
          answerDisplay: (
            <p className="text-green-500">The animal is a spider.</p>
          ),
          gotoProtocol: 2,
        },
        {
          answer: "Snake",
          display: "Snake",
          answerDisplay: (
            <p className="text-green-500">The animal is a snake.</p>
          ),
          gotoProtocol: 2,
        },
        {
          answer: "Other:",
          display: "Other animal: {input}",
          answerDisplay: (
            <p className="text-green-500">Other animal involved: **input**.</p>
          ),
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk animal involved",
          answerDisplay: (
            <p className="text-blue-500">
              Unknown what kind of animal was involved.
            </p>
          ),
          continue: true,
        },
      ],
    },

    {
      text: (
        <p className="text-red-500">
          How <b className="font-bold">many</b> animals are involved?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Single",
          display: "Single animal",
          answerDisplay: (
            <p className="text-green-500">A single animal is involved.</p>
          ),
          continue: true,
        },
        {
          answer: "Multiple (input number):",
          display: "{input} animals",
          answerDisplay: (
            <p className="text-red-500">
              There are **input** animals involved.
            </p>
          ),
          pushCodes: ["03D08"],
          answerPriority: 1,
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk number of animals",
          answerDisplay: (
            <p className="text-blue-500">Unknown number of animals involved.</p>
          ),
          continue: true,
        },
      ],
    },

    {
      text: (
        <p className="text-red-500">
          <b className="font-bold">Where</b> is (are) the animal(s){" "}
          <b className="font-bold">now</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Location:",
          display: "Animal location: {input}",
          answerDisplay: (
            <p className="text-red-500">
              The animal is currently located at:{" "}
              <b className="font-bold">**input**</b>.
            </p>
          ),
          answerPriority: 2,
          continue: true,
          input: true,
        },
        {
          answer: "Gone",
          display: "Animal is gone",
          answerDisplay: (
            <p className="text-green-500">
              The animal is <b className="font-bold">gone</b>.
            </p>
          ),
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk animal location",
          answerDisplay: (
            <p className="text-blue-500">
              Unknown where the animal is currently located.
            </p>
          ),
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is there any <b className="font-bold">SERIOUS bleeding</b> (spurting
          or pouring)?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No SERIOUS bleeding",
          answerDisplay: (
            <p className="text-green-500">
              There is <b className="font-bold">no SERIOUS bleeding</b>.
            </p>
          ),
          continue: true,
        },
        {
          answer: "Yes",
          display: "SERIOUS bleeding",
          answerDisplay: (
            <p className="text-red-500">
              There is <b className="font-bold">SERIOUS bleeding</b>.
            </p>
          ),
          answerPriority: 1,
          pushCodes: ["03B02"],
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if SERIOUS bleeding",
          answerDisplay: (
            <p className="text-blue-500">
              Unknown if there is <b className="font-bold">SERIOUS</b> bleeding.
            </p>
          ),
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is **pronoun** <b className="font-bold">responding normally</b>{" "}
          (completely alert)?
        </p>
      ),
      firstPersonText: (
        <p className="text-blue-500">
          Is **pronoun** <b className="font-bold">responding normally</b>{" "}
          (completely alert)?
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
              **pronoun** is <b className="font-bold">NOT</b> responding
              normally.
            </p>
          ),
          answerPriority: 1,
          pushCodes: ["03D03"],
          send: true,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if responding nlly",
          answerDisplay: (
            <p className="text-blue-500">
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
          What <b className="font-bold">part</b> of the body was{" "}
          <b className="font-bold">injured/bitten</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Chest",
          display: "Injs to chest",
          answerDisplay: (
            <p className="text-red-500">
              **pronoun** has injuries to the chest.
            </p>
          ),
          answerPriority: 1,
          continue: true,
        },
        {
          answer: "Neck",
          display: "Injs to neck",
          answerDisplay: (
            <p className="text-red-500">
              **pronoun** has injuries to the neck.
            </p>
          ),
          answerPriority: 1,
          continue: true,
        },
        {
          answer: "Head",
          display: "Injs to head",
          answerDisplay: (
            <p className="text-red-500">
              **pronoun** has injuries to the head.
            </p>
          ),
          answerPriority: 1,
          continue: true,
        },
        {
          answer: "DANGEROUS body area",
          display: "Injs to DANG body area",
          answerDisplay: (
            <p className="text-red-500">
              **pronoun** has injuries to a{" "}
              <b className="font-bold">DANGEROUS</b> body area.
            </p>
          ),
          answerPriority: 1,
          continue: true,
        },
        {
          answer: "POSSIBLY DANGEROUS body area",
          display: "Injs to POSSIBLY DANG body area",
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
          answer: "NOT DANGEROUS body area (not head, neck or chest)",
          display: "Inj to NOT DANG body area (not head/neck/chest)",
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
          answer: "Other:",
          display: "Injs to other body area: {input}",
          answerDisplay: (
            <p className="text-yellow-500">
              **pronoun** has injuries to other body area: **input**
            </p>
          ),
          answerPriority: 3,
          pushCodes: ["03B03"],
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Injs to unk body area",
          answerDisplay: (
            <p className="text-yellow-500">
              **pronoun** has injuries to an unknown body area.
            </p>
          ),
          pushCodes: ["03B03"],
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
          (a) => a.rawText === "What part of the body was injured/bitten?"
        )?.answer;
        return (
          targetAnswer === "Chest" ||
          targetAnswer === "Neck" ||
          targetAnswer === "Head"
        );
      },
      preRenderLogic: "the pt has a chest, neck, or head injury",
      preRenderDeps: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No diff breathing",
          answerDisplay: (
            <p className="text-green-500">
              **pronoun** is <b className="font-bold">not</b> having difficulty
              breathing.
            </p>
          ),
          pushCodes: ["03B01"],
          answerPriority: 1,
          continue: true,
        },
        {
          answer: "Yes",
          display: "Diff breathing",
          answerDisplay: (
            <p className="text-red-500">
              **pronoun** is having{" "}
              <b className="font-bold">difficulty breathing</b>.
            </p>
          ),
          pushCodes: ["03D04"],
          send: true,
          answerPriority: 1,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if diff breathing",
          answerDisplay: (
            <p className="text-yellow-500">
              Unknown if **pronoun** is having{" "}
              <b className="font-bold">difficulty breathing</b>.
            </p>
          ),
          pushCodes: ["03B03"],
          answerPriority: 2,
        },
      ],
    },

    {
      text: (
        <p className="text-blue-500">
          What <b className="font-bold">DANGEROUS</b> body area is injured?
        </p>
      ),
      preRenderInstructions: (_patient, answers) => {
        const targetAnswer = answers.find(
          (a) => a.rawText === "What part of the body was injured/bitten?"
        )?.answer;
        return targetAnswer === "DANGEROUS body area";
      },
      preRenderLogic: "the pt has a DANGEROUS body area injury",
      preRenderDeps: ["answers"],
      questionType: "select",
      answers: [
        {
          answer: "Armpit",
          display: "DANG area: armpit",
          answerDisplay: (
            <p className="text-red-500">
              The <b className="font-bold">DANGEROUS</b> body area is: armpit
            </p>
          ),
          answerPriority: 1,
          pushCodes: ["03D05"],
          send: true,
          end: true,
        },
        {
          answer: "Groin",
          display: "DANG area: groin",
          answerDisplay: (
            <p className="text-red-500">
              The <b className="font-bold">DANGEROUS</b> body area is: groin
            </p>
          ),
          answerPriority: 1,
          pushCodes: ["03D05"],
          send: true,
          end: true,
        },
        {
          answer: "None of these",
          display: "No DANG area ID'd",
          answerDisplay: (
            <p className="text-green-500">
              No <b className="font-bold">DANGEROUS</b> body area identified.
            </p>
          ),
          answerPriority: 2,
          continue: true,
        },
      ],
    },

    {
      text: (
        <p className="text-blue-500">
          What <b className="font-bold">POSSIBLY DANGEROUS</b> body area is
          injured?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const targetAnswer = answers.find(
          (a) => a.rawText === "What part of the body was injured/bitten?"
        )?.answer;

        const dangBodyAreaAnswer = answers?.find(
          (a) => a.rawText === "What DANGEROUS body area is injured?"
        )?.answer;

        return (
          targetAnswer === "POSSIBLY DANGEROUS body area" ||
          dangBodyAreaAnswer === "None of these"
        );
      },
      preRenderLogic:
        "the pt has a POSSIBLY DANGEROUS body area injury or no DANGEROUS body area identified",
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
          pushCodes: ["03B01"],
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
          pushCodes: ["03B01"],
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
          pushCodes: ["03B01"],
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
          pushCodes: ["03B01"],
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
          pushCodes: ["03B01"],
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
          pushCodes: ["03B01"],
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
          pushCodes: ["03B01"],
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
          pushCodes: ["03B01"],
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
        <p className="text-blue-500">
          What <b className="font-bold">NOT DANGEROUS</b> body area is injured?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const targetAnswer = answers.find(
          (a) => a.rawText === "What part of the body was injured/bitten?"
        )?.answer;
        const possDangBodyAreaAnswer = answers.find(
          (a) => a.rawText === "What POSSIBLY DANGEROUS body area is injured?"
        )?.answer;
        return (
          targetAnswer === "NOT DANGEROUS body area" ||
          possDangBodyAreaAnswer === "None of these"
        );
      },
      preRenderLogic:
        "the pt has a NOT DANGEROUS body area injury or no POSSIBLY DANGEROUS body area identified",
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
          pushCodes: ["03A02"],
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
          pushCodes: ["03A02"],
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
          pushCodes: ["03A02"],
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
          pushCodes: ["03A02"],
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
          pushCodes: ["03A02"],
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
          pushCodes: ["03A02"],
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
          pushCodes: ["03A02"],
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
          pushCodes: ["03A02"],
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
          pushCodes: ["03A02"],
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
          pushCodes: ["03A02"],
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
          pushCodes: ["03A02"],
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
          pushCodes: ["03A02"],
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
          pushCodes: ["03B03"],
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
          pushCodes: ["03A02"],
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
              return { pushCodes: ["03B01"], send: true };
            } else {
              return { pushCodes: ["03A01"], send: true };
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
          code: "03A01",
          text: (
            <p>
              <b className="font-bold">Marked</b> (*){" "}
              <b className="font-bold">NOT DANGEROUS</b> body area with{" "}
              <b className="font-bold">deformity</b>
            </p>
          ),
          recResponse: 9,
          priority: 2,
        },
        {
          code: "03A02",
          text: (
            <p>
              <b className="font-bold">NOT DANGEROUS</b> body area
            </p>
          ),
          recResponse: 9,
          priority: 3,
        },
        {
          code: "03A03",
          text: (
            <p>
              <b className="font-bold">NON-RECENT</b> (&gt;=6hrs) injuries (
              <b className="font-bold">without</b> priority symptoms)
            </p>
          ),
          recResponse: 10,
          priority: 1,
        },
        {
          code: "03A04",
          text: (
            <p>
              <b className="font-bold">SUPERFICIAL</b> injuries
            </p>
          ),
          recResponse: 10,
          priority: 4,
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "03B00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 9,
          priority: 0,
        },
        {
          code: "03B01",
          text: (
            <p>
              <b className="font-bold">POSSIBLY DANGEROUS</b> body area
            </p>
          ),
          recResponse: 9,
          priority: 2,
        },
        {
          code: "03B02",
          text: (
            <p>
              <b className="font-bold">SERIOUS</b> hemorrhage
            </p>
          ),
          recResponse: 9,
          priority: 1,
        },
        {
          code: "03B03",
          text: (
            <p>
              <b className="font-bold">Unknown</b> status/
              <b className="font-bold">Other</b> codes{" "}
              <b className="font-bold">not</b> applicable
            </p>
          ),
          recResponse: 9,
          priority: 3,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "03D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 11,
          priority: 0,
        },
        {
          code: "03D01",
          text: <p className="font-bold">Arrest</p>,
          recResponse: 12,
          notBreathing: true,
          priority: 1,
        },
        {
          code: "03D02",
          text: <p className="font-bold">Unconscious</p>,
          recResponse: 13,
          notConscious: true,
          priority: 2,
        },
        {
          code: "03D03",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 11,
          priority: 3,
        },
        {
          code: "03D04",
          text: (
            <p>
              <b className="font-bold">Chest/Neck/Head</b> injury (with{" "}
              <b className="font-bold">difficulty</b> breathing)
            </p>
          ),
          recResponse: 11,
          priority: 4,
        },
        {
          code: "03D05",
          text: (
            <p>
              <b className="font-bold">DANGEROUS</b> body area
            </p>
          ),
          recResponse: 11,
          priority: 5,
        },
        {
          code: "03D06",
          text: (
            <p>
              <b className="font-bold">Large</b> animal
            </p>
          ),
          recResponse: 11,
          priority: 6,
        },
        {
          code: "03D07",
          text: (
            <p>
              <b className="font-bold">EXOTIC</b> animal
            </p>
          ),
          recResponse: 11,
          priority: 7,
        },
        {
          code: "03D08",
          text: (
            <p>
              <b className="font-bold">MAULING</b> or{" "}
              <b className="font-bold">multiple</b> animals
            </p>
          ),
          recResponse: 11,
          priority: 8,
        },
        {
          code: "03D09",
          text: (
            <p>
              <b className="font-bold">Attack</b> in progress
            </p>
          ),
          recResponse: 11,
          priority: 9,
        },
      ],
    },
  ],
  pdis: {
    instructions: [],
    dls: [],
  },
};
