import { IEMSProtocol } from "@/models/interfaces";

export const TRANSFER: IEMSProtocol = {
  protocol: 33,
  name: "Transfer / Interfacility / Palliative Care",
  shortName: "Transport",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: undefined },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultCode: "33A01",
  defaultPlan: 201,
  information: <></>,
  questions: [
    {
      text: (
        <p>
          Is this call a <b className="font-bold">result</b> of an{" "}
          <b className="font-bold">evaluation</b> by a{" "}
          <b className="font-bold">nurse</b> or{" "}
          <b className="font-bold">doctor</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          answerDisplay: (
            <p className="text-green-500">
              Call resulted from medical{" "}
              <b className="font-bold">evaluation.</b>
            </p>
          ),
          continue: true,
        },
        {
          answer: "No",
          answerDisplay: (
            <p className="text-green-500">No medical evaluation performed.</p>
          ),
          continue: true,
        },
        {
          answer: "Unknown",
          answerDisplay: (
            <p className="text-green-500">
              Unknown if medical evaluation performed.
            </p>
          ),
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          What is **pronouns** <b className="font-bold">chief complaint</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const targetAnswer = answers.find(
          (a) =>
            a.rawText ===
            "Is this call a result of an evaluation by a nurse or doctor?"
        )?.answer;
        return targetAnswer !== "Yes";
      },
      preRenderLogic:
        "the call is not resulting from a nurse/doctor evaluation",
      preRenderDeps: ["answers"],
      answers: [
        {
          answer: "Abdominal Pain / Problems",
          display: "Chief complaint: Abdominal Pain / Problems",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Abdominal Pain / Problems.
            </p>
          ),
          gotoProtocol: 1,
        },
        {
          answer: "Allergies (Reactions) / Envenomations (Stings, Bites)",
          display:
            "Chief complaint: Allergies (Reactions) / Envenomations (Stings, Bites)",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Allergies (Reactions) /
              Envenomations (Stings, Bites).
            </p>
          ),
          gotoProtocol: 2,
        },
        {
          answer: "Animal Bites / Attacks",
          display: "Chief complaint: Animal Bites / Attacks",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Animal Bites / Attacks.
            </p>
          ),
          gotoProtocol: 3,
        },
        {
          answer: "Assault / Sexual Assault / Stun Gun",
          display: "Chief complaint: Assault / Sexual Assault / Stun Gun",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Assault / Sexual Assault / Stun
              Gun.
            </p>
          ),
          gotoProtocol: 4,
        },
        {
          answer: "Back Pain (Non-Traumatic or Non-Recent Trauma)",
          display:
            "Chief complaint: Back Pain (Non-Traumatic or Non-Recent Trauma)",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Back Pain (Non-Traumatic or
              Non-Recent Trauma).
            </p>
          ),
          gotoProtocol: 5,
        },
        {
          answer: "Breathing Problems",
          display: "Chief complaint: Breathing Problems",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Breathing Problems.
            </p>
          ),
          gotoProtocol: 6,
        },
        {
          answer: "Burns (Scalds) / Explosion (Blast)",
          display: "Chief complaint: Burns (Scalds) / Explosion (Blast)",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Burns (Scalds) / Explosion
              (Blast).
            </p>
          ),
          gotoProtocol: 7,
        },
        {
          answer: "Carbon Monoxide / Inhalation / Hazmat / CBRN",
          display:
            "Chief complaint: Carbon Monoxide / Inhalation / Hazmat / CBRN",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Carbon Monoxide / Inhalation /
              Hazmat / CBRN.
            </p>
          ),
          gotoProtocol: 8,
        },
        {
          answer: "Cardiac or Respiratory Arrest / Death",
          display: "Chief complaint: Cardiac or Respiratory Arrest / Death",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Cardiac or Respiratory Arrest /
              Death.
            </p>
          ),
          gotoProtocol: 9,
        },
        {
          answer: "Chest Pain (Non-Traumatic)",
          display: "Chief complaint: Chest Pain (Non-Traumatic)",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Chest Pain (Non-Traumatic).
            </p>
          ),
          gotoProtocol: 10,
        },
        {
          answer: "Choking",
          display: "Chief complaint: Choking",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Choking.
            </p>
          ),
          gotoProtocol: 11,
        },
        {
          answer: "Convulsions / Seizures",
          display: "Chief complaint: Convulsions / Seizures",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Convulsions / Seizures.
            </p>
          ),
          gotoProtocol: 12,
        },
        {
          answer: "Diabetic Problems",
          display: "Chief complaint: Diabetic Problems",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Diabetic Problems.
            </p>
          ),
          gotoProtocol: 13,
        },
        {
          answer: "Drowning (Near) / Diving / SCUBA Accident",
          display: "Chief complaint: Drowning (Near) / Diving / SCUBA Accident",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Drowning (Near) / Diving / SCUBA
              Accident.
            </p>
          ),
          gotoProtocol: 14,
        },
        {
          answer: "Electrocution / Lightning",
          display: "Chief complaint: Electrocution / Lightning",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Electrocution / Lightning.
            </p>
          ),
          gotoProtocol: 15,
        },
        {
          answer: "Eye Problems / Injuries",
          display: "Chief complaint: Eye Problems / Injuries",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Eye Problems / Injuries.
            </p>
          ),
          gotoProtocol: 16,
        },
        {
          answer: "Falls",
          display: "Chief complaint: Falls",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Falls.
            </p>
          ),
          gotoProtocol: 17,
        },
        {
          answer: "Headache",
          display: "Chief complaint: Headache",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Headache.
            </p>
          ),
          gotoProtocol: 18,
        },
        {
          answer: "Heart Problems / A.I.C.D.",
          display: "Chief complaint: Heart Problems / A.I.C.D.",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Heart Problems / A.I.C.D..
            </p>
          ),
          gotoProtocol: 19,
        },
        {
          answer: "Heat / Cold Exposure",
          display: "Chief complaint: Heat / Cold Exposure",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Heat / Cold Exposure.
            </p>
          ),
          gotoProtocol: 20,
        },
        {
          answer: "Hemorrhage / Laceration",
          display: "Chief complaint: Hemorrhage / Laceration",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Hemorrhage / Laceration.
            </p>
          ),
          gotoProtocol: 21,
        },
        {
          answer: "Inaccessible Incident / Other Entrapments (Non-Traffic)",
          display:
            "Chief complaint: Inaccessible Incident / Other Entrapments (Non-Traffic)",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Inaccessible Incident / Other
              Entrapments (Non-Traffic).
            </p>
          ),
          gotoProtocol: 22,
        },
        {
          answer: "Overdose / Poisoning (Ingestion)",
          display: "Chief complaint: Overdose / Poisoning (Ingestion)",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Overdose / Poisoning (Ingestion)
              .
            </p>
          ),
          gotoProtocol: 23,
        },
        {
          answer: "Pregnancy / Childbirth / Miscarriage",
          display: "Chief complaint: Pregnancy / Childbirth / Miscarriage",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Pregnancy / Childbirth /
              Miscarriage.
            </p>
          ),
          gotoProtocol: 24,
        },
        {
          answer:
            "Psychiatric / Mental Health Conditions / Suicide Attempt / Abnormal Behavior",
          display:
            "Chief complaint: Psychiatric / Mental Health Conditions / Suicide Attempt / Abnormal Behavior",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Psychiatric / Mental Health
              Conditions / Suicide Attempt / Abnormal Behavior.
            </p>
          ),
          gotoProtocol: 25,
        },
        {
          answer: "Sick Person (Specific Diagnosis)",
          display: "Chief complaint: Sick Person (Specific Diagnosis)",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Sick Person (Specific Diagnosis)
              .
            </p>
          ),
          gotoProtocol: 26,
        },
        {
          answer: "Stab / Gunshot / Penetrating Trauma",
          display: "Chief complaint: Stab / Gunshot / Penetrating Trauma",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Stab / Gunshot / Penetrating
              Trauma.
            </p>
          ),
          gotoProtocol: 27,
        },
        {
          answer: "Stroke (CVA) / Transient Ischemic Attack (TIA)",
          display:
            "Chief complaint: Stroke (CVA) / Transient Ischemic Attack (TIA)",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Stroke (CVA) / Transient Ischemic
              Attack (TIA).
            </p>
          ),
          gotoProtocol: 28,
        },
        {
          answer: "Traffic / Transportation Incidents",
          display: "Chief complaint: Traffic / Transportation Incidents",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Traffic / Transportation
              Incidents.
            </p>
          ),
          gotoProtocol: 29,
        },
        {
          answer: "Traumatic Injuries (Specific)",
          display: "Chief complaint: Traumatic Injuries (Specific)",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Traumatic Injuries (Specific).
            </p>
          ),
          gotoProtocol: 30,
        },
        {
          answer: "Unconscious / Fainting (Near)",
          display: "Chief complaint: Unconscious / Fainting (Near)",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Unconscious / Fainting (Near).
            </p>
          ),
          gotoProtocol: 31,
        },
        {
          answer: "Unknown Problem (Person Down)",
          display: "Chief complaint: Unknown Problem (Person Down)",
          answerDisplay: (
            <p className="text-blue-500">
              **pronoun2** chief complaint is: Unknown Problem (Person Down).
            </p>
          ),
          gotoProtocol: 32,
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
          display: "Not responding nlly",
          answerDisplay: (
            <p className="text-yellow-500">
              **pronoun** is not responding normally.
            </p>
          ),
          continue: true,
          answerPriority: 1,
        },
        {
          answer: "Unknown",
          display: "Unk if responding nlly",
          answerDisplay: (
            <p className="text-yellow-500">
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
          Is this a <b className="font-bold">sudden</b> or{" "}
          <b className="font-bold">unexpected change</b> in **pronoun2**{" "}
          <b className="font-bold">usual</b> condition?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const targetAnswer = answers.find(
          (a) =>
            a.rawText ===
            "Is **pronoun** responding normally (completely alert)?"
        )?.answer;
        return targetAnswer === "No";
      },
      preRenderLogic: "the patient is not responding normally",
      preRenderDeps: ["answers"],
      answers: [
        {
          answer: "Yes",
          display: "Sudden change in alertness",
          answerDisplay: (
            <p className="text-red-500">
              The change in alertness was sudden or unexpected.
            </p>
          ),
          answerPriority: 1,
          pushCodes: ["33C01"],
        },
        {
          answer: "No",
          display: "No sudden change in alertness",
          answerDisplay: (
            <p className="text-green-500">
              There was no sudden or unexpected change in alertness.
            </p>
          ),
          answerPriority: 1,
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is **pronoun** <b className="font-bold">breathing normally</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Breathing nlly",
          answerDisplay: (
            <p className="text-green-500">**pronoun** is breathing normally.</p>
          ),
          continue: true,
        },
        {
          answer: "No",
          display: "Not breathing nlly",
          answerDisplay: (
            <p className="text-yellow-500">
              **pronoun** is not breathing normally.
            </p>
          ),
          answerPriority: 2,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if breathing nlly",
          answerDisplay: (
            <p className="text-yellow-500">
              Unknown if **pronoun** is breathing normally.
            </p>
          ),
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is this a <b className="font-bold">sudden</b> or{" "}
          <b className="font-bold">unexpected change</b> in **pronoun2**{" "}
          <b className="font-bold">usual</b> condition?
        </p>
      ),
      preRenderInstructions: (_patient, answers) => {
        const targetAnswer = answers.find(
          (a) => a.rawText === "Is **pronoun** breathing normally?"
        )?.answer;
        return targetAnswer === "No";
      },
      preRenderLogic: "the patient is not breathing normally",
      preRenderDeps: ["answers"],
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Sudden change in breathing",
          answerDisplay: (
            <p className="text-red-500">
              The change in breathing was sudden or unexpected.
            </p>
          ),
          answerPriority: 2,
          pushCodes: ["33C02"],
        },
        {
          answer: "No",
          display: "No sudden change in breathing",
          answerDisplay: (
            <p className="text-green-500">
              There was no sudden or unexpected change in breathing.
            </p>
          ),
          answerPriority: 2,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if sudden change in breathing",
          answerDisplay: (
            <p className="text-yellow-500">
              Unknown if the change in breathing was sudden or unexpected.
            </p>
          ),
          answerPriority: 2,
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Does **pronoun** have any{" "}
          <b className="font-bold">significant bleeding</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No bleeding at all",
          display: "No bleeding",
          answerDisplay: (
            <p className="text-green-500">**pronoun** has no bleeding.</p>
          ),
          continue: true,
        },
        {
          answer: "Yes, minor bleeding",
          display: "Some bleeding, not SERIOUS",
          answerDisplay: (
            <p className="text-green-500">
              **pronoun** has minor bleeding that is not{" "}
              <b className="font-bold">SERIOUS</b>.
            </p>
          ),
          continue: true,
        },
        {
          answer: "Yes",
          display: "SERIOUS bleeding",
          answerDisplay: (
            <p className="text-red-500">
              **pronoun** has <b className="font-bold">SERIOUS</b> bleeding.
            </p>
          ),
          answerPriority: 2,
          continue: true,
          pushCodes: ["33C03"],
        },
        {
          answer: "Unknown",
          display: "Unk if SERIOUS bleeding",
          answerDisplay: (
            <p className="text-green-500">
              Unknown if **pronoun** has serious bleeding.
            </p>
          ),
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Does **pronoun** have any <b className="font-bold">shock symptoms</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No shock sx",
          answerDisplay: (
            <p className="text-green-500">**pronoun** has no shock symptoms.</p>
          ),
          continue: true,
        },
        {
          answer: "Yes (input):",
          display: "Shock symptoms: {input}",
          answerDisplay: (
            <p className="text-red-500">
              **pronoun** has shock symptoms: **input**
            </p>
          ),
          pushCodes: ["33C04"],
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk if shock sx",
          answerDisplay: (
            <p className="text-green-500">
              Unknown if **pronoun** has shock symptoms.
            </p>
          ),
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is **pronoun** in <b className="font-bold">severe pain</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No severe pain",
          answerDisplay: (
            <p className="text-green-500">**pronoun** is not in severe pain.</p>
          ),
          continue: true,
        },
        {
          answer: "Yes",
          display: "Severe pain",
          answerDisplay: (
            <p className="text-red-500">**pronoun** is in severe pain.</p>
          ),
          answerPriority: 2,
          continue: true,
          pushCodes: ["33C06"],
        },
        {
          answer: "Yes - Chest pain",
          display: "Severe chest pain",
          answerDisplay: (
            <p className="text-red-500">**pronoun** is in severe chest pain.</p>
          ),
          answerPriority: 2,
          continue: true,
          pushCodes: ["33C06"],
        },
        {
          answer: "Unknown",
          display: "Unk if severe pain",
          answerDisplay: (
            <p className="text-green-500">
              Unknown if **pronoun** is in severe pain.
            </p>
          ),
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Could this be an <b className="font-bold">MI</b>{" "}
          <span className="text-sm">(heart attack)</span>?
        </p>
      ),
      preRenderInstructions: (_patient, answers) => {
        const targetAnswer = answers.find((a) => a.rawText === "Is **pronoun** in severe pain?")?.answer;
        return targetAnswer === "Yes - Chest pain";
      },
      preRenderLogic: "the patient is in severe chest pain",
      preRenderDeps: ["answers"],
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No MI suspected",
          answerDisplay: (
            <p className="text-green-500">
              No myocardial infarction (heart attack) suspected.
            </p>
          ),
          continue: true,
        },
        {
          answer: "Yes",
          display: "Possible MI",
          answerDisplay: (
            <p className="text-red-500">
              Possible myocardial infarction (heart attack).
            </p>
          ),
          pushCodes: ["33C05"],
          answerPriority: 2,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if MI suspected",
          answerDisplay: (
            <p className="text-green-500">
              Unknown if myocardial infarction (heart attack) is suspected.
            </p>
          ),
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          <span className="text-blue-500">(Not already stated)</span> Does
          **pronoun2** condition require an{" "}
          <b className="font-bold">emergency response</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No emerg response requested",
          answerDisplay: (
            <p className="text-green-500">
              No emergency response requested for **pronoun2**.
            </p>
          ),
          continue: true,
        },
        {
          answer: "Yes",
          display: "Emerg response requested",
          answerDisplay: (
            <p className="text-red-500">
              Emergency response requested for **pronoun2**.
            </p>
          ),
          continue: true,
          answerPriority: 3,
          pushCodes: ["33C07"],
        },
        {
          answer: "Unknown",
          display: "Unk if emerg response requested",
          answerDisplay: (
            <p className="text-green-500">
              Unknown if emergency response is requested for **pronoun2**.
            </p>
          ),
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Will any <b className="font-bold">special equipment</b> be necessary?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No special equipment needed",
          answerDisplay: (
            <p className="text-green-500">
              No special equipment will be necessary.
            </p>
          ),
          continue: true,
        },
        {
          answer: "Yes (input):",
          display: "Special equipment needed: {input}",
          answerDisplay: (
            <p className="text-red-500">Special equipment needed: **input**</p>
          ),
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk if special equipment needed",
          answerDisplay: (
            <p className="text-green-500">
              Unknown if special equipment will be necessary.
            </p>
          ),
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Will <b className="font-bold">additional personnel</b> be required?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No additional personnel needed",
          answerDisplay: (
            <p className="text-green-500">
              No additional personnel will be necessary.
            </p>
          ),
          continue: true,
          send: true,
        },
        {
          answer: "Yes",
          display: "Additional personnel needed",
          answerDisplay: (
            <p className="text-red-500">
              Additional personnel needed: **input**
            </p>
          ),
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if additional personnel needed",
          answerDisplay: (
            <p className="text-green-500">
              Unknown if additional personnel will be necessary.
            </p>
          ),
          continue: true,
          send: true,
        },
      ],
    },

    {
      text: (
        <p>
          What <b className="font-bold">type</b> of personnel is required?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const targetAnswer = answers.find(
          (a) => a.rawText === "Will additional personnel be required?"
        )?.answer;
        return targetAnswer === "Yes";
      },
      preRenderLogic: "additional personnel are required",
      preRenderDeps: ["answers"],
      answers: [
        {
          answer: "Paramedic",
          display: "Paramedic(s) required",
          answerDisplay: <p className="text-red-500">Paramedic(s) required.</p>,
          continue: true,
          send: true,
        },
        {
          answer: "Nurse",
          display: "Nurse(s) required",
          answerDisplay: <p className="text-red-500">Nurse(s) required.</p>,
          continue: true,
          send: true,
        },
        {
          answer: "Physician",
          display: "Physician(s) required",
          answerDisplay: <p className="text-red-500">Physician(s) required.</p>,
          continue: true,
          send: true,
        },
        {
          answer: "Other (input):",
          display: "Other personnel required: {input}",
          answerDisplay: (
            <p className="text-red-500">Other personnel required: **input**</p>
          ),
          continue: true,
          input: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unknown personnel requirements",
          answerDisplay: (
            <p className="text-green-500">
              Unknown if specific types of personnel are required.
            </p>
          ),
          continue: true,
          send: true,
        },
      ],
    },

    {
      text: (
        <p>
          Does **pronoun** have any{" "}
          <b className="font-bold">advance directives</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No advance directives",
          answerDisplay: (
            <p className="text-green-500">
              **pronoun** has <b className="font-bold">no</b> advance
              directives.
            </p>
          ),
          continue: true,
        },
        {
          answer: "Yes (input):",
          display: "Advance directives: {input}",
          answerDisplay: (
            <p className="text-green-500">
              **pronoun** <b className="font-bold">has</b> advance directives:
              **input**
            </p>
          ),
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk if advance directives",
          answerDisplay: (
            <p className="text-green-500">
              Unknown if **pronoun** has any advance directives.
            </p>
          ),
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          What is the <b className="font-bold">name</b> of the receiving
          facility?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Woolward Regional Medical Center",
          display: "Rec facility: WRMC",
          answerDisplay: (
            <p className="text-blue-500">
              Receiving facility is{" "}
              <b className="font-bold">Woolward Regional Medical Center</b>{" "}
              (WRMC).
            </p>
          ),
          continue: true,
        },
        {
          answer: "Sorrow Health Community Hospital",
          display: "Rec facility: SHCH",
          answerDisplay: (
            <p className="text-blue-500">
              Receiving facility is{" "}
              <b className="font-bold">Sorrow Health Community Hospital</b>{" "}
              (SHCH).
            </p>
          ),
          continue: true,
        },
        {
          answer: "Paleto Bay Medical Center",
          display: "Rec facility: PBMC",
          answerDisplay: (
            <p className="text-blue-500">
              Receiving facility is{" "}
              <b className="font-bold">Paleto Bay Medical Center</b> (PBMC).
            </p>
          ),
          continue: true,
        },
        {
          answer: "Sandy Shores Medical Center",
          display: "Rec facility: SSMC",
          answerDisplay: (
            <p className="text-blue-500">
              Receiving facility is{" "}
              <b className="font-bold">Sandy Shores Medical Center</b> (SSMC).
            </p>
          ),
          continue: true,
        },
        {
          answer: "Mount Zonah Medical Center",
          display: "Rec facility: MZMC",
          answerDisplay: (
            <p className="text-blue-500">
              Receiving facility is{" "}
              <b className="font-bold">Mount Zonah Medical Center</b> (MZMC).
            </p>
          ),
          continue: true,
        },
        {
          answer: "Pillbox Hill Medical Center",
          display: "Rec facility: PBHMC",
          answerDisplay: (
            <p className="text-blue-500">
              Receiving facility is{" "}
              <b className="font-bold">Pillbox Hill Medical Center</b> (PBHMC).
            </p>
          ),
          continue: true,
        },
        {
          answer: "Central Los Santos Hospital and Trauma Center",
          display: "Rec facility: LSCH",
          answerDisplay: (
            <p className="text-blue-500">
              Receiving facility is{" "}
              <b className="font-bold">
                Central Los Santos Hospital and Trauma Center
              </b>{" "}
              (LSCH).
            </p>
          ),
          continue: true,
        },
        {
          answer: "St. Fiacre Hospital",
          display: "Rec facility: SFH",
          answerDisplay: (
            <p className="text-blue-500">
              Receiving facility is{" "}
              <b className="font-bold">St. Fiacre Hospital</b> (SFH).
            </p>
          ),
          continue: true,
        },
        {
          answer: "Other:",
          display: "Other rec facility: {input}",
          answerDisplay: (
            <p className="text-blue-500">
              Receiving facility is <b className="font-bold">Other</b>:
              **input**
            </p>
          ),
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk rec facility",
          answerDisplay: (
            <p className="text-blue-500">
              Receiving facility is <b className="font-bold">Unknown</b>.
            </p>
          ),
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
          code: "33A01",
          text: (
            <p>
              <b className="font-bold">ACUITY I</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">no</b> priority symptoms)
              </span>
            </p>
          ),
          recResponse: 201,
          priority: 1,
        },
        {
          code: "33A02",
          text: (
            <p>
              <b className="font-bold">ACUITY II</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">no</b> priority symptoms)
              </span>
            </p>
          ),
          recResponse: 201,
          priority: 2,
        },
        {
          code: "33A03",
          text: (
            <p>
              <b className="font-bold">ACUITY III</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">no</b> priority symptoms)
              </span>
            </p>
          ),
          recResponse: 201,
          priority: 3,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "33C00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 202,
          priority: 0,
        },
        {
          code: "33C01",
          text: (
            <p>
              <b className="font-bold">Not alert</b>{" "}
              <span className="text-sm">(acute change)</span>
            </p>
          ),
          recResponse: 202,
          priority: 1,
        },
        {
          code: "33C02",
          text: (
            <p>
              <b className="font-bold">Abnormal breathing</b>{" "}
              <span className="text-sm">(acute onset)</span>
            </p>
          ),
          recResponse: 202,
          priority: 2,
        },
        {
          code: "33C03",
          text: (
            <p>
              Significant <b className="font-bold">hemorrhage</b>
            </p>
          ),
          recResponse: 202,
          priority: 3,
        },
        {
          code: "33C04",
          text: <p className="font-bold">Shock</p>,
          recResponse: 202,
          priority: 4,
        },
        {
          code: "33C05",
          text: (
            <p>
              Possible acute <b className="font-bold">heart problems</b> or{" "}
              <b className="font-bold">MI</b>{" "}
              <span className="text-sm">(heart attack)</span>
            </p>
          ),
          recResponse: 202,
          priority: 5,
        },
        {
          code: "33C06",
          text: <p className="font-bold">Severe pain</p>,
          recResponse: 202,
          priority: 6,
        },
        {
          code: "33C07",
          text: (
            <p>
              <b className="font-bold">Emergency response</b> requested
            </p>
          ),
          recResponse: 202,
          priority: 7,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "33D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 203,
          priority: 0,
        },
        {
          code: "33D01",
          text: (
            <p>
              Suspected <b className="font-bold">cardiac</b> or{" "}
              <b className="font-bold">respiratory arrest</b>
            </p>
          ),
          recResponse: 203,
          priority: 1,
        },
        {
          code: "33D02",
          text: (
            <p>
              Just <b className="font-bold">resuscitated</b> and/or{" "}
              <b className="font-bold">defibrillated</b>{" "}
              <span className="text-sm">(external)</span>
            </p>
          ),
          recResponse: 203,
          priority: 2,
        },
      ],
    },
  ],
  pdis: {
    instructions: [],
    dls: [],
  },
};
