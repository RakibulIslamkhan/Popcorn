import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
  useTheme,
  Box,
  Container
} from "@mui/material";
import React from "react";
import Link from "next/link";

export default function ContactForm() {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ py: "3em", bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "1em",
                flexDirection: "column",
                width: { xs: "100%", md: "450px" },
                border: "1px solid lightgray",
                p: "1.2em",
                borderRadius: "5px",
                color: "text.primary",
              }}
            >
              <Typography variant="h5">Send us a message</Typography>
              <TextField
                label="Company Name"
                variant="filled"
                InputLabelProps={{ style: { color: "text.primary" } }}
                fullWidth
              />
              <TextField
                label="Email Address"
                type="email"
                InputLabelProps={{ style: { color: "text.primary" } }}
                variant="filled"
                fullWidth
              />
              <TextField
                label="Phone Number"
                type={"number"}
                InputLabelProps={{ style: { color: "text.primary" } }}
                variant="filled"
                fullWidth
              />
              <TextField
                id="filled-multiline-static"
                label="Message"
                multiline
                rows={4}
                variant="filled"
                fullWidth
              />
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Typography variant="caption">
                      I agree to the{" "}
                      <Link underline="none" href="/Terms-of-service">
                        Terms of service
                      </Link>{" "}
                      and{" "}
                      <Link underline="none" href="/Privacy-Policy">
                        Privacy Policy
                      </Link>
                      *
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Typography variant="caption">
                      I agree to receive marketing communications from you
                    </Typography>
                  }
                />
              </FormGroup>
              <Button variant="contained">Send</Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                p: "2em",
                gap: "1.2em",
                color: "text.primary",
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Call us
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  <br />
                  <Link underline="none" href="/">
                    {" "}
                    Live chat
                  </Link>
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Live Chat
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  <br />
                  Toll free:
                  <Link underline="none" href="/">
                    1-800-123-4567
                  </Link>
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Email
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  <br />
                  <Link underline="none" href="/">
                    support@gmail.com
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
