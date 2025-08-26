import { IEMSProtocol } from "@/models/interfaces";

export const SHOT_STAB_TRAUMA: IEMSProtocol = {
  protocol: 27,
  name: "Stab / Gunshot / Penetrating Trauma",
  shortName: "Shot/Stab/Trauma",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "C" },
    { name: "Police", priority: true },
  ],
  defaultPriority: "B",
  defaultCode: "27B04",
  defaultPlan: 152,
  availableTracks: [
    { id: 1, name: "Stabbing" },
    { id: 2, name: "Gunshot wound" },
    { id: 3, name: "Penetrating wound (not IMPALED now)" },
    { id: 4, name: "IMPALED currently" }
  ],
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "27A01",
          text: (
            <p>
              <b className="font-bold">NON-RECENT</b>{" "}
              <span className="text-sm">(&gt;=6hrs)</span>{" "}
              <b className="font-bold">PERIPHERAL</b> wounds{" "}
              <span className="text-sm">
                (<b className="font-bold">without</b> priority symptoms)
              </span>
            </p>
          ),
          recResponse: 153,
          priority: 1,
          suffixes: [
            {
              suffix: "G",
              text: <p>Gunshot</p>,
              recResponse: 152,
              priority: 3,
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">IMPALED</b> currently
                </p>
              ),
              recResponse: 153,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Penetrating wound{" "}
                  <span className="text-sm">
                    (not <b className="font-bold">IMPALED</b> now)
                  </span>
                </p>
              ),
              recResponse: 153,
              priority: 3,
            },
            {
              suffix: "S",
              text: <p>Stab</p>,
              recResponse: 154,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Self-inflicted GSW{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 152,
              priority: 1,
            },
            {
              suffix: "Y",
              text: (
                <p>
                  Self-inflicted knife/stab wound{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 154,
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
          code: "27B00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 153,
          priority: 0,
          suffixes: [
            {
              suffix: "G",
              text: <p>Gunshot</p>,
              recResponse: 152,
              priority: 3,
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">IMPALED</b> currently
                </p>
              ),
              recResponse: 153,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Penetrating wound{" "}
                  <span className="text-sm">
                    (not <b className="font-bold">IMPALED</b> now)
                  </span>
                </p>
              ),
              recResponse: 153,
              priority: 3,
            },
            {
              suffix: "S",
              text: <p>Stab</p>,
              recResponse: 154,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Self-inflicted GSW{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 152,
              priority: 1,
            },
            {
              suffix: "Y",
              text: (
                <p>
                  Self-inflicted knife/stab wound{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 154,
              priority: 1,
            },
          ],
        },
        {
          code: "27B01",
          text: (
            <p>
              <b className="font-bold">NON-RECENT</b>{" "}
              <span className="text-sm">(&gt;=6hrs)</span>{" "}
              <b className="font-bold">single CENTRAL</b> wound
            </p>
          ),
          recResponse: 153,
          priority: 1,
          suffixes: [
            {
              suffix: "G",
              text: <p>Gunshot</p>,
              recResponse: 152,
              priority: 3,
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">IMPALED</b> currently
                </p>
              ),
              recResponse: 153,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Penetrating wound{" "}
                  <span className="text-sm">
                    (not <b className="font-bold">IMPALED</b> now)
                  </span>
                </p>
              ),
              recResponse: 153,
              priority: 3,
            },
            {
              suffix: "S",
              text: <p>Stab</p>,
              recResponse: 154,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Self-inflicted GSW{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 152,
              priority: 1,
            },
            {
              suffix: "Y",
              text: (
                <p>
                  Self-inflicted knife/stab wound{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 154,
              priority: 1,
            },
          ],
        },
        {
          code: "27B02",
          text: (
            <p>
              Known <b className="font-bold">single PERIPHERAL</b> wound
            </p>
          ),
          recResponse: 153,
          priority: 1,
          suffixes: [
            {
              suffix: "G",
              text: <p>Gunshot</p>,
              recResponse: 152,
              priority: 3,
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">IMPALED</b> currently
                </p>
              ),
              recResponse: 153,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Penetrating wound{" "}
                  <span className="text-sm">
                    (not <b className="font-bold">IMPALED</b> now)
                  </span>
                </p>
              ),
              recResponse: 153,
              priority: 3,
            },
            {
              suffix: "S",
              text: <p>Stab</p>,
              recResponse: 154,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Self-inflicted GSW{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 152,
              priority: 1,
            },
            {
              suffix: "Y",
              text: (
                <p>
                  Self-inflicted knife/stab wound{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 154,
              priority: 1,
            },
          ],
        },
        {
          code: "27B03",
          text: (
            <p>
              <b className="font-bold">SERIOUS</b> hemorrhage
            </p>
          ),
          recResponse: 153,
          priority: 2,
          suffixes: [
            {
              suffix: "G",
              text: <p>Gunshot</p>,
              recResponse: 152,
              priority: 3,
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">IMPALED</b> currently
                </p>
              ),
              recResponse: 153,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Penetrating wound{" "}
                  <span className="text-sm">
                    (not <b className="font-bold">IMPALED</b> now)
                  </span>
                </p>
              ),
              recResponse: 153,
              priority: 3,
            },
            {
              suffix: "S",
              text: <p>Stab</p>,
              recResponse: 154,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Self-inflicted GSW{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 152,
              priority: 1,
            },
            {
              suffix: "Y",
              text: (
                <p>
                  Self-inflicted knife/stab wound{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 154,
              priority: 1,
            },
          ],
        },
        {
          code: "27B04",
          text: (
            <p>
              <b className="font-bold">Unknown</b> status/
              <b className="font-bold">Other</b> codes{" "}
              <b className="font-bold">not</b> applicable
            </p>
          ),
          recResponse: 153,
          priority: 3,
          suffixes: [
            {
              suffix: "G",
              text: <p>Gunshot</p>,
              recResponse: 152,
              priority: 3,
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">IMPALED</b> currently
                </p>
              ),
              recResponse: 153,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Penetrating wound{" "}
                  <span className="text-sm">
                    (not <b className="font-bold">IMPALED</b> now)
                  </span>
                </p>
              ),
              recResponse: 153,
              priority: 3,
            },
            {
              suffix: "S",
              text: <p>Stab</p>,
              recResponse: 154,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Self-inflicted GSW{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 152,
              priority: 1,
            },
            {
              suffix: "Y",
              text: (
                <p>
                  Self-inflicted knife/stab wound{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 154,
              priority: 1,
            },
          ],
        },
        {
          code: "27B05",
          text: (
            <p>
              <b className="font-bold">OBVIOUS DEATH</b> unquestionable
            </p>
          ),
          recResponse: 156,
          priority: 3,
          suffixes: [
            {
              suffix: "G",
              text: <p>Gunshot</p>,
              recResponse: 155,
              priority: 3,
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">IMPALED</b> currently
                </p>
              ),
              recResponse: 156,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Penetrating wound{" "}
                  <span className="text-sm">
                    (not <b className="font-bold">IMPALED</b> now)
                  </span>
                </p>
              ),
              recResponse: 156,
              priority: 3,
            },
            {
              suffix: "S",
              text: <p>Stab</p>,
              recResponse: 157,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Self-inflicted GSW{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 155,
              priority: 1,
            },
            {
              suffix: "Y",
              text: (
                <p>
                  Self-inflicted knife/stab wound{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 157,
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
          code: "27D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 156,
          priority: 0,
          suffixes: [
            {
              suffix: "G",
              text: <p>Gunshot</p>,
              recResponse: 155,
              priority: 3,
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">IMPALED</b> currently
                </p>
              ),
              recResponse: 156,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Penetrating wound{" "}
                  <span className="text-sm">
                    (not <b className="font-bold">IMPALED</b> now)
                  </span>
                </p>
              ),
              recResponse: 156,
              priority: 3,
            },
            {
              suffix: "S",
              text: <p>Stab</p>,
              recResponse: 157,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Self-inflicted GSW{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 155,
              priority: 1,
            },
            {
              suffix: "Y",
              text: (
                <p>
                  Self-inflicted knife/stab wound{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 157,
              priority: 1,
            },
          ],
        },
        {
          code: "27D01",
          text: <p className="font-bold">Arrest</p>,
          recResponse: 158,
          notBreathing: true,
          priority: 1,
          suffixes: [
            {
              suffix: "G",
              text: <p>Gunshot</p>,
              recResponse: 159,
              priority: 3,
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">IMPALED</b> currently
                </p>
              ),
              recResponse: 158,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Penetrating wound{" "}
                  <span className="text-sm">
                    (not <b className="font-bold">IMPALED</b> now)
                  </span>
                </p>
              ),
              recResponse: 158,
              priority: 3,
            },
            {
              suffix: "S",
              text: <p>Stab</p>,
              recResponse: 160,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Self-inflicted GSW{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 159,
              priority: 1,
            },
            {
              suffix: "Y",
              text: (
                <p>
                  Self-inflicted knife/stab wound{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 160,
              priority: 1,
            },
          ],
        },
        {
          code: "27D02",
          text: <p className="font-bold">Unconscious</p>,
          recResponse: 162,
          notConscious: true,
          priority: 2,
          suffixes: [
            {
              suffix: "G",
              text: <p>Gunshot</p>,
              recResponse: 161,
              priority: 3,
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">IMPALED</b> currently
                </p>
              ),
              recResponse: 162,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Penetrating wound{" "}
                  <span className="text-sm">
                    (not <b className="font-bold">IMPALED</b> now)
                  </span>
                </p>
              ),
              recResponse: 162,
              priority: 3,
            },
            {
              suffix: "S",
              text: <p>Stab</p>,
              recResponse: 163,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Self-inflicted GSW{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 161,
              priority: 1,
            },
            {
              suffix: "Y",
              text: (
                <p>
                  Self-inflicted knife/stab wound{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 163,
              priority: 1,
            },
          ],
        },
        {
          code: "27D03",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 162,
          priority: 3,
          suffixes: [
            {
              suffix: "G",
              text: <p>Gunshot</p>,
              recResponse: 161,
              priority: 3,
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">IMPALED</b> currently
                </p>
              ),
              recResponse: 162,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Penetrating wound{" "}
                  <span className="text-sm">
                    (not <b className="font-bold">IMPALED</b> now)
                  </span>
                </p>
              ),
              recResponse: 162,
              priority: 3,
            },
            {
              suffix: "S",
              text: <p>Stab</p>,
              recResponse: 163,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Self-inflicted GSW{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 161,
              priority: 1,
            },
            {
              suffix: "Y",
              text: (
                <p>
                  Self-inflicted knife/stab wound{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 163,
              priority: 1,
            },
          ],
        },
        {
          code: "27D04",
          text: (
            <p>
              <b className="font-bold">CENTRAL</b> wounds
            </p>
          ),
          recResponse: 156,
          priority: 3,
          suffixes: [
            {
              suffix: "G",
              text: <p>Gunshot</p>,
              recResponse: 155,
              priority: 3,
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">IMPALED</b> currently
                </p>
              ),
              recResponse: 156,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Penetrating wound{" "}
                  <span className="text-sm">
                    (not <b className="font-bold">IMPALED</b> now)
                  </span>
                </p>
              ),
              recResponse: 156,
              priority: 3,
            },
            {
              suffix: "S",
              text: <p>Stab</p>,
              recResponse: 157,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Self-inflicted GSW{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 155,
              priority: 1,
            },
            {
              suffix: "Y",
              text: (
                <p>
                  Self-inflicted knife/stab wound{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 157,
              priority: 1,
            },
          ],
        },
        {
          code: "27D05",
          text: (
            <p>
              <b className="font-bold">Multiple</b> wounds
            </p>
          ),
          recResponse: 156,
          priority: 3,
          suffixes: [
            {
              suffix: "G",
              text: <p>Gunshot</p>,
              recResponse: 155,
              priority: 3,
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">IMPALED</b> currently
                </p>
              ),
              recResponse: 156,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Penetrating wound{" "}
                  <span className="text-sm">
                    (not <b className="font-bold">IMPALED</b> now)
                  </span>
                </p>
              ),
              recResponse: 156,
              priority: 3,
            },
            {
              suffix: "S",
              text: <p>Stab</p>,
              recResponse: 157,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Self-inflicted GSW{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 155,
              priority: 1,
            },
            {
              suffix: "Y",
              text: (
                <p>
                  Self-inflicted knife/stab wound{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 157,
              priority: 1,
            },
          ],
        },
        {
          code: "27D06",
          text: (
            <p>
              <b className="font-bold">Multiple</b> victims
            </p>
          ),
          recResponse: 165,
          multPatient: true,
          priority: 1,
          suffixes: [
            {
              suffix: "G",
              text: <p>Gunshot</p>,
              recResponse: 164,
              priority: 3,
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">IMPALED</b> currently
                </p>
              ),
              recResponse: 165,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Penetrating wound{" "}
                  <span className="text-sm">
                    (not <b className="font-bold">IMPALED</b> now)
                  </span>
                </p>
              ),
              recResponse: 165,
              priority: 3,
            },
            {
              suffix: "S",
              text: <p>Stab</p>,
              recResponse: 166,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Self-inflicted GSW{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 164,
              priority: 1,
            },
            {
              suffix: "Y",
              text: (
                <p>
                  Self-inflicted knife/stab wound{" "}
                  <span className="text-sm">(intentional)</span>
                </p>
              ),
              recResponse: 166,
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
