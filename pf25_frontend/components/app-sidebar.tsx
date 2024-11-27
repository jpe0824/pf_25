import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
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
  Home,
  Moon,
  Scroll,
  Terminal,
} from "lucide-react";
import { TypedWords } from "./typed-words";

const items = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
  {
    title: "About",
    url: "/about",
    icon: BadgeInfo,
  },
  {
    title: "Experience",
    url: "/experience",
    icon: BriefcaseBusiness,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Computer,
  },
  {
    title: "Resume",
    url: "/resume",
    icon: Scroll,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <TypedWords />
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
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
