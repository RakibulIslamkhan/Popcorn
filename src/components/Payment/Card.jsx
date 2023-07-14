import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import American from "../../icons/american";
import MasterCard from "../../icons/mastercard";
import Paypal from "../../icons/paypal";
import Visa from "../../icons/visa";

export default function Card() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.default",
          py: "3rem",
          color: "text.primary",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{ textAlign: "center", fontWeight: "bold", mb: "0.6em" }}
          >
            We Accepted
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              gap: "1rem",
            }}
          >
            <Box
              sx={{
                border: "3px solid #E7EBEC",
                borderRadius: "8px",
                p: "1em",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MasterCard />
            </Box>
            <Box
              sx={{
                border: "3px solid #E7EBEC",
                borderRadius: "8px",
                p: "1em",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Visa />
            </Box>
            <Box
              sx={{
                border: "3px solid #E7EBEC",
                borderRadius: "8px",
                p: "1em",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <American />
            </Box>
            <Box
              sx={{
                border: "3px solid #E7EBEC",
                borderRadius: "8px",
                p: "1em",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Paypal />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
