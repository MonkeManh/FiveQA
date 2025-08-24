"use client";

import { DEFAULT_SETTINGS } from "@/lib/settings";
import { ISettings, IUser } from "@/models/interfaces";
import {
  BookOpen,
  FileText,
  Home,
  Phone,
  Settings,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import LoadingState from "../loading-state";

interface IDispatchContentProps {
  user: IUser;
}

export default function DispatchContent({ user }: IDispatchContentProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [settings, setSettings] = useState<ISettings>(
    (user.settings as ISettings) || DEFAULT_SETTINGS
  );

  useEffect(() => {
    const storedSettings = localStorage.getItem("SETTINGS");
    if (storedSettings) {
      setSettings(JSON.parse(storedSettings));
    }
    setIsLoading(false);

    const handleSettingsChange = (event: Event) => {
      const customEvent = event as CustomEvent<ISettings>;
      const newSettings = customEvent.detail;
      setSettings(newSettings);
    };

    window.addEventListener("settings-change", handleSettingsChange);
    return () => {
      window.removeEventListener("settings-change", handleSettingsChange);
    };
  }, []);

  return (
    <div className="min-h-[70vh] flex justify-center">
      <div className="container my-10">
        <header className="flex items-center justify-between mb-6">
          <div className="flex space-x-3">
            <Link
              href="/dashboard"
              className="p-3 border bg-sky-500/10 border-muted/50 rounded-xs hover:bg-sky-500/25 transition-colors group relative"
              title="Dashboard"
            >
              <Home className="h-4 w-4 text-sky-500" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-secondary text-primary text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                Dashboard
              </div>
            </Link>

            <Link
              href="/protocols"
              className="p-3 border bg-blue-500/10 border-muted/50 rounded-xs hover:bg-blue-500/25 transition-colors group relative"
              title="Protocols"
            >
              <FileText className="h-4 w-4 text-blue-500" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-secondary text-primary text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                Protocols
              </div>
            </Link>

            <Link
              href="/response-plans"
              className="p-3 border bg-green-500/10 border-muted/50 rounded-xs hover:bg-green-500/25 transition-colors group relative"
              title="Response Plans"
            >
              <Shield className="h-4 w-4 text-green-500" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-secondary text-primary text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                Response Plans
              </div>
            </Link>

            <Link
              href="/guides"
              className="p-3 border bg-purple-500/10 border-muted/50 rounded-xs hover:bg-purple-500/25 transition-colors group relative"
              title="Guides"
            >
              <BookOpen className="h-4 w-4 text-purple-500" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-secondary text-primary text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                Guides
              </div>
            </Link>

            <Link
              href="/reconfigure"
              className="p-3 border bg-orange-500/10 border-muted/50 rounded-xs hover:bg-orange-500/25 transition-colors group relative"
              title="Reconfigure"
            >
              <Settings className="h-4 w-4 text-orange-500" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-secondary text-primary text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                Reconfigure
              </div>
            </Link>
          </div>
          <div>
            <Link href="/create-call">
              <Button
                variant="destructive"
                className="flex-1 sm:flex-none cursor-pointer rounded-xs"
              >
                <Phone className="mr-2 h-5 w-5" />
                Create Call
              </Button>
            </Link>
          </div>
        </header>
        <section className="flex w-full justify-center">
          <div className="container">
            {isLoading ? (
              <LoadingState />
            ) : (
              <div className="w-full flex justify-center items-center h-100">
                Hello!
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
