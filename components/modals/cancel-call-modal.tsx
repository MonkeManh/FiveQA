import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface CallsignModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallsignModal({ isOpen, onClose }: CallsignModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [runNumber, setRunNumber] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!isOpen) return;
    const NEW_CALL = localStorage.getItem("NEW_CALL");
    if (!NEW_CALL) {
      onClose();
      toast.error("There is no call to cancel.");
      return;
    }
    const callData = JSON.parse(NEW_CALL);
    if (callData && callData.run_number) {
      setRunNumber(callData.run_number);
    }
  }, [isOpen]);

  const handleAbandonCase = async () => {
    setIsLoading(true);
    if (!runNumber) {
      toast.error("No run number found to abandon.");
      return;
    }

    if (!localStorage.getItem("NEW_CALL")) {
      toast.error("No call found to abandon.");
      return;
    }

    try {
      const res = await fetch("/api/call/abandon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ run_number: runNumber }),
      });

      if (res.status === 200) {
        const data = await res.json();
        toast.success(data.message || "Call canceled successfully.");
        router.back();
        localStorage.removeItem("NEW_CALL");
      } else if (res.status === 400) {
        const errorText = await res.text();
        toast.error(`Failed to abandon case: ${errorText}`);
      } else if (res.status === 401) {
        toast.error("Request could not be authenticated");
      } else if (res.status === 403) {
        toast.error("User account is not active or you are not authorized.");
      } else if (res.status === 404) {
        localStorage.removeItem("NEW_CALL");
        router.back();
      } else {
        const errorText = await res.text();
        toast.error(`Failed to abandon case: ${errorText}`);
        localStorage.removeItem("NEW_CALL");
      }
      onClose();
    } catch (error) {
      console.error("Error abandoning case:", error);
      toast.error("Failed to abandon case. Please try again.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] rounded-xs">
        <DialogHeader>
          <DialogTitle className="text-destructive">
            Abandon Case {runNumber}
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to abandon this case? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-4">
          <Button
            variant="outline"
            onClick={onClose}
            className="cursor-pointer rounded-xs"
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleAbandonCase();
              setIsLoading(false);
            }}
            className="cursor-pointer bg-red-600 hover:bg-red-700 text-white rounded-xs"
            disabled={isLoading}
          >
            {isLoading ? "Abandoning..." : "Abandon Case"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
