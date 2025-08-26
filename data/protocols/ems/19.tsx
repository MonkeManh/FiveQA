import { IEMSProtocol } from "@/models/interfaces";

export const HEART_PROBLEMS: IEMSProtocol = {
  protocol: 19,
  name: "Heart Problems / A.I.C.D.",
  shortName: "Heart Prob/AICD",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "C" },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "C",
  defaultCode: "19C07",
  defaultPlan: 94,
  information: <></>,
  availableTracks: [
    { id: 1, name: "Pacemaker" },
    { id: 2, name: "Implanted Defibrillator (A.I.C.D.)" },
    { id: 3, name: "Left Ventricular Assist Device (LVAD)" },
    { id: 4, name: "Just resuscitated and/or defibrillated (external)" },
    { id: 5, name: "Heart rate number known (from device)" }
  ],
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "19A01",
          text: (
            <p>
              <b className="font-bold">Heart rate</b> &gt;={" "}
              <b className="font-bold">50</b> bpm and &lt;{" "}
              <b className="font-bold">130</b> bpm (
              <b className="font-bold">without</b> priority symptoms)
            </p>
          ),
          recResponse: 94,
          priority: 1,
        },
        {
          code: "19A02",
          text: (
            <p>
              <b className="font-bold">Chest pain/discomfort</b> &lt; 35 (
              <b className="font-bold">without priority symptoms)</b>
            </p>
          ),
          recResponse: 95,
          priority: 2,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "19C00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 96,
          priority: 0,
        },
        {
          code: "19C01",
          text: (
            <p>
              <b className="font-bold">Firing</b> of{" "}
              <b className="font-bold">A.I.C.D.</b>
            </p>
          ),
          recResponse: 96,
          priority: 1,
        },
        {
          code: "19C02",
          text: (
            <p>
              <b className="font-bold">Abnormal</b> breathing
            </p>
          ),
          recResponse: 96,
          priority: 2,
        },
        {
          code: "19C03",
          text: (
            <p>
              <b className="font-bold">Chest pain/discomfort</b> &gt;=35
            </p>
          ),
          recResponse: 97,
          priority: 3,
        },
        {
          code: "19C04",
          text: (
            <p>
              <b className="font-bold">Cardiac</b> history
            </p>
          ),
          recResponse: 96,
          priority: 4,
        },
        {
          code: "19C05",
          text: <p className="font-bold">Cocaine</p>,
          recResponse: 51,
          priority: 5,
        },
        {
          code: "19C06",
          text: (
            <p>
              <b className="font-bold">Heart rate</b> &lt;{" "}
              <b className="font-bold">50</b> bpm or &gt;={" "}
              <b className="font-bold">130</b> bpm (
              <b className="font-bold">without</b> priority symptoms)
            </p>
          ),
          recResponse: 96,
          priority: 6,
        },
        {
          code: "19C07",
          text: (
            <p>
              <b className="font-bold">Unknown</b> status/
              <b className="font-bold">Other</b> codes{" "}
              <b className="font-bold">not</b> applicable
            </p>
          ),
          recResponse: 96,
          priority: 7,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "19D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 98,
          priority: 0,
        },
        {
          code: "19D01",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 96,
          priority: 1,
        },
        {
          code: "19D02",
          text: (
            <p className="font-bold">DIFFICULTY SPEAKING BETWEEN BREATHS</p>
          ),
          recResponse: 96,
          priority: 2,
        },
        {
          code: "19D03",
          text: <p className="font-bold">CHANGING COLOR</p>,
          recResponse: 96,
          priority: 3,
        },
        {
          code: "19D04",
          text: (
            <p>
              <b className="font-bold">Clammy</b> or{" "}
              <b className="font-bold">cold sweats</b>
            </p>
          ),
          recResponse: 96,
          priority: 3,
        },
        {
          code: "19D05",
          text: (
            <p>
              Just <b className="font-bold">resuscitated</b> and/or{" "}
              <b className="font-bold">defibrillated</b>{" "}
              <span className="text-sm">(external)</span>
            </p>
          ),
          recResponse: 98,
          priority: 4,
        },
      ],
    },
  ],
  pdis: {
    instructions: [],
    dls: [],
  },
};
