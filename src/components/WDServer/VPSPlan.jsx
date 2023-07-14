import { Box, Button, Container, Slider, Typography } from "@mui/material";
import React, { useState } from "react";

function valueLabelFormat(value) {
  const units = ["Rose", "vps-1", "vps-2", "vps-3", "vps-4"];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 100 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 100;
  }

  return `${units[unitIndex]}`;
}

function calculateValue(value) {
  return 2 ** value;
}
export default function VPSPlan() {
  const [value, setValue] = useState(8);

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };
  return (
    <>
      <Box sx={{ py: "3rem", bgcolor: "background.default", color: "text.primary",}}>
        <Container>
          <Box>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Your High Speed Vps Plan
            </Typography>
            <Box maxWidth={"sm"} sx={{ mx: "auto", my:'1rem' }}>
              <Slider
                size="large"
                value={value}
                min={8}
                step={8}
                max={30}
                scale={calculateValue}
                getAriaValueText={valueLabelFormat}
                valueLabelFormat={valueLabelFormat}
                onChange={handleChange}
                valueLabelDisplay="on"
                aria-labelledby="non-linear-slider"
              />
              <Box sx={{display:'flex',justifyContent:'space-between', my:'1rem'}}>
                <Box>
                  <Typography>Dedicated CPU</Typography>
                  <span>{value === 8 ? "2GHZ core" : value === 16 ? "2GHZ core" : value === 24 ? "3GHZ core" : "4GHZ core" }</span>
                </Box>
                <Box>
                  <Typography>Dedicated RAM</Typography>
                  <span>{value === 8 ? "2GB" : value === 16 ? "4GB" : value === 24 ? "6GB" : "8GB" }</span>
                </Box>
                <Box>
                  <Typography>SSD Storage</Typography>
                  <span>{value === 8 ? "20GB" : value === 16 ? "40GB" : value === 24 ? "80GB" : "120GB" }</span>
                </Box>
                <Box>
                  <Typography>Bandwidth</Typography>
                  <span>{value === 8 ? "1TB" : value === 16 ? "1TB" : value === 24 ? "2TB" : "2TB" }</span>
                </Box>
              </Box>
              <Box sx={{display:'flex',justifyContent:'center', alignItems:'center', my:"2rem"}}>
                <Typography><span>{value === 8 ? "5000/mo" : value === 16 ? "6000/mo" : value === 24 ? "8000/mo" : "10000/mo" }</span></Typography>
                <Button variant="contained" sx={{borderRadius:10, mx:'1rem'}}>Punches Plan</Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
