import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";

export default function Application() {
  return (
    <>
      <Box sx={{bgcolor:'background.default', pt:'3rem',color:'text.primary'}}>
        <Container>
          <Typography variant="h3" maxWidth={'md'} sx={{mx:'auto', textAlign:'center'}}>
            Integrated with more than 100+ applications you love
          </Typography>
          <Box sx={{display:'flex', justifyContent:'space-between',my:'2rem',flexDirection:{lg:'row', xs:'column'}, gap:'1rem', alignItems:'center'}}>
            <Paper elevation={0} sx={{display:'flex', alignItems:'center', p:'1.5rem', gap:2, width:'250px'}}>
                <img src="https://popcorn.com.bd/wp-content/uploads/2022/07/joomla-logo.svg" alt="" />
                <Typography variant="h5">Joomla</Typography>
            </Paper>
            <Paper elevation={0} sx={{display:'flex', alignItems:'center', p:'1.5rem', gap:2, width:'250px'}}>
                <img src="https://popcorn.com.bd/wp-content/uploads/2022/07/drupal-logo.svg" alt="" />
                <Typography variant="h5">Joomla</Typography>
            </Paper>
            <Paper elevation={0} sx={{display:'flex', alignItems:'center', p:'1.5rem', gap:2, width:'250px'}}>
                <img src="https://popcorn.com.bd/wp-content/uploads/2022/07/zencart-logo.svg" alt="" />
                <Typography variant="h5">Joomla</Typography>
            </Paper>
            <Paper elevation={0} sx={{display:'flex', alignItems:'center', p:'1.5rem', gap:2, width:'250px'}}>
                <img src="https://popcorn.com.bd/wp-content/uploads/2022/07/osticket-logo.svg" alt="" />
                <Typography variant="h5">Joomla</Typography>
            </Paper>
          </Box>
          <Box sx={{display:'flex', justifyContent:'space-evenly',flexDirection:{lg:'row', xs:'column'}, gap:'1rem', alignItems:'center'}}>
            <Paper elevation={0} sx={{display:'flex', alignItems:'center', p:'1.5rem', gap:2, width:'250px'}}>
                <img src="https://popcorn.com.bd/wp-content/uploads/2022/07/joomla-logo.svg" alt="" />
                <Typography variant="h5">Joomla</Typography>
            </Paper>
            <Paper elevation={0} sx={{display:'flex', alignItems:'center', p:'1.5rem', gap:2, width:'250px'}}>
                <img src="https://popcorn.com.bd/wp-content/uploads/2022/07/zencart-logo.svg" alt="" />
                <Typography variant="h5">Joomla</Typography>
            </Paper>
            <Paper elevation={0} sx={{display:'flex', alignItems:'center', p:'1.5rem', gap:2, width:'250px'}}>
                <img src="https://popcorn.com.bd/wp-content/uploads/2022/07/drupal-logo.svg" alt="" />
                <Typography variant="h5">Joomla</Typography>
            </Paper>
          </Box>
        </Container>
      </Box>
    </>
  );
}
