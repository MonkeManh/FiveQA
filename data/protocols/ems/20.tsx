import { IEMSProtocol } from "@/models/interfaces";

export const HEAT_COLD_EXPOSURE: IEMSProtocol = {
  protocol: 20,
  name: "Heat / Cold Exposure",
  shortName: "Heat/Cold Exposure",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "C" },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "B",
  defaultCode: "20B02",
  defaultPlan: 99,
  availableTracks: [
    { id: 1, name: "Heat exposure" },
    { id: 2, name: "Cold exposure" }
  ],
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "20A01",
          text: <p>Alert</p>,
          recResponse: 99,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Cold exposure</p>,
              recResponse: 99,
              priority: 0,
            },
            {
              suffix: "H",
              text: <p>Heat exposure</p>,
              recResponse: 100,
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
          code: "20B00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 101,
          priority: 0,
          suffixes: [
            {
              suffix: "C",
              text: <p>Cold exposure</p>,
              recResponse: 101,
              priority: 0,
            },
            {
              suffix: "H",
              text: <p>Heat exposure</p>,
              recResponse: 102,
              priority: 0,
            },
          ],
        },
        {
          code: "20B01",
          text: (
            <p>
              <b className="font-bold">Change</b> in{" "}
              <b className="font-bold">skin color</b>
            </p>
          ),
          recResponse: 101,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Cold exposure</p>,
              recResponse: 101,
              priority: 0,
            },
            {
              suffix: "H",
              text: <p>Heat exposure</p>,
              recResponse: 102,
              priority: 0,
            },
          ],
        },
        {
          code: "20B02",
          text: (
            <p>
              <b className="font-bold">Unknown</b> status/
              <b className="font-bold">Other</b> codes{" "}
              <b className="font-bold">not</b> applicable
            </p>
          ),
          recResponse: 101,
          priority: 2,
          suffixes: [
            {
              suffix: "C",
              text: <p>Cold exposure</p>,
              recResponse: 101,
              priority: 0,
            },
            {
              suffix: "H",
              text: <p>Heat exposure</p>,
              recResponse: 102,
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
          code: "20C00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 103,
          priority: 0,
          suffixes: [
            {
              suffix: "C",
              text: <p>Cold exposure</p>,
              recResponse: 103,
              priority: 0,
            },
            {
              suffix: "H",
              text: <p>Heat exposure</p>,
              recResponse: 104,
              priority: 0,
            },
          ],
        },
        {
          code: "20C01",
          text: (
            <p>
              <b className="font-bold">Heart attack</b> or{" "}
              <b className="font-bold">angina</b> history
            </p>
          ),
          recResponse: 101,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Cold exposure</p>,
              recResponse: 101,
              priority: 0,
            },
            {
              suffix: "H",
              text: <p>Heat exposure</p>,
              recResponse: 102,
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
          code: "20D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 103,
          priority: 0,
          suffixes: [
            {
              suffix: "C",
              text: <p>Cold exposure</p>,
              recResponse: 103,
              priority: 0,
            },
            {
              suffix: "H",
              text: <p>Heat exposure</p>,
              recResponse: 104,
              priority: 0,
            },
          ],
        },
        {
          code: "20D01",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 103,
          priority: 2,
          suffixes: [
            {
              suffix: "C",
              text: <p>Cold exposure</p>,
              recResponse: 103,
              priority: 0,
            },
            {
              suffix: "H",
              text: <p>Heat exposure</p>,
              recResponse: 104,
              priority: 0,
            },
          ],
        },
        {
          code: "20D02",
          text: (
            <p>
              <b className="font-bold">Multiple</b> victims (
              <b className="font-bold">with</b> priority symptoms)
            </p>
          ),
          recResponse: 105,
          multPatient: true,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Cold exposure</p>,
              recResponse: 105,
              priority: 0,
            },
            {
              suffix: "H",
              text: <p>Heat exposure</p>,
              recResponse: 106,
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
