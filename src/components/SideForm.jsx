'use client'

import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const SideForm = () => {
  return (
   <Box >
    <Box  sx={{backgroundColor:"#eee",height:"50px",display:"flex",alignItems:"center"}}>
        <Typography sx={{fontWeight:"bold",ml:2,fontSize:"large"}}>Contact Us</Typography>
    </Box>
    <Box className ="p-4">
        <form onSubmit={(e) => {
            e.preventDefault()
        }}>
            <div className='flex items-center p-2'>
            <label>Name</label>
            <TextField name = 'Name' type='text' placeholder='Enter Your Name'  fullWidth sx={{ml:2}} required/>
            </div>
            <div className='flex items-center p-2'>
            <label>Email ID</label>
            <TextField name = 'email' type='email' placeholder='Enter Your Email'  fullWidth sx={{ml:2}} required/>
            </div>
            <div className='flex items-center p-2'>
            <label>Mobile</label>
            <TextField name = 'number' type='text' placeholder='+91-97634234'  fullWidth sx={{ml:2}} required/>
            </div>
            <div className='flex items-center p-2'>
            <Button
                variant="contained"
                type='submit'
                sx={{
                  background: "linear-gradient(90deg, #6a00f4, #a84dc7)",
                  color: "white",
                  borderRadius: "5px",
                  
              
                  textTransform:"capitalize"
                }}
                fullWidth
              >
             Send Your Request
              </Button>
            </div>
            
        </form>
    </Box>
   </Box>
  )
}

export default SideForm