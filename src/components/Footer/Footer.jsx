/* eslint-disable react/no-unescaped-entities */
import { Divider, Grid, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Facebook from "../../icons/facebook";
import Youtube from "../../icons/youtube";
import Linkedin from "../../icons/linkedin";
import Github from "../../icons/github";
import Triangle from "../../icons/triangle";
import CustomSwitch from "../Custom/Switch";
import Sun from "../../icons/sun";
import Moon from "../../icons/moon";
import Link from "next/link";

export default function Footer({ checked, change }) {
  return (
    <footer
      style={{ backgroundColor: "#010E28", color: "#ffffff", padding: "4em 0" }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "2em",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Typography variant="h5">Company</Typography>
            <Link href="/About">
              <Typography color="#999999">About</Typography>
            </Link>
            <Link href="/Zulfekar">
              <Typography color="#999999">Zulfekar</Typography>
            </Link>
            <Link href="/Data-Center" >
              <Typography color="#999999">Data center</Typography>
            </Link>
            <Link href="/Portfolio">
              <Typography color="#999999">Portfolio</Typography>
            </Link>
            <Link href="/Partners">
              <Typography color="#999999">Partners</Typography>
            </Link>
            <Link href="/Payment-Methods">
              <Typography color="#999999">Payment Methods</Typography>
            </Link>
            <Link href="/Hire-Us">
              <Typography color="#999999">Jobs – We&apos;re hiring!</Typography>
            </Link>
            <Link href="/Promos">
              <Typography color="#999999">Promos</Typography>
            </Link>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Typography variant="h5">Core Services</Typography>
            <Link href="/Website-Development">
              <Typography color="#999999">Website Development</Typography>
            </Link>
            <Link href="/Domain-Registration">
              <Typography color="#999999">Domain Registration</Typography>
            </Link>
            <Link href="/BD-Domain">
              <Typography color="#999999">Dot bd Domain</Typography>
            </Link>
            <Link href="/Reseller-Hosting">
              <Typography color="#999999">Reseller Hosting</Typography>
            </Link>
            <Link href="/Dedicated-Hosting">
              <Typography color="#999999">Dedicated Hosting</Typography>
            </Link>
            <Link href="/WHOIS">
              <Typography color="#999999">WHOIS</Typography>
            </Link>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Typography variant="h5">Resources</Typography>
            <Link href="/FAQ">
              <Typography color="#999999">FAQ</Typography>
            </Link>
            <Link href="/Developers">
              <Typography color="#999999">Developers / APIs</Typography>
            </Link>
            <Link href="/Server-Status">
              <Typography color="#999999">Server Status</Typography>
            </Link>
            <Link href="/Bug-Bounty">
              <Typography color="#999999">Bug Bounty</Typography>
            </Link>
            <Link href="/Browse-Reseller">
              <Typography color="#999999">Browse Reseller</Typography>
            </Link>
            <Link href="/Contact">
              <Typography color="#999999">Contact Sales</Typography>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              pr: { xs: "15px", md: "0" },
            }}
          >
            <Typography variant="h5">Support</Typography>
            <Link href="/Hire-an-expert">
              <Typography color="#999999">Hire an expert</Typography>
            </Link>
            <Link href="/Report-Abuse-or-Bug">
              <Typography color="#999999">Report Abuse / Bug</Typography>
            </Link>
            <Link href="/Submit-A-Ticket">
              <Typography color="#999999">Submit A Ticket</Typography>
            </Link>
            <Link href="/Knowledge-Base">
              <Typography color="#999999">Knowledge Base</Typography>
            </Link>
            <Link href="/Blog">
              <Typography color="#999999">Blog</Typography>
            </Link>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Typography variant="h5">Legal</Typography>
            <Link href="/Legal-Agreements">
              <Typography color="#999999">Legal Agreements</Typography>
            </Link>
            <Link href="/Terms-of-Service">
              <Typography color="#999999">Terms of Service</Typography>
            </Link>
            <Link href="/Privacy-Policy">
              <Typography color="#999999">Privacy Policy</Typography>
            </Link>
            <Link href="/Refund-Policy">
              <Typography color="#999999">Refund Policy</Typography>
            </Link>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap:'1.5rem' }}>
          <Link href="#">
            <Facebook />
          </Link>
          <Link href="#">
            <Youtube />
          </Link>
          <Link href="#">
            <Linkedin />
          </Link>
          <Link href="#">
            <Github />
          </Link>
        </Box>
        <Divider sx={{ my: "1.5em", bgcolor: "#222222" }} />
        <Grid container sx={{ alignItems: "center" }}>
          <Grid item lg={7}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link href="http://localhost:3000/">
                <Triangle />
              </Link>
              <Typography variant="body2" sx={{ display: "inline", mx: "1em" }}>
                © popcorn it 2013 - 2023 <br />
                Premium Hosting, Domain & Web Development Services. Prices are
                listed without VAT.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "#000000",
                p: "5px 10px",
                width: { lg: "72%", xs: "100%" },
              }}
            >
              <Typography variant="body2" sx={{ display: "inline" }}>
                Status:
              </Typography>
              <Box
                sx={{
                  height: "9px",
                  width: "9px",
                  borderRadius: "50%",
                  bgcolor: "#3FF300",
                  mx: "0.3em",
                }}
              ></Box>
              <Typography variant="body2" sx={{ display: "inline" }}>
                All systems normal.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={2}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"flex-end"}
            >
              <Sun />
              <CustomSwitch
                inputProps={{ "aria-label": "ant design" }}
                checked={checked}
                onClick={change}
              />
              <Moon />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
