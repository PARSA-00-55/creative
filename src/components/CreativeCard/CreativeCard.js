import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, IconButton, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CreativeCard = ({image}) => {
  const theme = useTheme();
  return (
    <Card sx={{ width: 345,  p: 2, borderRadius: "10px" }}>
      <CardMedia
        sx={{ height: 180, borderRadius: "10px" }}
        image={image}
        title="green iguana"
      />
      <CardContent
        sx={{
          p: 0,
          pt: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          "&:last-child": {
            pb: 0,
          },
        }}
      >
        <Box>
          <Typography
            gutterBottom
            variant="body"
            component="div"
            color="text.secondary"
          >
            Service
          </Typography>
          <Typography variant="h5" color="primary.main" fontWeight={600}>
            Web design research
          </Typography>
        </Box>
        <IconButton
          sx={{
            border: `1px solid ${theme.palette.primary.main}`,
            "&>svg": {color: 'primary.main'},
          }}
        >
          <AddIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default CreativeCard;
