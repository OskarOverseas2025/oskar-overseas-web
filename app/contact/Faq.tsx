import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export default function Faq() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Quick answers to common questions about our services.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">How long does the recruitment process take?</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                The complete process typically takes 2-4 months, depending on the destination country and job type. This includes documentation,
                medical tests, visa processing, and pre-departure orientation.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">What are the service charges?</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Our service charges vary by destination and job category. We maintain complete transparency with no hidden costs. Contact us for
                detailed information about specific positions.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Do you provide post-deployment support?</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Yes, we provide comprehensive post-deployment support including welfare monitoring, assistance with workplace issues, and emergency
                support throughout your employment abroad.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">What documents do I need to apply?</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Basic requirements include passport, educational certificates, experience certificates, medical reports, and passport-size photos.
                Specific requirements vary by job and destination country.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
