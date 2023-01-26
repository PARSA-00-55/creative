import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Service = ({ image, name, description }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: "none",
        pt: 2,
        mx: 'auto',
        "&:hover": {
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
        sx={{
          width: "auto",
          mx: "auto",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold', textAlign: 'center', mt: 2}}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Service;
