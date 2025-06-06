"use client";
import { Facebook, Globe, Instagram, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import LogoImg from "../public/logo.png";

const NavItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/#services",
  },
  {
    name: "Countries",
    path: "/#countries",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image src={LogoImg} alt="logo" className="w-[2rem]" />
            <span className="text-xl font-bold ">Oskar Overseas</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {NavItems.map((item) => {
              const isActive = item.path === "/" ? pathname === item.path : pathname.startsWith(item.path);
              return (
                <Link href={item.path} className={`${isActive ? "text-blue-600" : "text-gray-700"}   hover:text-blue-600 font-medium`}>
                  {item.name}
                </Link>
              );
            })}
          </div>
          <Link href={"/contact"}>
            <Button className="bg-blue-600 hover:bg-blue-700 md:block hidden">Apply Now</Button>
          </Link>
          <button className="lg:hidden flex items-center h-full" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {!isSidebarOpen && <Menu />}
          </button>
          <div
            className={`fixed top-0 left-0 w-[96.5%] h-screen z-[150] bg-white  transform transition-transform duration-300 ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-[101%]"
            }`}
          >
            <div className="mt-[1.4rem] mb-[1.875rem] flex justify-end pr-[1.25rem]">
              <button className="size-[.9375rem]" onClick={() => setIsSidebarOpen(false)}>
                <X />
              </button>
            </div>

            <ul className="flex flex-col px-[2.5rem] gap-[2.5rem] font-aloevera-semibold font-[600] text-[0.875rem] mb-[6.25rem]">
              {NavItems.map((item) => {
                const isActive = item.path === "/" ? pathname === item.path : pathname.startsWith(item.path);

                return (
                  <li
                    key={item.name}
                    className={`
              ${isActive ? "text-blue-600" : ""} `}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <Link href={item.path}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex justify-center gap-[1.25rem] pb-[.6875rem] border-b border-b-textBlack mx-[2.5rem]">
              <Link href={""}>
                <Facebook color="blue" />
              </Link>

              <Link href={""}>
                <Instagram color="blue" />
              </Link>
              <Link href={""}>
                <Linkedin color="blue" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
