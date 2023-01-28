import React from "react";
import Branding from "./Branding/Branding";
import Brands from "./Brands/Brands";
import Faq from "./Faq/Faq";
import OurWorks from "./Ourworks/OurWorks";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Branding />
      <Brands />
      <Services />
      <OurWorks />
      <Faq />
    </div>
  );
};

export default Home;
