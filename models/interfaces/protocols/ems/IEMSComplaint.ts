import { ReactNode } from "react";
import { IProtocolServices } from "../IProtocolServices";
import { IResponsePriorities } from "../IResponsePriorities";
import { IEMSQuestion } from "./IEMSQuestion";
import { IEMSDeterminants } from "./IEMSDeterminants";

export interface IEMSProtocol {
  protocol: number;
  name: string;
  shortName: string;
  description: ReactNode;
  services: IProtocolServices[];
  defaultPriority: IResponsePriorities;
  defaultCode: string;
  defaultPlan: number;
  preSend?: boolean;
  availableTracks?: {
    protocol: number;
    name: string;
  }[];
  questions: IEMSQuestion[];
  information: ReactNode;
  determinants: IEMSDeterminants[];
  pdis: {
    instructions?: Array<{ text: ReactNode }>;
    dls?: Array<{ text: string; goto: string }>;
  };
  endingLogic?: () => void;
}
