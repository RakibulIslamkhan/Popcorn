import {
  Box,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";


export default function Getting({title, icon, description}) {
  return (
    <>
      <Box sx={{ bgcolor: "#010E28", height: {xs:'100%', md:'470px'}, pt:{xs:'3rem', md:'1em'},}}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box>
              <Typography variant="h3" sx={{ color: "#FFF" }}>
                {title}
              </Typography>
              <Typography variant="h6" sx={{ color: "#FFF" }}>
                {description}
              </Typography>
            </Box>
            <Box sx={{pt:'2rem'}}>
              {icon}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
