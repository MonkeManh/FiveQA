import { IEMSProtocol } from "@/models/interfaces";

export const TRAUMATIC_INJS: IEMSProtocol = {
  protocol: 30,
  name: "Traumatic Injuries (Specific)",
  shortName: "Traumatic Injuries",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "C" },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "B",
  defaultCode: "30B03",
  defaultPlan: 190,
  preSend: true,
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "30A01",
          text: (
            <p>
              <b className="font-bold">Marked</b> (
              <b className="font-bold">*</b>){" "}
              <b className="font-bold">NOT DANGEROUS</b> body area with{" "}
              <b className="font-bold">deformity</b>
            </p>
          ),
          recResponse: 190,
          priority: 2,
        },
        {
          code: "30A02",
          text: (
            <p>
              <b className="font-bold">NOT DANGEROUS</b> body area
            </p>
          ),
          recResponse: 190,
          priority: 3,
        },
        {
          code: "30A03",
          text: (
            <p>
              <b className="font-bold">NON-RECENT</b>{" "}
              <span className="text-sm">(&gt;=6hrs)</span> injuries{" "}
              <span className="text-sm">
                (<b className="font-bold">without</b> priority symptoms)
              </span>
            </p>
          ),
          recResponse: 191,
          priority: 1,
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "30B00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 190,
          priority: 0,
        },
        {
          code: "30B01",
          text: (
            <p>
              <b className="font-bold">POSSIBLY DANGEROUS</b> body area
            </p>
          ),
          recResponse: 190,
          priority: 1,
        },
        {
          code: "30B02",
          text: (
            <p>
              <b className="font-bold">SERIOUS</b> bleeding
            </p>
          ),
          recResponse: 190,
          priority: 2,
        },
        {
          code: "30B03",
          text: (
            <p>
              <b className="font-bold">Unknown</b> body area{" "}
              <span className="text-sm">(remote patient location)</span>
            </p>
          ),
          recResponse: 190,
          priority: 3,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "30D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 192,
          priority: 0,
        },
        {
          code: "30D01",
          text: <p className="font-bold">Arrest</p>,
          recResponse: 158,
          notBreathing: true,
          priority: 1,
        },
        {
          code: "30D02",
          text: <p className="font-bold">Arrest</p>,
          recResponse: 193,
          notConscious: true,
          priority: 2,
        },
        {
          code: "30D03",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 192,
          priority: 3,
        },
        {
          code: "30D04",
          text: (
            <p>
              <b className="font-bold">Chest/Neck/Head</b> injury{" "}
              <span className="text-sm">
                (with <b className="font-bold">difficulty</b> breathing)
              </span>
            </p>
          ),
          recResponse: 192,
          priority: 4,
        },
        {
          code: "30D05",
          text: (
            <p>
              <b className="font-bold">HIGH VELOCITY</b> impact/
              <b className="font-bold">MASS</b> injury
            </p>
          ),
          recResponse: 192,
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
