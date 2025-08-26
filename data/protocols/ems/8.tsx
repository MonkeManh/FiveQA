import { IEMSProtocol } from "@/models/interfaces";

export const CARB_MONO_HAZ: IEMSProtocol = {
  protocol: 8,
  name: "Carbon Monoxide / Inhalation / Hazmat / CBRN",
  shortName: "Carb Mono/Hazmat/CBRN",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "C" },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "D",
  defaultCode: "08D06",
  defaultPlan: 40,
  preSend: true,
  availableTracks: [
    { id: 1, name: "CO detector alarm" }
  ],
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "08O01",
          text: (
            <p>
              <b className="font-bold">Carbon monoxide detector</b> alarm{" "}
              <span className="text-sm">
                (<b className="font-bold">scene</b> contact{" "}
                <b className="font-bold">without</b> priority symptoms)
              </span>
            </p>
          ),
          priority: 1,
          recResponse: 46,
        },
        {
          code: "08O02",
          text: (
            <p>
              <b className="font-bold">Carbon monoxide detector</b> alarm (alarm
              only, <b className="font-bold">no</b> scene{" "}
              <b className="font-bold">contact</b>)
            </p>
          ),
          priority: 1,
          recResponse: 46,
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "08B00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 40,
          priority: 0,
          suffixes: [
            {
              suffix: "B",
              text: <p>Biological</p>,
              recResponse: 40,
              priority: 5,
            },
            {
              suffix: "C",
              text: <p>Chemical</p>,
              recResponse: 40,
              priority: 6,
            },
            {
              suffix: "G",
              text: <p>Smell of gas/fumes</p>,
              recResponse: 40,
              priority: 8,
            },
            {
              suffix: "M",
              text: <p>Carbon monoxide</p>,
              recResponse: 40,
              priority: 7,
            },
            {
              suffix: "N",
              text: <p>Nuclear</p>,
              recResponse: 40,
              priority: 3,
            },
            {
              suffix: "R",
              text: <p>Radiological</p>,
              recResponse: 40,
              priority: 4,
            },
            {
              suffix: "S",
              text: <p>Suicide attempt (only carbon monoxide)</p>,
              recResponse: 40,
              priority: 1,
            },
            {
              suffix: "T",
              text: <p>Suicide attempt (other toxic substances)</p>,
              recResponse: 40,
              priority: 2,
            },
            {
              suffix: "U",
              text: <p>Unknown</p>,
              recResponse: 40,
              priority: 9,
            },
          ],
        },
        {
          code: "08B01",
          text: (
            <p>
              Alert <b className="font-bold">without</b> difficulty breathing
            </p>
          ),
          recResponse: 41,
          priority: 1,
          suffixes: [
            {
              suffix: "B",
              text: <p>Biological</p>,
              recResponse: 41,
              priority: 5,
            },
            {
              suffix: "C",
              text: <p>Chemical</p>,
              recResponse: 41,
              priority: 6,
            },
            {
              suffix: "G",
              text: <p>Smell of gas/fumes</p>,
              recResponse: 41,
              priority: 8,
            },
            {
              suffix: "M",
              text: <p>Carbon monoxide</p>,
              recResponse: 41,
              priority: 7,
            },
            {
              suffix: "N",
              text: <p>Nuclear</p>,
              recResponse: 41,
              priority: 3,
            },
            {
              suffix: "R",
              text: <p>Radiological</p>,
              recResponse: 41,
              priority: 4,
            },
            {
              suffix: "S",
              text: <p>Suicide attempt (only carbon monoxide)</p>,
              recResponse: 41,
              priority: 1,
            },
            {
              suffix: "T",
              text: <p>Suicide attempt (other toxic substances)</p>,
              recResponse: 41,
              priority: 2,
            },
            {
              suffix: "U",
              text: <p>Unknown</p>,
              recResponse: 41,
              priority: 9,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "08C00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 42,
          priority: 0,
          suffixes: [
            {
              suffix: "B",
              text: <p>Biological</p>,
              recResponse: 42,
              priority: 5,
            },
            {
              suffix: "C",
              text: <p>Chemical</p>,
              recResponse: 42,
              priority: 6,
            },
            {
              suffix: "G",
              text: <p>Smell of gas/fumes</p>,
              recResponse: 42,
              priority: 8,
            },
            {
              suffix: "M",
              text: <p>Carbon monoxide</p>,
              recResponse: 42,
              priority: 7,
            },
            {
              suffix: "N",
              text: <p>Nuclear</p>,
              recResponse: 42,
              priority: 3,
            },
            {
              suffix: "R",
              text: <p>Radiological</p>,
              recResponse: 42,
              priority: 4,
            },
            {
              suffix: "S",
              text: <p>Suicide attempt (only carbon monoxide)</p>,
              recResponse: 42,
              priority: 1,
            },
            {
              suffix: "T",
              text: <p>Suicide attempt (other toxic substances)</p>,
              recResponse: 42,
              priority: 2,
            },
            {
              suffix: "U",
              text: <p>Unknown</p>,
              recResponse: 42,
              priority: 9,
            },
          ],
        },
        {
          code: "08C01",
          text: (
            <p>
              Alert <b className="font-bold">with</b> difficulty breathing
            </p>
          ),
          recResponse: 42,
          priority: 1,
          suffixes: [
            {
              suffix: "B",
              text: <p>Biological</p>,
              recResponse: 42,
              priority: 5,
            },
            {
              suffix: "C",
              text: <p>Chemical</p>,
              recResponse: 42,
              priority: 6,
            },
            {
              suffix: "G",
              text: <p>Smell of gas/fumes</p>,
              recResponse: 42,
              priority: 8,
            },
            {
              suffix: "M",
              text: <p>Carbon monoxide</p>,
              recResponse: 42,
              priority: 7,
            },
            {
              suffix: "N",
              text: <p>Nuclear</p>,
              recResponse: 42,
              priority: 3,
            },
            {
              suffix: "R",
              text: <p>Radiological</p>,
              recResponse: 42,
              priority: 4,
            },
            {
              suffix: "S",
              text: <p>Suicide attempt (only carbon monoxide)</p>,
              recResponse: 42,
              priority: 1,
            },
            {
              suffix: "T",
              text: <p>Suicide attempt (other toxic substances)</p>,
              recResponse: 42,
              priority: 2,
            },
            {
              suffix: "U",
              text: <p>Unknown</p>,
              recResponse: 42,
              priority: 9,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "08D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 43,
          priority: 0,
          suffixes: [
            {
              suffix: "B",
              text: <p>Biological</p>,
              recResponse: 43,
              priority: 5,
            },
            {
              suffix: "C",
              text: <p>Chemical</p>,
              recResponse: 43,
              priority: 6,
            },
            {
              suffix: "G",
              text: <p>Smell of gas/fumes</p>,
              recResponse: 43,
              priority: 8,
            },
            {
              suffix: "M",
              text: <p>Carbon monoxide</p>,
              recResponse: 43,
              priority: 7,
            },
            {
              suffix: "N",
              text: <p>Nuclear</p>,
              recResponse: 43,
              priority: 3,
            },
            {
              suffix: "R",
              text: <p>Radiological</p>,
              recResponse: 43,
              priority: 4,
            },
            {
              suffix: "S",
              text: <p>Suicide attempt (only carbon monoxide)</p>,
              recResponse: 43,
              priority: 1,
            },
            {
              suffix: "T",
              text: <p>Suicide attempt (other toxic substances)</p>,
              recResponse: 43,
              priority: 2,
            },
            {
              suffix: "U",
              text: <p>Unknown</p>,
              recResponse: 43,
              priority: 9,
            },
          ],
        },
        {
          code: "08D01",
          text: <p className="font-bold">Arrest</p>,
          notBreathing: true,
          recResponse: 44,
          priority: 1,
          suffixes: [
            {
              suffix: "B",
              text: <p>Biological</p>,
              recResponse: 44,
              priority: 5,
            },
            {
              suffix: "C",
              text: <p>Chemical</p>,
              recResponse: 44,
              priority: 6,
            },
            {
              suffix: "G",
              text: <p>Smell of gas/fumes</p>,
              recResponse: 44,
              priority: 8,
            },
            {
              suffix: "M",
              text: <p>Carbon monoxide</p>,
              recResponse: 44,
              priority: 7,
            },
            {
              suffix: "N",
              text: <p>Nuclear</p>,
              recResponse: 44,
              priority: 3,
            },
            {
              suffix: "R",
              text: <p>Radiological</p>,
              recResponse: 44,
              priority: 4,
            },
            {
              suffix: "S",
              text: <p>Suicide attempt (only carbon monoxide)</p>,
              recResponse: 44,
              priority: 1,
            },
            {
              suffix: "T",
              text: <p>Suicide attempt (other toxic substances)</p>,
              recResponse: 44,
              priority: 2,
            },
            {
              suffix: "U",
              text: <p>Unknown</p>,
              recResponse: 44,
              priority: 9,
            },
          ],
        },
        {
          code: "08D02",
          text: <p className="font-bold">Unconscious</p>,
          notConscious: true,
          recResponse: 43,
          priority: 2,
          suffixes: [
            {
              suffix: "B",
              text: <p>Biological</p>,
              recResponse: 43,
              priority: 5,
            },
            {
              suffix: "C",
              text: <p>Chemical</p>,
              recResponse: 43,
              priority: 6,
            },
            {
              suffix: "G",
              text: <p>Smell of gas/fumes</p>,
              recResponse: 43,
              priority: 8,
            },
            {
              suffix: "M",
              text: <p>Carbon monoxide</p>,
              recResponse: 43,
              priority: 7,
            },
            {
              suffix: "N",
              text: <p>Nuclear</p>,
              recResponse: 43,
              priority: 3,
            },
            {
              suffix: "R",
              text: <p>Radiological</p>,
              recResponse: 43,
              priority: 4,
            },
            {
              suffix: "S",
              text: <p>Suicide attempt (only carbon monoxide)</p>,
              recResponse: 43,
              priority: 1,
            },
            {
              suffix: "T",
              text: <p>Suicide attempt (other toxic substances)</p>,
              recResponse: 43,
              priority: 2,
            },
            {
              suffix: "U",
              text: <p>Unknown</p>,
              recResponse: 43,
              priority: 9,
            },
          ],
        },
        {
          code: "08D03",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 42,
          priority: 3,
          suffixes: [
            {
              suffix: "B",
              text: <p>Biological</p>,
              recResponse: 42,
              priority: 5,
            },
            {
              suffix: "C",
              text: <p>Chemical</p>,
              recResponse: 42,
              priority: 6,
            },
            {
              suffix: "G",
              text: <p>Smell of gas/fumes</p>,
              recResponse: 42,
              priority: 8,
            },
            {
              suffix: "M",
              text: <p>Carbon monoxide</p>,
              recResponse: 42,
              priority: 7,
            },
            {
              suffix: "N",
              text: <p>Nuclear</p>,
              recResponse: 42,
              priority: 3,
            },
            {
              suffix: "R",
              text: <p>Radiological</p>,
              recResponse: 42,
              priority: 4,
            },
            {
              suffix: "S",
              text: <p>Suicide attempt (only carbon monoxide)</p>,
              recResponse: 42,
              priority: 1,
            },
            {
              suffix: "T",
              text: <p>Suicide attempt (other toxic substances)</p>,
              recResponse: 42,
              priority: 2,
            },
            {
              suffix: "U",
              text: <p>Unknown</p>,
              recResponse: 42,
              priority: 9,
            },
          ],
        },
        {
          code: "08D04",
          text: (
            <p className="font-bold">DIFFICULTY SPEAKING BETWEEN BREATHS</p>
          ),
          recResponse: 42,
          priority: 4,
          suffixes: [
            {
              suffix: "B",
              text: <p>Biological</p>,
              recResponse: 42,
              priority: 5,
            },
            {
              suffix: "C",
              text: <p>Chemical</p>,
              recResponse: 42,
              priority: 6,
            },
            {
              suffix: "G",
              text: <p>Smell of gas/fumes</p>,
              recResponse: 42,
              priority: 8,
            },
            {
              suffix: "M",
              text: <p>Carbon monoxide</p>,
              recResponse: 42,
              priority: 7,
            },
            {
              suffix: "N",
              text: <p>Nuclear</p>,
              recResponse: 42,
              priority: 3,
            },
            {
              suffix: "R",
              text: <p>Radiological</p>,
              recResponse: 42,
              priority: 4,
            },
            {
              suffix: "S",
              text: <p>Suicide attempt (only carbon monoxide)</p>,
              recResponse: 42,
              priority: 1,
            },
            {
              suffix: "T",
              text: <p>Suicide attempt (other toxic substances)</p>,
              recResponse: 42,
              priority: 2,
            },
            {
              suffix: "U",
              text: <p>Unknown</p>,
              recResponse: 42,
              priority: 9,
            },
          ],
        },
        {
          code: "08D05",
          text: (
            <p>
              <b className="font-bold">Multiple</b> victims
            </p>
          ),
          multPatient: true,
          recResponse: 45,
          priority: 5,
          suffixes: [
            {
              suffix: "B",
              text: <p>Biological</p>,
              recResponse: 45,
              priority: 5,
            },
            {
              suffix: "C",
              text: <p>Chemical</p>,
              recResponse: 45,
              priority: 6,
            },
            {
              suffix: "G",
              text: <p>Smell of gas/fumes</p>,
              recResponse: 45,
              priority: 8,
            },
            {
              suffix: "M",
              text: <p>Carbon monoxide</p>,
              recResponse: 45,
              priority: 7,
            },
            {
              suffix: "N",
              text: <p>Nuclear</p>,
              recResponse: 45,
              priority: 3,
            },
            {
              suffix: "R",
              text: <p>Radiological</p>,
              recResponse: 45,
              priority: 4,
            },
            {
              suffix: "S",
              text: <p>Suicide attempt (only carbon monoxide)</p>,
              recResponse: 45,
              priority: 1,
            },
            {
              suffix: "T",
              text: <p>Suicide attempt (other toxic substances)</p>,
              recResponse: 45,
              priority: 2,
            },
            {
              suffix: "U",
              text: <p>Unknown</p>,
              recResponse: 45,
              priority: 9,
            },
          ],
        },
        {
          code: "08D06",
          text: (
            <p>
              <b className="font-bold">Unknown</b> status/
              <b className="font-bold">Other</b> codes{" "}
              <b className="font-bold">not</b> applicable
            </p>
          ),
          recResponse: 42,
          priority: 6,
          suffixes: [
            {
              suffix: "B",
              text: <p>Biological</p>,
              recResponse: 42,
              priority: 5,
            },
            {
              suffix: "C",
              text: <p>Chemical</p>,
              recResponse: 42,
              priority: 6,
            },
            {
              suffix: "G",
              text: <p>Smell of gas/fumes</p>,
              recResponse: 42,
              priority: 8,
            },
            {
              suffix: "M",
              text: <p>Carbon monoxide</p>,
              recResponse: 42,
              priority: 7,
            },
            {
              suffix: "N",
              text: <p>Nuclear</p>,
              recResponse: 42,
              priority: 3,
            },
            {
              suffix: "R",
              text: <p>Radiological</p>,
              recResponse: 42,
              priority: 4,
            },
            {
              suffix: "S",
              text: <p>Suicide attempt (only carbon monoxide)</p>,
              recResponse: 42,
              priority: 1,
            },
            {
              suffix: "T",
              text: <p>Suicide attempt (other toxic substances)</p>,
              recResponse: 42,
              priority: 2,
            },
            {
              suffix: "U",
              text: <p>Unknown</p>,
              recResponse: 42,
              priority: 9,
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
