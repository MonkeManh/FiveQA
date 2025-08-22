import pool from "@/lib/database";
import { ITokenPayload, IUser } from "@/models/interfaces";
import { importJWK, jwtVerify, SignJWT } from "jose";

async function getKey(secret: string) {
  return await importJWK(
    {
      kty: "oct",
      k: Buffer.from(secret).toString("base64url"),
    },
    "HS256"
  );
}

const accessSecret = process.env.NEXT_PUBLIC_ACCESS_SECRET!;

export class TokenService {
  static async createAccessToken(
    userId: string,
    username: string,
    avatar: string | null,
    email: string | null,
    verified: boolean
  ): Promise<string> {
    const secret = await getKey(accessSecret);
    const jwt = await new SignJWT({
      userId,
      username,
      avatar,
      email,
      verified,
      isAdmin: userId === "790260096063635467" ? 1 : 0,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1d")
      .sign(secret);

    return jwt;
  }

  static async saveAcessToken(
    userID: string,
    accessToken: string
  ): Promise<void> {
    // If the user already has an access token, delete it first
    await pool.query("DELETE FROM access_tokens WHERE user_id = ?", [userID]);

    await pool
      .query("INSERT INTO access_tokens (user_id, token) VALUES (?, ?)", [
        userID,
        accessToken,
      ])
      .catch((error: any) => {
        console.error("Error saving access token:", error);
        throw new Error("Failed to save access token");
      });
    return;
  }

  static async isValidAccessToken(accessToken: string): Promise<boolean> {
    try {
      const accessKey = await getKey(accessSecret);
      const { payload } = await jwtVerify(accessToken, accessKey);
      return !!payload;
    } catch (error) {
      console.error("Invalid access token:", error);
      return false;
    }
  }

  static async extractPayloadFromAccessToken(
    accessToken: string
  ): Promise<ITokenPayload | null> {
    try {
      const accessKey = await getKey(accessSecret);
      const { payload } = (await jwtVerify(accessToken, accessKey)) as any;
      return payload as ITokenPayload;
    } catch (error) {
      console.error("Error extracting payload from access token:", error);
      return null;
    }
  }
}
