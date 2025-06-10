import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4">For Job Seekers</h2>
            <p className="text-blue-100 mb-6 text-lg">
              Ready to transform your career? Join thousands of successful Nepali workers who have built their dreams abroad with our support.
            </p>
            <Link href={"/contact?inquiryType=job-seeker"} className="space-y-4">
              <Button size="lg" className="bg-[#faa51b] hover:bg-[#faa41be8] w-full lg:w-auto">
                Apply for Jobs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="text-sm text-blue-200">✓ Free consultation ✓ No hidden charges ✓ Complete support</div>
            </Link>
          </div>
          <div className="text-center lg:text-left border-l-0 lg:border-l border-blue-500 lg:pl-12">
            <h2 className="text-3xl font-bold mb-4">For Employers</h2>
            <p className="text-blue-100 mb-6 text-lg">
              Looking for skilled, reliable workers? Partner with us to access Nepal's talented workforce with complete legal compliance and support.
            </p>
            <Link href={"/contact?inquiryType=employer"} className="space-y-4">
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:border-gray-300 hover:text-blue-800 hover:bg-gray-200 text-blue-800 w-full lg:w-auto"
              >
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="text-sm text-blue-200">✓ Pre-screened candidates ✓ Legal compliance ✓ Ongoing support</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
