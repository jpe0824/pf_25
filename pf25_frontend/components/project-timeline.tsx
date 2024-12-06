import Image from "next/image";
import React from "react";
import { TimelineFlipped } from "./ui/timeline-flipped";
import { Badge } from "./ui/badge";

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
            Utilizing AI to build out plans. Exercise tracking is simple and
            intuitive for the user.
          </p>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
            <Image
              src="/images/shapeshift1.png"
              alt="pwm"
              width={500}
              height={500}
              className="rounded-lg object-cover h-auto md:h-auto lg:h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/shapeshift2.png"
              alt="pwm"
              width={500}
              height={500}
              className="rounded-lg object-cover h-auto md:h-auto lg:h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/shapeshift3.png"
              alt="pwm"
              width={500}
              height={500}
              className="rounded-lg object-cover h-auto md:h-auto lg:h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/shapeshift4.png"
              alt="pwm"
              width={500}
              height={500}
              className="rounded-lg object-cover h-auto md:h-auto lg:h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="flex flex-wrap mt-8">
            <Badge className="m-1">React Native</Badge>
            <Badge className="m-1">Expo</Badge>
            <Badge className="m-1">Gluestack UI</Badge>
            <Badge className="m-1">Typescript</Badge>
            <Badge className="m-1">FastAPI</Badge>
            <Badge className="m-1">Python</Badge>
            <Badge className="m-1">MongoDB</Badge>
            <Badge className="m-1">GCS</Badge>
            <Badge className="m-1">Docker</Badge>
            <Badge className="m-1">OpenAI GPT's</Badge>
          </div>
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
          <div className="flex flex-wrap mt-8">
            <Badge className="m-1">React</Badge>
            <Badge className="m-1">Next.js</Badge>
            <Badge className="m-1">Typescript</Badge>
            <Badge className="m-1">FastAPI</Badge>
            <Badge className="m-1">Python</Badge>
            <Badge className="m-1">MongoDB</Badge>
            <Badge className="m-1">GCS</Badge>
            <Badge className="m-1">Docker</Badge>
          </div>
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
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/oldportfolio.png"
              alt="pwm"
              width={500}
              height={500}
              className="rounded-lg object-cover hover:object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/oldportfolio2.png"
              alt="pwm"
              width={500}
              height={500}
              className="rounded-lg object-cover hover:object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="flex flex-wrap mt-8">
            <Badge className="m-1">Angular</Badge>
            <Badge className="m-1">SCSS</Badge>
            <Badge className="m-1">Bootstrap</Badge>
            <Badge className="m-1">Typescript</Badge>
            <Badge className="m-1">Netlify</Badge>
          </div>
        </div>
      ),
    },
    // {
    //   title: "Discord Bot",
    //   content: (
    //     <div>
    //       <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
    //         A fun project that sparked an interest in javascript
    //       </p>
    //       <div className="grid grid-cols-2 gap-4"></div>
    //     </div>
    //   ),
    // },
    {
      title: "Reunion site",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Family reunion needed an RSVP link, built an informative site with
            an RSVP form.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/reunion1.webp"
              alt="pwm"
              width={500}
              height={500}
              className="rounded-lg object-cover hover:object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/reunion2.webp"
              alt="pwm"
              width={500}
              height={500}
              className="rounded-lg object-cover hover:object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="flex flex-wrap mt-8">
            <Badge className="m-1">Angular</Badge>
            <Badge className="m-1">SCSS</Badge>
            <Badge className="m-1">Bootstrap</Badge>
            <Badge className="m-1">Typescript</Badge>
            <Badge className="m-1">Netlify</Badge>
          </div>
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
