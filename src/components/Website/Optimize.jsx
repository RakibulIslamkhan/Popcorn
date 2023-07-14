import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function Optimize() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#0F1F3D",
          py: "2rem",
          color: "text.primary",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ color: "#fff" }}
          >
            Optimize your website for search engines
          </Typography>
          <Typography
            variant="body1"
            align="center"
            gutterBottom
            sx={{ color: "#fff" }}
          >
            We will optimize your website for search engines to make it more
            visible to your target audience.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: "1rem",
              justifyContent: "space-evenly",
              my: 5,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box>
              <Box sx={{ width: 300 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexDirection:'row' }}>
                  <img
                    src="https://img.icons8.com/external-bzzricon-outline-bzzricon-studio/512/external-suitcase-business-bzzricon-outline-bzzricon-outline-bzzricon-studio.png"
                    alt=""
                    height={30}
                  />
                  <Typography variant="h6" sx={{ color: "#fff" }}>
                    Product Configaration
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: "#fff", my: 2 }}>
                  We will optimize your website for search engines to make it
                  more visible to your target audience.
                </Typography>
              </Box>
              <Box sx={{ width: 300 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2,flexDirection:'row' }}>
                  <img
                    src="https://img.icons8.com/external-bzzricon-outline-bzzricon-studio/512/external-suitcase-business-bzzricon-outline-bzzricon-outline-bzzricon-studio.png"
                    alt=""
                    height={30}
                  />
                  <Typography variant="h6" sx={{ color: "#fff" }}>
                    Product Configaration
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: "#fff", my: 2 }}>
                  We will optimize your website for search engines to make it
                  more visible to your target audience.
                </Typography>
              </Box>
              <Box sx={{ width: 300 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2,flexDirection:'row' }}>
                  <img
                    src="https://img.icons8.com/external-bzzricon-outline-bzzricon-studio/512/external-suitcase-business-bzzricon-outline-bzzricon-outline-bzzricon-studio.png"
                    alt=""
                    height={30}
                  />
                  <Typography variant="h6" sx={{ color: "#fff" }}>
                    Product Configaration
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: "#fff", my: 2 }}>
                  We will optimize your website for search engines to make it
                  more visible to your target audience.
                </Typography>
              </Box>
            </Box>
            <Box>
              <img
                src="https://i.postimg.cc/4yRnycPf/dashbord.png"
                alt=""
                height={"300"}
                className="img-fluid"
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
