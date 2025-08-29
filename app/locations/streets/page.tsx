import Footer from "@/components/footer";
import StreetList from "@/components/locations/street-list";
import Navbar from "@/components/navbar";
import { EAccountStatuses } from "@/models/enums";
import { getServerUser } from "@/services/authService";
import { getStreets } from "@/services/dataService";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export default async function StreetsPage() {
  const user = await getServerUser();
  const streets = await getStreets();

  if (!user) {
    return redirect("/login");
  } else if (user.account_status === EAccountStatuses.SUSPENDED) {
    return redirect("/suspended");
  } else if (user.account_status === EAccountStatuses.TOS) {
    return redirect("/agreement");
  } else if (!user.isAdmin) {
    toast.error("Unauthorized!");
    return redirect("/dashboard");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="w-full flex justify-center flex-1">
        <div className="flex-1 container py-8">
          <StreetList user={user} streets={streets} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
