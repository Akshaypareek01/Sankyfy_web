import React from 'react'
import {Button,Box, Typography, CardContent, Card, Grid, styled, Paper} from '@mui/material';
import { NavBar } from '../../Components/NavBar/NavBar';
import { Footer } from '../../Components/Footer/Footer';
import "./Home.css"
import { StoreCards } from '../../Components/Cards/StoreCards';
import { OurServicesCard } from '../../Components/Cards/OurServicesCard';
const Item = styled(Paper)(({ theme }) => ({


}));

export const Home = () => {
  const OurServicesData = [
    {title:"Users",text:"At our platform, we provide an exceptional service that allows you to seamlessly discover and interact with shops in your vicinity."},
    {title:"Shopkeepers",text:"We also provide a robust suite of tools for shopkeepers to manage and promote their businesses effectively. By registering and completing the KYC process"}
  
  ]

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
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

             <Box sx={{marginTop:"100px"}}>
             <Box sx={{width:"60%",margin:"auto"}}>
              <Box>
              <Box sx={{marginTop:"30px"}}>
                  <Typography sx={{fontSize:"3.25rem",fontWeight:"bold"}}>Our Services</Typography>
                  <Typography sx={{color:"#7b809a",fontSize:"1.25rem",marginTop:"10px"}}>Explore our comprehensive platform designed to connect you with local shops effortlessly <br/> and empower shopkeepers with tools to showcase their businesses. </Typography>
                </Box>
              </Box>
             <Box sx={{marginTop:"30px"}}>
                <Grid container spacing={2}>
                  {
                    OurServicesData.map((el,index)=>{
                      return   <Grid item xs={12} sm={6} md={6} key={index}>
                      <OurServicesCard data={el}/>
                    </Grid>
                    })
                  }
      

     
        </Grid>
        </Box>
             </Box>
             </Box>
            
               <Box sx={{marginTop:"60px"}}>

               <Box sx={{
            background: "linear-gradient(195deg, #42424a, #191919)",
            height: "300px",
            position: 'relative',
            borderRadius:"20px" ,
            display:"flex",
            justifyContent:"center",
            alignItems:"center" // Ensure positioning is relative
        }}>
            <Box sx={{
                backgroundImage: 'url(./assets/images/shapes/waves-white.svg)',
                backgroundSize: 'cover',     // Adjust the size as needed
                backgroundRepeat: 'no-repeat',
                height: '100%',              // Ensure it takes the full height of the parent Box
                width: '100%',               // Ensure it takes the full width of the parent Box
                position: 'absolute',        // Absolute positioning to place it within the parent
                top: 0,
                left: 0,
                opacity:0.1
            }}>

              
            </Box>
            <Box>
            <Typography sx={{color:"#fff",fontSize:"1.875rem",fontWeight:"bold"}}>Discover Shops and Stores Near You  <br/>with Ease</Typography>
            </Box>
        </Box>
               </Box>

              <Box sx={{width:"80%",margin:"auto"}}>
               
              <Box sx={{marginTop:"60px"}}>
                <Box sx={{marginTop:"30px"}}>
                  <Typography sx={{fontSize:"2.25rem",fontWeight:"bold"}}>Janakpuri</Typography>
                  <Typography sx={{color:"#7b809a",fontSize:"1.25rem",marginTop:"10px"}}>Each of these shops has been selected for their quality, uniqueness, and dedication to providing an <br/> exceptional shopping experience. Dive in and discover your next favorite store</Typography>
                </Box>

                <Box sx={{marginTop:"30px"}}>
                <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <StoreCards/>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <StoreCards/>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <StoreCards/>
        </Grid>
      
       
      </Grid>
                </Box>
           
               </Box>

               <Box sx={{marginTop:"80px"}}>
                <Box sx={{marginTop:"30px"}}>
                  <Typography sx={{fontSize:"2.25rem",fontWeight:"bold"}}>Ganga Nagar</Typography>
                  <Typography sx={{color:"#7b809a",fontSize:"1.25rem",marginTop:"10px"}}>We've gathered the best of the best for you. From fashion to home decor, find everything <br/> you need and more in our carefully curated shop selection</Typography>
                </Box>

                <Box sx={{marginTop:"30px"}}>
                <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <StoreCards/>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <StoreCards/>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <StoreCards/>
        </Grid>
        
       
      </Grid>
                </Box>
           
               </Box>


               <Box sx={{marginTop:"80px"}}>
                <Box sx={{marginTop:"30px"}}>
                  <Typography sx={{fontSize:"2.25rem",fontWeight:"bold"}}>Malviya Nagar</Typography>
                  <Typography sx={{color:"#7b809a",fontSize:"1.25rem",marginTop:"10px"}}>Discover the stories behind these shops. From passionate owners to unique products,<br/> each store has something special waiting for you</Typography>
                </Box>

                <Box sx={{marginTop:"30px"}}>
                <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <StoreCards/>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <StoreCards/>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <StoreCards/>
        </Grid>
      
       
      </Grid>
                </Box>
           
               </Box>

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
