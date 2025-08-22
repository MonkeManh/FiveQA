import { IRPUnit } from "@/models/interfaces";

export const BLS: IRPUnit[] = [
  {
    type: "Transport (BLS)",
    quantity: 1,
  },
];

export const ALS: IRPUnit[] = [
  {
    type: "Transport (ALS)",
    quantity: 1,
  },
];

export const ACLS: IRPUnit[] = [
  {
    type: "Transport (ACLS)",
    quantity: 1,
  },
];

export const BLSU: IRPUnit[] = [
  {
    type: "Engine",
    quantity: 1,
  },
  {
    type: "Transport (BLS)",
    quantity: 1,
  },
];

export const ALS1: IRPUnit[] = [
  {
    type: "Engine",
    quantity: 1,
  },
  {
    type: "Transport (ALS)",
    quantity: 1,
  },
];

export const ALS1_HELO: IRPUnit[] = [
  {
    type: "Engine",
    quantity: 1,
  },
  {
    type: "Transport (ALS)",
    quantity: 1,
  },
  {
    type: "Helo",
    quantity: 1,
  },
];

export const ALS2: IRPUnit[] = [
  {
    type: "Engine",
    quantity: 1,
  },
  {
    type: "Transport (ALS)",
    quantity: 1,
  },
  {
    type: "EMS Officer",
    quantity: 1,
  },
];

export const ALS2_PD: IRPUnit[] = [
  {
    type: "Engine",
    quantity: 1,
  },
  {
    type: "Transport (ALS)",
    quantity: 1,
  },
  {
    type: "EMS Officer",
    quantity: 1,
  },
  {
    type: "PD Notify",
    quantity: 1,
  },
];

export const ALS2_HELO: IRPUnit[] = [
  {
    type: "Engine",
    quantity: 1,
  },
  {
    type: "Transport (ALS)",
    quantity: 1,
  },
  {
    type: "EMS Officer",
    quantity: 1,
  },
  {
    type: "Helo",
    quantity: 1,
  },
];

export const E_T: IRPUnit[] = [
  {
    type: "Engine",
    quantity: 1,
  },
  {
    type: "Truck",
    quantity: 1,
  },
];

export const MLTP: IRPUnit[] = [
  {
    type: "Engine",
    quantity: 2,
  },
  {
    type: "Transport (ALS)",
    quantity: 1,
  },
  {
    type: "Transport (BLS)",
    quantity: 1,
  },
  {
    type: "EMS Officer",
    quantity: 1,
  },
];
