import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import dynamic from "next/dynamic";
import { getServerUser } from "@/services/authService";
import ProfileMenu from "./profile-menu";

const ClientNavInfo = dynamic(() => import("@/components/ClientNavInfo"));

interface INavbarProps {
  transparent?: boolean;
}

export default async function Navbar({ transparent = false }: INavbarProps) {
  const user = await getServerUser();

  return (
    <header
      className={`top-0 z-50 w-full border-b shadow-xl ${
        transparent
          ? "bg-background/100 fixed"
          : "sticky bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      }`}
    >
      <div className="w-full flex justify-center">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/FiveQA.png"
                alt="FiveQA Logo"
                width={100}
                height={32}
                className="rounded-sm"
              />
            </Link>
          </div>

          <ClientNavInfo user={user} />

          <div className="flex items-center gap-4">
            <ThemeToggle />
            {user && (
              <>
                <ProfileMenu user={user} />
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
