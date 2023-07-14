import { Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Binoculars from "../../icons/binoculars";
import Certificate from "../../icons/certificate";
import Email from "../../icons/email";
import Shield from "../../icons/shield";

export default function DomainCard() {
  return (
    <div>
      <Box
        sx={{
          bgcolor: "background.default",
          py: "3rem",
          color: "text.primary",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ pb: "1.5em" }}>
            <Typography variant="h5" gutterBottom>
              Why do i need a domain?
            </Typography>
            <Divider
              width="4%"
              sx={{ height: "3px", border: "0px solid", background: "#1C40F2" }}
            />
          </Box>
          <Box sx={{ display: "flex", gap: "2rem",flexDirection:{lg:'row', xs:'column'} }}>
            <Box>
              <Box sx={{mb:'2rem'}}>
                <Certificate />
                <Typography variant="h6">
                  To set up your website address
                </Typography>
                <Typography>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate quibusdam delectus est sit fugiat voluptas similique
                  iusto suscipit ad tempora.
                </Typography>
              </Box>
              <Box>
                <Email />
                <Typography variant="h6">
                  To set up your website address
                </Typography>
                <Typography>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate quibusdam delectus est sit fugiat voluptas similique
                  iusto suscipit ad tempora.
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box sx={{mb:'2rem'}}>
                <Binoculars />
                <Typography variant="h6">
                  To set up your website address
                </Typography>
                <Typography>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate quibusdam delectus est sit fugiat voluptas similique
                  iusto suscipit ad tempora.
                </Typography>
              </Box>
              <Box>
                <Shield />
                <Typography variant="h6">
                  To set up your website address
                </Typography>
                <Typography>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate quibusdam delectus est sit fugiat voluptas similique
                  iusto suscipit ad tempora.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
