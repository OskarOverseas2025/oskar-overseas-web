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
import heroImg from "../public/hero.png";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-500 text-white px-4 py-2 text-sm font-medium">Established 1999 • Licensed & Trusted</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="text-orange-400">25 Years</span> of Trust.
                  <br />
                  <span className="text-orange-400">Thousands</span> of Lives
                  <br />
                  Transformed.
                </h1>
                <p className="text-xl text-blue-100 max-w-lg">
                  From Kathmandu to Globe — we send skilled Nepali manpower where the world needs it most. Licensed, ethical, fast, and 100%
                  compliant.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={"/contact"}>
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
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
                  <div className="text-3xl font-bold text-orange-400">15,000+</div>
                  <div className="text-sm text-blue-200">Workers Deployed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">12</div>
                  <div className="text-sm text-blue-200">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">25</div>
                  <div className="text-sm text-blue-200">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image src={heroImg} alt="Global Opportunities" width={700} height={600} className="rounded-lg shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-3">
                  <Globe className="h-8 w-8 text-blue-600" />
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

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Oskar Overseas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A licensed manpower recruitment agency founded in 1999, dedicated to connecting Nepali talent with global opportunities through ethical
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
                  <HardHat className="h-6 w-6 text-orange-500" />
                  <span className="font-medium">Skilled Labor</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                  <ChefHat className="h-6 w-6 text-orange-500" />
                  <span className="font-medium">Hospitality</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                  <Ship className="h-6 w-6 text-orange-500" />
                  <span className="font-medium">Marine</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                  <Stethoscope className="h-6 w-6 text-orange-500" />
                  <span className="font-medium">Healthcare</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                  <Shield className="h-6 w-6 text-orange-500" />
                  <span className="font-medium">Security</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                  <Building className="h-6 w-6 text-orange-500" />
                  <span className="font-medium">Construction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Complete Recruitment Process</h2>
            <p className="text-xl text-gray-600">From application to deployment - we handle everything with care and professionalism.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>1. Recruitment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive candidate screening, skill assessment, and job matching based on qualifications and preferences.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>2. Medical</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Complete medical examination and health certification as per destination country requirements.</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>3. Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Passport processing, visa application, work permits, and all necessary legal documentation.</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>4. Orientation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Pre-departure orientation covering cultural adaptation, workplace expectations, and safety guidelines.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle>5. Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Safe travel arrangements, airport assistance, and smooth transition to the workplace abroad.</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle>6. Post-Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Ongoing support, welfare monitoring, and assistance with any workplace or personal issues abroad.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real experiences from our candidates and employer partners.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Image src="/placeholder.svg?height=60&width=60" alt="Candidate" width={60} height={60} className="rounded-full mr-4" />
                <div>
                  <h3 className="font-bold text-gray-900">Rajesh Shrestha</h3>
                  <p className="text-gray-600">Construction Worker, UAE</p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "Oskar Overseas changed my life completely. Their transparent process and continuous support made my journey to UAE smooth and
                successful. I'm now earning well and supporting my family back home. Thank you for making my dreams come true!"
              </blockquote>
            </Card>

            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Image src="/placeholder.svg?height=60&width=60" alt="Employer" width={60} height={60} className="rounded-full mr-4" />
                <div>
                  <h3 className="font-bold text-gray-900">Sarah Al-Mahmoud</h3>
                  <p className="text-gray-600">HR Manager, Qatar</p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "We've been partnering with Oskar Overseas for over 5 years. Their candidates are well-trained, professional, and culturally prepared.
                The quality of service and reliability has made them our preferred recruitment partner for Nepali workers."
              </blockquote>
            </Card>
          </div>
        </div>
      </section>

      {/* Countries We Serve */}
      <section id="countries" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Countries We Serve</h2>
            <p className="text-xl text-gray-600">Global opportunities with adherence to international labor standards.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {[
              { name: "UAE", flag: "🇦🇪" },
              { name: "Qatar", flag: "🇶🇦" },
              { name: "Saudi Arabia", flag: "🇸🇦" },
              { name: "Japan", flag: "🇯🇵" },
              { name: "Israel", flag: "🇮🇱" },
              { name: "Malaysia", flag: "🇲🇾" },
              { name: "South Korea", flag: "🇰🇷" },
            ].map((country) => (
              <div key={country.name} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{country.flag}</div>
                <h3 className="font-medium text-gray-900">{country.name}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 hover:text-white">
              All deployments comply with international labor standards and bilateral agreements
            </Badge>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-4">For Job Seekers</h2>
              <p className="text-blue-100 mb-6 text-lg">
                Ready to transform your career? Join thousands of successful Nepali workers who have built their dreams abroad with our support.
              </p>
              <Link href={"/contact"} className="space-y-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 w-full lg:w-auto">
                  Apply for Jobs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <div className="text-sm text-blue-200">✓ Free consultation ✓ No hidden charges ✓ Complete support</div>
              </Link>
            </div>
            <div className="text-center lg:text-left border-l-0 lg:border-l border-blue-500 lg:pl-12">
              <h2 className="text-3xl font-bold mb-4">For Employers</h2>
              <p className="text-blue-100 mb-6 text-lg">
                Looking for skilled, reliable workers? Partner with us to access Nepal's talented workforce with complete legal compliance and
                support.
              </p>
              <Link href={"/contact"} className="space-y-4">
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
    </div>
  );
}
