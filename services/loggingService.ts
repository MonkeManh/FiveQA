export class Logger {
  public static async logUserCreation(discordId: string) {
    // Send an API message to API_URL
    try {
      await fetch(`${process.env.API_URL}/user-created`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ discordId }),
      });
    } catch (error) {
      console.error("Error logging user creation:", error);
    }
  }
}
