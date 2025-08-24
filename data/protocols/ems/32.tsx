import { IEMSProtocol } from "@/models/interfaces";

export const UNKN_PROBLEM: IEMSProtocol = {
  protocol: 32,
  name: "Unknown Problem (Person Down)",
  shortName: "Unkn Problem",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "D" },
    { name: "Police", priority: "D" },
  ],
  defaultPriority: "B",
  defaultCode: "32B03",
  defaultPlan: 199,
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "B",
      codes: [
        {
          code: "32B01",
          text: (
            <p>
              <b className="font-bold">Standing, sitting, moving</b> or{" "}
              <b className="font-bold">talking</b>
            </p>
          ),
          recResponse: 199,
          priority: 1,
        },
        {
          code: "32B02",
          text: (
            <p>
              <b className="font-bold">Medical Alarm</b>{" "}
              <span className="text-sm">(Alert)</span> notifications{" "}
              <span className="text-sm">(no patient information)</span>
            </p>
          ),
          recResponse: 200,
          priority: 2,
        },
        {
          code: "32B03",
          text: (
            <p>
              <b className="font-bold">Unknown</b> status/
              <b className="font-bold">Other</b> codes{" "}
              <b className="font-bold">not</b> applicable
            </p>
          ),
          recResponse: 199,
          priority: 4,
        },
        {
          code: "32B04",
          text: (
            <p>
              Caller's language <b className="font-bold">not understood</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">no</b> interpreter in center)
              </span>
            </p>
          ),
          recResponse: 199,
          priority: 3,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "32D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 199,
          priority: 0,
        },
        {
          code: "32D01",
          text: <p className="font-bold">LIFE STATUS QUESTIONABLE</p>,
          recResponse: 199,
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
