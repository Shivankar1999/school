'use client'

import { Box, Grid, Typography, TextField, Button, Link, IconButton, Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Divider from '@mui/material/Divider';
import SchoolIcon from '@mui/icons-material/School';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', py: 4, mt: 8 }}>
    <Container maxWidth="xxl" sx={{ mt: 4 }}>
    
      {/* Upper section with menu items */}
      <Grid container justifyContent="center" spacing={2} sx={{ mb: 4, }}>
      <Grid item xs ={12} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Typography
            variant="h4"
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              display: "flex",
              color: "purple",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
      <SchoolIcon fontSize="small"/>
            afterschool
          </Typography>
            </Box>

        </Grid>
        <Grid item xs={12} md={10}>
          <Grid container sx={{display:"flex",justifyContent:{xs:"center",md:"space-between"},flexWrap:"wrap"}}>
            <Link href="#" sx={{  color: "#6a00f4",  mr: {
    
      xs: 2,
      md: 0,  
    }, textDecoration: 'none', fontWeight: 'bold' }}>
              Locations <ArrowDropDownIcon/>
            </Link>
            <Link href="#" sx={{   color: "#6a00f4", mr: {
   
      xs: 2,  
      md: 0,  
    }, textDecoration: 'none', fontWeight: 'bold' }}>
              Foundation <ArrowDropDownIcon/>
            </Link>
            <Link href="#" sx={{  color: "#6a00f4", mr: {
     
      xs: 2,  
      md: 0,  
    }, textDecoration: 'none', fontWeight: 'bold' }}>
              Diploma <ArrowDropDownIcon/>
            </Link>
            <Link href="#" sx={{   color: "#6a00f4", mr: {
    
      xs: 2,  
      md: 0,  
    }, textDecoration: 'none', fontWeight: 'bold' }}>
              Degree <ArrowDropDownIcon/>
            </Link>
            <Link href="#" sx={{   color: "#6a00f4", mr: {

      xs: 2,  
      md: 0, 
    }, textDecoration: 'none', fontWeight: 'bold' }}>
              Scholarships <ArrowDropDownIcon/>
            </Link>
            <Link href="#" sx={{  color: "#6a00f4",mr: {
   
      xs: 2,
      md: 0,
    },textDecoration: 'none', fontWeight: 'bold' }}>
              Institutions <ArrowDropDownIcon/>
            </Link>
            <Link href="#" sx={{   color: "#6a00f4", mr: {

      xs: 2,  
      md: 0,  
    }, textDecoration: 'none', fontWeight: 'bold' }}>
              Courses <ArrowDropDownIcon/>
            </Link>
          </Grid>
          <Divider sx ={{mt:2}}/>
        </Grid>
     
        
      </Grid>
    
      

      {/* Middle section with columns */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={10}>
          <Grid container columns={18} spacing={1}>
            {/* Company Column */}
            <Grid item xs={6} sm={3}>
              <Typography variant="h6" sx={{color:"#000"}}>
                Company
              </Typography>
              <Link href="#" sx={{ display: 'block', textDecoration: 'none', color: 'text.primary', mt: 1 }}>
                Contact Us
              </Link>
            </Grid>

            {/* Students Column */}
            <Grid item xs={6} sm={3}>
              <Typography variant="h6" sx={{color:"#000"}}>
                Students
              </Typography>
              <Link href="#" sx={{ display: 'block', textDecoration: 'none', color: 'text.primary', mt: 1 }}>
                Courses
              </Link>
              <Link href="#" sx={{ display: 'block', textDecoration: 'none', color: 'text.primary', mt: 1 }}>
                Scholarships
              </Link>
              <Link href="#" sx={{ display: 'block', textDecoration: 'none', color: 'text.primary', mt: 1 }}>
                Careers
              </Link>
              <Link href="#" sx={{ display: 'block', textDecoration: 'none', color: 'text.primary', mt: 1 }}>
                Malaysian University
              </Link>
              <Link href="#" sx={{ display: 'block', textDecoration: 'none', color: 'text.primary', mt: 1 }}>
                Study Abroad
              </Link>
            </Grid>

            {/* Institutions Column */}
            <Grid item xs={6} sm={3} >
              <Typography variant="h6"  sx={{color:"#000"}}>
                Institutions
              </Typography>
              <Link href="#" sx={{ display: 'block', textDecoration: 'none', color: 'text.primary', mt: 1 }}>
                Advertise With Us
              </Link>
            </Grid>

            {/* Tools Column */}
            <Grid item xs={6} sm={3}>
              <Typography variant="h6"  sx={{color:"#000"}}>
                Tools
              </Typography>
              <Link href="#" sx={{ display: 'block', textDecoration: 'none', color: 'text.primary', mt: 1 }}>
                Course Predictor
              </Link>
              <Link href="#" sx={{ display: 'block', textDecoration: 'none', color: 'text.primary', mt: 1 }}>
                Top Careers
              </Link>
              <Link href="#" sx={{ display: 'block', textDecoration: 'none', color: 'text.primary', mt: 1 }}>
                UPU 2019
              </Link>
            </Grid>

            {/* Get in Touch Column */}
            <Grid item xs={6} sm={3}>
              <Typography variant="h6"  sx={{color:"#000"}}>
                Get in touch
              </Typography>
              <IconButton aria-label="facebook" color="primary">
                <FacebookIcon sx={{  color: "#6a00f4",}} />
              </IconButton>
              <IconButton aria-label="twitter" color="primary">
                <TwitterIcon sx={{  color: "#6a00f4",}}/>
              </IconButton>
            </Grid>
          </Grid>
          <Divider sx ={{mt:2}}/>
        </Grid>
        
      </Grid>

      {/* Bottom section for Newsletter Subscription */}
      <Grid container justifyContent="center" spacing={2} sx={{ mt: 4 }}>
      <Grid item xs ={12} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Typography
            variant="body2"
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              display: "flex",
              color: "#6a00f4",
              textDecoration: "none",
              textTransform:"capitalize",
              fontWeight: "bold",
            }}
          >
      {/* <SchoolIcon fontSize="small"/> */}
            Subsribe to our news letter
          </Typography>
            </Box>

        </Grid>
        <Grid item xs={12} md={6}>
          
          <Box display="flex" justifyContent="center" alignItems="center">
            <TextField
              label="Enter your mail ID"
              variant="outlined"
              
            //   fullWidth
              sx={{ mr: 1 }}
            />
            <Button variant="contained" color="primary" sx={{height:"55px", background: "linear-gradient(90deg, #6a00f4, #a84dc7)",textTransform:"capitalize"}}>
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Footer bottom text */}
      <Box textAlign="center" sx={{ mt: 4 }}>
        <Typography variant="body2" color="text.secondary">
          © 2024 After School. All Rights Reserved.
        </Typography>
      </Box>
   
    </Container>
    </Box>
  );
};

export default Footer;
