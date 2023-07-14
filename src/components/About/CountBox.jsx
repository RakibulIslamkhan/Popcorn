import React from "react";
import { Box, Paper, Typography, Container } from "@mui/material";

export default function CountBox() {
  return (
    <>
      <Box sx={{ bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap:'2rem',
              textAlign: "center",
              transform: {lg:"translateY(-50px)", xs:"translateY(30px)"},
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Paper elevation={24} sx={{ p: "3rem" }}>
              <Typography variant="h3" gutterBottom>10</Typography>
              <Typography>Years of Experience</Typography>
            </Paper>
            <Paper elevation={24} sx={{ p: "3rem" }}>
            <Typography variant="h3" gutterBottom>2500+</Typography>
              <Typography>Project Done</Typography>
            </Paper>
            <Paper elevation={24} sx={{ p: "3rem" }}>
            <Typography variant="h3" gutterBottom>3000+</Typography>
              <Typography>Customers</Typography>
            </Paper>
          </Box>
        </Container>
      </Box>
    </>
  );
}
