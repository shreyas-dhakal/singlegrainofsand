import type { Metadata } from "next";
import { ImageGallery } from "@/components/image-gallery";
import { Eyebrow, Ornament } from "@/components/ornament";
import { collections, portfolioIntro, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description: portfolioIntro,
};

const roman = ["I", "II", "III", "IV", "V", "VI"];

export default function PortfolioPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 pt-20 pb-16 text-center sm:px-8 sm:pt-28">
        <Eyebrow lines>Portfolio</Eyebrow>
        <h1 className="mt-8 font-serif text-[clamp(3.4rem,9vw,7rem)] leading-[0.95] font-light">
          The <em className="text-bronze">Collections</em>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-xl text-foreground/80 sm:text-[1.35rem]">{portfolioIntro}</p>
        <nav aria-label="Collections" className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {collections.map((c) => (
            <a key={c.slug} href={`#${c.slug}`} className="eyebrow text-[0.66rem] text-foreground/70 transition-colors hover:text-bronze">
              {c.title}
            </a>
          ))}
        </nav>
      </section>

      {collections.map((c, i) => (
        <section
          key={c.slug}
          id={c.slug}
          className={i % 2 ? "scroll-mt-28 border-y border-border/70 bg-card/60" : "scroll-mt-28"}
        >
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-28">
            <div className="text-center">
              <p className="font-serif text-2xl text-gold italic">{roman[i]}</p>
              <h2 className="mt-2 font-serif text-5xl font-light sm:text-6xl">{c.title}</h2>
              <p className="eyebrow mt-4 text-muted-foreground">{c.place}{c.country === "Australia" ? "" : " · USA"}</p>
            </div>
            <ImageGallery
              className="mt-14"
              photos={c.images.map((p, n) => ({
                ...p,
                alt: `${c.title} collection, photograph ${n + 1} of ${c.images.length}`,
              }))}
            />
            <div className="mt-14 text-center">
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(`Enquiry: ${c.title} collection`)}`}
                className="eyebrow inline-block border-b border-gold pb-1 text-foreground transition-colors hover:text-bronze"
              >
                Enquire about this collection
              </a>
            </div>
          </div>
        </section>
      ))}
      <Ornament className="py-16" />
    </>
  );
}
