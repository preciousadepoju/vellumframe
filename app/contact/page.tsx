import { Footer, Header, PageHero } from '../site-components';
import { enquiryChecklist } from '../site-data';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <Header />
      <PageHero
        eyebrow="Contact"
        title="Prepare a project enquiry that gets to the real question quickly."
        text="The final email address can be added after the domain is purchased. Until then, this page makes the future contact flow clear and professional."
      />
      <section className="bg-sage/35 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div>
            <p className="eyebrow text-brick">Checklist</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight">
              What to include before source files move anywhere.
            </h2>
            <p className="mt-5 leading-8 text-charcoal/65">
              This avoids a fake form while the domain email is not ready, and
              keeps the site launchable without pretending messages are being
              delivered.
            </p>
          </div>
          <dl className="grid gap-3">
            {enquiryChecklist.map(([title, text]) => (
              <div key={title} className="rounded-[1.25rem] border border-charcoal/10 bg-white p-5">
                <dt className="text-xl font-black">{title}</dt>
                <dd className="mt-2 leading-7 text-charcoal/65">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <Footer />
    </main>
  );
}
