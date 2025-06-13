import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Globe, Heart, Stethoscope, UserCheck, Users } from "lucide-react";
import React from "react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
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
  );
}
