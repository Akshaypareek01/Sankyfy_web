import React, { useEffect, useState } from 'react'
import {Button,Box, Typography, CardContent, Card, Grid, Paper,Pagination} from '@mui/material';
import { NavBar } from '../../Components/NavBar/NavBar';
import { Footer } from '../../Components/Footer/Footer';
import "./Home.css"
import { StoreCards } from '../../Components/Cards/StoreCards';
import { OurServicesCard } from '../../Components/Cards/OurServicesCard';
import { useNavigate, useParams } from 'react-router-dom';
import { Base_Url } from '../../Configs/BaseUrl';
import { styled, alpha } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import axios from 'axios';
import { SelectCategoryModel } from '../../Components/Models/SelectCategoryModel';
import { SelectCityModel } from '../../Components/Models/SelectCityModel';
import { SelectStateModel } from '../../Components/Models/SelectStateModel';
const Item = styled(Paper)(({ theme }) => ({


}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.85),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.65),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '40ch',
      '&:focus': {
        width: '92ch',
      },
    },
  },
}));

export const Home = () => {
  const navigation = useNavigate()
  const [shopData,setShopData] = useState([]);
  const [NearbyshopsData,setNearbyshopsData] = useState([]);
  const [randomShopData, setRandomShopData] = useState([]);
  const [page, setPage] = useState(1);
  const [page2, setPage2] = useState(1);
  const [categoryOpen,setCategoryOpen] = useState(false);
  const [selectedCategory,setSelectedCategory] = useState("");

  const [cityOpen,setCityOpen] = useState(false);
  const [selectedCity,setSelectedCity] = useState("");

  const [stateOpen,setStateOpen] = useState(false);
  const [selectedState,setSelectedState] = useState("");

  const [filteredData, setFilteredData] = useState([]);
  
  const itemsPerPage = 3;
  const count = Math.ceil(shopData.length / itemsPerPage);
  const count2 = Math.ceil(filteredData.length / itemsPerPage);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleChange2 = (event, value) => {
    setPage2(value);
  };
  
  const paginatedData = shopData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const paginatedData2 = filteredData.slice((page2 - 1) * itemsPerPage, page2 * itemsPerPage);

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
        maxDistance:100
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


  const handelCategoryopen = ()=>{
    setCategoryOpen(true);
  }

  const handelCityopen = ()=>{
    setCityOpen(true);
  }

  const handelStateopen = ()=>{
    setStateOpen(true);
  }

  const applyFilter = () => {
    let filtered = shopData;
   console.log("Aplly filter ==>",selectedState,selectedCity,selectedCategory)
    if (selectedState) {
      filtered = filtered.filter(shop => shop.state.toLowerCase() === selectedState.toLowerCase());
    }

    if (selectedCity) {
      filtered = filtered.filter(shop => shop.city.toLowerCase() === selectedCity.toLowerCase());
    }

    if (selectedCategory) {
      filtered = filtered.filter(shop => shop.shopCategory.toLowerCase() === selectedCategory.toLowerCase());
    }

    setFilteredData(filtered);
  };


  const resetFilter = ()=>{
    setSelectedCategory("");
    setSelectedCity("");
    setSelectedState("");
    setFilteredData([])
  }
 


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
        alignItems:"center",
        position:"relative",
        flexDirection:"column"
      }}>
           <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"20px"}}>
          
          <Button onClick={handelCategoryopen} variant='contained' sx={{color:"black",background:"#fff",  '&:hover': {
          color: "#fff",
        }}}>
          {
            selectedCategory == ""  ? "Select Category" : selectedCategory
          }
          
          </Button>


          <Button onClick={handelStateopen} variant='contained' sx={{color:"black",background:"#fff",marginLeft:"20px",  '&:hover': {
          color: "#fff",
        }}}>
          
          {
            selectedState == ""  ? "Select State" : selectedState
          }
        </Button>

        {
          selectedState !== "" &&   <Button onClick={handelCityopen} variant='contained' sx={{color:"black",background:"#fff",marginLeft:"20px",  '&:hover': {
            color: "#fff",
          }}}>
            
            {
              selectedCity == ""  ? "Select City" : selectedCity
            }
            </Button>
        }
         
   {
    (selectedState !== "" ||  selectedCategory !== "") &&  <Button onClick={applyFilter}  variant='contained' sx={{marginLeft:"20px"}}>
    Apply Filter
  </Button>
   }

{
    (selectedState !== "" ||  selectedCategory !== "") &&  <Button onClick={resetFilter}  variant='contained' sx={{marginLeft:"20px",background:"crimson"}}>
    Reset Filter
  </Button>
   }
        
         


          
       </Box>
      
       <Box sx={{marginTop:"30px"}}>
      <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

      </Box>
        </Box>

        <Box sx={{marginTop:"-60px"}}>
          <Card id="card1">
            <CardContent>

             
              
            <Box sx={{ maxWidth: "80%", margin: "auto" }}>

           {
            filteredData && filteredData.length > 0 &&   <Box sx={{ marginTop: "60px" }}>
            <Box sx={{ marginTop: "30px" }}>
              <Typography sx={{ fontSize: "2.25rem", fontWeight: "bold" }}>Searched Shops</Typography>
              <Typography sx={{ color: "#7b809a", fontSize: "1.25rem", marginTop: "10px" }}>
                Each of these shops has been selected for their quality, uniqueness, and dedication to providing an exceptional shopping experience. Dive in and discover your next favorite store
              </Typography>
            </Box>
      
            <Box sx={{ marginTop: "60px" }}>
              <Grid container spacing={2}>
                {
                  paginatedData2.map((el, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <StoreCards data={el} />
                    </Grid>
                  ))
                }
              </Grid>
            </Box>
      
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
              <Pagination count={count2} page={page2} onChange={handleChange2} color="primary" />
            </Box>
          </Box>
           }
          


    <Box sx={{ marginTop: "60px" }}>
      <Box sx={{ marginTop: "30px" }}>
        <Typography sx={{ fontSize: "2.25rem", fontWeight: "bold" }}>Shops</Typography>
        <Typography sx={{ color: "#7b809a", fontSize: "1.25rem", marginTop: "10px" }}>
          Each of these shops has been selected for their quality, uniqueness, and dedication to providing an exceptional shopping experience. Dive in and discover your next favorite store
        </Typography>
      </Box>

      <Box sx={{ marginTop: "60px" }}>
        <Grid container spacing={2}>
          {
            paginatedData.map((el, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <StoreCards data={el} />
              </Grid>
            ))
          }
        </Grid>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <Pagination count={count} page={page} onChange={handleChange} color="primary" />
      </Box>
    </Box>
  </Box>
            

              <Box sx={{marginTop:"60px"}}>
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
            
            {/* <Button variant='outlined' onClick={handelViewShopClick} style={{color:"#fff",marginTop:"20px",borderColor:"#fff"}}>View</Button> */}
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
  
         



         <Box>
         <SelectCategoryModel open={categoryOpen} setOpen={setCategoryOpen} selectedValue={selectedCategory} setSelectedValue={setSelectedCategory}/>
         
         <SelectCityModel open={cityOpen} setOpen={setCityOpen} selectedState={selectedState} selectedValue={selectedCity} setSelectedValue={setSelectedCity}/>

         <SelectStateModel open={stateOpen} setOpen={setStateOpen} setSelectedCity={setSelectedCity}   selectedValue={selectedState} setSelectedValue={setSelectedState}/>
         </Box>
       
    </Box>
  )
}
