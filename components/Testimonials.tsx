const testimonials = [
  {
    quote:
      "SHOFUKU gave us the calm, control, and polish we needed. The room felt intentional from the first arrival to the final close.",
    name: "Corporate Client",
    detail: "Executive reception",
  },
  {
    quote:
      "Their vendor network removed the guesswork. Every partner felt aligned with the tone, the timeline, and the level of hospitality we wanted.",
    name: "Private Event Host",
    detail: "Milestone celebration",
  },
  {
    quote:
      "They understood the audience, the brand stakes, and the moment we were trying to create. Strategy and execution stayed connected.",
    name: "Brand Partner",
    detail: "Launch activation",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-ivory py-28 dark:bg-[#070706] md:py-36"
    >
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow">06 / Client Notes</p>
            <h2 className="section-heading mt-5">
              The kind of polish people remember.
            </h2>
          </div>
          <p className="section-kicker">
            Early client language is intentionally understated: less spectacle,
            more confidence, care, and control.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-lg border border-ink/10 bg-[#fbf8f1] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-luxury dark:border-ivory/10 dark:bg-white/[0.045] dark:hover:shadow-luxury-dark"
            >
              <div className="mb-10 flex items-center justify-between text-bronze dark:text-champagne">
                <span className="text-xs font-bold uppercase tracking-[0.28em]">
                  {testimonial.detail}
                </span>
                <span className="h-10 w-10 rounded-full border border-bronze/25 dark:border-champagne/25" />
              </div>
              <blockquote className="font-display text-3xl font-semibold leading-tight text-ink dark:text-ivory">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 border-t border-ink/10 pt-5 text-xs font-bold uppercase tracking-[0.22em] text-ink/58 dark:border-ivory/10 dark:text-ivory/58">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
