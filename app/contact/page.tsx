import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Faq from "./Faq";
import ContactForm from "./_components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to start your global career journey? We're here to guide you every step of the way. Contact us today for personalized consultation
            and support.
          </p>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />
            {/* Office Location and Map */}
            <div className="space-y-8">
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
                          Putalisadak, Kathmandu
                          <br />
                          Nepal - 44600
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Phone Numbers</h3>
                        <p className="text-gray-600">
                          Office: +977-1-4444444
                          <br />
                          Mobile: +977-9851234567
                          <br />
                          WhatsApp: +977-9851234567
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-orange-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Email Addresses</h3>
                        <p className="text-gray-600">
                          General: info@oskaroverseas.com
                          <br />
                          Jobs: jobs@oskaroverseas.com
                          <br />
                          Support: support@oskaroverseas.com
                        </p>
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
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.6592573482812!2d85.33027412604223!3d27.666012127312275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x44087227ee35291b%3A0xca9c38954e503131!2soskar%20overseas%20pvt.ltd!5e0!3m2!1sen!2snp!4v1749451194209!5m2!1sen!2snp"
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
