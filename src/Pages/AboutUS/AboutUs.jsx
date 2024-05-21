import { Box, Typography } from '@mui/material'
import React from 'react'
import { NavBar } from '../../Components/NavBar/NavBar'
import { Footer } from '../../Components/Footer/Footer'

export const AboutUs = () => {
  return (
    <Box>
<NavBar />

<Box sx={{
        backgroundImage: 'linear-gradient(195deg, rgba(66, 66, 74, 0.6), rgba(25, 25, 25, 0.6)),url(./assets/images/bg-about-us.jpg)',
        backgroundSize: 'cover', // This ensures the image covers the entire Box
        backgroundPosition: 'center', // This centers the image within the Box
        width: '100%', // Adjust as needed
        minHeight: '75vh', // Adjust as needed
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}>
   <Typography id='title1'>About Us</Typography>
</Box>
<Box sx={{marginTop:"30px"}}>
        <Footer/>
        </Box>
    </Box>
  )
}
