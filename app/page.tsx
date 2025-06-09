import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Users,
  Award,
  Shield,
  Heart,
  CheckCircle,
  ArrowRight,
  Star,
  Building,
  Stethoscope,
  Ship,
  HardHat,
  ChefHat,
  UserCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "./_componentss/HeroSection";
import AboutSection from "./_componentss/AboutSection";
import WhyChooseUs from "./_componentss/WhyChooseUs";
import ServicesSection from "./_componentss/ServicesSection";
import Testimonials from "./_componentss/Testimonials";
import CountriesSection from "./_componentss/CountriesSection";
import CtaSection from "./_componentss/CtaSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      {/* About Section */}
      <AboutSection />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Services Section */}
      <ServicesSection />
      {/* Testimonials Section */}
      <Testimonials />
      {/* Countries We Serve */}
      <CountriesSection />
      {/* Call to Action Section */}
      <CtaSection />
    </div>
  );
}
