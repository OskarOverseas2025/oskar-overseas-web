import React from "react";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import LogoImg from "../public/logo.png";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href={"/"} className="flex items-center">
              <Image src={LogoImg} alt="logo" className="w-[2rem]" />
              <span className="text-xl font-bold text-white">Oskar Overseas</span>
            </Link>
            <p className="text-gray-400">Connecting Nepal to the world through ethical recruitment since 1999.</p>
            <div className="space-y-2">
              <Link href={"/contact#location"} className="flex items-center text-gray-400 hover:text-white">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">Lalitpur, Nepal</span>
              </Link>
              <Link href={"tel:+9779851031188"} className="flex items-center text-gray-400 hover:text-white">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+977-9851031188</span>
              </Link>
              <Link href={"mailto:support@oskaroverseas.com"} className="flex items-center text-gray-400 hover:text-white">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">support@oskaroverseas.com</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white">
                Home
              </Link>
              <Link href="/#services" className="block text-gray-400 hover:text-white">
                Services
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white">
                About
              </Link>
              <Link href="/gallery" className="block text-gray-400 hover:text-white">
                Gallery
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <div className="space-y-2 flex flex-col">
              <Link href={"/#services"} className="text-gray-400 hover:text-white">
                Recruitment
              </Link>
              <Link href={"/#services"} className="text-gray-400 hover:text-white">
                Medical
              </Link>
              <Link href={"/#services"} className="text-gray-400 hover:text-white">
                Documentation
              </Link>
              <Link href={"/#services"} className="text-gray-400 hover:text-white">
                Orientation
              </Link>
              <Link href={"/#services"} className="text-gray-400 hover:text-white">
                Deployment
              </Link>
              <Link href={"/#services"} className="text-gray-400 hover:text-white">
                Post-Deployment
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Certifications</h3>
            <div className="space-y-2">
              <Badge className="bg-green-600 text-white">Government Licensed</Badge>
              <div className="text-gray-400 text-sm">License No: 728-064/65</div>
              <div className="text-gray-400 text-sm">Established: 1999</div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Oskar Overseas Pvt. Ltd. All rights reserved.
            <a href="https://technirvana.com.np/" className="text-gray-400 hover:text-white" target="_blank">
              {" "}
              {"  "}Developed by Tech Nirvana.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
