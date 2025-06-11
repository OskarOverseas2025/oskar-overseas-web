import InnerBanner from "@/components/InnerBanner";
import ImageSection from "./_components/ImageSection";

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white">
      <InnerBanner
        imgSrc="/gallery.png"
        title="Gallery"
        description={`OSKAR NEPAL has been in operation since 1999 with over ${new Date().getFullYear() - 1999} years of experience in the recruitment business.`}
      />
      <ImageSection />
    </div>
  );
}
