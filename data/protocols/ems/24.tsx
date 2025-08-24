import { IEMSProtocol } from "@/models/interfaces";

export const PREGNANCY_CHILD_BIRTH: IEMSProtocol = {
  protocol: 24,
  name: "Pregnancy / Childbirth / Miscarriage",
  shortName: "Pregnancy",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "C" },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "B",
  defaultCode: "24B02",
  defaultPlan: 139,
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "24O01",
          text: (
            <p>
              <b className="font-bold">Waters</b> broken{" "}
              <span className="text-sm">
                (<b className="font-bold">no</b> contractions{" "}
                <b className="font-bold">or</b> presenting parts)
              </span>
            </p>
          ),
          recResponse: 139,
          priority: 1,
          suffixes: [
            {
              suffix: "M",
              text: <p>Multiple birth</p>,
              recResponse: 139,
              priority: 0,
            },
          ],
        },
      ],
    },
    {
      priority: "A",
      codes: [
        {
          code: "24A00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 140,
          priority: 0,
          suffixes: [
            {
              suffix: "M",
              text: <p>Multiple birth</p>,
              recResponse: 140,
              priority: 0,
            },
          ],
        },
        {
          code: "24A01",
          text: (
            <p>
              <b className="font-bold">1st TRIMESTER</b> hemorrhage/
              <b className="font-bold">MISCARRIAGE</b>/
              <b className="font-bold">THREATENED MISCARRIAGE</b>
            </p>
          ),
          recResponse: 140,
          priority: 1,
          suffixes: [
            {
              suffix: "M",
              text: <p>Multiple birth</p>,
              recResponse: 140,
              priority: 0,
            },
          ],
        },
        {
          code: "24A02",
          text: (
            <p>
              Confirmed <b className="font-bold">STILLBIRTH</b> situation{" "}
              <span className="text-sm">
                (&gt;=6 months/24 weeks and <b className="font-bold">no</b>{" "}
                complications)
              </span>
            </p>
          ),
          recResponse: 140,
          priority: 2,
          suffixes: [
            {
              suffix: "M",
              text: <p>Multiple birth</p>,
              recResponse: 140,
              priority: 0,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "24B00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 140,
          priority: 0,
          suffixes: [
            {
              suffix: "M",
              text: <p>Multiple birth</p>,
              recResponse: 140,
              priority: 0,
            },
          ],
        },
        {
          code: "24B01",
          text: (
            <p>
              <b className="font-bold">Labor</b>{" "}
              <span className="text-sm">
                (delivery <b className="font-bold">not imminent</b> &gt;=6
                months/24 weeks
              </span>
              )
            </p>
          ),
          recResponse: 140,
          priority: 1,
          suffixes: [
            {
              suffix: "M",
              text: <p>Multiple birth</p>,
              recResponse: 140,
              priority: 0,
            },
          ],
        },
        {
          code: "24B02",
          text: (
            <p>
              <b className="font-bold">Unknown</b> status/
              <b className="font-bold">Other</b> codes{" "}
              <b className="font-bold">not</b> applicable
            </p>
          ),
          recResponse: 140,
          priority: 2,
          suffixes: [
            {
              suffix: "M",
              text: <p>Multiple birth</p>,
              recResponse: 140,
              priority: 0,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "24C00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 141,
          priority: 0,
          suffixes: [
            {
              suffix: "M",
              text: <p>Multiple birth</p>,
              recResponse: 141,
              priority: 0,
            },
          ],
        },
        {
          code: "24C01",
          text: (
            <p>
              <b className="font-bold">2nd TRIMESTER</b> hemorrhage/
              <b className="font-bold">MISCARRIAGE</b>/
              <b className="font-bold">THREATENED MISCARRIAGE</b>
            </p>
          ),
          recResponse: 141,
          priority: 1,
          suffixes: [
            {
              suffix: "M",
              text: <p>Multiple birth</p>,
              recResponse: 141,
              priority: 0,
            },
          ],
        },
        {
          code: "24C02",
          text: (
            <p>
              <b className="font-bold">1st TRIMESTER SERIOUS</b> hemorrhage
            </p>
          ),
          recResponse: 140,
          priority: 2,
          suffixes: [
            {
              suffix: "M",
              text: <p>Multiple birth</p>,
              recResponse: 140,
              priority: 0,
            },
          ],
        },
        {
          code: "24C03",
          text: (
            <p>
              <b className="font-bold">Abdominal pain/cramping</b>{" "}
              <span className="text-sm">
                (&lt;6 months/24 weeks <b className="font-bold">and</b> no
                fetus, tissue, or blood)
              </span>
            </p>
          ),
          recResponse: 140,
          priority: 3,
          suffixes: [
            {
              suffix: "M",
              text: <p>Multiple birth</p>,
              recResponse: 140,
              priority: 0,
            },
          ],
        },
        {
          code: "24C04",
          text: (
            <p>
              <b className="font-bold">Baby born</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">no</b> complications)
              </span>
            </p>
          ),
          recResponse: 141,
          priority: 4,
          suffixes: [
            {
              suffix: "M",
              text: <p>Multiple birth</p>,
              recResponse: 141,
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
          code: "24D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 141,
          priority: 0,
          suffixes: [
            {
              suffix: "M",
              text: <p>Multiple birth</p>,
              recResponse: 141,
              priority: 0,
            },
          ],
        },
        {
          code: "24D01",
          text: (
            <p>
              <b className="font-bold">BREECH</b> or{" "}
              <b className="font-bold">CORD</b>
            </p>
          ),
          recResponse: 141,
          priority: 1,
          suffixes: [
            {
              suffix: "M",
              text: <p>Multiple birth</p>,
              recResponse: 141,
              priority: 0,
            },
          ],
        },
        {
          code: "24D02",
          text: <p className="font-bold">Head visible/out</p>,
          recResponse: 141,
          priority: 2,
          suffixes: [
            {
              suffix: "M",
              text: <p>Multiple birth</p>,
              recResponse: 141,
              priority: 0,
            },
          ],
        },
        {
          code: "24D03",
          text: (
            <p>
              <b className="font-bold">IMMINENT</b> delivery{" "}
              <span className="text-sm">(&gt;=6 months/24 weeks)</span>
            </p>
          ),
          recResponse: 141,
          priority: 3,
          suffixes: [
            {
              suffix: "M",
              text: <p>Multiple birth</p>,
              recResponse: 141,
              priority: 0,
            },
          ],
        },
        {
          code: "24D04",
          text: (
            <p>
              <b className="font-bold">3rd TRIMESTER</b> hemorrhage
            </p>
          ),
          recResponse: 141,
          priority: 4,
          suffixes: [
            {
              suffix: "M",
              text: <p>Multiple birth</p>,
              recResponse: 141,
              priority: 0,
            },
          ],
        },
        {
          code: "24D05",
          text: (
            <p>
              <b className="font-bold">HIGH RISK</b> complications
            </p>
          ),
          recResponse: 141,
          priority: 5,
          suffixes: [
            {
              suffix: "M",
              text: <p>Multiple birth</p>,
              recResponse: 141,
              priority: 0,
            },
          ],
        },
        {
          code: "24D06",
          text: (
            <p>
              <b className="font-bold">Baby born</b>{" "}
              <span className="text-sm">
                (complications with <b className="font-bold">baby</b>)
              </span>
            </p>
          ),
          recResponse: 141,
          priority: 6,
          suffixes: [
            {
              suffix: "M",
              text: <p>Multiple birth</p>,
              recResponse: 141,
              priority: 0,
            },
          ],
        },
        {
          code: "24D07",
          text: (
            <p>
              <b className="font-bold">Baby born</b>{" "}
              <span className="text-sm">
                (complications with <b className="font-bold">mother</b>)
              </span>
            </p>
          ),
          recResponse: 141,
          priority: 7,
          suffixes: [
            {
              suffix: "M",
              text: <p>Multiple birth</p>,
              recResponse: 141,
              priority: 0,
            },
          ],
        },
        {
          code: "24D08",
          text: (
            <p>
              Possible <b className="font-bold">Miscarriage</b> with{" "}
              <b className="font-bold">SIGNS OF LIFE</b>
            </p>
          ),
          recResponse: 141,
          priority: 8,
          suffixes: [
            {
              suffix: "M",
              text: <p>Multiple birth</p>,
              recResponse: 141,
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
