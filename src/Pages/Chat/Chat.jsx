import { Avatar, Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import chatbg from "./chat-bg.jpg"
import { red } from '@mui/material/colors';
import { ChatCardUser } from '../../Components/Cards/ChatCardUser';
import { ChatCardShopKeeper } from '../../Components/Cards/ChatCardShopKeeper';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { Base_Url } from '../../Configs/BaseUrl';
import { useParams } from 'react-router-dom';
export const Chat = () => {
    const {id} = useParams()
    const userDetails = JSON.parse(localStorage.getItem("userDetails")) || null;
    const [chatData, setChatData] = useState([]);
    const [shopData,setShopData] = useState(null);
    const [update,setUpdate] = useState(0);
    const [msg,setMsg] = useState("");
    const handelMsgSend  = ()=>{
        console.log("Send Msg ==>")
        sendMsg()
    }

    const fetchShops = async () => {
        try {
          const response = await axios.get(`${Base_Url}api/shop/${id}`);
      
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


    const getChat = async () => {
        try {
          const response = await axios.get(`${Base_Url}api/chat/chats/${userDetails._id}/${id}`);
      
          if (response.status === 200) {
            const fetchedCategories = response.data;
            console.log("Data of chat  ==>",fetchedCategories)
            setChatData(fetchedCategories)
           
          } else {
            console.error('Error fetching categories:', response.statusText);
          }
        } catch (error) {
          console.error('Error:', error.message);
        }
      };

      const sendMsg = async()=>{
     
            try {
                const Msg = {
                    shopkeeperId:id,
                    userId:userDetails._id,
                    message:msg,
                    from:"user"
                }
              const response = await axios.post(`${Base_Url}api/chat`, Msg);
              console.log("login Data==>",response.data);
              const Data = response.data.data
              setUpdate((prev)=>prev+1)
              setMsg("")
            } catch (error) {
              console.log("Error==>",error);
             
            }
          
      }

      const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          handelMsgSend();
        }
      };

      useEffect(() => {
        getChat();
    
        const interval = setInterval(() => {
          getChat();
        }, 10000); // 10000 ms = 10 seconds
    
        return () => clearInterval(interval); // Clean up the interval on component unmount
      }, [id]);

      useEffect(()=>{
        getChat();
      },[update])

    //   useEffect(()=>{
    //     fetchShops()
    //   },[])

  return (
  <Box >
       <Box  sx={{
        backgroundImage: `linear-gradient(195deg, rgba(66, 66, 74, 0.6), rgba(25, 25, 25, 0.6)),url(${chatbg})`,
        backgroundSize: 'cover', // This ensures the image covers the entire Box
        backgroundPosition: 'top', // This centers the image within the Box
        width: '100%', // Adjust as needed
        height: '100vh', // Adjust as needed
        display: "flex", 
        justifyContent: "center",
        alignItems:"center",
        flexDirection:"column",

        position:"relative",

   
      }}>
          <Box sx={{width:"80%",border:"1px solid grey",padding:"20px",borderRadius:"10px",borderBottom:"0px"}}>
            <Box sx={{display:"flex",justifyContent:"left",alignItems:"center"}}>
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {shopData && shopData.shopName.charAt(0)}
          </Avatar>

          {/* <Box sx={{marginLeft:"10px",textAlign:"left"}}>
            <Typography sx={{color:"#fff",fontSize:"14px"}}>{shopData && shopData.shopName}</Typography>
            <Typography sx={{color:"#fff",fontSize:"12px"}}>last seen : 2 hrs ago</Typography>
          </Box> */}
            </Box>



            <Box sx={{height:"80vh",overflow:"auto",marginTop:"60px"}}>
                 
            {chatData.map((msg) => (
        <Box
          key={msg._id}
          sx={{
            display: 'flex',
            justifyContent: msg.from === 'shopkeeper' ? 'flex-start' : 'flex-end',
            alignItems: 'center',
            marginBottom: '10px'
          }}
        >
          {msg.from === 'shopkeeper' ? (
            <ChatCardShopKeeper msg={msg.message} />
          ) : (
            <ChatCardUser msg={msg.message} />
          )}
        </Box>
      ))}

                



                  
               
            </Box>



          </Box>
        
          <Box sx={{ position: "absolute", bottom: 30, width: "100vw", display: "flex", justifyContent: "center" }}>
    <Box style={{width: "80vw", background: "#fff", borderRadius: "50px",display:"flex",justifyContent:"left",alignItems:"center"}} >
        <input  onKeyPress={handleKeyPress} value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder='type your message ...' style={{ width:"94%",padding:"20px",border:"none", borderRadius: "50px"}} />
        <Box sx={{display:"flex",justifyContent:"right",alignItems:"center"}}>
          <SendIcon onClick={handelMsgSend} style={{fontSize:"30px",color:"green"}} />
        </Box>
    </Box>
</Box>
        </Box>
      </Box>

  )
}
