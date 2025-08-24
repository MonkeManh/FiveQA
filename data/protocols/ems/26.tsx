import { IEMSProtocol } from "@/models/interfaces";

export const SICK_PERSON: IEMSProtocol = {
  protocol: 26,
  name: "Sick Person (Specific Diagnosis)",
  shortName: "Sick Person",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "C" },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "B",
  defaultCode: "26B01",
  defaultPlan: 147,
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "26O01",
          text: <p className="font-bold">This code is not in use</p>,
          recResponse: 147,
          priority: 1,
        },
        {
          code: "26O02",
          text: <p>Boils</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O03",
          text: <p>Bumps (non-traumatic)</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O04",
          text: <p>Can't sleep</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O05",
          text: <p>Can't Urinate (without abdominal pain)</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O06",
          text: <p>Catheter (urinary - in/out without hemorrhaging)</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O07",
          text: <p>Constipation</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O08",
          text: (
            <p>Cramps/Spasms/Joint Pain (in extremities & non-traumatic)</p>
          ),
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O09",
          text: <p>Cut-off ring request</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O10",
          text: <p>Deafness</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O11",
          text: <p>Defecation/Diarrhea</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O12",
          text: <p>Earache</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O13",
          text: <p>Enema</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O14",
          text: <p>Gout</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O15",
          text: <p>Hemorrhoids/Piles</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O16",
          text: <p>Hepatitis</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O17",
          text: <p>Hiccups</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O18",
          text: <p>Itching</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O19",
          text: <p>Nervous</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O20",
          text: <p>Object Stuck (nose, ear, rectum, etc.)</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O21",
          text: (
            <p>
              Object swallowed (without choking or difficulty breathing, can
              talk)
            </p>
          ),
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O22",
          text: <p>Painful urination</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O23",
          text: <p>Penis problems/pain</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O24",
          text: (
            <p>
              Rash/Skin disorder (without difficulty breathing or swallowing)
            </p>
          ),
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O25",
          text: <p>Sexually transmitted disease (STD)</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O26",
          text: <p>Sore throat (without difficulty breathing or swallowing)</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O27",
          text: <p>Toothache (without jaw pain)</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26O28",
          text: <p>Wound infected (focal or surface)</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
      ],
    },
    {
      priority: "A",
      codes: [
        {
          code: "26A00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 148,
          priority: 0,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 148,
              priority: 1,
            },
          ],
        },
        {
          code: "26A01",
          text: (
            <p>
              <b className="font-bold">No</b> priority symptoms
            </p>
          ),
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26A02",
          text: <p>Blood pressure abnormality (asymptomatic)</p>,
          recResponse: 148,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 148,
              priority: 1,
            },
          ],
        },
        {
          code: "26A03",
          text: <p>Dizziness/Vertigo</p>,
          recResponse: 148,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 148,
              priority: 1,
            },
          ],
        },
        {
          code: "26A04",
          text: <p>Fever/Chills</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26A05",
          text: <p>General weakness</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26A06",
          text: <p>Nausea</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26A07",
          text: <p>New onset of immobility (not-sudden)</p>,
          recResponse: 148,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 148,
              priority: 1,
            },
          ],
        },
        {
          code: "26A08",
          text: <p>Other pain (non-OMEGA-level)</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26A09",
          text: <p>Transportation only</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26A10",
          text: <p>Unwell/Ill</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26A11",
          text: <p>Vomiting</p>,
          recResponse: 147,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 147,
              priority: 1,
            },
          ],
        },
        {
          code: "26A12",
          text: <p>Possible contagious disease</p>,
          recResponse: 148,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 148,
              priority: 1,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "26B00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 148,
          priority: 0,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 148,
              priority: 1,
            },
          ],
        },
        {
          code: "26B01",
          text: (
            <p>
              <b className="font-bold">Unknown</b> status/
              <b className="font-bold">Other</b> codes{" "}
              <b className="font-bold">not</b> applicable
            </p>
          ),
          recResponse: 148,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 148,
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
          code: "26C00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 149,
          priority: 0,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 149,
              priority: 1,
            },
          ],
        },
        {
          code: "26C01",
          text: <p className="font-bold">ALTERED LEVEL OF CONSCIOUSNESS</p>,
          recResponse: 150,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 150,
              priority: 1,
            },
          ],
        },
        {
          code: "26C02",
          text: (
            <p>
              <b className="font-bold">Abnormal</b> breathing
            </p>
          ),
          recResponse: 151,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 151,
              priority: 1,
            },
          ],
        },
        {
          code: "26C03",
          text: (
            <p>
              <b className="font-bold">Sickle cell</b> crisis/
              <b className="font-bold">Thalassemia</b>
            </p>
          ),
          recResponse: 151,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 151,
              priority: 1,
            },
          ],
        },
        {
          code: "26C04",
          text: (
            <p className="font-bold">Autonomic dysreflexia/hyperreflexia</p>
          ),
          recResponse: 151,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 151,
              priority: 1,
            },
          ],
        },
        {
          code: "26C05",
          text: (
            <p>
              Acute <b className="font-bold">adrenal insufficiency/crisis</b> or{" "}
              <b className="font-bold">Addison's</b> disease
            </p>
          ),
          recResponse: 151,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 151,
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
          code: "26D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 149,
          priority: 0,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 149,
              priority: 1,
            },
          ],
        },
        {
          code: "26D01",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 150,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Suspected coronavirus illness</p>,
              recResponse: 150,
              priority: 1,
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
