export interface IPatient {
    count: number;
    caller_type: "yes" | "no" | "first" | "first-alone" | "fourth" | "unknown" | "";
    age: number;
    age_unit: "year" | "month" | "day" | "unk" | "";
    gender: "male" | "female" | "unknown" | "";
    consciousness: "yes" | "no" | "unknown" | "";
    breathing: "" | "yes" | "no" | "uncertain" | "unknown" | "agonal/ineffective";
}