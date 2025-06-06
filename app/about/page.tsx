import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, ArrowRight, MapPin, Phone, Mail, Target, Eye, Lightbulb } from "lucide-react";
import Image from "next/image";
import Resham from "../../public/members/resham-bdr-gurung.jpeg";
import Mahayshwari from "../../public/members/mahayshwari.jpeg";
import Bardan from "../../public/members/bardan.jpeg";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Oskar Overseas</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A quarter-century journey of connecting Nepali talent with global opportunities through ethical recruitment and unwavering commitment to
            excellence.
          </p>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To be the most trusted and preferred manpower recruitment agency, creating a bridge between Nepal and the world while ensuring
                  dignity, respect, and prosperity for every worker we serve.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To provide ethical, transparent, and comprehensive recruitment services that transform lives, build careers, and contribute to
                  Nepal's economic development through skilled workforce deployment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Core Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Integrity, Transparency, Excellence, Compassion, and Commitment to ethical practices guide every aspect of our operations and
                  relationships with candidates and employers.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Milestones */}
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
                    <p className="text-gray-600">
                      Oskar Overseas Pvt. Ltd. was established with a vision to connect Nepali workers with international opportunities.
                    </p>
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
                    <div className="text-2xl font-bold text-orange-500 mb-2">2005</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">First 1000 Deployments</h3>
                    <p className="text-gray-600">
                      Successfully deployed our first 1000 workers, establishing strong partnerships in the Gulf region.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="text-2xl font-bold text-green-600 mb-2">2010</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Regional Expansion</h3>
                    <p className="text-gray-600">Expanded operations to Southeast Asia and East Asia, diversifying our service portfolio.</p>
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
                    <div className="text-2xl font-bold text-purple-600 mb-2">2015</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">10,000 Lives Transformed</h3>
                    <p className="text-gray-600">Reached the milestone of 10,000 successful deployments across multiple countries and sectors.</p>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="text-2xl font-bold text-red-600 mb-2">2020</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Transformation</h3>
                    <p className="text-gray-600">
                      Launched digital platforms and online services to better serve candidates during the global pandemic.
                    </p>
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">25 Years of Excellence</h3>
                    <p className="text-gray-600">Celebrating 25 years of service with over 15,000 successful deployments across 12 countries.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
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
                    Over the past two decades, we’ve placed thousands of job seekers into stable and secure positions across the globe. But numbers
                    are not our true success — it’s the stories. The father who now supports his children’s education. The daughter who built a home
                    for her family. The young man who came back and started his own business.
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

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the dedicated professionals who make our mission possible.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <Image src={Resham} alt="Chairman" width={200} height={200} className="rounded-full mx-auto mb-4 object-cover" />
              <CardHeader>
                <CardTitle>Resham Bahadur Gurung</CardTitle>
                <CardDescription className="text-blue-600 font-medium">Chairman, Founder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Leadership and Backbone of the company, Strategic Partnership and International Relations</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <Image src={Bardan} alt="Director" width={200} height={200} className="rounded-full mx-auto mb-4 object-cover" />
              <CardHeader>
                <CardTitle>Bardan Gurung</CardTitle>
                <CardDescription className="text-blue-600 font-medium">Director</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Communication, Process Executions and Company Operations</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <Image src={Mahayshwari} alt="Marketing Manager" width={200} height={200} className="rounded-full mx-auto mb-4" />
              <CardHeader>
                <CardTitle>Mahayshwari Shrestha</CardTitle>
                <CardDescription className="text-blue-600 font-medium">Marketing Director</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Handles Client Relationship, Company Finances and Legal Matters, Contracting Process</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Documentation Head"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <CardHeader>
                <CardTitle>Megh Gurung</CardTitle>
                <CardDescription className="text-blue-600 font-medium">Office manager</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Handles documentations for recruiting and medical reports.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Welfare Officer"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <CardHeader>
                <CardTitle>Sita Sen</CardTitle>
                <CardDescription className="text-blue-600 font-medium">Front Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Coordinate with all candidates.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
