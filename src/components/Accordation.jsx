'use client'
import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const AccommodationFacilities = () => {
  // Array to hold all facilities information
  const facilities = [
    {
      icon: <LibraryBooksIcon sx={{ fontSize: 50, color: "#6a00f4" }} />,
      title: "Library",
      description: "63,476 Books",
      bgColor: "#f1f1f1",
      color: "#6a00f4",
    },
    {
      icon: <FitnessCenterIcon sx={{ fontSize: 50, color: "#000" }} />,
      title: "Fitness Centre",
      description: "Special Equipment's",
      bgColor: "#e1f5fe",
      color: "#000",
    },
    {
      icon: <PrecisionManufacturingIcon sx={{ fontSize: 50, color: "#f44336" }} />,
      title: "Labs & Workshop",
      description: "Practical Class",
      bgColor: "#ffebee",
      color: "#f44336",
    },
    {
      icon: <BeachAccessIcon sx={{ fontSize: 50, color: "#ff9800" }} />,
      title: "Student Lounge",
      description: "Relaxation",
      bgColor: "#fff3e0",
      color: "#ff9800",
    },
    {
      icon: <EmojiPeopleIcon sx={{ fontSize: 50, color: "#4caf50" }} />,
      title: "Prayer Room",
      description: "Devotional",
      bgColor: "#e8f5e9",
      color: "#4caf50",
    },
    {
      icon: <AcUnitIcon sx={{ fontSize: 50, color: "#ffeb3b" }} />,
      title: "All Class Room",
      description: "with A/C",
      bgColor: "#fffde7",
      color: "#ffeb3b",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
    
      <Typography variant="h5" gutterBottom sx={{color:"#000 !important",}}>
      Admal Aviation College
        <Typography component="span" sx={{ color: "#6a00f4 ", fontWeight: "bold" }}>
      &nbsp;  Accommodation & Facilities
        </Typography>
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {facilities.map((facility, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                display: "flex",
                // flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 4,
                backgroundColor: facility.bgColor,
                borderRadius: 2,
                minHeight: "150px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              {facility.icon}
             <div>
             <Typography variant="h6" sx={{  mt: 2, color: facility.color }}>
                {facility.title}
              </Typography>
              <Typography sx={{ color: "gray", mt: 1 }}>{facility.description}</Typography>
             </div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AccommodationFacilities;
