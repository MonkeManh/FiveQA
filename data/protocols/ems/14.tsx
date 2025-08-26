import { IEMSProtocol } from "@/models/interfaces";

export const DROWNING: IEMSProtocol = {
  protocol: 14,
  name: "Drowning (Near) / Diving / SCUBA Accident",
  shortName: "Drowning",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "C" },
    { name: "Police", priority: "E" },
  ],
  defaultPriority: "B",
  defaultCode: "14B03",
  defaultPlan: 65,
  preSend: true,
  availableTracks: [
    { id: 1, name: "DIVING injury (not underwater)" },
    { id: 2, name: "SCUBA accident (not underwater)" },
    { id: 3, name: "SWIFT water rescue" },
    { id: 4, name: "Floodwater rescue" },
    { id: 5, name: "Ice rescue" },
    { id: 6, name: "Other drowning/near drowning situation" }
  ],
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "14A01",
          text: (
            <p>
              Alert <b className="font-bold">and</b> breathing normally{" "}
              <span className="text-sm">
                (<b className="font-bold">no</b> injuries{" "}
                <b className="font-bold">and</b> out of water)
              </span>
            </p>
          ),
          recResponse: 65,
          priority: 1,
          suffixes: [
            {
              suffix: "S",
              text: (
                <p>
                  <b className="font-bold">SCUBA</b> accident (not underwater)
                </p>
              ),
              recResponse: 65,
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
          code: "14B00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 65,
          priority: 0,
          suffixes: [
            {
              suffix: "S",
              text: (
                <p>
                  <b className="font-bold">SCUBA</b> accident (not underwater)
                </p>
              ),
              recResponse: 65,
              priority: 1,
            },
          ],
        },
        {
          code: "14B01",
          text: (
            <p>
              Alert <b className="font-bold">and</b> breathing normally{" "}
              <span className="text-sm">
                (injuries <b className="font-bold">or</b> in water)
              </span>
            </p>
          ),
          recResponse: 65,
          priority: 2,
          suffixes: [
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">DIVING</b> injury (not underwater)
                </p>
              ),
              recResponse: 65,
              priority: 5,
            },
            {
              suffix: "F",
              text: <p>Floodwater Rescue</p>,
              recResponse: 66,
              priority: 3,
            },
            {
              suffix: "I",
              text: <p>Ice Rescue</p>,
              recResponse: 67,
              priority: 4,
            },
            {
              suffix: "S",
              text: (
                <p>
                  <b className="font-bold">SCUBA</b> accident (not underwater)
                </p>
              ),
              recResponse: 65,
              priority: 1,
            },
            {
              suffix: "W",
              text: (
                <p>
                  <b className="font-bold">SWIFT</b> water rescue
                </p>
              ),
              recResponse: 66,
              priority: 2,
            },
          ],
        },
        {
          code: "14B02",
          text: (
            <p>
              <b className="font-bold">OBVIOUS DEATH</b>{" "}
              <span className="text-sm">(submersion &gt;=6hrs)</span>
            </p>
          ),
          recResponse: 68,
          priority: 1,
        },
        {
          code: "14B03",
          text: (
            <p>
              <b className="font-bold">Unknown</b> status/
              <b className="font-bold">Other</b> codes{" "}
              <b className="font-bold">not</b> applicable
            </p>
          ),
          recResponse: 65,
          priority: 3,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "14C00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 68,
          priority: 0,
          suffixes: [
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">DIVING</b> injury (not underwater)
                </p>
              ),
              recResponse: 68,
              priority: 5,
            },
            {
              suffix: "F",
              text: <p>Floodwater Rescue</p>,
              recResponse: 66,
              priority: 3,
            },
            {
              suffix: "I",
              text: <p>Ice Rescue</p>,
              recResponse: 67,
              priority: 4,
            },
            {
              suffix: "S",
              text: (
                <p>
                  <b className="font-bold">SCUBA</b> accident (not underwater)
                </p>
              ),
              recResponse: 68,
              priority: 1,
            },
            {
              suffix: "W",
              text: (
                <p>
                  <b className="font-bold">SWIFT</b> water rescue
                </p>
              ),
              recResponse: 66,
              priority: 2,
            },
          ],
        },
        {
          code: "14C01",
          text: (
            <p>
              Alert with <b className="font-bold">abnormal breathing</b>
            </p>
          ),
          recResponse: 68,
          priority: 1,
          suffixes: [
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">DIVING</b> injury (not underwater)
                </p>
              ),
              recResponse: 68,
              priority: 5,
            },
            {
              suffix: "F",
              text: <p>Floodwater Rescue</p>,
              recResponse: 66,
              priority: 3,
            },
            {
              suffix: "I",
              text: <p>Ice Rescue</p>,
              recResponse: 67,
              priority: 4,
            },
            {
              suffix: "S",
              text: (
                <p>
                  <b className="font-bold">SCUBA</b> accident (not underwater)
                </p>
              ),
              recResponse: 68,
              priority: 1,
            },
            {
              suffix: "W",
              text: (
                <p>
                  <b className="font-bold">SWIFT</b> water rescue
                </p>
              ),
              recResponse: 66,
              priority: 2,
            },
          ],
        },
        {
          code: "14C02",
          text: (
            <p>
              <b className="font-bold">Decompression sickness</b>{" "}
              <span className="text-sm">(the bends)</span>
            </p>
          ),
          recResponse: 68,
          priority: 2,
          suffixes: [
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">DIVING</b> injury (not underwater)
                </p>
              ),
              recResponse: 68,
              priority: 5,
            },
            {
              suffix: "S",
              text: (
                <p>
                  <b className="font-bold">SCUBA</b> accident (not underwater)
                </p>
              ),
              recResponse: 68,
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
          code: "14D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 68,
          priority: 0,
          suffixes: [
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">DIVING</b> injury (not underwater)
                </p>
              ),
              recResponse: 68,
              priority: 5,
            },
            {
              suffix: "F",
              text: <p>Floodwater Rescue</p>,
              recResponse: 66,
              priority: 3,
            },
            {
              suffix: "I",
              text: <p>Ice Rescue</p>,
              recResponse: 67,
              priority: 4,
            },
            {
              suffix: "S",
              text: (
                <p>
                  <b className="font-bold">SCUBA</b> accident (not underwater)
                </p>
              ),
              recResponse: 68,
              priority: 1,
            },
            {
              suffix: "W",
              text: (
                <p>
                  <b className="font-bold">SWIFT</b> water rescue
                </p>
              ),
              recResponse: 66,
              priority: 2,
            },
          ],
        },
        {
          code: "14D01",
          text: <p className="font-bold">Unconscious</p>,
          recResponse: 69,
          notConscious: true,
          priority: 2,
          suffixes: [
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">DIVING</b> injury (not underwater)
                </p>
              ),
              recResponse: 69,
              priority: 5,
            },
            {
              suffix: "F",
              text: <p>Floodwater Rescue</p>,
              recResponse: 66,
              priority: 3,
            },
            {
              suffix: "I",
              text: <p>Ice Rescue</p>,
              recResponse: 67,
              priority: 4,
            },
            {
              suffix: "S",
              text: (
                <p>
                  <b className="font-bold">SCUBA</b> accident (not underwater)
                </p>
              ),
              recResponse: 69,
              priority: 1,
            },
            {
              suffix: "W",
              text: (
                <p>
                  <b className="font-bold">SWIFT</b> water rescue
                </p>
              ),
              recResponse: 66,
              priority: 2,
            },
          ],
        },
        {
          code: "14D02",
          text: (
            <p>
              <b className="font-bold">Underwater</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">SPECIALIZED</b> rescue)
              </span>
            </p>
          ),
          recResponse: 66,
          priority: 1,
        },
        {
          code: "14D03",
          text: (
            <p>
              <b className="font-bold">Stranded</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">SPECIALIZED</b> rescue)
              </span>
            </p>
          ),
          recResponse: 66,
          priority: 3,
          suffixes: [
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">DIVING</b> injury (not underwater)
                </p>
              ),
              recResponse: 66,
              priority: 5,
            },
            {
              suffix: "F",
              text: <p>Floodwater Rescue</p>,
              recResponse: 66,
              priority: 3,
            },
            {
              suffix: "I",
              text: <p>Ice Rescue</p>,
              recResponse: 67,
              priority: 4,
            },
            {
              suffix: "S",
              text: (
                <p>
                  <b className="font-bold">SCUBA</b> accident (not underwater)
                </p>
              ),
              recResponse: 66,
              priority: 1,
            },
            {
              suffix: "W",
              text: (
                <p>
                  <b className="font-bold">SWIFT</b> water rescue
                </p>
              ),
              recResponse: 66,
              priority: 2,
            },
          ],
        },
        {
          code: "14D04",
          text: (
            <p>
              Just <b className="font-bold">resuscitated</b> and/or{" "}
              <b className="font-bold">defibrillated</b>{" "}
              <span className="text-sm">(external)</span>
            </p>
          ),
          recResponse: 69,
          priority: 4,
          suffixes: [
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">DIVING</b> injury (not underwater)
                </p>
              ),
              recResponse: 69,
              priority: 5,
            },
            {
              suffix: "F",
              text: <p>Floodwater Rescue</p>,
              recResponse: 66,
              priority: 3,
            },
            {
              suffix: "I",
              text: <p>Ice Rescue</p>,
              recResponse: 67,
              priority: 4,
            },
            {
              suffix: "S",
              text: (
                <p>
                  <b className="font-bold">SCUBA</b> accident (not underwater)
                </p>
              ),
              recResponse: 69,
              priority: 1,
            },
            {
              suffix: "W",
              text: (
                <p>
                  <b className="font-bold">SWIFT</b> water rescue
                </p>
              ),
              recResponse: 66,
              priority: 2,
            },
          ],
        },
        {
          code: "14D05",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 68,
          priority: 5,
          suffixes: [
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">DIVING</b> injury (not underwater)
                </p>
              ),
              recResponse: 68,
              priority: 5,
            },
            {
              suffix: "F",
              text: <p>Floodwater Rescue</p>,
              recResponse: 66,
              priority: 3,
            },
            {
              suffix: "I",
              text: <p>Ice Rescue</p>,
              recResponse: 67,
              priority: 4,
            },
            {
              suffix: "S",
              text: (
                <p>
                  <b className="font-bold">SCUBA</b> accident (not underwater)
                </p>
              ),
              recResponse: 68,
              priority: 1,
            },
            {
              suffix: "W",
              text: (
                <p>
                  <b className="font-bold">SWIFT</b> water rescue
                </p>
              ),
              recResponse: 66,
              priority: 2,
            },
          ],
        },
        {
          code: "14D06",
          text: (
            <p>
              Suspected <b className="font-bold">neck injury</b>
            </p>
          ),
          recResponse: 68,
          priority: 6,
          suffixes: [
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">DIVING</b> injury (not underwater)
                </p>
              ),
              recResponse: 68,
              priority: 5,
            },
            {
              suffix: "F",
              text: <p>Floodwater Rescue</p>,
              recResponse: 66,
              priority: 3,
            },
            {
              suffix: "I",
              text: <p>Ice Rescue</p>,
              recResponse: 67,
              priority: 4,
            },
            {
              suffix: "S",
              text: (
                <p>
                  <b className="font-bold">SCUBA</b> accident (not underwater)
                </p>
              ),
              recResponse: 68,
              priority: 1,
            },
            {
              suffix: "W",
              text: (
                <p>
                  <b className="font-bold">SWIFT</b> water rescue
                </p>
              ),
              recResponse: 66,
              priority: 2,
            },
          ],
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "14E00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 70,
          priority: 0,
          suffixes: [
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">DIVING</b> injury (not underwater)
                </p>
              ),
              recResponse: 70,
              priority: 5,
            },
            {
              suffix: "F",
              text: <p>Floodwater Rescue</p>,
              recResponse: 66,
              priority: 3,
            },
            {
              suffix: "I",
              text: <p>Ice Rescue</p>,
              recResponse: 70,
              priority: 4,
            },
            {
              suffix: "S",
              text: (
                <p>
                  <b className="font-bold">SCUBA</b> accident (not underwater)
                </p>
              ),
              recResponse: 70,
              priority: 1,
            },
            {
              suffix: "W",
              text: (
                <p>
                  <b className="font-bold">SWIFT</b> water rescue
                </p>
              ),
              recResponse: 66,
              priority: 2,
            },
          ],
        },
        {
          code: "14E01",
          text: (
            <p>
              <b className="font-bold">Arrest</b>{" "}
              <span className="text-sm">(out of water)</span>
            </p>
          ),
          recResponse: 70,
          notBreathing: true,
          priority: 1,
          suffixes: [
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">DIVING</b> injury (not underwater)
                </p>
              ),
              recResponse: 70,
              priority: 5,
            },
            {
              suffix: "F",
              text: <p>Floodwater Rescue</p>,
              recResponse: 66,
              priority: 3,
            },
            {
              suffix: "I",
              text: <p>Ice Rescue</p>,
              recResponse: 70,
              priority: 4,
            },
            {
              suffix: "S",
              text: (
                <p>
                  <b className="font-bold">SCUBA</b> accident (not underwater)
                </p>
              ),
              recResponse: 70,
              priority: 1,
            },
            {
              suffix: "W",
              text: (
                <p>
                  <b className="font-bold">SWIFT</b> water rescue
                </p>
              ),
              recResponse: 66,
              priority: 2,
            },
          ],
        },
        {
          code: "14E02",
          text: (
            <p>
              <b className="font-bold">Underwater</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">non-SPECIALIZED</b> rescue)
              </span>
            </p>
          ),
          recResponse: 70,
          priority: 2,
        },
      ],
    },
  ],
  pdis: {
    instructions: [],
    dls: [],
  },
};
