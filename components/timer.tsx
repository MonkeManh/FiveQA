"use client";
import { formatElapsedTime } from "@/lib/emsCaseHelpers";
import { IEMSCase } from "@/models/interfaces";
import { useEffect, useState } from "react";

function formatTime(seconds: number): string {
  if (seconds < 60) return `:${seconds.toString().padStart(2, "0")}`;
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

interface ITimerDisplayProps {
  emsCase: IEMSCase;
}

export default function TimerDisplay({ emsCase }: ITimerDisplayProps) {
  const [elapsedTime, setElapsedTime] = useState<string>("00:00");

  // Keep track of case time
  useEffect(() => {
    if (!emsCase.case_entry.page_opened_time) return;

    const interval = setInterval(() => {
      setElapsedTime(formatElapsedTime(emsCase.case_entry.page_opened_time));
    }, 1000);

    return () => clearInterval(interval);
  }, [emsCase.case_entry.page_opened_time]);

  return (
    <div className="font-mono font-bold text-primary text-lg">
      {elapsedTime}
    </div>
  );
}
