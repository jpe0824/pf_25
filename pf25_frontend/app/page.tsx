"use client";

import { BackgroundLines } from "@/components/ui/background-lines";
import React from "react";
import { useRouter } from "next/navigation";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function Landing() {
  const router = useRouter();
  const textClass =
    "max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center";

  return (
    <>
      <BackgroundLines className="flex flex-col items-center justify-center w-full min-h-screen p-6 sm:p-6 md:p-8 lg:p-10">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-6xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Jason Edman
        </h2>
        {/* <TypewriterEffect
          words={[
            { text: "Full", className: textClass },
            { text: "Stack", className: textClass },
            { text: "Software", className: textClass },
            { text: "Engineer", className: textClass },
          ]}
        /> */}
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Full Stack Software Engineer
        </p>
        <div className="py-10">
          <button
            type="button"
            onClick={() => router.push("/home")}
            className="p-[3px] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-lakerpurple to-dodgerblue rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Continue
            </div>
          </button>
        </div>
      </BackgroundLines>
    </>
  );
}
