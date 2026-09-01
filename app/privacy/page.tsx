import { Footer, Header, PageHero } from '../site-components';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <Header />
      <PageHero
        eyebrow="Privacy"
        title="Project information is treated as private working material."
        text="Vellum Frame uses enquiry details only to understand fit, scope, and the safest next step for a creative project."
      />
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-4xl gap-8 px-5 text-lg leading-8 text-charcoal/66 sm:px-8">
          <p>
            Enquiry information may include names, contact details, project
            summaries, format, source language, release goals, and timing.
          </p>
          <p>
            Confidential scripts, artwork, unreleased titles, production files,
            and rights-sensitive materials should be shared only through an
            agreed secure channel after the first conversation.
          </p>
          <p>
            Access to project information should remain limited to the people
            involved in evaluating, producing, or supporting the engagement.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
