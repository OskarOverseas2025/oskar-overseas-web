"use client";
import React from "react";
import heroImg from "../../public/hero.png";
import LogoImg from "../../public/logo.png";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CountUp from "react-countup";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-[#faa51b] text-white px-4 py-2 text-sm font-medium">Established 1999 • Licensed & Trusted</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-[#faa51b]">25 Years</span> of Trust.
                <br />
                <span className="text-[#faa51b]">Thousands</span> of Lives
                <br />
                Transformed.
              </h1>
              <p className="text-xl text-blue-100 max-w-lg">
                From Kathmandu to Globe — we send skilled Nepalese manpower where the world needs it most. Licensed, ethical, fast, and 100%
                compliant.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={"/contact?inquiryType=job-seeker"}>
                <Button size="lg" className="bg-[#faa51b] hover:bg-[#faa41be8] text-white px-8 py-4 text-lg">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href={"/about"}>
                <Button size="lg" variant="outline" className="border-white hover:bg-white text-blue-900 px-8 py-4 text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-600">
              <div className="text-center">
                <CountUp duration={5} className="counter text-3xl font-bold text-[#faa51b]" end={15000} enableScrollSpy></CountUp>
                <span className="text-3xl font-bold text-[#faa51b]">+</span>
                <div className="text-sm text-blue-200">Workers Deployed</div>
              </div>
              <div className="text-center">
                <CountUp duration={5} className="counter text-3xl font-bold text-[#faa51b]" end={12} enableScrollSpy></CountUp>
                <span className="text-3xl font-bold text-[#faa51b]">+</span>
                <div className="text-sm text-blue-200">Countries</div>
              </div>
              <div className="text-center">
                <CountUp
                  duration={5}
                  className="counter text-3xl font-bold text-[#faa51b]"
                  end={new Date().getFullYear() - 1999}
                  enableScrollSpy
                ></CountUp>
                <span className="text-3xl font-bold text-[#faa51b]">+</span>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image src={heroImg} alt="Global Opportunities" width={700} height={600} className="rounded-lg shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-lg shadow-xl">
              <div className="flex items-center space-x-3">
                <Image src={LogoImg} alt="logo" className="w-[2rem]" />
                <div>
                  <div className="font-bold">Global Reach</div>
                  <div className="text-sm text-gray-600">Oskar Overseas Pvt Ltd.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
