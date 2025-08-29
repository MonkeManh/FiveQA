export interface IEMSCase {
  case_entry: {
    page_opened_time: string;
    first_keystroke_time: string;
    caller_statement: string;
    patient: {
      count: number;
      caller_type: "yes" | "no" | "first" | "first-alone" | "fourth" | "unknown" | "";
      age: number;
      age_unit: "year" | "month" | "day" | "unk" | "";
      gender: "male" | "female" | "unknown" | "";
      consciousness: "yes" | "no" | "unknown" | "";
      breathing: "yes" | "no" | "uncertain" | "unknown" | "agonal/ineffective" | "";
    };
    chief_complaint: number;
    track?: string;
    initial_complaint: number;
    case_entry_completed_time: string;
  };
  questions: {
    key_questions_start_time: string;
    list: Array<{
      number: number;
      adjusted_number: number;
      text: string;
      rawText: string;
      answer: string;
      answer_display?: string;
      answer_list_display: string;
      priority: 1 | 2 | 3 | undefined,
      omit: boolean;
      timestamp: string;
    }>;
    is_completed: boolean;
    key_questions_completed_time: string;
  };
  codes: {
    code_sent_at_time: string;
    selectable_codes: string[];
    selectable_suffixes: string[];
    selected_code: string;
    selected_suffix: string;
  };
  dispatch: {
    scene_status: "secure" | "not secure" | string;
    channel:
      | "statewide dispatch"
      | "los santos dispatch"
      | "blaine county dispatch"
      | "tac 1"
      | "tac 2"
      | "fire dispatch"
      | "fire tac 1"
      | "fire tac 2"
      | "fire tac 3";
    staging_location: string;
    units_assigned: string[];
    dispatch_time: string;
    summary: string;
  };
  pdi: {
    pdi_start_time: string;
    has_completed_disconnect: boolean;
    pdi_completed_time: string;
  };
  case_stage: "entry" | "kq" | "dispatch" | "pdi"
  case_completed_time: string;
}
