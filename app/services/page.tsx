import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  ContactBand,
  Footer,
  Header,
  PageHero,
  SectionHeader,
} from '../site-components';
import { capabilities, proofCards, serviceLinks } from '../site-data';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <Header />
      <PageHero
        eyebrow="Services"
        title="A connected studio bench for story releases."
        text="Choose one specialist room or connect language, production, and launch into one practical handoff."
      />
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 flex flex-wrap gap-3">
            {serviceLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-full border border-charcoal/10 bg-white px-4 py-2 text-sm font-black hover:border-plum hover:text-plum"
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, summary, href }) => (
              <article key={title} className="flex flex-col justify-between rounded-[2rem] bg-white p-6 shadow-[0_18px_60px_rgba(38,31,35,0.08)]">
                <Icon className="h-10 w-10 text-brick" />
                <h2 className="mt-10 text-3xl font-black leading-tight">
                  {title}
                </h2>
                <p className="mt-4 leading-7 text-charcoal/65">{summary}</p>
                <Link
                  href={href}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-black text-plum"
                >
                  Read more <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-sage/45 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Quality"
            title="The finish is built into the process."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {proofCards.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-[1.5rem] border border-charcoal/10 bg-cream p-6">
                <Icon className="h-7 w-7 text-brick" />
                <h3 className="mt-7 text-2xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-charcoal/65">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
      <Footer />
    </main>
  );
}
