export function Hero() {
  return (
    <section
      id="hero"
      className="hero-sequence relative isolate min-h-screen overflow-hidden bg-ink pt-32"
    >
      <div className="hero-bg absolute inset-0 -z-20 bg-[url('/images/hero-background-2.png')] bg-cover bg-center" />
      <div className="hero-gradient absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(248,244,235,0.94)_0%,rgba(248,244,235,0.82)_42%,rgba(248,244,235,0.46)_68%,rgba(248,244,235,0.25)_100%)] dark:bg-[linear-gradient(90deg,rgba(5,5,4,0.92)_0%,rgba(5,5,4,0.76)_45%,rgba(5,5,4,0.42)_72%,rgba(5,5,4,0.22)_100%)]" />
      <div className="hero-atmosphere absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(220,197,143,0.22),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(21,63,53,0.16),transparent_24%)] dark:bg-[radial-gradient(circle_at_18%_22%,rgba(220,197,143,0.16),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(21,63,53,0.34),transparent_28%)]" />
      <div className="hero-scan absolute inset-0 -z-10" />
      <div className="hero-ambient absolute inset-0 -z-10 opacity-70 dark:opacity-45">
        <div className="absolute left-[7%] top-36 h-64 w-64 rounded-full border border-bronze/12 dark:border-champagne/15" />
        <div className="absolute right-[10%] top-48 h-32 w-32 rounded-full border border-celestial/25" />
        <div className="absolute bottom-28 left-[18%] h-px w-80 rotate-[-16deg] bg-gradient-to-r from-transparent via-bronze/35 to-transparent dark:via-champagne/30" />
        <div className="absolute right-[24%] top-32 text-[10px] font-bold tracking-[0.45em] text-bronze/45 dark:text-champagne/30">
          01  08  11
        </div>
      </div>

      <div className="section-shell grid min-h-[calc(100vh-8rem)] items-center gap-12 pb-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-4xl">
          <h1 className="hero-title display-heading">
            Elevating every experience, empowering every vision.
          </h1>
          <p className="hero-copy mt-7 max-w-2xl text-lg leading-8 text-ink/72 dark:text-ivory/72 md:text-xl">
            A premium event group for private clients, corporate teams, brands,
            hospitality leaders, nonprofits, and cultural moments that require
            taste, discretion, and exacting execution.
          </p>

          <div className="hero-actions mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="primary-cta">
              Start a Private Inquiry
            </a>
            <a href="#services" className="secondary-cta">
              View the Divisions
            </a>
          </div>

          <div className="hero-details mt-12 grid max-w-2xl gap-4 border-y border-ink/10 py-5 text-xs font-bold uppercase tracking-[0.18em] text-ink/55 dark:border-ivory/10 dark:text-ivory/48 sm:grid-cols-3">
            <span>Private Events</span>
            <span>Corporate Activations</span>
            <span>Vendor Ecosystems</span>
          </div>
        </div>

        <div className="hero-showcase relative min-h-[34rem]">
          <div className="absolute inset-x-8 top-0 h-[28rem] rounded-t-full border border-ink/10 bg-gradient-to-b from-white/90 via-champagne/25 to-bronze/12 shadow-luxury dark:border-ivory/10 dark:from-white/10 dark:via-emerald/22 dark:to-black dark:shadow-luxury-dark" />
          <div className="absolute bottom-0 left-0 h-72 w-[58%] overflow-hidden rounded-lg border border-white/70 bg-[linear-gradient(135deg,#f8f4eb,#dcc58f_42%,#153f35)] p-6 shadow-luxury dark:border-ivory/10 dark:bg-[linear-gradient(135deg,#111,#153f35_52%,#8faac9)]">
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.48),transparent_58%)]" />
            <p className="eyebrow relative text-white/90">Curated</p>
            <p className="mt-24 font-display text-4xl font-semibold leading-none text-white">
              Private dining
            </p>
          </div>
          <div className="absolute right-0 top-24 h-80 w-[52%] overflow-hidden rounded-lg border border-white/70 bg-[linear-gradient(145deg,#161514,#9a724a_55%,#f8f4eb)] p-6 shadow-luxury dark:border-ivory/10 dark:bg-[linear-gradient(145deg,#050505,#1d3f36_55%,#dcc58f)]">
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.35),transparent_62%)]" />
            <p className="eyebrow relative text-champagne">Momentum</p>
            <p className="mt-36 font-display text-4xl font-semibold leading-none text-white">
              Brand activation
            </p>
          </div>
          <div className="absolute bottom-16 right-10 grid h-24 w-24 place-items-center rounded-full border border-ink/10 bg-ivory text-center text-xs font-bold uppercase tracking-[0.2em] text-bronze shadow-luxury dark:border-ivory/10 dark:bg-ink dark:text-champagne">
            08 / 08
          </div>
        </div>
      </div>
    </section>
  );
}
