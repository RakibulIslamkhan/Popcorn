import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Domain from "../../icons/domain";

export default function Meet() {
  return (
    <div>
      <Box sx={{ py: "3em", bgcolor: "#0A00E5" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#fff",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box>
              <Typography variant="h4">Meet the team</Typography>
              <Typography sx={{ my: "2em" }}>
                Our team is made up of a group of passionate individuals who are
                dedicated to helping you build your business online.
              </Typography>
              <Button variant="outlined" sx={{ color: "#fff" }}>
                Meet the team
              </Button>
            </Box>
            <Box>
              <Domain />
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
