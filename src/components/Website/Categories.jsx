import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function Categories() {
  return (
    <>
      <Box sx={{ bgcolor: "background.default", py: "3em", color:'text.primary' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center"}}>
            <Typography variant="h4"gutterBottom>Trending Top Categories</Typography>
            <Typography gutterBottom>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
              vero?
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent:'space-between',flexDirection:{xs:'column', md:'row'}, gap:'2rem', my:{lg:'2rem', xs:'1rem' }, alignItems:'center'}}>
            <Box sx={{textAlign:'center', width:'200px'}}>
              <img
                src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/512/external-graphic-designer-freelancer-xnimrodx-lineal-xnimrodx.png"
                alt=""
                height={50}
              />
              <Typography>Graphic Design</Typography>
            </Box>
            <Box sx={{textAlign:'center', width:'200px'}}>
              <img
                src="https://img.icons8.com/external-goofy-solid-kerismaker/512/external-Marketing-business-goofy-solid-kerismaker.png"
                alt=""
                height={50}
              />
              <Typography>Digital Marketing</Typography>
            </Box>
            <Box sx={{textAlign:'center', width:'200px'}}>
              <img
                src="https://img.icons8.com/external-justicon-lineal-justicon/512/external-web-design-responsive-web-design-justicon-lineal-justicon-1.png"
                alt=""
                height={50}
              />
              <Typography>Web Design</Typography>
            </Box>
            <Box sx={{textAlign:'center', width:'200px'}}>
              <img
                src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/512/external-dashboard-web-analytics-smashingstocks-mixed-smashing-stocks.png"
                alt=""
                height={50}
              />
              <Typography>Web Portals</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent:'space-between',flexDirection:{xs:'column', md:'row'}, gap:'2rem', alignItems:'center' }}>
            <Box sx={{textAlign:'center', width:'200px'}}>
              <img
                src="https://img.icons8.com/dotty/512/laptop-settings.png"
                alt=""
                height={50}
              />
              <Typography>Softwares</Typography>
            </Box>
            <Box sx={{textAlign:'center', width:'200px'}}>
              <img
                src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/512/external-mobile-app-design-thinking-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"
                alt=""
                height={50}
              />
              <Typography>Mobile Apps</Typography>
            </Box>
            <Box sx={{textAlign:'center', width:'200px'}}>
              <img
                src="https://img.icons8.com/external-outline-design-circle/512/external-60-business-and-investment-outline-design-circle.png"
                alt=""
                height={50}
              />
              <Typography>Content Writing</Typography>
            </Box>
            <Box sx={{textAlign:'center', width:'200px'}}>
              <img
                src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/512/external-domain-web-hosting-xnimrodx-lineal-xnimrodx.png"
                alt=""
                height={50}
              />
              <Typography>Domain And Hosting</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
