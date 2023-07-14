import { Check } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

export default function Expertise() {
  return (
    <>
      <Box sx={{ bgcolor: "background.default", py: "3em", color:'text.primary' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", gap:8,flexDirection:{xs:'column', md:'row'}}}>
            <Box>
              <Typography variant="h4" gutterBottom>
                Technical Expertise of Our
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quibusdam fugiat consequuntur hic alias illo? Quas enim
                consequatur vero. Minus voluptatem modi earum nesciunt itaque
                voluptas, quod, quia, voluptate quos voluptates.
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, labore! Nihil, reprehenderit beatae optio velit quisquam, sit fugiat quasi ad omnis rem, vero ducimus officia veniam. Possimus voluptate iure aliquam.
              </Typography>
              <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: "0.5em",
                    pt: "1em",
                  }}
                >
                  <Check fontSize="small" />
                  <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                    Reseller & Sub Account
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: "0.5em",
                  }}
                >
                  <Check fontSize="small" />
                  <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                    Reseller & Sub Account
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: "0.5em",
                  }}
                >
                  <Check fontSize="small" />
                  <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                    Reseller & Sub Account
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: "0.5em",
                  }}
                >
                  <Check fontSize="small" />
                  <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                    Reseller & Sub Account
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: "0.5em",
                  }}
                >
                  <Check fontSize="small" />
                  <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                    Reseller & Sub Account
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: "0.5em",
                  }}
                >
                  <Check fontSize="small" />
                  <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                    Reseller & Sub Account
                  </Typography>
                </Box>
              <Button variant="contained" sx={{ mt: 2 }}>Get Custom Quote</Button>
            </Box>
            <Box sx={{display:'flex', alignItems:'center', gap:2,flexDirection:{xs:'column', md:'row'}}}>
              <Box sx={{display:'flex', alignItems:{lg:'flex-end', xs:'center'}, flexDirection:'column', gap:2}}>
                <Box>
                  <img
                    src="https://tinyurl.com/yc47rab6"
                    alt=""
                    height="300px"
                    
                  />
                </Box>
                <Box>
                  <img
                    src="https://tinyurl.com/422mmvyh"
                    alt=""
                    height="200px"
                  />
                </Box>
              </Box>
              <Box>
                <img src="https://tinyurl.com/2vzat3pw" alt="" height="300px" />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
