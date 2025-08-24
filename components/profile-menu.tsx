"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Profile from "@/components/profile";
import type { IUser } from "@/models/interfaces/IUser";
import {
  User,
  Settings,
  LayoutDashboard,
  CreditCard,
  Bell,
  HelpCircle,
  LogOut,
  Shield,
} from "lucide-react";

interface ProfileMenuProps {
  user: IUser;
  onNavigate?: (path: string) => void;
  onLogout?: () => void;
}

export default function ProfileMenu({
  user,
  onNavigate,
  onLogout,
}: ProfileMenuProps) {
  const handleItemClick = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      // Default navigation behavior
      window.location.href = path;
    }
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      // Default logout behavior
      console.log("Logout clicked");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Profile user={user} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 rounded-xs" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.username}</p>
            {user.email && (
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem className="rounded-xs" onClick={() => handleItemClick("/dashboard")}>
          <LayoutDashboard className="mr-2 h-4 w-4" />
          <span>Dashboard</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="rounded-xs" onClick={() => handleItemClick("/profile")}>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="rounded-xs" onClick={() => handleItemClick("/settings")}>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {user.isAdmin === 1 && (
          <DropdownMenuItem className="rounded-xs" onClick={() => handleItemClick("/admin")}>
            <Shield className="mr-2 h-4 w-4" />
            <span>Admin Panel</span>
          </DropdownMenuItem>
        )}

        <DropdownMenuItem className="rounded-xs" onClick={() => handleItemClick("/help")}>
          <HelpCircle className="mr-2 h-4 w-4" />
          <span>Help & Support</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          className="text-red-600 focus:text-red-600 rounded-xs"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
