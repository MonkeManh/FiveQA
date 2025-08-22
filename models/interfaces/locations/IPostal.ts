import { EFireStations, EHPPosts, EPatrolAreas } from "@/models/enums";
import { EPDAgencies } from "@/models/enums/EPDAgencies";

type AvailableStreets = {
  [roadName: string]: {
    crossStreet1: string;
    crossStreet2: string;
  };
};

type Streets = {
  autoFill?: boolean;
  availableStreets?: AvailableStreets;
  mainStreet?: string;
  crossStreet1?: string;
  crossStreet2?: string;
};

export interface IPostal {
  postal: string;
  twp?: string;
  municp?: string;
  hasHeli: boolean;
  fdDistrict: EFireStations;
  pdDistrict: EPDAgencies;
  fireBox: string;
  post: EHPPosts;
  patrolArea: EPatrolAreas;
  fdRunOrder: EFireStations[];
  pdRunOrder: EPDAgencies[];
  streets: Streets;
}
