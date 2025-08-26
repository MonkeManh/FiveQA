import { IEMSProtocol } from "@/models/interfaces";

export const ASSAULT: IEMSProtocol = {
  protocol: 4,
  name: "Assault / Sexual Assault / Stun Gun",
  shortName: "Assault",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "C" },
    { name: "Police", priority: true },
  ],
  defaultPriority: "B",
  defaultCode: "04B03",
  defaultPlan: 14,
  information: <></>,
  availableTracks: [
    { id: 1, name: "Assault" },
    { id: 2, name: "Sexual Assault" },
    { id: 3, name: "Stun Gun" },
  ],
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "04A01",
          text: (
            <p>
              <b className="font-bold">Marked</b> (
              <b className="font-bold">*</b>){" "}
              <b className="font-bold">NOT DANGEROUS</b> body area with{" "}
              <b className="font-bold">deformity</b>
            </p>
          ),
          recResponse: 14,
          priority: 2,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 14,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 14,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 14,
              priority: 0,
            },
          ],
        },
        {
          code: "04A02",
          text: (
            <p>
              <b className="font-bold">NOT DANGEROUS</b> body area
            </p>
          ),
          priority: 3,
          recResponse: 14,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 14,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 14,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 14,
              priority: 0,
            },
          ],
        },
        {
          code: "04A03",
          text: (
            <p>
              <b className="font-bold">NON-RECENT</b> (&gt;=6hrs) injuries{" "}
              <span className="text-sm">
                (<b className="font-bold">without</b> priority symptoms)
              </span>
            </p>
          ),
          recResponse: 15,
          priority: 1,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 15,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 15,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 15,
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
          code: "04B00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 14,
          priority: 0,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 14,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 14,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 14,
              priority: 0,
            },
          ],
        },
        {
          code: "04B01",
          text: (
            <p>
              <b className="font-bold">POSSIBLY DANGEROUS</b> body area
            </p>
          ),
          recResponse: 14,
          priority: 2,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 14,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 14,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 14,
              priority: 0,
            },
          ],
        },
        {
          code: "04B02",
          text: (
            <p>
              <b className="font-bold">SERIOUS</b> hemorrhage
            </p>
          ),
          recResponse: 14,
          priority: 1,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 14,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 14,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 14,
              priority: 0,
            },
          ],
        },
        {
          code: "04B03",
          text: (
            <p>
              <b className="font-bold">Unknown</b> status/
              <b className="font-bold">Other</b> codes{" "}
              <b className="font-bold">not</b> applicable
            </p>
          ),
          recResponse: 14,
          priority: 3,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 14,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 14,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 14,
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
          code: "04D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 16,
          priority: 0,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 16,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 16,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 16,
              priority: 0,
            },
          ],
        },
        {
          code: "04D01",
          text: <p className="font-bold">Arrest</p>,
          recResponse: 17,
          notBreathing: true,
          priority: 1,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 17,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 17,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 17,
              priority: 0,
            },
          ],
        },
        {
          code: "04D02",
          text: <p className="font-bold">Unconscious</p>,
          recResponse: 18,
          notConscious: true,
          priority: 2,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 18,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 18,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 18,
              priority: 0,
            },
          ],
        },
        {
          code: "04D03",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 16,
          priority: 3,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 16,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 16,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 16,
              priority: 0,
            },
          ],
        },
        {
          code: "04D04",
          text: (
            <p>
              <b className="font-bold">Chest/Neck/Head</b> injury{" "}
              <span className="text-sm">
                (with <b className="font-bold">difficulty</b> breathing)
              </span>
            </p>
          ),
          recResponse: 16,
          priority: 4,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 16,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 16,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 16,
              priority: 0,
            },
          ],
        },
        {
          code: "04D05",
          text: (
            <p>
              <b className="font-bold">Multiple</b> victims
            </p>
          ),
          recResponse: 19,
          multPatient: true,
          priority: 5,
          suffixes: [
            {
              suffix: "A",
              text: <p>Assault</p>,
              recResponse: 19,
              priority: 0,
            },
            {
              suffix: "S",
              text: <p>Sexual assault</p>,
              recResponse: 19,
              priority: 0,
            },
            {
              suffix: "T",
              text: <p>Stun gun</p>,
              recResponse: 19,
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
