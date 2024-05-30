import React, { useEffect, useState } from 'react'
import {Button,Box, Typography, CardContent, Card, Grid, styled, Paper} from '@mui/material';
import { NavBar } from '../../Components/NavBar/NavBar';
import { Footer } from '../../Components/Footer/Footer';
import "./Home.css"
import { StoreCards } from '../../Components/Cards/StoreCards';
import { OurServicesCard } from '../../Components/Cards/OurServicesCard';
import { useNavigate, useParams } from 'react-router-dom';
import { Base_Url } from '../../Configs/BaseUrl';
import axios from 'axios';
const Item = styled(Paper)(({ theme }) => ({


}));

export const Home = () => {
  const navigation = useNavigate()
  const [shopData,setShopData] = useState(null);
  const [NearbyshopsData,setNearbyshopsData] = useState([]);
  const [randomShopData, setRandomShopData] = useState([]);

  useEffect(() => {
    if (NearbyshopsData && NearbyshopsData.length > 0) {
      const randomShops = getRandomShopsByCity(NearbyshopsData);
      console.log("Random shops data=====>",randomShops)
      setRandomShopData(randomShops);
    }
  }, [NearbyshopsData]);

  const OurServicesData = [
    {title:"Users",text:"At our platform, we provide an exceptional service that allows you to seamlessly discover and interact with shops in your vicinity."},
    {title:"Shopkeepers",text:"We also provide a robust suite of tools for shopkeepers to manage and promote their businesses effectively. By registering and completing the KYC process"}
  
  ]

  const userDetails = JSON.parse(localStorage.getItem("userDetails")) || null;
  const lat = localStorage.getItem("lat")
  const lng = localStorage.getItem("lng")
  const handelViewShopClick = ()=>{
    navigation("shops")
  }

  const fetchShops = async () => {
    try {
      const response = await axios.get(`${Base_Url}api/shop`);
  
      if (response.status === 200) {
        const fetchedCategories = response.data.data;
        console.log("Data ==>",fetchedCategories)
        setShopData(fetchedCategories);
       
      } else {
        console.error('Error fetching categories:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const fetchNearByShops = async () => {
    try {
      const data = {
        lat:lat,
        lng:lng,
        maxDistance:10000
      }
      const response = await axios.post(`${Base_Url}api/shop/nearby`,data);
  
      if (response.status === 200) {
        const fetchedCategories = response.data;
        console.log(" Nearby shops Data ==>",fetchedCategories)
        setNearbyshopsData(fetchedCategories);
       
      } else {
        console.error('Error fetching categories:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const getRandomElements = (array, num) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };
  
  const getRandomShopsByCity = (shops) => {
    // Group shops by city
    const shopsByCity = shops.reduce((acc, shop) => {
      if (!acc[shop.city]) {
        acc[shop.city] = [];
      }
      acc[shop.city].push(shop);
      return acc;
    }, {});
  
    // Get random 3 cities
    const cities = Object.keys(shopsByCity);
    const randomCities = getRandomElements(cities, 3);
  
    // For each selected city, get random 3 shops
    const randomShopsByCity = randomCities.map((city) => {
      const cityShops = shopsByCity[city];
      const randomCityShops = getRandomElements(cityShops, 3);
      return { city, shops: randomCityShops };
    });
  
    return randomShopsByCity;
  };


  useEffect(()=>{
    fetchShops();
    fetchNearByShops()
  },[])
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
            
            <Button variant='outlined' onClick={handelViewShopClick} style={{color:"#fff",marginTop:"20px",borderColor:"#fff"}}>View</Button>
            </Box>
        </Box>
               </Box>

              <Box sx={{width:"80%",margin:"auto"}}>
               
               {
                randomShopData[0] &&   <Box sx={{marginTop:"60px"}}>
                <Box sx={{marginTop:"30px"}}>
                  <Typography sx={{fontSize:"2.25rem",fontWeight:"bold"}}>{randomShopData[0].city}</Typography>
                  <Typography sx={{color:"#7b809a",fontSize:"1.25rem",marginTop:"10px"}}>Each of these shops has been selected for their quality, uniqueness, and dedication to providing an <br/> exceptional shopping experience. Dive in and discover your next favorite store</Typography>
                </Box>

                <Box sx={{marginTop:"30px"}}>
                <Grid container spacing={2}>
                <Grid container spacing={2}>
                {
                  randomShopData[0].shops.map((el,index)=>{
                    return <Grid key={index} item xs={12} sm={6} md={4}>
                            <StoreCards data={el}/>
                    </Grid> 
                  })
                }
       
               </Grid>
      
       
      </Grid>
                </Box>
           
               </Box>
               }
            
            {
                randomShopData[1] &&   <Box sx={{marginTop:"60px"}}>
                <Box sx={{marginTop:"30px"}}>
                  <Typography sx={{fontSize:"2.25rem",fontWeight:"bold"}}>{randomShopData[1].city}</Typography>
                  <Typography sx={{color:"#7b809a",fontSize:"1.25rem",marginTop:"10px"}}>Each of these shops has been selected for their quality, uniqueness, and dedication to providing an <br/> exceptional shopping experience. Dive in and discover your next favorite store</Typography>
                </Box>

                <Box sx={{marginTop:"30px"}}>
                <Grid container spacing={2}>
                {
                  randomShopData[1].shops.map((el,index)=>{
                    return <Grid key={index} item xs={12} sm={6} md={4}>
                            <StoreCards data={el}/>
                    </Grid> 
                  })
                }
       
               </Grid>
                </Box>
           
               </Box>
               }

{
                randomShopData[2] &&   <Box sx={{marginTop:"60px"}}>
                <Box sx={{marginTop:"30px"}}>
                  <Typography sx={{fontSize:"2.25rem",fontWeight:"bold"}}>{randomShopData[2].city}</Typography>
                  <Typography sx={{color:"#7b809a",fontSize:"1.25rem",marginTop:"10px"}}>Each of these shops has been selected for their quality, uniqueness, and dedication to providing an <br/> exceptional shopping experience. Dive in and discover your next favorite store</Typography>
                </Box>

                <Box sx={{marginTop:"30px"}}>
               
                <Grid container spacing={2}>
                {
                  randomShopData[2].shops.map((el,index)=>{
                    return <Grid key={index} item xs={12} sm={6} md={4}>
                            <StoreCards data={el}/>
                    </Grid> 
                  })
                }
       
             
      
       
      </Grid>
                </Box>
           
               </Box>
               }

             


             

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
