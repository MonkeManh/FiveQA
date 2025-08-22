export interface IEMSResponsePlan {
  id: number;
  name: string;
  incidentType: string;
  units: IRPUnit[];
  sendFire?: boolean;
  sendPolice?: boolean;
}

export interface IRPUnit {
  type: string;
  quantity: number;
}