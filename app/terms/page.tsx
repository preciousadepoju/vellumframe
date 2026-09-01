import { Footer, Header, PageHero } from '../site-components';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <Header />
      <PageHero
        eyebrow="Terms"
        title="Clear working terms before creative production begins."
        text="Website descriptions explain possible services. A client relationship begins only after both sides agree to a written scope."
      />
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-4xl gap-8 px-5 text-lg leading-8 text-charcoal/66 sm:px-8">
          <p>
            Timelines, deliverables, rights, usage, confidentiality, revision
            rounds, and payment terms should be confirmed in a separate project
            agreement.
          </p>
          <p>
            Sample work patterns and anonymized examples are illustrative unless
            a written agreement states otherwise.
          </p>
          <p>
            Private materials remain protected working material and should not
            be used as public portfolio content without permission from the
            rights holder.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
