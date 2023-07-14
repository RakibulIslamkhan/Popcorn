import { Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";

export default function Form() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box sx={{ bgcolor: "#0D0F19", py: "3em" }}>
        <Container maxWidth="lg">
          <Box sx={{}}>
            <Typography
              variant="h4"
              color="#fff"
              sx={{ textAlign: "center", mb: "1em" }}
            >
              Custom Website Creation
            </Typography>
            <Box sx={{ bgcolor: "#151720", p: "1.5em" }}>
              <form>
                <Grid container sx={{ justifyContent: "space-between" }}>
                  <Grid item xs={5.5}>
                    <Typography variant="body1" color="#fff" gutterBottom>
                      First Name
                    </Typography>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="filled"
                      sx={{ mb: "1em", bgcolor: "#20222B" }}
                      InputLabelProps={{style: {color: "#fff"}}}
                    />
                  </Grid>
                  <Grid item xs={5.5}>
                    <Typography variant="body1" color="#fff" gutterBottom>
                      Last Name
                    </Typography>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="filled"
                      sx={{ mb: "1em", bgcolor: "#20222B" }}
                      InputLabelProps={{style: {color: "#fff"}}}
                    />
                  </Grid>
                </Grid>
                <Typography variant="body1" color="#fff" gutterBottom>
                  Email
                </Typography>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="filled"
                  sx={{ mb: "1em", bgcolor: "#20222B" }}
                  InputLabelProps={{style: {color: "#fff"}}}
                />
                <Typography variant="body1" color="#fff" gutterBottom>
                  Budget($US)
                </Typography>
                <Box>
                <FormControl fullWidth>
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{ color: "#fff","& .MuiSelect-icon": {color: "#fff"}, mb:'1rem',bgcolor: "#20222B" }}
                    InputLabelProps={{style: {color: "#fff"}}}
                  >
                    <MenuItem value="">
                      <em>461</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                </Box>
                <Typography variant="body1" color="#fff" gutterBottom>
                  Please provide some details about your project
                </Typography>
                <TextField
                  fullWidth
                  id="standard-multiline-static"
                  label="My website should look like..."
                  multiline
                  rows={6}
                  variant="filled"
                  sx={{ mb: "1em", bgcolor: "#20222B" }}
                  InputLabelProps={{style: {color: "#fff"}}}
                />
                <Button variant="contained" fullWidth>
                  Submit
                </Button>
              </form>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
