import { Rocket } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export default function VpsSsd() {
  return (
    <>
      <Box sx={{ bgcolor: "background.default", pb: "1rem" }}>
        <Container maxWidth="lg">
          <Grid
            container
            sx={{
              transform: "translateY(-50px)",
              bgcolor: "background.paper",
              color: "text.primary",
              p: "1.5rem",
            }}
          >
            <Grid item xs={12} md={3}>
              <Box>
                <Typography variant="contained" sx={{ width: "100%" }}>
                  Lighting Fast Ssd
                </Typography>
                <h2>VPS SSD Starter</h2>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{display:'flex', justifyContent:'space-between'}}>
              <Box>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ alignItems: "center" }}
                >
                  <Rocket />
                  <Typography variant="body1">2v CPU Core</Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ alignItems: "center" }}
                >
                  <Rocket />
                  <Typography variant="body1">2v CPU Core</Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ alignItems: "center" }}
                >
                  <Rocket />
                  <Typography variant="body1">2v CPU Core</Typography>
                </Stack>
              </Box>
              <Box>
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <Rocket />
                <Typography variant="body1">2v CPU Core</Typography>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <Rocket />
                <Typography variant="body1">2v CPU Core</Typography>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <Rocket />
                <Typography variant="body1">2v CPU Core</Typography>
              </Stack>
              </Box>
              <Divider orientation="vertical" flexItem />
            </Grid>
            <Grid item xs={12} md={1}></Grid>
            <Grid item xs={12} md={3}>
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <h2>$14.29</h2>
                <span>/mo VAT</span>
              </Stack>
              <Button variant="contained" sx={{ width: "100%" }}>
                Order Now
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
