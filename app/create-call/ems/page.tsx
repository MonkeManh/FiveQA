import EMSCreateCallForm from "@/components/create-call/ems/ems-create-call-form";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { getServerUser } from "@/services/authService";
import { redirect } from "next/navigation";

export default async function CreateEMSCallPage() {
  const user = await getServerUser();

  if (!user) {
    return redirect("/login");
  } else if (user.account_status === "suspended") {
    return redirect("/suspended");
  } else if (user.account_status === "tos") {
    return redirect("/agreement");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="w-full flex justify-center flex-1">
        <div className="flex-1 container py-8">
          <EMSCreateCallForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
