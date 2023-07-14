import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import Corporate from '../../icons/corporate'

export default function Heading() {
  return (
    <div>
        <Box sx={{py:'3rem', bgcolor:"#001566", color:'#fff'}}>
            <Container maxWidth="lg">
                <Box sx={{display:'flex', alignItems:'center', gap:'2rem', flexDirection:{xs:'column', md:'row'}}}>
                    <Box>
                        <Typography variant='h4' fontWeight={'bold'}>Linux Reseller Hosting</Typography>
                        <Typography variant='h5' sx={{mt:'0.5rem'}}>Start your own hosting business with our Linux Reseller Hosting</Typography>
                        <Typography variant='body2' sx={{my:'2rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis hic illum tempore minus, ullam modi vel quos adipisci sed tenetur.</Typography>
                        <Button variant='outlined' sx={{mt:'1rem', color:'#fff'}}>Get Started</Button>
                        <Button variant='outlined' sx={{mt:'1rem', ml:'1rem', color:'#fff'}}>Learn More</Button>
                    </Box>
                    <Box>
                        <Corporate/>
                    </Box>
                </Box>
            </Container>
        </Box>
    </div>
  )
}
