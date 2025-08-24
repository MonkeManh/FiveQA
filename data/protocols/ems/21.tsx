import { IEMSProtocol } from "@/models/interfaces";

export const HEM_LAC: IEMSProtocol = {
  protocol: 21,
  name: "Hemorrhage / Laceration",
  shortName: "Hemorrhage/Laceration",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "C" },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "B",
  defaultCode: "21B01",
  defaultPlan: 107,
  preSend: true,
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "21A01",
          text: (
            <p>
              <b className="font-bold">NOT DANGEROUS</b> hemorrhage
            </p>
          ),
          recResponse: 107,
          priority: 1,
          suffixes: [
            {
              suffix: "M",
              text: <p>Medical</p>,
              recResponse: 108,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Trauma</p>,
              recResponse: 109,
              priority: 0,
            },
          ],
        },
        {
          code: "21A02",
          text: (
            <p>
              <b className="font-bold">MINOR</b> hemorrhage
            </p>
          ),
          recResponse: 110,
          priority: 2,
          suffixes: [
            {
              suffix: "M",
              text: <p>Medical</p>,
              recResponse: 111,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Trauma</p>,
              recResponse: 112,
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
          code: "21B00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 107,
          priority: 0,
          suffixes: [
            {
              suffix: "M",
              text: <p>Medical</p>,
              recResponse: 108,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Trauma</p>,
              recResponse: 109,
              priority: 0,
            },
          ],
        },
        {
          code: "21B01",
          text: (
            <p>
              <b className="font-bold">POSSIBLY DANGEROUS</b> hemorrhage
            </p>
          ),
          recResponse: 107,
          priority: 1,
          suffixes: [
            {
              suffix: "M",
              text: <p>Medical</p>,
              recResponse: 108,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Trauma</p>,
              recResponse: 109,
              priority: 0,
            },
          ],
        },
        {
          code: "21B02",
          text: (
            <p>
              <b className="font-bold">SERIOUS</b> hemorrhage
            </p>
          ),
          recResponse: 107,
          priority: 2,
          suffixes: [
            {
              suffix: "M",
              text: <p>Medical</p>,
              recResponse: 108,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Trauma</p>,
              recResponse: 109,
              priority: 0,
            },
          ],
        },
        {
          code: "21B03",
          text: <p className="font-bold">Bleeding disorder</p>,
          recResponse: 107,
          priority: 3,
          suffixes: [
            {
              suffix: "M",
              text: <p>Medical</p>,
              recResponse: 108,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Trauma</p>,
              recResponse: 109,
              priority: 0,
            },
          ],
        },
        {
          code: "21B04",
          text: <p className="font-bold">Blood thinners</p>,
          recResponse: 107,
          priority: 3,
          suffixes: [
            {
              suffix: "M",
              text: <p>Medical</p>,
              recResponse: 108,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Trauma</p>,
              recResponse: 109,
              priority: 0,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "21C00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 113,
          priority: 0,
          suffixes: [
            {
              suffix: "M",
              text: <p>Medical</p>,
              recResponse: 114,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Trauma</p>,
              recResponse: 115,
              priority: 0,
            },
          ],
        },
        {
          code: "21C01",
          text: (
            <p>
              Hemorrhage through <b className="font-bold">TUBES</b>
            </p>
          ),
          recResponse: 107,
          priority: 1,
          suffixes: [
            {
              suffix: "M",
              text: <p>Medical</p>,
              recResponse: 108,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Trauma</p>,
              recResponse: 109,
              priority: 0,
            },
          ],
        },
        {
          code: "21C02",
          text: (
            <p>
              Hemorrhage of <b className="font-bold">dialysis fistula</b>
            </p>
          ),
          recResponse: 107,
          priority: 1,
          suffixes: [
            {
              suffix: "M",
              text: <p>Medical</p>,
              recResponse: 108,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Trauma</p>,
              recResponse: 109,
              priority: 0,
            },
          ],
        },
        {
          code: "21C03",
          text: (
            <p>
              Hemorrhage from <b className="font-bold">varicose veins</b>
            </p>
          ),
          recResponse: 107,
          priority: 1,
          suffixes: [
            {
              suffix: "M",
              text: <p>Medical</p>,
              recResponse: 108,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Trauma</p>,
              recResponse: 109,
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
          code: "21D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 113,
          priority: 0,
          suffixes: [
            {
              suffix: "M",
              text: <p>Medical</p>,
              recResponse: 114,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Trauma</p>,
              recResponse: 115,
              priority: 0,
            },
          ],
        },
        {
          code: "21D01",
          text: <p className="font-bold">Arrest</p>,
          recResponse: 116,
          notBreathing: true,
          priority: 1,
          suffixes: [
            {
              suffix: "M",
              text: <p>Medical</p>,
              recResponse: 117,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Trauma</p>,
              recResponse: 118,
              priority: 0,
            },
          ],
        },
        {
          code: "21D02",
          text: <p className="font-bold">Unconscious</p>,
          recResponse: 119,
          notConscious: true,
          priority: 2,
          suffixes: [
            {
              suffix: "M",
              text: <p>Medical</p>,
              recResponse: 120,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Trauma</p>,
              recResponse: 121,
              priority: 0,
            },
          ],
        },
        {
          code: "21D03",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 113,
          priority: 3,
          suffixes: [
            {
              suffix: "M",
              text: <p>Medical</p>,
              recResponse: 114,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Trauma</p>,
              recResponse: 115,
              priority: 0,
            },
          ],
        },
        {
          code: "21D04",
          text: (
            <p>
              <b className="font-bold">DANGEROUS</b> hemorrhage
            </p>
          ),
          recResponse: 113,
          priority: 4,
          suffixes: [
            {
              suffix: "M",
              text: <p>Medical</p>,
              recResponse: 114,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Trauma</p>,
              recResponse: 115,
              priority: 0,
            },
          ],
        },
        {
          code: "21D05",
          text: (
            <p>
              <b className="font-bold">Abnormal</b> breathing
            </p>
          ),
          recResponse: 113,
          priority: 5,
          suffixes: [
            {
              suffix: "M",
              text: <p>Medical</p>,
              recResponse: 114,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Trauma</p>,
              recResponse: 115,
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
