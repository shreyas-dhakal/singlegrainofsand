import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow, Ornament } from "@/components/ornament";
import { bio, bioQuote, milestones } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kelly Ingerson is an Australian photographer and artist who has found her niche in the fleeting patterns of sand.",
};

export default function AboutPage() {
  const [first, ...rest] = bio;
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 pt-20 text-center sm:px-8 sm:pt-28">
        <Eyebrow lines>About the artist</Eyebrow>
        <h1 className="mt-8 font-serif text-[clamp(3.4rem,9vw,7rem)] leading-[0.95] font-light">
          Kelly <em className="text-bronze">Ingerson</em>
        </h1>
        <p className="mt-6 font-serif text-2xl text-muted-foreground italic">Photographer &amp; artist · Australia and the United States</p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-16 px-4 py-20 sm:px-8 sm:py-24 md:grid-cols-[5fr_7fr] md:gap-20">
        <div className="md:sticky md:top-32 md:self-start">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-t-full outline-1 outline-offset-8 outline-gold/60">
            <Image
              alt="Kelly Ingerson walking along the shoreline"
              className="object-cover"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              src="/images/kelly-portrait.webp"
            />
          </div>
        </div>
        <div className="text-[1.3rem] leading-[1.8] text-foreground/85">
          <p className="first-letter:float-left first-letter:mt-2 first-letter:mr-3 first-letter:font-serif first-letter:text-[5.2rem] first-letter:leading-[0.8] first-letter:font-light first-letter:text-bronze">
            {first}
          </p>
          {rest.map((p) => (
            <p key={p.slice(0, 24)} className="mt-7">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 bg-card/60">
        <figure className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-8 sm:py-28">
          <Ornament />
          <blockquote className="mt-10 font-serif text-3xl leading-snug font-light italic sm:text-[2.6rem] sm:leading-[1.2]">
            {bioQuote.quote}
          </blockquote>
          <figcaption className="eyebrow mt-8 text-bronze">{bioQuote.name}</figcaption>
        </figure>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-8 sm:py-32">
        <div className="text-center">
          <Eyebrow lines>Milestones</Eyebrow>
          <h2 className="mt-6 font-serif text-5xl leading-[1.1] font-light sm:text-6xl">
            A <em>journey</em> along the shore
          </h2>
        </div>
        <ol className="relative mt-16 space-y-12 before:absolute before:top-2 before:bottom-2 before:left-[5.5rem] before:w-px before:bg-gold/50 sm:before:left-[7.5rem]">
          {milestones.map((m) => (
            <li key={m.year} className="relative grid grid-cols-[5.5rem_1fr] items-baseline gap-8 sm:grid-cols-[7.5rem_1fr] sm:gap-12">
              <span className="pr-6 text-right font-serif text-3xl font-light text-bronze sm:text-4xl">{m.year}</span>
              <span aria-hidden className="absolute top-[0.9rem] left-[5.5rem] size-2 -translate-x-1/2 rotate-45 bg-gold sm:left-[7.5rem]" />
              <span className="text-xl sm:text-[1.35rem]">{m.text}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-8 sm:pb-32">
        <figure>
          <div className="mat">
            <div className="relative aspect-[16/9]">
              <Image
                alt="Yosemite Valley at dusk, photographed on Kelly’s solo drive across the American West"
                className="object-cover"
                fill
                sizes="(min-width: 1152px) 1100px, 100vw"
                src="/images/about-secondary.webp"
              />
            </div>
          </div>
          <figcaption className="mt-5 text-center font-serif text-lg text-muted-foreground italic">
            Yosemite Valley, from Kelly’s 10,000-mile journey across the American West
          </figcaption>
        </figure>
      </section>
    </>
  );
}
