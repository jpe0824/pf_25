import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Badge } from "./ui/badge";

export function ExperienceTimeline() {
  const data = [
    {
      title: "Today",
      titleContent: (
        <div>
          <p>Full Stack Software Engineer</p>
          <p>UAMPS</p>
          <p>August 2023 - Current</p>
        </div>
      ),
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Current work involves a wide variety of development.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            Development of UAMPS Alerts mobile application.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            Full stack development of UAMPS operations tools, and member
            gateway.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Tech stack modernization and maintaining legacy systems.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/uamps.png"
              alt="pwm"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/uamps2.png"
              alt="pwm"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="flex flex-wrap mt-8">
            <Badge className="m-1">React</Badge>
            <Badge className="m-1">React Native</Badge>
            <Badge className="m-1">Tailwind</Badge>
            <Badge className="m-1">Typescript</Badge>
            <Badge className="m-1">Python</Badge>
            <Badge className="m-1">FastAPI</Badge>
            <Badge className="m-1">SOAP</Badge>
            <Badge className="m-1">Universe MV</Badge>
            <Badge className="m-1">Universe BASIC</Badge>
            <Badge className="m-1">Docker</Badge>
            <Badge className="m-1">Linux</Badge>
            <Badge className="m-1">VMWare</Badge>
          </div>
        </div>
      ),
    },
    {
      title: "May 2024",
      titleContent: <div></div>,
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Completion of bachelors in software engineering from Utah Valley
            University
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "August 2023",
      titleContent: (
        <div>
          <p>Software Engineer</p>
          <p>OpenText</p>
          <p>July 2022 - August 2023</p>
        </div>
      ),
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Started as a full stack software engineer with UAMPS.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            Finished involvement of projects at OpenText.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            The primary focus here was building and modernizing products with a
            focus on the front end and user experience.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Product owner and lead developer of OpenText AM, Password Manager
            SaaS product.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/pwm1.webp"
              alt="pwm"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            {/* <Image
              src="/images/pwm2.webp"
              alt="pwm"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
            <Image
              src="/images/pwm3.webp"
              alt="pwm"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="flex flex-wrap mt-8">
            <Badge className="m-1">Angular</Badge>
            <Badge className="m-1">SCSS</Badge>
            <Badge className="m-1">Typescript</Badge>
            <Badge className="m-1">Java</Badge>
            <Badge className="m-1">Material UI</Badge>
            <Badge className="m-1">OpenAPI</Badge>
            <Badge className="m-1">Postman</Badge>
            <Badge className="m-1">Docker</Badge>
            <Badge className="m-1">Linux</Badge>
            <Badge className="m-1">VMWare</Badge>
          </div>
        </div>
      ),
    },
    {
      title: "July 2022",
      titleContent: (
        <div>
          <p>Software Engineer Intern</p>
          <p>Microfocus</p>
          <p>May 2022 - July 2022</p>
        </div>
      ),
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Started as a full time software engineer at OpenText, formerly
            Microfocus.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Finished software engineering internship with a focus on quality
            assurance and testing.
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "May 2022",
      titleContent: <div></div>,
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6">
            Start of software engineering internship at Microfocus.
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
          <div className="flex flex-wrap">
            <Badge className="m-1">Jasmine</Badge>
            <Badge className="m-1">Manual Testing</Badge>
            <Badge className="m-1">Typescript</Badge>
            <Badge className="m-1">Java</Badge>
            <Badge className="m-1">Postman</Badge>
            <Badge className="m-1">Linux</Badge>
            <Badge className="m-1">VMWare</Badge>
          </div>
        </div>
      ),
    },
    {
      title: "September 2021",
      titleContent: (
        <div>
          <p>Web Developer</p>
          <p>Freelance</p>
          <p>September 2021 - April 2022</p>
        </div>
      ),
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Started working as a freelance web developer. Primary focus of
            building elegant websites for smaller businesses.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Completed certificate of programming at Utah Valley University.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/mbp.webp"
              alt="pwm"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            {/* <Image
              src="/images/mbp2.webp"
              alt="pwm"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
            <Image
              src="/images/mbp3.webp"
              alt="pwm"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            {/* <Image
              src="/images/reunion2.webp"
              alt="pwm"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
          </div>
          <div className="flex flex-wrap mt-8">
            <Badge className="m-1">Typescript</Badge>
            <Badge className="m-1">Angular</Badge>
            <Badge className="m-1">Bootstrap</Badge>
            <Badge className="m-1">Netlify</Badge>
            <Badge className="m-1">Firebase</Badge>
            <Badge className="m-1">HTML</Badge>
            <Badge className="m-1">CSS</Badge>
          </div>
        </div>
      ),
    },
    {
      title: "June 2021",
      titleContent: <div></div>,
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Hello World! Start of education in pursuit of a Bachelors in
            Computer Science.
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
