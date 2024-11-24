"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { Button } from "./button";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Themes = [
  { name: "light", icon: <Sun /> },
  { name: "dark", icon: <Moon /> },
  { name: "system", icon: <Monitor /> },
];

export const ThemeSwitcher = () => {
  const { theme: currentTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex gap-1">
      {Themes.map((theme) => (
        <Button
          key={theme.name}
          size="icon"
          variant="ghost"
          onClick={() => setTheme(theme.name)}
          active={currentTheme === theme.name ? "ghost" : null}
        >
          {theme.icon}
        </Button>
      ))}
    </div>
  );
};
