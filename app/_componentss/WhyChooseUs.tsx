import { CheckCircle } from "lucide-react";
import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Oskar Overseas?</h2>
          <p className="text-xl text-gray-600">Your success is our commitment. Here's what sets us apart.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-start space-x-4">
            <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">25 Years of Experience</h3>
              <p className="text-gray-600">Quarter-century of expertise in international manpower recruitment and deployment.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Government Licensed</h3>
              <p className="text-gray-600">Fully licensed and authorized by the Government of Nepal for overseas recruitment.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Complete Transparency</h3>
              <p className="text-gray-600">No hidden costs, clear communication, and honest guidance throughout the process.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Post-Deployment Support</h3>
              <p className="text-gray-600">Continuous support and assistance even after successful job placement abroad.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Ethical Recruitment</h3>
              <p className="text-gray-600">Committed to fair and ethical recruitment practices protecting worker rights.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Global Network</h3>
              <p className="text-gray-600">Strong partnerships with employers across 12 countries worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
