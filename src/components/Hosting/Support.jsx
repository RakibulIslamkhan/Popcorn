import { Button, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import SupportImg from "../../icons/support";

export default function Support() {
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
              bgcolor: "#00105D",
              px: "1rem",
              display: "flex",
              alignItems: "center",
              pt: "1rem",
              justifyContent: "space-between",
              flexDirection: { xs: "column", lg: "row" },
              gap: "2rem",
            }}
          >
            <Box sx={{ color: "#fff", width: {lg:"60%", xs:'100%'} }}>
              <Typography variant="h5">
                24/7 Expert Team Support Our Customer Love.
              </Typography>
              <Typography sx={{ my: "1rem" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                corporis corrupti repudiandae harum dignissimos veritatis.
              </Typography>
              <Button variant="contained">Live Chat with sales</Button>
            </Box>
            <Box sx={{ height: "250px" }}>
              <SupportImg />
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
