import { IEMSProtocol } from "@/models/interfaces";

export const UNCO_FAINTING: IEMSProtocol = {
  protocol: 31,
  name: "Unconscious / Fainting (Near)",
  shortName: "Unco/Fainting",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "C" },
    { name: "Police", priority: "E" },
  ],
  defaultPriority: "C",
  defaultCode: "31C00",
  defaultPlan: 194,
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "31A01",
          text: (
            <p>
              <b className="font-bold">Fainting episode</b> (s) and{" "}
              <b className="font-bold">alert</b> &gt;=
              <b className="font-bold">35</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">without</b> cardiac history)
              </span>
            </p>
          ),
          recResponse: 194,
          priority: 1,
        },
        {
          code: "31A02",
          text: (
            <p>
              <b className="font-bold">Fainting episode</b>(s) and{" "}
              <b className="font-bold">alert</b> &lt;
              <b className="font-bold">35</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">with</b> cardiac history)
              </span>
            </p>
          ),
          recResponse: 194,
          priority: 1,
        },
        {
          code: "31A03",
          text: (
            <p>
              <b className="font-bold">Fainting episode</b>(s) and{" "}
              <b className="font-bold">alert</b> &lt;
              <b className="font-bold">35</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">without</b> cardiac history)
              </span>
            </p>
          ),
          recResponse: 194,
          priority: 1,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "31C00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 195,
          priority: 0,
        },
        {
          code: "31C01",
          text: (
            <p>
              Alert with <b className="font-bold">abnormal breathing</b>
            </p>
          ),
          recResponse: 195,
          priority: 1,
        },
        {
          code: "31C02",
          text: (
            <p>
              <b className="font-bold">Fainting episode</b>(s) and{" "}
              <b className="font-bold">alert</b> &gt;=
              <b className="font-bold">35</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">with</b> cardiac history)
              </span>
            </p>
          ),
          recResponse: 195,
          priority: 2,
        },
        {
          code: "31C03",
          text: (
            <p>
              <b className="font-bold">Females 12-50</b> with{" "}
              <b className="font-bold">abdominal pain</b>
            </p>
          ),
          recResponse: 195,
          priority: 3,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "31D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 196,
          priority: 0,
        },
        {
          code: "31D01",
          text: (
            <p className="font-bold">
              Unconscious - AGONAL/INEFFECTIVE BREATHING
            </p>
          ),
          recResponse: 197,
          priority: 1,
          agonalBreathing: true,
        },
        {
          code: "31D02",
          text: (
            <p>
              <b className="font-bold">Unconscious - Abnormal</b> breathing
            </p>
          ),
          recResponse: 196,
          priority: 2,
        },
        {
          code: "31D03",
          text: (
            <p>
              <b className="font-bold">Unconscious - Effective</b> breathing
            </p>
          ),
          recResponse: 195,
          notConscious: true,
          priority: 3,
        },
        {
          code: "31D04",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 150,
          priority: 4,
        },
        {
          code: "31D05",
          text: <p className="font-bold">CHANGING COLOR</p>,
          recResponse: 195,
          priority: 5,
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "31E00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 198,
          priority: 0,
        },
        {
          code: "31E01",
          text: <p className="font-bold">INEFFECTIVE BREATHING</p>,
          notBreathing: true,
          recResponse: 198,
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
