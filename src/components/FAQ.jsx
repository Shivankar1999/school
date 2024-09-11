'use client'
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {/* Title */}
      <Typography variant="h5" gutterBottom sx={{color:"#000 !important",}}>
        FAQ
        <Typography component="span" sx={{ color: "#6a00f4", fontWeight: "bold" }}>
          's
        </Typography>
      </Typography>

      {/* FAQ Items */}
      <Box>
        {/* First Accordion */}
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{ mb: 2, border: "1px solid #f1f1f1", borderRadius: 1 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ fontWeight: "bold" }}
          >
            When are the intakes at Admal Aviation College?
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Admal Aviation College offers intakes in July and October each year.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Second Accordion */}
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{ mb: 2, border: "1px solid #f1f1f1", borderRadius: 1 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ fontWeight: "bold" }}
          >
            What are the popular courses in Admal Aviation College?
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Popular courses include aircraft maintenance engineering, aviation management, and pilot training.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Third Accordion */}
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          sx={{ mb: 2, border: "1px solid #f1f1f1", borderRadius: 1 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            sx={{ fontWeight: "bold" }}
          >
            Are scholarships available at Admal Aviation College?
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, Admal Aviation College provides scholarships based on merit and financial need.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Fourth Accordion */}
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          sx={{ mb: 2, border: "1px solid #f1f1f1", borderRadius: 1 }}
          
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
            sx={{ fontWeight: "bold" }}
           
          >
            Why study at Admal Aviation College?
          </AccordionSummary>
          <AccordionDetails >
            <Typography>
              Apart from being a college with its own fleet of 14 aircraft, Admal Aviation College is the only Part 147 Approved Training Organization that is also a Civil Aviation Authority of Malaysia (CAAM) Part 145 Approved Maintenance Organization. ADMAL also has the Continuing Airworthiness Management Organization Approval (CAMO).
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
};

export default FAQSection;
