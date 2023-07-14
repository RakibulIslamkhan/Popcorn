import { Check } from "@mui/icons-material";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomSwitch from "../Custom/Switch";

export default function PricePlan() {
  const [price, setPrice] = useState(false);

  return (
    <>
      <Box
        sx={{
          py: "3rem",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h4">
              Choses your google workspace price plan
            </Typography>
            <Box sx={{ my: "2rem" }}>
              <span>Monthly</span>
              <CustomSwitch checked={price} onChange={() => setPrice(!price)} />
              <span>Annual</span>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "10px", justifyContent:'center', flexDirection:{lg:'row', xs:'column'} }}>
            <Paper elevation={0} sx={{ mt: "2rem", py: "1.2rem", px: "1rem" }}>
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
                <span style={{ fontSize: "3rem" }}>
                  {price ? "৳ 1300" : "৳ 850"}
                </span>{" "}
                /mo
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
                <span style={{ fontSize: "3rem" }}>
                  {price ? "৳ 1300" : "৳ 850"}
                </span>{" "}
                /mo
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
            <Paper elevation={0} sx={{ mt: "2rem", py: "1.2rem", px: "1rem" }}>
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
                <span style={{ fontSize: "3rem" }}>
                  {price ? "৳ 1300" : "৳ 850"}
                </span>{" "}
                /mo
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
        </Container>
      </Box>
    </>
  );
}
