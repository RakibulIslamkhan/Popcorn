import React from "react";
import { Button, Divider, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Image from "next/image";
import vertical from "../../../public/assets/vertical.jpg";
import square from "../../../public/assets/square.jpg";

export default function Story() {
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
          <Box sx={{ display: "flex", gap: "1rem", flexDirection:{xs:'column', lg:'row'} }}>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Divider
                  width="2%"
                  sx={{
                    height: "3px",
                    border: "0px solid",
                    bgcolor: "#E94914",
                    mx: "0.5rem",
                  }}
                />
                <Typography variant="h6" color="#E94914">
                  About us
                </Typography>
              </Box>
              <Typography variant="h5">
                A Short Story of our 10 years of success
              </Typography>
              <Typography sx={{ my: "2em" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                laborum deleniti consequuntur iure distinctio. Aperiam,
                voluptate iste? Rerum minus corrupti libero ratione consequatur
                consequuntur accusantium? Ut, ipsum? Repellat, earum sunt.
                Assumenda, corrupti recusandae mollitia omnis quos eius totam
                neque ut atque id dolores praesentium nobis cumque obcaecati
                repellat quas nostrum!
              </Typography>
              <Box>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ bgcolor: "#E94914", color: "background.default" }}
                >
                  See More
                </Button>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "5px", flexDirection:{xs:'column', lg:'row'} }}>
              <Box>
                <Image
                  src={vertical}
                  alt="about"
                  width={250}
                  height={444}
                  style={{ borderTopLeftRadius: "20px" }}
                />
              </Box>
              <Box
                sx={{ display: "flex", gap: "5px", flexDirection: "column" }}
              >
                <Box
                  sx={{
                    width: "220px",
                    height: "220px",
                    bgcolor: "#E94914",
                    py: "4rem",
                    color: "#fff",
                    pl: "2.5rem",
                  }}
                >
                  <Typography className="quote">
                    We provide heights quality with cost effective service
                  </Typography>
                </Box>
                <Box>
                  <Image
                    src={square}
                    alt="about"
                    width={220}
                    height={220}
                    style={{ borderBottomRightRadius: "20px" }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
