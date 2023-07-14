import { Box, Breadcrumbs, Container, Link, Typography } from "@mui/material";
import React from "react";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
export default function Heading({title}) {
  return (
    <>
      <Box sx={{ bgcolor: "#001ca5", height: "250px" }}>
        <div role="presentation" onClick={handleClick}>
          <Container maxWidth="lg" sx={{textAlign:'center', pt:'5rem'}}>
            <Typography variant="h4" sx={{ color: "#fff", }} gutterBottom>
                {title}
            </Typography>
            <Box sx={{display:'flex', justifyContent:'center', color:'#F5F5F5'}}>
            <Link underline="hover" color="inherit" href="/">
                Home
            </Link>
            <Typography sx={{ color: "gray", mx: "0.5rem" }}> / </Typography>
            <Typography>{title}</Typography>
            </Box>
          </Container>
        </div>
      </Box>
    </>
  );
}
