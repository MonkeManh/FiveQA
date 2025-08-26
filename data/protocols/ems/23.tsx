import { IEMSProtocol } from "@/models/interfaces";

export const OVERDOSE_POISONING: IEMSProtocol = {
  protocol: 23,
  name: "Overdose / Poisoning (Ingestion)",
  shortName: "Overdose/Poisoning",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "C" },
    { name: "Police", priority: "B" },
  ],
  defaultPriority: "C",
  defaultCode: "23C07",
  defaultPlan: 129,
  preSend: true,
  availableTracks: [
    { id: 1, name: "Poison Control request" }
  ],
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "23O01",
          text: (
            <p>
              <b className="font-bold">POISONING</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">without</b> priority symptoms)
              </span>
            </p>
          ),
          recResponse: 138,
          priority: 1,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accidental</p>,
              recResponse: 138,
              priority: 9,
            },
            {
              suffix: "I",
              text: <p>Intentional</p>,
              recResponse: 138,
              priority: 6,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "23B00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 129,
          priority: 0,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accidental</p>,
              recResponse: 129,
              priority: 9,
            },
            {
              suffix: "I",
              text: <p>Intentional</p>,
              recResponse: 130,
              priority: 6,
            },
          ],
        },
        {
          code: "23B01",
          text: (
            <p>
              <b className="font-bold">OVERDOSE</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">without</b> priority symptoms)
              </span>
            </p>
          ),
          recResponse: 129,
          priority: 1,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accidental</p>,
              recResponse: 129,
              priority: 9,
            },
            {
              suffix: "C",
              text: <p>Carfentanil</p>,
              recResponse: 129,
              priority: 8,
            },
            {
              suffix: "D",
              text: <p>Accidental and Fentanyl</p>,
              recResponse: 129,
              priority: 7,
            },
            {
              suffix: "E",
              text: <p>Accidental and Carfentanil</p>,
              recResponse: 129,
              priority: 7,
            },
            {
              suffix: "F",
              text: <p>Fentanyl</p>,
              recResponse: 129,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>Intentional and Fentanyl</p>,
              recResponse: 130,
              priority: 5,
            },
            {
              suffix: "H",
              text: <p>Intentional and Carfentanil</p>,
              recResponse: 130,
              priority: 5,
            },
            {
              suffix: "I",
              text: <p>Intentional</p>,
              recResponse: 130,
              priority: 6,
            },
            {
              suffix: "Q",
              text: <p>Violent or combative and Fentanyl</p>,
              recResponse: 131,
              priority: 3,
            },
            {
              suffix: "R",
              text: <p>Violent or combative and Carfentanil</p>,
              recResponse: 131,
              priority: 3,
            },
            {
              suffix: "S",
              text: <p>Weapons and Fentanyl</p>,
              recResponse: 131,
              priority: 1,
            },
            {
              suffix: "T",
              text: <p>Weapons and Carfentanil</p>,
              recResponse: 131,
              priority: 1,
            },
            {
              suffix: "V",
              text: <p>Violent or combative</p>,
              recResponse: 131,
              priority: 4,
            },
            {
              suffix: "W",
              text: <p>Weapons</p>,
              recResponse: 131,
              priority: 2,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "23C00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 59,
          priority: 0,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accidental</p>,
              recResponse: 59,
              priority: 9,
            },
            {
              suffix: "C",
              text: <p>Carfentanil</p>,
              recResponse: 59,
              priority: 8,
            },
            {
              suffix: "D",
              text: <p>Accidental and Fentanyl</p>,
              recResponse: 59,
              priority: 7,
            },
            {
              suffix: "E",
              text: <p>Accidental and Carfentanil</p>,
              recResponse: 59,
              priority: 7,
            },
            {
              suffix: "F",
              text: <p>Fentanyl</p>,
              recResponse: 59,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>Intentional and Fentanyl</p>,
              recResponse: 51,
              priority: 5,
            },
            {
              suffix: "H",
              text: <p>Intentional and Carfentanil</p>,
              recResponse: 51,
              priority: 5,
            },
            {
              suffix: "I",
              text: <p>Intentional</p>,
              recResponse: 51,
              priority: 6,
            },
            {
              suffix: "Q",
              text: <p>Violent or combative and Fentanyl</p>,
              recResponse: 132,
              priority: 3,
            },
            {
              suffix: "R",
              text: <p>Violent or combative and Carfentanil</p>,
              recResponse: 132,
              priority: 3,
            },
            {
              suffix: "S",
              text: <p>Weapons and Fentanyl</p>,
              recResponse: 132,
              priority: 1,
            },
            {
              suffix: "T",
              text: <p>Weapons and Carfentanil</p>,
              recResponse: 132,
              priority: 1,
            },
            {
              suffix: "V",
              text: <p>Violent or combative</p>,
              recResponse: 132,
              priority: 4,
            },
            {
              suffix: "W",
              text: <p>Weapons</p>,
              recResponse: 132,
              priority: 2,
            },
          ],
        },
        {
          code: "23C01",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 59,
          priority: 1,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accidental</p>,
              recResponse: 59,
              priority: 9,
            },
            {
              suffix: "C",
              text: <p>Carfentanil</p>,
              recResponse: 59,
              priority: 8,
            },
            {
              suffix: "D",
              text: <p>Accidental and Fentanyl</p>,
              recResponse: 59,
              priority: 7,
            },
            {
              suffix: "E",
              text: <p>Accidental and Carfentanil</p>,
              recResponse: 59,
              priority: 7,
            },
            {
              suffix: "F",
              text: <p>Fentanyl</p>,
              recResponse: 59,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>Intentional and Fentanyl</p>,
              recResponse: 51,
              priority: 5,
            },
            {
              suffix: "H",
              text: <p>Intentional and Carfentanil</p>,
              recResponse: 51,
              priority: 5,
            },
            {
              suffix: "I",
              text: <p>Intentional</p>,
              recResponse: 51,
              priority: 6,
            },
            {
              suffix: "Q",
              text: <p>Violent or combative and Fentanyl</p>,
              recResponse: 132,
              priority: 3,
            },
            {
              suffix: "R",
              text: <p>Violent or combative and Carfentanil</p>,
              recResponse: 132,
              priority: 3,
            },
            {
              suffix: "S",
              text: <p>Weapons and Fentanyl</p>,
              recResponse: 132,
              priority: 1,
            },
            {
              suffix: "T",
              text: <p>Weapons and Carfentanil</p>,
              recResponse: 132,
              priority: 1,
            },
            {
              suffix: "V",
              text: <p>Violent or combative</p>,
              recResponse: 132,
              priority: 4,
            },
            {
              suffix: "W",
              text: <p>Weapons</p>,
              recResponse: 132,
              priority: 2,
            },
          ],
        },
        {
          code: "23C02",
          text: (
            <p>
              <b className="font-bold">Abnormal</b> breathing
            </p>
          ),
          recResponse: 59,
          priority: 2,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accidental</p>,
              recResponse: 59,
              priority: 9,
            },
            {
              suffix: "C",
              text: <p>Carfentanil</p>,
              recResponse: 59,
              priority: 8,
            },
            {
              suffix: "D",
              text: <p>Accidental and Fentanyl</p>,
              recResponse: 59,
              priority: 7,
            },
            {
              suffix: "E",
              text: <p>Accidental and Carfentanil</p>,
              recResponse: 59,
              priority: 7,
            },
            {
              suffix: "F",
              text: <p>Fentanyl</p>,
              recResponse: 59,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>Intentional and Fentanyl</p>,
              recResponse: 51,
              priority: 5,
            },
            {
              suffix: "H",
              text: <p>Intentional and Carfentanil</p>,
              recResponse: 51,
              priority: 5,
            },
            {
              suffix: "I",
              text: <p>Intentional</p>,
              recResponse: 51,
              priority: 6,
            },
            {
              suffix: "Q",
              text: <p>Violent or combative and Fentanyl</p>,
              recResponse: 132,
              priority: 3,
            },
            {
              suffix: "R",
              text: <p>Violent or combative and Carfentanil</p>,
              recResponse: 132,
              priority: 3,
            },
            {
              suffix: "S",
              text: <p>Weapons and Fentanyl</p>,
              recResponse: 132,
              priority: 1,
            },
            {
              suffix: "T",
              text: <p>Weapons and Carfentanil</p>,
              recResponse: 132,
              priority: 1,
            },
            {
              suffix: "V",
              text: <p>Violent or combative</p>,
              recResponse: 132,
              priority: 4,
            },
            {
              suffix: "W",
              text: <p>Weapons</p>,
              recResponse: 132,
              priority: 2,
            },
          ],
        },
        {
          code: "23C03",
          text: (
            <p>
              <b className="font-bold">Antidepressants</b>{" "}
              <span className="text-sm">(tricyclic)</span>
            </p>
          ),
          recResponse: 59,
          priority: 3,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accidental</p>,
              recResponse: 59,
              priority: 9,
            },
            {
              suffix: "I",
              text: <p>Intentional</p>,
              recResponse: 51,
              priority: 6,
            },
            {
              suffix: "V",
              text: <p>Violent or combative</p>,
              recResponse: 132,
              priority: 4,
            },
            {
              suffix: "W",
              text: <p>Weapons</p>,
              recResponse: 132,
              priority: 2,
            },
          ],
        },
        {
          code: "23C04",
          text: (
            <p>
              <b className="font-bold">Cocaine, methamphetamine</b>{" "}
              <span className="text-sm">(or derivatives)</span>
            </p>
          ),
          recResponse: 59,
          priority: 3,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accidental</p>,
              recResponse: 59,
              priority: 9,
            },
            {
              suffix: "I",
              text: <p>Intentional</p>,
              recResponse: 51,
              priority: 6,
            },
            {
              suffix: "V",
              text: <p>Violent or combative</p>,
              recResponse: 132,
              priority: 4,
            },
            {
              suffix: "W",
              text: <p>Weapons</p>,
              recResponse: 132,
              priority: 2,
            },
          ],
        },
        {
          code: "23C05",
          text: (
            <p>
              <b className="font-bold">Narcotics</b>{" "}
              <span className="text-sm">
                (heroin, morphine, methadone, OxyContin, etc.)
              </span>
            </p>
          ),
          recResponse: 59,
          priority: 3,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accidental</p>,
              recResponse: 59,
              priority: 9,
            },
            {
              suffix: "C",
              text: <p>Carfentanil</p>,
              recResponse: 59,
              priority: 8,
            },
            {
              suffix: "D",
              text: <p>Accidental and Fentanyl</p>,
              recResponse: 59,
              priority: 7,
            },
            {
              suffix: "E",
              text: <p>Accidental and Carfentanil</p>,
              recResponse: 59,
              priority: 7,
            },
            {
              suffix: "F",
              text: <p>Fentanyl</p>,
              recResponse: 59,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>Intentional and Fentanyl</p>,
              recResponse: 51,
              priority: 5,
            },
            {
              suffix: "H",
              text: <p>Intentional and Carfentanil</p>,
              recResponse: 51,
              priority: 5,
            },
            {
              suffix: "I",
              text: <p>Intentional</p>,
              recResponse: 51,
              priority: 6,
            },
            {
              suffix: "Q",
              text: <p>Violent or combative and Fentanyl</p>,
              recResponse: 132,
              priority: 3,
            },
            {
              suffix: "R",
              text: <p>Violent or combative and Carfentanil</p>,
              recResponse: 132,
              priority: 3,
            },
            {
              suffix: "S",
              text: <p>Weapons and Fentanyl</p>,
              recResponse: 132,
              priority: 1,
            },
            {
              suffix: "T",
              text: <p>Weapons and Carfentanil</p>,
              recResponse: 132,
              priority: 1,
            },
            {
              suffix: "V",
              text: <p>Violent or combative</p>,
              recResponse: 132,
              priority: 4,
            },
            {
              suffix: "W",
              text: <p>Weapons</p>,
              recResponse: 132,
              priority: 2,
            },
          ],
        },
        {
          code: "23C06",
          text: (
            <p>
              <b className="font-bold">Acid</b> or{" "}
              <b className="font-bold">alkali</b>{" "}
              <span className="text-sm">(lye)</span>
            </p>
          ),
          priority: 3,
          recResponse: 59,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accidental</p>,
              recResponse: 59,
              priority: 9,
            },
            {
              suffix: "I",
              text: <p>Intentional</p>,
              recResponse: 51,
              priority: 6,
            },
            {
              suffix: "V",
              text: <p>Violent or combative</p>,
              recResponse: 132,
              priority: 4,
            },
            {
              suffix: "W",
              text: <p>Weapons</p>,
              recResponse: 132,
              priority: 2,
            },
          ],
        },
        {
          code: "23C07",
          text: (
            <p>
              <b className="font-bold">Unknown</b> status/
              <b className="font-bold">Other</b> codes{" "}
              <b className="font-bold">not</b> applicable
            </p>
          ),
          recResponse: 129,
          priority: 4,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accidental</p>,
              recResponse: 129,
              priority: 9,
            },
            {
              suffix: "C",
              text: <p>Carfentanil</p>,
              recResponse: 129,
              priority: 8,
            },
            {
              suffix: "D",
              text: <p>Accidental and Fentanyl</p>,
              recResponse: 129,
              priority: 7,
            },
            {
              suffix: "E",
              text: <p>Accidental and Carfentanil</p>,
              recResponse: 129,
              priority: 7,
            },
            {
              suffix: "F",
              text: <p>Fentanyl</p>,
              recResponse: 129,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>Intentional and Fentanyl</p>,
              recResponse: 130,
              priority: 5,
            },
            {
              suffix: "H",
              text: <p>Intentional and Carfentanil</p>,
              recResponse: 130,
              priority: 5,
            },
            {
              suffix: "I",
              text: <p>Intentional</p>,
              recResponse: 130,
              priority: 6,
            },
            {
              suffix: "Q",
              text: <p>Violent or combative and Fentanyl</p>,
              recResponse: 131,
              priority: 3,
            },
            {
              suffix: "R",
              text: <p>Violent or combative and Carfentanil</p>,
              recResponse: 131,
              priority: 3,
            },
            {
              suffix: "S",
              text: <p>Weapons and Fentanyl</p>,
              recResponse: 131,
              priority: 1,
            },
            {
              suffix: "T",
              text: <p>Weapons and Carfentanil</p>,
              recResponse: 131,
              priority: 1,
            },
            {
              suffix: "V",
              text: <p>Violent or combative</p>,
              recResponse: 131,
              priority: 4,
            },
            {
              suffix: "W",
              text: <p>Weapons</p>,
              recResponse: 131,
              priority: 2,
            },
          ],
        },
        {
          code: "23C08",
          text: (
            <p>
              <b className="font-bold">Poison Control</b> request for response
            </p>
          ),
          recResponse: 129,
          priority: 5,
          suffixes: [
            {
              suffix: "C",
              text: <p>Carfentanil</p>,
              recResponse: 129,
              priority: 8,
            },
            {
              suffix: "F",
              text: <p>Fentanyl</p>,
              recResponse: 129,
              priority: 8,
            },
            {
              suffix: "Q",
              text: <p>Violent or combative and Fentanyl</p>,
              recResponse: 131,
              priority: 3,
            },
            {
              suffix: "R",
              text: <p>Violent or combative and Carfentanil</p>,
              recResponse: 131,
              priority: 3,
            },
            {
              suffix: "V",
              text: <p>Violent or combative</p>,
              recResponse: 131,
              priority: 4,
            },
            {
              suffix: "W",
              text: <p>Weapons</p>,
              recResponse: 131,
              priority: 2,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "23D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 133,
          priority: 0,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accidental</p>,
              recResponse: 133,
              priority: 9,
            },
            {
              suffix: "C",
              text: <p>Carfentanil</p>,
              recResponse: 133,
              priority: 8,
            },
            {
              suffix: "D",
              text: <p>Accidental and Fentanyl</p>,
              recResponse: 133,
              priority: 7,
            },
            {
              suffix: "E",
              text: <p>Accidental and Carfentanil</p>,
              recResponse: 133,
              priority: 7,
            },
            {
              suffix: "F",
              text: <p>Fentanyl</p>,
              recResponse: 133,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>Intentional and Fentanyl</p>,
              recResponse: 134,
              priority: 5,
            },
            {
              suffix: "H",
              text: <p>Intentional and Carfentanil</p>,
              recResponse: 134,
              priority: 5,
            },
            {
              suffix: "I",
              text: <p>Intentional</p>,
              recResponse: 134,
              priority: 6,
            },
            {
              suffix: "Q",
              text: <p>Violent or combative and Fentanyl</p>,
              recResponse: 135,
              priority: 3,
            },
            {
              suffix: "R",
              text: <p>Violent or combative and Carfentanil</p>,
              recResponse: 135,
              priority: 3,
            },
            {
              suffix: "S",
              text: <p>Weapons and Fentanyl</p>,
              recResponse: 135,
              priority: 1,
            },
            {
              suffix: "T",
              text: <p>Weapons and Carfentanil</p>,
              recResponse: 135,
              priority: 1,
            },
            {
              suffix: "V",
              text: <p>Violent or combative</p>,
              recResponse: 135,
              priority: 4,
            },
            {
              suffix: "W",
              text: <p>Weapons</p>,
              recResponse: 135,
              priority: 2,
            },
          ],
        },
        {
          code: "23D01",
          text: <p className="font-bold">Arrest</p>,
          recResponse: 136,
          priority: 1,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accidental</p>,
              recResponse: 136,
              priority: 9,
            },
            {
              suffix: "C",
              text: <p>Carfentanil</p>,
              recResponse: 136,
              priority: 8,
            },
            {
              suffix: "D",
              text: <p>Accidental and Fentanyl</p>,
              recResponse: 136,
              priority: 7,
            },
            {
              suffix: "E",
              text: <p>Accidental and Carfentanil</p>,
              recResponse: 136,
              priority: 7,
            },
            {
              suffix: "F",
              text: <p>Fentanyl</p>,
              recResponse: 136,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>Intentional and Fentanyl</p>,
              recResponse: 136,
              priority: 5,
            },
            {
              suffix: "H",
              text: <p>Intentional and Carfentanil</p>,
              recResponse: 136,
              priority: 5,
            },
            {
              suffix: "I",
              text: <p>Intentional</p>,
              recResponse: 137,
              priority: 6,
            },
          ],
        },
        {
          code: "23D02",
          text: <p className="font-bold">Unconscious</p>,
          recResponse: 59,
          notConscious: true,
          priority: 2,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accidental</p>,
              recResponse: 59,
              priority: 9,
            },
            {
              suffix: "C",
              text: <p>Carfentanil</p>,
              recResponse: 59,
              priority: 8,
            },
            {
              suffix: "D",
              text: <p>Accidental and Fentanyl</p>,
              recResponse: 59,
              priority: 7,
            },
            {
              suffix: "E",
              text: <p>Accidental and Carfentanil</p>,
              recResponse: 59,
              priority: 7,
            },
            {
              suffix: "F",
              text: <p>Fentanyl</p>,
              recResponse: 59,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>Intentional and Fentanyl</p>,
              recResponse: 51,
              priority: 5,
            },
            {
              suffix: "H",
              text: <p>Intentional and Carfentanil</p>,
              recResponse: 51,
              priority: 5,
            },
            {
              suffix: "I",
              text: <p>Intentional</p>,
              recResponse: 51,
              priority: 6,
            },
          ],
        },
        {
          code: "23D03",
          text: <p className="font-bold">CHANGING COLOR</p>,
          recResponse: 59,
          priority: 3,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accidental</p>,
              recResponse: 59,
              priority: 9,
            },
            {
              suffix: "C",
              text: <p>Carfentanil</p>,
              recResponse: 59,
              priority: 8,
            },
            {
              suffix: "D",
              text: <p>Accidental and Fentanyl</p>,
              recResponse: 59,
              priority: 7,
            },
            {
              suffix: "E",
              text: <p>Accidental and Carfentanil</p>,
              recResponse: 59,
              priority: 7,
            },
            {
              suffix: "F",
              text: <p>Fentanyl</p>,
              recResponse: 59,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>Intentional and Fentanyl</p>,
              recResponse: 51,
              priority: 5,
            },
            {
              suffix: "H",
              text: <p>Intentional and Carfentanil</p>,
              recResponse: 51,
              priority: 5,
            },
            {
              suffix: "I",
              text: <p>Intentional</p>,
              recResponse: 51,
              priority: 6,
            },
            {
              suffix: "Q",
              text: <p>Violent or combative and Fentanyl</p>,
              recResponse: 132,
              priority: 3,
            },
            {
              suffix: "R",
              text: <p>Violent or combative and Carfentanil</p>,
              recResponse: 132,
              priority: 3,
            },
            {
              suffix: "S",
              text: <p>Weapons and Fentanyl</p>,
              recResponse: 132,
              priority: 1,
            },
            {
              suffix: "T",
              text: <p>Weapons and Carfentanil</p>,
              recResponse: 132,
              priority: 1,
            },
            {
              suffix: "V",
              text: <p>Violent or combative</p>,
              recResponse: 132,
              priority: 4,
            },
            {
              suffix: "W",
              text: <p>Weapons</p>,
              recResponse: 132,
              priority: 2,
            },
          ],
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "23E00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 133,
          priority: 0,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accidental</p>,
              recResponse: 133,
              priority: 9,
            },
            {
              suffix: "C",
              text: <p>Carfentanil</p>,
              recResponse: 133,
              priority: 8,
            },
            {
              suffix: "D",
              text: <p>Accidental and Fentanyl</p>,
              recResponse: 133,
              priority: 7,
            },
            {
              suffix: "E",
              text: <p>Accidental and Carfentanil</p>,
              recResponse: 133,
              priority: 7,
            },
            {
              suffix: "F",
              text: <p>Fentanyl</p>,
              recResponse: 133,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>Intentional and Fentanyl</p>,
              recResponse: 134,
              priority: 5,
            },
            {
              suffix: "H",
              text: <p>Intentional and Carfentanil</p>,
              recResponse: 134,
              priority: 5,
            },
            {
              suffix: "I",
              text: <p>Intentional</p>,
              recResponse: 134,
              priority: 6,
            },
            {
              suffix: "Q",
              text: <p>Violent or combative and Fentanyl</p>,
              recResponse: 135,
              priority: 3,
            },
            {
              suffix: "R",
              text: <p>Violent or combative and Carfentanil</p>,
              recResponse: 135,
              priority: 3,
            },
            {
              suffix: "S",
              text: <p>Weapons and Fentanyl</p>,
              recResponse: 135,
              priority: 1,
            },
            {
              suffix: "T",
              text: <p>Weapons and Carfentanil</p>,
              recResponse: 135,
              priority: 1,
            },
            {
              suffix: "V",
              text: <p>Violent or combative</p>,
              recResponse: 135,
              priority: 4,
            },
            {
              suffix: "W",
              text: <p>Weapons</p>,
              recResponse: 135,
              priority: 2,
            },
          ],
        },
        {
          code: "23E01",
          text: (
            <p>
              <b className="font-bold">Narcotic/Opioid arrest</b>{" "}
              <span className="text-sm">(obvious)</span>
            </p>
          ),
          recResponse: 136,
          notBreathing: true,
          priority: 1,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accidental</p>,
              recResponse: 136,
              priority: 9,
            },
            {
              suffix: "C",
              text: <p>Carfentanil</p>,
              recResponse: 136,
              priority: 8,
            },
            {
              suffix: "D",
              text: <p>Accidental and Fentanyl</p>,
              recResponse: 136,
              priority: 7,
            },
            {
              suffix: "E",
              text: <p>Accidental and Carfentanil</p>,
              recResponse: 136,
              priority: 7,
            },
            {
              suffix: "F",
              text: <p>Fentanyl</p>,
              recResponse: 136,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>Intentional and Fentanyl</p>,
              recResponse: 136,
              priority: 5,
            },
            {
              suffix: "H",
              text: <p>Intentional and Carfentanil</p>,
              recResponse: 136,
              priority: 5,
            },
            {
              suffix: "I",
              text: <p>Intentional</p>,
              recResponse: 137,
              priority: 6,
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
