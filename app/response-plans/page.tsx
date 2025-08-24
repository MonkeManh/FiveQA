import Footer from "@/components/footer";
import ResponsePlansLanding from "@/components/response-plans/response-plan-content";
import { EAccountStatuses } from "@/models/enums";
import { getServerUser } from "@/services/authService";
import { redirect } from "next/navigation";

export default async function ResponsePlanPage() {
  const user = await getServerUser();
  if (!user) return redirect("/login");

  if (user.account_status === EAccountStatuses.SUSPENDED) {
    return redirect("/suspended");
  } else if (user.account_status === EAccountStatuses.TOS) {
    return redirect("/agreement");
  }

  return (
    <div>
      <ResponsePlansLanding />
      <Footer />
    </div>
  );
}
