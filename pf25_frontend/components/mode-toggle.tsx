"use client";

import * as React from "react";
import { Moon, MoonIcon, Sun, SunIcon, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <>
      <ToggleGroup
        type="single"
        defaultValue={theme}
        className="flex justify-start"
      >
        <ToggleGroupItem
          className="min-w-[70px]"
          value="system"
          aria-label="Toggle system"
          onClick={() => setTheme("system")}
        >
          <div className="flex flex-col items-center">
            <SunMoon />
            <small>System</small>
          </div>
        </ToggleGroupItem>
        <ToggleGroupItem
          className="min-w-[70px]"
          value="light"
          aria-label="Toggle light"
          onClick={() => setTheme("light")}
        >
          <div className="flex flex-col items-center">
            <SunIcon />
            <small>Light</small>
          </div>
        </ToggleGroupItem>
        <ToggleGroupItem
          className="min-w-[70px]"
          value="dark"
          aria-label="Toggle dark"
          onClick={() => setTheme("dark")}
        >
          <div className="flex flex-col items-center">
            <Moon />
            <small>Dark</small>
          </div>
        </ToggleGroupItem>
      </ToggleGroup>
    </>
  );
}
