import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Shrestha",
    role: "Construction Worker, UAE",
    image: "/testimonials/1.jpeg",
    alt: "Candidate",
    rating: 5,
    quote:
      '"Oskar Overseas changed my life completely. Their transparent process and continuous support made my journey to UAE smooth and successful. I\'m now earning well and supporting my family back home. Thank you for making my dreams come true!"',
  },
  {
    id: 2,
    name: "Sarah Al-Mahmoud",
    role: "HR Manager, Qatar",
    image: "/placeholder.svg?height=60&width=60",
    alt: "Employer",
    rating: 5,
    quote:
      '"We\'ve been partnering with Oskar Overseas for over 5 years. Their candidates are well-trained, professional, and culturally prepared. The quality of service and reliability has made them our preferred recruitment partner for Nepali workers."',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600">Real experiences from our candidates and employer partners.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <Card className="p-8" key={t.id}>
              <div className="flex items-center mb-6">
                <Image src={t.image} alt={t.alt} width={60} height={60} className="rounded-full h-[4rem] w-[4rem] mr-4" />
                <div>
                  <h3 className="font-bold text-gray-900">{t.name}</h3>
                  <p className="text-gray-600">{t.role}</p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">{t.quote}</blockquote>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
