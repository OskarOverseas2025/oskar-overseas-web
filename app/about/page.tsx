import MissonValuesSection from "./_components/MissonValuesSection";
import MilestonesSection from "./_components/MilestonesSection";
import ChairmanMessage from "./_components/ChairmanMessage";
import TeamSection from "./_components/TeamSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Oskar Overseas</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A quarter-century journey of connecting Nepali talent with global opportunities through ethical recruitment and unwavering commitment to
            excellence.
          </p>
        </div>
      </section>

      <MissonValuesSection />

      <MilestonesSection />

      <ChairmanMessage />

      <TeamSection />
    </div>
  );
}
