import Image from "next/image";
import Link from "next/link";
import { ImageGallery, type GalleryPhoto } from "@/components/image-gallery";
import { Eyebrow, Ornament } from "@/components/ornament";
import { Testimonials } from "@/components/testimonials";
import { bio, collections, intro, storm } from "@/lib/content";
import { cn } from "@/lib/utils";

const roman = ["I", "II", "III", "IV", "V", "VI"];

const featured: GalleryPhoto[] = collections.map((c, i) => ({
  ...c.images[i % 3],
  alt: `Sand photograph from the ${c.title} collection, ${c.place}`,
  caption: `${c.title}, ${c.place}`,
}));

const triptych = [
  { src: "/images/crescent-city-2.webp", alt: "Olive and teal ripples in the sand at Crescent City, California" },
  { src: "/images/hero-sand-gold.webp", alt: "Golden swirls of sand etched by the tide" },
  { src: "/images/seacliff-3.webp", alt: "Pale blue sand patterns at Seacliff Beach, South Australia" },
];

const [introLead, ...introRest] = intro.split(/(?<=\.) /);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-24 text-center sm:px-8 sm:pt-24 sm:pb-32">
        <Eyebrow lines>Fine art sand photography</Eyebrow>
        <h1 className="mt-8 font-serif text-[clamp(3.6rem,11vw,9.5rem)] leading-[0.98] font-light tracking-[-0.01em]">
          Single Grain
          <span className="block">
            <em className="font-light text-bronze">of</em> Sand
          </span>
        </h1>
        <p className="mt-8 font-serif text-2xl text-muted-foreground italic sm:text-[1.7rem]">
          Photography by Kelly Ingerson
        </p>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-[1fr_1.3fr_1fr] items-end gap-3 sm:mt-20 sm:gap-8">
          {triptych.map((img, i) => (
            <div
              key={img.src}
              className={cn(
                "relative overflow-hidden rounded-2xl outline-1 outline-offset-[5px] outline-gold/60 sm:outline-offset-8",
                i === 1 ? "aspect-[3/4.3]" : "aspect-[3/4]"
              )}
            >
              <Image
                alt={img.alt}
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 400px, 40vw"
                src={img.src}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Artist statement */}
      <section className="border-y border-border/70 bg-card/60">
        <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-8 sm:py-32">
          <Ornament />
          <p className="mt-10 font-serif text-[2rem] leading-[1.25] font-light sm:text-5xl sm:leading-[1.15]">
            {introLead}
          </p>
          <p className="mx-auto mt-10 max-w-2xl text-xl text-foreground/80 sm:text-[1.35rem]">{introRest.join(" ")}</p>
        </div>
      </section>

      {/* Selected works */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-8 sm:py-32">
        <div className="text-center">
          <Eyebrow lines>Selected works</Eyebrow>
          <h2 className="mt-6 font-serif text-5xl leading-[1.1] font-light sm:text-6xl">
            Nature’s <em>fleeting</em> canvas
          </h2>
        </div>
        <ImageGallery className="mt-16" photos={featured} />
      </section>

      {/* Collections index */}
      <section className="bg-secondary/70">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-8 sm:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
            <div>
              <Eyebrow>The collections</Eyebrow>
              <h2 className="mt-6 font-serif text-5xl leading-[1.05] font-light">
                Six shorelines, <em>two continents</em>
              </h2>
              <p className="mt-6 text-muted-foreground">
                From the wild coast of California to the quiet beaches of South Australia.
              </p>
            </div>
            <ol className="border-t border-foreground/15">
              {collections.map((c, i) => (
                <li key={c.slug} className="border-b border-foreground/15">
                  <Link
                    href={`/portfolio#${c.slug}`}
                    className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-5 transition-colors hover:text-bronze sm:grid-cols-[4rem_1fr_auto]"
                  >
                    <span className="font-serif text-xl text-gold italic">{roman[i]}</span>
                    <span className="font-serif text-[1.7rem] leading-tight sm:text-3xl">{c.title}</span>
                    <span className="eyebrow hidden text-[0.62rem] text-muted-foreground sm:block">{c.place}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* After the storm */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-24 sm:px-8 sm:py-32 md:grid-cols-2 md:gap-20">
        <div className="mat">
          <div className="relative aspect-[4/5]">
            <Image
              alt="Sand sculpted by storm waves"
              className="object-cover"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              src="/images/home-storm-feature.webp"
            />
          </div>
        </div>
        <div>
          <Eyebrow>After the storm</Eyebrow>
          <h2 className="mt-6 font-serif text-5xl leading-[1.05] font-light">
            Beauty in the <em>quiet aftermath</em>
          </h2>
          <p className="mt-8 text-foreground/80">{storm.lead}</p>
          <blockquote className="my-10 border-l border-gold pl-8 font-serif text-[1.75rem] leading-snug font-light italic">
            “{storm.quote}”
          </blockquote>
          <p className="text-foreground/80">{storm.body}</p>
        </div>
      </section>

      {/* Meet the artist */}
      <section className="bg-card/60 border-y border-border/70">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-24 sm:px-8 sm:py-32 md:grid-cols-[5fr_6fr] md:gap-20">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl outline-1 outline-offset-8 outline-gold/60">
            <Image
              alt="Kelly Ingerson walking along the shoreline"
              className="object-cover"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              src="/images/kelly-portrait.webp"
            />
          </div>
          <div>
            <Eyebrow>Meet the artist</Eyebrow>
            <h2 className="mt-6 font-serif text-5xl leading-[1.1] font-light sm:text-6xl">Kelly Ingerson</h2>
            <p className="mt-2 font-serif text-2xl text-muted-foreground italic">“the exuberant Aussie”</p>
            <p className="mt-8 text-foreground/80">{bio[0]}</p>
            <Link
              href="/about"
              className="eyebrow mt-10 inline-block border-b border-gold pb-1 text-foreground transition-colors hover:text-bronze"
            >
              Read her story
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
