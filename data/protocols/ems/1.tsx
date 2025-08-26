import { IEMSProtocol } from "@/models/interfaces";

export const ABDO_PN: IEMSProtocol = {
  protocol: 1,
  name: "Abdominal Pain / Problems",
  shortName: "Abdo Pain",
  description: (
    <>
      <p>
        Key considerations for Abdominal Pain include patient alertness,
        pregnancy status for females of childbearing age, fainting/syncope, pain
        characteristics (especially ripping/tearing pain that may indicate
        aortic issues), and pain location.
      </p>
      <p className="mt-2">
        Pay special attention to age and gender factors, as they significantly
        impact determinant selection. For example, males over 35 with pain above
        the navel may require a higher response level due to increased cardiac
        risk.
      </p>
      <p className="mt-2">
        <span className="font-medium">REMEMBER:</span> Pain{" "}
        <span className="text-red-500 font-medium">above the navel</span> in
        older adults often signals greater risk, especially for cardiac or
        vascular emergencies. Use skin color (ashen/gray), fainting symptoms,
        and pain description to guide response escalation. Groin/testicular pain
        in males, while less urgent, still requires appropriate classification.
        Think in terms of:
      </p>
      <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground space-y-1">
        <li>
          <span className="font-medium">Above Navel</span> + Age + Gender →
          Increased concern
        </li>
        <li>
          <span className="font-medium">Tearing Pain</span> → Possible vascular
          event
        </li>
        <li>
          <span className="font-medium">Not Alert / Fainting</span> → Prioritize
          immediately
        </li>
      </ul>
    </>
  ),
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "C" },
    { name: "Police", priority: undefined },
  ],
  defaultCode: "01A01",
  defaultPriority: "A",
  defaultPlan: 1,
  availableTracks: [
    { id: 1, name: "Testicle or groin pain (male)" },
    { id: 2, name: "Diagnosed aortic aneurysm" }
  ],
  information: <></>,
  questions: [
    {
      text: (
        <p>
          Is **pronoun** <b className="font-bold">responding normally</b>{" "}
          (completely alert)?
        </p>
      ),
      firstPersonText: (
        <p className="text-blue-400 font-semibold">
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
          answerPriority: 1,
          answerDisplay: (
            <p className="text-red-500">
              **pronoun** is <b className="font-bold">NOT</b> responding
              normally.
            </p>
          ),
          pushCodes: ["01D01"],
          send: true,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if responding nlly",
          answerDisplay: (
            <p className="text-amber-500">
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
          Is she <b className="font-bold">pregnant</b>?
        </p>
      ),
      firstPersonText: (
        <p>
          Are you <b className="font-bold">pregnant</b>
        </p>
      ),
      preRenderInstructions: (patient) => {
        const { age, age_unit, gender } = patient;
        if (gender !== "female") return false;
        return age >= 12 && age <= 50 && age_unit === "year";
      },
      preRenderDeps: ["patient"],
      preRenderLogic: "The pt is a female between 12 and 50 years of age",
      questionType: "select",
      answers: [
        {
          answer: "No",
          answerDisplay: (
            <p className="text-green-500">**pronoun** is NOT pregnant.</p>
          ),
          continue: true,
        },
        {
          answer: "Yes",
          answerDisplay: (
            <p className="text-blue-500">**pronoun** is pregnant.</p>
          ),
          answerPriority: 2,
          gotoProtocol: 24,
        },
        {
          answer: "Unknown",
          answerDisplay: (
            <p className="text-amber-500">Unknown if **pronoun** is pregnant</p>
          ),
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Has **pronoun** ever been <b className="font-bold">diagnosed</b> with
          an <b className="font-bold">aortic aneurysm</b>?
        </p>
      ),
      firstPersonText: (
        <p>
          Have you ever been <b className="font-bold">diagnosed</b> with an{" "}
          <b className="font-bold">aortic aneurysm</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No diagnosed aortic aneurysm",
          answerDisplay: (
            <p className="text-green-500">
              **pronoun** does not have a diagnosed aortic aneurysm
            </p>
          ),
          continue: true,
        },
        {
          answer: "Yes",
          display: "Diagnosed aortic aneurysm",
          answerDisplay: (
            <p className="text-green-500">
              **pronoun** has a{" "}
              <b className="font-bold">diagnosed aortic aneurysm</b>
            </p>
          ),
          answerPriority: 2,
          preRenderInstructions: (patient) => {
            const { age, age_unit } = patient;
            return age >= 50 && age_unit === "year";
          },
          preRenderDeps: ["patient"],
          preRenderLogic: "the patient is older than 50yrs",
          pushCodes: ["01C02"],
          continue: true,
        },
        {
          answer: "Yes",
          display: "Diagnosed aortic aneurysm",
          answerDisplay: (
            <p className="text-green-500">
              **pronoun** has a{" "}
              <b className="font-bold">diagnosed aortic aneurysm</b>
            </p>
          ),
          preRenderInstructions: (patient) => {
            const { age, age_unit } = patient;
            return age < 50 || age_unit !== "year";
          },
          answerPriority: 2,
          preRenderDeps: ["patient"],
          preRenderLogic: "the patient is older than 50yrs",
          pushCodes: ["01C02"],
          send: true,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if diagnosed aortic aneurysm",
          answerDisplay: (
            <p className="text-green-400">
              Unknown if **pronoun** has a diagnosed aortic aneurysm
            </p>
          ),
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is **pronoun** able to <b className="font-bold">describe</b> the pain?
        </p>
      ),
      firstPersonText: (
        <p>
          Are you able to <b className="font-bold">describe</b> the pain?
        </p>
      ),
      preRenderInstructions: (patient) => {
        const { age, age_unit } = patient;
        return age >= 50 && age_unit === "year";
      },
      preRenderDeps: ["patient"],
      preRenderLogic: "the patient is older than 50yrs",
      questionType: "select",
      answers: [
        {
          answer: "Ripping/tearing",
          display: "Ripping/tearing pn",
          answerDisplay: (
            <p className="text-green-500">
              **pronoun** describes the pain as{" "}
              <b className="font-bold">ripping/tearing</b>
            </p>
          ),
          answerPriority: 2,
          pushCodes: ["01C01"],
          continue: true,
          send: true,
        },
        {
          answer: "Other (input):",
          display: "Pain described as: {input}",
          answerDisplay: (
            <p className="text-green-500">
              **pronoun** describes the pain as **input**
            </p>
          ),
          continue: true,
          input: true,
        },
        {
          answer: "Unable",
          display: "Unable to describe pn",
          answerDisplay: (
            <p className="text-green-500">
              **pronoun** is unable to describe the pain
            </p>
          ),
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Did **pronoun** <b className="font-bold">faint</b> (pass out) or{" "}
          <b className="font-bold">nearly</b> faint?
        </p>
      ),
      firstPersonText: (
        <p>
          Did you <b className="font-bold">faint</b> (pass out) or{" "}
          <b className="font-bold">nearly</b> faint?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "NOT fainted or nearly faint",
          answerDisplay: (
            <p className="text-green-500">
              **pronoun** fainted or nearly fainted.
            </p>
          ),
          continue: true,
        },
        {
          answer: "Yes",
          display: "Fainted or nearly faint",
          answerDisplay: (
            <p className="text-green-500">
              **pronoun** fainted or nearly fainted.
            </p>
          ),
          answerPriority: 2,
          dependency: (patient) => {
            const { age, age_unit, gender } = patient;
            if (age >= 50) {
              return { pushCodes: ["01C03"], send: true };
            } else if (
              age >= 12 &&
              age <= 50 &&
              gender === "female" &&
              age_unit === "year"
            ) {
              return { pushCodes: ["01C04"], send: true };
            }
          },
          dependencyDeps: ["patient"],
          dependencyLogic:
            "If pt is older than 50 -> 01C03, else if pt is a female between 12 and 50 yrs -> 01C04",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if fainted or nearly faint",
          answerDisplay: (
            <p className="text-green-500">
              Unknown if **pronoun** fainted or nearly fainted.
            </p>
          ),
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          <b className="font-bold">Where</b> is the pain{" "}
          <b className="font-bold">located</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Location (input):",
          display: "Pn located at: {input}",
          answerDisplay: <p>**pronoun2** pain is located at **input**</p>,
          continue: true,
          input: true,
        },
        {
          answer: "Groin/Testicles",
          display: "Pn in groin/testicles",
          answerDisplay: (
            <p>**pronoun2** pain is located in the groin/testicles</p>
          ),
          preRenderInstructions: (patient) => {
            return patient.gender === "male";
          },
          preRenderDeps: ["patient"],
          preRenderLogic: "The pt is male",
          continue: true,
        },
        {
          answer: "Unknown",
          answerDisplay: <p>Unknown where the pain is located</p>,
        },
      ],
    },

    {
      text: (
        <p>
          Does **pronoun** have any <b className="font-bold">testicle</b> or{" "}
          <b className="font-bold">groin</b> pain?
        </p>
      ),
      firstPersonText: (
        <p>
          Do you have any <b className="font-bold">testicle</b> or{" "}
          <b className="font-bold">groin</b> pain?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient, answers) => {
        const targetAnswer = answers.find(
          (a) => a.rawText === "Where is the pain located?"
        )?.answer;
        return targetAnswer !== "Groin/Testicles" && patient.gender === "male";
      },
      preRenderDeps: ["patient", "questions"],
      preRenderLogic:
        "the answer to the last question is not Groin/Testicles and the patient is a male",
      answers: [
        {
          answer: "No",
          display: "No groin/testicle pn",
          answerDisplay: (
            <p className="text-green-500">
              **pronoun** has <b className="font-bold">no</b> groin/testicle
              pain
            </p>
          ),
          continue: true,
        },
        {
          answer: "Yes",
          display: "Groin/testicle pn",
          answerDisplay: (
            <p className="text-green-500">
              **pronoun** has groin/testicle pain
            </p>
          ),
          continue: true,
          pushCodes: ["01A02"],
        },
        {
          answer: "Unknown",
          display: "Unk if groin/testicle pn",
          answerDisplay: (
            <p className="text-green-500">
              Unknown if **pronoun** has groin/testicle pain
            </p>
          ),
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          <span className="text-blue-400">(Not already stated)</span> Is there
          any pain <b className="font-bold">above</b> the{" "}
          <b className="font-bold">belly button</b> (navel)?
        </p>
      ),
      preRenderInstructions: (patient) => {
        const { age, age_unit, gender } = patient;
        return (
          (gender === "female" && age >= 45 && age_unit === "year") ||
          (gender === "male" && age >= 35 && age_unit === "year")
        );
      },
      preRenderDeps: ["patient"],
      preRenderLogic:
        "If pt is female and >= 45 years old or male and >= 35 years old",
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No pn above belly button",
          answerDisplay: <p>**pronoun** has no pain above the navel</p>,
          end: true,
        },
        {
          answer: "Yes",
          display: "Pn above belly button",
          answerDisplay: (
            <p className="text-green-400">
              **pronoun** has pain above the navel
            </p>
          ),
          answerPriority: 2,
          dependency: (patient) => {
            const { gender } = patient;
            if (gender === "female") {
              return { pushCodes: ["01C06"], send: true };
            } else if (gender === "male") {
              return { pushCodes: ["01C05"], send: true };
            }
          },
          end: true,
        },
        {
          answer: "Unknown",
          display: "Unk if pn above belly button",
          answerDisplay: <p>Unknown if **pronoun** has pain above the navel</p>,
          end: true,
        },
      ],
    },
  ],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "01A01",
          text: <p>Abdominal pain</p>,
          recResponse: 1,
          priority: 2,
        },
        {
          code: "01A02",
          text: (
            <p>
              Non-traumatic <b className="font-bold">testicle</b> or{" "}
              <b className="font-bold">groin</b> pain (male)
            </p>
          ),
          recResponse: 2,
          priority: 1,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "01C00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 3,
          priority: 0,
        },
        {
          code: "01C01",
          text: (
            <p>
              <b className="font-bold">SUSPECTED</b> aortic{" "}
              <b className="font-bold">aneurysm</b> (tearing/ripping pain) &gt;=
              50
            </p>
          ),
          recResponse: 3,
          priority: 1,
        },
        {
          code: "01C02",
          text: (
            <p>
              <b className="font-bold">Diagnosed</b> aortic{" "}
              <b className="font-bold">aneurysm</b>
            </p>
          ),
          recResponse: 3,
          priority: 2,
        },
        {
          code: "01C03",
          text: (
            <p>
              <b className="font-bold">Fainting</b> or{" "}
              <b className="font-bold">near fainting</b> &gt;=50
            </p>
          ),
          recResponse: 3,
          priority: 3,
        },
        {
          code: "01C04",
          text: (
            <p>
              <b className="font-bold">Females</b> with{" "}
              <b className="font-bold">fainting</b> or{" "}
              <b className="font-bold">near fainting</b> 12-50
            </p>
          ),
          recResponse: 3,
          priority: 4,
        },
        {
          code: "01C05",
          text: (
            <p>
              <b className="font-bold">Males</b> with{" "}
              <b className="font-bold">pain above navel</b> &gt;=35
            </p>
          ),
          recResponse: 2,
          priority: 5,
        },
        {
          code: "01C06",
          text: (
            <p>
              <b className="font-bold">Females</b> with{" "}
              <b className="font-bold">pain above navel</b> &gt;=45
            </p>
          ),
          recResponse: 2,
          priority: 6,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "01D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 3,
          priority: 0,
        },
        {
          code: "01D01",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 3,
          priority: 1,
        },
        {
          code: "01D02",
          text: (
            <p>
              <b className="font-bold">Ashen</b> or{" "}
              <b className="font-bold">gray</b> color reported &gt;=50
            </p>
          ),
          recResponse: 3,
          priority: 2,
        },
      ],
    },
  ],
  pdis: {
    instructions: [
      {
        text: (
          <p>
            I'm sending the <b className="font-bold">paramedics</b> (ambulance)
            to help you now. <b className="font-bold">Stay on the line</b> and
            I'll tell you <b className="font-bold">exactly</b> what to do next.
          </p>
        ),
      },
    ],
    dls: [
      {
        text: "Unconscious",
        goto: "NABC-1",
      },
    ],
  },
};
