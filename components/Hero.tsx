export function Hero() {
  return (
    <section
      id="hero"
      className="hero-sequence relative isolate min-h-screen overflow-hidden bg-ink pt-32"
    >
      <div className="hero-bg hero-bg-lit absolute inset-0 -z-20 bg-[url('/images/hero-background-2.png')] bg-cover bg-center" />
      <div className="hero-bg hero-bg-unlit absolute inset-0 -z-20 bg-[url('/images/hero-background-unlit.png')] bg-cover bg-center" />
      <div className="hero-sunrise absolute inset-0 -z-[9]" />
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

      <div className="section-shell grid min-h-[calc(100vh-8rem)] items-center gap-12 pb-24">
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
        </div>
      </div>
    </section>
  );
}
