import { IEMSProtocol } from "@/models/interfaces";

export const BURNS_EXPLOSION: IEMSProtocol = {
  protocol: 7,
  name: "Burns (Scalds) / Explosion (Blast)",
  shortName: "Burns/Explosion",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "C" },
    { name: "Police", priority: "B" },
  ],
  defaultPriority: "B",
  defaultCode: "07B02",
  defaultPlan: 26,
  preSend: true,
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "07A01",
          text: (
            <p>
              Burns &lt; <b className="font-bold">18</b>% body area
            </p>
          ),
          recResponse: 26,
          priority: 2,
          suffixes: [
            {
              suffix: "E",
              text: <p>Explosion</p>,
              recResponse: 27,
              priority: 1,
            },
            {
              suffix: "F",
              text: <p>Fire present</p>,
              recResponse: 27,
              priority: 2,
            },
            {
              suffix: "W",
              text: <p>Fireworks</p>,
              recResponse: 27,
              priority: 3,
            },
          ],
        },
        {
          code: "07A02",
          text: (
            <p>
              <b className="font-bold">Fire alarm</b>{" "}
              <span className="text-sm">(unknown situation)</span>
            </p>
          ),
          priority: 3,
          recResponse: 28,
          suffixes: [
            {
              suffix: "E",
              text: <p>Explosion</p>,
              recResponse: 28,
              priority: 1,
            },
            {
              suffix: "F",
              text: <p>Fire present</p>,
              recResponse: 27,
              priority: 2,
            },
            {
              suffix: "W",
              text: <p>Fireworks</p>,
              recResponse: 28,
              priority: 3,
            },
          ],
        },
        {
          code: "07A03",
          text: (
            <p>
              <b className="font-bold">MINOR</b> burns
            </p>
          ),
          recResponse: 29,
          priority: 5,
          suffixes: [
            {
              suffix: "E",
              text: <p>Explosion</p>,
              recResponse: 27,
              priority: 1,
            },
            {
              suffix: "F",
              text: <p>Fire present</p>,
              recResponse: 27,
              priority: 2,
            },
            {
              suffix: "W",
              text: <p>Fireworks</p>,
              recResponse: 27,
              priority: 3,
            },
          ],
        },
        {
          code: "07A04",
          text: <p className="font-bold">Sunburn</p>,
          recResponse: 29,
          priority: 4,
          suffixes: [
            {
              suffix: "E",
              text: <p>Explosion</p>,
              recResponse: 27,
              priority: 1,
            },
            {
              suffix: "F",
              text: <p>Fire present</p>,
              recResponse: 27,
              priority: 2,
            },
            {
              suffix: "W",
              text: <p>Fireworks</p>,
              recResponse: 27,
              priority: 3,
            },
          ],
        },
        {
          code: "07A05",
          text: (
            <p>
              <b className="font-bold">NON-RECENT</b>{" "}
              <span className="text-sm">(&gt;=6hrs)</span> burns/injuries{" "}
              <span className="text-sm">
                (<b className="font-bold">without</b> priority symptoms)
              </span>
            </p>
          ),
          recResponse: 29,
          priority: 1,
          suffixes: [
            {
              suffix: "E",
              text: <p>Explosion</p>,
              recResponse: 27,
              priority: 1,
            },
            {
              suffix: "F",
              text: <p>Fire present</p>,
              recResponse: 27,
              priority: 2,
            },
            {
              suffix: "W",
              text: <p>Fireworks</p>,
              recResponse: 27,
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
          code: "07B00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 26,
          priority: 0,
          suffixes: [
            {
              suffix: "E",
              text: <p>Explosion</p>,
              recResponse: 27,
              priority: 1,
            },
            {
              suffix: "F",
              text: <p>Fire present</p>,
              recResponse: 27,
              priority: 2,
            },
            {
              suffix: "W",
              text: <p>Fireworks</p>,
              recResponse: 27,
              priority: 3,
            },
          ],
        },
        {
          code: "07B01",
          text: (
            <p>
              <b className="font-bold">Blast</b> injuries{" "}
              <span className="text-sm">
                (<b className="font-bold">without</b> priority symptoms)
              </span>
            </p>
          ),
          recResponse: 26,
          priority: 1,
          suffixes: [
            {
              suffix: "E",
              text: <p>Explosion</p>,
              recResponse: 27,
              priority: 1,
            },
            {
              suffix: "F",
              text: <p>Fire present</p>,
              recResponse: 27,
              priority: 2,
            },
            {
              suffix: "W",
              text: <p>Fireworks</p>,
              recResponse: 27,
              priority: 3,
            },
          ],
        },
        {
          code: "07B02",
          text: (
            <p>
              <b className="font-bold">Unknown</b> status/
              <b className="font-bold">Other</b> codes{" "}
              <b className="font-bold">not</b> applicable
            </p>
          ),
          recResponse: 26,
          priority: 2,
          suffixes: [
            {
              suffix: "E",
              text: <p>Explosion</p>,
              recResponse: 27,
              priority: 1,
            },
            {
              suffix: "F",
              text: <p>Fire present</p>,
              recResponse: 27,
              priority: 2,
            },
            {
              suffix: "W",
              text: <p>Fireworks</p>,
              recResponse: 27,
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
          code: "07C00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 30,
          priority: 0,
          suffixes: [
            {
              suffix: "E",
              text: <p>Explosion</p>,
              recResponse: 31,
              priority: 1,
            },
            {
              suffix: "F",
              text: <p>Fire present</p>,
              recResponse: 32,
              priority: 2,
            },
            {
              suffix: "W",
              text: <p>Fireworks</p>,
              recResponse: 31,
              priority: 3,
            },
          ],
        },
        {
          code: "07C01",
          text: (
            <p>
              <b className="font-bold">Fire</b> with{" "}
              <b className="font-bold">persons</b> reported{" "}
              <b className="font-bold">inside</b>
            </p>
          ),
          recResponse: 30,
          priority: 1,
          suffixes: [
            {
              suffix: "E",
              text: <p>Explosion</p>,
              recResponse: 31,
              priority: 1,
            },
            {
              suffix: "F",
              text: <p>Fire present</p>,
              recResponse: 32,
              priority: 2,
            },
            {
              suffix: "W",
              text: <p>Fireworks</p>,
              recResponse: 31,
              priority: 3,
            },
          ],
        },
        {
          code: "07C02",
          text: (
            <p>
              <b className="font-bold">Difficulty</b> breathing
            </p>
          ),
          recResponse: 30,
          priority: 2,
          suffixes: [
            {
              suffix: "E",
              text: <p>Explosion</p>,
              recResponse: 30,
              priority: 1,
            },
            {
              suffix: "F",
              text: <p>Fire present</p>,
              recResponse: 33,
              priority: 2,
            },
            {
              suffix: "W",
              text: <p>Fireworks</p>,
              recResponse: 30,
              priority: 3,
            },
          ],
        },
        {
          code: "07C03",
          text: (
            <p>
              Burns &gt;=<b className="font-bold">18</b>% body area
            </p>
          ),
          recResponse: 30,
          priority: 3,
          suffixes: [
            {
              suffix: "E",
              text: <p>Explosion</p>,
              recResponse: 30,
              priority: 1,
            },
            {
              suffix: "F",
              text: <p>Fire present</p>,
              recResponse: 33,
              priority: 2,
            },
            {
              suffix: "W",
              text: <p>Fireworks</p>,
              recResponse: 30,
              priority: 3,
            },
          ],
        },
        {
          code: "07C04",
          text: (
            <p>
              <b className="font-bold">SIGNIFICANT FACIAL</b> burns
            </p>
          ),
          recResponse: 30,
          priority: 4,
          suffixes: [
            {
              suffix: "E",
              text: <p>Explosion</p>,
              recResponse: 30,
              priority: 1,
            },
            {
              suffix: "F",
              text: <p>Fire present</p>,
              recResponse: 33,
              priority: 2,
            },
            {
              suffix: "W",
              text: <p>Fireworks</p>,
              recResponse: 30,
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
          code: "07D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 34,
          priority: 0,
          suffixes: [
            {
              suffix: "E",
              text: <p>Explosion</p>,
              recResponse: 34,
              priority: 1,
            },
            {
              suffix: "F",
              text: <p>Fire present</p>,
              recResponse: 34,
              priority: 2,
            },
            {
              suffix: "W",
              text: <p>Fireworks</p>,
              recResponse: 34,
              priority: 3,
            },
          ],
        },
        {
          code: "07D01",
          text: (
            <p>
              <b className="font-bold">Multiple</b> victims
            </p>
          ),
          recResponse: 35,
          multPatient: true,
          priority: 1,
          suffixes: [
            {
              suffix: "E",
              text: <p>Explosion</p>,
              recResponse: 35,
              priority: 1,
            },
            {
              suffix: "F",
              text: <p>Fire present</p>,
              recResponse: 35,
              priority: 2,
            },
            {
              suffix: "W",
              text: <p>Fireworks</p>,
              recResponse: 35,
              priority: 3,
            },
          ],
        },
        {
          code: "07D02",
          text: <p className="font-bold">Arrest</p>,
          notBreathing: true,
          recResponse: 36,
          priority: 2,
          suffixes: [
            {
              suffix: "E",
              text: <p>Explosion</p>,
              recResponse: 36,
              priority: 1,
            },
            {
              suffix: "F",
              text: <p>Fire present</p>,
              recResponse: 36,
              priority: 2,
            },
            {
              suffix: "W",
              text: <p>Fireworks</p>,
              recResponse: 36,
              priority: 3,
            },
          ],
        },
        {
          code: "07D03",
          text: <p className="font-bold">Unconscious</p>,
          notConscious: true,
          recResponse: 34,
          priority: 3,
          suffixes: [
            {
              suffix: "E",
              text: <p>Explosion</p>,
              recResponse: 37,
              priority: 1,
            },
            {
              suffix: "F",
              text: <p>Fire present</p>,
              recResponse: 34,
              priority: 2,
            },
            {
              suffix: "W",
              text: <p>Fireworks</p>,
              recResponse: 37,
              priority: 3,
            },
          ],
        },
        {
          code: "07D04",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 38,
          priority: 4,
          suffixes: [
            {
              suffix: "E",
              text: <p>Explosion</p>,
              recResponse: 30,
              priority: 1,
            },
            {
              suffix: "F",
              text: <p>Fire present</p>,
              recResponse: 33,
              priority: 2,
            },
            {
              suffix: "W",
              text: <p>Fireworks</p>,
              recResponse: 30,
              priority: 3,
            },
          ],
        },
        {
          code: "07D05",
          text: (
            <p className="font-bold">DIFFICULTY SPEAKING BETWEEN BREATHS</p>
          ),
          recResponse: 30,
          priority: 5,
          suffixes: [
            {
              suffix: "E",
              text: <p>Explosion</p>,
              recResponse: 30,
              priority: 1,
            },
            {
              suffix: "F",
              text: <p>Fire present</p>,
              recResponse: 33,
              priority: 2,
            },
            {
              suffix: "W",
              text: <p>Fireworks</p>,
              recResponse: 30,
              priority: 3,
            },
          ],
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "07E00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 34,
          priority: 0,
          suffixes: [
            {
              suffix: "E",
              text: <p>Explosion</p>,
              recResponse: 37,
              priority: 1,
            },
            {
              suffix: "F",
              text: <p>Fire present</p>,
              recResponse: 34,
              priority: 2,
            },
            {
              suffix: "W",
              text: <p>Fireworks</p>,
              recResponse: 37,
              priority: 3,
            },
          ],
        },
        {
          code: "07E01",
          text: <p className="font-bold">Person on fire</p>,
          recResponse: 39,
          priority: 1,
          suffixes: [
            {
              suffix: "E",
              text: <p>Explosion</p>,
              recResponse: 39,
              priority: 1,
            },
            {
              suffix: "F",
              text: <p>Fire present</p>,
              recResponse: 39,
              priority: 2,
            },
            {
              suffix: "W",
              text: <p>Fireworks</p>,
              recResponse: 39,
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
