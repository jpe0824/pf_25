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
  const [currentWords, setCurrentWords] = useState(words[0]);
  const [lastSelectedIndex, setLastSelectedIndex] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      // Find the next index that hasn't been selected recently
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * words.length);
      } while (
        newIndex === lastSelectedIndex ||
        newIndex === (lastSelectedIndex + 1) % words.length
      );

      console.log(`New index: ${newIndex}`);
      const newWords = words[newIndex];

      // Only update if the selected words are different from current words
      if (JSON.stringify(newWords) !== JSON.stringify(currentWords)) {
        setCurrentWords(newWords);
        setLastSelectedIndex(newIndex);
      }
    }, 7000); // Switch every 7 seconds

    return () => clearInterval(intervalId);
  }, [currentWords, lastSelectedIndex]);

  return (
    <div className="flex flex-row items-center mx-2">
      <Terminal className="mt-2"/>
      <TypewriterEffectSmooth words={currentWords} />
    </div>
  );
}
