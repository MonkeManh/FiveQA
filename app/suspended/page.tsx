import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SuspendedAccountContent from "@/components/suspended-account-content";
import { getServerUser } from "@/services/authService";
import { redirect } from "next/navigation";

export default async function SuspendedPage() {
  const user = await getServerUser();

  if (!user) {
    return redirect("/login");
  }

  if (user.account_status === "suspended") {
    return (
      <div>
        <Navbar />
        <SuspendedAccountContent />
        <Footer />
      </div>
    );
  } else {
    return redirect("/dashboard");
  }
}
