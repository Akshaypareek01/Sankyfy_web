import React from 'react'
import {Button,Box, Typography, CardContent, Card} from '@mui/material';
import { NavBar } from '../../Components/NavBar/NavBar';
import { Footer } from '../../Components/Footer/Footer';
import "./Home.css"
export const Home = () => {
  return (
    <Box>
       <NavBar />
        <Box  sx={{
        backgroundImage: 'url(./assets/images/bg-presentation.jpg)',
        backgroundSize: 'cover', // This ensures the image covers the entire Box
        backgroundPosition: 'top', // This centers the image within the Box
        width: '100%', // Adjust as needed
        height: '75vh', // Adjust as needed
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}>
          <Box>
            <Typography id='title1'>Sankyfy UI Testing</Typography>
          </Box>
        </Box>
        <Box sx={{marginTop:"-60px"}}>
          <Card id="card1">
            <CardContent>
               <Box>
                
               </Box>
            </CardContent>
          </Card>
        </Box>
        
        <Box sx={{marginTop:"30px"}}>
        <Footer/>
        </Box>
  
       
       
    </Box>
  )
}
