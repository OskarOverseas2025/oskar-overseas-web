import React from "react";

export default function MilestonesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey Through Time</h2>
          <p className="text-xl text-gray-600">Key milestones that shaped our growth and success over 25 years.</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>

          <div className="space-y-12">
            <div className="relative flex items-center">
              <div className="flex-1 pr-8 text-right">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="text-2xl font-bold text-blue-600 mb-2">1999</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Foundation</h3>
                  <p className="text-gray-600">Official registration and licensing from DoFE, Nepal</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              <div className="flex-1 pl-8"></div>
            </div>
            <div className="relative flex items-center">
              <div className="flex-1 pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white"></div>
              <div className="flex-1 pl-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="text-2xl font-bold text-orange-500 mb-2">2000</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">First Deployment</h3>
                  <p className="text-gray-600">Started factory workers more than 500+ to Malayasia.</p>
                </div>
              </div>
            </div>
            <div className="relative flex items-center">
              <div className="flex-1 pr-8 text-right">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="text-2xl font-bold text-yellow-400 mb-2">2002</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Entry into Hong Kong</h3>
                  <p className="text-gray-600">Successful deployment to Hong Kong for housekeeping .</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-white"></div>
              <div className="flex-1 pl-8"></div>
            </div>
            <div className="relative flex items-center">
              <div className="flex-1 pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white"></div>
              <div className="flex-1 pl-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="text-2xl font-bold text-orange-500 mb-2">2003</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Gulf Region Success</h3>
                  <p className="text-gray-600">First successful deployment to the Gulf region.</p>
                </div>
              </div>
            </div>

            <div className="relative flex items-center">
              <div className="flex-1 pr-8 text-right">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="text-2xl font-bold text-green-600 mb-2">2007</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Marine & Sea-Based Jobs</h3>
                  <p className="text-gray-600">Expansion to include marine and sea-based job placements.</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white"></div>
              <div className="flex-1 pl-8"></div>
            </div>

            <div className="relative flex items-center">
              <div className="flex-1 pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
              <div className="flex-1 pl-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="text-2xl font-bold text-purple-600 mb-2">2011</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">10,000+ Deployed</h3>
                  <p className="text-gray-600">Crossed 10,000+ deployed workers milestone.</p>
                </div>
              </div>
            </div>

            <div className="relative flex items-center">
              <div className="flex-1 pr-8 text-right">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="text-2xl font-bold text-red-600 mb-2">2020</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Training Facility</h3>
                  <p className="text-gray-600">Launched in-house pre-departure training facility.</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white"></div>
              <div className="flex-1 pl-8"></div>
            </div>

            <div className="relative flex items-center">
              <div className="flex-1 pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              <div className="flex-1 pl-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="text-2xl font-bold text-blue-600 mb-2">2024</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Platform</h3>
                  <p className="text-gray-600">Digital platform launch for online job applications and consultations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
