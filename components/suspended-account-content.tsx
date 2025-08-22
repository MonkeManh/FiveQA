import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Ban, ExternalLink, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function SuspendedAccountContent() {
  return (
    <div className="flex justify-center">
      <div className="min-h-screen container p-6">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Ban className="h-16 w-16 text-red-500" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Account Suspended</h1>
            <p className="text-lg text-muted-foreground">Your FiveQA account has been suspended</p>
          </div>

          {/* Main Content */}
          <Card className="border-red-200 dark:border-red-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                <AlertTriangle className="h-5 w-5" />
                Account Access Restricted
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">
                Your account has been suspended and you cannot access any FiveQA features or services at this time.
              </p>

              <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <p className="text-red-800 dark:text-red-200 text-sm">
                  <strong>What does this mean?</strong> Account suspensions are issued for violations of the user
                  agreement, inappropriate use of the software, or other policy violations. During suspension, you
                  cannot use any FiveQA services.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Common reasons for suspension:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm ml-4">
                  <li>Commercial use or monetization of the software</li>
                  <li>Violation of simulation-only usage policy</li>
                  <li>Inappropriate behavior or misuse of the platform</li>
                  <li>Failure to comply with user agreement terms</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Support Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you believe this suspension was issued in error or would like to appeal, please contact our support
                team.
              </p>

              <div className="flex gap-4 justify-center">
                <Button asChild size="lg" className="flex items-center gap-2">
                  <Link href="/discord" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Contact Support on Discord
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center text-xs text-muted-foreground pt-8 border-t">
            <p>FiveQA • Account suspended</p>
            <p className="mt-1">Please contact support for assistance with your account status.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
