import Link from "next/link";
import { Shield, Flame, Ambulance, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getServerUser } from "@/services/authService";
import { redirect } from "next/navigation";
import { emsProtocols } from "@/data/protocols";

const protocolServices = [
  {
    title: "Police",
    icon: Shield,
    description:
      "Comprehensive law enforcement protocols covering emergency response, investigations, and public safety procedures.",
    protocolCount: 136,
    href: "/protocols/police",
    color: "text-blue-600",
    bg: "bg-blue-500/10",
  },
  {
    title: "Fire",
    icon: Flame,
    description:
      "Fire suppression, rescue operations, and hazardous materials response protocols for emergency situations.",
    protocolCount: 45,
    href: "/protocols/fire",
    color: "text-red-600",
    bg: "bg-red-500/10",
  },
  {
    title: "EMS",
    icon: Ambulance,
    description:
      "Emergency medical service protocols for patient care, transport, and life-saving interventions.",
    protocolCount: emsProtocols.length,
    href: "/protocols/ems",
    color: "text-green-600",
    bg: "bg-green-500/10",
  },
];

export default async function ProtocolsPage() {
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
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Emergency Response Protocols
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access comprehensive protocols for Police, Fire, and EMS services.
              Each protocol is designed to ensure efficient and effective
              emergency response procedures.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {protocolServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link key={service.title} href={service.href} className="group">
                  <Card
                    className="h-full transition-all duration-200 hover:shadow-xl hover:scale-[1.01] cursor-pointer"
                    style={{
                      boxShadow: `0 4px 20px ${service.bg}`,
                    }}
                  >
                    <CardHeader className="text-center pb-4">
                      <div
                        className={`mx-auto mb-4 p-3 rounded-full ${service.bg} w-fit transition-colors`}
                      >
                        <IconComponent className={`h-8 w-8 ${service.color}`} />
                      </div>
                      <CardTitle className="text-2xl font-bold">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {service.protocolCount} Active Protocols
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <Button className="w-full group-hover:bg-primary/90 transition-colors cursor-pointer">
                        View Protocols
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">
              About ProQA Protocols
            </h2>
            <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our protocol system is built on industry-standard emergency
              response procedures, continuously updated to reflect best
              practices and regulatory requirements. Each protocol includes
              step-by-step instructions, decision trees, and resource allocation
              guidelines to ensure consistent and effective emergency response
              across all service types. The system supports real-time updates
              and customization to meet local jurisdiction requirements while
              maintaining compliance with national standards.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
