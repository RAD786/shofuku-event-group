"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeLampToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="theme-switch group relative flex h-10 w-[4.75rem] shrink-0 items-center justify-center rounded-full outline-none transition-transform duration-300 hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-bronze/55 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory dark:focus-visible:ring-champagne/70 dark:focus-visible:ring-offset-[#070706]"
    >
      <span className="theme-switch-track">
        <span className="theme-switch-label theme-switch-label-off">off</span>
        <span className="theme-switch-label theme-switch-label-on">on</span>
        <span className="theme-switch-thumb" />
      </span>
    </button>
  );
}
