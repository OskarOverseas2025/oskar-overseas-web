import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Resham from "/public/members/resham-bdr-gurung.jpeg";
import Mahayshwari from "/public/members/mahayshwari.jpeg";
import Bardan from "/public/members/bardan.jpeg";

export default function TeamSection() {
  return (
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
            <Image src="/placeholder.svg?height=200&width=200" alt="Welfare Officer" width={200} height={200} className="rounded-full mx-auto mb-4" />
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
  );
}
