"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && theme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group flex h-9 w-16 items-center rounded-full border border-ink/15 bg-white/70 p-1 shadow-sm backdrop-blur transition hover:border-bronze/60 dark:border-ivory/20 dark:bg-white/10 dark:hover:border-champagne/70"
    >
      <span
        className={`grid h-7 w-7 place-items-center rounded-full bg-ink text-[11px] text-ivory shadow-sm transition duration-300 dark:bg-champagne dark:text-ink ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {isDark ? "L" : "D"}
      </span>
    </button>
  );
}
