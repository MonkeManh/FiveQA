import { IEMSProtocol } from "@/models/interfaces";

export const HEADACHE: IEMSProtocol = {
  protocol: 18,
  name: "Headache",
  shortName: "Headache",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "C" },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "B",
  defaultCode: "18B01",
  defaultPlan: 88,
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "18A01",
          text: (
            <p>
              Breathing <b className="font-bold">Normally</b>
            </p>
          ),
          recResponse: 88,
          priority: 1,
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "18B00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 89,
          priority: 0,
        },
        {
          code: "18B01",
          text: (
            <p>
              <b className="font-bold">Unknown</b> status/
              <b className="font-bold">Other</b> codes{" "}
              <b className="font-bold">not</b> applicable
            </p>
          ),
          recResponse: 89,
          priority: 1,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "18C00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 90,
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
              recResponse: 90,
              priority: 7,
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
              recResponse: 90,
              priority: 8,
            },
            {
              suffix: "E",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 90,
              priority: 9,
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
              recResponse: 90,
              priority: 4,
            },
            {
              suffix: "G",
              text: <p><b className="font-bold">Greater</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 90,
              priority: 15,
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
              recResponse: 90,
              priority: 5,
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 90,
              priority: 6,
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
              priority: 1,
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
              priority: 2,
            },
            {
              suffix: "L",
              text: <p><b className="font-bold">Less</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 90,
              priority: 13,
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
              priority: 3,
            },
            {
              suffix: "U",
              text: <p><b className="font-bold">Unknown</b> (when the symptoms started)</p>,
              recResponse: 90,
              priority: 15,
            },
            {
              suffix: "X",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Less</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 90,
              priority: 10,
            },
            {
              suffix: "Y",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Greater</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 90,
              priority: 11,
            },
            {
              suffix: "Z",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Unknown</b> time frame)</p>,
              recResponse: 90,
              priority: 12,
            },
          ],
        },
        {
          code: "18C01",
          text: (
            <p>
              <b className="font-bold">Not</b> alert
            </p>
          ),
          recResponse: 92,
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
              recResponse: 92,
              priority: 7,
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
              recResponse: 92,
              priority: 8,
            },
            {
              suffix: "E",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 92,
              priority: 9,
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
              recResponse: 92,
              priority: 4,
            },
            {
              suffix: "G",
              text: <p><b className="font-bold">Greater</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 92,
              priority: 15,
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
              recResponse: 92,
              priority: 5,
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 92,
              priority: 6,
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
              priority: 1,
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
              priority: 2,
            },
            {
              suffix: "L",
              text: <p><b className="font-bold">Less</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 92,
              priority: 13,
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
              priority: 3,
            },
            {
              suffix: "U",
              text: <p><b className="font-bold">Unknown</b> (when the symptoms started)</p>,
              recResponse: 92,
              priority: 14,
            },
            {
              suffix: "X",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Less</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 92,
              priority: 10,
            },
            {
              suffix: "Y",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Greater</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 92,
              priority: 11,
            },
            {
              suffix: "Z",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Unknown</b> time frame)</p>,
              recResponse: 92,
              priority: 12,
            },
          ],
        },
        {
          code: "18C02",
          text: (
            <p>
              <b className="font-bold">Abnormal</b> breathing
            </p>
          ),
          recResponse: 93,
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
              recResponse: 93,
              priority: 7,
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
              recResponse: 93,
              priority: 8,
            },
            {
              suffix: "E",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 93,
              priority: 9,
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
              recResponse: 93,
              priority: 4,
            },
            {
              suffix: "G",
              text: <p><b className="font-bold">Greater</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 93,
              priority: 15,
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
              recResponse: 93,
              priority: 5,
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 93,
              priority: 6,
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
              priority: 1,
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
              priority: 2,
            },
            {
              suffix: "L",
              text: <p><b className="font-bold">Less</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 93,
              priority: 13,
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
              priority: 3,
            },
            {
              suffix: "U",
              text: <p><b className="font-bold">Unknown</b> (when the symptoms started)</p>,
              recResponse: 93,
              priority: 14,
            },
            {
              suffix: "X",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Less</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 93,
              priority: 10,
            },
            {
              suffix: "Y",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Greater</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 93,
              priority: 11,
            },
            {
              suffix: "Z",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Unknown</b> time frame)</p>,
              recResponse: 93,
              priority: 12,
            },
          ],
        },
        {
          code: "18C03",
          text: (
            <p>
              <b className="font-bold">Speech</b> problems*
            </p>
          ),
          recResponse: 89,
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
              recResponse: 89,
              priority: 7,
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
              recResponse: 89,
              priority: 8,
            },
            {
              suffix: "E",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 89,
              priority: 9,
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
              recResponse: 89,
              priority: 4,
            },
            {
              suffix: "G",
              text: <p><b className="font-bold">Greater</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 89,
              priority: 15,
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
              recResponse: 89,
              priority: 5,
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 89,
              priority: 6,
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
              priority: 1,
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
              priority: 2,
            },
            {
              suffix: "L",
              text: <p><b className="font-bold">Less</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 89,
              priority: 13,
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
              priority: 3,
            },
            {
              suffix: "U",
              text: <p><b className="font-bold">Unknown</b> (when the symptoms started)</p>,
              recResponse: 89,
              priority: 14,
            },
            {
              suffix: "X",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Less</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 89,
              priority: 10,
            },
            {
              suffix: "Y",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Greater</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 89,
              priority: 11,
            },
            {
              suffix: "Z",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Unknown</b> time frame)</p>,
              recResponse: 89,
              priority: 12,
            },
          ],
        },
        {
          code: "18C04",
          text: (
            <p>
              <b className="font-bold">Sudden</b> onset of{" "}
              <b className="font-bold">severe</b> pain
            </p>
          ),
          recResponse: 89,
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
              recResponse: 89,
              priority: 7,
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
              recResponse: 89,
              priority: 8,
            },
            {
              suffix: "E",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 89,
              priority: 9,
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
              recResponse: 89,
              priority: 4,
            },
            {
              suffix: "G",
              text: <p><b className="font-bold">Greater</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 89,
              priority: 15,
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
              recResponse: 89,
              priority: 5,
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 89,
              priority: 6,
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
              priority: 1,
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
              priority: 2,
            },
            {
              suffix: "L",
              text: <p><b className="font-bold">Less</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 89,
              priority: 13,
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
              priority: 3,
            },
            {
              suffix: "U",
              text: <p><b className="font-bold">Unknown</b> (when the symptoms started)</p>,
              recResponse: 89,
              priority: 14,
            },
            {
              suffix: "X",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Less</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 89,
              priority: 10,
            },
            {
              suffix: "Y",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Greater</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 89,
              priority: 11,
            },
            {
              suffix: "Z",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Unknown</b> time frame)</p>,
              recResponse: 89,
              priority: 12,
            },
          ],
        },
        {
          code: "18C05",
          text: <p className="font-bold">Numbness*</p>,
          recResponse: 89,
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
              recResponse: 89,
              priority: 7,
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
              recResponse: 89,
              priority: 8,
            },
            {
              suffix: "E",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 89,
              priority: 9,
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
              recResponse: 89,
              priority: 4,
            },
            {
              suffix: "G",
              text: <p><b className="font-bold">Greater</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 89,
              priority: 15,
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
              recResponse: 89,
              priority: 5,
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 89,
              priority: 6,
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
              priority: 1,
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
              priority: 2,
            },
            {
              suffix: "L",
              text: <p><b className="font-bold">Less</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 89,
              priority: 13,
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
              priority: 3,
            },
            {
              suffix: "U",
              text: <p><b className="font-bold">Unknown</b> (when the symptoms started)</p>,
              recResponse: 89,
              priority: 14,
            },
            {
              suffix: "X",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Less</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 89,
              priority: 10,
            },
            {
              suffix: "Y",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Greater</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 89,
              priority: 11,
            },
            {
              suffix: "Z",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Unknown</b> time frame)</p>,
              recResponse: 89,
              priority: 12,
            },
          ],
        },
        {
          code: "18C06",
          text: <p className="font-bold">Paralysis</p>,
          recResponse: 90,
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
              recResponse: 90,
              priority: 7,
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
              recResponse: 90,
              priority: 8,
            },
            {
              suffix: "E",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 90,
              priority: 9,
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
              recResponse: 90,
              priority: 4,
            },
            {
              suffix: "G",
              text: <p><b className="font-bold">Greater</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 90,
              priority: 15,
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
              recResponse: 90,
              priority: 5,
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 90,
              priority: 6,
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
              priority: 1,
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
              priority: 2,
            },
            {
              suffix: "L",
              text: <p><b className="font-bold">Less</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 90,
              priority: 13,
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
              priority: 3,
            },
            {
              suffix: "U",
              text: <p><b className="font-bold">Unknown</b> (when the symptoms started)</p>,
              recResponse: 90,
              priority: 14,
            },
            {
              suffix: "X",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Less</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 90,
              priority: 10,
            },
            {
              suffix: "Y",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Greater</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 90,
              priority: 11,
            },
            {
              suffix: "Z",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Unknown</b> time frame)</p>,
              recResponse: 90,
              priority: 12,
            },
          ],
        },
        {
          code: "18C07",
          text: (
            <p>
              <b className="font-bold">Change in behavior</b>{" "}
              <span className="text-sm">(&lt;= 3hrs)</span>*
            </p>
          ),
          recResponse: 92,
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
              recResponse: 92,
              priority: 7,
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
              recResponse: 92,
              priority: 8,
            },
            {
              suffix: "E",
              text: (
                <p>
                  <b className="font-bold">PARTIAL</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 92,
              priority: 9,
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
              recResponse: 92,
              priority: 4,
            },
            {
              suffix: "G",
              text: <p><b className="font-bold">Greater</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 92,
              priority: 15,
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
              recResponse: 92,
              priority: 5,
            },
            {
              suffix: "I",
              text: (
                <p>
                  <b className="font-bold">STRONG</b> evidence (
                  <b className="font-bold">Unknown</b> time frame)
                </p>
              ),
              recResponse: 92,
              priority: 6,
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
              priority: 1,
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
              priority: 2,
            },
            {
              suffix: "L",
              text: <p><b className="font-bold">Less</b> than <b className="text-blue-400 font-bold">T</b> hours (since the symptoms started)</p>,
              recResponse: 92,
              priority: 13,
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
              priority: 3,
            },
            {
              suffix: "U",
              text: <p><b className="font-bold">Unknown</b> (when the symptoms started)</p>,
              recResponse: 92,
              priority: 15,
            },
            {
              suffix: "X",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Less</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 92,
              priority: 10,
            },
            {
              suffix: "Y",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Greater</b> than <span className="text-blue-400 font-bold">T</span> hrs)</p>,
              recResponse: 92,
              priority: 11,
            },
            {
              suffix: "Z",
              text: <p><b className="font-bold">No</b> test evidence (<b className="font-bold">Unknown</b> time frame)</p>,
              recResponse: 92,
              priority: 12,
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
