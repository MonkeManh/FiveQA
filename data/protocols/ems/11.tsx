import { IEMSProtocol } from "@/models/interfaces";

export const CHOKING: IEMSProtocol = {
  protocol: 11,
  name: "Choking",
  shortName: "Choking",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "D" },
    { name: "Police", priority: "E" },
  ],
  defaultPriority: "D",
  defaultCode: "11D00",
  defaultPlan: 53,
  preSend: true,
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "11A01",
          text: (
            <p>
              <b className="font-bold">Not</b> choking{" "}
              <b className="font-bold">now</b> (can{" "}
              <b className="font-bold">talk</b> or{" "}
              <b className="font-bold">cry</b>, is{" "}
              <b className="font-bold">alert</b> and{" "}
              <b className="font-bold">breathing normally</b>)
            </p>
          ),
          recResponse: 53,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Candy/Sweets/Gum</p>,
              recResponse: 53,
              priority: 3,
            },
            {
              suffix: "F",
              text: <p>Food</p>,
              recResponse: 53,
              priority: 2,
            },
            {
              suffix: "M",
              text: <p>Milk/Liquid (non-toxic)</p>,
              recResponse: 53,
              priority: 4,
            },
            {
              suffix: "O",
              text: <p>Object/Toy</p>,
              recResponse: 53,
              priority: 1,
            },
            {
              suffix: "U",
              text: <p>Unknown</p>,
              recResponse: 53,
              priority: 5,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "11D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 54,
          priority: 0,
          suffixes: [
            {
              suffix: "C",
              text: <p>Candy/Sweets/Gum</p>,
              recResponse: 54,
              priority: 3,
            },
            {
              suffix: "F",
              text: <p>Food</p>,
              recResponse: 54,
              priority: 2,
            },
            {
              suffix: "M",
              text: <p>Milk/Liquid (non-toxic)</p>,
              recResponse: 54,
              priority: 4,
            },
            {
              suffix: "O",
              text: <p>Object/Toy</p>,
              recResponse: 54,
              priority: 1,
            },
            {
              suffix: "U",
              text: <p>Unknown</p>,
              recResponse: 54,
              priority: 5,
            },
          ],
        },
        {
          code: "11D01",
          text: (
            <p>
              <b className="font-bold">Abnormal</b> breathing (
              <b className="font-bold">PARTIAL obstruction</b>)
            </p>
          ),
          recResponse: 54,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Candy/Sweets/Gum</p>,
              recResponse: 54,
              priority: 3,
            },
            {
              suffix: "F",
              text: <p>Food</p>,
              recResponse: 54,
              priority: 2,
            },
            {
              suffix: "M",
              text: <p>Milk/Liquid (non-toxic)</p>,
              recResponse: 54,
              priority: 4,
            },
            {
              suffix: "O",
              text: <p>Object/Toy</p>,
              recResponse: 54,
              priority: 1,
            },
            {
              suffix: "U",
              text: <p>Unknown</p>,
              recResponse: 54,
              priority: 5,
            },
          ],
        },
        {
          code: "11D02",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 55,
          priority: 2,
          suffixes: [
            {
              suffix: "C",
              text: <p>Candy/Sweets/Gum</p>,
              recResponse: 55,
              priority: 3,
            },
            {
              suffix: "F",
              text: <p>Food</p>,
              recResponse: 55,
              priority: 2,
            },
            {
              suffix: "M",
              text: <p>Milk/Liquid (non-toxic)</p>,
              recResponse: 55,
              priority: 4,
            },
            {
              suffix: "O",
              text: <p>Object/Toy</p>,
              recResponse: 55,
              priority: 1,
            },
            {
              suffix: "U",
              text: <p>Unknown</p>,
              recResponse: 55,
              priority: 5,
            },
          ],
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "11E00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 55,
          priority: 0,
          suffixes: [
            {
              suffix: "C",
              text: <p>Candy/Sweets/Gum</p>,
              recResponse: 55,
              priority: 3,
            },
            {
              suffix: "F",
              text: <p>Food</p>,
              recResponse: 55,
              priority: 2,
            },
            {
              suffix: "M",
              text: <p>Milk/Liquid (non-toxic)</p>,
              recResponse: 55,
              priority: 4,
            },
            {
              suffix: "O",
              text: <p>Object/Toy</p>,
              recResponse: 55,
              priority: 1,
            },
            {
              suffix: "U",
              text: <p>Unknown</p>,
              recResponse: 55,
              priority: 5,
            },
          ],
        },
        {
          code: "11E01",
          text: (
            <p className="font-bold">
              COMPLETE obstruction/NOT BREATHING/INEFFECTIVE BREATHING
            </p>
          ),
          recResponse: 56,
          notBreathing: true,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: <p>Candy/Sweets/Gum</p>,
              recResponse: 56,
              priority: 3,
            },
            {
              suffix: "F",
              text: <p>Food</p>,
              recResponse: 56,
              priority: 2,
            },
            {
              suffix: "M",
              text: <p>Milk/Liquid (non-toxic)</p>,
              recResponse: 56,
              priority: 4,
            },
            {
              suffix: "O",
              text: <p>Object/Toy</p>,
              recResponse: 56,
              priority: 1,
            },
            {
              suffix: "U",
              text: <p>Unknown</p>,
              recResponse: 56,
              priority: 5,
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
