"use client";
import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";

const countries = [
  { name: "Malaysia", flag: "🇲🇾" },
  { name: "Honkong", flag: "🇭🇰" },
  { name: "UAE", flag: "🇦🇪" },
  { name: "Qatar", flag: "🇶🇦" },
  { name: "Saudi Arabia", flag: "🇸🇦" },
  { name: "Israel", flag: "🇮🇱" },
  { name: "Malta", flag: "🇲🇹" },
  { name: "Japan", flag: "🇯🇵" },
  { name: "South Korea", flag: "🇰🇷" },
];

export default function CountriesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new window.IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.5 });
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isVisible) return;

    let animationFrame: number;
    let scrollLeft = container.scrollLeft;

    const step = () => {
      if (!container) return;
      scrollLeft += 1; // Adjust speed here
      if (scrollLeft >= container.scrollWidth / 2) {
        scrollLeft = 0;
      }
      container.scrollLeft = scrollLeft;
      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible]);

  // Duplicate countries for seamless infinite scroll
  const items = [...countries, ...countries];

  return (
    <section ref={sectionRef} id="countries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Countries We Serve</h2>
          <p className="text-xl text-gray-600">Global opportunities with adherence to international labor standards.</p>
        </div>

        <div ref={containerRef} className="flex gap-6 overflow-x-hidden whitespace-nowrap" style={{ scrollBehavior: "auto" }}>
          {items.map((country, idx) => (
            <div
              key={country.name + idx}
              className="inline-block text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              style={{ minWidth: 160 }}
            >
              <div className="text-4xl mb-3">{country.flag}</div>
              <h3 className="font-medium text-gray-900">{country.name}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Badge className="bg-blue-100 text-blue-800 px-4 py-2 hover:text-white">
            All deployments comply with international labor standards and bilateral agreements
          </Badge>
        </div>
      </div>
    </section>
  );
}
