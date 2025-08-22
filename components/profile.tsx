"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { IUser } from "@/models/interfaces/IUser";

interface ProfileProps {
  user: IUser;
}

export default function Profile({ user }: ProfileProps) {
  return (
    <Avatar>
      <AvatarImage
        src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`}
        alt={user.username}
      />
      <AvatarFallback>
        {user.username
          ? `${user.username.charAt(0)}${
              user.username.split(" ")[1]?.charAt(0) || ""
            }`
          : user.username.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
}
