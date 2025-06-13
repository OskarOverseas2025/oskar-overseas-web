import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Faq from "./Faq";
import ContactForm from "./_components/ContactForm";
import InnerBanner from "@/components/InnerBanner";
import { Suspense } from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <InnerBanner
        imgSrc="/about.jpg"
        title="Get In Touch"
        description="Ready to start your global career journey? We're here to guide you every step of the way. Contact us today for personalized consultation
            and support."
      />
      {/* Contact Form and Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Suspense fallback={<div className="text-center text-gray-500">Loading contact form...</div>}>
              <ContactForm />
            </Suspense>
            {/* Office Location and Map */}
            <div className="space-y-8" id="location">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
                <p className="text-gray-600 mb-6">
                  Located in the heart of Kathmandu, our office is easily accessible and equipped with modern facilities to serve you better.
                </p>

                <Card className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Head Office</h3>
                        <p className="text-gray-600">
                          Oskar Overseas Pvt. Ltd.
                          <br />
                          Lalitpur, Nepal
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Phone Numbers</h3>
                        <p className="text-gray-600">
                          Mobile: +977-9851031188
                          <br />
                          WhatsApp: +44 7472 498254
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-orange-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Email Addresses</h3>
                        <p className="text-gray-600">support@oskaroverseas.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-purple-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Office Hours</h3>
                        <p className="text-gray-600">
                          Sunday - Friday: 9:00 AM - 5:00 PM
                          <br />
                          <span className="text-red-600">Closed on public holidays</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="lg:h-[38.3125rem] md:h-[25rem] h-[16.1875rem] w-full">
          <iframe
            src={
              "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14133.843838538916!2d85.3143445!3d27.6721445!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x67f7cf377d180053%3A0xd1766edd174f90de!2sOskar%20Overseas!5e0!3m2!1sen!2snp!4v1749807392780!5m2!1sen!2snp"
            }
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </section>
      <Faq />
    </div>
  );
}
