import DashboardContent from "@/components/dashboard/dashboard-content";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { EAccountStatuses } from "@/models/enums";
import { getServerUser } from "@/services/authService";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await getServerUser();
  if (!user) {
    redirect("/login");
  } else if (user.account_status === EAccountStatuses.SUSPENDED) {
    return redirect("/suspended");
  } else if (user.account_status === EAccountStatuses.TOS) {
    return redirect("/agreement");
  }

  return (
    <div>
      <Navbar />
      <DashboardContent user={user} />
      <Footer />
    </div>
  );
}
