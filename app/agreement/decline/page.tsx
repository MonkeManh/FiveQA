import DeclineUserAgreement from "@/components/agreement/decline-user-agreement";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { EAccountStatuses } from "@/models/enums";
import { getServerUser } from "@/services/authService";
import { redirect } from "next/navigation";

export default async function AgreementPage() {
  const user = await getServerUser();

  if (!user) {
    return redirect("/login");
  }

  if (user.account_status === EAccountStatuses.TOS) {
    return (
      <div>
        <Navbar />
        <DeclineUserAgreement />
        <Footer />
      </div>
    );
  } else if (user.account_status === EAccountStatuses.SUSPENDED) {
    return redirect("/suspended");
  } else {
    return redirect("/dashboard");
  }
}
