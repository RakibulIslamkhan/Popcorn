import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Check from "@mui/icons-material/Check";
export default function Plans() {
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
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Shared Hosting all Plans Include Features.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              my: "2rem",
              flexDirection:{lg:'row', xs:'column'},
              gap:'3rem',
            }}
          >
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", my: "0.5em" }}>
                <Check />
                <Typography sx={{ mx: "0.5rem" }}>
                  Reseller & Sub Account
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my: "0.5em" }}>
                <Check />
                <Typography sx={{ mx: "0.5rem" }}>
                  {" "}
                  Secure Shell(SSH) Access
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my: "0.5em" }}>
                <Check />
                <Typography sx={{ mx: "0.5rem" }}>IPv6 Support</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my: "0.5em" }}>
                <Check />
                <Typography sx={{ mx: "0.5rem" }}>
                  {" "}
                  Rails, Python, Perl Support
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my: "0.5em" }}>
                <Check />
                <Typography sx={{ mx: "0.5rem" }}>
                  {" "}
                  Unlimited SFTP Users
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", my: "0.5em" }}>
                <Check />
                <Typography sx={{ mx: "0.5rem" }}>
                  Reseller & Sub Account
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my: "0.5em" }}>
                <Check />
                <Typography sx={{ mx: "0.5rem" }}>
                  {" "}
                  Secure Shell(SSH) Access
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my: "0.5em" }}>
                <Check />
                <Typography sx={{ mx: "0.5rem" }}>IPv6 Support</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my: "0.5em" }}>
                <Check />
                <Typography sx={{ mx: "0.5rem" }}>
                  {" "}
                  Rails, Python, Perl Support
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my: "0.5em" }}>
                <Check />
                <Typography sx={{ mx: "0.5rem" }}>
                  {" "}
                  Unlimited SFTP Users
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", my: "0.5em" }}>
                <Check />
                <Typography sx={{ mx: "0.5rem" }}>
                  Reseller & Sub Account
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my: "0.5em" }}>
                <Check />
                <Typography sx={{ mx: "0.5rem" }}>
                  {" "}
                  Secure Shell(SSH) Access
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my: "0.5em" }}>
                <Check />
                <Typography sx={{ mx: "0.5rem" }}>IPv6 Support</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my: "0.5em" }}>
                <Check />
                <Typography sx={{ mx: "0.5rem" }}>
                  {" "}
                  Rails, Python, Perl Support
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my: "0.5em" }}>
                <Check />
                <Typography sx={{ mx: "0.5rem" }}>
                  {" "}
                  Unlimited SFTP Users
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
