import { Settings, Star } from "@mui/icons-material";
import { Divider, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import DownloadIcon from "../../icons/download";
import FileIcon from "../../icons/FileIcon";
import GlobeIcon from "../../icons/globe";
import MailIcon from "../../icons/mail";
import ServerIcon from "../../icons/server";
import ShieldOK from "../../icons/shieldok";
import StarIcon from "../../icons/star";

export default function Highlights() {
  return (
    <>
      <Box
        sx={{
          py: "2rem",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ py: "1rem" }}>
            <Typography variant="h5" fontWeight={"bold"}>
              cPanel Web Hosting Highlights
            </Typography>
            <Typography variant="h5">packed with features</Typography>
          </Box>
          <Divider sx={{ width: "3%", borderTop: "4px solid #42569F" }} />
          <Box sx={{ display: "flex", gap: '2rem', py: "2rem",flexDirection:{lg:'row', xs:'column'} }}>
            <Box>
              <Box sx={{ display: "flex", gap: "1rem", my: "1rem" }}>
                <StarIcon />
                <Typography
                  sx={{ bgcolor: "#05DB9D", py: "0.1rem", px: "0.8rem" }}
                >
                  New
                </Typography>
              </Box>
              <Box>
                <Typography>99.9% Uptime Guarantee</Typography>
                <Typography>
                  We guarantee 99.9% uptime for all our hosting plans. If your
                  website is down for any reason, we will credit your account
                  with 1 day of hosting for every hour of downtime.
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box sx={{ my: "1rem" }}>
                <ShieldOK />
              </Box>
              <Box>
                <Typography>99.9% Uptime Guarantee</Typography>
                <Typography>
                  We guarantee 99.9% uptime for all our hosting plans. If your
                  website is down for any reason, we will credit your account
                  with 1 day of hosting for every hour of downtime.
                </Typography>
              </Box>
            </Box>
            <Box>
            <Box sx={{ my: "1rem" }}>
                <MailIcon />
              </Box>
              <Box>
                <Typography>99.9% Uptime Guarantee</Typography>
                <Typography>
                  We guarantee 99.9% uptime for all our hosting plans. If your
                  website is down for any reason, we will credit your account
                  with 1 day of hosting for every hour of downtime.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: '2rem', py: "2rem",flexDirection:{lg:'row', xs:'column'} }}>
            <Box>
              <Box sx={{ display: "flex", gap: "1rem", my: "1rem" }}>
                <GlobeIcon />
                <Typography
                  sx={{ bgcolor: "#05DB9D", py: "0.1rem", px: "0.8rem" }}
                >
                  New
                </Typography>
              </Box>
              <Box>
                <Typography>99.9% Uptime Guarantee</Typography>
                <Typography>
                  We guarantee 99.9% uptime for all our hosting plans. If your
                  website is down for any reason, we will credit your account
                  with 1 day of hosting for every hour of downtime.
                </Typography>
              </Box>
            </Box>
            <Box>
            <Box sx={{ my: "1rem" }}>
                <DownloadIcon />
              </Box>
              <Box>
                <Typography>99.9% Uptime Guarantee</Typography>
                <Typography>
                  We guarantee 99.9% uptime for all our hosting plans. If your
                  website is down for any reason, we will credit your account
                  with 1 day of hosting for every hour of downtime.
                </Typography>
              </Box>
            </Box>
            <Box>
            <Box sx={{ my: "1rem" }}>
                <FileIcon />
              </Box>
              <Box>
                <Typography>99.9% Uptime Guarantee</Typography>
                <Typography>
                  We guarantee 99.9% uptime for all our hosting plans. If your
                  website is down for any reason, we will credit your account
                  with 1 day of hosting for every hour of downtime.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: '2rem', py: "2rem",flexDirection:{lg:'row', xs:'column'} }}>
            <Box>
            <Box sx={{ my: "1rem" }}>
                <DownloadIcon />
              </Box>
              <Box>
                <Typography>99.9% Uptime Guarantee</Typography>
                <Typography>
                  We guarantee 99.9% uptime for all our hosting plans. If your
                  website is down for any reason, we will credit your account
                  with 1 day of hosting for every hour of downtime.
                </Typography>
              </Box>
            </Box>
            <Box>
            <Box sx={{ my: "1rem" }}>
                <Settings />
              </Box>
              <Box>
                <Typography>99.9% Uptime Guarantee</Typography>
                <Typography>
                  We guarantee 99.9% uptime for all our hosting plans. If your
                  website is down for any reason, we will credit your account
                  with 1 day of hosting for every hour of downtime.
                </Typography>
              </Box>
            </Box>
            <Box>
            <Box sx={{ my: "1rem" }}>
                <ServerIcon />
              </Box>
              <Box>
                <Typography>99.9% Uptime Guarantee</Typography>
                <Typography>
                  We guarantee 99.9% uptime for all our hosting plans. If your
                  website is down for any reason, we will credit your account
                  with 1 day of hosting for every hour of downtime.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
