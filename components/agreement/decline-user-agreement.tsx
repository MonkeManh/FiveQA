"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { XCircle, ArrowLeft, AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DeclineUserAgreement() {
  const router = useRouter();

  return (
    <div className="flex justify-center">
      <div className="min-h-screen container p-6">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 mt-10">
            <div className="flex justify-center">
              <XCircle className="h-16 w-16 text-red-500" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">
              Access Denied
            </h1>
            <p className="text-lg text-muted-foreground">
              You have declined the FiveQA User Agreement
            </p>
          </div>

          {/* Main Content */}
          <Card className="border-red-200 dark:border-red-800 rounded-xs">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                <AlertTriangle className="h-5 w-5" />
                User Agreement Required
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">
                You have declined the user agreement and will not be able to
                access FiveQA until you accept the terms and conditions.
              </p>

              <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-xs border border-red-200 dark:border-red-800">
                <p className="text-red-800 dark:text-red-200 text-sm">
                  <strong>Why is this required?</strong> The user agreement
                  ensures all users understand that FiveQA is simulation
                  software only and establishes important usage guidelines to
                  protect both users and the development team.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">
                  To use FiveQA, you must agree to:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm ml-4">
                  <li>Use the software for simulation purposes only</li>
                  <li>Not monetize or commercialize the software in any way</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>
                    Understand this is not affiliated with Priority Dispatch
                    Corporation
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              If you change your mind, you can return to review and accept the
              user agreement.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 bg-transparent rounded-xs"
                onClick={() => router.push("/agreement")}
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Agreement
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-muted-foreground pt-8 border-t">
            <p>FiveQA • Access requires user agreement acceptance</p>
            <p className="mt-1">
              For questions about the terms, please contact the development
              team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
