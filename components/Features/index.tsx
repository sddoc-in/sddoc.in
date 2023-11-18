
import React from 'react';
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Code from "../Hero/Code";
import Rotater from "../Atoms/Rotater";
import { SERVICES_DATA } from "../constants/services";


const Features = () => {


  return (
    <>

      <Rotater data={SERVICES_DATA[6]} />
      <section id="features" className="py-16 md:py-20 lg:py-28">
      {/* <Code/> */}
        <div className="container">
          <SectionTitle
            title="Transformative Solutions for Your Business"
            paragraph="We specialize in API development, MERN STACK, AI & ML, Data Science, Python automation, and robust ERP & CRM solutions. Our expertise extends to delivering innovative SAAS solutions that drive business forward."
            center
          />
          

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
