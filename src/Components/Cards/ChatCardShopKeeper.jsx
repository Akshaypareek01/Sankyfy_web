import { Box, Typography } from '@mui/material'
import React from 'react'

export const ChatCardShopKeeper = ({msg}) => {
  return (
    <Box sx={{padding:"10px",background:"pink",borderRadius:"10px",maxWidth:"300px",textAlign:"left",marginTop:"10px"}}>
    <Typography>{msg}</Typography>
</Box>
  )
}
