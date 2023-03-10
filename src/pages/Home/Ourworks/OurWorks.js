import { Box, Grid, IconButton } from "@mui/material";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CreativeCard from "../../../components/CreativeCard/CreativeCard";
import { OurWorksData } from "./OurWorksData";


const OurWorks = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <Box sx={{ my: 5 }}>
      {/* heading section */}
      <Box
        sx={{
          mb: 7,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SectionTitle
          title="Here aree some of"
          colored="our works"
          sx={{
            textAlign: "left",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            sx={{
              "& .MuiTabs-indicator": {
                display: "none",
              },
              "& .Mui-selected": {
                color: "#7AB259",
                fontWeight: "bold",
              },
              "& .MuiButtonBase-root": {
                textTransform: "capitalize",
              },
            }}
          >
            <Tab label="All" />
            <Tab label="Web Design" />
            <Tab label="Mobile App" />
          </Tabs>
          <Box sx={{ fontSize: "2rem" }}>
            {/* button 1 */}
            <IconButton
              sx={{ border: "1px solid #959EAD", mr: 2 }}
              onClick={() => setValue(value - 1)}
              disabled={value === 0}
            >
              <ArrowBackIcon />
            </IconButton>
            {/* button 2 */}
            <IconButton
              sx={{
                border: "1px solid #959EAD",
                transform: "rotate(180deg)",
              }}
              onClick={() => setValue(value + 1)}
              disabled={value === 2}
            >
              <ArrowBackIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* card section */}
      <Grid container spacing={3} justifyContent="center">
        {OurWorksData[value].map((image) => (
          <Grid item>
            <CreativeCard image={image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurWorks;
