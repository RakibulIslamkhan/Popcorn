import { Box, Button, Container, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import elementor from "../../../public/assets/elementor.jpg";
export default function Wordpress() {
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
          <Paper
            elevation={0}
            sx={{
              background:
                "linear-gradient(90deg, rgba(8,71,164,1) 37%, rgba(178,132,231,1) 88%)",
              px: "1rem",
              display: "flex",
              alignItems: "center",
              py: "2rem",
              flexDirection:{lg:'row', xs:'column'},
              gap:'3rem',
              justifyContent:{lg:'space-between', xs:'center'}
            }}
          >
            <Box sx={{ color: "#fff", width: {lg:"60%",xs:'100%' }}}>
              <Typography variant="h5">
                We Make wordpress Easier than ever
              </Typography>
              <Typography sx={{ my: "1rem" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                corporis corrupti repudiandae harum dignissimos veritatis.
              </Typography>
              <Button
                variant="contained"
                sx={{ bgcolor: "#fff", color: "#000" }}
              >
                Learn More
              </Button>
            </Box>
            <Box>
              <Image src={elementor} alt="elementor" width={350} height={200} />
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
