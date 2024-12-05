"use client";

import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "./ui/typewriter-effect";

const words = [
  [{ text: "Hi 👋" }, { text: "I'm" }, { text: "Jason" }],
  [{ text: "Hello" }, { text: "World! 🌎" }],
  [{ text: "Go" }, { text: "Dodgers! ⚾" }],
  [{ text: "Software" }, { text: "Dev 💻" }],
  [{ text: "Full" }, { text: "Stack! 🔥" }],
  [{ text: "Go" }, { text: "Lakers! 🏀" }],

  // ... (other word arrays)
];

export function TypedWords() {
  const [currentWords, setCurrentWords] = useState(
    words[Math.floor(Math.random() * words.length)]
  );

  useEffect(() => {
    setCurrentWords(words[Math.floor(Math.random() * words.length)])
  }, [])

  return (
    <div className="flex flex-row items-center mx-2">
      <Terminal className="mt-2" />
      <TypewriterEffect words={currentWords} />
    </div>
  );
}
