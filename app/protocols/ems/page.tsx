import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import EMSProtocolsContent from "@/components/protocols/ems-protocol-content";
import { EAccountStatuses } from "@/models/enums";
import { getServerUser } from "@/services/authService";
import { redirect } from "next/navigation";

export default async function EMSProtocolsPage() {
  const user = await getServerUser();
  if (!user) return redirect("/login");

  if (user.account_status === EAccountStatuses.SUSPENDED) {
    return redirect("/suspended");
  } else if (user.account_status === EAccountStatuses.TOS) {
    return redirect("/agreement");
  }

  return (
    <main>
      <Navbar />
      <EMSProtocolsContent />
      <Footer />
    </main>
  );
}
