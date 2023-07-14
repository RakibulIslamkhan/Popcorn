import React from "react";
import { Box, Button, Container, Divider, Typography } from "@mui/material";

export default function Heading() {
  return (
    <div>
      <Box sx={{bgcolor:'#01115E', py:'3rem',}}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", alignItems:'center', gap:5, flexDirection:{lg:'row', xs:'column-reverse'} }}>
            <Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{color:'#93683F', mr:'0.3rem'}}>Google Workspace</Typography>
                <Divider sx={{borderBottom:'2px solid #93683F', width:'25%'}} />
              </Box>
              <Typography variant="h4" sx={{color:'#fff', my:'1rem'}}>
                Everything you need to get anything done
              </Typography>
              <Typography  sx={{color:'#fff', my:'1rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, facere.</Typography>
              <Button variant="contained">Get Started</Button>
            </Box>
            <Box>
                <img src='https://i.postimg.cc/N09qC9Vm/header.png' height={350} className="img-fluid"/>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
