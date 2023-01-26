import { Box, Button, Stack, styled, Typography } from "@mui/material";
import React from "react";

const BrandingWrapper = styled(Box)(({ theme }) => ({
  height: "70vh",
  backgroundColor: "rgba(122,  178, 89, 0.15)",
  padding: theme.spacing(4),
  margin: "4rem 0",
  clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: 'center'
}));

const Branding = () => {
  return (
    <BrandingWrapper>
      <Stack spacing={5} sx={{p : 4}}>
        <Typography sx={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            lineHeight: '1.2'
        }}>Let’s Grow Your Brand <br /> To The Next Level</Typography>
        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </Typography>
        <Button variant="contained" sx={{
          width: '50%'
        }}>Hire Us</Button>
        
      </Stack>
      <Box sx={{
        width: '80%',
        display: {
          xs: 'none',
          sm: 'none',
          md: 'block'
        }
      }}>
        <img
          src="https://i.ibb.co/vYS7NS8/Frame.png"
          alt="branding"
          style={{ width: "100%" }}
        />
      </Box>
    </BrandingWrapper>
  );
};

export default Branding;
