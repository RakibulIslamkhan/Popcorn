import { Box, Button, Container, Paper, Typography } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function DotDomain() {
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
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h5">Search most popular domain</Typography>
            <Typography sx={{ px: {lg:"8em", xs:'0'} }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              voluptate? Itaque, consequuntur fuga. Ullam, culpa?
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "0.8rem", my: "1.5rem", flexDirection:{xs:'column', md:'row'} }}>
            <Paper
              elevation={0}
              sx={{ py: "1rem", pl: "1em", width: {lg:"25%", xs:'100%'}, position: "relative" }}
            >
              <Typography variant="h5">.com</Typography>
              <Typography sx={{ my: "0.5em" }}>$6.99/yr</Typography>
              <Typography sx={{ my: "0.5em" }}>instead of $9.99/yr</Typography>
              <Box>
                <Button sx={{ color: "#0E1043", p: "0" }}>Get Offer</Button>
                <ArrowRightAltIcon
                  sx={{ verticalAlign: "middle", color: "#0E1043" }}
                />
              </Box>
              <span className="badge">32%</span>
            </Paper>
            <Paper
              elevation={0}
              sx={{ py: "1rem", pl: "1em", width: {lg:"25%", xs:'100%'}, position: "relative" }}
            >
              <Typography variant="h5">.com</Typography>
              <Typography sx={{ my: "0.5em" }}>$6.99/yr</Typography>
              <Typography sx={{ my: "0.5em" }}>instead of $9.99/yr</Typography>
              <Box>
                <Button sx={{ color: "#0E1043", p: "0" }}>Get Offer</Button>
                <ArrowRightAltIcon
                  sx={{ verticalAlign: "middle", color: "#0E1043" }}
                />
              </Box>
              <span className="badge">32%</span>
            </Paper>
            <Paper
              elevation={0}
              sx={{ py: "1rem", pl: "1em", width: {lg:"25%", xs:'100%'}, position: "relative" }}
            >
              <Typography variant="h5">.com</Typography>
              <Typography sx={{ my: "0.5em" }}>$6.99/yr</Typography>
              <Typography sx={{ my: "0.5em" }}>instead of $9.99/yr</Typography>
              <Box>
                <Button sx={{ color: "#0E1043", p: "0" }}>Get Offer</Button>
                <ArrowRightAltIcon
                  sx={{ verticalAlign: "middle", color: "#0E1043" }}
                />
              </Box>
              <span className="badge">32%</span>
            </Paper>
            <Paper
              elevation={0}
              sx={{ py: "1rem", pl: "1em", width: {lg:"25%", xs:'100%'}, position: "relative" }}
            >
              <Typography variant="h5">.com</Typography>
              <Typography sx={{ my: "0.5em" }}>$6.99/yr</Typography>
              <Typography sx={{ my: "0.5em" }}>instead of $9.99/yr</Typography>
              <Box>
                <Button sx={{ color: "#0E1043", p: "0" }}>Get Offer</Button>
                <ArrowRightAltIcon
                  sx={{ verticalAlign: "middle", color: "#0E1043" }}
                />
              </Box>
              <span className="badge">32%</span>
            </Paper>
          </Box>
          <Box sx={{ display: "flex", gap: "0.8rem",flexDirection:{xs:'column', md:'row'}}}>
            <Paper
              elevation={0}
              sx={{ py: "1rem", pl: "1em", width: {lg:"25%", xs:'100%'}, position: "relative" }}
            >
              <Typography variant="h5">.com</Typography>
              <Typography sx={{ my: "0.5em" }}>$6.99/yr</Typography>
              <Typography sx={{ my: "0.5em" }}>instead of $9.99/yr</Typography>
              <Box>
                <Button sx={{ color: "#0E1043", p: "0" }}>Get Offer</Button>
                <ArrowRightAltIcon
                  sx={{ verticalAlign: "middle", color: "#0E1043" }}
                />
              </Box>
              <span className="badge">32%</span>
            </Paper>
            <Paper
              elevation={0}
              sx={{ py: "1rem", pl: "1em", width: {lg:"25%", xs:'100%'}, position: "relative" }}
            >
              <Typography variant="h5">.com</Typography>
              <Typography sx={{ my: "0.5em" }}>$6.99/yr</Typography>
              <Typography sx={{ my: "0.5em" }}>instead of $9.99/yr</Typography>
              <Box>
                <Button sx={{ color: "#0E1043", p: "0" }}>Get Offer</Button>
                <ArrowRightAltIcon
                  sx={{ verticalAlign: "middle", color: "#0E1043" }}
                />
              </Box>
              <span className="badge">32%</span>
            </Paper>
            <Paper
              elevation={0}
              sx={{ py: "1rem", pl: "1em", width: {lg:"25%", xs:'100%'}, position: "relative" }}
            >
              <Typography variant="h5">.com</Typography>
              <Typography sx={{ my: "0.5em" }}>$6.99/yr</Typography>
              <Typography sx={{ my: "0.5em" }}>instead of $9.99/yr</Typography>
              <Box>
                <Button sx={{ color: "#0E1043", p: "0" }}>Get Offer</Button>
                <ArrowRightAltIcon
                  sx={{ verticalAlign: "middle", color: "#0E1043" }}
                />
              </Box>
              <span className="badge">32%</span>
            </Paper>
            <Paper
              elevation={0}
              sx={{ py: "1rem", pl: "1em", width: {lg:"25%", xs:'100%'}, position: "relative" }}
            >
              <Typography variant="h5">.com</Typography>
              <Typography sx={{ my: "0.5em" }}>$6.99/yr</Typography>
              <Typography sx={{ my: "0.5em" }}>instead of $9.99/yr</Typography>
              <Box>
                <Button sx={{ color: "#0E1043", p: "0" }}>Get Offer</Button>
                <ArrowRightAltIcon
                  sx={{ verticalAlign: "middle", color: "#0E1043" }}
                />
              </Box>
              <span className="badge">32%</span>
            </Paper>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
