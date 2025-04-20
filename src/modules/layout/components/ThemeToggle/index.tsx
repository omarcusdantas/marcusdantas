"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/modules/layout/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>{theme === "light" ? <Sun /> : <Moon />}</button>;
}
