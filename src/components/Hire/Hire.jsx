import { Divider, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

export default function Hire() {
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
          <Box>
            <Typography
              variant="h3"
              sx={{
                background:
                  "linear-gradient(90deg, rgba(24,114,255,1) 0%, rgba(129,20,255,1) 50%)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
                textAlign: "center",
              }}
              gutterBottom
            >
              Why Hire Us?
            </Typography>
            <Typography sx={{ mx: "auto", width:{lg:'60%', xs:'100%'}, textAlign:'center' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam debitis aspernatur harum placeat cumque molestiae iure
              minus architecto similique quas! Inventore ex mollitia dolore
              eveniet voluptatibus omnis.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                my: "3em",
                flexDirection: { xs: "column", lg: "row" },
                gap: { xs: "1em", lg: "3em" },
              }}
            >
              <Paper sx={{ pt: "1rem", pb: "2rem", px: "2em" }}>
                <Divider
                  width="15%"
                  sx={{ bgcolor: "#E94914", height: "3px", mx: "auto" }}
                />
                <Typography variant="h6">Flexible</Typography>
                <Typography>Engagement Models</Typography>
              </Paper>
              <Paper sx={{ pt: "1rem", pb: "2rem", px: "2em" }}>
                <Divider
                  width="15%"
                  sx={{ bgcolor: "#E94914", height: "3px", mx: "auto" }}
                />
                <Typography variant="h6">Flexible</Typography>
                <Typography>Engagement Models</Typography>
              </Paper>
              <Paper sx={{ pt: "1rem", pb: "2rem", px: "2em" }}>
                <Divider
                  width="15%"
                  sx={{ bgcolor: "#E94914", height: "3px", mx: "auto" }}
                />
                <Typography variant="h6">Flexible</Typography>
                <Typography>Engagement Models</Typography>
              </Paper>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                my: "3em",
                flexDirection: { xs: "column", lg: "row" },
                gap: { xs: "1em", lg: "3em" },
              }}
            >
              <Paper sx={{ pt: "1rem", pb: "2rem", px: "2em" }}>
                <Divider
                  width="15%"
                  sx={{ bgcolor: "#E94914", height: "3px", mx: "auto" }}
                />
                <Typography variant="h6">Flexible</Typography>
                <Typography>Engagement Models</Typography>
              </Paper>
              <Paper sx={{ pt: "1rem", pb: "2rem", px: "2em" }}>
                <Divider
                  width="15%"
                  sx={{ bgcolor: "#E94914", height: "3px", mx: "auto" }}
                />
                <Typography variant="h6">Flexible</Typography>
                <Typography>Engagement Models</Typography>
              </Paper>
              <Paper sx={{ pt: "1rem", pb: "2rem", px: "2em" }}>
                <Divider
                  width="15%"
                  sx={{ bgcolor: "#E94914", height: "3px", mx: "auto" }}
                />
                <Typography variant="h6">Flexible</Typography>
                <Typography>Engagement Models</Typography>
              </Paper>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                my: "3em",
                flexDirection: { xs: "column", lg: "row" },
                gap: { xs: "1em", lg: "3em" },
              }}
            >
              <Paper sx={{ pt: "1rem", pb: "2rem", px: "2em" }}>
                <Divider
                  width="15%"
                  sx={{ bgcolor: "#E94914", height: "3px", mx: "auto" }}
                />
                <Typography variant="h6">Flexible</Typography>
                <Typography>Engagement Models</Typography>
              </Paper>
              <Paper sx={{ pt: "1rem", pb: "2rem", px: "2em" }}>
                <Divider
                  width="15%"
                  sx={{ bgcolor: "#E94914", height: "3px", mx: "auto" }}
                />
                <Typography variant="h6">Flexible</Typography>
                <Typography>Engagement Models</Typography>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
