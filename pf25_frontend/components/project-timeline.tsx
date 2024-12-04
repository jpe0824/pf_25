import Image from "next/image";
import React from "react";
import { TimelineFlipped } from "./ui/timeline-flipped";

export function ProjectTimeline() {
  const data = [
    {
      title: "Shapeshift",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Shapeshift is a fitness app built for tracking and building fitness
            plans.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Utilizing AI to build out plans. Exercise tracking is
            simple and intuitive for the user.
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "Thousand Hours",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Thousand hours is used to track outside time. It includes a
            leaderboard and some simple tracking and logging tools.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            This site is designed to be simple, the focus should be on getting
            more time outside.
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "Old Portfolio",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            The old jasonedman.dev portfolio.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Rather than iterating and updating an existing site, the goal is to
            use newer frameworks and technologies.
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "Discord Bot",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            A fun project that sparked an interest in javascript
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "Reunion site",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Family reunion needed an RSVP link, built an informative site with
            an RSVP form.
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <TimelineFlipped data={data} />
    </div>
  );
}
