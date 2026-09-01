import { ContactBand, Footer, Header, PageHero, SectionHeader } from '../site-components';
import { workSamples } from '../site-data';

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <Header />
      <PageHero
        eyebrow="Work"
        title="Confidential projects, described by the work they required."
        text="Many story releases are private before launch. This page focuses on engagement patterns and outcomes without exposing protected titles."
      />
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Protected examples"
            title="Realistic production shapes without private details."
          />
          <div className="mt-10 grid gap-5">
            {workSamples.map(({ title, scope, result }) => (
              <article key={title} className="grid gap-6 rounded-[2rem] border border-charcoal/10 bg-white p-6 lg:grid-cols-[0.7fr_1fr]">
                <h2 className="text-4xl font-black leading-tight">{title}</h2>
                <div>
                  <p className="leading-8 text-charcoal/65">{scope}</p>
                  <p className="mt-5 border-l-4 border-gold pl-5 text-lg font-semibold leading-8">
                    {result}
                  </p>
                </div>
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
