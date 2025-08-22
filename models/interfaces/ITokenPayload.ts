export interface ITokenPayload {
  userId: string;
  username: string;
  avatar: string | null;
  email: string | null;
  verified: boolean;
  usAdmin: 0 | 1;
}
