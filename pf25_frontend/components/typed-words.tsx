"use client";

import { Terminal } from "lucide-react";
import {
  TypewriterEffectSmooth,
} from "./ui/typewriter-effect";

const words = [
  { text: "Hi" },
  { text: "👋" },
  { text: "I'm" },
  { text: "Jason" },
];

export function TypedWords() {
  return (
    <div className="flex flex-row items-center m-2">
      <Terminal className="mr-1" />
      <TypewriterEffectSmooth
        words={words}
        className="text-sm"
        cursorClassName="text-sm"
      />
    </div>
  );
}
