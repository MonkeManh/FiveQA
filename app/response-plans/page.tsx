import Footer from "@/components/footer";
import ResponsePlansLanding from "@/components/response-plans/response-plan-content";
import { getServerUser } from "@/services/authService";
import { redirect } from "next/navigation";

export default async function ResponsePlanPage() {
  const user = await getServerUser();
  if (!user) return redirect("/login");

  if (user.account_status === "suspended") {
    return redirect("/suspended");
  } else if (user.account_status === "tos") {
    return redirect("/agreement");
  }

  return (
    <div>
      <ResponsePlansLanding />
      <Footer />
    </div>
  );
}
