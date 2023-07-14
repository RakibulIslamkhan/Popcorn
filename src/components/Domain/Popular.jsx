import { Box, Button, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Popular() {
  return (
    <>
      <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: "bold", py: "1em" }}
          >
            Search Most Popular Domain
          </Typography>
          <Box sx={{ display: "flex", gap: "15px", flexDirection:{lg:'row', xs:'column'}}}>
            <Paper sx={{ pt: "1em", pb: "2em", px: "0.8em" }}>
              <Typography variant="h5">.com.bd</Typography>
              <Typography variant="body2"gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "100" }}>
                Starting at $9.99/first year
              </Typography>
            </Paper>
            <Paper sx={{ pt: "1em", pb: "2em", px: "0.8em" }}>
              <Typography variant="h5">.net.bd</Typography>
              <Typography variant="body2"gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "100" }}>
                Starting at $9.99/first year
              </Typography>
            </Paper>
            <Paper sx={{ pt: "1em", pb: "2em", px: "0.8em" }}>
              <Typography variant="h5">.org.bd</Typography>
              <Typography variant="body2" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "100" }}>
                Starting at $9.99/first year
              </Typography>
            </Paper>
          </Box>
          <Box sx={{ display: "flex", my: "1em", gap: "15px",flexDirection:{lg:'row', xs:'column'} }}>
            <Paper sx={{ pt: "1em", pb: "2em", px: "0.8em" }}>
              <Typography variant="h5">.tech.bd</Typography>
              <Typography variant="body2"gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "100" }}>
                Starting at $9.99/first year
              </Typography>
            </Paper>
            <Paper sx={{ pt: "1em", pb: "2em", px: "0.8em" }}>
              <Typography variant="h5">.me.bd</Typography>
              <Typography variant="body2"gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "100" }}>
                Starting at $9.99/first year
              </Typography>
            </Paper>
            <Paper sx={{ pt: "1em", pb: "2em", px: "0.8em" }}>
              <Typography variant="h5">.co.bd</Typography>
              <Typography variant="body2"gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "100" }}>
                Starting at $9.99/first year
              </Typography>
            </Paper>
          </Box>

          {/* .bd domain prices section  here*/}
          
          <section>
          <Typography variant="h4" sx={{ textAlign: "center", mt:'2rem' }}>
            .bd domain prices
          </Typography>
          <Box sx={{ display: "flex", gap: "2px", py: "3rem",flexDirection:{lg:'row', xs:'column'}, justifyContent:'center', alignItems:'center'}}>
            <Paper
              elevation={0}
              sx={{
                py: "2em",
                px: "1.5em",
                height: "300px",
                width: "300px",
                borderRadius: "0px",
                borderTopLeftRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
            >
              <Typography>REGISTRATION</Typography>
              <Typography sx={{ mt: "1em", color: "#6D4AFE" }} variant="h4">
                $90.00
              </Typography>
              <span>per year</span>
              <Box sx={{ display: "flex", my: "2em" }}>
                <ArrowForwardIcon />
                <Typography>For 2 years</Typography>
              </Box>
              <Button variant="contained" sx={{ bgcolor: "#212121" }} fullWidth>
                Register
              </Button>
            </Paper>
            <Paper
              elevation={0}
              sx={{
                py: "2em",
                px: "1.5em",
                height: "300px",
                width: "300px",
                borderRadius: "0px",
                borderTopLeftRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
            >
              <Typography>REGISTRATION</Typography>
              <Typography sx={{ mt: "1em", color: "#6D4AFE" }} variant="h4">
                $90.00
              </Typography>
              <span>per year</span>
              <Box sx={{ display: "flex", my: "2em" }}>
                <ArrowForwardIcon />
                <Typography>For 2 years</Typography>
              </Box>
              <Button variant="contained" sx={{ bgcolor: "#212121" }} fullWidth>
                Transfer
              </Button>
            </Paper>
            <Paper
              elevation={0}
              sx={{
                py: "2em",
                px: "1.5em",
                height: "300px",
                width: "300px",
                borderRadius: "0px",
                borderTopLeftRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
            >
              <Typography>REGISTRATION</Typography>
              <Typography sx={{ mt: "1em", color: "#6D4AFE" }} variant="h4">
                $90.00
              </Typography>
              <span>per year</span>
              <Box sx={{ display: "flex", my: "2em" }}>
                <ArrowForwardIcon />
                <Typography>For 2 years</Typography>
              </Box>
              <Button variant="contained" sx={{ bgcolor: "#212121" }} fullWidth>
                Renew
              </Button>
            </Paper>
          </Box>
          </section>
        </Container>
      </Box>
    </>
  );
}
