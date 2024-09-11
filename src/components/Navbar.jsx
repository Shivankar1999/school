'use client'
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Container,
} from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
  const [coursetab, setcoursetab] = useState(null);
  const [institution, setinstitution] = useState(null);
  const [guide, setguide] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="xxl" sx={{boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)"}}>
        <Toolbar>
          {/* Logo */}
          <Typography
            variant="h6"
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

          {/* Desktop Menu */}
          {!isMobile ? (
            <>
              <Button
                // color="inherit"
                endIcon={<ArrowDropDownIcon />}
                onClick={(e) => setcoursetab(e.currentTarget)}
                sx={{textTransform:"capitalize",color:"#000 !important",}}
              >
                Courses
              </Button>
              <Menu
                anchorEl={coursetab}
                open={Boolean(coursetab)}
                onClose={(e) => setcoursetab(null)}
              >
                <MenuItem onClick={(e) => setcoursetab(null)}>Course 1</MenuItem>
                <MenuItem onClick={(e) => setcoursetab(null)}>Course 2</MenuItem>
              </Menu>

              <Button
            
                endIcon={<ArrowDropDownIcon />}
                onClick={(e) => setinstitution(e.currentTarget)}
                sx={{textTransform:"capitalize",color:"#000 !important",}}
              >
                Institutions
              </Button>
              <Menu
                anchorEl={institution}
                open={Boolean(institution)}
                onClose={(e) => setinstitution(null)}
              >
                <MenuItem onClick={(e) => setinstitution(null)}>Institution 1</MenuItem>
                <MenuItem onClick={(e) => setinstitution(null)}>Institution 2</MenuItem>
              </Menu>

              <Button
              
                endIcon={<ArrowDropDownIcon />}
                onClick={(e) => setguide(e.currentTarget)}
                sx={{textTransform:"capitalize",color:"#000 !important",}}
              >
                Essential Guide
              </Button>
              <Menu
                anchorEl={guide}
                open={Boolean(guide)}
                onClose={(e) => setguide(null)}
              >
                <MenuItem onClick={(e) => setguide(null)}>Guide 1</MenuItem>
                <MenuItem onClick={(e) => setguide(null)}>Guide 2</MenuItem>
              </Menu>

              <Button  sx={{textTransform:"capitalize",color:"#000 !important",}}>Scholarships</Button>
              <Button   sx={{textTransform:"capitalize",color:"#000 !important",}}>Internships</Button>

              <Button  sx={{ marginLeft: 2,textTransform:"capitalize", fontWeight:"bold",
                background: "linear-gradient(90deg, #6a00f4, #a84dc7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent", }}>
                Login
              </Button>
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(90deg, #6a00f4, #a84dc7)",
                  color: "white",
                  borderRadius: "5px",
                  marginLeft: 2,
                  textTransform:"capitalize"
                }}
              >
                Start your Journey
              </Button>
            </>
          ) : (
            <>
              {/* Mobile Menu Button */}
            <Button size="small" >
                <Typography  sx={{fontSize:"12px",textTransform:"capitalize", color: "purple",mr:1,textDecoration:"underline"}}>Login/Start your journey</Typography>
            </Button>
              <IconButton
                edge="start"
                sx={{color:"#000 !important",}}
                aria-label="menu"
                onClick={handleMobileMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={mobileMenuAnchorEl}
                open={Boolean(mobileMenuAnchorEl)}
                onClose={handleMobileMenuClose}
              >
                <MenuItem onClick={handleMobileMenuClose}>Courses</MenuItem>
                <MenuItem onClick={handleMobileMenuClose}>Institutions</MenuItem>
                <MenuItem onClick={handleMobileMenuClose}>Essential Guide</MenuItem>
                <MenuItem onClick={handleMobileMenuClose}>Scholarships</MenuItem>
                <MenuItem onClick={handleMobileMenuClose}>Internships</MenuItem>
                <MenuItem onClick={handleMobileMenuClose}>Login</MenuItem>
                <MenuItem onClick={handleMobileMenuClose}>
                <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(90deg, #6a00f4, #a84dc7)",
                  color: "white",
                  borderRadius: "5px",
              
                  textTransform:"capitalize"
                }}
              >
                Start your Journey
              </Button>
                </MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
