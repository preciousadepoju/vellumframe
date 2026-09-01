import { ContactBand, Footer, Header, PageHero } from '../site-components';
import { studioValues } from '../site-data';

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <Header />
      <PageHero
        eyebrow="Studio"
        title="A quieter kind of creative localization partner."
        text="Vellum Frame is designed for teams that need judgment, confidentiality, and release awareness around story adaptation."
      />
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-3 lg:px-10">
          {studioValues.map(({ icon: Icon, title, text }) => (
            <article key={title} className="flex flex-col justify-between rounded-[2rem] border border-charcoal/10 bg-white p-7">
              <Icon className="h-9 w-9 text-brick" />
              <h2 className="mt-10 text-3xl font-black">{title}</h2>
              <p className="mt-4 leading-7 text-charcoal/65">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <ContactBand />
      <Footer />
    </main>
  );
}
