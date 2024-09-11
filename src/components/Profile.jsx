
'use client'
import React from "react";
import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Link,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  IconButton,
  
} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PeopleIcon from '@mui/icons-material/People'; // Adjust as needed
import SchoolIcon from '@mui/icons-material/School'; // Adjust as needed
import BookIcon from "@mui/icons-material/Book";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ProfilePage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      {/* Breadcrumb */}
      <Breadcrumbs aria-label="breadcrumb" separator="›" sx={{
  background: 'linear-gradient(90deg, rgba(106, 0, 240, 0.1), rgba(168, 70, 199, 0.1))',
  width:"fit-content",
  padding:1
}}
>
        <Link underline="hover"  color="text.primary" href="/">
          Home
        </Link>
        <Typography>Profile page</Typography>
      </Breadcrumbs>

      {/* Profile Section */}
      <Box
        sx={{
          backgroundImage:
            "url(/login.jpg)", // Replace with your background image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 2,
          overflow: "hidden",
          mt: 3,
        }}
      >
        <Grid container spacing={2} sx={{ p: 3, backdropFilter: "brightness(50%)" }}>
          <Grid item xs={12} sm={3}>
           
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" color="white" fontWeight="bold">
              Admal Aviation College
            </Typography>
            <Typography  color="white" component={"p"} sx={{fontWeight:"light",fontSize:"small"}}>
              Selangor, Malaysia
            </Typography>
            <Box
      sx={{
        background: 'rgba(0, 0, 0, 0.5)', // Transparent black background
        color: 'white',
        p: 2,
        mt:2,
        borderRadius: 1,
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Students */}
        <Grid item xs={12} sm={4} textAlign="center">
         <div className="flex  justify-center items-center">
         <PeopleIcon fontSize="large" />
         <Typography variant="body1" ml={1}>Students</Typography>
         </div>
          <Typography variant="h4">75,000+</Typography>
        </Grid>

        {/* Courses */}
        <Grid item xs={12} sm={4} textAlign="center">
        <div className="flex  justify-center items-center">
          <SchoolIcon fontSize="large" />
          <Typography variant="body1" ml={1}>Courses</Typography>
          </div>
          <Typography variant="h4">120+</Typography>
        </Grid>

        {/* Founded */}
        <Grid item xs={12} sm={4} textAlign="center">
        <div className="flex  justify-center items-center">
          <CalendarTodayIcon fontSize="large" />
          <Typography variant="body1" ml={1}>Founded</Typography>
          </div>
          <Typography variant="h4">1994</Typography>
        </Grid>
      </Grid>
    </Box>
          </Grid>

          {/* Action Buttons */}
          <Grid item xs={12} sm={3} sx={{ textAlign: "right",display:"flex",justifyContent:"center",alignItems:"end" }}>
           
            <Box sx={{ mt: 1 ,display:"flex",justifyContent:"center",alignItems:"center" }}>
              <Button
                variant="contained"
                startIcon={<ContentCopyIcon />}
                sx={{
                    background: "linear-gradient(90deg, #6a00f4, #a84dc7)",
                  color: "white",
                  textTransform: "none",
                  borderRadius: "5px",
                  
                }}
              >
                {!isMobile && 'Copy link'}
              </Button>
             <div className="ml-2 flex ">
             <IconButton sx={{ color: "white",    background: "linear-gradient(90deg, #6a00f4, #a84dc7)",  borderRadius: "5px",}}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: "white",     background: "linear-gradient(90deg, #6a00f4, #a84dc7)", ml:1, borderRadius: "5px",}}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: "white",    background: "linear-gradient(90deg, #6a00f4, #a84dc7)", ml:1, borderRadius: "5px",}}>
                <EmailIcon />
              </IconButton>
             </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProfilePage;
