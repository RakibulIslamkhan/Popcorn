import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export default function MoneyBack() {
  return (
    <>
        <Box sx={{backgroundColor:'background.default', color:'text.primary'}}>
            <Container sx={{display:'flex', gap:3, flexDirection:{lg:'row', xs:'column'}}}>
                <Box>
                    <Typography variant='h5' sx={{my:'1rem'}}>30 Day Money Back</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, cumque. Ullam amet ea ipsam, modi dicta laudantium repellendus voluptatum repellat.</Typography>
                </Box>
                <Box>
                    <Typography variant='h5' sx={{my:'1rem'}}>30 Day Money Back</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, cumque. Ullam amet ea ipsam, modi dicta laudantium repellendus voluptatum repellat.</Typography>
                </Box>
                <Box>
                    <Typography variant='h5' sx={{my:'1rem'}}>30 Day Money Back</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, cumque. Ullam amet ea ipsam, modi dicta laudantium repellendus voluptatum repellat.</Typography>
                </Box>
            </Container>
        </Box>
    </>
  )
}
