import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import drive from "../../../public/assets/Google_Drive.png";
import doc from "../../../public/assets/Google_Docs.png";
import calender from "../../../public/assets/Google_Calender.png";
import sheets from "../../../public/assets/Google_Sheets.png";
import meet from "../../../public/assets/Google_Meet.png";
import storage from "../../../public/assets/Cloud.png";
import gmail from "../../../public/assets/Gmail.png";
import device from "../../../public/assets/Device_Management.png";
import mail from "../../../public/assets/Mail.png";
import admin from "../../../public/assets/Advanced_Admin_Controls.png";
export default function Google() {
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
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Why choses Google workspace
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              my: "2rem",
              gap: "1rem",
              flexDirection: { xs: "column", lg: "row" },
            }}
          >
            <Box>
              <Image src={drive} height={60} />
              <Typography sx={{ mt: "2rem", fontWeight: "bold" }}>
                Google Drive
              </Typography>
              <Typography variant="body2">
                Store and organize files effortlessly over the cloud
              </Typography>
            </Box>
            <Box>
              <Image src={doc} height={60} />
              <Typography sx={{ mt: "2rem", fontWeight: "bold" }}>
                Google Docs
              </Typography>
              <Typography variant="body2">
                Create, edit and share documents on the go
              </Typography>
            </Box>
            <Box>
              <Image src={calender} height={60} />
              <Typography sx={{ mt: "2rem", fontWeight: "bold" }}>
                Google Calendar
              </Typography>
              <Typography variant="body2">
                Schedule meetings and manage your time with ease
              </Typography>
            </Box>
            <Box>
              <Image src={sheets} height={60} />
              <Typography sx={{ mt: "2rem", fontWeight: "bold" }}>
                Google Sheets
              </Typography>
              <Typography variant="body2">
                Build, edit and review spreadsheets online
              </Typography>
            </Box>
            <Box>
              <Image src={meet} height={60} />
              <Typography sx={{ mt: "2rem", fontWeight: "bold" }}>
                Google Meet and Google Chat
              </Typography>
              <Typography variant="body2">
                Real time remote collaboration via Chat, and HD video calls
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", textAlign: "center", gap: "1rem", flexDirection: { xs: "column", lg: "row" }, }}>
            <Box>
              <Image src={storage} height={60} />
              <Typography sx={{ mt: "2rem", fontWeight: "bold" }}>
                Unlimited Cloud Storage
              </Typography>
              <Typography variant="body2">
                Unlimited Storage to cater to all your needs
              </Typography>
            </Box>
            <Box>
              <Image src={gmail} height={60} />
              <Typography sx={{ mt: "2rem", fontWeight: "bold" }}>
                Gmail
              </Typography>
              <Typography variant="body2">
                Your professional email on Google with your company domain name
              </Typography>
            </Box>
            <Box>
              <Image src={device} height={60} />
              <Typography sx={{ mt: "2rem", fontWeight: "bold" }}>
                Device Management
              </Typography>
              <Typography variant="body2">
                Sync across all devices with Google Workspace
              </Typography>
            </Box>
            <Box>
              <Image src={mail} height={60} />
              <Typography sx={{ mt: "2rem", fontWeight: "bold" }}>
                Outlook Email Client
              </Typography>
              <Typography variant="body2">
                Choose your preferred email interface with Google Workspace Sync
              </Typography>
            </Box>
            <Box>
              <Image src={admin} height={60} />
              <Typography sx={{ mt: "2rem", fontWeight: "bold" }}>
                Advanced Admin Controls
              </Typography>
              <Typography variant="body2">
                Easy management of users and groups.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
