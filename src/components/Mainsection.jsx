'use client'

import { Box, Grid, Tabs, Tab, Typography, Card, CardContent, Button, Container } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VideoSection from './VideoGallery';
import CourseFees from './CourseFees';
import FAQSection from './FAQ';
import AccommodationFacilities from './Accordation';
import SideForm from './SideForm';
// Define a function to create the tab content
function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const CollegePage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [readMore, setreadMore] = useState(null)
  // Handle tab change
  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
    <Grid container  spacing={4}>
      {/* Left Section with Tabs */}
      <Grid item xs={12} md={8}>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
        //   textColor="#6a00f4"
        //   indicatorColor="primary"
          sx={{
            // "& .MuiTab-root": {
            //   color: "#6a00f4", // Custom text color
            // },
            "& .Mui-selected": {
              color: "#6a00f4 !important", // Custom text color when tab is selected
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#6a00f4",
              mt:'10px', // Custom indicator color
            },
          }}
          
        >
          <Tab label="Overview"   sx={{textTransform:"capitalize",
          fontSize: tabIndex === 0 ? '1.2rem' : '1rem',  // Larger font for active tab
          fontWeight: tabIndex === 0 ? 'bold' : 'normal',  // Bold for active tab
        }}/>
          <Tab label="Videos"   sx={{textTransform:"capitalize",
          fontSize: tabIndex === 1 ? '1.2rem' : '1rem',  // Larger font for active tab
          fontWeight: tabIndex === 1 ? 'bold' : 'normal',  // Bold for active tab
        }}/>
          <Tab label="Courses"   sx={{textTransform:"capitalize",
          fontSize: tabIndex === 2 ? '1.2rem' : '1rem',  // Larger font for active tab
          fontWeight: tabIndex === 2 ? 'bold' : 'normal',  // Bold for active tab
        }}/>
          <Tab label="Rankings"   sx={{textTransform:"capitalize",
          fontSize: tabIndex === 3 ? '1.2rem' : '1rem',  // Larger font for active tab
          fontWeight: tabIndex === 3 ? 'bold' : 'normal',  // Bold for active tab
        }}/>
          <Tab label="Scholarships"   sx={{textTransform:"capitalize",
          fontSize: tabIndex === 4? '1.2rem' : '1rem',  // Larger font for active tab
          fontWeight: tabIndex === 4 ? 'bold' : 'normal',  // Bold for active tab
        }}/>
          <Tab label="Testimonials"   sx={{textTransform:"capitalize",
          fontSize: tabIndex === 5 ? '1.2rem' : '1rem',  // Larger font for active tab
          fontWeight: tabIndex === 5 ? 'bold' : 'normal',  // Bold for active tab
        }} />
          <Tab label="News"   sx={{textTransform:"capitalize",
          fontSize: tabIndex === 6 ? '1.2rem' : '1rem',  // Larger font for active tab
          fontWeight: tabIndex === 6 ? 'bold' : 'normal',  // Bold for active tab
        }}/>
          <Tab label="FAQ's"   sx={{textTransform:"capitalize",
          fontSize: tabIndex === 7 ? '1.2rem' : '1rem',  // Larger font for active tab
          fontWeight: tabIndex === 7 ? 'bold' : 'normal',  // Bold for active tab
        }} />
        </Tabs>

        {/* Tab Panels for different content */}
        <TabPanel value={tabIndex} index={0}>
            <div className='mb-2'>

          
          <Typography variant="h5" sx={{color: "#6a00f4",fontWeight:"bold"}}>Why study at Admal Aviation College</Typography>
          <Typography variant="body1">
            <span style={{ color:"#000 !important", fontWeight: 'bold' }}>
                <CheckCircleIcon sx={{color: 'lightgreen',}}/></span> Part-147 Approved by Civil Aviation Authority of Malaysia
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 ,color:"#000 !important",}}>
            The ONLY Part-147 Approved Training Organization with its own Part-145 Approved Maintenance Organization.
          </Typography>
         {!readMore &&(          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            The ONLY Part-147 Approved Training Organization with its own Part-145 Approved Maintenance Organization.
          </Typography>)}
          {readMore && (
            <>
             <Typography variant="body2" sx={{ mt: 1,color:"#000 !important", }}>
            The ONLY Part-147 Approved Training Organization with its own Part-145 Approved Maintenance Organization.
          </Typography>
          <Typography variant="body2"  sx={{ mt: 1,color:"#000 !important", }}>
            The ONLY Part-147 Approved Training Organization with its own Part-145 Approved Maintenance Organization.
          </Typography>
             <Typography variant="body2" sx={{ mt: 1 ,color:"#000 !important",}}>
            The ONLY Part-147 Approved Training Organization with its own Part-145 Approved Maintenance Organization.
          </Typography>
          <Typography variant="body2"  sx={{ mt: 1,color:"#000 !important", }}>
            The ONLY Part-147 Approved Training Organization with its own Part-145 Approved Maintenance Organization.
          </Typography>
            </>
          )}
       
           <Button onClick={() => setreadMore(!readMore)} 
           sx={{color:"#6a00f4",textTransform:"capitalize",fontSize:'small'}}> 
           {readMore ? (<ArrowBackIosIcon fontSize='small' sx={{textTransform:"capitalize"}} />):"Read more"}</Button>
          
          </div>
          <div>
            <VideoSection />
          </div>
          <div>
            <CourseFees />
          </div>
          <div>
            <AccommodationFacilities />
          </div>
          <div>
            <FAQSection />
          </div>
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <Typography variant="h5">Admal Aviation College Videos</Typography>
          {/* Add your video or video content here */}
        </TabPanel>
        {/* Add more TabPanel components for other tabs as needed */}
      </Grid>

      {/* Right Sidebar */}
      <Grid item xs={12} md={4}>
        {/* Rankings Card */}
        <Card sx={{ mb: 4 }}>
          <CardContent sx={{backgroundColor:"lightgray"}}>
          <Box className='flex' >
          <Typography variant="h5" sx={{mr:"auto",color: "#6a00f4",fontWeight:"bolder"}}>
             <EmojiEventsIcon fontSize='large'/> Ranking
            </Typography>
            <Typography variant="body2" sx={{color: "#6a00f4",}} >
              Year <br /> <strong style={{fontSize:"21px"}}>2024</strong>
            </Typography>
          </Box>
          </CardContent>
          <CardContent>
            <Typography variant="body1" className='flex mb-2'>
              QS World University Rankings: <strong className='ml-auto' style={{color: "#6a00f4",fontSize:"20px"}}>22<sub>nd</sub></strong>
            </Typography>
            <Typography variant="body1" className='flex mb-2'>
              THE World University Rankings: <strong className='ml-auto' style={{color: "#6a00f4",fontSize:"20px"}}>11<sub>th</sub></strong>
            </Typography>
          </CardContent>
        </Card>

        {/* Apply Button Card */}
        <Card>
          <CardContent sx={{backgroundColor:"#eee",p:4}}>
            <Typography variant="body1">Would you like to apply to Admal Aviation College?</Typography>
            <Button variant="contained"   sx={{
                  background: "linear-gradient(90deg, #6a00f4, #a84dc7)",
                  color: "white",
                  borderRadius: "5px",
                  mt:2,
              
                  textTransform:"capitalize"
                }}>
              Apply Online
            </Button>
          </CardContent>
        </Card>
        <Card className='mt-4'>
            <SideForm />
        </Card>
      </Grid>
    </Grid>
    </Container>
  );
};

export default CollegePage;
