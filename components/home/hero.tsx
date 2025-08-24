"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full h-screen relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Dispatch.png"
          alt="Emergency dispatch center"
          fill
          className="object-cover brightness-25"
          style={{ objectPosition: "50% 30%" }}
          priority
        />
      </div>

      <div
        className="flex justify-center px-4 md:px-6 relative z-20 transition-all duration-700 ease-out"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: Math.max(0, 1 - scrollY / 400),
        }}
      >
        <div className="container flex flex-col items-center gap-4 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            FiveQA
          </h1>
          <p className="max-w-[700px] text-lg sm:text-xl text-white/90">
            Advanced emergency dispatch and 911 call management system designed
            for reliability when it matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link href="/login">Start</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-background/20 hover:bg-background/30 border-white/20 text-white"
            >
              <Link href="/about" style={{ color: "#fff !important" }}>
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
