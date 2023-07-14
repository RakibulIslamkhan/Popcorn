import React from "react";
import { Divider, Grid, styled, Typography,Container,Box } from "@mui/material";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import LoopIcon from "@mui/icons-material/Loop";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import Lock from "../../icons/lock";


const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1.5),
}));
export default function SmallCard() {
  return (
    <>
      <Box sx={{ bgcolor: "#0803D3", color: "#fff", py: "3em" }}>
        <Container maxWidth="lg">
          <Box sx={{ pb: "3em" }}>
            <Typography variant="h5" gutterBottom>Why do i need a domain?</Typography>
            <Divider
              width="4%"
              sx={{ height: "3px", border: "0px solid", background: "#1C40F2" }}
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Grid container spacing={2}>
              <Grid item md={3} xs={12}>
                <Item>
                  <LanguageOutlinedIcon />
                  <Typography variant="h6">
                    Choice of 100 of Extension
                  </Typography>
                  <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </Typography>
                </Item>
              </Grid>
              <Grid item md={3} xs={12}>
                <Item>
                  <SettingsOutlinedIcon />
                  <Typography variant="h6">Simple Domain Setup</Typography>
                  <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </Typography>
                </Item>
              </Grid>
              <Grid item md={3} xs={12}>
                <Item>
                  <SwapHorizOutlinedIcon />
                  <Typography variant="h6">
                    Hassles Free Domain Transfer
                  </Typography>
                  <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </Typography>
                </Item>
              </Grid>
              <Grid item md={3} xs={12}>
                <Item>
                  <VerifiedUserOutlinedIcon />
                  <Typography variant="h6">
                    Domain Privacy Protection
                  </Typography>
                  <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </Typography>
                </Item>
              </Grid>
              <Grid item md={3} xs={12}>
                <Item>
                  <Lock />
                  <Typography variant="h6">Secure Domain Lock</Typography>
                  <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </Typography>
                </Item>
              </Grid>
              <Grid item md={3} xs={12}>
                <Item>
                  <LoopIcon />
                  <Typography variant="h6">Automatic Renewal</Typography>
                  <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </Typography>
                </Item>
              </Grid>
              <Grid item md={3} xs={12}>
                <Item>
                  <MonetizationOnOutlinedIcon />
                  <Typography variant="h6">No Hidden Charges</Typography>
                  <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </Typography>
                </Item>
              </Grid>
              <Grid item md={3} xs={12}>
                <Item>
                  <PhoneEnabledOutlinedIcon />
                  <Typography variant="h6">24/7 Customer Support</Typography>
                  <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
