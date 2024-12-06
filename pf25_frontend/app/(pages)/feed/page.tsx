"use client";

import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Wrench } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Feed() {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <Wrench size={35} color="grey" />
        <h1 className="text-3xl text-neutral-500 m-4">Under Construction</h1>
        <Button
          onClick={() => {
            router.back();
          }}
        >
          <ArrowLeft />
          Go Back
        </Button>
      </div>
      <Footer />
    </div>
  );
}
