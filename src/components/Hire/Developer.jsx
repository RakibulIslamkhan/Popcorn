import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

export default function Developer() {
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
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h5"
              sx={{
                background:
                  "linear-gradient(90deg, rgba(24,114,255,1) 0%, rgba(129,20,255,1) 50%)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Our Developers
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Build when inspiration strikes
            </Typography>
            <Typography sx={{ width: "55%", mx: "auto", my: "1.5rem" }}>
              Free developers from time-consuming unnecessary process that slow
              your work so you and your team can focus on creating
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              textAlign: "center",
              py: "2rem",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: "2rem", md: "0" },
            }}
          >
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Full Time
              </Typography>
              <Typography>Daily:8 hours | Weekly:5 Days</Typography>
            </Box>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Part Time
              </Typography>
              <Typography>Daily:8 hours | Weekly:5 Days</Typography>
            </Box>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Hourly Basis
              </Typography>
              <Typography>Start with 40 hours and pay as you go</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
