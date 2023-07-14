import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import about1 from "../../../public/assets/about1.png";
import about2 from "../../../public/assets/about2.png";
import about3 from "../../../public/assets/about3.png";

export default function Why() {
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
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h4">Why do i need a domain?</Typography>
            <Typography sx={{ px: {lg:"10em", xs:'1em'}, py: "2rem" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi dolorum ipsam, reprehenderit optio repellendus error.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5rem", flexDirection:{xs:'column', md:'row'} }}>
            <Box>
              <Image
                src={about1}
                alt="Picture of the author"
                width={400}
                height={300}
              />
            </Box>
            <Box>
              <Typography variant="h6">Choice of 100 of Extension</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptate.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5rem",flexDirection:{xs:'column', md:'row'} }}>
            <Box>
              <Typography variant="h6">Choice of 100 of Extension</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptate.
              </Typography>
            </Box>
            <Box>
              <Image
                src={about2}
                alt="Picture of the author"
                width={400}
                height={200}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5rem",flexDirection:{xs:'column-reverse', md:'row'} }}>
            <Box>
              <Image
                src={about3}
                alt="Picture of the author"
                width={400}
                height={200}
              />
            </Box>
            <Box>
              <Typography variant="h6">Choice of 100 of Extension</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptate.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
