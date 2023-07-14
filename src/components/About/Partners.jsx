import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Cpanel from "../../icons/cpanel";
import Intel from "../../icons/intel";
import Plesk from "../../icons/plesk";
import WordPress from "../../icons/werodpress";

export default function Partners() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.default",
          py: "1rem",
          color: "text.primary",
        }}
      >
        <Container maxWidth="lg">
          <Box>
            <Typography variant="h4" sx={{ textAlign: "center", my: "1em" }}>
              our Partners
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection:{xs:'column',md:'row'},alignItems:'center' }}>
              <Box>
                <Cpanel />
              </Box>
              <Box>
                <WordPress />
              </Box>
              <Box>
                <Intel />
              </Box>
              <Box>
                <Plesk />
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection:{xs:'column',md:'row'}, alignItems:'center' }}>
              <Box>
                <Cpanel />
              </Box>
              <Box>
                <WordPress />
              </Box>
              <Box>
                <Intel />
              </Box>
              <Box>
                <Plesk />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", py: "2rem" }}>
            <Typography variant="h4">We can build your dream</Typography>
            <Typography variant="body1" sx={{ my: "2em" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quae, voluptatum, quod, voluptas quibusdam voluptates quidem
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ bgcolor: "#E94914", color: "background.default" }}
            >
              Get in touch
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
