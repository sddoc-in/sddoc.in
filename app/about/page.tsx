import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
       
        description=" Welcome to sddoc.in, your go-to
        destination for top-notch full-stack web development
        solutions. As a team of passionate and skilled develpoers, we
        are committed to delivering exceptional web development
        services tailored to meet your unique business needs.
        Whether you are a startup or a large enterprise, we have"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
