"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import CallsignModal from "./modals/callsign-modal";
import { IUser } from "@/models/interfaces";

interface IClientNavInfoProps {
  user: IUser | null;
}

export default function ClientNavInfo({ user }: IClientNavInfoProps) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [callsign, setCallsign] = useState<string | null>("C-000");
  const [zuluTime, setZuluTime] = useState<string>("00:00");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const dispatchPaths = ["/dispatch", "/create-call", "/summary", "/dashboard"];
  const isDispatchPage = dispatchPaths.some((path) =>
    pathname.startsWith(path)
  );

  useEffect(() => {
    if (isDispatchPage) {
      const storedCallsign = localStorage.getItem("CALLSIGN");
      if (!storedCallsign) {
        setIsModalOpen(true);
      }
      setCallsign(storedCallsign);
    }

    const updateZuluTime = () => {
      setZuluTime(new Date().toUTCString().split(" ")[4].substring(0, 5));
    };

    updateZuluTime();
    const interval = setInterval(updateZuluTime, 1000);

    const handleCallsignChange = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      const newCallsign = customEvent.detail;
      setCallsign(newCallsign);
    };

    window.addEventListener("callsign-edited", handleCallsignChange);

    setIsLoading(false);
    return () => {
      clearInterval(interval);
      window.removeEventListener("callsign-edited", handleCallsignChange);
    };
  }, [isDispatchPage, router]);

  useEffect(() => {}, []);

  const navLinks = [
    { href: "/protocols", label: "Protocols" },
    { href: "/response-plans", label: "Response Plans" },
    { href: "/glossary", label: "Glossary" },
    { href: "/guides", label: "Guides" }
  ];

  if (isLoading) return null;

  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 hidden h-full items-center justify-center lg:flex">
      {isDispatchPage && user ? (
        <>
          {callsign && (
            <div className="bg-muted px-3 py-1 rounded-xs font-medium text-lg mr-2">
              Dispatcher: {callsign}
            </div>
          )}
          <div className="bg-muted px-3 py-1 rounded-xs font-medium text-lg">
            {zuluTime}
          </div>
        </>
      ) : user ? (
        <nav className="flex items-center gap-2 text-sm">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 rounded-xs font-medium transition-all hover:bg-muted hover:text-primary ${
                pathname.includes(href) ? "bg-muted text-primary" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      ) : null}
      <CallsignModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
