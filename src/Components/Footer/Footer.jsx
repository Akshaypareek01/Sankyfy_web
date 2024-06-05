import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { isMobile } from '../../IsMobile/IsMobile';
import { useNavigate } from 'react-router-dom';
export const Footer = () => {
  const navigation = useNavigate();
  const handleClick = (path) => {
    navigation(path);
  
  };

  return (
    <Box sx={{color:"#344767",position:"relative"}}>
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <Box sx={{width:`${isMobile ? "80%":'60%'}`}}>
        <Grid container spacing={3} >
               <Grid  item xs={6} sm={6} md={3} >
               <Box sx={{textAlign:"left"}} >
            <Box>
            <Typography onClick={() => handleClick('/')} sx={{fontWeight:"bold",cursor: 'pointer'}}>Sankyfy</Typography>
            </Box>

            <Box sx={{marginTop:"20px"}}>
               <FacebookIcon sx={{color:"grey",fontSize:"22px",cursor: 'pointer'}}/>
               <TwitterIcon sx={{color:"grey",fontSize:"22px",marginLeft:"10px",cursor: 'pointer'}}/>
               <YouTubeIcon sx={{color:"grey",fontSize:"22px",marginLeft:"10px",cursor: 'pointer'}}/>
            </Box>
           
          </Box>
                    </Grid> 

                    <Grid  item xs={6} sm={6} md={3} >
                       
          <Box sx={{textAlign:"left"}}>
            <Box sx={{fontSize:"16px",fontWeight:500,marginBottom:"13px"}}>Company</Box>
            <Box onClick={() => handleClick('/about-us')} sx={{cursor: 'pointer'}} >About us</Box>
            {/* <Box sx={{marginTop:"8px"}}>Freebies</Box>
            <Box sx={{marginTop:"8px"}}>Blog</Box> */}
          </Box>
                    </Grid> 


                      <Grid  item xs={6} sm={6} md={3} >
                      <Box sx={{textAlign:"left"}}>
            <Box sx={{fontSize:"16px",fontWeight:500,marginBottom:"13px"}}>Help & Support</Box>
            <Box onClick={() => handleClick('/contact-us')} sx={{cursor: 'pointer'}}>Contact Us</Box>
            {/* <Box sx={{marginTop:"8px"}}>Knowledge</Box>
            <Box sx={{marginTop:"8px"}}>Center</Box> */}
          </Box>
                      </Grid>

                      <Grid  item xs={6} sm={6} md={3} >

                      <Box sx={{textAlign:"left"}}>
            <Box sx={{fontSize:"16px",fontWeight:500,marginBottom:"13px"}}>Legal</Box>
            <Box onClick={() => handleClick('/')} sx={{cursor: 'pointer'}}>Terms & Conditions</Box>
            <Box  onClick={() => handleClick('/')} sx={{cursor: 'pointer',marginTop:"8px"}}>Privacy Policy</Box>
            {/* <Box sx={{marginTop:"8px"}}>Licenses (EULA)</Box> */}
          </Box>
                      </Grid>

                
               </Grid>

         
         
         
       
        </Box>

        <Box sx={{marginTop:"80px",marginBottom:"30px"}}>
          <Typography>All rights reserved. Copyright © 2024 Sankyfy by Sankyfy.</Typography>
        </Box>
        </Box>
    </Box>
  )
}
