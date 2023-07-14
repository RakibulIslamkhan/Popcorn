import { Box, Button, Container, Paper, Typography } from "@mui/material";
import React from "react";
import SupportImg from "../../icons/support";

export default function Migrate() {
  return (
    <>
      <Box sx={{ bgcolor: "#00105D", py: "3rem", color: "text.primary" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              px: "1rem",
              display: "flex",
              alignItems: "center",
              gap: {lg:"15rem",xs:"5rem"},
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box sx={{ color: "#fff",}}>
              <Typography variant="h4">
              Migrating from another web hosting?
              </Typography>
              <Typography sx={{ my: "1rem" }}>
              Our migration service is free and quick. In most cases, we can have your website migrated and live in under 24 hours. Have multiple websites or a complex solution you need migrating? Then click below to speak to our team.
              </Typography>
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <Button variant="contained">Ticket Us</Button>
                <Button
                  variant="outlined"
                  sx={{ color: "#fff", border: "1px solid #fff" }}
                >
                  Contact Us
                </Button>
              </Box>
            </Box>
            <Box>
              <img src={'https://popcorn.com.bd/wp-content/uploads/2022/07/cta_migrate_feature.png'} alt="support" height={350} />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
