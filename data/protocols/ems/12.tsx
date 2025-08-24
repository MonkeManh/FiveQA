import { IEMSProtocol } from "@/models/interfaces";

export const SEIZURES: IEMSProtocol = {
  protocol: 12,
  name: "Convulsions / Seizures",
  shortName: "Seizures",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "C" },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "C",
  defaultCode: "12C07",
  defaultPlan: 57,
  preSend: true,
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "12A01",
          text: (
            <p>
              <b className="font-bold">Not seizing now</b> and{" "}
              <b className="font-bold">effective</b> breathing{" "}
              <b className="font-bold">verified</b> (
              <b className="font-bold">known</b> seizure disorder)
            </p>
          ),
          recResponse: 57,
          priority: 1,
          suffixes: [
            {
              suffix: "E",
              text: <p>Epileptic or Previous seizure diagnosis</p>,
              recResponse: 57,
              priority: 1,
            },
          ],
        },
        {
          code: "12A02",
          text: (
            <p>
              <b className="font-bold">Not seizing now</b> any{" "}
              <b className="font-bold">effective</b> breathing{" "}
              <b className="font-bold">verified</b> (seizure disorder{" "}
              <b className="font-bold">unknown</b>)
            </p>
          ),
          recResponse: 57,
          priority: 2,
        },
        {
          code: "12A03",
          text: (
            <p>
              <b className="font-bold">Not seizing now</b> and{" "}
              <b className="font-bold">effective</b> breathing{" "}
              <b className="font-bold">verified</b> (&lt;= 6,{" "}
              <b className="font-bold">confirmed no</b> seizure disorder)
            </p>
          ),
          recResponse: 57,
          priority: 3,
        },
        {
          code: "12A04",
          text: (
            <p>
              <b className="font-bold">FOCAL/ABSENCE</b> seizure{" "}
              <span className="text-sm">(alert)</span>
            </p>
          ),
          recResponse: 57,
          priority: 4,
          suffixes: [
            {
              suffix: "E",
              text: <p>Epileptic or Previous seizure diagnosis</p>,
              recResponse: 57,
              priority: 1,
            },
          ],
        },
        {
          code: "12A05",
          text: (
            <p>
              <b className="font-bold">Impending</b> seizure{" "}
              <span className="text-sm">(aura)</span>
            </p>
          ),
          recResponse: 57,
          priority: 5,
          suffixes: [
            {
              suffix: "E",
              text: <p>Epileptic or Previous seizure diagnosis</p>,
              recResponse: 57,
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
          code: "12B00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 57,
          priority: 0,
          suffixes: [
            {
              suffix: "E",
              text: <p>Epileptic or Previous seizure diagnosis</p>,
              recResponse: 57,
              priority: 1,
            },
          ],
        },
        {
          code: "12B01",
          text: (
            <p>
              Effective breathing <b className="font-bold">not</b> verified &lt;
              35
            </p>
          ),
          recResponse: 57,
          priority: 1,
          suffixes: [
            {
              suffix: "E",
              text: <p>Epileptic or Previous seizure diagnosis</p>,
              recResponse: 57,
              priority: 1,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "12C00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 58,
          priority: 0,
          suffixes: [
            {
              suffix: "E",
              text: <p>Epileptic or Previous seizure diagnosis</p>,
              recResponse: 58,
              priority: 1,
            },
          ],
        },
        {
          code: "12C01",
          text: (
            <p>
              <b className="font-bold">FOCAL/ABSENCE</b> seizure{" "}
              <span className="text-sm">
                (<b className="font-bold">not</b> alert)
              </span>
            </p>
          ),
          recResponse: 58,
          priority: 1,
          suffixes: [
            {
              suffix: "E",
              text: <p>Epileptic or Previous seizure diagnosis</p>,
              recResponse: 58,
              priority: 1,
            },
          ],
        },
        {
          code: "12C02",
          text: <p className="font-bold">Pregnancy/POSTPARTUM eclampsia</p>,
          recResponse: 58,
          priority: 2,
          suffixes: [
            {
              suffix: "E",
              text: <p>Epileptic or Previous seizure diagnosis</p>,
              recResponse: 58,
              priority: 1,
            },
          ],
        },
        {
          code: "12C03",
          text: <p className="font-bold">Diabetic</p>,
          recResponse: 58,
          priority: 3,
          suffixes: [
            {
              suffix: "E",
              text: <p>Epileptic or Previous seizure diagnosis</p>,
              recResponse: 58,
              priority: 1,
            },
          ],
        },
        {
          code: "12C04",
          text: (
            <p>
              <b className="font-bold">Not seizing now</b> and{" "}
              <b className="font-bold">effective</b> breathing{" "}
              <b className="font-bold">verified</b>{" "}
              <span className="text-sm">
                (&gt; 6, <b className="font-bold">confirmed no</b> seizure
                disorder)
              </span>
            </p>
          ),
          recResponse: 57,
          priority: 4,
        },
        {
          code: "12C05",
          text: (
            <p>
              <b className="font-bold">History</b> of{" "}
              <b className="font-bold">STROKE</b> or{" "}
              <b className="font-bold">brain tumor</b>
            </p>
          ),
          recResponse: 57,
          priority: 5,
          suffixes: [
            {
              suffix: "E",
              text: <p>Epileptic or Previous seizure diagnosis</p>,
              recResponse: 57,
              priority: 1,
            },
          ],
        },
        {
          code: "12C06",
          text: (
            <p>
              <b className="font-bold">OVERDOSE/POISONING</b>{" "}
              <span className="text-sm">(ingestion)</span>
            </p>
          ),
          recResponse: 59,
          priority: 6,
          suffixes: [
            {
              suffix: "E",
              text: <p>Epileptic or Previous seizure diagnosis</p>,
              recResponse: 59,
              priority: 1,
            },
          ],
        },
        {
          code: "12C07",
          text: (
            <p>
              <b className="font-bold">ATYPICAL</b> seizure
            </p>
          ),
          recResponse: 58,
          priority: 7,
          suffixes: [
            {
              suffix: "E",
              text: <p>Epileptic or Previous seizure diagnosis</p>,
              recResponse: 58,
              priority: 1,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "12D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 60,
          priority: 0,
          suffixes: [
            {
              suffix: "E",
              text: <p>Epileptic or Previous seizure diagnosis</p>,
              recResponse: 60,
              priority: 1,
            },
          ],
        },
        {
          code: "12D01",
          text: (
            <p>
              <b className="font-bold">Not</b> breathing
            </p>
          ),
          recResponse: 61,
          notBreathing: true,
          priority: 1,
          suffixes: [
            {
              suffix: "E",
              text: <p>Epileptic or Previous seizure diagnosis</p>,
              recResponse: 61,
              priority: 1,
            },
          ],
        },
        {
          code: "12D02",
          text: (
            <p>
              <b className="font-bold">CONTINUOUS</b> or{" "}
              <b className="font-bold">MULTIPLE</b> seizures
            </p>
          ),
          recResponse: 58,
          priority: 2,
          suffixes: [
            {
              suffix: "E",
              text: <p>Epileptic or Previous seizure diagnosis</p>,
              recResponse: 58,
              priority: 1,
            },
          ],
        },
        {
          code: "12D03",
          text: <p className="font-bold">AGONAL/INEFFECTIVE BREATHING</p>,
          recResponse: 60,
          priority: 3,
          suffixes: [
            {
              suffix: "E",
              text: <p>Epileptic or Previous seizure diagnosis</p>,
              recResponse: 60,
              priority: 1,
            },
          ],
        },
        {
          code: "12D04",
          text: (
            <p>
              Effective breathing <b className="font-bold">not</b> verified &gt;=
              35
            </p>
          ),
          recResponse: 58,
          priority: 4,
          suffixes: [
            {
              suffix: "E",
              text: <p>Epileptic or Previous seizure diagnosis</p>,
              recResponse: 58,
              priority: 1,
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
