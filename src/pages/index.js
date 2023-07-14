import { Search } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Migrate from "../components/Dedicate/Migrate";
import Choose from "../components/Home/Choose";
import DreamHost from "../components/Home/DreamHost";
import Gallery from "../components/Home/Gallery";
import Plan from "../components/Home/Plan";
export default function Home() {
  return (
    <>
      <Head>
        <title>
          POPCORN IT – Web Hosting, WordPress Hosting, Reseller Hosting, VPS
          Hosting, Domain Registration, BDIX Hosting, .bd Domain, Web
          Development in Bangladesh
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          bgcolor: "#000F57",
          pt: {lg:"8rem", xs:"2rem"},
          color: "#fff",
          borderBottomRightRadius: "5rem",
          height: { lg: "600px", xs: "100%" },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", gap: 5, alignItems: "center", flexDirection:{lg:'row', xs:'column'} }}>
            <Box>
              <Typography variant="h2">
                The Managed Web Hosting Service
              </Typography>
              <Typography sx={{ my: "2rem" }}>
                Collaboratively pursue future-proof networks rather than backend
                ideas. Quickly deploy leading-edge content through enabled web
                services.
              </Typography>
              <Button variant="contained">Register Now</Button>
            </Box>
            <Box>
              <img
                src="https://popcorn.com.bd/wp-content/uploads/2022/11/P3SBhom5M9s-1536x960.png"
                alt="hero"
                height={300}
                className="img-fluid"
              />
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={{ bgcolor: "background.default" }}>
        <Container maxWidth="md">
          <Paper
            elevation={1}
            sx={{ px: "2rem",py:'1rem', transform: {lg:"translateY(-65px)", xs:'translateY(0px)'} }}
          >
            <Box
              sx={{
                display: "flex",
                // gap: '5px',
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection:{lg:'row', xs:'column'}
              }}
            >
              <Box>
                <Typography variant="h4" gutterBottom>Choose Your Domain Today!</Typography>
                <ButtonGroup
                  disableElevation
                  variant="contained"
                  aria-label="Disabled elevation buttons"
                  sx={{ mt: "1rem", '& .MuiOutlinedInput-root':{borderRadius:'0'}, width:'100%'}}
                >
                  <TextField placeholder="Search your Domain" sx={{borderRadius:'0'}}/>
                  <Button sx={{borderRadius:'0'}} startIcon={<Search/>}>Search</Button>
                </ButtonGroup>
              </Box>
              <Box>
                <img
                  src="https://popcorn.com.bd/wp-content/uploads/2022/11/bd-Domain-offer-01.png"
                  alt="hero"
                  height={200}
                />
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Plan />
      <Migrate />
      <Gallery />
      <Choose/>
      <DreamHost/>
    </>
  );
}
