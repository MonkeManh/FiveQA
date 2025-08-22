import { EFireStations, EHPPosts, EPatrolAreas } from "@/models/enums";
import { EPDAgencies } from "@/models/enums/EPDAgencies";

export interface IStreets {
  name: string;
  crossingStreets: {
    street: string;
    postal: string[];
    twp: string;
    municp: string;
    hasHeli: boolean;
    fdDistrict: EFireStations;
    pdDistrict: EPDAgencies;
    fireBox: string;
    post: EHPPosts;
    patrolArea: EPatrolAreas;
    fdRunOrder: EFireStations[];
    pdRunOrder: EPDAgencies[];
  }[];
}
