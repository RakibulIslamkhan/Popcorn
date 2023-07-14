import { Check } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

export default function PriceCard() {
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
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  mt: "2rem",
                  p: "1.5rem",
                  minWidth: { lg: "300px", xs: "100%" },
                  borderRadius: "0.5rem",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Starter
                </Typography>
                <Typography variant="h6">
                  <span style={{ fontSize: "2rem" }}>$2.95</span> /mo
                </Typography>
                <Divider sx={{ borderBlockStyle: "dashed", my: "1rem" }} />
                <li style={{ marginTop: "1rem" }}>2 Websites</li>
                <li style={{ marginTop: "1rem" }}>3GB SSD Storage</li>
                <li style={{ marginTop: "1rem" }}>30 GB Bandwidth</li>
                <li style={{ marginTop: "1rem" }}>Unlimited Email Account</li>
                <li style={{ marginTop: "1rem" }}>Unlimited Databases</li>
                <li style={{ marginTop: "1rem" }}>Unlimited Subdomains</li>
                <li style={{ marginTop: "1rem" }}>Free SSL certificate</li>
                <li style={{ marginTop: "1rem" }}>Free cPanel</li>
                <Button variant="contained" sx={{ mt: "1rem" }}>
                  Buy Now
                </Button>
              </Paper>
              <Paper
                elevation={0}
                sx={{
                  mt: "2rem",
                  p: "1.5rem",
                  minWidth: { lg: "300px", xs: "100%" },
                  borderRadius: "0.5rem",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Advanced
                </Typography>
                <Typography variant="h6">
                  <span style={{ fontSize: "2rem" }}>$2.95</span> /mo
                </Typography>
                <Divider sx={{ borderBlockStyle: "dashed", my: "1rem" }} />
                <li style={{ marginTop: "1rem" }}>2 Websites</li>
                <li style={{ marginTop: "1rem" }}>3GB SSD Storage</li>
                <li style={{ marginTop: "1rem" }}>30 GB Bandwidth</li>
                <li style={{ marginTop: "1rem" }}>Unlimited Email Account</li>
                <li style={{ marginTop: "1rem" }}>Unlimited Databases</li>
                <li style={{ marginTop: "1rem" }}>Unlimited Subdomains</li>
                <li style={{ marginTop: "1rem" }}>Free SSL certificate</li>
                <li style={{ marginTop: "1rem" }}>Free cPanel</li>
                <Button variant="contained" sx={{ mt: "1rem" }}>
                  Buy Now
                </Button>
              </Paper>
              <Paper
                elevation={0}
                sx={{
                  mt: "2rem",
                  p: "1.5rem",
                  minWidth: { lg: "300px", xs: "100%" },
                  borderRadius: "0.5rem",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Premium
                </Typography>
                <Typography variant="h6">
                  <span style={{ fontSize: "2rem" }}>$2.95</span> /mo
                </Typography>
                <Divider sx={{ borderBlockStyle: "dashed", my: "1rem" }} />
                <li style={{ marginTop: "1rem" }}>2 Websites</li>
                <li style={{ marginTop: "1rem" }}>3GB SSD Storage</li>
                <li style={{ marginTop: "1rem" }}>30 GB Bandwidth</li>
                <li style={{ marginTop: "1rem" }}>Unlimited Email Account</li>
                <li style={{ marginTop: "1rem" }}>Unlimited Databases</li>
                <li style={{ marginTop: "1rem" }}>Unlimited Subdomains</li>
                <li style={{ marginTop: "1rem" }}>Free SSL certificate</li>
                <li style={{ marginTop: "1rem" }}>Free cPanel</li>
                <Button variant="contained" sx={{ mt: "1rem" }}>
                  Buy Now
                </Button>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
