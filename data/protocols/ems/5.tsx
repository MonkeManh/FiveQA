import { IEMSProtocol } from "@/models/interfaces";

export const BACK_PAIN: IEMSProtocol = {
  protocol: 5,
  name: "Back Pain (Non-Traumatic or Non-Recent Trauma)",
  shortName: "Back Pain",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "C" },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultCode: "05A01",
  defaultPlan: 20,
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "05A01",
          text: (
            <p>
              <b className="font-bold">NON TRAUMATIC</b> back pain
            </p>
          ),
          recResponse: 20,
          priority: 2,
        },
        {
          code: "05A02",
          text: (
            <p>
              <b className="font-bold">NON-RECENT</b> (&gt;=6hrs) traumatic
              back pain{" "}
              <span className="text-sm">
                (<b className="font-bold">without</b> priority symptoms)
              </span>
            </p>
          ),
          recResponse: 20,
          priority: 1,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "05C00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 21,
          priority: 0,
        },
        {
          code: "05C01",
          text: (
            <p>
              <b className="font-bold">SUSPECTED</b> aortic{" "}
              <b className="font-bold">aneurysm</b>{" "}
              <span className="text-sm">(tearing/ripping pain)</span> &gt;=50
            </p>
          ),
          recResponse: 21,
          priority: 1,
        },
        {
          code: "05C02",
          text: (
            <p>
              <b className="font-bold">Diagnosed</b> aortic aneurysm
            </p>
          ),
          recResponse: 21,
          priority: 2,
        },
        {
          code: "05C03",
          text: (
            <p>
              <b className="font-bold">Fainting</b> or{" "}
              <b className="font-bold">near fainting</b> &gt;=50
            </p>
          ),
          recResponse: 21,
          priority: 3,
        },
        {
          code: "05C04",
          text: (
            <p>
              <b className="font-bold">Difficulty</b> breathing
            </p>
          ),
          recResponse: 21,
          priority: 4,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "05D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 21,
          priority: 0,
        },
        {
          code: "05D01",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 21,
          priority: 1,
        },
        {
          code: "05D02",
          text: (
            <p>
              <b className="font-bold">Ashen</b> or{" "}
              <b className="font-bold">gray</b> color reported &gt;=50
            </p>
          ),
          recResponse: 21,
          priority: 2,
        },
      ],
    },
  ],
  pdis: {
    instructions: [],
    dls: [],
  },
};
