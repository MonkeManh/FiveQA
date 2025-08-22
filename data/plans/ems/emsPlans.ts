import { IEMSResponsePlan } from "@/models/interfaces";
import {
  ACLS,
  ALS,
  ALS1,
  ALS1_HELO,
  ALS2,
  ALS2_HELO,
  ALS2_PD,
  BLS,
  BLSU,
  E_T,
  MLTP,
} from "@/data/plans/commonPlans";

export function getEMSPlans(): IEMSResponsePlan[] {
  return emsPlans;
}

export function getEMSPlan(id: number): IEMSResponsePlan | undefined {
  return emsPlans.find((plan) => plan.id === id);
}

export const emsPlans: IEMSResponsePlan[] = [
  {
    id: 1,
    incidentType: "BLSR",
    name: "ABDOMINALPAIN|ROUTINE",
    units: BLS,
  },
  {
    id: 2,
    incidentType: "BLSU9",
    name: "ABDOMINALPAIN|BLS",
    units: BLS,
  },
  {
    id: 3,
    incidentType: "ALS1",
    name: "ABDOMINALPAIN|ALS1",
    units: ALS1,
  },
  {
    id: 4,
    incidentType: "BLSU9",
    name: "ALLERGIC|BLS",
    units: BLS,
  },
  {
    id: 5,
    incidentType: "BLSR",
    name: "ALLERGIC|ROUTINE",
    units: BLS,
  },
  {
    id: 6,
    incidentType: "ALS1",
    name: "ALLERGIC|ALS1",
    units: ALS1,
  },
  {
    id: 7,
    incidentType: "ALS2",
    name: "ALLERGIC|ALS2",
    units: ALS2,
  },
  {
    id: 8,
    incidentType: "AL2D",
    name: "ALLERGIC|CPR",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 9,
    incidentType: "BLSU9",
    name: "ANIMALBITE|BLS",
    units: BLS,
    sendPolice: true,
  },
  {
    id: 10,
    incidentType: "BLSR",
    name: "ANIMALBITE|ROUTINE",
    units: BLS,
  },
  {
    id: 11,
    incidentType: "ALS1",
    name: "ANIMALBITE|ALS1",
    units: ALS1,
    sendPolice: true,
  },
  {
    id: 12,
    incidentType: "AL2D",
    name: "ANIMALBITE|CPR",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 13,
    incidentType: "AL2D",
    name: "ANIMALBITE|ALS2",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 14,
    incidentType: "BLSU9",
    name: "ASSAULT|BLS",
    units: BLS,
    sendPolice: true,
  },
  {
    id: 15,
    incidentType: "BLSR",
    name: "ASSAULT|ROUTINE",
    units: BLS,
  },
  {
    id: 16,
    incidentType: "ALS1",
    name: "ASSAULT|ALS1",
    units: ALS1,
    sendPolice: true,
  },
  {
    id: 17,
    incidentType: "AL2D",
    name: "ASSAULT|CPR",
    units: ALS2_PD,
    sendPolice: true,
  },
  {
    id: 18,
    incidentType: "AL2D",
    name: "ASSAULT|ALS2",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 19,
    incidentType: "MLTP",
    name: "ASSAULT|MULT",
    units: MLTP,
    sendPolice: true,
  },
  {
    id: 20,
    incidentType: "BLSR",
    name: "BACKPAIN|ROUTINE",
    units: BLS,
  },
  {
    id: 21,
    incidentType: "ALS1",
    name: "BACKPAIN|ALS1",
    units: ALS1,
  },
  {
    id: 22,
    incidentType: "ALS1",
    name: "TROUBLEBREATHING|ALS1",
    units: ALS1,
  },
  {
    id: 23,
    incidentType: "BLSU9",
    name: "TROUBLEBREATHING|BLS",
    units: BLS,
  },
  {
    id: 24,
    incidentType: "ALS2",
    name: "TROUBLEBREATHING|ALS2",
    units: ALS2,
  },
  {
    id: 25,
    incidentType: "AL2D",
    name: "TROUBLEBREATHING|CPR",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 26,
    incidentType: "BLSU9",
    name: "BURN|BLS",
    units: BLS,
  },
  {
    id: 27,
    incidentType: "FCFMO",
    name: "BURN|FMO|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "OFI Notification",
        quantity: 1,
      },
    ],
  },
  {
    id: 28,
    incidentType: "FDALS1",
    name: "ALARM|FIRE",
    units: E_T,
  },
  {
    id: 29,
    incidentType: "BLSU9",
    name: "BURN|ROUTINE",
    units: BLS,
  },
  {
    id: 30,
    incidentType: "FALS1FMO",
    name: "BURN|FMO|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "OFI Notification",
        quantity: 1,
      },
    ],
  },
  {
    id: 31,
    incidentType: "FJH",
    name: "FIRE|BLDG|HM",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "OFI Notification",
        quantity: 1,
      },
    ],
  },
  {
    id: 32,
    incidentType: "FJT",
    name: "FIRE|BLDG|TRAP",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "OFI Notification",
        quantity: 1,
      },
    ],
  },
  {
    id: 33,
    incidentType: "FDALS1",
    name: "BURNFD|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 34,
    incidentType: "FDALS2",
    name: "BURN|ALS2",
    units: ALS2,
  },
  {
    id: 35,
    incidentType: "FDMULTP",
    name: "BURN|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
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
    ],
  },
  {
    id: 36,
    incidentType: "AL2D",
    name: "BURN|CPR",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 37,
    incidentType: "HMADAPTALS2",
    name: "BURN|HM|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 38,
    incidentType: "AL1D",
    name: "BURN|ALS1",
    units: ALS2,
  },
  {
    id: 39,
    incidentType: "FY2",
    name: "FIRE|PERSON|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 40,
    incidentType: "FDALS1",
    name: "ALARM|CO|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 41,
    incidentType: "HMADAPT",
    name: "INHALE|BLS",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 42,
    incidentType: "HMADAPT",
    name: "INHALE|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 43,
    incidentType: "HMADAPTALS2",
    name: "INHALE|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 44,
    incidentType: "HMADAPTALS2",
    name: "CPRHM|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 45,
    incidentType: "HMADPD",
    name: "INHALE|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 46,
    incidentType: "SCT",
    name: "ALARM|CO",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 47,
    incidentType: "ALS2",
    name: "CPR|ALS2",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 48,
    incidentType: "SCLA",
    name: "DOA|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Medical Examiner",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 49,
    incidentType: "BLSU9",
    name: "CHESTPAIN|BLS",
    units: BLS,
  },
  {
    id: 50,
    incidentType: "ALS1",
    name: "CHESTPAIN|ALS1",
    units: ALS1,
  },
  {
    id: 51,
    incidentType: "ALS1",
    name: "OVERDOSE|INTENTIONAL|ALS1",
    units: ALS1,
    sendPolice: true,
  },
  {
    id: 52,
    incidentType: "ALS2",
    name: "CHESTPAIN|ALS2",
    units: ALS2,
  },
  {
    id: 53,
    incidentType: "BLSU9",
    name: "CHOKING|BLS",
    units: BLS,
  },
  {
    id: 54,
    incidentType: "ALS1",
    name: "CHOKING|ALS1",
    units: ALS1,
  },
  {
    id: 55,
    incidentType: "ALS2",
    name: "CHOKING|ALS2",
    units: ALS2,
  },
  {
    id: 56,
    incidentType: "AL2D",
    name: "CHOKING|CPR",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 57,
    incidentType: "BLSU9",
    name: "SEIZURE|BLS",
    units: BLS,
  },
  {
    id: 58,
    incidentType: "ALS1",
    name: "SEIZURE|ALS1",
    units: ALS1,
  },
  {
    id: 59,
    incidentType: "ALS1",
    name: "OVERDOSE|ALS1",
    units: ALS1,
  },
  {
    id: 60,
    incidentType: "ALS2",
    name: "SEIZURE|ALS2",
    units: ALS2,
  },
  {
    id: 61,
    incidentType: "AL2D",
    name: "SEIZURE|CPR",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 62,
    incidentType: "BLSU9",
    name: "DIABETIC|BLS",
    units: BLS,
  },
  {
    id: 63,
    incidentType: "ALS1",
    name: "DIABETIC|ALS1",
    units: ALS1,
  },
  {
    id: 64,
    incidentType: "AL1D",
    name: "DIABETIC|w/PD|ALS1",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 65,
    incidentType: "BLSU9",
    name: "DROWN|BLS",
    units: BLS,
  },
  {
    id: 66,
    incidentType: "WTRALS1",
    name: "WATER|SWIFT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 3,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 67,
    incidentType: "WTRALS2",
    name: "WATER|INLAND",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 3,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 68,
    incidentType: "AL1D",
    name: "DROWN|ALS1",
    units: ALS2,
  },
  {
    id: 69,
    incidentType: "PAALS2",
    name: "DROWN|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Rescue",
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
    ],
  },
  {
    id: 70,
    incidentType: "AL2D",
    name: "DROWN|CPR",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 71,
    incidentType: "AL1D",
    name: "ELECTROCUTION|ALS1",
    units: ALS2,
  },
  {
    id: 72,
    incidentType: "AL2D",
    name: "ELECTROCUTION|ALS2",
    units: ALS2_HELO,
  },
  {
    id: 73,
    incidentType: "MLTP",
    name: "ELECTROCUTION|MULT",
    units: MLTP,
  },
  {
    id: 74,
    incidentType: "AL2D",
    name: "ELECTROCUTION|FALL|ALS2",
    units: ALS2_HELO,
  },
  {
    id: 75,
    incidentType: "AL2D",
    name: "ELECTROCUTION|CPR",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 76,
    incidentType: "BLSU9",
    name: "EYEINJURY|BLS",
    units: BLS,
  },
  {
    id: 77,
    incidentType: "BLSR",
    name: "EYEINJURY|ROUTINE",
    units: BLS,
  },
  {
    id: 78,
    incidentType: "ALS1",
    name: "EYEINJURY|ALS1",
    units: ALS1,
  },
  {
    id: 79,
    incidentType: "BLSU9",
    name: "FALL|BLS",
    units: BLS,
  },
  {
    id: 80,
    incidentType: "BLSU9",
    name: "FALL|w/PD|BLS",
    units: BLS,
    sendPolice: true,
  },
  {
    id: 81,
    incidentType: "BLSR",
    name: "FALL|ROUTINE",
    units: BLS,
  },
  {
    id: 82,
    incidentType: "SCLA",
    name: "SVC|LIFT ASSIST",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 83,
    incidentType: "ALS1",
    name: "FALL|ALS1",
    units: ALS1_HELO,
  },
  {
    id: 84,
    incidentType: "AL1D",
    name: "FALL|w/PD|ALS1",
    units: ALS2_HELO,
    sendPolice: true,
  },
  {
    id: 85,
    incidentType: "AL2D",
    name: "FALL|ALS2",
    units: ALS2_HELO,
  },
  {
    id: 86,
    incidentType: "AL2D",
    name: "FALL|w/PD|ALS2",
    units: ALS2_HELO,
    sendPolice: true,
  },
  {
    id: 87,
    incidentType: "AL2D",
    name: "FALL|CPR",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 88,
    incidentType: "BLSR",
    name: "HEADACHE|ROUTINE",
    units: BLS,
  },
  {
    id: 89,
    incidentType: "BLSU9",
    name: "HEADACHE|BLS",
    units: BLS,
  },
  {
    id: 90,
    incidentType: "ALS1",
    name: "HEADACHE|ALS1",
    units: ALS1,
  },
  {
    id: 91,
    incidentType: "ALS1",
    name: "STROKE|ALS1",
    units: ALS1,
  },
  {
    id: 92,
    incidentType: "ALS1",
    name: "HEADACHE|DELOC|ALS1",
    units: ALS1,
  },
  {
    id: 93,
    incidentType: "ALS1",
    name: "HEADACHE|TROUBLEBREATHING|ALS1",
    units: ALS1,
  },
  {
    id: 94,
    incidentType: "BLSU9",
    name: "HEART|BLS",
    units: BLS,
  },
  {
    id: 95,
    incidentType: "BLSU9",
    name: "HEART|CHESTPAIN|BLS",
    units: BLSU,
  },
  {
    id: 96,
    incidentType: "ALS1",
    name: "HEART|ALS1",
    units: ALS1,
  },
  {
    id: 97,
    incidentType: "ALS1",
    name: "HEART|CHESTPAIN|ALS1",
    units: ALS1,
  },
  {
    id: 98,
    incidentType: "ALS2",
    name: "HEART|ALS2",
    units: ALS2,
  },
  {
    id: 99,
    incidentType: "BLSR",
    name: "COLD|ROUTINE",
    units: BLS,
  },
  {
    id: 100,
    incidentType: "BLSR",
    name: "HEAT|ROUTINE",
    units: BLS,
  },
  {
    id: 101,
    incidentType: "BLSU9",
    name: "COLD|BLS",
    units: BLS,
  },
  {
    id: 102,
    incidentType: "BLSU9",
    name: "HEAT|BLS",
    units: BLS,
  },
  {
    id: 103,
    incidentType: "ALS1",
    name: "COLD|ALS1",
    units: ALS1,
  },
  {
    id: 104,
    incidentType: "ALS1",
    name: "HEAT|ALS1",
    units: ALS1,
  },
  {
    id: 105,
    incidentType: "MLTP",
    name: "COLD|MULT",
    units: MLTP,
  },
  {
    id: 106,
    incidentType: "MLTP",
    name: "HEAT|MULT",
    units: MLTP,
  },
  {
    id: 107,
    incidentType: "BLSU9",
    name: "HEMORRHAGE|BLS",
    units: BLS,
  },
  {
    id: 108,
    incidentType: "BLSU9",
    name: "HEMORRHAGE|MEDICAL|BLS",
    units: BLS,
  },
  {
    id: 109,
    incidentType: "BLSU9",
    name: "HEMORRHAGE|TRAUMA|BLS",
    units: BLS,
  },
  {
    id: 110,
    incidentType: "BLSR",
    name: "HEMORRHAGE|ROUTINE",
    units: BLS,
  },
  {
    id: 111,
    incidentType: "BLSR",
    name: "HEMORRHAGE|MEDICAL|ROUTINE",
    units: BLS,
  },
  {
    id: 112,
    incidentType: "BLSR",
    name: "HEMORRHAGE|TRAUMA|ROUTINE",
    units: BLS,
  },
  {
    id: 113,
    incidentType: "ALS1",
    name: "HEMORRHAGE|ALS1",
    units: ALS1,
  },
  {
    id: 114,
    incidentType: "ALS1",
    name: "HEMORRHAGE|MEDICAL|ALS1",
    units: ALS1,
  },
  {
    id: 115,
    incidentType: "ALS1",
    name: "HEMORRHAGE|TRAUMA|ALS1",
    units: ALS1,
  },
  {
    id: 116,
    incidentType: "AL2D",
    name: "HEMORRHAGE|CPR",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 117,
    incidentType: "AL2D",
    name: "HEMORRHAGE|MEDICAL|CPR",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 118,
    incidentType: "AL2D",
    name: "HEMORRHAGE|TRAUMA|CPR",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 119,
    incidentType: "ALS2",
    name: "HEMORRHAGE|ALS2",
    units: ALS2,
  },
  {
    id: 120,
    incidentType: "ALS2",
    name: "HEMORRHAGE|MEDICAL|ALS2",
    units: ALS2,
  },
  {
    id: 121,
    incidentType: "ALS2",
    name: "HEMORRHAGE|TRAUMA|ALS2",
    units: ALS2,
  },
  {
    id: 122,
    incidentType: "SE",
    name: "INVEST",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 123,
    incidentType: "TRAP1",
    name: "ENTRAP|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 124,
    incidentType: "TRAPB",
    name: "ENTRAP|BLS",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 125,
    incidentType: "RES",
    name: "TECH|RESQ",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 126,
    incidentType: "RES",
    name: "TRENCH|RESQ",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 127,
    incidentType: "RES",
    name: "COLLAPSE|RESQ",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 128,
    incidentType: "RES",
    name: "CONFINEDSPACE|RESQ",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 129,
    incidentType: "BLSU9",
    name: "OVERDOSE|BLS",
    units: BLS,
  },
  {
    id: 130,
    incidentType: "BLSU9",
    name: "OVERDOSE|INTENTIONAL|BLS",
    units: BLS,
  },
  {
    id: 131,
    incidentType: "BLSU9",
    name: "OVERDOSE|w/PD|BLS",
    units: BLS,
    sendPolice: true,
  },
  {
    id: 132,
    incidentType: "ALS1",
    name: "OVERDOSE|w/PD|ALS1",
    units: ALS1,
    sendPolice: true,
  },
  {
    id: 133,
    incidentType: "ALS2",
    name: "OVERDOSE|ALS2",
    units: ALS2,
  },
  {
    id: 134,
    incidentType: "ALS2",
    name: "OVERDOSE|INTENTIONAL|ALS2",
    units: ALS2,
  },
  {
    id: 135,
    incidentType: "ALS2",
    name: "OVERDOSE|w/PD|ALS2",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 136,
    incidentType: "AL2D",
    name: "OVERDOSE|CPR",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 137,
    incidentType: "AL2D",
    name: "OVERDOSE|INTENTIONAL|CPR",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 138,
    incidentType: "BLSR",
    name: "OVERDOSE|ROUTINE",
    units: BLS,
  },
  {
    id: 139,
    incidentType: "BLSR",
    name: "MATERNITY|ROUTINE",
    units: BLS,
  },
  {
    id: 140,
    incidentType: "BLSU9",
    name: "MATERNITY|BLS",
    units: BLS,
  },
  {
    id: 141,
    incidentType: "ALS1",
    name: "MATERNITY|ALS1",
    units: ALS1,
  },
  {
    id: 142,
    incidentType: "BLSU9",
    name: "PSYCH|BLS",
    units: BLS,
  },
  {
    id: 143,
    incidentType: "BLSU9",
    name: "PSYCH|w/PD|BLS",
    units: BLS,
    sendPolice: true,
  },
  {
    id: 144,
    incidentType: "ALS1",
    name: "PSYCH|ALS1",
    units: ALS1,
  },
  {
    id: 145,
    incidentType: "ALS1",
    name: "PSYCH|w/PD|ALS1",
    units: ALS1,
    sendPolice: true,
  },
  {
    id: 146,
    incidentType: "AL2D",
    name: "PSYCH|CPR",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 147,
    incidentType: "BLSR",
    name: "SICK|ROUTINE",
    units: BLS,
  },
  {
    id: 148,
    incidentType: "BLSU9",
    name: "SICK|BLS",
    units: BLS,
  },
  {
    id: 149,
    incidentType: "ALS1",
    name: "SICK|ALS1",
    units: ALS1,
  },
  {
    id: 150,
    incidentType: "ALS1",
    name: "DECLOC|ALS1",
    units: ALS1,
  },
  {
    id: 151,
    incidentType: "ALSR",
    name: "SICK|ALSR",
    units: ALS1,
  },
  {
    id: 152,
    incidentType: "BLSU9",
    name: "SHOT|w/PD|BLS",
    units: BLS,
    sendPolice: true,
  },
  {
    id: 153,
    incidentType: "BLSU9",
    name: "TRAUMA|w/PD|BLS",
    units: BLS,
    sendPolice: true,
  },
  {
    id: 154,
    incidentType: "BLSU9",
    name: "STAB|w/PD|BLS",
    units: BLS,
    sendPolice: true,
  },
  {
    id: 155,
    incidentType: "AL1D",
    name: "SHOT|w/PD|ALS1",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 156,
    incidentType: "AL1D",
    name: "TRAUMA|w/PD|ALS1",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 157,
    incidentType: "AL1D",
    name: "STAB|w/PD|ALS1",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 158,
    incidentType: "AL2D",
    name: "CPRTRAUMA|ALS2",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 159,
    incidentType: "AL2D",
    name: "CPRSHOT|ALS2",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 160,
    incidentType: "AL2D",
    name: "CPRSTAB|ALS2",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 161,
    incidentType: "AL2D",
    name: "SHOT|w/PD|ALS2",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 162,
    incidentType: "AL2D",
    name: "TRAUMA|w/PD|ALS2",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 163,
    incidentType: "AL2D",
    name: "STAB|w/PD|ALS2",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 164,
    incidentType: "MLTP",
    name: "SHOT|w/PD|MULT",
    units: MLTP,
    sendPolice: true,
  },
  {
    id: 165,
    incidentType: "MLTP",
    name: "TRAUMA|w/PD|MULT",
    units: MLTP,
    sendPolice: true,
  },
  {
    id: 166,
    incidentType: "MLTP",
    name: "STAB|w/PD|MULT",
    units: MLTP,
    sendPolice: true,
  },
  {
    id: 167,
    incidentType: "BLSU9",
    name: "STROKE|BLS",
    units: BLS,
  },
  {
    id: 168,
    incidentType: "MVCB",
    name: "MVC|BLS",
    units: BLSU,
    sendPolice: true,
  },
  {
    id: 169,
    incidentType: "PDC",
    name: "PropertyDamageCollision",
    units: [
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 170,
    incidentType: "MVCMCIB",
    name: "MVC|MULT|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
    ],
    sendPolice: true,
  },
  {
    id: 171,
    incidentType: "MVC1",
    name: "MVC|ALS1",
    units: ALS1,
    sendPolice: true,
  },
  {
    id: 172,
    incidentType: "MVCMCI1",
    name: "MVC|MULT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 173,
    incidentType: "MVC2",
    name: "MVC|ALS2",
    units: ALS2_HELO,
    sendPolice: true,
  },
  {
    id: 174,
    incidentType: "MVCMCI2",
    name: "MVC|MULT|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 175,
    incidentType: "HMFULL",
    name: "AIR|CRASH|LARGE",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Crash",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 176,
    incidentType: "TRC",
    name: "TRAIN|CRASH",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 4,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 177,
    incidentType: "WTRALS2",
    name: "BOATCRASH",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Marine",
        quantity: 2,
      },
      {
        type: "Rescue Boat",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 178,
    incidentType: "MVCBLDG1",
    name: "MVC|STRUC|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
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
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 179,
    incidentType: "MVCPC1",
    name: "MVC|CYCLE|ALS1",
    units: [
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
      {
        type: "Police Patrol",
        quantity: 1,
      },
      {
        type: "Traffic",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 180,
    incidentType: "MVCMECH1",
    name: "MVC|MECH|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
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
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 181,
    incidentType: "MVCPC1",
    name: "MVC|PED|ALS1",
    units: [
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
    ],
    sendPolice: true,
  },
  {
    id: 182,
    incidentType: "MVCEJEC2",
    name: "MVC|EJEC|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 183,
    incidentType: "MVCROLL1",
    name: "MVC|ROLL|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
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
        type: "Helo",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 184,
    incidentType: "MVCMECH2",
    name: "MVC|MECH|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 185,
    incidentType: "WTR2RS",
    name: "VEH|SINKING|TRAP",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
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
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Rescue Boat",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 186,
    incidentType: "TRAT",
    name: "TRAIN|PED",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
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
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 187,
    incidentType: "MVCHM1",
    name: "MVC|HM|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Police Patrol",
        quantity: 2,
      },
      {
        type: "Traffic",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 188,
    incidentType: "MVCTRAP1",
    name: "MVC|TRAP|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 189,
    incidentType: "MVCMCI1",
    name: "MVC|TRAP|MULT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
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
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 190,
    incidentType: "BLSU9",
    name: "INJURED|BLS",
    units: BLS,
  },
  {
    id: 191,
    incidentType: "BLSR",
    name: "INJURED|ROUTINE",
    units: BLS,
  },
  {
    id: 192,
    incidentType: "ALS1",
    name: "INJURED|ALS1",
    units: ALS1,
  },
  {
    id: 193,
    incidentType: "AL2D",
    name: "INJURED|ALS2",
    units: ALS2,
  },
  {
    id: 194,
    incidentType: "BLSU9",
    name: "FAINT|BLS",
    units: BLS,
  },
  {
    id: 195,
    incidentType: "ALS1",
    name: "UNCON|ALS1",
    units: ALS1,
  },
  {
    id: 196,
    incidentType: "ALS2",
    name: "UNCON|ALS2",
    units: ALS2,
  },
  {
    id: 197,
    incidentType: "AL2D",
    name: "UNCON|INEFF",
    units: ALS2,
  },
  {
    id: 198,
    incidentType: "AL2D",
    name: "UNCON|CPR",
    units: ALS2,
    sendPolice: true,
  },
  {
    id: 199,
    incidentType: "BLSU9",
    name: "ONEDOWN|BLS",
    units: BLS,
  },
  {
    id: 200,
    incidentType: "BLSM",
    name: "MedicalAlertAlarm",
    units: ALS,
  },
  {
    id: 201,
    incidentType: "BLS9",
    name: "TRANSPORT|BLS",
    units: BLS,
  },
  {
    id: 202,
    incidentType: "ALS1",
    name: "TRANSPORT|ALS1",
    units: ALS,
  },
  {
    id: 203,
    incidentType: "ALS1",
    name: "CRITTRANSPORT|ALS1",
    units: ACLS,
  },
];
