import CreateCallForm from "@/components/create-call/create-call-form";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { EAccountStatuses } from "@/models/enums";
import { getServerUser } from "@/services/authService";
import { redirect } from "next/navigation";

export default async function CreateCallPage() {
  const user = await getServerUser();

  if (!user) {
    return redirect("/login");
  } else if (user.account_status === EAccountStatuses.SUSPENDED) {
    return redirect("/suspended");
  } else if (user.account_status === EAccountStatuses.TOS) {
    return redirect("/agreement");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="w-full flex justify-center flex-1">
        <div className="flex-1 container py-8">
          <CreateCallForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
