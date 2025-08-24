import { IEMSProtocol } from "@/models/interfaces";

export const EYE_PROBLEMS: IEMSProtocol = {
  protocol: 16,
  name: "Eye Problems / Injuries",
  shortName: "Eye Problems",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "D" },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultCode: "16A02",
  defaultPlan: 76,
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "16A01",
          text: (
            <p>
              <b className="font-bold">MODERATE</b> eye injuries
            </p>
          ),
          recResponse: 76,
          priority: 1,
        },
        {
          code: "16A02",
          text: (
            <p>
              <b className="font-bold">MINOR</b> eye injuries
            </p>
          ),
          recResponse: 76,
          priority: 2,
        },
        {
          code: "16A03",
          text: (
            <p>
              <b className="font-bold">MEDICAL</b> eye problems
            </p>
          ),
          recResponse: 77,
          priority: 3,
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "16B00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 76,
          priority: 0,
        },
        {
          code: "16B01",
          text: (
            <p>
              <b className="font-bold">SEVERE</b> eye injuries
            </p>
          ),
          recResponse: 76,
          priority: 1,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "16D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 78,
          priority: 0,
        },
        {
          code: "16D01",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 78,
          priority: 1,
        },
      ],
    },
  ],
  pdis: {
    instructions: [],
    dls: [],
  },
};
