import Footer from "@/components/footer";
import LoginForm from "@/components/login/login-form";
import Navbar from "@/components/navbar";
import { getServerUser } from "@/services/authService";
import { redirect } from "next/navigation";

export default async function StartPage() {
  const user = await getServerUser();
  if (user) {
    if(user.account_status === "suspended") {
      return redirect("/suspended");
    }
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-1/5 h-1/5 bg-gradient-to-br from-red-400 to-red-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-1/5 h-1/5 bg-gradient-to-tr from-blue-400 to-blue-500 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3 animate-pulse animation-delay-1000"></div>

        <div className="absolute top-1/4 left-1/4 w-1/6 h-1/6 bg-gradient-to-br from-red-400 to-red-500 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/7 h-1/7 bg-gradient-to-tr from-blue-400 to-blue-500 rounded-full blur-3xl animate-pulse animation-delay-1500"></div>
      </div>
      <div className="flex-1 flex items-center justify-center p-4">
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
}
