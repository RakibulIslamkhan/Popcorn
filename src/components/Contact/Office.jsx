import { Divider, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

export default function Office() {
  return (
      <Box sx={{py:'2em', bgcolor:'background.default'}}>
        <Container>
          <Box sx={{ display: "flex", justifyContent:'center', alignItems:'center', flexDirection:{xs:'column', md:'row'} }}>
            <Paper
              sx={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",height:'350px', width:{xs:'100%',md:'400px'}, p:'1.5em', color:'text.primary' }}
            >
              <Typography variant="h5" sx={{fontWeight:'bold'}}>Corporate Office</Typography>
              <Divider width="10%" sx={{bgcolor:'#1C40F2', height:'3px', my:'1.5em'}}/>
              <Typography variant="h6">
               Dhaka 1229, Bangladesh
              </Typography>
              <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, exercitationem consectetur? Non unde recusandae placeat.</Typography>
            </Paper>
            <Box sx={{width:{xs:'100%', md:'450px'}}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58403.52099201027!2d90.35174504793059!3d23.810772497135716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c65c604adb5d%3A0x877c5bc2bf077485!2sPOPCORN%20IT!5e0!3m2!1sen!2sbd!4v1667732694204!5m2!1sen!2sbd"
                width="100%"
                height="400"
                style={{ border: "0", zIndex: "-1" }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </Box>
          </Box>
        </Container>
      </Box>
  );
}
