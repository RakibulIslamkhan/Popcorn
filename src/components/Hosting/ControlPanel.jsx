import { ArrowRightAlt, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Stepper,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import elementor from "../../../public/assets/elementor.jpg";

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];
export default function ControlPanel() {
  const [expanded, setExpanded] = useState("panel2");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Box sx={{ bgcolor: "#001475", py: "3rem" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{ textAlign: "center", color: "#fff", my: {lg:"2rem",xs:'1rem'} }}
          >
            Popcorn Web Hosting Easy Control Panel.
          </Typography>
          <Box sx={{ display: "flex", gap: "2rem", alignItems: "center", flexDirection:{lg:'row', xs:'column'}}}>
            <Box>
              <Stepper orientation="vertical" className="step">
                {steps.map((item, index) => (
                  <Accordion
                    expanded={expanded === `panel${index + 1}`}
                    onChange={handleChange(`panel${index + 1}`)}
                    sx={{ mb: "1em", boxShadow: "none" }}
                    key={index}
                    className="step-single"
                    disableGutters
                  >
                    <AccordionSummary
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography sx={{ fontWeight: "bold" }}>
                        {item.label}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{item.description}</Typography>
                      <Typography sx={{ my: "1em", color: "#207AFD" }}>
                        <Link href={"#"}>
                          Order Now{" "}
                          <ArrowRightAlt sx={{ verticalAlign: "middle" }} />
                        </Link>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Stepper>
            </Box>
            <Box>
              <Image src={elementor} alt="elementor" width={450} height={300} className='img-fluid' />
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
