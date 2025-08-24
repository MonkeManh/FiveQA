import { IEMSProtocol } from "@/models/interfaces";

export const FALLS: IEMSProtocol = {
  protocol: 17,
  name: "Falls",
  shortName: "Falls",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "D" },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "B",
  defaultCode: "17B04",
  defaultPlan: 79,
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "17A01",
          text: (
            <p>
              <b className="font-bold">Marked</b> (
              <b className="font-bold">*</b>){" "}
              <b className="font-bold">NOT DANGEROUS</b> body area with{" "}
              <b className="font-bold">deformity</b>
            </p>
          ),
          recResponse: 79,
          priority: 2,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accessibility concerns/difficulty</p>,
              recResponse: 204,
              priority: 11,
            },
            {
              suffix: "B",
              text: <p>Accessibility concerns/difficulty and over 300 lbs</p>,
              recResponse: 204,
              priority: 10,
            },
            {
              suffix: "E",
              text: (
                <p>
                  Environmental problems{" "}
                  <span className="text-red-500">(rain, heat, cold)</span>
                </p>
              ),
              recResponse: 79,
              priority: 9,
            },
            {
              suffix: "F",
              text: <p>Environmental problems and over 300 lbs</p>,
              recResponse: 204,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>On the floor/ground &lt; 1 hour</p>,
              recResponse: 79,
              priority: 7,
            },
            {
              suffix: "H",
              text: <p>On the floor/ground &lt; 1 hour & over 300 lbs</p>,
              recResponse: 204,
              priority: 6,
            },
            {
              suffix: "J",
              text: <p>Jumper (suicide attempt)</p>,
              recResponse: 80,
              priority: 1,
            },
            {
              suffix: "K",
              text: <p>On the floor/ground 1-2 hours</p>,
              recResponse: 79,
              priority: 5,
            },
            {
              suffix: "L",
              text: <p>On the floor/ground 1-2 hours & over 300 lbs</p>,
              recResponse: 204,
              priority: 4,
            },
            {
              suffix: "M",
              text: <p>On the floor/ground &gt; 2 hours</p>,
              recResponse: 79,
              priority: 3,
            },
            {
              suffix: "N",
              text: <p>On the floor/ground &gt; 2 hours & over 300 lbs</p>,
              recResponse: 204,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Public place{" "}
                  <span className="text-red-500">
                    (street, parking garage, market)
                  </span>
                </p>
              ),
              recResponse: 79,
              priority: 13,
            },
            {
              suffix: "U",
              text: <p>Public place and over 300 lbs</p>,
              recResponse: 204,
              priority: 12,
            },
            {
              suffix: "W",
              text: <p>Patient's weight over 300 lbs</p>,
              recResponse: 204,
              priority: 14,
            },
          ],
        },
        {
          code: "17A02",
          text: (
            <p>
              <b className="font-bold">NOT DANGEROUS</b> body area
            </p>
          ),
          recResponse: 79,
          priority: 3,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accessibility concerns/difficulty</p>,
              recResponse: 204,
              priority: 11,
            },
            {
              suffix: "B",
              text: <p>Accessibility concerns/difficulty and over 300 lbs</p>,
              recResponse: 204,
              priority: 10,
            },
            {
              suffix: "E",
              text: (
                <p>
                  Environmental problems{" "}
                  <span className="text-red-500">(rain, heat, cold)</span>
                </p>
              ),
              recResponse: 79,
              priority: 9,
            },
            {
              suffix: "F",
              text: <p>Environmental problems and over 300 lbs</p>,
              recResponse: 204,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>On the floor/ground &lt; 1 hour</p>,
              recResponse: 79,
              priority: 7,
            },
            {
              suffix: "H",
              text: <p>On the floor/ground &lt; 1 hour & over 300 lbs</p>,
              recResponse: 204,
              priority: 6,
            },
            {
              suffix: "J",
              text: <p>Jumper (suicide attempt)</p>,
              recResponse: 80,
              priority: 1,
            },
            {
              suffix: "K",
              text: <p>On the floor/ground 1-2 hours</p>,
              recResponse: 79,
              priority: 5,
            },
            {
              suffix: "L",
              text: <p>On the floor/ground 1-2 hours & over 300 lbs</p>,
              recResponse: 204,
              priority: 4,
            },
            {
              suffix: "M",
              text: <p>On the floor/ground &gt; 2 hours</p>,
              recResponse: 79,
              priority: 3,
            },
            {
              suffix: "N",
              text: <p>On the floor/ground &gt; 2 hours & over 300 lbs</p>,
              recResponse: 204,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Public place{" "}
                  <span className="text-red-500">
                    (street, parking garage, market)
                  </span>
                </p>
              ),
              recResponse: 79,
              priority: 13,
            },
            {
              suffix: "U",
              text: <p>Public place and over 300 lbs</p>,
              recResponse: 204,
              priority: 12,
            },
            {
              suffix: "W",
              text: <p>Patient's weight over 300 lbs</p>,
              recResponse: 204,
              priority: 14,
            },
          ],
        },
        {
          code: "17A03",
          text: (
            <p>
              <b className="font-bold">NON-RECENT</b>{" "}
              <span className="text-sm">(&gt;=6hrs)</span> injuries{" "}
              <span className="text-sm">
                (<b className="font-bold">injuries</b> without priority symptoms
              </span>
              )
            </p>
          ),
          recResponse: 81,
          priority: 1,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accessibility concerns/difficulty</p>,
              recResponse: 204,
              priority: 11,
            },
            {
              suffix: "B",
              text: <p>Accessibility concerns/difficulty and over 300 lbs</p>,
              recResponse: 204,
              priority: 10,
            },
            {
              suffix: "E",
              text: (
                <p>
                  Environmental problems{" "}
                  <span className="text-red-500">(rain, heat, cold)</span>
                </p>
              ),
              recResponse: 79,
              priority: 9,
            },
            {
              suffix: "F",
              text: <p>Environmental problems and over 300 lbs</p>,
              recResponse: 204,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>On the floor/ground &lt; 1 hour</p>,
              recResponse: 79,
              priority: 7,
            },
            {
              suffix: "H",
              text: <p>On the floor/ground &lt; 1 hour & over 300 lbs</p>,
              recResponse: 204,
              priority: 6,
            },
            {
              suffix: "J",
              text: <p>Jumper (suicide attempt)</p>,
              recResponse: 80,
              priority: 1,
            },
            {
              suffix: "K",
              text: <p>On the floor/ground 1-2 hours</p>,
              recResponse: 79,
              priority: 5,
            },
            {
              suffix: "L",
              text: <p>On the floor/ground 1-2 hours & over 300 lbs</p>,
              recResponse: 204,
              priority: 4,
            },
            {
              suffix: "M",
              text: <p>On the floor/ground &gt; 2 hours</p>,
              recResponse: 79,
              priority: 3,
            },
            {
              suffix: "N",
              text: <p>On the floor/ground &gt; 2 hours & over 300 lbs</p>,
              recResponse: 204,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Public place{" "}
                  <span className="text-red-500">
                    (street, parking garage, market)
                  </span>
                </p>
              ),
              recResponse: 79,
              priority: 13,
            },
            {
              suffix: "U",
              text: <p>Public place and over 300 lbs</p>,
              recResponse: 204,
              priority: 12,
            },
            {
              suffix: "W",
              text: <p>Patient's weight over 300 lbs</p>,
              recResponse: 204,
              priority: 14,
            },
          ],
        },
        {
          code: "17A04",
          text: (
            <p>
              <b className="font-bold">PUBLIC ASSIST</b>{" "}
              <span className="text-sm">
                (<b className="font-bold">no injuries</b> and{" "}
                <b className="font-bold">no</b> priority symptoms
              </span>
              )
            </p>
          ),
          recResponse: 82,
          priority: 4,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accessibility concerns/difficulty</p>,
              recResponse: 82,
              priority: 11,
            },
            {
              suffix: "B",
              text: <p>Accessibility concerns/difficulty and over 300 lbs</p>,
              recResponse: 82,
              priority: 10,
            },
            {
              suffix: "E",
              text: (
                <p>
                  Environmental problems{" "}
                  <span className="text-red-500">(rain, heat, cold)</span>
                </p>
              ),
              recResponse: 82,
              priority: 9,
            },
            {
              suffix: "F",
              text: <p>Environmental problems and over 300 lbs</p>,
              recResponse: 82,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>On the floor/ground &lt; 1 hour</p>,
              recResponse: 82,
              priority: 7,
            },
            {
              suffix: "H",
              text: <p>On the floor/ground &lt; 1 hour & over 300 lbs</p>,
              recResponse: 82,
              priority: 6,
            },
            {
              suffix: "J",
              text: <p>Jumper (suicide attempt)</p>,
              recResponse: 80,
              priority: 1,
            },
            {
              suffix: "K",
              text: <p>On the floor/ground 1-2 hours</p>,
              recResponse: 82,
              priority: 5,
            },
            {
              suffix: "L",
              text: <p>On the floor/ground 1-2 hours & over 300 lbs</p>,
              recResponse: 82,
              priority: 4,
            },
            {
              suffix: "M",
              text: <p>On the floor/ground &gt; 2 hours</p>,
              recResponse: 82,
              priority: 3,
            },
            {
              suffix: "N",
              text: <p>On the floor/ground &gt; 2 hours & over 300 lbs</p>,
              recResponse: 82,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Public place{" "}
                  <span className="text-red-500">
                    (street, parking garage, market)
                  </span>
                </p>
              ),
              recResponse: 82,
              priority: 13,
            },
            {
              suffix: "U",
              text: <p>Public place and over 300 lbs</p>,
              recResponse: 82,
              priority: 12,
            },
            {
              suffix: "W",
              text: <p>Patient's weight over 300 lbs</p>,
              recResponse: 82,
              priority: 14,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "17B00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 79,
          priority: 0,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accessibility concerns/difficulty</p>,
              recResponse: 204,
              priority: 11,
            },
            {
              suffix: "B",
              text: <p>Accessibility concerns/difficulty and over 300 lbs</p>,
              recResponse: 204,
              priority: 10,
            },
            {
              suffix: "E",
              text: (
                <p>
                  Environmental problems{" "}
                  <span className="text-red-500">(rain, heat, cold)</span>
                </p>
              ),
              recResponse: 79,
              priority: 9,
            },
            {
              suffix: "F",
              text: <p>Environmental problems and over 300 lbs</p>,
              recResponse: 204,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>On the floor/ground &lt; 1 hour</p>,
              recResponse: 79,
              priority: 7,
            },
            {
              suffix: "H",
              text: <p>On the floor/ground &lt; 1 hour & over 300 lbs</p>,
              recResponse: 204,
              priority: 6,
            },
            {
              suffix: "J",
              text: <p>Jumper (suicide attempt)</p>,
              recResponse: 80,
              priority: 1,
            },
            {
              suffix: "K",
              text: <p>On the floor/ground 1-2 hours</p>,
              recResponse: 79,
              priority: 5,
            },
            {
              suffix: "L",
              text: <p>On the floor/ground 1-2 hours & over 300 lbs</p>,
              recResponse: 204,
              priority: 4,
            },
            {
              suffix: "M",
              text: <p>On the floor/ground &gt; 2 hours</p>,
              recResponse: 79,
              priority: 3,
            },
            {
              suffix: "N",
              text: <p>On the floor/ground &gt; 2 hours & over 300 lbs</p>,
              recResponse: 204,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Public place{" "}
                  <span className="text-red-500">
                    (street, parking garage, market)
                  </span>
                </p>
              ),
              recResponse: 79,
              priority: 13,
            },
            {
              suffix: "U",
              text: <p>Public place and over 300 lbs</p>,
              recResponse: 204,
              priority: 12,
            },
            {
              suffix: "W",
              text: <p>Patient's weight over 300 lbs</p>,
              recResponse: 204,
              priority: 14,
            },
          ],
        },
        {
          code: "17B01",
          text: (
            <p>
              <b className="font-bold">POSSIBLY DANGEROUS</b> body area
            </p>
          ),
          recResponse: 79,
          priority: 1,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accessibility concerns/difficulty</p>,
              recResponse: 204,
              priority: 11,
            },
            {
              suffix: "B",
              text: <p>Accessibility concerns/difficulty and over 300 lbs</p>,
              recResponse: 204,
              priority: 10,
            },
            {
              suffix: "E",
              text: (
                <p>
                  Environmental problems{" "}
                  <span className="text-red-500">(rain, heat, cold)</span>
                </p>
              ),
              recResponse: 79,
              priority: 9,
            },
            {
              suffix: "F",
              text: <p>Environmental problems and over 300 lbs</p>,
              recResponse: 204,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>On the floor/ground &lt; 1 hour</p>,
              recResponse: 79,
              priority: 7,
            },
            {
              suffix: "H",
              text: <p>On the floor/ground &lt; 1 hour & over 300 lbs</p>,
              recResponse: 204,
              priority: 6,
            },
            {
              suffix: "J",
              text: <p>Jumper (suicide attempt)</p>,
              recResponse: 80,
              priority: 1,
            },
            {
              suffix: "K",
              text: <p>On the floor/ground 1-2 hours</p>,
              recResponse: 79,
              priority: 5,
            },
            {
              suffix: "L",
              text: <p>On the floor/ground 1-2 hours & over 300 lbs</p>,
              recResponse: 204,
              priority: 4,
            },
            {
              suffix: "M",
              text: <p>On the floor/ground &gt; 2 hours</p>,
              recResponse: 79,
              priority: 3,
            },
            {
              suffix: "N",
              text: <p>On the floor/ground &gt; 2 hours & over 300 lbs</p>,
              recResponse: 204,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Public place{" "}
                  <span className="text-red-500">
                    (street, parking garage, market)
                  </span>
                </p>
              ),
              recResponse: 79,
              priority: 13,
            },
            {
              suffix: "U",
              text: <p>Public place and over 300 lbs</p>,
              recResponse: 204,
              priority: 12,
            },
            {
              suffix: "W",
              text: <p>Patient's weight over 300 lbs</p>,
              recResponse: 204,
              priority: 14,
            },
          ],
        },
        {
          code: "17B02",
          text: (
            <p>
              <b className="font-bold">SERIOUS</b> hemorrhage
            </p>
          ),
          recResponse: 79,
          priority: 2,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accessibility concerns/difficulty</p>,
              recResponse: 204,
              priority: 11,
            },
            {
              suffix: "B",
              text: <p>Accessibility concerns/difficulty and over 300 lbs</p>,
              recResponse: 204,
              priority: 10,
            },
            {
              suffix: "E",
              text: (
                <p>
                  Environmental problems{" "}
                  <span className="text-red-500">(rain, heat, cold)</span>
                </p>
              ),
              recResponse: 79,
              priority: 9,
            },
            {
              suffix: "F",
              text: <p>Environmental problems and over 300 lbs</p>,
              recResponse: 204,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>On the floor/ground &lt; 1 hour</p>,
              recResponse: 79,
              priority: 7,
            },
            {
              suffix: "H",
              text: <p>On the floor/ground &lt; 1 hour & over 300 lbs</p>,
              recResponse: 204,
              priority: 6,
            },
            {
              suffix: "J",
              text: <p>Jumper (suicide attempt)</p>,
              recResponse: 80,
              priority: 1,
            },
            {
              suffix: "K",
              text: <p>On the floor/ground 1-2 hours</p>,
              recResponse: 79,
              priority: 5,
            },
            {
              suffix: "L",
              text: <p>On the floor/ground 1-2 hours & over 300 lbs</p>,
              recResponse: 204,
              priority: 4,
            },
            {
              suffix: "M",
              text: <p>On the floor/ground &gt; 2 hours</p>,
              recResponse: 79,
              priority: 3,
            },
            {
              suffix: "N",
              text: <p>On the floor/ground &gt; 2 hours & over 300 lbs</p>,
              recResponse: 204,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Public place{" "}
                  <span className="text-red-500">
                    (street, parking garage, market)
                  </span>
                </p>
              ),
              recResponse: 79,
              priority: 13,
            },
            {
              suffix: "U",
              text: <p>Public place and over 300 lbs</p>,
              recResponse: 204,
              priority: 12,
            },
            {
              suffix: "W",
              text: <p>Patient's weight over 300 lbs</p>,
              recResponse: 204,
              priority: 14,
            },
          ],
        },
        {
          code: "17B03",
          text: (
            <p>
              Fall <b className="font-bold">down</b>{" "}
              <span className="text-sm">(not on)</span>{" "}
              <b className="font-bold">stairs</b>
            </p>
          ),
          recResponse: 79,
          priority: 3,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accessibility concerns/difficulty</p>,
              recResponse: 204,
              priority: 11,
            },
            {
              suffix: "B",
              text: <p>Accessibility concerns/difficulty and over 300 lbs</p>,
              recResponse: 204,
              priority: 10,
            },
            {
              suffix: "E",
              text: (
                <p>
                  Environmental problems{" "}
                  <span className="text-red-500">(rain, heat, cold)</span>
                </p>
              ),
              recResponse: 79,
              priority: 9,
            },
            {
              suffix: "F",
              text: <p>Environmental problems and over 300 lbs</p>,
              recResponse: 204,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>On the floor/ground &lt; 1 hour</p>,
              recResponse: 79,
              priority: 7,
            },
            {
              suffix: "H",
              text: <p>On the floor/ground &lt; 1 hour & over 300 lbs</p>,
              recResponse: 204,
              priority: 6,
            },
            {
              suffix: "J",
              text: <p>Jumper (suicide attempt)</p>,
              recResponse: 80,
              priority: 1,
            },
            {
              suffix: "K",
              text: <p>On the floor/ground 1-2 hours</p>,
              recResponse: 79,
              priority: 5,
            },
            {
              suffix: "L",
              text: <p>On the floor/ground 1-2 hours & over 300 lbs</p>,
              recResponse: 204,
              priority: 4,
            },
            {
              suffix: "M",
              text: <p>On the floor/ground &gt; 2 hours</p>,
              recResponse: 79,
              priority: 3,
            },
            {
              suffix: "N",
              text: <p>On the floor/ground &gt; 2 hours & over 300 lbs</p>,
              recResponse: 204,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Public place{" "}
                  <span className="text-red-500">
                    (street, parking garage, market)
                  </span>
                </p>
              ),
              recResponse: 79,
              priority: 13,
            },
            {
              suffix: "U",
              text: <p>Public place and over 300 lbs</p>,
              recResponse: 204,
              priority: 12,
            },
            {
              suffix: "W",
              text: <p>Patient's weight over 300 lbs</p>,
              recResponse: 204,
              priority: 14,
            },
          ],
        },
        {
          code: "17B04",
          text: (
            <p>
              <b className="font-bold">Unknown</b> status/
              <b className="font-bold">Other</b> codes{" "}
              <b className="font-bold">not</b> applicable
            </p>
          ),
          recResponse: 79,
          priority: 4,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accessibility concerns/difficulty</p>,
              recResponse: 204,
              priority: 11,
            },
            {
              suffix: "B",
              text: <p>Accessibility concerns/difficulty and over 300 lbs</p>,
              recResponse: 204,
              priority: 10,
            },
            {
              suffix: "E",
              text: (
                <p>
                  Environmental problems{" "}
                  <span className="text-red-500">(rain, heat, cold)</span>
                </p>
              ),
              recResponse: 79,
              priority: 9,
            },
            {
              suffix: "F",
              text: <p>Environmental problems and over 300 lbs</p>,
              recResponse: 204,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>On the floor/ground &lt; 1 hour</p>,
              recResponse: 79,
              priority: 7,
            },
            {
              suffix: "H",
              text: <p>On the floor/ground &lt; 1 hour & over 300 lbs</p>,
              recResponse: 204,
              priority: 6,
            },
            {
              suffix: "J",
              text: <p>Jumper (suicide attempt)</p>,
              recResponse: 80,
              priority: 1,
            },
            {
              suffix: "K",
              text: <p>On the floor/ground 1-2 hours</p>,
              recResponse: 79,
              priority: 5,
            },
            {
              suffix: "L",
              text: <p>On the floor/ground 1-2 hours & over 300 lbs</p>,
              recResponse: 204,
              priority: 4,
            },
            {
              suffix: "M",
              text: <p>On the floor/ground &gt; 2 hours</p>,
              recResponse: 79,
              priority: 3,
            },
            {
              suffix: "N",
              text: <p>On the floor/ground &gt; 2 hours & over 300 lbs</p>,
              recResponse: 204,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Public place{" "}
                  <span className="text-red-500">
                    (street, parking garage, market)
                  </span>
                </p>
              ),
              recResponse: 79,
              priority: 13,
            },
            {
              suffix: "U",
              text: <p>Public place and over 300 lbs</p>,
              recResponse: 204,
              priority: 12,
            },
            {
              suffix: "W",
              text: <p>Patient's weight over 300 lbs</p>,
              recResponse: 204,
              priority: 14,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "17D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 83,
          priority: 0,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accessibility concerns/difficulty</p>,
              recResponse: 205,
              priority: 11,
            },
            {
              suffix: "B",
              text: <p>Accessibility concerns/difficulty and over 300 lbs</p>,
              recResponse: 205,
              priority: 10,
            },
            {
              suffix: "E",
              text: (
                <p>
                  Environmental problems{" "}
                  <span className="text-red-500">(rain, heat, cold)</span>
                </p>
              ),
              recResponse: 83,
              priority: 9,
            },
            {
              suffix: "F",
              text: <p>Environmental problems and over 300 lbs</p>,
              recResponse: 205,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>On the floor/ground &lt; 1 hour</p>,
              recResponse: 83,
              priority: 7,
            },
            {
              suffix: "H",
              text: <p>On the floor/ground &lt; 1 hour & over 300 lbs</p>,
              recResponse: 205,
              priority: 6,
            },
            {
              suffix: "J",
              text: <p>Jumper (suicide attempt)</p>,
              recResponse: 84,
              priority: 1,
            },
            {
              suffix: "K",
              text: <p>On the floor/ground 1-2 hours</p>,
              recResponse: 83,
              priority: 5,
            },
            {
              suffix: "L",
              text: <p>On the floor/ground 1-2 hours & over 300 lbs</p>,
              recResponse: 205,
              priority: 4,
            },
            {
              suffix: "M",
              text: <p>On the floor/ground &gt; 2 hours</p>,
              recResponse: 83,
              priority: 3,
            },
            {
              suffix: "N",
              text: <p>On the floor/ground &gt; 2 hours & over 300 lbs</p>,
              recResponse: 205,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Public place{" "}
                  <span className="text-red-500">
                    (street, parking garage, market)
                  </span>
                </p>
              ),
              recResponse: 83,
              priority: 13,
            },
            {
              suffix: "U",
              text: <p>Public place and over 300 lbs</p>,
              recResponse: 205,
              priority: 12,
            },
            {
              suffix: "W",
              text: <p>Patient's weight over 300 lbs</p>,
              recResponse: 205,
              priority: 14,
            },
          ],
        },
        {
          code: "17D01",
          text: (
            <p>
              <b className="font-bold">EXTREME FALL</b>{" "}
              <span className="text-sm">(&gt;=30ft/10m)</span>
            </p>
          ),
          recResponse: 85,
          priority: 1,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accessibility concerns/difficulty</p>,
              recResponse: 206,
              priority: 11,
            },
            {
              suffix: "B",
              text: <p>Accessibility concerns/difficulty and over 300 lbs</p>,
              recResponse: 206,
              priority: 10,
            },
            {
              suffix: "E",
              text: (
                <p>
                  Environmental problems{" "}
                  <span className="text-red-500">(rain, heat, cold)</span>
                </p>
              ),
              recResponse: 85,
              priority: 9,
            },
            {
              suffix: "F",
              text: <p>Environmental problems and over 300 lbs</p>,
              recResponse: 206,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>On the floor/ground &lt; 1 hour</p>,
              recResponse: 85,
              priority: 7,
            },
            {
              suffix: "H",
              text: <p>On the floor/ground &lt; 1 hour & over 300 lbs</p>,
              recResponse: 206,
              priority: 6,
            },
            {
              suffix: "J",
              text: <p>Jumper (suicide attempt)</p>,
              recResponse: 86,
              priority: 1,
            },
            {
              suffix: "K",
              text: <p>On the floor/ground 1-2 hours</p>,
              recResponse: 85,
              priority: 5,
            },
            {
              suffix: "L",
              text: <p>On the floor/ground 1-2 hours & over 300 lbs</p>,
              recResponse: 206,
              priority: 4,
            },
            {
              suffix: "M",
              text: <p>On the floor/ground &gt; 2 hours</p>,
              recResponse: 85,
              priority: 3,
            },
            {
              suffix: "N",
              text: <p>On the floor/ground &gt; 2 hours & over 300 lbs</p>,
              recResponse: 206,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Public place{" "}
                  <span className="text-red-500">
                    (street, parking garage, market)
                  </span>
                </p>
              ),
              recResponse: 85,
              priority: 13,
            },
            {
              suffix: "U",
              text: <p>Public place and over 300 lbs</p>,
              recResponse: 206,
              priority: 12,
            },
            {
              suffix: "W",
              text: <p>Patient's weight over 300 lbs</p>,
              recResponse: 206,
              priority: 14,
            },
          ],
        },
        {
          code: "17D02",
          text: <p className="font-bold">Arrest</p>,
          recResponse: 87,
          notBreathing: true,
          priority: 2,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accessibility concerns/difficulty</p>,
              recResponse: 87,
              priority: 11,
            },
            {
              suffix: "B",
              text: <p>Accessibility concerns/difficulty and over 300 lbs</p>,
              recResponse: 87,
              priority: 10,
            },
            {
              suffix: "E",
              text: (
                <p>
                  Environmental problems{" "}
                  <span className="text-red-500">(rain, heat, cold)</span>
                </p>
              ),
              recResponse: 87,
              priority: 9,
            },
            {
              suffix: "F",
              text: <p>Environmental problems and over 300 lbs</p>,
              recResponse: 87,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>On the floor/ground &lt; 1 hour</p>,
              recResponse: 87,
              priority: 7,
            },
            {
              suffix: "H",
              text: <p>On the floor/ground &lt; 1 hour & over 300 lbs</p>,
              recResponse: 87,
              priority: 6,
            },
            {
              suffix: "J",
              text: <p>Jumper (suicide attempt)</p>,
              recResponse: 87,
              priority: 1,
            },
            {
              suffix: "K",
              text: <p>On the floor/ground 1-2 hours</p>,
              recResponse: 87,
              priority: 5,
            },
            {
              suffix: "L",
              text: <p>On the floor/ground 1-2 hours & over 300 lbs</p>,
              recResponse: 87,
              priority: 4,
            },
            {
              suffix: "M",
              text: <p>On the floor/ground &gt; 2 hours</p>,
              recResponse: 87,
              priority: 3,
            },
            {
              suffix: "N",
              text: <p>On the floor/ground &gt; 2 hours & over 300 lbs</p>,
              recResponse: 87,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Public place{" "}
                  <span className="text-red-500">
                    (street, parking garage, market)
                  </span>
                </p>
              ),
              recResponse: 87,
              priority: 13,
            },
            {
              suffix: "U",
              text: <p>Public place and over 300 lbs</p>,
              recResponse: 87,
              priority: 12,
            },
            {
              suffix: "W",
              text: <p>Patient's weight over 300 lbs</p>,
              recResponse: 87,
              priority: 14,
            },
          ],
        },
        {
          code: "17D03",
          text: <p className="font-bold">Unconscious</p>,
          recResponse: 85,
          notConscious: true,
          priority: 3,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accessibility concerns/difficulty</p>,
              recResponse: 206,
              priority: 11,
            },
            {
              suffix: "B",
              text: <p>Accessibility concerns/difficulty and over 300 lbs</p>,
              recResponse: 206,
              priority: 10,
            },
            {
              suffix: "E",
              text: (
                <p>
                  Environmental problems{" "}
                  <span className="text-red-500">(rain, heat, cold)</span>
                </p>
              ),
              recResponse: 85,
              priority: 9,
            },
            {
              suffix: "F",
              text: <p>Environmental problems and over 300 lbs</p>,
              recResponse: 206,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>On the floor/ground &lt; 1 hour</p>,
              recResponse: 85,
              priority: 7,
            },
            {
              suffix: "H",
              text: <p>On the floor/ground &lt; 1 hour & over 300 lbs</p>,
              recResponse: 206,
              priority: 6,
            },
            {
              suffix: "J",
              text: <p>Jumper (suicide attempt)</p>,
              recResponse: 86,
              priority: 1,
            },
            {
              suffix: "K",
              text: <p>On the floor/ground 1-2 hours</p>,
              recResponse: 85,
              priority: 5,
            },
            {
              suffix: "L",
              text: <p>On the floor/ground 1-2 hours & over 300 lbs</p>,
              recResponse: 206,
              priority: 4,
            },
            {
              suffix: "M",
              text: <p>On the floor/ground &gt; 2 hours</p>,
              recResponse: 85,
              priority: 3,
            },
            {
              suffix: "N",
              text: <p>On the floor/ground &gt; 2 hours & over 300 lbs</p>,
              recResponse: 206,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Public place{" "}
                  <span className="text-red-500">
                    (street, parking garage, market)
                  </span>
                </p>
              ),
              recResponse: 85,
              priority: 13,
            },
            {
              suffix: "U",
              text: <p>Public place and over 300 lbs</p>,
              recResponse: 206,
              priority: 12,
            },
            {
              suffix: "W",
              text: <p>Patient's weight over 300 lbs</p>,
              recResponse: 206,
              priority: 14,
            },
          ],
        },
        {
          code: "17D04",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 83,
          priority: 4,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accessibility concerns/difficulty</p>,
              recResponse: 205,
              priority: 11,
            },
            {
              suffix: "B",
              text: <p>Accessibility concerns/difficulty and over 300 lbs</p>,
              recResponse: 205,
              priority: 10,
            },
            {
              suffix: "E",
              text: (
                <p>
                  Environmental problems{" "}
                  <span className="text-red-500">(rain, heat, cold)</span>
                </p>
              ),
              recResponse: 83,
              priority: 9,
            },
            {
              suffix: "F",
              text: <p>Environmental problems and over 300 lbs</p>,
              recResponse: 205,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>On the floor/ground &lt; 1 hour</p>,
              recResponse: 83,
              priority: 7,
            },
            {
              suffix: "H",
              text: <p>On the floor/ground &lt; 1 hour & over 300 lbs</p>,
              recResponse: 205,
              priority: 6,
            },
            {
              suffix: "J",
              text: <p>Jumper (suicide attempt)</p>,
              recResponse: 84,
              priority: 1,
            },
            {
              suffix: "K",
              text: <p>On the floor/ground 1-2 hours</p>,
              recResponse: 83,
              priority: 5,
            },
            {
              suffix: "L",
              text: <p>On the floor/ground 1-2 hours & over 300 lbs</p>,
              recResponse: 205,
              priority: 4,
            },
            {
              suffix: "M",
              text: <p>On the floor/ground &gt; 2 hours</p>,
              recResponse: 83,
              priority: 3,
            },
            {
              suffix: "N",
              text: <p>On the floor/ground &gt; 2 hours & over 300 lbs</p>,
              recResponse: 205,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Public place{" "}
                  <span className="text-red-500">
                    (street, parking garage, market)
                  </span>
                </p>
              ),
              recResponse: 83,
              priority: 13,
            },
            {
              suffix: "U",
              text: <p>Public place and over 300 lbs</p>,
              recResponse: 205,
              priority: 12,
            },
            {
              suffix: "W",
              text: <p>Patient's weight over 300 lbs</p>,
              recResponse: 205,
              priority: 14,
            },
          ],
        },
        {
          code: "17D05",
          text: (
            <p>
              <b className="font-bold">Chest/Neck/Head</b> injury{" "}
              <span className="text-sm">
                (with <b className="font-bold">difficulty</b> breathing)
              </span>
            </p>
          ),
          recResponse: 83,
          priority: 5,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accessibility concerns/difficulty</p>,
              recResponse: 205,
              priority: 11,
            },
            {
              suffix: "B",
              text: <p>Accessibility concerns/difficulty and over 300 lbs</p>,
              recResponse: 205,
              priority: 10,
            },
            {
              suffix: "E",
              text: (
                <p>
                  Environmental problems{" "}
                  <span className="text-red-500">(rain, heat, cold)</span>
                </p>
              ),
              recResponse: 83,
              priority: 9,
            },
            {
              suffix: "F",
              text: <p>Environmental problems and over 300 lbs</p>,
              recResponse: 205,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>On the floor/ground &lt; 1 hour</p>,
              recResponse: 83,
              priority: 7,
            },
            {
              suffix: "H",
              text: <p>On the floor/ground &lt; 1 hour & over 300 lbs</p>,
              recResponse: 205,
              priority: 6,
            },
            {
              suffix: "J",
              text: <p>Jumper (suicide attempt)</p>,
              recResponse: 84,
              priority: 1,
            },
            {
              suffix: "K",
              text: <p>On the floor/ground 1-2 hours</p>,
              recResponse: 83,
              priority: 5,
            },
            {
              suffix: "L",
              text: <p>On the floor/ground 1-2 hours & over 300 lbs</p>,
              recResponse: 205,
              priority: 4,
            },
            {
              suffix: "M",
              text: <p>On the floor/ground &gt; 2 hours</p>,
              recResponse: 83,
              priority: 3,
            },
            {
              suffix: "N",
              text: <p>On the floor/ground &gt; 2 hours & over 300 lbs</p>,
              recResponse: 205,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Public place{" "}
                  <span className="text-red-500">
                    (street, parking garage, market)
                  </span>
                </p>
              ),
              recResponse: 83,
              priority: 13,
            },
            {
              suffix: "U",
              text: <p>Public place and over 300 lbs</p>,
              recResponse: 205,
              priority: 12,
            },
            {
              suffix: "W",
              text: <p>Patient's weight over 300 lbs</p>,
              recResponse: 205,
              priority: 14,
            },
          ],
        },
        {
          code: "17D06",
          text: <p className="font-bold">LONG FALL</p>,
          recResponse: 83,
          priority: 6,
          suffixes: [
            {
              suffix: "A",
              text: <p>Accessibility concerns/difficulty</p>,
              recResponse: 205,
              priority: 11,
            },
            {
              suffix: "B",
              text: <p>Accessibility concerns/difficulty and over 300 lbs</p>,
              recResponse: 205,
              priority: 10,
            },
            {
              suffix: "E",
              text: (
                <p>
                  Environmental problems{" "}
                  <span className="text-red-500">(rain, heat, cold)</span>
                </p>
              ),
              recResponse: 83,
              priority: 9,
            },
            {
              suffix: "F",
              text: <p>Environmental problems and over 300 lbs</p>,
              recResponse: 205,
              priority: 8,
            },
            {
              suffix: "G",
              text: <p>On the floor/ground &lt; 1 hour</p>,
              recResponse: 83,
              priority: 7,
            },
            {
              suffix: "H",
              text: <p>On the floor/ground &lt; 1 hour & over 300 lbs</p>,
              recResponse: 205,
              priority: 6,
            },
            {
              suffix: "J",
              text: <p>Jumper (suicide attempt)</p>,
              recResponse: 84,
              priority: 1,
            },
            {
              suffix: "K",
              text: <p>On the floor/ground 1-2 hours</p>,
              recResponse: 83,
              priority: 5,
            },
            {
              suffix: "L",
              text: <p>On the floor/ground 1-2 hours & over 300 lbs</p>,
              recResponse: 205,
              priority: 4,
            },
            {
              suffix: "M",
              text: <p>On the floor/ground &gt; 2 hours</p>,
              recResponse: 83,
              priority: 3,
            },
            {
              suffix: "N",
              text: <p>On the floor/ground &gt; 2 hours & over 300 lbs</p>,
              recResponse: 205,
              priority: 2,
            },
            {
              suffix: "P",
              text: (
                <p>
                  Public place{" "}
                  <span className="text-red-500">
                    (street, parking garage, market)
                  </span>
                </p>
              ),
              recResponse: 83,
              priority: 13,
            },
            {
              suffix: "U",
              text: <p>Public place and over 300 lbs</p>,
              recResponse: 205,
              priority: 12,
            },
            {
              suffix: "W",
              text: <p>Patient's weight over 300 lbs</p>,
              recResponse: 205,
              priority: 14,
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
