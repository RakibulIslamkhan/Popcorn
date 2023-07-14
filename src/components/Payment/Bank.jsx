import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function Bank() {
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
            Bank Transfer
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
                bgcolor: "#FFD000",
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",
                py: "2.5em",
                px: "1.2em",
                maxWidth: "380px",
                color: "#000",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "700" }}>
                Eastern Bank Ltd.
              </Typography>
              <Typography>Account Name: POPCORN IT</Typography>
              <Typography>Account Number: 1121070082271</Typography>
              <Typography>Branch: Jashim Uddin Road</Typography>
              <Typography>SWIFT: EBLDBDDH</Typography>
              <Typography>Routing Number: 095260271</Typography>
            </Box>
            <Box
              sx={{
                bgcolor: "#0D4691",
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",
                py: "2.5em",
                px: "1.5em",
                maxWidth: "380px",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "700" }}>
                Brac Bank Ltd.
              </Typography>
              <Typography>Account Name: POPCORN IT</Typography>
              <Typography>Account Number: 1537202699665001</Typography>
              <Typography>Branch: Ashkona</Typography>
              <Typography>SWIFT: BRAKBDDH</Typography>
              <Typography>Routing Number: 060264631</Typography>
            </Box>
            <Box
              sx={{
                bgcolor: "#D74141",
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",
                py: "2.5em",
                px: "1.5em",
                maxWidth: "380px",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "700" }}>
                Rupali Bank Ltd.
              </Typography>
              <Typography>Account Name: POPCORN IT</Typography>
              <Typography>Account Number: 5553020000160</Typography>
              <Typography>Branch: Nikunja</Typography>
              <Typography>SWIFT:</Typography>
              <Typography>Routing Number: 185260181</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
