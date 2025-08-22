"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ICallsignModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallsignModal({
  isOpen,
  onClose,
}: ICallsignModalProps) {
  const [callsign, setCallsign] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!callsign.trim()) {
      return;
    }

    setIsLoading(true);

    try {
      await localStorage.setItem("CALLSIGN", callsign.trim());
      window.dispatchEvent(
        new CustomEvent("callsign-edited", { detail: callsign.trim() })
      );
      onClose();
      setCallsign("");
    } catch (error) {
      console.error("Error starting dispatch:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setCallsign("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Start Dispatching</DialogTitle>
          <DialogDescription>
            Enter your callsign to begin your dispatch session
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-4">
              <Input
                id="callsign"
                value={callsign}
                onChange={(e) => setCallsign(e.target.value.toUpperCase())}
                placeholder="Enter your callsign"
                className="flex-1"
                autoFocus
                disabled={isLoading}
                autoComplete="off"
              />
            </div>
          </div>
          <DialogFooter className="mt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="destructive"
              disabled={!callsign.trim() || isLoading}
            >
              {isLoading ? "Starting..." : "Start Dispatching"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
