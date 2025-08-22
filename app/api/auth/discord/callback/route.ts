import { Logger } from "@/services/loggingService";
import { TokenService } from "@/services/tokenService";
import { createUser, doesUserExist, getUserById, updateUserEmail, updateUserVerified } from "@/services/userService";
import { NextResponse, type NextRequest } from "next/server";

const DISCORD_CLIENT_ID = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID!;
const DISCORD_CLIENT_SECRET = process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET!;
const DISCORD_REDIRECT_URI = process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI!;

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const error = request.nextUrl.searchParams.get("error");

  if (error || !code) {
    const errParam = error ? "auth_failed" : "no_code";
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("error", errParam);
    return Response.redirect(loginUrl);
  }

  try {
    const tokenResponse = await fetch("https://discord.com/api/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: DISCORD_CLIENT_ID,
        client_secret: DISCORD_CLIENT_SECRET,
        grant_type: "authorization_code",
        code,
        redirect_uri: DISCORD_REDIRECT_URI,
      }),
    });

    if (!tokenResponse.ok) throw new Error("token_exchange_failed");
    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Get the user's info from Discord
    const userResponse = await fetch("https://discord.com/api/users/@me", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const user = await userResponse.json();

    if (!user) throw new Error("user_fetch_failed");
    const userExists = await doesUserExist(user.id);

    if (!userExists) {
      await createUser(
        user.id,
        user.username,
        user.avatar,
        user.email,
        user.verified
      );
      await Logger.logUserCreation(user.id);
    }

    // using jose, create an access token
    const newAccessToken = await TokenService.createAccessToken(
      user.id,
      user.username,
      user.avatar,
      user.email,
      user.verified
    );
    await TokenService.saveAcessToken(user.id, newAccessToken);

    // Use cookies to set the access token
    const response = NextResponse.redirect(
      new URL(userExists ? "/dashboard" : "/agreement", request.url)
    );

    response.cookies.set("access_token", newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    if(userExists) {
      const userObject = await getUserById(user.id);
      if(!userObject?.email) {
        await updateUserEmail(user.id, user.email);
      }
      if(!userObject?.verified) {
        await updateUserVerified(user.id, user.verified);
      }
    }

    return response;
  } catch (e) {
    console.error("OAuth Error:", e);

    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("error", "auth_failed");
    return NextResponse.redirect(loginUrl);
  }
}
