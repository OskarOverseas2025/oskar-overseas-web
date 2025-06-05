import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oskar Overseas - 25 Years of Trust | Licensed Manpower Recruitment Nepal",
  description:
    "Licensed manpower recruitment agency from Nepal. 25 years of experience, 15,000+ workers deployed across 12 countries. Ethical recruitment with complete transparency and support.",
  keywords:
    "manpower recruitment Nepal, overseas jobs, Gulf jobs, skilled workers, construction jobs, hospitality jobs, healthcare jobs, marine jobs",
  generator: "v0.dev",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen `}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
