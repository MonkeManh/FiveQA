import { IEMSProtocol } from "@/models/interfaces";

export const BREATHING_PROB: IEMSProtocol = {
  protocol: 6,
  name: "Breathing Problems",
  shortName: "Breathing Prob",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: true },
    { name: "Police", priority: "E" },
  ],
  defaultPriority: "C",
  defaultCode: "06C01",
  defaultPlan: 22,
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "C",
      codes: [
        {
          code: "06C01",
          text: (
            <p>
              <b className="font-bold">Abnormal</b> breathing
            </p>
          ),
          recResponse: 22,
          priority: 2,
          suffixes: [
            {
              suffix: "A",
              text: <p>Asthma</p>,
              recResponse: 22,
              priority: 0,
            },
            {
              suffix: "E",
              text: <p><b className="font-bold">COPD</b> (Emphysema/Chronic bronchitis)</p>,
              recResponse: 22,
              priority: 0,
            },
            {
              suffix: "O",
              text: <p>Other lung problems</p>,
              recResponse: 22,
              priority: 0,
            },
          ],
        },
        {
          code: "06C02",
          text: (
            <p>
              <b className="font-bold">Tracheostomy</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">no</b> obvious distress)
              </span>
            </p>
          ),
          recResponse: 23,
          priority: 1,
          suffixes: [
            {
              suffix: "A",
              text: <p>Asthma</p>,
              recResponse: 23,
              priority: 0,
            },
            {
              suffix: "E",
              text: <p><b className="font-bold">COPD</b> (Emphysema/Chronic bronchitis)</p>,
              recResponse: 23,
              priority: 0,
            },
            {
              suffix: "O",
              text: <p>Other lung problems</p>,
              recResponse: 23,
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
          code: "06D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 24,
          priority: 0,
          suffixes: [
            {
              suffix: "A",
              text: <p>Asthma</p>,
              recResponse: 24,
              priority: 0,
            },
            {
              suffix: "E",
              text: <p><b className="font-bold">COPD</b> (Emphysema/Chronic bronchitis)</p>,
              recResponse: 24,
              priority: 0,
            },
            {
              suffix: "O",
              text: <p>Other lung problems</p>,
              recResponse: 24,
              priority: 0,
            },
          ],
        },
        {
          code: "06D01",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 22,
          priority: 1,
          suffixes: [
            {
              suffix: "A",
              text: <p>Asthma</p>,
              recResponse: 22,
              priority: 0,
            },
            {
              suffix: "E",
              text: <p><b className="font-bold">COPD</b> (Emphysema/Chronic bronchitis)</p>,
              recResponse: 22,
              priority: 0,
            },
            {
              suffix: "O",
              text: <p>Other lung problems</p>,
              recResponse: 22,
              priority: 0,
            },
          ],
        },
        {
          code: "06D02",
          text: (
            <p className="font-bold">DIFFICULTY SPEAKING BETWEEN BREATHS</p>
          ),
          recResponse: 22,
          priority: 2,
          suffixes: [
            {
              suffix: "A",
              text: <p>Asthma</p>,
              recResponse: 22,
              priority: 0,
            },
            {
              suffix: "E",
              text: <p><b className="font-bold">COPD</b> (Emphysema/Chronic bronchitis)</p>,
              recResponse: 22,
              priority: 0,
            },
            {
              suffix: "O",
              text: <p>Other lung problems</p>,
              recResponse: 22,
              priority: 0,
            },
          ],
        },
        {
          code: "06D03",
          text: <p className="font-bold">CHANGING COLOR</p>,
          recResponse: 22,
          priority: 3,
          suffixes: [
            {
              suffix: "A",
              text: <p>Asthma</p>,
              recResponse: 22,
              priority: 0,
            },
            {
              suffix: "E",
              text: <p><b className="font-bold">COPD</b> (Emphysema/Chronic bronchitis)</p>,
              recResponse: 22,
              priority: 0,
            },
            {
              suffix: "O",
              text: <p>Other lung problems</p>,
              recResponse: 22,
              priority: 0,
            },
          ],
        },
        {
          code: "06D04",
          text: (
            <p>
              <b className="font-bold">Clammy</b> or{" "}
              <b className="font-bold">cold sweats</b>
            </p>
          ),
          recResponse: 22,
          priority: 4,
          suffixes: [
            {
              suffix: "A",
              text: <p>Asthma</p>,
              recResponse: 22,
              priority: 0,
            },
            {
              suffix: "E",
              text: <p><b className="font-bold">COPD</b> (Emphysema/Chronic bronchitis)</p>,
              recResponse: 22,
              priority: 0,
            },
            {
              suffix: "O",
              text: <p>Other lung problems</p>,
              recResponse: 22,
              priority: 0,
            },
          ],
        },
        {
          code: "06D05",
          text: (
            <p>
              <b className="font-bold">Tracheostomy</b>{" "}
              <span>
                (<b className="font-bold">obvious</b> distress)
              </span>
            </p>
          ),
          recResponse: 22,
          priority: 5,
          suffixes: [
            {
              suffix: "A",
              text: <p>Asthma</p>,
              recResponse: 22,
              priority: 0,
            },
            {
              suffix: "E",
              text: <p><b className="font-bold">COPD</b> (Emphysema/Chronic bronchitis)</p>,
              recResponse: 22,
              priority: 0,
            },
            {
              suffix: "O",
              text: <p>Other lung problems</p>,
              recResponse: 22,
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
          code: "06E00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 25,
          priority: 0,
          suffixes: [
            {
              suffix: "A",
              text: <p>Asthma</p>,
              recResponse: 25,
              priority: 0,
            },
            {
              suffix: "E",
              text: <p><b className="font-bold">COPD</b> (Emphysema/Chronic bronchitis)</p>,
              recResponse: 25,
              priority: 0,
            },
            {
              suffix: "O",
              text: <p>Other lung problems</p>,
              recResponse: 25,
              priority: 0,
            },
          ],
        },
        {
          code: "06E01",
          text: <p className="font-bold">INEFFECTIVE BREATHING</p>,
          notBreathing: true,
          recResponse: 25,
          priority: 1,
          suffixes: [
            {
              suffix: "A",
              text: <p>Asthma</p>,
              recResponse: 25,
              priority: 0,
            },
            {
              suffix: "E",
              text: <p><b className="font-bold">COPD</b> (Emphysema/Chronic bronchitis)</p>,
              recResponse: 25,
              priority: 0,
            },
            {
              suffix: "O",
              text: <p>Other lung problems</p>,
              recResponse: 25,
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
