import { Eyebrow, Ornament } from "@/components/ornament";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section id="kind-words" className="mx-auto max-w-3xl scroll-mt-28 px-4 py-24 text-center sm:px-8 sm:py-32">
      <Eyebrow lines>Kind words</Eyebrow>
      <h2 className="mt-6 font-serif text-5xl leading-[1.1] font-light sm:text-6xl">From collectors</h2>
      <div className="mt-16 space-y-16">
        {testimonials.map((t, i) => (
          <figure key={t.name}>
            {i > 0 && <Ornament className="mb-16" />}
            <span aria-hidden className="block font-serif text-7xl leading-none text-gold">“</span>
            <blockquote className="-mt-4 font-serif text-[1.45rem] leading-relaxed font-normal text-foreground/85 italic sm:text-2xl sm:leading-relaxed">
              {t.quote}
            </blockquote>
            <figcaption className="mt-8">
              <p className="eyebrow text-foreground">
                {t.href ? (
                  <a href={t.href} target="_blank" rel="noreferrer" className="hover:text-bronze">
                    {t.name}
                  </a>
                ) : (
                  t.name
                )}
              </p>
              <p className="mt-1 font-serif text-lg text-muted-foreground italic">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
