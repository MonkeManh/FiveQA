import { IEMSCase } from "./IEMSCase";

export interface ISavedNewCall {
  case_entry: {
    location: string;
    apt_unit?: string;
    city: string;
    municp: string;
    loc_name: string;
    notes: string;
    cross_streets: string;
    caller_number: string;
    caller_name: string;
    isLocalCaller: boolean;
    isTransfer: boolean;
    isTestCase: boolean;
    service: string;
    page_opened_time: Date;
    first_keystroke_time: Date;
    call_created_time: Date;
  };
  run_number: string;
  ems_case?: IEMSCase
}
