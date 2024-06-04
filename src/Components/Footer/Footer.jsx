import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
export const Footer = () => {
  return (
    <Box sx={{color:"#344767",position:"relative"}}>
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <Box sx={{width:"60%"}}>
        <Grid container spacing={2}>
               <Grid  item xs={12} sm={6} md={2}>
               <Box>
            <Box>
            <Typography sx={{fontWeight:"bold"}}>Sankyfy</Typography>
            </Box>

            <Box sx={{marginTop:"20px"}}>
               <FacebookIcon sx={{color:"grey",fontSize:"22px"}}/>
               <TwitterIcon sx={{color:"grey",fontSize:"22px",marginLeft:"10px"}}/>
               <YouTubeIcon sx={{color:"grey",fontSize:"22px",marginLeft:"10px"}}/>
            </Box>
           
          </Box>
                    </Grid> 

                    <Grid  item xs={12} sm={6} md={2}>
                       
          <Box sx={{textAlign:"left"}}>
            <Box sx={{fontSize:"16px",fontWeight:500,marginBottom:"13px"}}>Company</Box>
            <Box >About us</Box>
            <Box sx={{marginTop:"8px"}}>Freebies</Box>
            <Box sx={{marginTop:"8px"}}>Blog</Box>
          </Box>
                    </Grid> 

                    <Grid  item xs={12} sm={6} md={2}>
                    <Box sx={{textAlign:"left"}}>
            <Box sx={{fontSize:"16px",fontWeight:500,marginBottom:"13px"}}>Resources</Box>
            <Box >Illustrations</Box>
            <Box sx={{marginTop:"8px"}}>Bits & Snippets</Box>
            <Box sx={{marginTop:"8px"}}>Affiliate</Box>
          </Box>
                      </Grid>

                      <Grid  item xs={12} sm={6} md={2}>
                      <Box sx={{textAlign:"left"}}>
            <Box sx={{fontSize:"16px",fontWeight:500,marginBottom:"13px"}}>Help & Support</Box>
            <Box >Contact Us</Box>
            <Box sx={{marginTop:"8px"}}>Knowledge</Box>
            <Box sx={{marginTop:"8px"}}>Center</Box>
          </Box>
                      </Grid>

                      <Grid  item xs={12} sm={6} md={2}>

                      <Box sx={{textAlign:"left"}}>
            <Box sx={{fontSize:"16px",fontWeight:500,marginBottom:"13px"}}>Legal</Box>
            <Box >Terms & Conditions</Box>
            <Box sx={{marginTop:"8px"}}>Privacy Policy</Box>
            <Box sx={{marginTop:"8px"}}>Licenses (EULA)</Box>
          </Box>
                      </Grid>

                
               </Grid>

         
         
         
       
        </Box>

        <Box sx={{marginTop:"80px"}}>
          <Typography>All rights reserved. Copyright © 2024 Sankyfy by Sankyfy.</Typography>
        </Box>
        </Box>
    </Box>
  )
}
