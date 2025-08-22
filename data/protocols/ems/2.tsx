import { IEMSProtocol } from "@/models/interfaces";

export const ALLERGIES: IEMSProtocol = {
  protocol: 2,
  name: "Allergies (Reactions) / Envenomations (Stings, Bites)",
  shortName: "Allergies",
  description: (
    <>
      <p>
        Allergic Reactions and Envenomations require immediate assessment of
        airway status, especially signs of ineffective or agonal breathing—these
        indicate a life-threatening condition and mandate an Echo-level
        response. Consciousness and the ability to speak between breaths are
        also early critical factors for triage escalation.
      </p>

      <p className="mt-2">
        If the patient is having{" "}
        <span className="font-medium">difficulty breathing or swallowing</span>,
        particularly with a known allergy history, you should assume a rapidly
        progressing airway compromise until proven otherwise. Past reactions,
        even if mild, increase risk for future severe responses. Injection use
        (e.g., EpiPen) or medications may be noted but <i>do not</i> guarantee
        symptom relief—severity must still be evaluated based on current
        presentation.
      </p>

      <p className="mt-2">
        Understanding the{" "}
        <span className="font-medium">cause of the reaction</span> is vital.
        Swarming insect attacks (multiple stings) are higher-risk due to
        cumulative venom exposure. Bites from snakes or spiders require
        consideration for systemic toxicity. Always ask about time of onset,
        previous allergic history, and any interventions already taken (like
        injections or medications) to ensure accurate coding and proper resource
        dispatch.
      </p>

      <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground space-y-1">
        <li>
          <span className="font-medium">Ineffective or Agonal Breathing</span> →
          Echo-level emergency
        </li>
        <li>
          <span className="font-medium">
            Difficulty Speaking Between Breaths
          </span>{" "}
          → Delta concern
        </li>
        <li>
          <span className="font-medium">Swarming Attack / Snakebite</span> →
          High-priority Delta determinant
        </li>
        <li>
          <span className="font-medium">Prior Allergy Hx</span> → Escalates
          concern, especially with breathing issues
        </li>
        <li>
          <span className="font-medium">Injection or Medication Taken</span> →
          May trigger sub-code but doesn’t reduce urgency
        </li>
      </ul>
    </>
  ),
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "C" },
    { name: "Police", priority: "E" },
  ],
  defaultPriority: "A",
  defaultCode: "02A03",
  defaultPlan: 4,
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "02A01",
          text: "No Diff Breathing or Swallowing",
          recResponse: 4,
          priority: 2,
        },
        {
          code: "02A02",
          text: "Spider Bite",
          recResponse: 5,
          priority: 1,
        },
        {
          code: "02A03",
          text: "Asymptomatic Allergic Rx",
          recResponse: 5,
          priority: 3,
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "02B00",
          text: "BLS Override (Bravo)",
          recResponse: 4,
          priority: 0,
          suffixes: [
            {
              suffix: "I",
              text: "Injection Administered or Advised",
              recResponse: 4,
              priority: 1,
            },
            {
              suffix: "M",
              text: "Medication Administered or Advised",
              recResponse: 4,
              priority: 1,
            },
          ],
        },
        {
          code: "02B01",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 4,
          priority: 1,
          suffixes: [
            {
              suffix: "I",
              text: "Injection Administered or Advised",
              recResponse: 4,
              priority: 1,
            },
            {
              suffix: "M",
              text: "Medication Administered or Advised",
              recResponse: 4,
              priority: 1,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "02C00",
          text: "ALS Override (Charlie)",
          recResponse: 6,
          priority: 0,
          suffixes: [
            {
              suffix: "I",
              text: "Injection Administered or Advised",
              recResponse: 6,
              priority: 1,
            },
            {
              suffix: "M",
              text: "Medication Administered or Advised",
              recResponse: 6,
              priority: 1,
            },
          ],
        },
        {
          code: "02C01",
          text: "Diff Breathing or Swallowing",
          recResponse: 6,
          priority: 1,
          suffixes: [
            {
              suffix: "I",
              text: "Injection Administered or Advised",
              recResponse: 6,
              priority: 1,
            },
            {
              suffix: "M",
              text: "Medication Administered or Advised",
              recResponse: 6,
              priority: 1,
            },
          ],
        },
        {
          code: "02C02",
          text: "Hx of Severe Allergic Rx",
          recResponse: 6,
          priority: 2,
          suffixes: [
            {
              suffix: "I",
              text: "Injection Administered or Advised",
              recResponse: 6,
              priority: 1,
            },
            {
              suffix: "M",
              text: "Medication Administered or Advised",
              recResponse: 6,
              priority: 1,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "02D00",
          text: "ALS Override (Delta)",
          recResponse: 7,
          priority: 0,
          suffixes: [
            {
              suffix: "I",
              text: "Injection Administered or Advised",
              recResponse: 7,
              priority: 1,
            },
            {
              suffix: "M",
              text: "Medication Administered or Advised",
              recResponse: 7,
              priority: 1,
            },
          ],
        },
        {
          code: "02D01",
          text: "Not Alert",
          recResponse: 6,
          priority: 1,
          suffixes: [
            {
              suffix: "I",
              text: "Injection Administered or Advised",
              recResponse: 6,
              priority: 1,
            },
            {
              suffix: "M",
              text: "Medication Administered or Advised",
              recResponse: 6,
              priority: 1,
            },
          ],
        },
        {
          code: "02D02",
          text: "Diff Speaking Between Breaths",
          recResponse: 6,
          priority: 2,
          suffixes: [
            {
              suffix: "I",
              text: "Injection Administered or Advised",
              recResponse: 6,
              priority: 1,
            },
            {
              suffix: "M",
              text: "Medication Administered or Advised",
              recResponse: 6,
              priority: 1,
            },
          ],
        },
        {
          code: "02D03",
          text: "Swarming Attack (Bees, Wasps, Hornets)",
          recResponse: 6,
          priority: 3,
          suffixes: [
            {
              suffix: "I",
              text: "Injection Administered or Advised",
              recResponse: 6,
              priority: 1,
            },
            {
              suffix: "M",
              text: "Medication Administered or Advised",
              recResponse: 6,
              priority: 1,
            },
          ],
        },
        {
          code: "02D04",
          text: "Snakebite",
          recResponse: 6,
          priority: 4,
          suffixes: [
            {
              suffix: "I",
              text: "Injection Administered or Advised",
              recResponse: 6,
              priority: 1,
            },
            {
              suffix: "M",
              text: "Medication Administered or Advised",
              recResponse: 6,
              priority: 1,
            },
          ],
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "02E00",
          text: "ALS Override (Echo)",
          recResponse: 8,
          priority: 0,
          suffixes: [
            {
              suffix: "I",
              text: "Injection Administered or Advised",
              recResponse: 8,
              priority: 1,
            },
            {
              suffix: "M",
              text: "Medication Administered or Advised",
              recResponse: 8,
              priority: 1,
            },
          ],
        },
        {
          code: "02E01",
          text: "INEFFECTIVE BREATHING",
          recResponse: 8,
          notBreathing: true,
          priority: 1,
          suffixes: [
            {
              suffix: "I",
              text: "Injection Administered or Advised",
              recResponse: 6,
              priority: 1,
            },
            {
              suffix: "M",
              text: "Medication Administered or Advised",
              recResponse: 6,
              priority: 1,
            },
          ],
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
