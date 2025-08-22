import { IResponsePriorities } from "./IResponsePriorities";

export interface IProtocolServices {
  name: "EMS" | "Fire" | "Police";
  priority: IResponsePriorities | true | false | undefined;
}
