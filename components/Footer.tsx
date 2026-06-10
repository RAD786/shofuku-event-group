const socials = ["Instagram", "Twitter", "LinkedIn"];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-[linear-gradient(135deg,#161514,#0b0b09)] py-14 text-ivory dark:border-ivory/10 dark:bg-black">
      <div className="section-shell flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-extrabold tracking-[0.28em] text-champagne">
            SHOFUKU EVENT GROUP
          </p>
          <p className="mt-3 max-w-lg font-display text-3xl font-semibold leading-tight text-ivory/90">
            Elevating every experience. Empowering every vision.
          </p>
          <p className="mt-5 max-w-md text-sm leading-7 text-ivory/50">
            Experience design, vendor alignment, and strategic event execution
            for clients building moments with consequence.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex flex-wrap gap-5">
            {socials.map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs font-bold uppercase tracking-[0.22em] text-ivory/60 transition hover:text-champagne"
              >
                {social}
              </a>
            ))}
          </div>
          <p className="text-xs uppercase tracking-[0.18em] text-ivory/42">
            Copyright 2026 SHOFUKU EVENT GROUP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
