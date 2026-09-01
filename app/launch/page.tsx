import { ContactBand, Footer, Header, PageHero } from '../site-components';
import { servicePages } from '../site-data';

export default function LaunchPage() {
  const service = servicePages.launch;
  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <Header />
      <PageHero eyebrow={service.eyebrow} title={service.title} text={service.text} />
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <aside className="rounded-[2rem] bg-brick p-7 text-cream">
            <Icon className="h-10 w-10 text-gold" />
            <p className="mt-10 font-mono text-xs uppercase tracking-[0.22em] text-gold">
              {service.signal}
            </p>
            <h2 className="mt-6 text-3xl font-black">Inputs</h2>
            <p className="mt-3 leading-7 text-cream/76">{service.input}</p>
            <h2 className="mt-8 text-3xl font-black">Outputs</h2>
            <p className="mt-3 leading-7 text-cream/76">{service.output}</p>
          </aside>
          <div className="grid gap-3">
            {service.points.map((point, index) => (
              <article key={point} className="grid grid-cols-[4rem_1fr] rounded-[1.25rem] border border-charcoal/10 bg-white">
                <span className="grid place-items-center border-r border-charcoal/10 font-mono text-sm font-black text-brick">
                  0{index + 1}
                </span>
                <p className="p-5 leading-7 text-charcoal/68">{point}</p>
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
