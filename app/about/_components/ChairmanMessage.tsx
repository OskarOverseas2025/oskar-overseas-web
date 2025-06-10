import Image from "next/image";
import React from "react";
import Resham from "../../../public/members/resham-bdr-gurung.jpeg";

export default function ChairmanMessage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={Resham} alt="Chairman" width={400} height={500} className="rounded-lg shadow-lg object-cover" />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Chairman's Message</h2>
              <div className="text-lg text-gray-600 space-y-4">
                <p>Dear Visitors,</p>
                <p>It is my pleasure to welcome you to the official website of Oskar Overseas Pvt. Ltd.</p>
                <p>
                  When I founded this company in 1999, I envisioned a recruitment agency that would do more than just move manpower — I wanted to
                  create a movement for fairness, dignity, and opportunity for every Nepali citizen dreaming of a better life abroad.
                </p>
                <p>
                  Over the past two decades, we’ve placed thousands of job seekers into stable and secure positions across the globe. But numbers are
                  not our true success — it’s the stories. The father who now supports his children’s education. The daughter who built a home for her
                  family. The young man who came back and started his own business.
                </p>
                <p>
                  I believe in building long-term partnerships — with our candidates, our employers, and the regulatory bodies we work under. Every
                  person who walks into our office or sends us their CV is treated with respect, honesty, and professionalism. We look forward to
                  helping more individuals achieve their goals — and to continuing our contribution to Nepal’s international workforce reputation.
                </p>
                <p>Warm regards,</p>
              </div>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="font-bold text-gray-900 text-lg">Mr. Resham Bahadur Gurung</div>
              <div className="text-gray-600">Chairman</div>
              <div className="text-gray-600">Oskar Overseas Pvt. Ltd.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
