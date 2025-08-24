import { IEMSProtocol } from "@/models/interfaces";

export const PSYCH_ABN_BEH: IEMSProtocol = {
  protocol: 25,
  name: "Psychiatric / Mental Health Conditions / Suicide Attempt / Abnormal Behavior",
  shortName: "Psych/Abn Beh",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "C" },
    { name: "Police", priority: true },
  ],
  defaultPriority: "B",
  defaultCode: "25B06",
  defaultPlan: 142,
  preSend: true,
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "25O01",
          text: (
            <p>
              <b className="font-bold">NON-SUICIDAL</b> and{" "}
              <b className="font-bold">alert</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">history</b> of{" "}
                <b className="font-bold">MENTAL HEALTH CONDITIONS</b>)
              </span>
            </p>
          ),
          recResponse: 142,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 142,
              priority: 5,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 142,
              priority: 1,
            },
          ],
        },
        {
          code: "25O02",
          text: (
            <p>
              <b className="font-bold">SUICIDE IDEATION</b> and{" "}
              <b className="font-bold">alert</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">history</b> of{" "}
                <b className="font-bold">MENTAL HEALTH CONDITIONS</b>)
              </span>
            </p>
          ),
          recResponse: 142,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 142,
              priority: 5,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 142,
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
          code: "25A01",
          text: (
            <p>
              <b className="font-bold">NON-SUICIDAL</b> and{" "}
              <b className="font-bold">alert</b>
            </p>
          ),
          recResponse: 142,
          priority: 1,
          suffixes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 143,
              priority: 2,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 143,
              priority: 5,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 143,
              priority: 1,
            },
            {
              suffix: "T",
              text: "Threatening Self-Immolation",
              recResponse: 143,
              priority: 4,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 143,
              priority: 4,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 143,
              priority: 3,
            },
          ],
        },
        {
          code: "25A02",
          text: (
            <p>
              <b className="font-bold">SUICIDE IDEATION</b> and{" "}
              <b className="font-bold">alert</b>
            </p>
          ),
          recResponse: 142,
          priority: 1,
          suffixes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 143,
              priority: 2,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 143,
              priority: 5,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 143,
              priority: 1,
            },
            {
              suffix: "T",
              text: "Threatening Self-Immolation",
              recResponse: 143,
              priority: 4,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 143,
              priority: 4,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 143,
              priority: 3,
            },
          ],
        },
        {
          code: "25A03",
          text: (
            <p>
              <b className="font-bold">SUICIDE IDEATION</b> and{" "}
              <b className="font-bold">alert</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">ingestion</b> of
                medications/substances)
              </span>
            </p>
          ),
          recResponse: 142,
          priority: 1,
          suffixes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 143,
              priority: 2,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 143,
              priority: 5,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 143,
              priority: 1,
            },
            {
              suffix: "T",
              text: "Threatening Self-Immolation",
              recResponse: 143,
              priority: 4,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 143,
              priority: 4,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 143,
              priority: 3,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "25B00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 142,
          priority: 0,
          suffixes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 143,
              priority: 2,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 143,
              priority: 5,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 143,
              priority: 1,
            },
            {
              suffix: "T",
              text: "Threatening Self-Immolation",
              recResponse: 143,
              priority: 4,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 143,
              priority: 4,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 143,
              priority: 3,
            },
          ],
        },
        {
          code: "25B01",
          text: (
            <p>
              <b className="font-bold">SERIOUS</b> hemorrhage
            </p>
          ),
          recResponse: 142,
          priority: 1,
          suffixes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 143,
              priority: 2,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 143,
              priority: 5,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 143,
              priority: 1,
            },
            {
              suffix: "T",
              text: "Threatening Self-Immolation",
              recResponse: 143,
              priority: 4,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 143,
              priority: 4,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 143,
              priority: 3,
            },
          ],
        },
        {
          code: "25B02",
          text: (
            <p>
              <b className="font-bold">Non-SERIOUS</b> or{" "}
              <b className="font-bold">MINOR</b> hemorrhage
            </p>
          ),
          recResponse: 142,
          priority: 2,
          suffixes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 143,
              priority: 2,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 143,
              priority: 5,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 143,
              priority: 1,
            },
            {
              suffix: "T",
              text: "Threatening Self-Immolation",
              recResponse: 143,
              priority: 4,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 143,
              priority: 4,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 143,
              priority: 3,
            },
          ],
        },
        {
          code: "25B03",
          text: <p className="font-bold">INTENDING SUICIDE</p>,
          recResponse: 142,
          priority: 1,
          suffixes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 143,
              priority: 2,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 143,
              priority: 5,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 143,
              priority: 1,
            },
            {
              suffix: "T",
              text: "Threatening Self-Immolation",
              recResponse: 143,
              priority: 4,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 143,
              priority: 4,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 143,
              priority: 3,
            },
          ],
        },
        {
          code: "25B04",
          text: (
            <p>
              <b className="font-bold">Jumper</b>{" "}
              <span className="text-sm">(threatening)</span>
            </p>
          ),
          recResponse: 80,
          priority: 1,
          suffixes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 80,
              priority: 2,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 80,
              priority: 5,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 80,
              priority: 1,
            },
            {
              suffix: "T",
              text: "Threatening Self-Immolation",
              recResponse: 80,
              priority: 4,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 80,
              priority: 4,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 80,
              priority: 3,
            },
          ],
        },
        {
          code: "25B05",
          text: (
            <p>
              <b className="font-bold">Near hanging, strangulation,</b> or{" "}
              <b className="font-bold">suffocation</b>{" "}
              <span className="text-sm">
                (alert <b className="font-bold">without</b> difficulty
                breathing)
              </span>
            </p>
          ),
          recResponse: 143,
          priority: 1,
          suffixes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 143,
              priority: 2,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 143,
              priority: 5,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 143,
              priority: 1,
            },
            {
              suffix: "T",
              text: "Threatening Self-Immolation",
              recResponse: 143,
              priority: 4,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 143,
              priority: 4,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 143,
              priority: 3,
            },
          ],
        },
        {
          code: "25B06",
          text: (
            <p>
              <b className="font-bold">Unknown</b> status/
              <b className="font-bold">Other</b> codes{" "}
              <b className="font-bold">not</b> applicable
            </p>
          ),
          recResponse: 142,
          priority: 3,
          suffixes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 143,
              priority: 2,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 143,
              priority: 5,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 143,
              priority: 1,
            },
            {
              suffix: "T",
              text: "Threatening Self-Immolation",
              recResponse: 143,
              priority: 4,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 143,
              priority: 4,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 143,
              priority: 3,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "25C00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 144,
          priority: 0,
          suffixes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
              priority: 2,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 145,
              priority: 5,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 145,
              priority: 1,
            },
            {
              suffix: "T",
              text: "Threatening Self-Immolation",
              recResponse: 145,
              priority: 4,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
              priority: 4,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
              priority: 3,
            },
          ],
        },
        {
          code: "25C01",
          text: (
            <p>
              <b className="font-bold">ALTERED LOC</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">history</b> of{" "}
                <b className="font-bold">MENTAL HEALTH CONDITIONS</b>)
              </span>
            </p>
          ),
          recResponse: 144,
          priority: 1,
          suffixes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
              priority: 2,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 145,
              priority: 5,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 145,
              priority: 1,
            },
            {
              suffix: "T",
              text: "Threatening Self-Immolation",
              recResponse: 145,
              priority: 4,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
              priority: 4,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
              priority: 3,
            },
          ],
        },
        {
          code: "25C02",
          text: (
            <p>
              <b className="font-bold">ALTERED LOC</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">no</b> or{" "}
                <b className="font-bold">unknown</b> history of{" "}
                <b className="font-bold">MENTAL HEALTH CONDITIONS</b>)
              </span>
            </p>
          ),
          recResponse: 144,
          priority: 2,
          suffixes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
              priority: 2,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 145,
              priority: 5,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 145,
              priority: 1,
            },
            {
              suffix: "T",
              text: "Threatening Self-Immolation",
              recResponse: 145,
              priority: 4,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
              priority: 4,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
              priority: 3,
            },
          ],
        },
        {
          code: "25C03",
          text: (
            <p>
              <b className="font-bold">ALTERED LOC</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">ingestion</b> of
                medications/substances)
              </span>
            </p>
          ),
          recResponse: 144,
          priority: 2,
          suffixes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
              priority: 2,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 145,
              priority: 5,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 145,
              priority: 1,
            },
            {
              suffix: "T",
              text: "Threatening Self-Immolation",
              recResponse: 145,
              priority: 4,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
              priority: 4,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
              priority: 3,
            },
          ],
        },
        {
          code: "25C04",
          text: (
            <p>
              <b className="font-bold">ALTERED LOC</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">sudden change</b> in
                behavior/personality)
              </span>
            </p>
          ),
          recResponse: 144,
          priority: 2,
          suffixes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
              priority: 2,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 145,
              priority: 5,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 145,
              priority: 1,
            },
            {
              suffix: "T",
              text: "Threatening Self-Immolation",
              recResponse: 145,
              priority: 4,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
              priority: 4,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
              priority: 3,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "25D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 144,
          priority: 0,
          suffixes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
              priority: 2,
            },
            {
              suffix: "T",
              text: "Threatening Self-Immolation",
              recResponse: 145,
              priority: 4,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
              priority: 4,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
              priority: 3,
            },
          ],
        },
        {
          code: "25D01",
          text: <p className="font-bold">Arrest</p>,
          recResponse: 146,
          notBreathing: true,
          priority: 1,
        },
        {
          code: "25D02",
          text: <p className="font-bold">Unconscious</p>,
          recResponse: 144,
          notConscious: true,
          priority: 2,
        },
        {
          code: "25D03",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 144,
          priority: 3,
          suffixes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
              priority: 2,
            },
            {
              suffix: "T",
              text: "Threatening Self-Immolation",
              recResponse: 145,
              priority: 4,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
              priority: 4,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
              priority: 3,
            },
          ],
        },
        {
          code: "25D04",
          text: (
            <p>
              <b className="font-bold">DANGEROUS</b> hemorrhage
            </p>
          ),
          recResponse: 144,
          priority: 4,
          suffixes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
              priority: 2,
            },
            {
              suffix: "T",
              text: "Threatening Self-Immolation",
              recResponse: 145,
              priority: 4,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
              priority: 4,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
              priority: 3,
            },
          ],
        },
        {
          code: "25D05",
          text: (
            <p>
              <b className="font-bold">Near hanging, strangulation</b> or{" "}
              <b className="font-bold">suffocation</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">with</b> difficulty breathing)
              </span>
            </p>
          ),
          recResponse: 144,
          priority: 3,
          suffixes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
              priority: 2,
            },
            {
              suffix: "T",
              text: "Threatening Self-Immolation",
              recResponse: 145,
              priority: 4,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
              priority: 4,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
              priority: 3,
            },
          ],
        },
        {
          code: "25D06",
          text: <p className="font-bold">Jumped now</p>,
          recResponse: 84,
          priority: 3,
          suffixes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 84,
              priority: 2,
            },
            {
              suffix: "T",
              text: "Threatening Self-Immolation",
              recResponse: 84,
              priority: 4,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 84,
              priority: 4,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 84,
              priority: 3,
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
