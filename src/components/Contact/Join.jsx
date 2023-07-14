import { Button, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Join() {
  return (
    <>
        <Box sx={{height:{xs:'100%',md:'300px'}, bgcolor:'#151A1E', display:'flex', justifyContent:'center', alignItems:'center',textAlign:'center', py:{xs:'1.5em', md:'0'}}}>
            <Container>
                <Box>
                    <Typography variant='h3' color='#fff'>
                        Interested in being listed on our expert directory?
                    </Typography>
                    <Button variant='contained' sx={{mt:'2em'}}>
                        Join our agency partner Programme today!
                    </Button>
                </Box>
            </Container>
        </Box>
    </>
  )
}
