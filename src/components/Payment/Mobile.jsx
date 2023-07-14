import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function Mobile() {
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
          <Typography
            variant="h2"
            sx={{ textAlign: "center", fontWeight: "bold", mb: "0.6em" }}
          >
            Mobile Bank
          </Typography>
          <Box
            sx={{
              display: "flex",
              color: "#fff",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                bgcolor: "#D62267",
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",
                py: "2.5em",
                px: "1.2em",
                maxWidth: "380px",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "700" }}>
                bKash
              </Typography>
              <Typography>› Choose “Payment”</Typography>
              <Typography>› Enter wallet number : 01616478271</Typography>
              <Typography>
                › Enter a reference against your <br/> payment (e.g. Invoice Number)
              </Typography>
            </Box>
            <Box
              sx={{
                bgcolor: "#F6921E",
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",
                py: "2.5em",
                px: "1.5em",
                maxWidth: "380px",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "700" }}>
                Nagad
              </Typography>
              <Typography>› Choose “Payment”</Typography>
              <Typography>› Enter wallet number : 01616478271</Typography>
              <Typography>
                › Enter a reference against your<br/> payment (e.g. Invoice Number)
              </Typography>
            </Box>
            <Box
              sx={{
                bgcolor: "#89288F",
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",
                py: "2.5em",
                px: "1.5em",
                maxWidth: "380px",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "700" }}>
                Rocket
              </Typography>
              <Typography>› Choose “Payment”</Typography>
              <Typography>› Enter wallet number : 01616478271</Typography>
              <Typography>
                › Enter a reference against your <br/> payment (e.g. Invoice Number)
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
