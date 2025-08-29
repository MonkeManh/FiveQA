import { EFireStations, EHPPosts, EPatrolAreas } from "@/models/enums";
import { EPDAgencies } from "@/models/enums/EPDAgencies";

export interface IStreets {
  id: number;
  name: string;
  crossingStreets?: {
    street: string;
    postal: string[];
    twp: string;
    municp: string;
    hasHeli: 0 | 1;
    fdDistrict: EFireStations;
    pdDistrict: EPDAgencies;
    fireBox: string;
    post: EHPPosts;
    patrolArea: EPatrolAreas;
    fdRunOrder: EFireStations[];
    pdRunOrder: EPDAgencies[];
  }[];
  created_by?: string;
  updated_by?: string;
  created_at?: string;
  updated_at?: string;
}
