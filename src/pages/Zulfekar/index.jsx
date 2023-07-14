import { Box, Container, Divider, Paper, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";

export default function index() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
      </Head>
      <Box sx={{ height: "300px", bgcolor: "#000F57", overflow: "hidden" }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            color="#ffffff"
            textAlign={"center"}
            sx={{ pt: "10%" }}
          >
            About Me
          </Typography>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="md">
          <Paper
            sx={{
              p: "2em",
              mt: "-10%",
              height: "100%",
              display: "flex",
              gap: "2rem",
              mb: "2rem",
            }}
          >
            <Box sx={{textAlign:'justify'}}>
              <Typography variant="h5" sx={{ mb: "1em" }}>
                Md.Zulfekar Ali
              </Typography>
              <Divider
                sx={{
                  mb: "1em",
                  bgcolor: "#1a73e8",
                  width: "100px",
                  height: "2px",
                }}
              />
              <Typography variant="body1" sx={{ mb: "1em" }}>
                I have worked with many clients and have completed many. I have
                worked with many clients and have completed many. I have worked
                with many clients and have completed many.
              </Typography>
              <Typography variant="h5" sx={{ mb: "1em" }}>
                Work Experience
              </Typography>
              <Divider
                sx={{
                  mb: "1em",
                  bgcolor: "#1a73e8",
                  width: "100px",
                  height: "2px",
                }}
              />
              <Typography variant="h6">title</Typography>
                <Typography variant="body1">I have worked with many clients and have completed many. I have worked with many clients and have completed many. I have worked with many clients and have completed many.</Typography>
              <Typography variant="h6">title</Typography>
                <Typography variant="body1">I have worked with many clients and have completed many. I have worked with many clients and have completed many. I have worked with many clients and have completed many.</Typography>
              <Typography variant="h6">title</Typography>
                <Typography variant="body1">I have worked with many clients and have completed many. I have worked with many clients and have completed many. I have worked with many clients and have completed many.</Typography>
              <Typography variant="h6">title</Typography>
                <Typography variant="body1">I have worked with many clients and have completed many. I have worked with many clients and have completed many. I have worked with many clients and have completed many.</Typography>
              <Typography variant="h6">title</Typography>
                <Typography variant="body1">I have worked with many clients and have completed many. I have worked with many clients and have completed many. I have worked with many clients and have completed many.</Typography>
              <Typography variant="h6">title</Typography>
                <Typography variant="body1">I have worked with many clients and have completed many. I have worked with many clients and have completed many. I have worked with many clients and have completed many.</Typography>
              <Typography variant="h5" sx={{ mb: "1em" }}>
                Education
              </Typography>
              <Divider
                sx={{
                  mb: "1em",
                  bgcolor: "#1a73e8",
                  width: "100px",
                  height: "2px",
                }}
              />
                <Typography variant="h6">title</Typography>
                <Typography variant="body1">description</Typography>
                <Typography variant="h6">title</Typography>
                <Typography variant="body1">description</Typography>
              <Typography variant="h5" sx={{ mb: "1em" }}>
                Course & Certifications
              </Typography>
              <Divider
                sx={{
                  mb: "1em",
                  bgcolor: "#1a73e8",
                  width: "100px",
                  height: "2px",
                }}
              />
              <ul style={{ listStyleType: "square", paddingLeft: "15px" }}>
                <li>
                    <Typography variant="h6">title</Typography>
                </li>
                <li>
                    <Typography variant="h6">title</Typography>
                </li>
                <li>
                    <Typography variant="h6">title</Typography>
                </li>
                <li>
                    <Typography variant="h6">title</Typography>
                </li>
                <li>
                    <Typography variant="h6">title</Typography>
                </li>
                <li>
                    <Typography variant="h6">title</Typography>
                </li>
                <li>
                    <Typography variant="h6">title</Typography>
                </li>
              </ul>
            </Box>
            <Box sx={{textAlign:'justify'}}>
                <Box sx={{textAlign:'right'}}>
                <img src="https://media.licdn.com/dms/image/C5603AQFqPffGI7RrDA/profile-displayphoto-shrink_400_400/0/1646094839029?e=1681344000&v=beta&t=8RQ_4OTiMzvfp4xYkyNqom4OfugRRvkdg6v8XTHvedA" alt="" height={'150px'} />
                </Box>
              <Typography variant="h5" sx={{ mb: "1em" }}>
                Awards
              </Typography>
              <Divider
                sx={{
                  mb: "1em",
                  bgcolor: "#1a73e8",
                  width: "100px",
                  height: "2px",
                }}
              />
              <ul style={{ listStyleType: "square" }}>
                <li>
                  <Typography variant="h6">title</Typography>
                  <Typography variant="body1">
                    I have worked with many clients and have completed many. I
                    have worked with many clients and have completed many. I
                    have worked with many clients and have completed many.
                  </Typography>
                </li>
                <li>
                  <Typography variant="h6">title</Typography>
                  <Typography variant="body1">
                    I have worked with many clients and have completed many. I
                    have worked with many clients and have completed many. I
                    have worked with many clients and have completed many.
                  </Typography>
                </li>
                <li>
                  <Typography variant="h6">title</Typography>
                  <Typography variant="body1">
                    I have worked with many clients and have completed many. I
                    have worked with many clients and have completed many. I
                    have worked with many clients and have completed many.
                  </Typography>
                </li>
                <li>
                  <Typography variant="h6">title</Typography>
                  <Typography variant="body1">
                    I have worked with many clients and have completed many. I
                    have worked with many clients and have completed many. I
                    have worked with many clients and have completed many.
                  </Typography>
                </li>
                <li>
                  <Typography variant="h6">title</Typography>
                  <Typography variant="body1">
                    I have worked with many clients and have completed many. I
                    have worked with many clients and have completed many. I
                    have worked with many clients and have completed many.
                  </Typography>
                </li>
              </ul>
              <Typography variant="h5" sx={{ mb: "1em" }}>
                Language
              </Typography>
              <Divider
                sx={{
                  mb: "1em",
                  bgcolor: "#1a73e8",
                  width: "100px",
                  height: "2px",
                }}
              />
              <Typography variant="h6">English</Typography>
              <div class="w3-light-grey" style={{marginBottom:'2em'}}>
                <div
                  className="w3-container w3-green w3-center"
                  style={{ height: "24px", width: "100%" }}
                >
                  100%
                </div>
              </div>
              <Typography variant="h6">English</Typography>
              <div class="w3-light-grey"style={{marginBottom:'2em'}}>
                <div
                  className="w3-container w3-green w3-center"
                  style={{ height: "24px", width: "75%" }}
                >
                  75%
                </div>
              </div>
              <Typography variant="h6">English</Typography>
              <div class="w3-light-grey" style={{marginBottom:'2em'}}>
                <div
                  className="w3-container w3-green w3-center"
                  style={{ height: "24px", width: "25%" }}
                >
                  25%
                </div>
              </div>
              <Typography variant="h5" sx={{ mb: "1em" }}>
                Skill
              </Typography>
              <Divider
                sx={{
                  mb: "1em",
                  bgcolor: "#1a73e8",
                  width: "100px",
                  height: "2px",
                }}
              />
              <ul style={{ listStyleType: "square", paddingLeft: "15px" }}>
                <li>
                    <Typography variant="h6">title</Typography>
                </li>
                <li>
                    <Typography variant="h6">title</Typography>
                </li>
                <li>
                    <Typography variant="h6">title</Typography>
                </li>
                <li>
                    <Typography variant="h6">title</Typography>
                </li>
                <li>
                    <Typography variant="h6">title</Typography>
                </li>
                <li>
                    <Typography variant="h6">title</Typography>
                </li>
                <li>
                    <Typography variant="h6">title</Typography>
                </li>
              </ul>
              <Typography variant="h5" sx={{ mb: "1em" }}>
                Software
              </Typography>
              <Divider
                sx={{
                  mb: "1em",
                  bgcolor: "#1a73e8",
                  width: "100px",
                  height: "2px",
                }}
              />
              <Typography variant="h6">English</Typography>
              <div class="w3-light-grey" style={{marginBottom:'2em'}}>
                <div
                  className="w3-container w3-green w3-center"
                  style={{ height: "24px", width: "100%" }}
                >
                  100%
                </div>
              </div>
              <Typography variant="h6">English</Typography>
              <div class="w3-light-grey"style={{marginBottom:'2em'}}>
                <div
                  className="w3-container w3-green w3-center"
                  style={{ height: "24px", width: "75%" }}
                >
                  75%
                </div>
              </div>
              <Typography variant="h6">English</Typography>
              <div class="w3-light-grey" style={{marginBottom:'2em'}}>
                <div
                  className="w3-container w3-green w3-center"
                  style={{ height: "24px", width: "25%" }}
                >
                  25%
                </div>
              </div>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
