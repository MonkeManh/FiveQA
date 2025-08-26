import { IEMSProtocol } from "@/models/interfaces";

export const TRAFFIC_INCIDENTS: IEMSProtocol = {
  protocol: 29,
  name: "Traffic / Transportation Incidents",
  shortName: "Traffic/Transportation Incidents",
  description: <></>,
  services: [
    { name: "EMS", priority: "A" },
    { name: "Fire", priority: "B" },
    { name: "Police", priority: true },
  ],
  defaultPriority: "B",
  defaultCode: "29B05",
  defaultPlan: 168,
  preSend: true,
  availableTracks: [
    { id: 1, name: "Vehicle vs. vehicle" },
    { id: 2, name: "Something vehicle" },
    { id: 3, name: "Motorcycle (something)" },
    { id: 4, name: "Auto vs. motorcycle" },
    { id: 5, name: "Auto vs. pedestrian" },
    { id: 6, name: "Auto vs. bicycle" },
    { id: 7, name: "HIGH VELOCITY impact" },
    { id: 8, name: "Ejection" },
    { id: 9, name: "Rollover" },
    { id: 10, name: "Vehicle vs. building" },
    { id: 11, name: "Vehicle off bridge/height" },
    { id: 12, name: "Personal watercraft" },
    { id: 13, name: "Aircraft" },
    { id: 14, name: "Bus" },
    { id: 15, name: "Subway/Metro" },
    { id: 16, name: "Train" },
    { id: 17, name: "Street car/Tram/Light rail" },
    { id: 18, name: "Train/Light rail vs. pedestrian" },
    { id: 19, name: "Watercraft" },
    { id: 20, name: "All terrain vehicle/Snowmobile" },
    { id: 21, name: "Multi-vehicle (>=10) pile-up" },
    { id: 22, name: "Possible death at scene" },
    { id: 23, name: "Sinking vehicle (caller inside)" },
    { id: 24, name: "Sinking vehicle (caller NOT inside)" },
    { id: 25, name: "Vehicle in floodwater (caller inside)" },
    { id: 26, name: "Vehicle in floodwater (caller NOT inside)" },
  ],
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "29O01",
          text: (
            <p>
              <b className="font-bold">No</b> injuries{" "}
              <span className="text-sm">
                (<b className="font-bold">confirmed</b> for{" "}
                <b className="font-bold">all</b> persons{" "}
                <b className="font-bold">up to 4</b>)
              </span>
            </p>
          ),
          recResponse: 169,
          priority: 1,
        },
      ],
    },
    {
      priority: "A",
      codes: [
        {
          code: "29A00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 168,
          priority: 0,
          suffixes: [
            {
              suffix: "U",
              text: <p>Unknown number of patients</p>,
              recResponse: 168,
              priority: 4,
            },
            {
              suffix: "V",
              text: <p>Multiple patients</p>,
              recResponse: 170,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Unknown number of patients and Additional response required
                </p>
              ),
              recResponse: 168,
              priority: 2,
            },
            {
              suffix: "Y",
              text: <p>Multiple patients and Additional response required</p>,
              recResponse: 170,
              priority: 1,
            },
          ],
        },
        {
          code: "29A01",
          text: (
            <p>
              <b className="font-bold">1st party</b> caller with injured to{" "}
              <b className="font-bold">NOT DANGEROUS</b> body area
            </p>
          ),
          recResponse: 168,
          priority: 1,
          suffixes: [
            {
              suffix: "U",
              text: <p>Unknown number of patients</p>,
              recResponse: 168,
              priority: 4,
            },
            {
              suffix: "V",
              text: <p>Multiple patients</p>,
              recResponse: 170,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Unknown number of patients and Additional response required
                </p>
              ),
              recResponse: 168,
              priority: 2,
            },
            {
              suffix: "Y",
              text: <p>Multiple patients and Additional response required</p>,
              recResponse: 170,
              priority: 1,
            },
          ],
        },
        {
          code: "29A02",
          text: (
            <p>
              No injuries <b className="font-bold">reported</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">unconfirmed</b> or &gt;=
                <b className="font-bold">5</b> persons involved)
              </span>
            </p>
          ),
          recResponse: 168,
          priority: 2,
          suffixes: [
            {
              suffix: "U",
              text: <p>Unknown number of patients</p>,
              recResponse: 168,
              priority: 4,
            },
            {
              suffix: "V",
              text: <p>Multiple patients</p>,
              recResponse: 170,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Unknown number of patients and Additional response required
                </p>
              ),
              recResponse: 168,
              priority: 2,
            },
            {
              suffix: "Y",
              text: <p>Multiple patients and Additional response required</p>,
              recResponse: 170,
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
          code: "29B00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 168,
          priority: 0,
          suffixes: [
            {
              suffix: "U",
              text: <p>Unknown number of patients</p>,
              recResponse: 168,
              priority: 4,
            },
            {
              suffix: "V",
              text: <p>Multiple patients</p>,
              recResponse: 170,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Unknown number of patients and Additional response required
                </p>
              ),
              recResponse: 168,
              priority: 2,
            },
            {
              suffix: "Y",
              text: <p>Multiple patients and Additional response required</p>,
              recResponse: 170,
              priority: 1,
            },
          ],
        },
        {
          code: "29B01",
          text: <p className="font-bold">Injuries</p>,
          recResponse: 168,
          priority: 1,
          suffixes: [
            {
              suffix: "U",
              text: <p>Unknown number of patients</p>,
              recResponse: 168,
              priority: 4,
            },
            {
              suffix: "V",
              text: <p>Multiple patients</p>,
              recResponse: 170,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Unknown number of patients and Additional response required
                </p>
              ),
              recResponse: 168,
              priority: 2,
            },
            {
              suffix: "Y",
              text: <p>Multiple patients and Additional response required</p>,
              recResponse: 170,
              priority: 1,
            },
          ],
        },
        {
          code: "29B02",
          text: (
            <p>
              <b className="font-bold">SERIOUS</b> bleeding
            </p>
          ),
          recResponse: 168,
          priority: 2,
          suffixes: [
            {
              suffix: "U",
              text: <p>Unknown number of patients</p>,
              recResponse: 168,
              priority: 4,
            },
            {
              suffix: "V",
              text: <p>Multiple patients</p>,
              recResponse: 170,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Unknown number of patients and Additional response required
                </p>
              ),
              recResponse: 168,
              priority: 2,
            },
            {
              suffix: "Y",
              text: <p>Multiple patients and Additional response required</p>,
              recResponse: 170,
              priority: 1,
            },
          ],
        },
        {
          code: "29B03",
          text: (
            <p>
              <b className="font-bold">Other</b> hazards
            </p>
          ),
          recResponse: 168,
          priority: 3,
          suffixes: [
            {
              suffix: "U",
              text: <p>Unknown number of patients</p>,
              recResponse: 168,
              priority: 4,
            },
            {
              suffix: "V",
              text: <p>Multiple patients</p>,
              recResponse: 170,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Unknown number of patients and Additional response required
                </p>
              ),
              recResponse: 168,
              priority: 2,
            },
            {
              suffix: "Y",
              text: <p>Multiple patients and Additional response required</p>,
              recResponse: 170,
              priority: 1,
            },
          ],
        },
        {
          code: "29B04",
          text: (
            <p>
              <b className="font-bold">LOW MECHANISM</b>{" "}
              <span className="text-sm">(1st or 2nd party caller)</span>
            </p>
          ),
          recResponse: 168,
          priority: 4,
          suffixes: [
            {
              suffix: "U",
              text: <p>Unknown number of patients</p>,
              recResponse: 168,
              priority: 4,
            },
            {
              suffix: "V",
              text: <p>Multiple patients</p>,
              recResponse: 170,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Unknown number of patients and Additional response required
                </p>
              ),
              recResponse: 168,
              priority: 2,
            },
            {
              suffix: "Y",
              text: <p>Multiple patients and Additional response required</p>,
              recResponse: 170,
              priority: 1,
            },
          ],
        },
        {
          code: "29B05",
          text: (
            <p>
              <b className="font-bold">Unknown</b> status/
              <b className="font-bold">Other</b> codes{" "}
              <b className="font-bold">not</b> applicable
            </p>
          ),
          recResponse: 168,
          priority: 5,
          suffixes: [
            {
              suffix: "U",
              text: <p>Unknown number of patients</p>,
              recResponse: 168,
              priority: 4,
            },
            {
              suffix: "V",
              text: <p>Multiple patients</p>,
              recResponse: 170,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Unknown number of patients and Additional response required
                </p>
              ),
              recResponse: 168,
              priority: 2,
            },
            {
              suffix: "Y",
              text: <p>Multiple patients and Additional response required</p>,
              recResponse: 170,
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
          code: "29D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 173,
          priority: 0,
          suffixes: [
            {
              suffix: "U",
              text: <p>Unknown number of patients</p>,
              recResponse: 173,
              priority: 4,
            },
            {
              suffix: "V",
              text: <p>Multiple patients</p>,
              recResponse: 174,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Unknown number of patients and Additional response required
                </p>
              ),
              recResponse: 173,
              priority: 2,
            },
            {
              suffix: "Y",
              text: <p>Multiple patients and Additional response required</p>,
              recResponse: 174,
              priority: 1,
            },
          ],
        },
        {
          code: "29D01",
          text: (
            <p>
              <b className="font-bold">MAJOR INCIDENT</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">a</b> through{" "}
                <b className="font-bold">h</b>)
              </span>
            </p>
          ),
          recResponse: 173,
          priority: 1,
          suffixes: [
            {
              suffix: "a",
              text: <p>Aircraft</p>,
              recResponse: 175,
              priority: 0,
            },
            {
              suffix: "B",
              text: <p>Bus</p>,
              recResponse: 172,
              priority: 0,
            },
            {
              suffix: "C",
              text: <p>Subway/Metro</p>,
              recResponse: 176,
              priority: 0,
            },
            {
              suffix: "d",
              text: <p>Train</p>,
              recResponse: 176,
              priority: 0,
            },
            {
              suffix: "E",
              text: <p>Watercraft</p>,
              recResponse: 177,
              priority: 0,
            },
            {
              suffix: "f",
              text: <p>Multi-vehicle (&gt;=10) pile-up</p>,
              recResponse: 172,
              priority: 0,
            },
            {
              suffix: "g",
              text: <p>Street car/Tram/Light rail</p>,
              recResponse: 176,
              priority: 0,
            },
            {
              suffix: "h",
              text: <p>Vehicle vs. building</p>,
              recResponse: 178,
              priority: 0,
            },
          ],
        },
        {
          code: "29D02",
          text: (
            <p>
              <b className="font-bold">HIGH MECHANISM</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">k</b> through{" "}
                <b className="font-bold">t</b>)
              </span>
            </p>
          ),
          recResponse: 173,
          priority: 1,
          suffixes: [
            {
              suffix: "k",
              text: <p>All-terrain/Snowmobile</p>,
              recResponse: 180,
              priority: 0,
            },
            {
              suffix: "l",
              text: <p>Auto vs. bicycle/Auto vs. motorcycle</p>,
              recResponse: 179,
              priority: 0,
            },
            {
              suffix: "m",
              text: <p>Auto vs. pedestrian</p>,
              recResponse: 181,
              priority: 0,
            },
            {
              suffix: "n",
              text: <p>Ejection</p>,
              recResponse: 182,
              priority: 0,
            },
            {
              suffix: "o",
              text: <p>Personal watercraft</p>,
              recResponse: 177,
              priority: 0,
            },
            {
              suffix: "p",
              text: <p>Rollovers</p>,
              recResponse: 183,
              priority: 0,
            },
            {
              suffix: "q",
              text: <p>Vehicle off bridge/height</p>,
              recResponse: 184,
              priority: 0,
            },
            {
              suffix: "r",
              text: <p>Possible death at scene</p>,
              recResponse: 173,
              priority: 0,
            },
            {
              suffix: "s",
              text: <p>Sinking vehicle/Vehicle in floodwater</p>,
              recResponse: 185,
              priority: 0,
            },
            {
              suffix: "t",
              text: <p>Train/Light rail vs. pedestrian</p>,
              recResponse: 186,
              priority: 0,
            },
          ],
        },
        {
          code: "29D03",
          text: (
            <p>
              <b className="font-bold">HIGH VELOCITY</b> impact
            </p>
          ),
          recResponse: 180,
          priority: 4,
          suffixes: [
            {
              suffix: "U",
              text: <p>Unknown number of patients</p>,
              recResponse: 180,
              priority: 4,
            },
            {
              suffix: "V",
              text: <p>Multiple patients</p>,
              recResponse: 180,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Unknown number of patients and Additional response required
                </p>
              ),
              recResponse: 180,
              priority: 2,
            },
            {
              suffix: "Y",
              text: <p>Multiple patients and Additional response required</p>,
              recResponse: 180,
              priority: 1,
            },
          ],
        },
        {
          code: "29D04",
          text: <p className="font-bold">HAZMAT</p>,
          recResponse: 187,
          priority: 2,
          suffixes: [
            {
              suffix: "U",
              text: <p>Unknown number of patients</p>,
              recResponse: 187,
              priority: 4,
            },
            {
              suffix: "V",
              text: <p>Multiple patients</p>,
              recResponse: 187,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Unknown number of patients and Additional response required
                </p>
              ),
              recResponse: 187,
              priority: 2,
            },
            {
              suffix: "Y",
              text: <p>Multiple patients and Additional response required</p>,
              recResponse: 187,
              priority: 1,
            },
          ],
        },
        {
          code: "29D05",
          text: (
            <p>
              <b className="font-bold">Pinned</b>{" "}
              <span className="text-sm">(trapped)</span> victim
            </p>
          ),
          recResponse: 188,
          priority: 3,
          suffixes: [
            {
              suffix: "U",
              text: <p>Unknown number of patients</p>,
              recResponse: 187,
              priority: 4,
            },
            {
              suffix: "V",
              text: <p>Multiple patients</p>,
              recResponse: 189,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Unknown number of patients and Additional response required
                </p>
              ),
              recResponse: 187,
              priority: 2,
            },
            {
              suffix: "Y",
              text: <p>Multiple patients and Additional response required</p>,
              recResponse: 189,
              priority: 1,
            },
          ],
        },
        {
          code: "29D06",
          text: <p className="font-bold">Arrest</p>,
          recResponse: 173,
          notBreathing: true,
          priority: 3,
          suffixes: [
            {
              suffix: "U",
              text: <p>Unknown number of patients</p>,
              recResponse: 173,
              priority: 4,
            },
            {
              suffix: "V",
              text: <p>Multiple patients</p>,
              recResponse: 174,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Unknown number of patients and Additional response required
                </p>
              ),
              recResponse: 173,
              priority: 2,
            },
            {
              suffix: "Y",
              text: <p>Multiple patients and Additional response required</p>,
              recResponse: 174,
              priority: 1,
            },
          ],
        },
        {
          code: "29D07",
          text: <p className="font-bold">Unconscious</p>,
          recResponse: 171,
          notConscious: true,
          priority: 3,
          suffixes: [
            {
              suffix: "U",
              text: <p>Unknown number of patients</p>,
              recResponse: 171,
              priority: 4,
            },
            {
              suffix: "V",
              text: <p>Multiple patients</p>,
              recResponse: 172,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Unknown number of patients and Additional response required
                </p>
              ),
              recResponse: 171,
              priority: 2,
            },
            {
              suffix: "Y",
              text: <p>Multiple patients and Additional response required</p>,
              recResponse: 172,
              priority: 1,
            },
          ],
        },
        {
          code: "29D08",
          text: (
            <p>
              <b className="font-bold">Not</b> alert with{" "}
              <b className="font-bold">noisy</b> breathing{" "}
              <span className="text-sm">(abnormal)</span>
            </p>
          ),
          recResponse: 173,
          priority: 4,
          suffixes: [
            {
              suffix: "U",
              text: <p>Unknown number of patients</p>,
              recResponse: 173,
              priority: 4,
            },
            {
              suffix: "V",
              text: <p>Multiple patients</p>,
              recResponse: 174,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Unknown number of patients and Additional response required
                </p>
              ),
              recResponse: 173,
              priority: 2,
            },
            {
              suffix: "Y",
              text: <p>Multiple patients and Additional response required</p>,
              recResponse: 174,
              priority: 1,
            },
          ],
        },
        {
          code: "29D09",
          text: (
            <p>
              <b className="font-bold">Not</b> alert with{" "}
              <b className="font-bold">normal</b> breathing
            </p>
          ),
          recResponse: 171,
          priority: 4,
          suffixes: [
            {
              suffix: "U",
              text: <p>Unknown number of patients</p>,
              recResponse: 171,
              priority: 4,
            },
            {
              suffix: "V",
              text: <p>Multiple patients</p>,
              recResponse: 172,
              priority: 3,
            },
            {
              suffix: "X",
              text: (
                <p>
                  Unknown number of patients and Additional response required
                </p>
              ),
              recResponse: 171,
              priority: 2,
            },
            {
              suffix: "Y",
              text: <p>Multiple patients and Additional response required</p>,
              recResponse: 172,
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
