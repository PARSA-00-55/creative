import { Box } from "@mui/material";
import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const serviceImages = [
  "https://i.ibb.co/fnRGcQR/service3.png",
  "https://i.ibb.co/SmWNrvx/service2.png",
  "https://i.ibb.co/qDsVNSM/service1.png",
];

const Services = () => {
  return (
    <Box>
      <SectionTitle title="Provide awesome" colored='Services' />
    </Box>
  );
};

export default Services;
