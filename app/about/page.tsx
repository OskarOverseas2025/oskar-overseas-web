import MissonValuesSection from "./_components/MissonValuesSection";
import MilestonesSection from "./_components/MilestonesSection";
import ChairmanMessage from "./_components/ChairmanMessage";
import TeamSection from "./_components/TeamSection";
import Image from "next/image";
import InnerBanner from "@/components/InnerBanner";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <InnerBanner
        imgSrc="/about.jpg"
        title="About Oskar Overseas"
        description="A quarter-century journey of connecting Nepali talent with global opportunities through ethical recruitment and unwavering commitment to
          excellence."
      />
      <MissonValuesSection />
      <MilestonesSection />
      <ChairmanMessage />
      <TeamSection />
    </div>
  );
}
