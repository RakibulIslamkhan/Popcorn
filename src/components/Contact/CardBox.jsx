import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import BlueCircle from "../../icons/bluecircle";
import BlackCircle from "../../icons/blackcircle";
import Skype from "../../icons/skype";
import WhiteCircle from "../../icons/whitecircle";
export default function CardBox() {
  const theme = useTheme();
  return (
    <Box sx={{ py: "3em", bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "1.5em", md: "2rem" },
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Card sx={{ maxWidth: 275, p: "1em 0.6em" }}>
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bold", width: "60%" }}
              >
                <span style={{ color: "#18A0FB" }}>Create Ticket</span> Help
                Improve Framer for everyone
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <BlueCircle />
                  <Typography sx={{ ml: "0.4em" }}>Request Feature</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <BlueCircle />
                  <Typography sx={{ ml: "0.4em" }}>Report Issue</Typography>
                </Box>
              </Box>
            </CardContent>
            <CardActions>
              <Button variant="contained" fullWidth sx={{ bgcolor: "#18A0FB" }}>
                Create Ticket
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 275, background: "rgba(0, 0, 0, 0.06)", p: "1em 0.6em" }}>
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bold", width: "70%", color: "gray" }}
              >
                <span style={{ color: "#fff" }}>Account Support</span> Help
                Improve Framer for everyone
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Skype />
              </Box>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                fullWidth
                sx={{ bgcolor: "#fff", color: "#000" }}
              >
                Join Community
              </Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              maxWidth: 275,
              bgcolor: `${theme.palette.mode === "dark" ? "#fff" : "#000"}`,
              p: "1em 0.6em",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bold", width: "70%", color: "#B7B7B7" }}
              >
                <span
                  style={{
                    color: `${theme.palette.mode === "dark" ? "#000" : "#fff"}`,
                  }}
                >
                  Account Support
                </span>{" "}
                Help Improve Framer for everyone
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  color: "#B7B7B7",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {theme.palette.mode === "dark" ? (
                    <WhiteCircle />
                  ) : (
                    <BlackCircle />
                  )}
                  <Typography sx={{ ml: "0.4em" }}>Account</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {theme.palette.mode === "dark" ? (
                    <WhiteCircle />
                  ) : (
                    <BlackCircle />
                  )}
                  <Typography sx={{ ml: "0.4em" }}>Billing</Typography>
                </Box>
              </Box>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                fullWidth
                sx={{ bgcolor: "#fff", color: "#000" }}
              >
                Create Ticket
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
