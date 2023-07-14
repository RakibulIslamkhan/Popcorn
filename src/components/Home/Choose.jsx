import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";
export default function Choose() {
  return (
    <>
      <Box sx={{ bgcolor: "#061C82", color: "text.primary", py: "3rem" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#fff",
              gap: "5rem",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box>
              <Typography variant="h3" sx={{my:'2rem'}}>Why Choose POPCORN IT?</Typography>
              <Box sx={{ display: "flex", position:'relative',my:'2rem' }}>
                <CheckCircleOutline
                  sx={{ color: "#fff", fontSize: "40px", mr: "1rem", }}
                />
                <Box  className="check">
                  <Typography variant="h6">
                    10+ Years Web Service Company
                  </Typography>
                  <Typography variant="body1" sx={{my:'1rem'}}>
                    Truly independent, privately-owned company that has been
                    providing managed hosting solutions since 2013.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", position:'relative',my:'2rem' }}>
                <CheckCircleOutline
                  sx={{ color: "#fff", fontSize: "40px", mr: "1rem", }}
                />
                <Box  className="check">
                  <Typography variant="h6">
                  Safe and Secured
                  </Typography>
                  <Typography variant="body1" sx={{my:'1rem'}}>
                  Worried you won&apos;t get help when you most need it? You shouldn&apos;t be. Our professional and hands-on support.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", position:'relative',my:'2rem' }}>
                <CheckCircleOutline
                  sx={{ color: "#fff", fontSize: "40px", mr: "1rem", }}
                />
                <Box  className="check">
                  <Typography variant="h6">
                  24/7 Technical Support
                  </Typography>
                  <Typography variant="body1" sx={{my:'1rem'}}>
                  Our product experts are available to help you find the perfect solution for your organization.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <img
                src="http://popcorn.com.bd/wp-content/uploads/2022/11/62c8acffbf7adc3e1a0ed7a9_3-p-800.png"
                height={350}
                alt=""
                className="img-fluid"
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
