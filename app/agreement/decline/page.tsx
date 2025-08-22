import DeclineUserAgreement from "@/components/agreement/decline-user-agreement";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { getServerUser } from "@/services/authService";
import { redirect } from "next/navigation";

export default async function AgreementPage() {
  const user = await getServerUser();

  if (!user) {
    return redirect("/login");
  }

  if (user.account_status === "tos") {
    return (
      <div>
        <Navbar />
        <DeclineUserAgreement />
        <Footer />
      </div>
    );
  } else if (user.account_status === "suspended") {
    return redirect("/suspended");
  } else {
    return redirect("/dashboard");
  }
}
