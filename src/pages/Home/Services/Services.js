import { Box, Grid } from "@mui/material";
import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Service from "../../../components/Service/Service";

const serviceDetails = [
  {
    "name" : "Web & Mobile design",
    "image" : "https://i.ibb.co/fnRGcQR/service3.png",
    "description" : "We craft stunning and amazing web UI, using a well drrafted UX to fit your product."
  },
  {
    "name" : "Graphic design",
    "image" : "https://i.ibb.co/SmWNrvx/service2.png",
    "description" : "Amazing flyers, social media posts and brand representations that would make your brand stand out."
  },
  {
    "name" : "Web development",
    "image" : "https://i.ibb.co/qDsVNSM/service1.png",
    "description" : "With well written codes, we build amazing apps for all platforms, mobile and web apps in general."
  }
]


const Services = () => {
  return (
    <Box>
      <SectionTitle title="Provide awesome" colored='Services' sx={{ mb: 8}}/>
      <Grid container spacing={2}>
        {serviceDetails.map((serviceD) => (
              <Grid item xs={12} sm={6} md={4} key={serviceD.name} sx={{mt: 2}}>
                <Service image={serviceD.image} name={serviceD.name} key={serviceD.name} description={serviceD.description}/>
              </Grid>
            ))}
      </Grid>
    </Box>
  );
};

export default Services;
