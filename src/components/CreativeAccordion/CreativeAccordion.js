import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CustomExpandIcon = () => {
  return (
    <div>
      <div className="expandMoreIcon">
        <AddIcon />
      </div>
      <div className="removeExpandIcon">
        <RemoveIcon />
      </div>
    </div>
  );
};

const CreativeAccordion = ({ title, description }) => {
  return (
    <Accordion
      sx={{
        border: "2px solid #ESEAF4",
        p: 2,
        "& .Mui-expanded": {
          "& .expandMoreIcon": {
            display: "none",
          },
          "& .removeExpandIcon": {
            display: "block",
            "& svg": {
              color: "primary.green",
            },
          },
        },
      }}
    >
      <AccordionSummary
        sx={{
          "& .removeExpandIcon": {
            display: "none",
          },
          "& p": {
            color: "primary.main",
            fontWeight: "bold",
          },
          "& .Mui-expanded": {
            "& p": {
              color: "primary.green",
            },
          },
        }}
        expandIcon={<CustomExpandIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          sx={{
            color: "#5A7184",
          }}
        >
          {description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default CreativeAccordion;
