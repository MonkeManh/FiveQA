import { IEMSProtocol } from "@/models/interfaces";

export const ELECTROCUTION_LIGHTNING: IEMSProtocol = {
  protocol: 15,
  name: "Electrocution / Lightning",
  shortName: "Electrocution/Lightning",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: true },
    { name: "Police", priority: "E" },
  ],
  defaultPriority: "D",
  defaultCode: "15D09",
  defaultPlan: 71,
  information: <></>,
  availableTracks: [
    { id: 1, name: "Electrocution" },
    { id: 2, name: "Lightning" }
  ],
  questions: [],
  determinants: [
    {
      priority: "C",
      codes: [
        {
          code: "15C01",
          text: (
            <p>
              Alert <b className="font-bold">and</b> breathing normally
            </p>
          ),
          recResponse: 71,
          priority: 1,
          suffixes: [
            {
              suffix: "E",
              text: <p>Electrocution</p>,
              recResponse: 71,
              priority: 0,
            },
            {
              suffix: "L",
              text: <p>Lightning</p>,
              recResponse: 71,
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
          code: "15D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 72,
          priority: 0,
          suffixes: [
            {
              suffix: "E",
              text: <p>Electrocution</p>,
              recResponse: 72,
              priority: 0,
            },
            {
              suffix: "L",
              text: <p>Lightning</p>,
              recResponse: 72,
              priority: 0,
            },
          ],
        },
        {
          code: "15D01",
          text: (
            <p>
              <b className="font-bold">Multiple</b> victims
            </p>
          ),
          recResponse: 73,
          multPatient: true,
          priority: 1,
          suffixes: [
            {
              suffix: "E",
              text: <p>Electrocution</p>,
              recResponse: 73,
              priority: 0,
            },
            {
              suffix: "L",
              text: <p>Lightning</p>,
              recResponse: 73,
              priority: 0,
            },
          ],
        },
        {
          code: "15D02",
          text: <p className="font-bold">Unconscious</p>,
          recResponse: 72,
          notConscious: true,
          priority: 2,
          suffixes: [
            {
              suffix: "E",
              text: <p>Electrocution</p>,
              recResponse: 72,
              priority: 0,
            },
            {
              suffix: "L",
              text: <p>Lightning</p>,
              recResponse: 72,
              priority: 0,
            },
          ],
        },
        {
          code: "15D03",
          text: <p className="font-bold">Not disconnected from power</p>,
          recResponse: 71,
          priority: 3,
          suffixes: [
            {
              suffix: "E",
              text: <p>Electrocution</p>,
              recResponse: 71,
              priority: 0,
            },
          ],
        },
        {
          code: "15D04",
          text: <p className="font-bold">Power not off or hazard present</p>,
          recResponse: 71,
          priority: 4,
          suffixes: [
            {
              suffix: "E",
              text: <p>Electrocution</p>,
              recResponse: 71,
              priority: 0,
            },
            {
              suffix: "L",
              text: <p>Lightning</p>,
              recResponse: 71,
              priority: 0,
            },
          ],
        },
        {
          code: "15D05",
          text: (
            <p>
              <b className="font-bold">EXTREME FALL</b>{" "}
              <span className="text-sm">(&gt;=35ft/10m)</span>
            </p>
          ),
          recResponse: 74,
          priority: 5,
          suffixes: [
            {
              suffix: "E",
              text: <p>Electrocution</p>,
              recResponse: 74,
              priority: 0,
            },
            {
              suffix: "L",
              text: <p>Lightning</p>,
              recResponse: 74,
              priority: 0,
            },
          ],
        },
        {
          code: "15D06",
          text: <p className="font-bold">LONG FALL</p>,
          recResponse: 74,
          priority: 6,
          suffixes: [
            {
              suffix: "E",
              text: <p>Electrocution</p>,
              recResponse: 74,
              priority: 0,
            },
            {
              suffix: "L",
              text: <p>Lightning</p>,
              recResponse: 74,
              priority: 0,
            },
          ],
        },
        {
          code: "15D07",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 71,
          priority: 7,
          suffixes: [
            {
              suffix: "E",
              text: <p>Electrocution</p>,
              recResponse: 71,
              priority: 0,
            },
            {
              suffix: "L",
              text: <p>Lightning</p>,
              recResponse: 71,
              priority: 0,
            },
          ],
        },
        {
          code: "15D08",
          text: (
            <p>
              <b className="font-bold">Abnormal Breathing</b>
            </p>
          ),
          recResponse: 71,
          priority: 8,
          suffixes: [
            {
              suffix: "E",
              text: <p>Electrocution</p>,
              recResponse: 71,
              priority: 0,
            },
            {
              suffix: "L",
              text: <p>Lightning</p>,
              recResponse: 71,
              priority: 0,
            },
          ],
        },
        {
          code: "15D09",
          text: (
            <p>
              <b className="font-bold">Unknown</b> status/
              <b className="font-bold">Other</b> codes{" "}
              <b className="font-bold">not</b> applicable
            </p>
          ),
          recResponse: 71,
          priority: 9,
          suffixes: [
            {
              suffix: "E",
              text: <p>Electrocution</p>,
              recResponse: 71,
              priority: 0,
            },
            {
              suffix: "L",
              text: <p>Lightning</p>,
              recResponse: 71,
              priority: 0,
            },
          ],
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "15E00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 75,
          priority: 0,
          suffixes: [
            {
              suffix: "E",
              text: <p>Electrocution</p>,
              recResponse: 75,
              priority: 0,
            },
            {
              suffix: "L",
              text: <p>Lightning</p>,
              recResponse: 75,
              priority: 0,
            },
          ],
        },
        {
          code: "15E01",
          text: (
            <p className="font-bold">NOT BREATHING/INEFFECTIVE BREATHING</p>
          ),
          notBreathing: true,
          recResponse: 75,
          priority: 1,
          suffixes: [
            {
              suffix: "E",
              text: <p>Electrocution</p>,
              recResponse: 75,
              priority: 0,
            },
            {
              suffix: "L",
              text: <p>Lightning</p>,
              recResponse: 75,
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
