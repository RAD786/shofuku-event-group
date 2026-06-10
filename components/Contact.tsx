const fields = [
  { label: "Name", type: "text", name: "name", placeholder: "Your name" },
  { label: "Email", type: "email", name: "email", placeholder: "you@example.com" },
  { label: "Phone", type: "tel", name: "phone", placeholder: "Best contact number" },
  { label: "Event Type", type: "text", name: "eventType", placeholder: "Private, corporate, brand, nonprofit..." },
  { label: "Estimated Date", type: "date", name: "estimatedDate", placeholder: "" },
  { label: "Guest Count", type: "text", name: "guestCount", placeholder: "Approximate range" },
  { label: "Location", type: "text", name: "location", placeholder: "City, venue, or TBD" },
  { label: "Investment Range", type: "text", name: "budget", placeholder: "Estimated budget or range" },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#fbf8f1] py-28 transition-colors duration-500 dark:bg-[#0d0c0a] md:py-36"
    >
      <div className="section-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="eyebrow">07 / Contact</p>
          <h2 className="section-heading mt-5">Begin with the right conversation.</h2>
          <p className="mt-7 max-w-md text-lg leading-8 text-ink/68 dark:text-ivory/68">
            Tell us what you are building, who needs to feel it, and what is at
            stake. We will help shape the vision, align the right partners, and
            build the path to execution.
          </p>
          <div className="mt-10 space-y-4 border-l border-bronze/35 pl-5 text-sm leading-7 text-ink/62 dark:border-champagne/35 dark:text-ivory/62">
            <p>For private, corporate, hospitality, nonprofit, brand, entertainment, and community-led moments.</p>
            <p>For clients who value discretion, clear communication, and a room that feels handled before guests arrive.</p>
          </div>
        </div>

        <form className="rounded-lg border border-ink/10 bg-ivory p-5 shadow-luxury dark:border-ivory/10 dark:bg-white/[0.045] dark:shadow-luxury-dark md:p-8">
          <div className="mb-8 flex items-center justify-between gap-6 border-b border-ink/10 pb-5 dark:border-ivory/10">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-ink/58 dark:text-ivory/58">
              Private Inquiry
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-bronze dark:text-champagne">
              Response Priority
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {fields.map((field) => (
              <label key={field.name} className="block">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-ink/56 dark:text-ivory/56">
                  {field.label}
                </span>
                <input
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="mt-3 h-[3.25rem] w-full rounded-none border-0 border-b border-ink/20 bg-transparent px-0 py-3 text-base text-ink outline-none transition placeholder:text-ink/30 focus:border-bronze dark:border-ivory/20 dark:text-ivory dark:focus:border-champagne"
                />
              </label>
            ))}
            <label className="block md:col-span-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-ink/56 dark:text-ivory/56">
                Message
              </span>
              <textarea
                name="message"
                rows={5}
                placeholder="What are you planning, who is it for, and what should the experience accomplish?"
                className="mt-3 w-full resize-none rounded-none border-0 border-b border-ink/20 bg-transparent px-0 py-3 text-base text-ink outline-none transition placeholder:text-ink/30 focus:border-bronze dark:border-ivory/20 dark:text-ivory dark:focus:border-champagne"
              />
            </label>
          </div>

          <button
            type="submit"
            className="primary-cta mt-8 w-full md:w-auto"
          >
            Request a Consultation
          </button>
        </form>
      </div>
    </section>
  );
}
