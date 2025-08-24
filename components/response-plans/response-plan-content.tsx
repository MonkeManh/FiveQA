import Link from "next/link";
import { Shield, Flame, Heart, ArrowRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { emsPlans } from "@/data/plans/ems/emsPlans";

export default async function ResponsePlansLanding() {
  const services = [
    {
      id: "ems",
      title: "Emergency Medical Services",
      description: "Medical response plans for all emergency situations",
      icon: Heart,
      color: "bg-red-500",
      lightColor: "bg-red-500/10",
      borderColor: "border-red-200",
      hoverColor: "hover:bg-red-600",
      href: "/response-plans/ems",
      planCount: emsPlans.length,
    },
    {
      id: "fire",
      title: "Fire Department",
      description: "Fire suppression and rescue operations",
      icon: Flame,
      color: "bg-orange-500",
      lightColor: "bg-orange-500/10",
      borderColor: "border-orange-200",
      hoverColor: "hover:bg-orange-600",
      href: "/response-plans/fire",
      planCount: 156,
    },
    {
      id: "police",
      title: "Police Department",
      description: "Law enforcement response plans",
      icon: Shield,
      color: "bg-blue-500",
      lightColor: "bg-blue-500/10",
      borderColor: "border-blue-200",
      hoverColor: "hover:bg-blue-600",
      href: "/response-plans/police",
      planCount: 89,
    },
  ];

  const totalPlans = services.reduce(
    (sum, service) => sum + service.planCount,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 text-primary rounded-2xl mb-6">
            <Activity className="h-8 w-8 text-green-500" />
          </div>
          <h1 className="text-5xl font-bold text-primary mb-6 tracking-tight">
            Response Plans
          </h1>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
            Access comprehensive emergency response plans across all services
          </p>
          <Badge variant="outline" className="text-sm px-4 py-2 rounded-xs">
            {totalPlans} Total Plans Available
          </Badge>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                className={`group relative rounded-xs overflow-hidden border-2 ${service.borderColor} ${service.lightColor} hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-out`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent"></div>
                </div>

                <CardHeader className="text-center relative z-10">
                  <div
                    className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary mb-3 group-hover:text-primary/90 transition-colors">
                    {service.title}
                  </CardTitle>
                  <div className="flex items-center justify-center w-full">
                    <Badge
                      variant="secondary"
                      className="text-sm font-semibold px-3 py-1 rounded-xs"
                    >
                      {service.planCount} plans
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="text-center relative z-10 pb-8">
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <Link href={service.href}>
                    <Button
                      className={`w-full ${service.color} ${service.hoverColor} text-white font-semibold py-3 px-6 rounded-xs shadow-lg hover:shadow-xl transition-all duration-300 group-hover:translate-y-[-2px]`}
                      size="lg"
                    >
                      View Plans
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground text-sm">
            Emergency response plans are updated regularly to ensure optimal
            coordination
          </p>
        </div>
      </div>
    </div>
  );
}
