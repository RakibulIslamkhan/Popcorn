import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import man from "../../../public/assets/man.png";
import Image from "next/image";

export default function Need() {
  return (
    <>
      <Box sx={{ bgcolor: "#001DAC", pt: "2rem", color: "#fff" }}>
        <Container maxWidth="lg">
          <Grid container alignItems={"center"}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4">
                Need some help?
                <br />
                Call our award wining support team
              </Typography>
              <Typography sx={{ my: "1em" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                quam minima, sed repudiandae quis dolore.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                height: "377px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Image src={man} alt="Picture of the author" width={300} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
