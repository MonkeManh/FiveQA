import { IEMSProtocol } from "@/models/interfaces";

export const STROKE: IEMSProtocol = {
  protocol: 28,
  name: "Stroke (CVA) / Transient Ischemic Attack (TIA)",
  shortName: "Stroke",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "C" },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "C",
  defaultCode: "28C12",
  defaultPlan: 167,
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "28A01",
          text: <p>Breathing <b className="font-bold">normally</b> &lt; 35</p>,
          recResponse: 167,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 7
            },
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 8
            },
            {
              suffix: "E",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 167,
              priority: 9
            },
            {
              suffix: "F",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 4
            },
            {
              suffix: "G",
              text: <p><b className="font-bold">Greater</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 167,
              priority: 15
            },
            {
              suffix: "H",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 5
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 167,
              priority: 6
            },
            {
              suffix: "J",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 1
            },
            {
              suffix: "K",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 2
            },
            {
              suffix: "L",
              text: <p><b className="font-bold">Less</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 167,
              priority: 13
            },
            {
              suffix: "M",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 3
            },
            {
              suffix: "U",
              text: <p><b className="font-bold">Unknown</b> (when the symptoms started)</p>,
              recResponse: 167,
              priority: 15
            },
            {
              suffix: "X",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Less</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 167,
              priority: 10
            },
            {
              suffix: "Y",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Greater</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 167,
              priority: 11
            },
            {
              suffix: "Z",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Unknown</b> time frame)</p>,
              recResponse: 167,
              priority: 12
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "28C00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 91,
          priority: 0,
          suffixes: [
            {
              suffix: "C",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 7
            },
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 8
            },
            {
              suffix: "E",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 9
            },
            {
              suffix: "F",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 4
            },
            {
              suffix: "G",
              text: <p><b className="font-bold">Greater</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 91,
              priority: 15
            },
            {
              suffix: "H",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 5
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 6
            },
            {
              suffix: "J",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 1
            },
            {
              suffix: "K",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 2
            },
            {
              suffix: "L",
              text: <p><b className="font-bold">Less</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 91,
              priority: 13
            },
            {
              suffix: "M",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 3
            },
            {
              suffix: "U",
              text: <p><b className="font-bold">Unknown</b> (when the symptoms started)</p>,
              recResponse: 91,
              priority: 15
            },
            {
              suffix: "X",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Less</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 91,
              priority: 10
            },
            {
              suffix: "Y",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Greater</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 91,
              priority: 11
            },
            {
              suffix: "Z",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Unknown</b> time frame)</p>,
              recResponse: 91,
              priority: 12
            },
          ],
        },
        {
          code: "28C01",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 91,
          priority: 1,
          suffixes: [
            {
              suffix: "C",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 7
            },
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 8
            },
            {
              suffix: "E",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 9
            },
            {
              suffix: "F",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 4
            },
            {
              suffix: "G",
              text: <p><b className="font-bold">Greater</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 91,
              priority: 15
            },
            {
              suffix: "H",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 5
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 6
            },
            {
              suffix: "J",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 1
            },
            {
              suffix: "K",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 2
            },
            {
              suffix: "L",
              text: <p><b className="font-bold">Less</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 91,
              priority: 13
            },
            {
              suffix: "M",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 3
            },
            {
              suffix: "U",
              text: <p><b className="font-bold">Unknown</b> (when the symptoms started)</p>,
              recResponse: 91,
              priority: 15
            },
            {
              suffix: "X",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Less</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 91,
              priority: 10
            },
            {
              suffix: "Y",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Greater</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 91,
              priority: 11
            },
            {
              suffix: "Z",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Unknown</b> time frame)</p>,
              recResponse: 91,
              priority: 12
            },
          ],
        },
        {
          code: "28C02",
          text: (
            <p>
              <b className="font-bold">Abnormal</b> breathing
            </p>
          ),
          recResponse: 91,
          priority: 2,
          suffixes: [
            {
              suffix: "C",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 7
            },
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 8
            },
            {
              suffix: "E",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 9
            },
            {
              suffix: "F",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 4
            },
            {
              suffix: "G",
              text: <p><b className="font-bold">Greater</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 91,
              priority: 15
            },
            {
              suffix: "H",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 5
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 6
            },
            {
              suffix: "J",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 1
            },
            {
              suffix: "K",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 2
            },
            {
              suffix: "L",
              text: <p><b className="font-bold">Less</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 91,
              priority: 13
            },
            {
              suffix: "M",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 3
            },
            {
              suffix: "U",
              text: <p><b className="font-bold">Unknown</b> (when the symptoms started)</p>,
              recResponse: 91,
              priority: 15
            },
            {
              suffix: "X",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Less</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 91,
              priority: 10
            },
            {
              suffix: "Y",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Greater</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 91,
              priority: 11
            },
            {
              suffix: "Z",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Unknown</b> time frame)</p>,
              recResponse: 91,
              priority: 12
            },
          ],
        },
        {
          code: "28C03",
          text: (
            <p>
              Sudden <b className="font-bold">speech</b> problems
            </p>
          ),
          recResponse: 91,
          priority: 3,
          suffixes: [
            {
              suffix: "C",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 7
            },
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 8
            },
            {
              suffix: "E",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 9
            },
            {
              suffix: "F",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 4
            },
            {
              suffix: "G",
              text: <p><b className="font-bold">Greater</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 91,
              priority: 15
            },
            {
              suffix: "H",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 5
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 6
            },
            {
              suffix: "J",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 1
            },
            {
              suffix: "K",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 2
            },
            {
              suffix: "L",
              text: <p><b className="font-bold">Less</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 91,
              priority: 13
            },
            {
              suffix: "M",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 3
            },
            {
              suffix: "U",
              text: <p><b className="font-bold">Unknown</b> (when the symptoms started)</p>,
              recResponse: 91,
              priority: 15
            },
            {
              suffix: "X",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Less</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 91,
              priority: 10
            },
            {
              suffix: "Y",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Greater</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 91,
              priority: 11
            },
            {
              suffix: "Z",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Unknown</b> time frame)</p>,
              recResponse: 91,
              priority: 12
            },
          ],
        },
        {
          code: "28C04",
          text: <p>Sudden <b className="font-bold">weakness</b> or <b className="font-bold">numbness</b> <span className="text-sm">(one side)</span></p>,
          recResponse: 91,
          priority: 3,
          suffixes: [
            {
              suffix: "C",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 7
            },
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 8
            },
            {
              suffix: "E",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 9
            },
            {
              suffix: "F",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 4
            },
            {
              suffix: "G",
              text: <p><b className="font-bold">Greater</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 91,
              priority: 15
            },
            {
              suffix: "H",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 5
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 6
            },
            {
              suffix: "J",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 1
            },
            {
              suffix: "K",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 2
            },
            {
              suffix: "L",
              text: <p><b className="font-bold">Less</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 91,
              priority: 13
            },
            {
              suffix: "M",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 3
            },
            {
              suffix: "U",
              text: <p><b className="font-bold">Unknown</b> (when the symptoms started)</p>,
              recResponse: 91,
              priority: 15
            },
            {
              suffix: "X",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Less</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 91,
              priority: 10
            },
            {
              suffix: "Y",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Greater</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 91,
              priority: 11
            },
            {
              suffix: "Z",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Unknown</b> time frame)</p>,
              recResponse: 91,
              priority: 12
            },
          ],
        },
        {
          code: "28C05",
          text: <p>Sudden <b className="font-bold">paralysis</b> or <b className="font-bold">facial droop</b> <span className="text-sm">(one side)</span></p>,
          recResponse: 91,
          priority: 3,
          suffixes: [
            {
              suffix: "C",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 7
            },
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 8
            },
            {
              suffix: "E",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 9
            },
            {
              suffix: "F",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 4
            },
            {
              suffix: "G",
              text: <p><b className="font-bold">Greater</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 91,
              priority: 15
            },
            {
              suffix: "H",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 5
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 6
            },
            {
              suffix: "J",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 1
            },
            {
              suffix: "K",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 2
            },
            {
              suffix: "L",
              text: <p><b className="font-bold">Less</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 91,
              priority: 13
            },
            {
              suffix: "M",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 3
            },
            {
              suffix: "U",
              text: <p><b className="font-bold">Unknown</b> (when the symptoms started)</p>,
              recResponse: 91,
              priority: 15
            },
            {
              suffix: "X",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Less</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 91,
              priority: 10
            },
            {
              suffix: "Y",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Greater</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 91,
              priority: 11
            },
            {
              suffix: "Z",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Unknown</b> time frame)</p>,
              recResponse: 91,
              priority: 12
            },
          ],
        },
        {
          code: "28C06",
          text: <p>Sudden <b className="font-bold">loss of balance</b> or <b className="font-bold">coordination</b></p>,
          recResponse: 167,
          priority: 3,
          suffixes: [
            {
              suffix: "C",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 7
            },
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 8
            },
            {
              suffix: "E",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 167,
              priority: 9
            },
            {
              suffix: "F",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 4
            },
            {
              suffix: "G",
              text: <p><b className="font-bold">Greater</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 167,
              priority: 15
            },
            {
              suffix: "H",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 5
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 167,
              priority: 6
            },
            {
              suffix: "J",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 1
            },
            {
              suffix: "K",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 2
            },
            {
              suffix: "L",
              text: <p><b className="font-bold">Less</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 167,
              priority: 13
            },
            {
              suffix: "M",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 3
            },
            {
              suffix: "U",
              text: <p><b className="font-bold">Unknown</b> (when the symptoms started)</p>,
              recResponse: 167,
              priority: 15
            },
            {
              suffix: "X",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Less</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 167,
              priority: 10
            },
            {
              suffix: "Y",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Greater</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 167,
              priority: 11
            },
            {
              suffix: "Z",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Unknown</b> time frame)</p>,
              recResponse: 167,
              priority: 12
            },
          ],
        },
        {
          code: "28C07",
          text: <p>Sudden <b className="font-bold">vision</b> problems</p>,
          recResponse: 167,
          priority: 3,
          suffixes: [
            {
              suffix: "C",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 7
            },
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 8
            },
            {
              suffix: "E",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 167,
              priority: 9
            },
            {
              suffix: "F",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 4
            },
            {
              suffix: "G",
              text: <p><b className="font-bold">Greater</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 167,
              priority: 15
            },
            {
              suffix: "H",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 5
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 167,
              priority: 6
            },
            {
              suffix: "J",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 1
            },
            {
              suffix: "K",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 2
            },
            {
              suffix: "L",
              text: <p><b className="font-bold">Less</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 167,
              priority: 13
            },
            {
              suffix: "M",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 3
            },
            {
              suffix: "U",
              text: <p><b className="font-bold">Unknown</b> (when the symptoms started)</p>,
              recResponse: 167,
              priority: 15
            },
            {
              suffix: "X",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Less</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 167,
              priority: 10
            },
            {
              suffix: "Y",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Greater</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 167,
              priority: 11
            },
            {
              suffix: "Z",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Unknown</b> time frame)</p>,
              recResponse: 167,
              priority: 12
            },
          ],
        },
        {
          code: "28C08",
          text: <p>Sudden onset of <b className="font-bold">severe headache</b></p>,
          recResponse: 167,
          priority: 3,
          suffixes: [
            {
              suffix: "C",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 7
            },
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 8
            },
            {
              suffix: "E",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 167,
              priority: 9
            },
            {
              suffix: "F",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 4
            },
            {
              suffix: "G",
              text: <p><b className="font-bold">Greater</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 167,
              priority: 15
            },
            {
              suffix: "H",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 5
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 167,
              priority: 6
            },
            {
              suffix: "J",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 1
            },
            {
              suffix: "K",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 2
            },
            {
              suffix: "L",
              text: <p><b className="font-bold">Less</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 167,
              priority: 13
            },
            {
              suffix: "M",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 3
            },
            {
              suffix: "U",
              text: <p><b className="font-bold">Unknown</b> (when the symptoms started)</p>,
              recResponse: 167,
              priority: 15
            },
            {
              suffix: "X",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Less</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 167,
              priority: 10
            },
            {
              suffix: "Y",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Greater</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 167,
              priority: 11
            },
            {
              suffix: "Z",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Unknown</b> time frame)</p>,
              recResponse: 167,
              priority: 12
            },
          ],
        },
        {
          code: "28C09",
          text: <p><b className="font-bold">STROKE</b> history</p>,
          recResponse: 167,
          priority: 4,
          suffixes: [
            {
              suffix: "C",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 7
            },
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 8
            },
            {
              suffix: "E",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 167,
              priority: 9
            },
            {
              suffix: "F",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 4
            },
            {
              suffix: "G",
              text: <p><b className="font-bold">Greater</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 167,
              priority: 15
            },
            {
              suffix: "H",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 5
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 167,
              priority: 6
            },
            {
              suffix: "J",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 1
            },
            {
              suffix: "K",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 2
            },
            {
              suffix: "L",
              text: <p><b className="font-bold">Less</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 167,
              priority: 13
            },
            {
              suffix: "M",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 3
            },
            {
              suffix: "U",
              text: <p><b className="font-bold">Unknown</b> (when the symptoms started)</p>,
              recResponse: 167,
              priority: 15
            },
            {
              suffix: "X",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Less</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 167,
              priority: 10
            },
            {
              suffix: "Y",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Greater</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 167,
              priority: 11
            },
            {
              suffix: "Z",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Unknown</b> time frame)</p>,
              recResponse: 167,
              priority: 12
            },
          ],
        },
        {
          code: "28C10",
          text: <p><b className="font-bold">TIA</b> <span className="text-sm">(mini-stroke)</span> history</p>,
          recResponse: 167,
          priority: 4,
          suffixes: [
            {
              suffix: "C",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 7
            },
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 8
            },
            {
              suffix: "E",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 167,
              priority: 9
            },
            {
              suffix: "F",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 4
            },
            {
              suffix: "G",
              text: <p><b className="font-bold">Greater</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 167,
              priority: 15
            },
            {
              suffix: "H",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 5
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 167,
              priority: 6
            },
            {
              suffix: "J",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 1
            },
            {
              suffix: "K",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 2
            },
            {
              suffix: "L",
              text: <p><b className="font-bold">Less</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 167,
              priority: 13
            },
            {
              suffix: "M",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 3
            },
            {
              suffix: "U",
              text: <p><b className="font-bold">Unknown</b> (when the symptoms started)</p>,
              recResponse: 167,
              priority: 15
            },
            {
              suffix: "X",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Less</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 167,
              priority: 10
            },
            {
              suffix: "Y",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Greater</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 167,
              priority: 11
            },
            {
              suffix: "Z",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Unknown</b> time frame)</p>,
              recResponse: 167,
              priority: 12
            },
          ],
        },
        {
          code: "28C11",
          text: <p>Breathing <b className="font-bold">normally</b> &gt;=35</p>,
          recResponse: 167,
          priority: 5,
          suffixes: [
            {
              suffix: "C",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 7
            },
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 8
            },
            {
              suffix: "E",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 167,
              priority: 9
            },
            {
              suffix: "F",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 4
            },
            {
              suffix: "G",
              text: <p><b className="font-bold">Greater</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 167,
              priority: 15
            },
            {
              suffix: "H",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 5
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 167,
              priority: 6
            },
            {
              suffix: "J",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 1
            },
            {
              suffix: "K",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 2
            },
            {
              suffix: "L",
              text: <p><b className="font-bold">Less</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 167,
              priority: 13
            },
            {
              suffix: "M",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 3
            },
            {
              suffix: "U",
              text: <p><b className="font-bold">Unknown</b> (when the symptoms started)</p>,
              recResponse: 167,
              priority: 15
            },
            {
              suffix: "X",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Less</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 167,
              priority: 10
            },
            {
              suffix: "Y",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Greater</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 167,
              priority: 11
            },
            {
              suffix: "Z",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Unknown</b> time frame)</p>,
              recResponse: 167,
              priority: 12
            },
          ],
        },
        {
          code: "28C12",
          text: (
            <p>
              <b className="font-bold">Unknown</b> status/
              <b className="font-bold">Other</b> codes{" "}
              <b className="font-bold">not</b> applicable
            </p>
          ),
          recResponse: 167,
          priority: 6,
          suffixes: [
            {
              suffix: "C",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 7
            },
            {
              suffix: "D",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 8
            },
            {
              suffix: "E",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 167,
              priority: 9
            },
            {
              suffix: "F",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 4
            },
            {
              suffix: "G",
              text: <p><b className="font-bold">Greater</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 167,
              priority: 15
            },
            {
              suffix: "H",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 167,
              priority: 5
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 167,
              priority: 6
            },
            {
              suffix: "J",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Less</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 1
            },
            {
              suffix: "K",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Greater</b> than{" "}
                  <span className="text-blue-400 font-bold">T</span> hrs)
                </p>
              ),
              recResponse: 91,
              priority: 2
            },
            {
              suffix: "L",
              text: <p><b className="font-bold">Less</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 167,
              priority: 13
            },
            {
              suffix: "M",
              text: (
                <p>
                  <b className="font-bold">CLEAR</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 91,
              priority: 3
            },
            {
              suffix: "U",
              text: <p><b className="font-bold">Unknown</b> (when the symptoms started)</p>,
              recResponse: 167,
              priority: 15
            },
            {
              suffix: "X",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Less</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 167,
              priority: 10
            },
            {
              suffix: "Y",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Greater</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 167,
              priority: 11
            },
            {
              suffix: "Z",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Unknown</b> time frame)</p>,
              recResponse: 167,
              priority: 12
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
