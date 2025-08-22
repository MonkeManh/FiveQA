import {
  EFireStations,
  EHPPosts,
  EPatrolAreas,
  EPDAgencies,
} from "@/models/enums";
import { IPostal } from "@/models/interfaces";
import { ResponseOrders } from "../plans";

export const postals: IPostal[] = [
  {
    postal: "001",
    twp: "Paleto Bay",
    municp: "Township",
    hasHeli: true,
    fireBox: "3-18",
    fdDistrict: EFireStations.Station3,
    fdRunOrder: ResponseOrders["3_11_9_4_12_2_10_1_7_8_6_5"],
    pdDistrict: EPDAgencies.PBPD,
    pdRunOrder: ResponseOrders.PBPD_BCSO_SAHP_SSPD_RCSO_MBPD_LCSO_LSPD,
    post: EHPPosts.North,
    patrolArea: EPatrolAreas.Area5,
    streets: {
      autoFill: true,
      mainStreet: "Paleto Point",
      crossStreet1: "",
      crossStreet2: "",
    },
  },
  {
    postal: "002",
    twp: "Paleto Bay",
    municp: "Township",
    hasHeli: true,
    fireBox: "3-18",
    fdDistrict: EFireStations.Station3,
    fdRunOrder: ResponseOrders["3_11_9_4_12_2_10_1_7_8_6_5"],
    pdDistrict: EPDAgencies.PBPD,
    pdRunOrder: ResponseOrders.PBPD_BCSO_SAHP_SSPD_RCSO_MBPD_LCSO_LSPD,
    post: EHPPosts.North,
    patrolArea: EPatrolAreas.Area5,
    streets: {
      autoFill: true,
      mainStreet: "Promenade Trail",
      crossStreet1: "Promenade Trail",
      crossStreet2: "Promenade Trail",
    },
  },
  {
    postal: "003",
    twp: "Paleto Bay",
    municp: "Township",
    hasHeli: true,
    fireBox: "3-18",
    fdDistrict: EFireStations.Station3,
    fdRunOrder: ResponseOrders["3_11_9_4_12_2_10_1_7_8_6_5"],
    pdDistrict: EPDAgencies.PBPD,
    pdRunOrder: ResponseOrders.PBPD_BCSO_SAHP_SSPD_RCSO_MBPD_LCSO_LSPD,
    post: EHPPosts.North,
    patrolArea: EPatrolAreas.Area5,
    streets: {
      autoFill: true,
      mainStreet: "Promenade Trail",
      crossStreet1: "Promenade Trail",
      crossStreet2: "Promenade Trail",
    },
  },
  {
    postal: "004",
    twp: "Paleto Bay",
    municp: "Township",
    hasHeli: true,
    fireBox: "3-18",
    fdDistrict: EFireStations.Station3,
    fdRunOrder: ResponseOrders["3_11_9_4_12_2_10_1_7_8_6_5"],
    pdDistrict: EPDAgencies.PBPD,
    pdRunOrder: ResponseOrders.PBPD_BCSO_SAHP_SSPD_RCSO_MBPD_LCSO_LSPD,
    post: EHPPosts.North,
    patrolArea: EPatrolAreas.Area5,
    streets: {
      autoFill: true,
      mainStreet: "Promenade Trail",
      crossStreet1: "Promenade Trail",
      crossStreet2: "Promenade Trail",
    },
  },
  {
    postal: "005",
    twp: "Paleto Bay",
    municp: "Township",
    hasHeli: true,
    fireBox: "3-18",
    fdDistrict: EFireStations.Station3,
    fdRunOrder: ResponseOrders["3_11_9_4_12_2_10_1_7_8_6_5"],
    pdDistrict: EPDAgencies.PBPD,
    pdRunOrder: ResponseOrders.PBPD_BCSO_SAHP_SSPD_RCSO_MBPD_LCSO_LSPD,
    post: EHPPosts.North,
    patrolArea: EPatrolAreas.Area5,
    streets: {
      availableStreets: {
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Route 1 Hwy (Great Ocean Highway) SB",
        },
        "Paleto Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
      },
    },
  },
  {
    postal: "006",
    twp: "Paleto Bay",
    municp: "Township",
    hasHeli: true,
    fireBox: "3-3",
    fdDistrict: EFireStations.Station3,
    fdRunOrder: ResponseOrders["3_11_9_4_12_2_10_1_7_8_6_5"],
    pdDistrict: EPDAgencies.PBPD,
    pdRunOrder: ResponseOrders.PBPD_BCSO_SAHP_SSPD_RCSO_MBPD_LCSO_LSPD,
    post: EHPPosts.North,
    patrolArea: EPatrolAreas.Area5,
    streets: {
      availableStreets: {
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Route 1 Hwy (Great Ocean Highway) SB",
        },
        "Paleto Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
      },
    },
  },
  {
    postal: "007",
    twp: "Paleto Bay",
    municp: "Township",
    hasHeli: true,
    fireBox: "3-3",
    fdDistrict: EFireStations.Station3,
    fdRunOrder: ResponseOrders["3_11_9_4_12_2_10_1_7_8_6_5"],
    pdDistrict: EPDAgencies.PBPD,
    pdRunOrder: ResponseOrders.PBPD_BCSO_SAHP_SSPD_RCSO_MBPD_LCSO_LSPD,
    post: EHPPosts.North,
    patrolArea: EPatrolAreas.Area5,
    streets: {
      availableStreets: {
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Route 1 Hwy (Great Ocean Highway) SB",
        },
        "Paleto Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
      },
    },
  },
  {
    postal: "008",
    twp: "Paleto Bay",
    municp: "Township",
    hasHeli: true,
    fireBox: "3-3",
    fdDistrict: EFireStations.Station3,
    fdRunOrder: ResponseOrders["3_11_9_4_12_2_10_1_7_8_6_5"],
    pdDistrict: EPDAgencies.PBPD,
    pdRunOrder: ResponseOrders.PBPD_BCSO_SAHP_SSPD_RCSO_MBPD_LCSO_LSPD,
    post: EHPPosts.North,
    patrolArea: EPatrolAreas.Area5,
    streets: {
      availableStreets: {
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Route 1 Hwy (Great Ocean Highway) SB",
        },
        "Paleto Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
      },
    },
  },
  {
    postal: "009",
    twp: "Paleto Bay",
    municp: "Township",
    hasHeli: true,
    fireBox: "3-3",
    fdDistrict: EFireStations.Station3,
    fdRunOrder: ResponseOrders["3_11_9_4_12_2_10_1_7_8_6_5"],
    pdDistrict: EPDAgencies.PBPD,
    pdRunOrder: ResponseOrders.PBPD_BCSO_SAHP_SSPD_RCSO_MBPD_LCSO_LSPD,
    post: EHPPosts.North,
    patrolArea: EPatrolAreas.Area5,
    streets: {
      availableStreets: {
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Route 1 Hwy (Great Ocean Highway) SB",
        },
        "Bayview Bridge": {
          crossStreet1: "Procopio Promenade",
          crossStreet2: "Riverfront Ave",
        },
        "Paleto Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
      },
    },
  },
  {
    postal: "010",
    twp: "Paleto Bay",
    municp: "Township",
    hasHeli: true,
    fireBox: "3-3",
    fdDistrict: EFireStations.Station3,
    fdRunOrder: ResponseOrders["3_11_9_12_4_2_1_10_7_6_8_5"],
    pdDistrict: EPDAgencies.PBPD,
    pdRunOrder: ResponseOrders.PBPD_BCSO_SAHP_SSPD_RCSO_MBPD_LCSO_LSPD,
    post: EHPPosts.North,
    patrolArea: EPatrolAreas.Area5,
    streets: {
      availableStreets: {
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Procopio Vw",
        },
        "Paleto Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
        "Bayview Bridge": {
          crossStreet1: "Procopio Promenade",
          crossStreet2: "Riverfront Ave",
        },
        "Procopio Dr Ramp to Bayview Bridge": {
          crossStreet1: "Procopio Promenade",
          crossStreet2: "Bayview Bridge",
        },
        "Bayview Bridge Ramp to Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Procopio Promenade",
        }
      }
    }
  },
  {
    postal: "011",
    twp: "Paleto Bay",
    municp: "Township",
    hasHeli: true,
    fireBox: "3-3",
    fdDistrict: EFireStations.Station3,
    fdRunOrder: ResponseOrders["3_11_9_12_4_2_1_10_7_6_8_5"],
    pdDistrict: EPDAgencies.PBPD,
    pdRunOrder: ResponseOrders.PBPD_BCSO_SAHP_SSPD_RCSO_MBPD_LCSO_LSPD,
    post: EHPPosts.North,
    patrolArea: EPatrolAreas.Area5,
    streets: {
      availableStreets: {
        "Procopio Promenade": {
          crossStreet1: "Procopio Vw",
          crossStreet2: "Paleto Loop Trail"
        },
        "Paleto Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        }
      }
    }
  },
  {
    postal: "012",
    twp: "Paleto Bay",
    municp: "Township",
    hasHeli: true,
    fireBox: "3-3",
    fdDistrict: EFireStations.Station3,
    fdRunOrder: ResponseOrders["3_11_9_12_4_2_1_10_7_6_8_5"],
    pdDistrict: EPDAgencies.PBPD,
    pdRunOrder: ResponseOrders.PBPD_BCSO_SAHP_SSPD_RCSO_MBPD_LCSO_LSPD,
    post: EHPPosts.North,
    patrolArea: EPatrolAreas.Area5,
    streets: {
      autoFill: true,
      mainStreet: "Paleto Beach",
      crossStreet1: "Not Found",
      crossStreet2: "Not Found",
    }
  },
  {
    postal: "013",
    twp: "Paleto Bay",
    municp: "Township",
    hasHeli: true,
    fireBox: "3-3",
    fdDistrict: EFireStations.Station3,
    fdRunOrder: ResponseOrders["3_11_9_12_4_2_1_10_7_6_8_5"],
    pdDistrict: EPDAgencies.PBPD,
    pdRunOrder: ResponseOrders.PBPD_BCSO_SAHP_SSPD_RCSO_MBPD_LCSO_LSPD,
    post: EHPPosts.North,
    patrolArea: EPatrolAreas.Area5,
    streets: {
      autoFill: true,
      mainStreet: "Paleto Beach",
      crossStreet1: "Not Found",
      crossStreet2: "Not Found",
    }
  },
  {
    postal: "014",
    twp: "Paleto Bay",
    municp: "Township",
    hasHeli: true,
    fireBox: "3-3",
    fdDistrict: EFireStations.Station3,
    fdRunOrder: ResponseOrders["3_11_9_12_4_2_1_10_7_6_8_5"],
    pdDistrict: EPDAgencies.PBPD,
    pdRunOrder: ResponseOrders.PBPD_BCSO_SAHP_SSPD_RCSO_MBPD_LCSO_LSPD,
    post: EHPPosts.North,
    patrolArea: EPatrolAreas.Area5,
    streets: {
      availableStreets: {
        "Procopio Promenade": {
          crossStreet1: "Procopio Vw",
          crossStreet2: "Paleto Loop Trail"
        },
        "Procopio Trail": {
          crossStreet1: "Procopio Promenade",
          crossStreet2: "Procopio Vw"
        }
      }
    }
  },
  {
    postal: "015",
    twp: "Paleto Bay",
    municp: "Township",
    hasHeli: true,
    fireBox: "3-1",
    fdDistrict: EFireStations.Station3,
    fdRunOrder: ResponseOrders["3_11_9_12_4_2_1_10_7_6_8_5"],
    pdDistrict: EPDAgencies.PBPD,
    pdRunOrder: ResponseOrders.PBPD_BCSO_SAHP_SSPD_RCSO_MBPD_LCSO_LSPD,
    post: EHPPosts.North,
    patrolArea: EPatrolAreas.Area5,
    streets: {
      availableStreets: {
        "Procopio Vw": {
          crossStreet1: "Procopio Promenade",
          crossStreet2: "Paleto Blvd"
        },
        "Procopio Promenade": {
          crossStreet1: "Procopio Vw",
          crossStreet2: "Bayview Bridge"
        },
        "Procopio Trail": {
          crossStreet1: "Procopio Promenade",
          crossStreet2: "Procopio Vw"
        }
      }
    }
  }
];
