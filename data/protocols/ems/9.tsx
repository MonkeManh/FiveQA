import { IEMSProtocol } from "@/models/interfaces";

export const CARDIAC_ARREST: IEMSProtocol = {
  protocol: 9,
  name: "Cardiac or Respiratory Arrest / Death",
  shortName: "Cardiac Arrest",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "D" },
    { name: "Police", priority: true },
  ],
  defaultPriority: "E",
  defaultCode: "09E00",
  defaultPlan: 40,
  preSend: true,
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "09O01",
          text: (
            <p>
              <b className="font-bold">EXPECTED DEATH</b> unquestionable
            </p>
          ),
          recResponse: 48,
          priority: 1,
          suffixes: [
            {
              suffix: "x",
              text: <p>Terminal illness</p>,
              recResponse: 48,
              priority: 2,
            },
            {
              suffix: "y",
              text: <p className="font-bold">DNR (Do Not Resuscitate) Order</p>,
              recResponse: 48,
              priority: 1,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "09B00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 47,
          priority: 0,
        },
        {
          code: "09B01",
          text: (
            <p>
              <b className="font-bold">OBVIOUS DEATH</b> unquestionable
            </p>
          ),
          recResponse: 48,
          priority: 1,
          suffixes: [
            {
              suffix: "a",
              text: <p>Cold and stiff in a warm environment</p>,
              recResponse: 48,
              priority: 5,
            },
            {
              suffix: "b",
              text: <p>Decapitation</p>,
              recResponse: 48,
              priority: 1,
            },
            {
              suffix: "c",
              text: <p>Decomposition</p>,
              recResponse: 48,
              priority: 3,
            },
            {
              suffix: "d",
              text: <p>Incineration</p>,
              recResponse: 48,
              priority: 2,
            },
            {
              suffix: "e",
              text: (
                <p>
                  <b className="font-bold">NON-RECENT</b> death
                </p>
              ),
              recResponse: 48,
              priority: 4,
            },
            {
              suffix: "f",
              text: <p>Severe injuries obviously incompatible with life</p>,
              recResponse: 48,
              priority: 6,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "09D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 47,
          priority: 0,
        },
        {
          code: "09D01",
          text: (
            <p>
              <b className="font-bold">INEFFECTIVE BREATHING</b>
            </p>
          ),
          recResponse: 47,
          priority: 1,
        },
        {
          code: "09D02",
          text: (
            <p>
              <b className="font-bold">OBVIOUS</b> or{" "}
              <b className="font-bold">EXPECTED DEATH questionable</b>
            </p>
          ),
          recResponse: 47,
          priority: 2,
          suffixes: [
            {
              suffix: "a",
              text: <p>Cold and stiff in a warm environment</p>,
              recResponse: 47,
              priority: 5,
            },
            {
              suffix: "b",
              text: <p>Decapitation</p>,
              recResponse: 47,
              priority: 1,
            },
            {
              suffix: "c",
              text: <p>Decomposition</p>,
              recResponse: 47,
              priority: 3,
            },
            {
              suffix: "d",
              text: <p>Incineration</p>,
              recResponse: 47,
              priority: 2,
            },
            {
              suffix: "e",
              text: (
                <p>
                  <b className="font-bold">NON-RECENT</b> death
                </p>
              ),
              recResponse: 47,
              priority: 4,
            },
            {
              suffix: "f",
              text: <p>Severe injuries obviously incompatible with life</p>,
              recResponse: 47,
              priority: 6,
            },
            {
              suffix: "x",
              text: <p>Terminal illness</p>,
              recResponse: 47,
              priority: 7,
            },
            {
              suffix: "y",
              text: <p className="font-bold">DNR (Do Not Resuscitate) Order</p>,
              recResponse: 47,
              priority: 8,
            },
          ],
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "09E00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 47,
          priority: 0,
        },
        {
          code: "09E01",
          text: (
            <p>
              Suspected <b className="font-bold">Workable Arrest</b>,{" "}
              <b className="font-bold">Not breathing</b> at all
            </p>
          ),
          recResponse: 47,
          notBreathing: true,
          priority: 1,
        },
        {
          code: "09E02",
          text: (
            <p>
              Suspected <b className="font-bold">Workable Arrest</b>,{" "}
              <b className="font-bold">UNCERTAIN BREATHING</b>
            </p>
          ),
          uncertainBreathing: true,
          recResponse: 47,
          priority: 5,
        },
        {
          code: "09E03",
          text: (
            <p>
              Suspected <b className="font-bold">Workable Arrest</b>,{" "}
              <b className="font-bold">Hanging</b>
            </p>
          ),
          recResponse: 47,
          priority: 2,
        },
        {
          code: "09E04",
          text: (
            <p>
              Suspected <b className="font-bold">Workable Arrest</b>,{" "}
              <b className="font-bold">Strangulation</b>
            </p>
          ),
          recResponse: 47,
          priority: 3,
        },
        {
          code: "09E05",
          text: (
            <p>
              Suspected <b className="font-bold">Workable Arrest</b>,{" "}
              <b className="font-bold">Suffocation</b>
            </p>
          ),
          recResponse: 47,
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
