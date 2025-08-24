import { IEMSProtocol } from "@/models/interfaces";

export const DIABETIC_PROB: IEMSProtocol = {
  protocol: 13,
  name: "Diabetic Problems",
  shortName: "Diabetic Problem",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "C" },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultCode: "13A01",
  defaultPlan: 62,
  preSend: true,
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "13A01",
          text: (
            <p>
              Alert <b className="font-bold">and</b> behaving normally
            </p>
          ),
          recResponse: 62,
          priority: 1,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "13C00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 63,
          priority: 0,
          suffixes: [
            {
              suffix: "C",
              text: <p>Combative or aggressive</p>,
              recResponse: 64,
              priority: 0,
            },
          ],
        },
        {
          code: "13C01",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 63,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Combative or aggressive</p>,
              recResponse: 64,
              priority: 0,
            },
          ],
        },
        {
          code: "13C02",
          text: (
            <p>
              <b className="font-bold">Abnormal</b> behavior
            </p>
          ),
          recResponse: 63,
          priority: 2,
          suffixes: [
            {
              suffix: "C",
              text: <p>Combative or aggressive</p>,
              recResponse: 64,
              priority: 0,
            },
          ],
        },
        {
          code: "13C03",
          text: (
            <p>
              <b className="font-bold">Abnormal</b> breathing
            </p>
          ),
          recResponse: 63,
          priority: 3,
          suffixes: [
            {
              suffix: "C",
              text: <p>Combative or aggressive</p>,
              recResponse: 64,
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
          code: "13D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 63,
          priority: 0,
          suffixes: [
            {
              suffix: "C",
              text: <p>Combative or aggressive</p>,
              recResponse: 64,
              priority: 0,
            },
          ],
        },
        {
          code: "13D01",
          text: <p className="font-bold">Unconscious</p>,
          notConscious: true,
          recResponse: 63,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Combative or aggressive</p>,
              recResponse: 64,
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
