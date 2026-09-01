import Link from 'next/link';
import { ArrowRight, Mail, Menu } from 'lucide-react';
import { navItems, serviceLinks } from './site-data';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-cream/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center">
          <span className="leading-none">
            <span className="block text-lg font-black tracking-tight text-charcoal">
              Vellum Frame
            </span>
            <span className="mt-1 block font-mono text-[0.64rem] uppercase tracking-[0.24em] text-brick">
              Adaptation Studio
            </span>
          </span>
        </Link>
        <div className="hidden items-center gap-6 text-sm font-semibold text-charcoal/68 lg:flex">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-plum">
              {label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="hidden h-11 items-center justify-center gap-2 rounded-full bg-charcoal px-5 text-sm font-bold text-cream transition hover:bg-plum sm:inline-flex"
        >
          Enquire <ArrowRight className="h-4 w-4" />
        </Link>
        <details className="group sm:hidden">
          <summary
            aria-label="Open navigation menu"
            className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-full bg-charcoal text-cream shadow-[0_10px_30px_rgba(38,31,35,0.18)] transition hover:bg-plum [&::-webkit-details-marker]:hidden"
          >
            <Menu className="h-5 w-5" />
          </summary>
          <div className="absolute left-4 right-4 top-[5.25rem] z-50 overflow-hidden rounded-[1.75rem] border border-charcoal/10 bg-cream shadow-[0_24px_70px_rgba(38,31,35,0.2)]">
            <div className="border-b border-charcoal/10 bg-sage/45 px-5 py-4">
              <p className="text-sm font-black text-charcoal">Menu</p>
              <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-brick">
                Vellum Frame
              </p>
            </div>
            <div className="grid gap-2 p-3">
              {navItems.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center justify-between rounded-2xl bg-porcelain px-4 py-3 text-sm font-black text-charcoal transition hover:bg-sage/55 hover:text-plum"
                >
                  <span>{label}</span>
                  <ArrowRight className="h-4 w-4 text-brick/70" />
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-plum px-4 text-sm font-black text-cream shadow-[0_12px_30px_rgba(75,37,79,0.22)] transition hover:bg-charcoal"
              >
                Enquire <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}

export function Footer({ compact = false }: { compact?: boolean }) {
  return (
    <footer
      className={`border-t border-charcoal/10 bg-cream px-5 text-sm text-charcoal/62 sm:px-8 lg:px-10 ${
        compact ? 'py-3' : 'py-12'
      }`}
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto_auto]">
        <div>
          <p className="text-xl font-black text-charcoal">Vellum Frame</p>
          <p className={`${compact ? 'hidden' : 'mt-3'} max-w-xl leading-7`}>
            An adaptation studio for language, production QA, and launch
            direction across illustrated and interactive entertainment.
          </p>
        </div>
        <FooterLinks title="Studio" items={navItems} />
        <FooterLinks title="Services" items={serviceLinks} />
      </div>
    </footer>
  );
}

function FooterLinks({
  title,
  items,
}: {
  title: string;
  items: string[][];
}) {
  return (
    <div>
      <p className="mb-4 font-black text-charcoal">{title}</p>
      <div className="flex flex-wrap gap-4 lg:grid lg:gap-3">
        {items.map(([label, href]) => (
          <Link key={href} href={href} className="hover:text-plum">
            {label}
          </Link>
        ))}
        {title === 'Studio' ? (
          <>
            <Link href="/privacy" className="hover:text-plum">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-plum">
              Terms
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  compact?: boolean;
}) {
  return (
    <section className="bg-sage/35 text-charcoal">
      <div
        className={`mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 ${
          compact ? 'py-7 sm:py-8' : 'py-16 sm:py-20'
        }`}
      >
        <p className="eyebrow text-brick">{eyebrow}</p>
        <h1
          className={`mt-5 max-w-5xl font-black leading-[0.95] tracking-tight ${
            compact ? 'text-4xl sm:text-5xl' : 'text-5xl sm:text-6xl lg:text-7xl'
          }`}
        >
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-charcoal/68">
          {text}
        </p>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={`eyebrow ${light ? 'text-gold' : 'text-brick'}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl ${
          light ? 'text-cream' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-5 text-lg leading-8 ${
            light ? 'text-cream/68' : 'text-charcoal/65'
          }`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}

export function ContactBand() {
  return (
    <section className="bg-charcoal py-18 text-cream sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
        <div>
          <p className="eyebrow text-gold">Next conversation</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Prepare the source, the goals, and the constraints. The first
            conversation should already be useful.
          </h2>
        </div>
        <Link
          href="/contact"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 text-sm font-black text-charcoal transition hover:bg-brick hover:text-cream"
        >
          Contact checklist <Mail className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
