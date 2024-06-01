import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sddoc Pioneering Software Solutions for Tomorrow’s Challenges",
  description: "Your trusted partner in innovative software development. We harness the power of technology to build dynamic, efficient, and user-friendly solutions that meet your business needs. Experience the future of software with Sddoc.",
//  icons: "/images/logo/sddoc.png"
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Testimonials />
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      <Pricing />
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
