import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page |  SaaS",
  description: "conatct us",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Email us on deepak@sddoc.in "
        
      />
      

      <Contact />
    </>
  );
};

export default ContactPage;
