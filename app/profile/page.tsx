import DispatchContent from "@/components/dispatch/dispatch-content";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProfilePageContent from "@/components/profile/profile-content";
import { getServerUser } from "@/services/authService";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await getServerUser();
  if (!user) {
    redirect("/login");
  } else if (user.account_status === "suspended") {
    return redirect("/suspended");
  } else if (user.account_status === "tos") {
    return redirect("/agreement");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <ProfilePageContent user={user} />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
