import {
  EFireStations,
  EHPPosts,
  EPatrolAreas,
  EPDAgencies,
} from "@/models/enums";

export interface ILocation {
  id: number;
  name: string;
  postal: string;
  mainStreet: string;
  crossStreet1: string;
  crossStreet2: string;
  apt?: string;
  twp?: string;
  municp?: string;
  cids?: string;
  hasHeli: boolean;
  fdDistrict: EFireStations;
  pdDistrict: EPDAgencies;
  fireBox: string;
  post: EHPPosts;
  patrolArea: EPatrolAreas;
  fdRunOrder: EFireStations[];
  pdRunOrder: EPDAgencies[];
  created_at?: string;
  updated_at?: string;
  created_by?: string;
  updated_by?: string;
}
