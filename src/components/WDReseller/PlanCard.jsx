import { Check } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function PlanCard() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.default",
          py: "1rem",
          color: "text.primary",
        }}
      >
        <Container>
          <Paper elevation={0} sx={{ display: "flex" ,flexDirection:{lg:'row', xs:'column'}}}>
            <Box sx={{ display: "flex",flexDirection:{lg:'row', xs:'column'}}}>
              <Box sx={{ px: "1rem", my: "2rem" }}>
                <Typography variant="h5">BDIX30</Typography>
                <FormControl sx={{ minWidth: {lg:200,xs:'100%'}, my: 2 }}>
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <span style={{ fontSize: "14px" }}>1 Month @</span> <br />
                      <em>461.00BDT</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Divider orientation="vertical" flexItem />
            </Box>
            <Box sx={{ px: "1rem", my: "1rem", display: "flex", alignItems:'center', justifyContent:'space-between', width:'100%',flexDirection:{lg:'row', xs:'column'} }}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: "0.5em",
                  }}
                >
                  <Check fontSize="small" />
                  <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                    Reseller & Sub Account
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: "0.5em",
                  }}
                >
                  <Check fontSize="small" />
                  <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                    Reseller & Sub Account
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: "0.5em",
                  }}
                >
                  <Check fontSize="small" />
                  <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                    Reseller & Sub Account
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: "0.5em",
                  }}
                >
                  <Check fontSize="small" />
                  <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                    Reseller & Sub Account
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: "0.5em",
                  }}
                >
                  <Check fontSize="small" />
                  <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                    Reseller & Sub Account
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: "0.5em",
                  }}
                >
                  <Check fontSize="small" />
                  <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                    Reseller & Sub Account
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: "0.5em",
                  }}
                >
                  <Check fontSize="small" />
                  <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                    Reseller & Sub Account
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: "0.5em",
                  }}
                >
                  <Check fontSize="small" />
                  <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                    Reseller & Sub Account
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: "0.5em",
                  }}
                >
                  <Check fontSize="small" />
                  <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                    Reseller & Sub Account
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: "0.5em",
                  }}
                >
                  <Check fontSize="small" />
                  <Typography variant="body2" sx={{ mx: "0.5rem" }}>
                    Reseller & Sub Account
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Button variant="contained" sx={{ px: "2rem" }}>
                  Order Now
                </Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
