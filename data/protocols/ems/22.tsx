import { IEMSProtocol } from "@/models/interfaces";

export const INACCESS_ENTRAP: IEMSProtocol = {
  protocol: 22,
  name: "Inaccessible Incident / Other Entrapments (Non-Traffic)",
  shortName: "Inaccessible Incident/Entrap",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: "B" },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "B",
  defaultCode: "22B03",
  defaultPlan: 122,
  availableTracks: [
    { id: 1, name: "Mechanical ENTRAPMENT" },
    { id: 2, name: "Machinery ENTRAPMENT" },
    { id: 3, name: "Other ENTRAPMENT" },
    { id: 4, name: "Trench collapse" },
    { id: 5, name: "Structure collapse" },
    { id: 6, name: "Confined space" },
    { id: 7, name: "Inaccessible terrain" },
    { id: 8, name: "Mudslide" },
    { id: 9, name: "Avalanche" }
  ],
  information: <></>,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "22A01",
          text: (
            <p>
              <b className="font-bold">No</b> longer trapped{" "}
              <span className="text-sm">
                (<b className="font-bold">no</b> injuries)
              </span>
            </p>
          ),
          recResponse: 122,
          priority: 1,
          suffixes: [
            {
              suffix: "A",
              text: (
                <p>
                  Above ground <span className="text-sm">(&gt;=6ft/2m)</span>
                </p>
              ),
              recResponse: 122,
              priority: 3,
            },
            {
              suffix: "B",
              text: (
                <p>
                  Below ground <span className="text-sm">(&gt;=6ft/2m)</span>
                </p>
              ),
              recResponse: 122,
              priority: 3,
            },
            {
              suffix: "M",
              text: <p>Multiple victims</p>,
              recResponse: 122,
              priority: 2,
            },
            {
              suffix: "X",
              text: <p>Both Above ground & Multiple victims</p>,
              recResponse: 122,
              priority: 1,
            },
            {
              suffix: "Y",
              text: <p>Both Below ground & Multiple victims</p>,
              recResponse: 122,
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
          code: "22B00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 123,
          priority: 0,
          suffixes: [
            {
              suffix: "A",
              text: (
                <p>
                  Above ground <span className="text-sm">(&gt;=6ft/2m)</span>
                </p>
              ),
              recResponse: 123,
              priority: 3,
            },
            {
              suffix: "B",
              text: (
                <p>
                  Below ground <span className="text-sm">(&gt;=6ft/2m)</span>
                </p>
              ),
              recResponse: 123,
              priority: 3,
            },
            {
              suffix: "M",
              text: <p>Multiple victims</p>,
              recResponse: 123,
              priority: 2,
            },
            {
              suffix: "X",
              text: <p>Both Above ground & Multiple victims</p>,
              recResponse: 123,
              priority: 1,
            },
            {
              suffix: "Y",
              text: <p>Both Below ground & Multiple victims</p>,
              recResponse: 123,
              priority: 1,
            },
          ],
        },
        {
          code: "22B01",
          text: "No Longer Trapped (Unkn Injs)",
          recResponse: 124,
          priority: 2,
          suffixes: [
            {
              suffix: "A",
              text: (
                <p>
                  Above ground <span className="text-sm">(&gt;=6ft/2m)</span>
                </p>
              ),
              recResponse: 124,
              priority: 3,
            },
            {
              suffix: "B",
              text: (
                <p>
                  Below ground <span className="text-sm">(&gt;=6ft/2m)</span>
                </p>
              ),
              recResponse: 124,
              priority: 3,
            },
            {
              suffix: "M",
              text: <p>Multiple victims</p>,
              recResponse: 124,
              priority: 2,
            },
            {
              suffix: "X",
              text: <p>Both Above ground & Multiple victims</p>,
              recResponse: 124,
              priority: 1,
            },
            {
              suffix: "Y",
              text: <p>Both Below ground & Multiple victims</p>,
              recResponse: 124,
              priority: 1,
            },
          ],
        },
        {
          code: "22B02",
          text: "Peripheral Entrapment Only",
          recResponse: 123,
          priority: 1,
          suffixes: [
            {
              suffix: "A",
              text: (
                <p>
                  Above ground <span className="text-sm">(&gt;=6ft/2m)</span>
                </p>
              ),
              recResponse: 123,
              priority: 3,
            },
            {
              suffix: "B",
              text: (
                <p>
                  Below ground <span className="text-sm">(&gt;=6ft/2m)</span>
                </p>
              ),
              recResponse: 123,
              priority: 3,
            },
            {
              suffix: "M",
              text: <p>Multiple victims</p>,
              recResponse: 123,
              priority: 2,
            },
            {
              suffix: "X",
              text: <p>Both Above ground & Multiple victims</p>,
              recResponse: 123,
              priority: 1,
            },
            {
              suffix: "Y",
              text: <p>Both Below ground & Multiple victims</p>,
              recResponse: 123,
              priority: 1,
            },
          ],
        },
        {
          code: "22B03",
          text: (
            <p>
              <b className="font-bold">Unknown</b> status{" "}
              <span className="text-sm">(investigation)</span>/
              <b className="font-bold">Other</b> codes{" "}
              <b className="font-bold">not</b> applicable
            </p>
          ),
          recResponse: 123,
          priority: 3,
          suffixes: [
            {
              suffix: "A",
              text: (
                <p>
                  Above ground <span className="text-sm">(&gt;=6ft/2m)</span>
                </p>
              ),
              recResponse: 123,
              priority: 3,
            },
            {
              suffix: "B",
              text: (
                <p>
                  Below ground <span className="text-sm">(&gt;=6ft/2m)</span>
                </p>
              ),
              recResponse: 123,
              priority: 3,
            },
            {
              suffix: "M",
              text: <p>Multiple victims</p>,
              recResponse: 123,
              priority: 2,
            },
            {
              suffix: "X",
              text: <p>Both Above ground & Multiple victims</p>,
              recResponse: 123,
              priority: 1,
            },
            {
              suffix: "Y",
              text: <p>Both Below ground & Multiple victims</p>,
              recResponse: 123,
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
          code: "22D00",
          text: (
            <p className="text-blue-500">
              <b className="font-bold">Override</b>
            </p>
          ),
          recResponse: 125,
          priority: 0,
          suffixes: [
            {
              suffix: "A",
              text: (
                <p>
                  Above ground <span className="text-sm">(&gt;=6ft/2m)</span>
                </p>
              ),
              recResponse: 125,
              priority: 3,
            },
            {
              suffix: "B",
              text: (
                <p>
                  Below ground <span className="text-sm">(&gt;=6ft/2m)</span>
                </p>
              ),
              recResponse: 125,
              priority: 3,
            },
            {
              suffix: "M",
              text: <p>Multiple victims</p>,
              recResponse: 125,
              priority: 2,
            },
            {
              suffix: "X",
              text: <p>Both Above ground & Multiple victims</p>,
              recResponse: 125,
              priority: 1,
            },
            {
              suffix: "Y",
              text: <p>Both Below ground & Multiple victims</p>,
              recResponse: 125,
              priority: 1,
            },
          ],
        },
        {
          code: "22D01",
          text: (
            <p className="font-bold">Mechanical/Machinery/Object ENTRAPMENT</p>
          ),
          recResponse: 123,
          priority: 1,
          suffixes: [
            {
              suffix: "A",
              text: (
                <p>
                  Above ground <span className="text-sm">(&gt;=6ft/2m)</span>
                </p>
              ),
              recResponse: 123,
              priority: 3,
            },
            {
              suffix: "B",
              text: (
                <p>
                  Below ground <span className="text-sm">(&gt;=6ft/2m)</span>
                </p>
              ),
              recResponse: 123,
              priority: 3,
            },
            {
              suffix: "M",
              text: <p>Multiple victims</p>,
              recResponse: 123,
              priority: 2,
            },
            {
              suffix: "X",
              text: <p>Both Above ground & Multiple victims</p>,
              recResponse: 123,
              priority: 1,
            },
            {
              suffix: "Y",
              text: <p>Both Below ground & Multiple victims</p>,
              recResponse: 123,
              priority: 1,
            },
          ],
        },
        {
          code: "22D02",
          text: (
            <p>
              <b className="font-bold">Trench</b> collapse
            </p>
          ),
          recResponse: 126,
          priority: 1,
          suffixes: [
            {
              suffix: "A",
              text: (
                <p>
                  Above ground <span className="text-sm">(&gt;=6ft/2m)</span>
                </p>
              ),
              recResponse: 126,
              priority: 3,
            },
            {
              suffix: "B",
              text: (
                <p>
                  Below ground <span className="text-sm">(&gt;=6ft/2m)</span>
                </p>
              ),
              recResponse: 126,
              priority: 3,
            },
            {
              suffix: "M",
              text: <p>Multiple victims</p>,
              recResponse: 126,
              priority: 2,
            },
            {
              suffix: "X",
              text: <p>Both Above ground & Multiple victims</p>,
              recResponse: 126,
              priority: 1,
            },
            {
              suffix: "Y",
              text: <p>Both Below ground & Multiple victims</p>,
              recResponse: 126,
              priority: 1,
            },
          ],
        },
        {
          code: "22D03",
          text: (
            <p>
              <b className="font-bold">Structure</b> collapse
            </p>
          ),
          recResponse: 127,
          priority: 1,
          suffixes: [
            {
              suffix: "A",
              text: (
                <p>
                  Above ground <span className="text-sm">(&gt;=6ft/2m)</span>
                </p>
              ),
              recResponse: 127,
              priority: 3,
            },
            {
              suffix: "B",
              text: (
                <p>
                  Below ground <span className="text-sm">(&gt;=6ft/2m)</span>
                </p>
              ),
              recResponse: 127,
              priority: 3,
            },
            {
              suffix: "M",
              text: <p>Multiple victims</p>,
              recResponse: 127,
              priority: 2,
            },
            {
              suffix: "X",
              text: <p>Both Above ground & Multiple victims</p>,
              recResponse: 127,
              priority: 1,
            },
            {
              suffix: "Y",
              text: <p>Both Below ground & Multiple victims</p>,
              recResponse: 127,
              priority: 1,
            },
          ],
        },
        {
          code: "22D04",
          text: (
            <p>
              <b className="font-bold">Confined</b> space{" "}
              <b className="font-bold">ENTRAPMENT</b>
            </p>
          ),
          recResponse: 128,
          priority: 1,
          suffixes: [
            {
              suffix: "A",
              text: (
                <p>
                  Above ground <span className="text-sm">(&gt;=6ft/2m)</span>
                </p>
              ),
              recResponse: 128,
              priority: 3,
            },
            {
              suffix: "B",
              text: (
                <p>
                  Below ground <span className="text-sm">(&gt;=6ft/2m)</span>
                </p>
              ),
              recResponse: 128,
              priority: 3,
            },
            {
              suffix: "M",
              text: <p>Multiple victims</p>,
              recResponse: 128,
              priority: 2,
            },
            {
              suffix: "X",
              text: <p>Both Above ground & Multiple victims</p>,
              recResponse: 128,
              priority: 1,
            },
            {
              suffix: "Y",
              text: <p>Both Below ground & Multiple victims</p>,
              recResponse: 128,
              priority: 1,
            },
          ],
        },
        {
          code: "22D05",
          text: (
            <p>
              <b className="font-bold">Inaccessible</b> terrain situation
            </p>
          ),
          recResponse: 125,
          priority: 1,
          suffixes: [
            {
              suffix: "A",
              text: (
                <p>
                  Above ground <span className="text-sm">(&gt;=6ft/2m)</span>
                </p>
              ),
              recResponse: 125,
              priority: 3,
            },
            {
              suffix: "B",
              text: (
                <p>
                  Below ground <span className="text-sm">(&gt;=6ft/2m)</span>
                </p>
              ),
              recResponse: 125,
              priority: 3,
            },
            {
              suffix: "M",
              text: <p>Multiple victims</p>,
              recResponse: 125,
              priority: 2,
            },
            {
              suffix: "X",
              text: <p>Both Above ground & Multiple victims</p>,
              recResponse: 125,
              priority: 1,
            },
            {
              suffix: "Y",
              text: <p>Both Below ground & Multiple victims</p>,
              recResponse: 125,
              priority: 1,
            },
          ],
        },
        {
          code: "22D06",
          text: (
            <p className="font-bold">
              Mudslide/Avalanche
            </p>
          ),
          recResponse: 125,
          priority: 1,
          suffixes: [
            {
              suffix: "A",
              text: (
                <p>
                  Above ground <span className="text-sm">(&gt;=6ft/2m)</span>
                </p>
              ),
              recResponse: 125,
              priority: 3,
            },
            {
              suffix: "B",
              text: (
                <p>
                  Below ground <span className="text-sm">(&gt;=6ft/2m)</span>
                </p>
              ),
              recResponse: 125,
              priority: 3,
            },
            {
              suffix: "M",
              text: <p>Multiple victims</p>,
              recResponse: 125,
              priority: 2,
            },
            {
              suffix: "X",
              text: <p>Both Above ground & Multiple victims</p>,
              recResponse: 125,
              priority: 1,
            },
            {
              suffix: "Y",
              text: <p>Both Below ground & Multiple victims</p>,
              recResponse: 125,
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
