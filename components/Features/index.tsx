import React from "react";
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
            title="Get the Software Solution You Need"
            paragraph="Get an enterprise-level application, with no compromises in quality - no matter if it's a mobile or a web app, API development or a custom database solution."
            center
          />

<div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
      {featuresData.map((feature, index) => (
        <div
          key={feature.id}
          className={`rounded-lg bg-[#1e232e] hidden dark:block p-6 shadow-md ${
            index === featuresData.length - 1 ? 'lg:col-start-2' : ''
          }`}
        >
          <SingleFeature feature={feature} />
        </div>
      ))}
    </div>

          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <div
                key={feature.id}
                className="rounded-lg bg-[#f9fafb] hover dark:hidden  p-6 shadow-md"
              >
                <SingleFeature key={feature.id} feature={feature} />
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Features;
