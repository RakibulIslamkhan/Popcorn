import { Check } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import man from "../../../public/assets/man-speed.png";
export default function Speed() {
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
          <Box sx={{ display: "flex", alignItems: "center",flexDirection:{lg:'row', xs:'column'}, gap:'3rem' }}>
            <Box>
              <Typography variant="h4">
                Hostim With Lighting Fast Loading Speed.
              </Typography>
              <Typography sx={{ my: "1rem" }}>
                Speed is one of the most basic but powerful features that you
                will get instantly with your Cloud VPS hosting package. A fast
                loading website ensures that your competitor are not able to
                snatch your potential customers.
              </Typography>
              <Box sx={{ my: "1.5rem" }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", my: "0.5em", }}
                >
                  <Check />
                  <Typography sx={{ mx: "0.5rem" }}>
                    Reseller & Sub Account
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", my: "0.5em" }}
                >
                  <Check />
                  <Typography sx={{ mx: "0.5rem" }}>
                    {" "}
                    Secure Shell(SSH) Access
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", my: "0.5em" }}
                >
                  <Check />
                  <Typography sx={{ mx: "0.5rem" }}>IPv6 Support</Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", my: "0.5em" }}
                >
                  <Check />
                  <Typography sx={{ mx: "0.5rem" }}>
                    {" "}
                    Rails, Python, Perl Support
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", my: "0.5em" }}
                >
                  <Check />
                  <Typography sx={{ mx: "0.5rem" }}>
                    {" "}
                    Unlimited SFTP Users
                  </Typography>
                </Box>
              </Box>
              <Button variant="contained">Explore More</Button>
            </Box>
            <Box>
              <Image src={man} height={400} className="img-fluid"/>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
