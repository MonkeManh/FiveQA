import { IEMSProtocol } from "@/models/interfaces";

export const CRASH_NOTI: IEMSProtocol = {
  protocol: 34,
  name: "Automatic Crash Notification (ACN)",
  shortName: "Crash Notification",
  description: <></>,
  services: [
    { name: "EMS", priority: "B" },
    { name: "Fire", priority: "B" },
    { name: "Police", priority: true },
  ],
  defaultPriority: "B",
  defaultCode: "",
  defaultPlan: 0,
  information: <></>,
  questions: [],
  determinants: [],
  pdis: {
    instructions: [],
    dls: [],
  },
};
