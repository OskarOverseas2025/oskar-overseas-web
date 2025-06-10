import { Building, ChefHat, Globe, HardHat, Shield, Ship, Stethoscope, Users } from "lucide-react";
import React from "react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Oskar Overseas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A licensed manpower recruitment agency founded in 1999, dedicated to connecting Nepalese talent with global opportunities through ethical
            and transparent practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Who We Are</h3>
              <p className="text-gray-600 leading-relaxed">
                Oskar Overseas Pvt. Ltd. has been a trusted name in manpower recruitment since 1999. Based in Kathmandu, Nepal, we have successfully
                deployed over 15,000 skilled workers across 12 countries, transforming lives and building careers globally.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to ethical recruitment, transparency, and comprehensive support has made us a preferred partner for both job seekers
                and international employers.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-bold text-gray-900">15,000+</div>
                <div className="text-sm text-gray-600">Workers Deployed</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-bold text-gray-900">12</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Our Specializations</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                <HardHat className="h-6 w-6 text-[#faa51b]" />
                <span className="font-medium">Skilled Labor</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                <ChefHat className="h-6 w-6 text-[#faa51b]" />
                <span className="font-medium">Hospitality</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                <Ship className="h-6 w-6 text-[#faa51b]" />
                <span className="font-medium">Marine</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                <Stethoscope className="h-6 w-6 text-[#faa51b]" />
                <span className="font-medium">Healthcare</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                <Shield className="h-6 w-6 text-[#faa51b]" />
                <span className="font-medium">Security</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                <Building className="h-6 w-6 text-[#faa51b]" />
                <span className="font-medium">Construction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
