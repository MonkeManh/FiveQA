import { ReactNode } from "react";
import { IResponsePriorities } from "../IResponsePriorities";

export interface IEMSDeterminants {
  priority: IResponsePriorities;
  codes: IEMSCodes[];
}

export interface IEMSCodes {
  code: string;
  text: ReactNode;
  recResponse: number;
  notBreathing?: boolean;
  uncertainBreathing?: boolean;
  agonalBreathing?: boolean;
  notConscious?: boolean;
  multPatient?: boolean;
  priority: number;
  suffixes?: {
    suffix: string;
    text: ReactNode;
    recResponse?: number;
    priority: number;
  }[];
}
