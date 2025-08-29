import { ReactNode } from "react";
import { IPatient } from "./IPatient";
import { IEMSCase } from "../../calls/IEMSCase";

export interface IEMSAnswer {
  answer: string;
  answerPriority?: 1 | 2 | 3;
  display?: string;
  answerDisplay?: ReactNode;
  preRenderInstructions?: (
    patient: IPatient,
    answers: IEMSCase["questions"]["list"],
    currentCode: string,
    currentSuffix: string,
    track?: string
  ) => boolean;
  preRenderLogic?: string;
  preRenderDeps?: string[];
  dependency?: (
    patient: IPatient,
    answers: IEMSCase["questions"]["list"],
    currentCode: string,
    currentSuffix: string,
    track?: string
  ) => IDependencyResult | undefined;
  dependencyLogic?: string;
  infoLayout?: ReactNode;
  dependencyDeps?: string[];
  pushCodes?: string[];
  continue?: boolean;
  end?: boolean;
  input?: boolean;
  send?: boolean;
  omit?: boolean;
  setSceneSecure?: boolean;
  gotoProtocol?: number;
  pushPDIs?: string[];
  pushSuffixes?: string[];
}

export interface IDependencyResult {
  pushCodes?: string[];
  pushSuffixes?: string[];
  send?: boolean;
  end?: boolean;
}
