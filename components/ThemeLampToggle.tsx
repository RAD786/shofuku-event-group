"use client";

import Image from "next/image";
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
      className="lamp-toggle group relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full outline-none transition-transform duration-500 hover:scale-105 focus-visible:ring-2 focus-visible:ring-bronze/55 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory dark:focus-visible:ring-champagne/70 dark:focus-visible:ring-offset-[#070706] md:h-16 md:w-16"
    >
      <span className="lamp-toggle-cord absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-ink/18 transition-colors duration-500 dark:bg-champagne/38" />
      <span className="lamp-toggle-glow absolute bottom-1 left-1/2 h-8 w-12 -translate-x-1/2 rounded-full bg-champagne/40" />
      <span className="relative h-12 w-12 md:h-14 md:w-14">
        <Image
          src="/images/lamp-unlit.png"
          alt=""
          fill
          sizes="(min-width: 768px) 56px, 48px"
          className="lamp-toggle-img lamp-toggle-img-unlit object-contain"
          priority
        />
        <Image
          src="/images/lamp-lit.png"
          alt=""
          fill
          sizes="(min-width: 768px) 56px, 48px"
          className="lamp-toggle-img lamp-toggle-img-lit object-contain"
          priority
        />
      </span>
    </button>
  );
}
