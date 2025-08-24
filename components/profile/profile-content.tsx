"use client";

import { useCallback, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Shield,
  Calendar,
  Mail,
  ExternalLink,
  Settings,
  User,
  Eye,
  Lock,
} from "lucide-react";
import type { IUser } from "@/models/interfaces";
import Link from "next/link";

interface IProfilePageContentProps {
  user: IUser;
}

export default function ProfilePageContent({ user }: IProfilePageContentProps) {
  const [settings, setSettings] = useState<Partial<IUser["settings"]> | null>(
    null
  );

  const updateSetting = useCallback((key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }, []);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header Section */}
        <div className="text-center">
          <div className="relative inline-block">
            <Avatar className="h-20 w-20">
              <AvatarImage
                src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`}
                alt={user.username}
              />
              <AvatarFallback>
                {user.username.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            {user.isInDiscord === 1 && (
              <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-accent border-2 border-background flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-accent-foreground" />
              </div>
            )}
          </div>
          <h1 className="mt-4 text-2xl font-bold text-foreground">
            {user.username}
          </h1>
          <div className="mt-2 flex items-center justify-center gap-2">
            {user.verified === 1 ? (
              <Badge
                variant="secondary"
                className="bg-emerald-600/50 text-emerald-400 rounded-xs"
              >
                <Shield className="mr-1 h-3 w-3" />
                Verified
              </Badge>
            ) : (
              <Badge
                variant="secondary"
                className="bg-destructive text-destructive-foreground rounded-xs"
              >
                <Lock className="mr-1 h-3 w-3" />
                Unverified
              </Badge>
            )}
            {user.isAdmin === 1 && (
              <Badge
                variant="secondary"
                className="bg-emerald-600/25 text-emerald-400 rounded-xs"
              >
                <Settings className="mr-1 h-3 w-3" />
                Admin
              </Badge>
            )}
          </div>
        </div>

        {/* User Information Card */}
        <Card className="rounded-xs">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Member Since</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(user.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Discord Integration */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Discord Integration</h3>
              {user.isInDiscord === 1 ? (
                <div className="flex items-center justify-between p-3 bg-accent/10 rounded-xs">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-[#5865F2] rounded-full flex items-center justify-center">
                      <svg
                        className="h-4 w-4 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        Connected to Discord
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Active member
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs bg-emerald-400/10 text-emerald-600 border-emerald-600 rounded-xs"
                  >
                    Connected
                  </Badge>
                </div>
              ) : (
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="text-sm font-medium">
                      Not connected to Discord
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Join our community
                    </p>
                  </div>
                  <Link href="/discord" target="_blank">
                    <Button
                      size="sm"
                      className="bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-xs"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Join Discord
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Account Settings */}
        <Card className="rounded-xs">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Account Settings
            </CardTitle>
            <CardDescription>
              Manage your account preferences and privacy settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Profile Settings */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <h3 className="text-sm font-semibold">Profile Settings</h3>
              </div>
              <div className="space-y-3 pl-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Public Profile</p>
                    <p className="text-xs text-muted-foreground">
                      Allow other users to see your call statistics and total
                      calls. You will be a part of the call leaderboard as well.
                    </p>
                  </div>
                  <Switch
                    checked={(settings && settings.public_profile) || false}
                    onCheckedChange={(checked) =>
                      updateSetting("public_profile", checked)
                    }
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* User Experience */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <h3 className="text-sm font-semibold">User Experience</h3>
              </div>
              <div className="space-y-4 pl-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">Dispatch Integration</p>
                    <Badge variant="outline" className="text-xs">
                      In Development
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Allows users to assign units to calls from the FiveQA system
                    itself.
                  </p>
                  <Select
                    value={
                      (settings && settings.dispatch_integration) || "disabled"
                    }
                    onValueChange={(value) =>
                      updateSetting("dispatch_integration", value)
                    }
                  >
                    <SelectTrigger className="w-48 rounded-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-xs">
                      <SelectItem className="rounded-xs" value="disabled">
                        Disabled
                      </SelectItem>
                      <SelectItem className="rounded-xs" value="dojrp">
                        DOJRP Preset
                      </SelectItem>
                      <SelectItem className="rounded-xs" value="custom">
                        Custom Input
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Sound Effects</p>
                    <p className="text-xs text-muted-foreground">
                      Plays sound effects at key decision points throughout
                      different cases.
                    </p>
                  </div>
                  <Switch
                    checked={(settings && settings.sound_effects) || false}
                    onCheckedChange={(checked) =>
                      updateSetting("sound_effects", checked)
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium">Multi Service</p>
                      <Badge
                        variant="outline"
                        className="text-xs bg-emerald-400/10 text-emerald-600 border-emerald-600"
                      >
                        Highly Recommended
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Allows for the dispatch of multiple services back to back.
                    </p>
                  </div>
                  <Switch
                    checked={(settings && settings.mult_service) || false}
                    onCheckedChange={(checked) =>
                      updateSetting("mult_service", checked)
                    }
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Privacy & Security */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                <h3 className="text-sm font-semibold">Privacy & Security</h3>
              </div>
              <div className="space-y-3 pl-6 flex items-center justify-between w-full">
                <Link href="/discord" target="_blank">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-fit bg-transparent rounded-xs"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Request Data Deletion
                  </Button>
                </Link>
                <Button
                  variant="destructive"
                  size="sm"
                  className="w-fit rounded-xs"
                >
                  Log Out
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
