import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AlertTriangle } from "lucide-react";
import { useEffect, useRef } from "react";

interface TestCaseModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (isDispatchingEarly: boolean) => void;
}

export function TestCaseModal({
  isOpen,
  onOpenChange,
  onConfirm,
}: TestCaseModalProps) {
  const noButtonRef = useRef<HTMLButtonElement>(null);

  // Focus the "No" button when the modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        noButtonRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-xs">
        <DialogTitle>Test Case Warning</DialogTitle>
        <DialogHeader className="flex flex-row items-center gap-4">
          <AlertTriangle className="h-6 w-6 text-amber-500" />
          <div>
            <DialogDescription className="text-foreground font-medium">
              You have marked this as a Test Case. Is that correct?
            </DialogDescription>
            <DialogDescription>
              Note: a "Yes" choice cannot be undone.
            </DialogDescription>
          </div>
        </DialogHeader>
        <DialogFooter className="flex flex-row-reverse gap-4">
          <Button
            ref={noButtonRef}
            variant="outline"
            onClick={() => onConfirm(false)}
            className="flex-1 rounded-xs"
          >
            No
          </Button>
          <Button
            variant="outline"
            onClick={() => onConfirm(true)}
            className="flex-1 rounded-xs"
          >
            Yes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
