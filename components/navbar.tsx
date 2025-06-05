import { Globe } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Globe className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-900">Oskar Overseas</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link href="/#services" className="text-gray-700 hover:text-blue-600 font-medium">
              Services
            </Link>
            <Link href="/#countries" className="text-gray-700 hover:text-blue-600 font-medium">
              Countries
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contacts
            </Link>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">Apply Now</Button>
        </div>
      </div>
    </nav>
  );
}
