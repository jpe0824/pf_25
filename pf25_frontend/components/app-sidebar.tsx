"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  BadgeInfo,
  BriefcaseBusiness,
  Computer,
  Github,
  LinkedinIcon,
  Mail,
  MessageSquare,
  Newspaper,
} from "lucide-react";
import { TypedWords } from "./typed-words";
import { ModeToggle } from "./mode-toggle";

const items = [
  {
    title: "Feed",
    url: "/feed",
    icon: Newspaper,
  },
  {
    title: "About",
    url: "/about",
    icon: BadgeInfo,
  },
  {
    title: "Experience",
    url: "/about/#experience",
    icon: BriefcaseBusiness,
  },
  {
    title: "Projects",
    url: "/about/#projects",
    icon: Computer,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        {/* <TypedWords /> Disabled for now, needs fix */}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Portfolio</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Contact & Socials</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem key={"Email"}>
                <SidebarMenuButton asChild>
                  <a href={`mailto:${"jason.e24@gmail.com"}`}>
                    <Mail />
                    <span>Email</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem key={"Github"}>
                <SidebarMenuButton asChild>
                  <a href="https://github.com/jpe0824" target="_blank">
                    <Github />
                    <span>Github</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem key={"Linkedin"}>
                <SidebarMenuButton asChild>
                  <a
                    href="https://www.linkedin.com/in/jason-edman-140724241/"
                    target="_blank"
                  >
                    <LinkedinIcon />
                    <span>LinkedIn</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem key={"Discord"}>
                <SidebarMenuButton asChild>
                  <a
                    href="https://discordapp.com/users/691278886666895382"
                    target="_blank"
                  >
                    <MessageSquare />
                    <span>Discord</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Theme</SidebarGroupLabel>
          <SidebarGroupContent>
            <ModeToggle></ModeToggle>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
