import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import EMSProtocolsContent from "@/components/protocols/ems-protocol-content";
import { getServerUser } from "@/services/authService";
import { redirect } from "next/navigation";

export default async function EMSProtocolsPage() {
  const user = await getServerUser();
  if (!user) return redirect("/login");

  if (user.account_status === "suspended") {
    return redirect("/suspended");
  } else if (user.account_status === "tos") {
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
