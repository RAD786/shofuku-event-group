import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-ivory/82 backdrop-blur-xl transition-colors duration-500 dark:border-ivory/10 dark:bg-[#070706]/82">
      <nav className="section-shell flex h-20 items-center justify-between gap-5">
        <a
          href="#hero"
          aria-label="SHOFUKU EVENT GROUP home"
          className="group flex items-center leading-none"
        >
          <span className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full border border-bronze/35 bg-ink shadow-sm ring-1 ring-white/40 transition group-hover:border-emerald/55 dark:border-champagne/35 dark:ring-ivory/10 dark:group-hover:border-celestial/60">
            <span className="relative h-full w-full overflow-hidden rounded-full bg-ink">
              <Image
                src="/images/shofuku-logo.png"
                alt="SHOFUKU EVENT GROUP logo"
                fill
                sizes="56px"
                className="object-cover object-center"
                priority
              />
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-bold uppercase tracking-[0.2em] text-ink/62 transition hover:text-bronze dark:text-ivory/62 dark:hover:text-champagne"
            >
              {item.label}
            </a>
          ))}
        </div>

        <ThemeToggle />
      </nav>
    </header>
  );
}
