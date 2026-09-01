import { ContactBand, Footer, Header, PageHero } from '../site-components';
import { methodSteps } from '../site-data';

export default function MethodPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <Header />
      <PageHero
        eyebrow="Method"
        title="A practical path from source material to public-facing release."
        text="The method separates discovery, adaptation, testing, and handoff so creative choices stay clear."
      />
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-5">
            {methodSteps.map(({ step, title, text }) => (
              <article key={step} className="grid gap-6 rounded-[2rem] border border-charcoal/10 bg-white p-6 md:grid-cols-[8rem_1fr] md:p-8">
                <p className="font-mono text-lg font-black text-brick">{step}</p>
                <div>
                  <h2 className="text-4xl font-black tracking-tight">{title}</h2>
                  <p className="mt-4 max-w-3xl text-lg leading-8 text-charcoal/65">
                    {text}
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
