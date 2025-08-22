"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  AlertTriangle,
  Shield,
  Users,
  FileText,
  Gavel,
  Eye,
  Heart,
  Code,
} from "lucide-react";
import { toast } from "sonner";
import { IUser } from "@/models/interfaces";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface AgreementPageContentProps {
  user: IUser;
}

export default function AgreementPageContent({
  user,
}: AgreementPageContentProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter()

  async function handleAccept() {
    if (user.account_status !== "tos") return;
    setIsLoading(true);
    try {
      const res = await fetch("/api/user/accept-agreement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id }),
      });

      if (res.status === 200) {
        setIsLoading(false);
        toast.success("Terms accepted! Redirecting...");
        return router.push("/dashboard");
      } else {
        const errorText = await res.text();
        console.error("Error accepting agreement:", errorText);
        toast.error("Failed to accept terms. Please try again.");
      }
    } catch (error) {
      console.error("Error accepting agreement:", error);
      toast.error("An error occurred. Please try again.");
    }
    setIsLoading(false);
  }

  async function handleDecline() {
    router.push("/agreement/decline");
  }

  return (
    <div className="flex justify-center">
      <div className="min-h-screen container p-6">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">
              FiveQA User Agreement
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please read and accept the following terms and conditions before
              using FiveQA, a 911 call processing software designed for the
              FiveM environment.
            </p>

            <div className="bg-red-100 dark:bg-red-950/30 border-2 border-red-300 dark:border-red-700 p-4 rounded-lg max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-red-800 dark:text-red-200 mb-2">
                <AlertTriangle className="h-6 w-6" />
                <span className="font-bold text-lg">IMPORTANT DISCLAIMER</span>
              </div>
              <p className="text-red-800 dark:text-red-200 font-semibold text-center">
                FiveQA is NOT endorsed by, affiliated with, or part of Priority
                Dispatch Corporation. This software is an independent project
                created for FiveM roleplay simulation only.
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 text-amber-600 bg-amber-50 dark:bg-amber-950/20 p-3 rounded-lg">
              <AlertTriangle className="h-5 w-5" />
              <span className="font-medium">
                This software is NOT intended as a replacement for real
                emergency services
              </span>
            </div>
          </div>

          {/* Main Agreement Sections */}
          <div className="space-y-6">
            {/* Monetization Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gavel className="h-5 w-5" />
                  1. Monetization Prohibition
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground font-medium">
                  Users are strictly prohibited from generating any form of
                  revenue or monetary gain from the use of FiveQA.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">
                    This includes but is not limited to:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>
                      Streaming FiveQA content for monetary gain (donations,
                      subscriptions, ad revenue)
                    </li>
                    <li>
                      Reselling, redistributing, or licensing the software to
                      third parties
                    </li>
                    <li>Charging fees for access to servers running FiveQA</li>
                    <li>
                      Creating paid content, tutorials, or courses featuring
                      FiveQA
                    </li>
                    <li>
                      Using FiveQA as part of any commercial service or business
                      operation
                    </li>
                    <li>
                      Accepting payment for FiveQA-related services or support
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="text-green-800 dark:text-green-200 font-medium">
                    ✓ Personal Use Allowed: Users are permitted to duplicate and
                    modify FiveQA for their own personal, non-commercial use.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Intended Use */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  2. Intended Use & Limitations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-foreground">
                    FiveQA is designed exclusively for:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>
                      Educational and training purposes within FiveM roleplay
                      environments
                    </li>
                    <li>
                      Simulation of emergency call processing for entertainment
                    </li>
                    <li>Non-commercial community roleplay scenarios</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                  <p className="text-red-800 dark:text-red-200 font-medium">
                    ⚠️ FiveQA must never be used for actual emergency services
                    or real-world emergency response.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  3. User Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">
                    All users must:
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Understand this is simulation software only</li>
                    <li>
                      Comply with all applicable local, state, and federal laws
                    </li>
                    <li>
                      Respect intellectual property rights and licensing terms
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Heart className="h-5 w-5 text-purple-600" />
                        Community Encouragement
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-purple-800 dark:text-purple-200 mb-3">
                        We actively encourage and welcome community involvement:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-purple-700 dark:text-purple-300 text-sm">
                        <li>
                          Submit suggestions for new features and improvements
                        </li>
                        <li>
                          Report bugs and technical issues to help us improve
                        </li>
                        <li>Share feedback about your user experience</li>
                        <li>Contribute to community discussions and support</li>
                        <li>Help other users learn and troubleshoot</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Personal Use & Modification Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  4. Personal Use & Modification Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground font-medium">
                  Users have the right to duplicate and modify FiveQA for
                  personal use under the following conditions:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-green-700 dark:text-green-400">
                      ✓ Allowed
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                      <li>Duplicate the software for personal servers</li>
                      <li>Modify code for your own use</li>
                      <li>Create custom features for personal enjoyment</li>
                      <li>
                        Share modifications with friends (non-commercially)
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-red-700 dark:text-red-400">
                      ✗ Prohibited
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                      <li>Commercial distribution of modifications</li>
                      <li>Selling access to modified versions</li>
                      <li>Monetizing any derivative works</li>
                      <li>Claiming ownership of original code</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/20 p-3 rounded-lg border border-amber-200 dark:border-amber-800">
                  <p className="text-amber-800 dark:text-amber-200 text-sm">
                    <strong>Important:</strong> The monetization prohibition
                    from Section 1 still applies to all modifications and
                    derivatives.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Privacy & Data */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  5. Privacy & Data Handling
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Authentication & Data Storage
                    </h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">
                      We use Discord authentication to verify user identity.
                      This data is stored and encrypted in our database purely
                      for authentication purposes.
                    </p>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      Email addresses are collected and used only to contact
                      users in cases of emergency or critical system updates.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">
                      Data Usage & Rights
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>
                        Authentication data is encrypted and stored securely
                      </li>
                      <li>
                        Personal call statistics are maintained for individual
                        user tracking
                      </li>
                      <li>
                        Users may request their information be deleted at any
                        time
                      </li>
                      <li>No data is shared with third parties.</li>
                      <li>
                        All simulation data generated within FiveQA is for
                        roleplay purposes only
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
                    <p className="text-green-800 dark:text-green-200 text-sm">
                      <strong>Data Deletion:</strong> To request deletion of
                      your personal data, contact the development team through
                      our support channels.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Liability & Disclaimers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  6. Liability & Disclaimers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  FiveQA is provided "as is" without warranty of any kind. The
                  developers disclaim all liability for:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Any damages resulting from software use or misuse</li>
                  <li>Server downtime, data loss, or technical issues</li>
                  <li>Actions taken by users within FiveM environments</li>
                  <li>Compliance with local regulations or server rules</li>
                </ul>
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    By using FiveQA, you acknowledge that you understand this is
                    simulation software and agree to use it responsibly within
                    the FiveM ecosystem.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator />

          {/* Agreement Actions */}
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              By clicking "I Agree", you confirm that you have read, understood,
              and agree to comply with all terms outlined above.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                disabled={isLoading}
                variant="outline"
                size="lg"
                onClick={handleDecline}
              >
                Decline
              </Button>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                onClick={handleAccept}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "I Agree & Continue"}
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-muted-foreground pt-8 border-t">
            <p>FiveQA User Agreement • Last Updated: 8/15/2025</p>
            <p className="mt-1">
              For questions or concerns, please contact the development team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
