import Footer from "@/components/footer";
import LocationList from "@/components/locations/location-list";
import Navbar from "@/components/navbar";
import { EAccountStatuses } from "@/models/enums";
import { getServerUser } from "@/services/authService";
import { getLocations } from "@/services/dataService";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export default async function LocationsPage() {
  const user = await getServerUser();
  const locations = await getLocations()

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
          <LocationList user={user} locations={locations}  />
        </div>
      </main>
      <Footer />
    </div>
  );
}
