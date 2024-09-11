'use client'

import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, IconButton, Box } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIosNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const videos = [
    {
      title: 'Student Library',
      imgSrc: `https://picsum.photos/id/1/200/300`
    },
    {
      title: 'College Courses',
      imgSrc:  `https://picsum.photos/id/2/200/300`
    },
    {
      title: 'Students Thoughts',
      imgSrc:  `https://picsum.photos/id/3/200/300`
    },
    {
      title: 'Aviation Basics',
      imgSrc:  `https://picsum.photos/id/4/200/300`
    },
    {
      title: 'Engineering Tips',
      imgSrc:  `https://picsum.photos/id/5/200/300`
    },
    {
      title: 'Flight Simulator',
      imgSrc:  `https://picsum.photos/id/6/200/300`
    },
  ];
  
  const VideoSection = () => {
    const [page, setPage] = useState(0);
    const videosPerPage = 3;
  
    // Calculate total pages
    const totalPages = Math.ceil(videos.length / videosPerPage);
  
    // Get videos to display based on the current page
    const videosToDisplay = videos.slice(page * videosPerPage, (page + 1) * videosPerPage);
  
    const handleNext = () => {
      if (page < totalPages - 1) {
        setPage(page + 1);
      }
    };
  
    const handlePrevious = () => {
      if (page > 0) {
        setPage(page - 1);
      }
    };
  
    return (
      <Box sx={{ padding: '2rem', textAlign: 'left' }}>
       
        <Typography variant="h5" gutterBottom className='mb-4'>
      Admal Aviation College
        <Typography component="span" sx={{ color: "#6a00f4", fontWeight: "bold" }}>
      &nbsp;  Videos
        </Typography>
      </Typography>
        <Grid container spacing={2} justifyContent="center">
          {videosToDisplay.map((video, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} >
              <Card sx={{ position: 'relative'}} >
                <CardMedia component="img" height="400" image={video.imgSrc} alt={video.title} />
                <CardContent
                  sx={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: '#fff',
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {video.title}
                  </Typography>
                  <IconButton>
                    <PlayCircleIcon sx={{ color: '#6f3fbf', fontSize: 50 }} />
                  </IconButton>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
  
        <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: '1.5rem' }}>
          <IconButton
            onClick={handlePrevious}
            disabled={page === 0}
            sx={{ backgroundColor: '#6f3fbf', color: '#fff', marginRight: '0.5rem' }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={handleNext}
            disabled={page === totalPages - 1}
            sx={{ backgroundColor: '#6f3fbf', color: '#fff', marginLeft: '0.5rem' }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box>
    );
  };
  
  export default VideoSection;
  
