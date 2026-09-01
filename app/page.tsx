import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clapperboard } from 'lucide-react';
import { ContactBand, Footer, Header, SectionHeader } from './site-components';
import {
  capabilities,
  formats,
  methodSteps,
  proofCards,
  studioStats,
} from './site-data';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <Header />
      <section className="relative isolate overflow-hidden bg-porcelain">
        <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-10">
          <div className="relative z-10 max-w-2xl">
            <p className="eyebrow text-brick">Story systems studio</p>
            <h1 className="mt-6 text-5xl font-black leading-[0.9] tracking-tight sm:text-7xl">
              Build the English life of the story.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-charcoal/68">
              Vellum Frame helps creators, publishers, and studios carry
              illustrated and interactive stories into English with voice,
              context, visual fit, and launch clarity.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-plum px-6 text-sm font-black text-cream transition hover:bg-charcoal"
              >
                Start an enquiry <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-charcoal/15 bg-white px-6 text-sm font-black text-charcoal transition hover:border-plum hover:text-plum"
              >
                Services overview
              </Link>
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-charcoal/10 shadow-[0_30px_90px_rgba(38,31,35,0.16)] lg:min-h-[620px]">
            <Image
              src="/editorial-studio-hero.png"
              alt="Editorial desk with storyboards, color proofs, manuscript pages, and production materials"
              fill
              priority
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-sage/35 py-12">
        <div className="mx-auto grid max-w-7xl gap-px bg-charcoal/10 px-5 sm:px-8 lg:grid-cols-3 lg:px-10">
          {studioStats.map(([title, text]) => (
            <article key={title} className="bg-sage/35 p-6">
              <h2 className="text-2xl font-black">{title}</h2>
              <p className="mt-3 leading-7 text-charcoal/65">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Service rooms"
            title="Three connected practices, one release-minded handoff."
            text="The framework is familiar enough to navigate quickly, but the visual identity, page rhythm, and copy system are different."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, summary, href }) => (
              <Link
                key={title}
                href={href}
                className="group flex min-h-[320px] flex-col justify-between rounded-[1.5rem] border border-charcoal/10 bg-white p-6 shadow-[0_18px_60px_rgba(38,31,35,0.08)] transition hover:-translate-y-1 hover:border-plum/35"
              >
                <Icon className="h-9 w-9 text-brick" />
                <span>
                  <span className="block text-3xl font-black leading-tight">
                    {title}
                  </span>
                  <span className="mt-4 block leading-7 text-charcoal/65">
                    {summary}
                  </span>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-plum">
                    Open room <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-plum py-20 text-cream sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
          <SectionHeader
            eyebrow="Method"
            title="The work moves from source audit to usable release package."
            text="Each stage answers a different question so the final English version is creative, traceable, and ready for production."
            light
          />
          <div className="grid gap-4">
            {methodSteps.map(({ step, title, text }) => (
              <article
                key={step}
                className="grid gap-5 rounded-[1.25rem] border border-cream/12 bg-cream/[0.06] p-5 sm:grid-cols-[5rem_1fr]"
              >
                <p className="font-mono text-sm text-gold">{step}</p>
                <div>
                  <h3 className="text-2xl font-black text-white">{title}</h3>
                  <p className="mt-2 leading-7 text-cream/66">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div>
            <SectionHeader
              eyebrow="Proof of care"
              title="Creative work needs more than a polished sentence."
            />
            <div className="mt-10 grid gap-4">
              {proofCards.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="grid grid-cols-[3.5rem_1fr] gap-5 rounded-[1.25rem] border border-charcoal/10 bg-white p-5"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-gold/25 text-brick">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-black">{title}</h3>
                    <p className="mt-2 leading-7 text-charcoal/65">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <aside className="rounded-[2rem] bg-sage p-6">
            <BookOpen className="h-9 w-9 text-brick" />
            <p className="eyebrow mt-8 text-brick">Formats</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {formats.map((format) => (
                <span
                  key={format}
                  className="rounded-full border border-charcoal/10 bg-cream px-4 py-2 text-sm font-bold"
                >
                  {format}
                </span>
              ))}
            </div>
            <Link
              href="/method"
              className="mt-8 inline-flex items-center gap-2 text-sm font-black text-plum"
            >
              See the full method <Clapperboard className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>

      <ContactBand />
      <Footer />
    </main>
  );
}
