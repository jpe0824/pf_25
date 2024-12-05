import { ExperienceTimeline } from "@/components/experience-timeline";
import { ProjectTimeline } from "@/components/project-timeline";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HoverAvatar } from "@/components/ui/hover-avatar";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  MoveUp,
  Phone,
} from "lucide-react";
// import Image from "next/image";
import React from "react";

interface SkillItemProps {
  skill: (typeof frontendSkills)[0];
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => (
  <div className="flex flex-row justify-content items-center my-2">
    {/* <Image width={20} height={20} src={skill.image} alt={skill.label} /> */}
    <Avatar className="h-6 w-6">
      <AvatarImage src={skill.image} />
      <AvatarFallback>UV</AvatarFallback>
    </Avatar>
    <div className="text-md text-muted-foreground ml-2 mr-4">{skill.label}</div>
  </div>
);

const frontendSkills = [
  {
    value: "react",
    label: "React",
    image: "/logos/react.svg",
    keywords: [],
  },
  {
    value: "react-native",
    label: "React Native",
    image: "/logos/react-native-1.svg",
    keywords: [],
  },
  {
    value: "nextjs",
    label: "NextJS",
    image: "/logos/next.svg",
    keywords: [],
  },
  {
    value: "angular",
    label: "Angular",
    image: "/logos/angular.svg",
    keywords: [],
  },
  {
    value: "tailwind",
    label: "Tailwind",
    image: "/logos/tailwind.svg",
    keywords: [],
  },
  {
    value: "figma",
    label: "Figma",
    image: "/logos/figma.svg",
    keywords: [],
  },
  {
    value: "javascript",
    label: "JavaScript",
    image: "/logos/js.svg",
    keywords: [],
  },
  {
    value: "typescript",
    label: "TypeScript",
    image: "/logos/typescript.svg",
    keywords: [],
  },
  {
    value: "html",
    label: "HTML",
    image: "/logos/html.svg",
    keywords: [],
  },
  {
    value: "css",
    label: "CSS",
    image: "/logos/css.svg",
    keywords: [],
  },
];

const backendSkills = [
  {
    value: "python",
    label: "Python",
    image: "/logos/python.svg",
    keywords: [],
  },
  {
    value: "node",
    label: "NodeJS",
    image: "/logos/nodejs.svg",
    keywords: [],
  },
  {
    value: "openapi",
    label: "OpenAPI",
    image: "/logos/openapi.svg",
    keywords: [],
  },
  {
    value: "postman",
    label: "Postman",
    image: "/logos/postman.svg",
    keywords: [],
  },
  {
    value: "fastapi",
    label: "FastAPI",
    image: "/logos/fastapi.svg",
    keywords: [],
  },
  // {
  //   value: "c",
  //   label: "C",
  //   image: "/logos/c.svg",
  //   keywords: [],
  // },
  // {
  //   value: "cplusplus",
  //   label: "C++",
  //   image: "/logos/c-1.svg",
  //   keywords: [],
  // },
  {
    value: "postgres",
    label: "Postgres",
    image: "/logos/postgresql.svg",
    keywords: [],
  },
  {
    value: "mongodb",
    label: "MongoDB",
    image: "/logos/mongodb.svg",
    keywords: [],
  },
  {
    value: "bash",
    label: "Bash",
    image: "/logos/bash.svg",
    keywords: [],
  },

  {
    value: "universe",
    label: "Universe MV",
    image: "/logos/universe.svg",
    keywords: [],
  },
  {
    value: "openai",
    label: "OpenAI GPTs",
    image: "/logos/openai-2.svg",
    keywords: [],
  },
];

const devopsSkills = [
  // {
  //   value: "aws",
  //   label: "AWS",
  //   image: "/logos/aws-2.svg",
  //   keywords: [],
  // },
  {
    value: "gcs",
    label: "GCS",
    image: "/logos/google-cloud-1.svg",
    keywords: [],
  },
  {
    value: "linux",
    label: "Linux",
    image: "/logos/linux-tux.svg",
    keywords: [],
  },
  {
    value: "vmware",
    label: "VMware",
    image: "/logos/vmware-1.svg",
    keywords: [],
  },
  {
    value: "docker",
    label: "Docker",
    image: "/logos/docker-4.svg",
    keywords: [],
  },
  {
    value: "kubernetes",
    label: "Kubernetes",
    image: "/logos/kubernets.svg",
    keywords: [],
  },
  {
    value: "netlify",
    label: "Netlify",
    image: "/logos/netlify.svg",
    keywords: [],
  },
  {
    value: "git",
    label: "Git",
    image: "/logos/git.svg",
    keywords: [],
  },
  {
    value: "github",
    label: "Github",
    image: "/logos/github.svg",
    keywords: [],
  },
];

const softSkills = [
  {
    value: "jira",
    label: "Jira",
    image: "/logos/jira-1.svg",
    keywords: [],
  },
  {
    value: "office",
    label: "MS Office",
    image: "/logos/office-1.svg",
    keywords: [],
  },
  {
    value: "thinking",
    label: "Critical Thinking",
    image: "/logos/brain.svg",
    keywords: [],
  },
  {
    value: "time",
    label: "Time Management",
    image: "/logos/clock.svg",
    keywords: [],
  },
  {
    value: "leadership",
    label: "Leadership",
    image: "/logos/leader.svg",
    keywords: [],
  },
  {
    value: "communication",
    label: "Communication",
    image: "/logos/phone.svg",
    keywords: [],
  },
];

export default function Home() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex-col justify-between w-[100%] sm:w-[100%] md:w-[80%] lg:w-[70%] xl:w-[65%] 2xl:w-[60%]">
        <div className="flex justify-center">
          <Button variant="ghost">
            <MoveUp />
            <span>Feed</span>
          </Button>
        </div>
        <div className="">
          <Card>
            <CardHeader>
              <div className="flex flex-row items-center">
                <div className="group relative inline-block">
                  <div className="absolute -inset-y-8 z-10">
                    <Avatar className="group-hover:opacity-0 rounded-full">
                      <AvatarImage src="/images/avatar.png" />
                      <AvatarFallback>JE</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="absolute -inset-y-8  z-10">
                    <Avatar className="opacity-0 group-hover:opacity-100 rounded-full">
                      <AvatarImage src="/images/avatar2.png" />
                      <AvatarFallback>JE</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="flex flex-col px-20">
                  <CardTitle>Jason Edman</CardTitle>
                  <CardDescription>
                    Full Stack Software Engineer
                  </CardDescription>
                  <CardDescription className="flex flex-row items-center">
                    <MapPin size={16}></MapPin>
                    <span>Utah, USA</span>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Experienced software engineer with a focus on full stack
                development.
              </p>
              <p>
                Building applications from the ground up, or modernizing
                outdated technologies into today&apos;s standard.
              </p>
            </CardContent>
            <CardFooter>
              {/* <Dialog>
                <DialogTrigger asChild>
                  <Button>More about Jason</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>About Jason</DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-row">
                    <Image
                      src="/images/family.png"
                      alt="family"
                      width={300}
                      height={300}
                    />
                    <div className="flex flex-col">
                    </div>
                  </div>
                </DialogContent>
              </Dialog> */}
              <div className="flex">
                <Button
                  variant="outline"
                  className="border-dodgerblue bg-gradient-to-r hover:from-dodgerblue hover:to-sky-500"
                >
                  Resume
                  <Download />
                </Button>
                <Button variant="ghost" className="ml-4">
                  <a href={`mailto:${"jason.e24@gmail.com"}`}>
                    <Mail color="#FDB927" />
                  </a>
                </Button>
                <Button variant="ghost">
                  <a href="https://github.com/jpe0824" target="_blank">
                    <Github />
                  </a>
                </Button>
                <Button variant="ghost">
                  <a
                    href="https://www.linkedin.com/in/jason-edman-140724241/"
                    target="_blank"
                  >
                    <Linkedin color="#0a66c2" />
                  </a>
                </Button>
                <Button variant="ghost">
                  <a
                    href="https://discordapp.com/users/691278886666895382"
                    target="_blank"
                  >
                    <MessageSquare color="#5865F2" />
                  </a>
                </Button>
              </div>
            </CardFooter>
          </Card>
          <div className="flex flex-col" id="experience">
            <h1 className="text-2xl font-semibold leading-none tracking-tight mt-10 mb-5 ml-2">
              Experience
            </h1>
            <ExperienceTimeline />
          </div>
          <h1 className="text-2xl font-semibold leading-none tracking-tight mt-10 mb-5 ml-2">
            Skills & Tech Stack
          </h1>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Frontend & Design</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center">
                  {frontendSkills.map((skill) => (
                    <SkillItem key={skill.value} skill={skill} />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center">
                  {backendSkills.map((skill) => (
                    <SkillItem key={skill.value} skill={skill} />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cloud & DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center">
                  {devopsSkills.map((skill) => (
                    <SkillItem key={skill.value} skill={skill} />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Management & Soft skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center">
                  {softSkills.map((skill) => (
                    <SkillItem key={skill.value} skill={skill} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex flex-col h-screen" id="projects">
          <h1 className="text-2xl font-semibold leading-none tracking-tight mt-10 mb-5 ml-2">
            Projects
          </h1>
          <ProjectTimeline />
        </div>
      </div>
    </div>
  );
}
