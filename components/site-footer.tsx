import Link from "next/link";
import { Eyebrow, Ornament } from "@/components/ornament";
import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <section id="contact" className="mx-auto max-w-4xl scroll-mt-28 px-4 py-24 text-center sm:px-8 sm:py-32">
        <Eyebrow lines className="text-gold">Enquiries</Eyebrow>
        <h2 className="mt-6 font-serif text-5xl leading-[1.05] font-light sm:text-7xl">
          Bring a piece of the <em className="text-gold">shoreline</em> home
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-xl text-primary-foreground/75">
          For prints, commissions, exhibitions or simply to say hello, Kelly would be delighted to hear from you.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="eyebrow mt-12 inline-block border border-gold/70 px-10 py-4 text-primary-foreground transition-colors hover:bg-gold hover:text-primary"
        >
          Write to Kelly
        </a>
        <dl className="mt-16 grid gap-8 sm:grid-cols-[1.7fr_1fr_1fr]">
          <div>
            <dt className="eyebrow text-primary-foreground/50">Email</dt>
            <dd className="mt-2 text-lg sm:text-xl">
              <a className="hover:text-gold" href={`mailto:${site.email}`}>{site.email}</a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow text-primary-foreground/50">Telephone</dt>
            <dd className="mt-2">
              <a className="hover:text-gold" href={site.phoneHref}>{site.phone}</a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow text-primary-foreground/50">Instagram</dt>
            <dd className="mt-2">
              <a className="hover:text-gold" href={site.instagram} target="_blank" rel="noreferrer">{site.instagramHandle}</a>
            </dd>
          </div>
        </dl>
      </section>
      <Ornament className="opacity-60" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-10 text-center sm:flex-row sm:px-8">
        <p className="eyebrow text-[0.62rem] text-primary-foreground/50">
          © {new Date().getFullYear()} Kelly Ingerson · Single Grain of Sand
        </p>
        <nav aria-label="Footer" className="flex gap-8">
          <Link href="/portfolio" className="eyebrow text-[0.62rem] text-primary-foreground/60 hover:text-gold">Portfolio</Link>
          <Link href="/about" className="eyebrow text-[0.62rem] text-primary-foreground/60 hover:text-gold">About</Link>
          <a href={site.instagram} target="_blank" rel="noreferrer" className="eyebrow text-[0.62rem] text-primary-foreground/60 hover:text-gold">Instagram</a>
        </nav>
      </div>
    </footer>
  );
}
