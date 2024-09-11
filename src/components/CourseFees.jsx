'use client'
import React from "react";
import {
  Box,
  Container,
  Typography,
  Tab,
  Tabs,
  InputBase,
  Grid,
  Paper,
  Button,
  Link,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const CourseFees = () => {
    
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Title */}
     
      <Typography variant="h5" gutterBottom>
      Admal Aviation College
        <Typography component="span" sx={{ color: "#6a00f4", fontWeight: "bold" }}>
      &nbsp;   Courses & Fees
        </Typography>
      </Typography>
      

      {/* Tabs */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 3 }}>
        <Tabs value={0}  sx={{
            // "& .MuiTab-root": {
            //   color: "#6a00f4", // Custom text color
            // },
            "& .Mui-selected": {
              color: "#ffff !important", // Custom text color when tab is selected
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#6a00f4 !important",
              mt:'10px', // Custom indicator color
            },
          }}>
          <Tab label="All" sx={{ fontWeight: "bold", color: "#fff", background: "linear-gradient(90deg, #6a00f4, #a84dc7)", borderRadius: 1, mr: 2 }} />
          <Tab label="Undergraduate" sx={{ fontWeight: "bold", mr: 2 }} />
          <Tab label="Postgraduate" sx={{ fontWeight: "bold", mr: 2 }} />
          <Tab label="Doctorate" sx={{ fontWeight: "bold" }} />
        </Tabs>

        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: 1,
            backgroundColor: "#f1f1f1",
            padding: "4px 10px",
          }}
        >
          <SearchIcon />
          <InputBase placeholder="Search Courses" sx={{ ml: 1, flex: 1 }} />
        </Box>
      </Box>

      {/* Course Cards */}
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {[...Array(4)].map((_, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                // border: "1px solid #f1f1f1",
                // borderRadius: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "" }}>
                CAAM Part-66 Program CAT B2 Avionics
              </Typography>
              <Box sx={{ display:{xs:"none",md:"flex"}, mt: 2 }}>
                <Typography
                  variant="body2"
                  sx={{
                    backgroundColor: "#f5f5f5",
                    padding: "2px 8px",
                    whiteSpace:"nowrap",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    
                    borderRadius: 10,
                    // fontWeight: "bold",
                  }}
                >
                  48 Months
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    backgroundColor: "#f5f5f5",
                    padding: "2px 8px",
                    borderRadius: 10,
                    whiteSpace:"nowrap",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    
                    // fontWeight: "bold",
                  }}
                >
                  Full Time
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    backgroundColor: "#f5f5f5",
                    padding: "2px 8px",
                    whiteSpace:"nowrap",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    borderRadius: 10,
                    // fontWeight: "bold",
                  }}
                >
                  Jul & Oct
                </Typography>
              </Box>
              <Divider  sx={{mt:2}}/>
      <Box sx={{display:"flex"}}>


              <Typography variant="body2" sx={{ mt: 2,  }}>
                From <strong>$142</strong> - $380 / <strong>Year</strong>
              </Typography>

              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  background: "linear-gradient(90deg, #6a00f4, #a84dc7)",
                  color: "#fff",
                  textTransform: "none",
                //   borderRadius: "20px",
                }}
                fullWidth
              >
                Apply Now
              </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* View All */}
      <Box sx={{ mt: 3 }}>
        <Link href="#" sx={{ textDecoration: "none", fontWeight: "bold", color: "#6a00f4" }}>
          View all
        </Link>
      </Box>
    </Container>
  );
};

export default CourseFees;
