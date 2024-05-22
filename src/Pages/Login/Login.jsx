import React, { useState } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import {
  Box,
  Button,
  Card,
  CardContent,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import "./Login.css";
import { NavBar2 } from "../../Components/NavBar/NavBar2";
import Lottie from 'react-lottie';
import animationData from "./Animation - 1716038571450.json"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Base_Url } from "../../Configs/BaseUrl";
export const Login = () => {
  const navigation =  useNavigate()
  const [formData, setFormData] = useState({

    email: '',
    password: '',

  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(`${Base_Url}api/user/login`, formData);
      console.log("login Data==>",response.data);
      const Data = response.data.data
      localStorage.setItem("userDetails",JSON.stringify(Data));
      localStorage.setItem("auth",true);

      window.location.href = "/";
    } catch (error) {
      console.log("Error==>",error);
      alert("Login Error")
    }
  };
  
    const handelClick = (path)=>{
      window.location.href=path
        }
  return (
    <Box>
      <NavBar2 />
      <Box
        sx={{
          backgroundImage: "linear-gradient(195deg, rgba(66, 66, 74, 0.6), rgba(25, 25, 25, 0.6)),url(./assets/images/bg-sign-in-basic.jpeg)",
          backgroundSize: "cover", // This ensures the image covers the entire Box
          backgroundPosition: "center", // This centers the image within the Box
          width: "100%", // Adjust as needed
          height: "100vh", // Adjust as needed
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity:1,
        
        }}
      >
         {/* <div style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(128, 128, 128, 0.5)" // Adjust the color and opacity as needed
  }}></div> */}
        <Box>
          <Card id="cardLogin">
            <CardContent>
              <Box>
                <Card id="cardLogin2">
                  <CardContent>
                    <Box style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <Box>
                      <Lottie options={defaultOptions} height={170} width={170} />
                      </Box>
                      {/* <Typography
                        sx={{
                          color: "#fff",
                          fontSize: "13px",
                          marginLeft:"-20px"
                          
                        }}
                      >
                        Welcome to Sankyfy! Your journey to seamless experiences starts here
                      </Typography> */}
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
                <Box>
                  <TextField
                    id="inputBox"
                    sx={{ width: "100%" }}
                    label="Email"
                    variant="outlined"
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                  />
                </Box>
                <Box sx={{ marginTop: "20px" }}>
                  <TextField
                    sx={{ width: "100%" }}
                    label="Password"
                    variant="outlined"
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <Switch defaultChecked />
                  <Typography sx={{ color: "#7b809a", fontSize: "14px" }}>
                    Rember me
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ marginTop: "40px" }}>
                <Button onClick={handleSubmit} fullWidth variant="contained">
                  sign in
                </Button>
              </Box>

              <Box sx={{ marginTop: "20px" }}>
                <Typography sx={{ color: "#7b809a", fontSize: "13px" }}>
                  Don't have an account?{" "}
                  <span
                    style={{
                      color: "#1A73E8",
                      fontSize: "14px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                    onClick={()=>handelClick("/signup")}
                  >
                    Sign up
                  </span>{" "}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{position:"absolute",bottom:20}}>
          <Typography sx={{color:"#fff"}}>
            © 2024, Sankyfy. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
