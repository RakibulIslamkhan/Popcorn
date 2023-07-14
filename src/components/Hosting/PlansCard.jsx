import { Check } from "@mui/icons-material";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import React from "react";

export default function PlansCard() {
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
              variant="h4"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              World-Famous Website Hosting Plans
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: "1rem", textAlign: "center" }}
            >
              Clear pricing backed by our unbeatable 97-Day Money-Back
              Guarantee.
            </Typography>
            <Box sx={{ display: "flex", gap: "10px", flexDirection:{lg:'row', xs:'column'}}}>
              <Paper
                elevation={0}
                sx={{ mt: "2rem", py: "1.2rem", px: "1rem" }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Shared Starter
                </Typography>
                <Typography variant="body2" sx={{ mt: "1rem" }}>
                  The ideal starting point into shared Hosting!
                </Typography>
                <Typography variant="body2" sx={{ mt: "1rem" }}>
                  Save 60% over Monthly
                </Typography>
                <Typography variant="body2" sx={{ mt: "1rem" }}>
                  <span style={{ fontSize: "3rem" }}>$2.95</span> /mo
                </Typography>
                <Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", my: "0.5em" }}
                  >
                    <Check fontSize="small" />
                    <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                      Reseller & Sub Account
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", my: "0.5em" }}
                  >
                    <Check fontSize="small" />
                    <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                      {" "}
                      Secure Shell(SSH) Access
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", my: "0.5em" }}
                  >
                    <Check fontSize="small" />
                    <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                      IPv6 Support
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", my: "0.5em" }}
                  >
                    <Check fontSize="small" />
                    <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                      {" "}
                      Rails, Python, Perl Support
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", my: "0.5em" }}
                  >
                    <Check fontSize="small" />
                    <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                      {" "}
                      Unlimited SFTP Users
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  sx={{ mt: "1rem", width: "100%", borderRadius: "20px" }}
                >
                  Purchase Plan
                </Button>
              </Paper>
              <Paper
                elevation={0}
                sx={{ mt: "2rem", py: "1.2rem", px: "1rem" }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Shared Starter
                </Typography>
                <Typography variant="body2" sx={{ mt: "1rem" }}>
                  The ideal starting point into shared Hosting!
                </Typography>
                <Typography variant="body2" sx={{ mt: "1rem" }}>
                  Save 60% over Monthly
                </Typography>
                <Typography variant="body2" sx={{ mt: "1rem" }}>
                  <span style={{ fontSize: "3rem" }}>$2.95</span> /mo
                </Typography>
                <Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", my: "0.5em" }}
                  >
                    <Check fontSize="small" />
                    <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                      Reseller & Sub Account
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", my: "0.5em" }}
                  >
                    <Check fontSize="small" />
                    <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                      {" "}
                      Secure Shell(SSH) Access
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", my: "0.5em" }}
                  >
                    <Check fontSize="small" />
                    <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                      IPv6 Support
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", my: "0.5em" }}
                  >
                    <Check fontSize="small" />
                    <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                      {" "}
                      Rails, Python, Perl Support
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", my: "0.5em" }}
                  >
                    <Check fontSize="small" />
                    <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                      {" "}
                      Unlimited SFTP Users
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  sx={{ mt: "1rem", width: "100%", borderRadius: "20px" }}
                >
                  Purchase Plan
                </Button>
              </Paper>
              <Paper
                elevation={0}
                sx={{
                  mt: "2rem",
                  py: "1.2rem",
                  px: "1rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span className="popular_badge">Popular</span>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Shared Starter
                </Typography>
                <Typography variant="body2" sx={{ mt: "1rem" }}>
                  The ideal starting point into shared Hosting!
                </Typography>
                <Typography variant="body2" sx={{ mt: "1rem" }}>
                  Save 60% over Monthly
                </Typography>
                <Typography variant="body2" sx={{ mt: "1rem" }}>
                  <span style={{ fontSize: "3rem" }}>$2.95</span> /mo
                </Typography>
                <Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", my: "0.5em" }}
                  >
                    <Check fontSize="small" />
                    <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                      Reseller & Sub Account
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", my: "0.5em" }}
                  >
                    <Check fontSize="small" />
                    <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                      {" "}
                      Secure Shell(SSH) Access
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", my: "0.5em" }}
                  >
                    <Check fontSize="small" />
                    <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                      IPv6 Support
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", my: "0.5em" }}
                  >
                    <Check fontSize="small" />
                    <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                      {" "}
                      Rails, Python, Perl Support
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", my: "0.5em" }}
                  >
                    <Check fontSize="small" />
                    <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                      {" "}
                      Unlimited SFTP Users
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  sx={{ mt: "1rem", width: "100%", borderRadius: "20px" }}
                >
                  Purchase Plan
                </Button>
              </Paper>
              <Paper
                elevation={0}
                sx={{ mt: "2rem", py: "1.2rem", px: "1rem" }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Shared Starter
                </Typography>
                <Typography variant="body2" sx={{ mt: "1rem" }}>
                  The ideal starting point into shared Hosting!
                </Typography>
                <Typography variant="body2" sx={{ mt: "1rem" }}>
                  Save 60% over Monthly
                </Typography>
                <Typography variant="body2" sx={{ mt: "1rem" }}>
                  <span style={{ fontSize: "3rem" }}>$2.95</span> /mo
                </Typography>
                <Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", my: "0.5em" }}
                  >
                    <Check fontSize="small" />
                    <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                      Reseller & Sub Account
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", my: "0.5em" }}
                  >
                    <Check fontSize="small" />
                    <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                      {" "}
                      Secure Shell(SSH) Access
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", my: "0.5em" }}
                  >
                    <Check fontSize="small" />
                    <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                      IPv6 Support
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", my: "0.5em" }}
                  >
                    <Check fontSize="small" />
                    <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                      {" "}
                      Rails, Python, Perl Support
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", my: "0.5em" }}
                  >
                    <Check fontSize="small" />
                    <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                      {" "}
                      Unlimited SFTP Users
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  sx={{ mt: "1rem", width: "100%", borderRadius: "20px" }}
                >
                  Purchase Plan
                </Button>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
