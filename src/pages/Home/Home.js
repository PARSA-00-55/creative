import React from "react";
import Branding from "./Branding/Branding";
import Brands from "./Brands/Brands";
import OurWorks from "./Ourworks/OurWorks";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Branding />
      <Brands />
      <Services />
      <OurWorks />
    </div>
  );
};

export default Home;
