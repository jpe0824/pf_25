import { Button } from "@/components/ui/button";
import { MoveDown, MoveUp } from "lucide-react";
import React from "react";

export default function Home() {
  return (
    <div className="flex bg-sky-500 justify-center w-full">
      <div className="flex-col bg-sky-700 justify-between w-[100%] sm:w-[100%] md:w-[80%] lg:w-[70%] xl:w-[65%] 2xl:w-[60%]">
        <div className="flex justify-center">
          <Button variant="ghost">
            <MoveUp />
            <span>Home</span>
          </Button>
        </div>
        <div className="h-screen">
          <p>Title</p>
        </div>
        <div className="flex justify-center">
          <Button variant="ghost">
            <MoveDown />
            <span>Experience</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
