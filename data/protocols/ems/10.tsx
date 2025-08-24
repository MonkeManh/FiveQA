import { IEMSProtocol } from "@/models/interfaces";

export const CHEST_PAIN: IEMSProtocol = {
  protocol: 10,
  name: "Chest Pain (Non-Traumatic)",
  shortName: "Chest Pain",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "C" },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultCode: "10A01",
  defaultPlan: 49,
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "10A01",
          text: (
            <p>
              Breathing <b className="font-bold">normally</b> &lt;35
            </p>
          ),
          recResponse: 49,
          priority: 1,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "10C00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 50,
          priority: 0,
        },
        {
          code: "10C01",
          text: (
            <p>
              <b className="font-bold">Abnormal</b> breathing
            </p>
          ),
          recResponse: 50,
          priority: 1,
        },
        {
          code: "10C02",
          text: <p className="font-bold">Cocaine</p>,
          recResponse: 51,
          priority: 2,
        },
        {
          code: "10C03",
          text: (
            <p>
              Breathing <b className="font-bold">normally</b> &gt;=35
            </p>
          ),
          recResponse: 50,
          priority: 3,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "10D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 52,
          priority: 0,
        },
        {
          code: "10D01",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 50,
          priority: 1,
        },
        {
          code: "10D02",
          text: (
            <p className="font-bold">DIFFICULTY SPEAKING BETWEEN BREATHS</p>
          ),
          recResponse: 50,
          priority: 2,
        },
        {
          code: "10D03",
          text: <p className="font-bold">CHANGING COLOR</p>,
          recResponse: 50,
          priority: 3,
        },
        {
          code: "10D04",
          text: (
            <p>
              <b className="font-bold">Clammy</b> or{" "}
              <b className="font-bold">cold sweats</b>
            </p>
          ),
          recResponse: 50,
          priority: 4,
        },
        {
          code: "10D05",
          text: (
            <p>
              <b className="font-bold">Heart attack</b> or{" "}
              <b className="font-bold">angina</b> history
            </p>
          ),
          recResponse: 50,
          priority: 5,
        },
      ],
    },
  ],
  pdis: {
    instructions: [],
    dls: [],
  },
};
