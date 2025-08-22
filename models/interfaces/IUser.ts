import { EAccountStatuses } from "../enums/EAccountStatuses";
import { ISettings } from "./ISettings";

export interface IUser {
  id: string;
  username: string;
  avatar: string | null;
  email: string;
  settings: null | ISettings;
  verified: 0 | 1;
  account_status: EAccountStatuses;
  isAdmin: 0 | 1;
  isInDiscord: 0 | 1;
  created_at: string;
}