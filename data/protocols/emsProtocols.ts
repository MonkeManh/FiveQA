import { IEMSProtocol } from "@/models/interfaces";
import { ABDO_PN } from "./ems/1";
import { ALLERGIES } from "./ems/2";
import { ANIMAL_BITE } from "./ems/3";
import { ASSAULT } from "./ems/4";

export function getEMSProtocols() {
  return emsProtocols.map((c) => ({
    value: c.protocol,
    label: c.name,
    subOptions: c.availableTracks?.map((t) => ({
      value: t.protocol,
      label: c.name,
    })),
  }));
}

export const emsProtocols: IEMSProtocol[] = [
  ABDO_PN,
  ALLERGIES,
  ANIMAL_BITE,
  ASSAULT,
];
