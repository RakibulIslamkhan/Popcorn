import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Support from "../../icons/chat";
import Employee from "../../icons/employee";
import Privacy from "../../icons/privacy";
import Security from "../../icons/security";
import Source from "../../icons/source";
import Uptime from "../../icons/uptime";

export default function DreamHost() {
  return (
    <>
      <Box sx={{ bgcolor: "background.default", py: "3rem", color:'text.primary' }}>
        <Container maxWidth="lg">
          <Container maxWidth="md" sx={{ textAlign: "center" }}>
            <Typography variant="h4">
              What Makes DreamHost so different
            </Typography>
            <Typography variant="body1"sx={{ my: "1rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus excepturi quibusdam beatae inventore esse quia nemo ad,
              voluptatem reiciendis voluptate?
            </Typography>
          </Container>
          <Box
            sx={{
              display: "flex",
              gap: "2rem",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box>
              <Box sx={{my:'1.5rem', display:'flex', gap:'1rem'}}>
                <Employee/>
                <Box>
                  <Typography variant="h5">
                    Lorem ipsum dolor sit amet.
                  </Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quae.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{my:'1.5rem', display:'flex', gap:'1rem'}}>
                <Uptime/>
                <Box>
                  <Typography variant="h5">
                    Lorem ipsum dolor sit amet.
                  </Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quae.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{my:'1.5rem', display:'flex', gap:'1rem'}}>
                <Source/>
                <Box>
                  <Typography variant="h5">
                    Lorem ipsum dolor sit amet.
                  </Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quae.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
            <Box sx={{my:'1.5rem', display:'flex', gap:'1rem'}}>
                <Privacy/>
                <Box>
                  <Typography variant="h5">
                    Lorem ipsum dolor sit amet.
                  </Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quae.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{my:'1.5rem', display:'flex', gap:'1rem'}}>
                <Security/>
                <Box>
                  <Typography variant="h5">
                    Lorem ipsum dolor sit amet.
                  </Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quae.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{my:'1.5rem', display:'flex', gap:'1rem'}}>
                <Support/>
                <Box>
                  <Typography variant="h5">
                    Lorem ipsum dolor sit amet.
                  </Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quae.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
