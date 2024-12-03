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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MapPin, MoveDown, MoveUp } from "lucide-react";
import Image from "next/image";
import React from "react";
// import avatar from "@/assets/images/avatar.png"

const skills = [
  {
    value: "react",
    label: "React",
    image: "../../../assets/logos/react.svg",
    keywords: [],
  },
];

export default function Home() {
  const avatar = require("../../../assets/images/avatar.png");
  const react = require("../../../assets/logos/react.svg");

  return (
    <div className="flex justify-center w-full">
      <div className="flex-col justify-between w-[100%] sm:w-[100%] md:w-[80%] lg:w-[70%] xl:w-[65%] 2xl:w-[60%]">
        <div className="flex justify-center">
          <Button variant="ghost">
            <MoveUp />
            <span>Home</span>
          </Button>
        </div>
        <div className="">
          <Card>
            <CardHeader>
              <div className="flex flex-row items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/jpe0824.png" />
                  <AvatarFallback>JE</AvatarFallback>
                </Avatar>
                <div className="flex flex-col px-4">
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
                outdated technologies into today's standard.
              </p>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>More about Jason</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>About Jason</DialogTitle>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
          <h1 className="text-2xl font-semibold leading-none tracking-tight mt-10 mb-5 ml-2">
            Skills & Tech Stack
          </h1>
          <Card className="my-4">
            <CardHeader>
              <CardTitle>Frontend & Design</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Image
                  className="h-6 w-6"
                  src={require("../../../assets/logos/react.svg")}
                  alt="react"
                />
                <div className="text-lg text-muted-foreground m-2">React</div>
              </div>
            </CardContent>
          </Card>
          <Card className="my-4">
            <CardHeader>
              <CardTitle>Backend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Image
                  className="h-6 w-6"
                  src={require("../../../assets/logos/react.svg")}
                  alt="react"
                />
                <div className="text-lg text-muted-foreground m-2">React</div>
              </div>
            </CardContent>
          </Card>
          <Card className="my-4">
            <CardHeader>
              <CardTitle>Cloud & DevOps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Image
                  className="h-6 w-6"
                  src={require("../../../assets/logos/react.svg")}
                  alt="react"
                />
                <div className="text-lg text-muted-foreground m-2">React</div>
              </div>
            </CardContent>
          </Card>
          <Card className="my-4">
            <CardHeader>
              <CardTitle>Management & Soft skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Image
                  className="h-6 w-6"
                  src={require("../../../assets/logos/react.svg")}
                  alt="react"
                />
                <div className="text-lg text-muted-foreground m-2">React</div>
              </div>
            </CardContent>
          </Card>
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
