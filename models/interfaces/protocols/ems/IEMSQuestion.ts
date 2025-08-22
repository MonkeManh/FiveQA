import { ReactNode } from "react";
import { IPatient } from "./IPatient";
import { IEMSAnswer } from "./IEMSAnswer";
import { IEMSCase } from "../../calls/IEMSCase";

export interface IEMSQuestion {
  text: ReactNode;
  firstPersonText?: ReactNode;
  questionType: "select";
  preRenderInstructions?: (
    patient: IPatient,
    answers: IEMSCase["questions"]["list"],
    currentCode: string,
    currentSuffix: string,
    track?: string
  ) => boolean;
  preRenderLogic?: string;
  preRenderDeps?: string[];
  answers: IEMSAnswer[];
}
