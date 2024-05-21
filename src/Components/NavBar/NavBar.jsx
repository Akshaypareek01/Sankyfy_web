import { Box, Button, Divider, Drawer, Typography } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const navigation =  useNavigate()

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 ,padding:"20px",color:"#344767"}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={{display:"flex",justifyContent:"left",alignItems:"center"}}>
        <Box sx={{height:"60px",width:"60px",borderRadius:"100px",border:"1px solid #E4E4E4",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <img style={{height:"40px",width:"40px",borderRadius:"100px"}} src='https://cdn-icons-png.flaticon.com/512/2101/2101703.png' />
        </Box>

        <Box sx={{marginLeft:"30px"}}>
           <Typography>Jaipur</Typography>
        </Box>
      </Box>

      <Box sx={{display:"flex",justifyContent:"left",alignItems:"center",marginTop:"30px"}}>
        <Box sx={{height:"60px",width:"60px",borderRadius:"100px",border:"1px solid #E4E4E4",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <img style={{height:"40px",width:"40px",borderRadius:"100px"}} src='https://cdn3.iconfinder.com/data/icons/world-cities-1/256/50-512.png' />
        </Box>

        <Box sx={{marginLeft:"30px"}}>
           <Typography>Bangalore</Typography>
        </Box>
      </Box>
     
     
    </Box>
  );

  const handelClick = (path)=>{
navigation(path)
  }

  return (
    <Box style={{position:"fixed",top:0,width:"100%",zIndex:999}}>
    <Box style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"15px"}}>
       <Box  style={{background:"rgba(255, 255, 255, 0.8)",backdropFilter:"saturate(200%) blur(30px)",width:"66%",borderRadius:"13px",padding:"0px 15px 0px 15px",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
          <Box>
            <Typography style={{fontSize:"14px",fontWeight:"bold",fontFamily:"Roboto,sans-serif",color:"#344767",cursor:"pointer"}} onClick={()=>handelClick("/")}>Sankyfy</Typography>
          </Box>

          <Box style={{display:"flex",justifyContent:"right",alignItems:"center"}}>
            <Typography style={{fontSize:"14px",fontFamily:"Roboto,sans-serif",color:"#344767",cursor:"pointer"}} onClick={()=>handelClick("/about-us")}>About us</Typography>
            <Typography style={{marginLeft:"15px",fontSize:"14px",fontFamily:"Roboto,sans-serif",color:"#344767",cursor:"pointer"}} onClick={()=>handelClick("/contact-us")}>Contact us</Typography>
            <Typography style={{marginLeft:"25px",fontSize:"14px",fontFamily:"Roboto,sans-serif",color:"#344767",cursor:"pointer"}} onClick={()=>handelClick("/login")}>Login</Typography>
           
           <Box sx={{marginTop:"5px",marginLeft:"25px"}}>
           <Box onClick={toggleDrawer('right', true)} sx={{cursor:"pointer",borderRadius:"100px",border:"1px solid #E4E4E4",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <img style={{height:"30px",width:"30px",borderRadius:"100px"}} src='https://cdn3.iconfinder.com/data/icons/world-cities-1/256/50-512.png' />
              
        </Box>
        <Box sx={{textAlign:"center"}}>
          <Typography sx={{fontSize:"10px"}}>City</Typography>
        </Box>

           </Box>
            
          </Box>
        
       </Box>
    </Box>
    <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
</Box>
  )
}
