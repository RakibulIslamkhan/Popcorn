import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { dummyData } from "../../dummyData";
import Link from "next/link";

export default function Question() {
  const [expanded, setExpanded] = useState('panel1');
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box
      sx={{ bgcolor: "background.default", py: "3rem", color: "text.primary" }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            color: "#1A73E8",
            my: "2em",
            fontWeight: "bold",
          }}
        >
          Got Question? <br /> Well, we&apos;ve got answer.
        </Typography>
        {dummyData.map((item, index) => {
          return (
            <Accordion
              expanded={expanded === `panel${index + 1}`}
              onChange={handleChange(`panel${index + 1}`)}
              sx={{ mb: "1em", boxShadow: "none" }}
              key={index}
              disableGutters
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ fontWeight: "bold" }}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.answer}</Typography>
                <Typography sx={{ my: "1em", color: "#207AFD" }}>
                  <Link href={"#"}>
                    Order Now{" "}
                    <ArrowRightAltIcon sx={{ verticalAlign: "middle" }} />
                  </Link>
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Container>
    </Box>
  );
}
