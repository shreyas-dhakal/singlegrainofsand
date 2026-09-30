import Link from "next/link";

const left = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
];
const right = [
  { href: "/#kind-words", label: "Kind Words" },
  { href: "/#contact", label: "Contact" },
];

const linkClass = "eyebrow whitespace-nowrap text-[0.64rem] tracking-[0.22em] sm:text-[0.72rem] sm:tracking-[0.32em] text-foreground/70 transition-colors hover:text-bronze";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-2 px-4 py-4 sm:px-8 md:grid-cols-[1fr_auto_1fr] md:py-5">
        <nav aria-label="Primary" className="order-2 flex justify-center gap-5 sm:gap-8 md:order-1 md:justify-start md:gap-10">
          {left.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </Link>
          ))}
          {right.map((l) => (
            <Link key={l.href} href={l.href} className={`${linkClass} md:hidden`}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/" className="order-1 text-center leading-none md:order-2">
          <span className="block font-serif text-[1.7rem] font-normal tracking-wide md:text-3xl">Kelly Ingerson</span>
          <span className="eyebrow mt-1.5 block text-[0.6rem] text-bronze">Single Grain of Sand</span>
        </Link>
        <nav aria-label="Secondary" className="order-3 hidden justify-end gap-10 md:flex">
          {right.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
