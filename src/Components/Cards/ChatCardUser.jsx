import { Box, Typography } from '@mui/material'
import React from 'react'

export const ChatCardUser = ({msg}) => {
  return (
    <Box sx={{padding:"8px",background:"#fff",borderRadius:"10px",maxWidth:"300px",textAlign:"left",marginTop:"10px"}}>
                    <Typography style={{fontSize:"16px"}}>{msg}</Typography>
                </Box>
  )
}
