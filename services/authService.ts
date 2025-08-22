import { IUser } from "@/models/interfaces";
import { cookies } from "next/headers";
import { TokenService } from "./tokenService";
import { getUserById } from "./userService";

export async function getServerUser(): Promise<IUser | null> {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("access_token")?.value;

    if (!accessToken) {
      return null;
    }

    const isValid = await TokenService.isValidAccessToken(accessToken);
    if (!isValid) {
      return null;
    }

    const payload = await TokenService.extractPayloadFromAccessToken(accessToken);
    if (!payload) {
      return null;
    }

    const user = await getUserById(payload.userId as string);
    return user as IUser | null;
  } catch (error) {
    console.error("Error getting server user:", error);
    return null;
  }
}
