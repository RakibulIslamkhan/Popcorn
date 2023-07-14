import { Button, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Image from "next/image";
import React from "react";
import SupportImg from "../../../public/assets/team_cta.png";

export default function ContactUs() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.default",
          py: "3rem",
          color: "text.primary",
        }}
      >
        <Container maxWidth="lg">
          <Paper
            elevation={0}
            sx={{
              bgcolor: "#fff",
              px: "1rem",
              display: "flex",
              alignItems: "center",
              pt: "1rem",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              gap: "2rem",
            }}
          >
            <Box sx={{ color: "#000", width: {lg:"60%", xs:'100%'} }}>
              <Typography variant="h5">
                24/7 Expert Team Support Our Customer Love.
              </Typography>
              <Typography sx={{ my: "1rem" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                corporis corrupti repudiandae harum dignissimos veritatis.
              </Typography>
              <Typography sx={{ my: "1rem" }}>
                <strong>+1 800 123 4567</strong>
              </Typography>
              <Button variant="contained">Live Chat with sales</Button>
            </Box>
            <Box>
              <Image src={SupportImg} height={250} />
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
