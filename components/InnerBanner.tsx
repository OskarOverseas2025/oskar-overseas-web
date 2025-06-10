import Image from "next/image";
import React from "react";

export default function InnerBanner({ imgSrc, title, description }: { imgSrc: string; title: string; description: string }) {
  return (
    <section className="relative h-[18.75rem] lg:h-[21.875rem] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <Image src={imgSrc} alt="About Oskar Overseas" fill priority className="object-cover w-full h-full" />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(0,0,0,0.5)_16.73%,rgba(0,0,0,0.5)_40.18%)]" />
      {/* Centered Text */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-xl text-white max-w-3xl mx-auto">{description}</p>
      </div>
    </section>
  );
}
