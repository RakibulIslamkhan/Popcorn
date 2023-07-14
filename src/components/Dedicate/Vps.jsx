import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Chart from "../../icons/chart";
import Finger from "../../icons/finger";
import Graph from "../../icons/graph";
import Man from "../../icons/man";
import Mens from "../../icons/mens";
import Menu from "../../icons/menu";
import Proteact from "../../icons/protect";
import Rocket from "../../icons/rocket";

export default function Vps() {
  return (
    <>
      <Box sx={{bgcolor:'background.default', py:'3rem', color:'text.primary'}}>
        <Container maxWidth="lg">
          <Typography variant="h4">VPS Hosting with class features</Typography>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", alignItems: "center", my:'1.5rem',gap:2 }}>
                <Finger />
                <Box>
                  <Typography variant="h6">
                    VPS Hosting with class features
                  </Typography>
                  <Typography variant="body1">
                    VPS Hosting with class features
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my:'1.5rem',gap:2 }}>
                <Chart />
                <Box>
                  <Typography variant="h6">
                    VPS Hosting with class features
                  </Typography>
                  <Typography variant="body1">
                    VPS Hosting with class features
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my:'1.5rem',gap:2 }}>
                <Man />
                <Box>
                  <Typography variant="h6">
                    VPS Hosting with class features
                  </Typography>
                  <Typography variant="body1">
                    VPS Hosting with class features
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center",gap:2 }}>
                <Graph />
                <Box>
                  <Typography variant="h6">
                    VPS Hosting with class features
                  </Typography>
                  <Typography variant="body1">
                    VPS Hosting with class features
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", alignItems: "center", my:'1.5rem',gap:2 }}>
                <Menu />
                <Box>
                  <Typography variant="h6">
                    VPS Hosting with class features
                  </Typography>
                  <Typography variant="body1">
                    VPS Hosting with class features
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my:'1.5rem',gap:2 }}>
                <Mens />
                <Box>
                  <Typography variant="h6">
                    VPS Hosting with class features
                  </Typography>
                  <Typography variant="body1">
                    VPS Hosting with class features
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my:'1.5rem', gap:2 }}>
                <Proteact />
                <Box>
                  <Typography variant="h6">
                    VPS Hosting with class features
                  </Typography>
                  <Typography variant="body1">
                    VPS Hosting with class features
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap:2 }}>
                <Rocket />
                <Box>
                  <Typography variant="h6">
                    VPS Hosting with class features
                  </Typography>
                  <Typography variant="body1">
                    VPS Hosting with class features
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
