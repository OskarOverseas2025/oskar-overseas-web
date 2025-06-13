import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Resham from "/public/members/resham-bdr-gurung.jpeg";
import Mahayshwari from "/public/members/mahayshwari.jpeg";
import Bardan from "/public/members/bardan.jpeg";
import Sita from "/public/members/sita.jpeg";
import Megh from "/public/members/megh.jpeg";

const teamMembers = [
  {
    id: 1,
    name: "Resham Bahadur Gurung",
    title: "Chairman, Founder",
    image: Resham,
    alt: "Chairman",
    description: "Leadership and Backbone of the company, Strategic Partnership and International Relations",
  },
  {
    id: 2,
    name: "Bardan Gurung",
    title: "Director",
    image: Bardan,
    alt: "Director",
    description: "Communication, Process Executions and Company Operations",
  },
  {
    id: 3,
    name: "Mahayshwari Shrestha",
    title: "Marketing Director",
    image: Mahayshwari,
    alt: "Marketing Manager",
    description: "Handles Client Relationship, Company Finances and Legal Matters, Contracting Process",
  },
  {
    id: 4,
    name: "Megh Gurung",
    title: "Office Manager",
    image: Megh,
    alt: "Documentation Head",
    description: "Handles documentations for recruiting and medical reports.",
  },
  {
    id: 5,
    name: "Sita Sen",
    title: "Front Officer",
    image: Sita,
    alt: "Welfare Officer",
    description: "Coordinates with all candidates and supports smooth front-desk operations.",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
          <p className="text-xl text-gray-600">Meet the dedicated professionals who make our mission possible.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card className="text-center p-6" key={member.id}>
              <Image
                src={member.image}
                alt={member.alt}
                width={200}
                height={200}
                className="rounded-full w-[12rem] h-[12rem] mx-auto mb-4 object-cover"
              />
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription className="text-blue-600 font-medium">{member.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
