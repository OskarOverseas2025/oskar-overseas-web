import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Lightbulb } from "lucide-react";

export default function MissonValuesSection() {
  return (
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
                To provide ethical, transparent, and comprehensive recruitment services that transform lives, build careers, and contribute to Nepal's
                economic development through skilled workforce deployment.
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
  );
}
