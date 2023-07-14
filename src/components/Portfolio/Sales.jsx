import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

export default function Sales() {
  return (
    <>
      <Box  sx={{bgcolor:'#001042', py:'3rem'}}>
          <Container maxWidth="lg">
            <Box sx={{textAlign:'center', color:'#fff'}}>
              <Typography variant="h3" sx={{mb:'3rem'}}>LET’S DISCUSS YOUR PROJECT</Typography>
              <Button variant="contained" sx={{color:'#fff', bgcolor:'#FF0766', textTransform:'none', px:'5rem', py:'1rem', my:'1rem', mr:{lg:'2rem',xs:'0'}}}>Hire Us</Button>
              <Button variant="outlined" sx={{color:'#fff',textTransform:'none', px:'3rem', py:'1rem'}}>Chats with Sales</Button>
            </Box>
            </Container>
      </Box>
    </>
  )
}
