import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { NavBar } from '../../Components/NavBar/NavBar'
import { Footer } from '../../Components/Footer/Footer'
import "./ContactUs.css"
export const ContactUs = () => {
  return (
    <Box>
      <NavBar />

      <Box >
        <Box >
            <Box sx={{paddingTop:"20px"}}>
            <Grid container spacing={2} >
        <Grid item xs={12} sm={6} md={6} sx={{padding:"10px"}}>
          <img src={"./assets/images/illustrations/illustration-reset.jpg"} style={{width:'calc(100% - 2rem)',
    height:'calc(100vh - 2rem)',borderRadius:"10px"}} />
        </Grid>

        <Grid item xs={12} sm={6} md={6} sx={{padding:"10px"}}>
        <Box
        sx={{
        
          width: "100%", // Adjust as needed
          height: "calc(100vh - 2rem)", // Adjust as needed
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          opacity:1,
        
        }}
      >
     
        <Box sx={{marginLeft:"50px"}}>
          <Card id="cardContactus">
            <CardContent>
              <Box>
                <Card id="cardContactus2">
                  <CardContent>
                    <Box style={{display:"flex",justifyContent:"left",alignItems:"center"}}>
                      <Box sx={{marginLeft:"20px"}}>
                     
                     
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: "32px",
                          marginLeft:"-20px",
                          fontWeight:"bold"
                        }}
                      >
                        Contact us
                      </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>

              <Box
                sx={{
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "left",
                  alignContent: "center",
                  flexDirection: "column",
                }}
              >
                <Box sx={{textAlign:"left",marginTop:"20px"}}>
                    <Typography sx={{fontSize:"14px"}}>For further questions, including partnership opportunities, please email hello@creative-tim.com or contact using our contact form.</Typography>
                </Box>
                <Box sx={{marginTop:"40px"}}>
                <Grid container spacing={2} >
        <Grid item xs={12} sm={6} md={6} >
        <TextField
                    id="inputBox"
                    sx={{ width: "100%" }}
                    label="Full Name"
                    variant="standard"
                  />
            </Grid>
            <Grid item xs={12} sm={6} md={6} >
        <TextField
                    id="inputBox"
                    sx={{ width: "100%" }}
                    label="Email"
                    variant="standard"
                  />
            </Grid>


            <Grid item xs={12} sm={12} md={12} >
                <Box sx={{marginTop:"50px"}}>
                <TextField
                    id="inputBox"
                    sx={{ width: "100%" }}
                    label="What can we help you ?"
                    minRows={3}
                    variant="standard"
                  />
                </Box>
       
            </Grid>
            </Grid>
                 
                </Box>
             

               
              </Box>

              <Box sx={{ marginTop: "60px" }}>
                <Button  variant="contained" sx={{borderRadius:"20px"}}>
                  Send Message
                </Button>
              </Box>

            </CardContent>
          </Card>
        </Box>

      </Box>
        </Grid>

       
      
       
      </Grid>
            </Box>
       
        </Box>
      
      </Box>

      <Box sx={{marginTop:"30px"}}>
        <Footer/>
        </Box>
    </Box>
  )
}
