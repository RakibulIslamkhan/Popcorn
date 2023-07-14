import { Check } from "@mui/icons-material";
import { TabContext, TabPanel } from "@mui/lab";
import {
  Box,
  Button,
  Container,
  Paper,
  styled,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const AntTabs = styled((props) =><Tabs {...props}/>)(({theme}) =>({
  "& .MuiTabs-indicator": {
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiTabs-flexContainer": {
        flexWrap: "wrap",
        justifyContent: "center",
    }
  }
})
);

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightBold,
    marginRight: theme.spacing(1),
    "&.Mui-selected": {
      background: "linear-gradient(95.45deg, #0082F8 0.64%, #1C40F2 98.23%)",
      borderRadius: "2rem",
      color: "#fff",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);

export default function Plan() {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
          <Box>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              <span>Choose</span> Awesome Plan for <br /> your Needs
            </Typography>
            <TabContext value={value}>
              <Paper
                elevation={0}
                sx={{
                  width: {lg:"50%", xs:"100%"},
                  p: "0.5rem",
                  mt: "2rem",
                  mx: "auto",
                  borderRadius: {lg:"2rem", xs:'5px'},
                }}
              >
                <AntTabs
                  value={value}
                  onChange={handleChange}
                  aria-label="ant example"
                >
                  <AntTab label="Shared Hosting" value="1" />
                  <AntTab label="BDIX Hosting" value="2" />
                  <AntTab label="Private Server" value="3" />
                  <AntTab label="Dedicated Server" value="4" />
                </AntTabs>
              </Paper>
              <Box>
                <TabPanel value="1">
                  <Box sx={{ display: "flex", gap: "1.5rem", justifyContent:'center', flexDirection:{lg:'row', xs:'column'} }}>
                    <Paper
                      elevation={0}
                      sx={{ mt: "2rem", p:'1.5rem', maxWidth:{lg:'350px', xs:'100%'}, borderRadius: "0.5rem" }}
                    >
                      <img src="https://hostim.themetags.com/wp-content/uploads/2022/09/protect_icon.svg" alt="" />
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      3GB NVMe SSD
                      </Typography>
                      <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                      <Typography variant="body2" fontWeight={'bold'}>
                        <span style={{ fontSize: "3rem" }}>৳ 2500</span>/year
                      </Typography>
                      <Typography variant="h6" fontWeight={'bold'} sx={{color:'#666666', textDecoration:'line-through'}}>৳ 5500</Typography>
                      </Box>
                      <Typography variant="body1" sx={{my:'1rem'}}>Packed with great features, such as one click software installs, 24/7 support.</Typography>
                      <li style={{marginTop:'1rem'}}>2 Websites</li>
                      <li style={{marginTop:'1rem'}}>3GB SSD Storage</li>
                      <li style={{marginTop:'1rem'}}>30 GB Bandwidth</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Email Account</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Databases</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Subdomains</li>
                      <li style={{marginTop:'1rem'}}>Free SSL certificate</li>
                      <li style={{marginTop:'1rem'}}>Free cPanel</li>
                      <Button
                        variant="outlined"
                        sx={{ mt: "1rem", width: "100%", borderRadius: "20px" }}
                      >
                        Buy Now
                      </Button>
                    </Paper>
                    <Paper
                      elevation={0}
                      sx={{
                        mt: "2rem",
                        p:'1.5rem',
                        position: "relative",
                        overflow: "hidden",
                        maxWidth:{lg:'350px', xs:'100%'}, borderRadius: "0.5rem"
                      }}
                    >
                      <span className="most_popular_badge">Most Popular</span>
                      <img src="https://hostim.themetags.com/wp-content/uploads/2022/09/settings_icon.svg" alt="" />
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      3GB NVMe SSD
                      </Typography>
                      <Typography variant="body2" fontWeight={'bold'}>
                        <span style={{ fontSize: "3rem" }}>৳ 2500</span>/year
                      </Typography>
                      <Typography variant="body1" sx={{my:'1rem'}}>Packed with great features, such as one click software installs, 24/7 support.</Typography>
                      <li style={{marginTop:'1rem'}}>2 Websites</li>
                      <li style={{marginTop:'1rem'}}>3GB SSD Storage</li>
                      <li style={{marginTop:'1rem'}}>30 GB Bandwidth</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Email Account</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Databases</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Subdomains</li>
                      <li style={{marginTop:'1rem'}}>Free SSL certificate</li>
                      <li style={{marginTop:'1rem'}}>Free cPanel</li>
                      <Button
                        variant="contained"
                        sx={{ mt: "1rem", width: "100%", borderRadius: "20px" }}
                      >
                        Buy Now
                      </Button>
                    </Paper>
                    <Paper
                      elevation={0}
                      sx={{ mt: "2rem", p:'1.5rem', maxWidth:{lg:'350px', xs:'100%'}, borderRadius: "0.5rem" }}
                    >
                      <img src="https://hostim.themetags.com/wp-content/uploads/2022/09/server_icon.svg" alt="" />
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      3GB NVMe SSD
                      </Typography>
                      <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                      <Typography variant="body2" fontWeight={'bold'}>
                        <span style={{ fontSize: "3rem" }}>৳ 2500</span>/year
                      </Typography>
                      <Typography variant="h6" fontWeight={'bold'} sx={{color:'#666666', textDecoration:'line-through'}}>৳ 5500</Typography>
                      </Box>
                      <Typography variant="body1" sx={{my:'1rem'}}>Packed with great features, such as one click software installs, 24/7 support.</Typography>
                      <li style={{marginTop:'1rem'}}>2 Websites</li>
                      <li style={{marginTop:'1rem'}}>3GB SSD Storage</li>
                      <li style={{marginTop:'1rem'}}>30 GB Bandwidth</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Email Account</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Databases</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Subdomains</li>
                      <li style={{marginTop:'1rem'}}>Free SSL certificate</li>
                      <li style={{marginTop:'1rem'}}>Free cPanel</li>
                      <Button
                        variant="outlined"
                        sx={{ mt: "1rem", width: "100%", borderRadius: "20px" }}
                      >
                        Buy Now
                      </Button>
                    </Paper>
                  </Box>
                </TabPanel>
                <TabPanel value="2">
                <Box sx={{ display: "flex", gap: "1.5rem", justifyContent:'center', flexDirection:{lg:'row', xs:'column'} }}>
                <Paper
                      elevation={0}
                      sx={{ mt: "2rem", p:'1.5rem', maxWidth:{lg:'350px', xs:'100%'}, borderRadius: "0.5rem" }}
                    >
                      <img src="https://hostim.themetags.com/wp-content/uploads/2022/09/server_icon.svg" alt="" />
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      3GB NVMe SSD
                      </Typography>
                      <Typography variant="body2" fontWeight={'bold'}>
                        <span style={{ fontSize: "3rem" }}>৳ 2500</span>/year
                      </Typography>
                      <Typography variant="body1" sx={{my:'1rem'}}>Packed with great features, such as one click software installs, 24/7 support.</Typography>
                      <li style={{marginTop:'1rem'}}>2 Websites</li>
                      <li style={{marginTop:'1rem'}}>3GB SSD Storage</li>
                      <li style={{marginTop:'1rem'}}>30 GB Bandwidth</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Email Account</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Databases</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Subdomains</li>
                      <li style={{marginTop:'1rem'}}>Free SSL certificate</li>
                      <li style={{marginTop:'1rem'}}>Free cPanel</li>
                      <Button
                        variant="outlined"
                        sx={{ mt: "1rem", width: "100%", borderRadius: "20px" }}
                      >
                        Buy Now
                      </Button>
                    </Paper>
                    <Paper
                      elevation={0}
                      sx={{
                        mt: "2rem",
                        p:'1.5rem',
                        position: "relative",
                        overflow: "hidden",
                        maxWidth:{lg:'350px', xs:'100%'}, borderRadius: "0.5rem"
                      }}
                    >
                      <span className="most_popular_badge">Most Popular</span>
                      <img src="https://hostim.themetags.com/wp-content/uploads/2022/09/server_icon.svg" alt="" />
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      3GB NVMe SSD
                      </Typography>
                      <Typography variant="body2" fontWeight={'bold'}>
                        <span style={{ fontSize: "3rem" }}>৳ 2500</span>/year
                      </Typography>
                      <Typography variant="body1" sx={{my:'1rem'}}>Packed with great features, such as one click software installs, 24/7 support.</Typography>
                      <li style={{marginTop:'1rem'}}>2 Websites</li>
                      <li style={{marginTop:'1rem'}}>3GB SSD Storage</li>
                      <li style={{marginTop:'1rem'}}>30 GB Bandwidth</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Email Account</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Databases</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Subdomains</li>
                      <li style={{marginTop:'1rem'}}>Free SSL certificate</li>
                      <li style={{marginTop:'1rem'}}>Free cPanel</li>
                      <Button
                        variant="contained"
                        sx={{ mt: "1rem", width: "100%", borderRadius: "20px" }}
                      >
                        Buy Now
                      </Button>
                    </Paper>
                    <Paper
                      elevation={0}
                      sx={{ mt: "2rem", p:'1.5rem', maxWidth:{lg:'350px', xs:'100%'}, borderRadius: "0.5rem" }}
                    >
                      <img src="https://hostim.themetags.com/wp-content/uploads/2022/09/server_icon.svg" alt="" />
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      3GB NVMe SSD
                      </Typography>
                      <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                      <Typography variant="body2" fontWeight={'bold'}>
                        <span style={{ fontSize: "3rem" }}>৳ 2500</span>/year
                      </Typography>
                      <Typography variant="h6" fontWeight={'bold'} sx={{color:'#666666', textDecoration:'line-through'}}>৳ 5500</Typography>
                      </Box>
                      <Typography variant="body1" sx={{my:'1rem'}}>Packed with great features, such as one click software installs, 24/7 support.</Typography>
                      <li style={{marginTop:'1rem'}}>2 Websites</li>
                      <li style={{marginTop:'1rem'}}>3GB SSD Storage</li>
                      <li style={{marginTop:'1rem'}}>30 GB Bandwidth</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Email Account</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Databases</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Subdomains</li>
                      <li style={{marginTop:'1rem'}}>Free SSL certificate</li>
                      <li style={{marginTop:'1rem'}}>Free cPanel</li>
                      <Button
                        variant="outlined"
                        sx={{ mt: "1rem", width: "100%", borderRadius: "20px" }}
                      >
                        Buy Now
                      </Button>
                    </Paper>
                  </Box>
                </TabPanel>
                <TabPanel value="3">
                <Box sx={{ display: "flex", gap: "1.5rem", justifyContent:'center', flexDirection:{lg:'row', xs:'column'} }}>
                <Paper
                      elevation={0}
                      sx={{ mt: "2rem", p:'1.5rem', maxWidth:{lg:'350px', xs:'100%'}, borderRadius: "0.5rem" }}
                    >
                      <img src="https://hostim.themetags.com/wp-content/uploads/2022/09/protect_icon.svg" alt="" />
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      3GB NVMe SSD
                      </Typography>
                      <Typography variant="body2" fontWeight={'bold'}>
                        <span style={{ fontSize: "3rem" }}>৳ 2500</span>/year
                      </Typography>
                      <Typography variant="body1" sx={{my:'1rem'}}>Packed with great features, such as one click software installs, 24/7 support.</Typography>
                      <li style={{marginTop:'1rem'}}>2 Websites</li>
                      <li style={{marginTop:'1rem'}}>3GB SSD Storage</li>
                      <li style={{marginTop:'1rem'}}>30 GB Bandwidth</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Email Account</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Databases</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Subdomains</li>
                      <li style={{marginTop:'1rem'}}>Free SSL certificate</li>
                      <li style={{marginTop:'1rem'}}>Free cPanel</li>
                      <Button
                        variant="outlined"
                        sx={{ mt: "1rem", width: "100%", borderRadius: "20px" }}
                      >
                        Buy Now
                      </Button>
                    </Paper>
                    <Paper
                      elevation={0}
                      sx={{
                        mt: "2rem",
                        p:'1.5rem',
                        position: "relative",
                        overflow: "hidden",
                        maxWidth:{lg:'350px', xs:'100%'}, borderRadius: "0.5rem"
                      }}
                    >
                      <span className="most_popular_badge">Most Popular</span>
                      <img src="https://hostim.themetags.com/wp-content/uploads/2022/09/settings_icon.svg" alt="" />
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      3GB NVMe SSD
                      </Typography>
                      <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                      <Typography variant="body2" fontWeight={'bold'}>
                        <span style={{ fontSize: "3rem" }}>৳ 2500</span>/year
                      </Typography>
                      <Typography variant="h6" fontWeight={'bold'} sx={{color:'#666666', textDecoration:'line-through'}}>৳ 5500</Typography>
                      </Box>
                      <Typography variant="body1" sx={{my:'1rem'}}>Packed with great features, such as one click software installs, 24/7 support.</Typography>
                      <li style={{marginTop:'1rem'}}>2 Websites</li>
                      <li style={{marginTop:'1rem'}}>3GB SSD Storage</li>
                      <li style={{marginTop:'1rem'}}>30 GB Bandwidth</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Email Account</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Databases</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Subdomains</li>
                      <li style={{marginTop:'1rem'}}>Free SSL certificate</li>
                      <li style={{marginTop:'1rem'}}>Free cPanel</li>
                      <Button
                        variant="contained"
                        sx={{ mt: "1rem", width: "100%", borderRadius: "20px" }}
                      >
                        Buy Now
                      </Button>
                    </Paper>
                    <Paper
                      elevation={0}
                      sx={{ mt: "2rem", p:'1.5rem', maxWidth:{lg:'350px', xs:'100%'}, borderRadius: "0.5rem" }}
                    >
                      <img src="https://hostim.themetags.com/wp-content/uploads/2022/09/server_icon.svg" alt="" />
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      3GB NVMe SSD
                      </Typography>
                      <Typography variant="body2" fontWeight={'bold'}>
                        <span style={{ fontSize: "3rem" }}>৳ 2500</span>/year
                      </Typography>
                      <Typography variant="body1" sx={{my:'1rem'}}>Packed with great features, such as one click software installs, 24/7 support.</Typography>
                      <li style={{marginTop:'1rem'}}>2 Websites</li>
                      <li style={{marginTop:'1rem'}}>3GB SSD Storage</li>
                      <li style={{marginTop:'1rem'}}>30 GB Bandwidth</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Email Account</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Databases</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Subdomains</li>
                      <li style={{marginTop:'1rem'}}>Free SSL certificate</li>
                      <li style={{marginTop:'1rem'}}>Free cPanel</li>
                      <Button
                        variant="outlined"
                        sx={{ mt: "1rem", width: "100%", borderRadius: "20px" }}
                      >
                        Buy Now
                      </Button>
                    </Paper>
                  </Box>
                  </TabPanel>
                  <TabPanel value="4">
                  <Box sx={{ display: "flex", gap: "1.5rem", justifyContent:'center', flexDirection:{lg:'row', xs:'column'} }}>
                  <Paper
                      elevation={0}
                      sx={{ mt: "2rem", p:'1.5rem', maxWidth:{lg:'350px', xs:'100%'}, borderRadius: "0.5rem" }}
                    >
                      <img src="https://hostim.themetags.com/wp-content/uploads/2022/09/protect_icon.svg" alt="" />
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      3GB NVMe SSD
                      </Typography>
                      <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                      <Typography variant="body2" fontWeight={'bold'}>
                        <span style={{ fontSize: "3rem" }}>৳ 2500</span>/year
                      </Typography>
                      <Typography variant="h6" fontWeight={'bold'} sx={{color:'#666666', textDecoration:'line-through'}}>৳ 5500</Typography>
                      </Box>
                      <Typography variant="body1" sx={{my:'1rem'}}>Packed with great features, such as one click software installs, 24/7 support.</Typography>
                      <li style={{marginTop:'1rem'}}>2 Websites</li>
                      <li style={{marginTop:'1rem'}}>3GB SSD Storage</li>
                      <li style={{marginTop:'1rem'}}>30 GB Bandwidth</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Email Account</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Databases</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Subdomains</li>
                      <li style={{marginTop:'1rem'}}>Free SSL certificate</li>
                      <li style={{marginTop:'1rem'}}>Free cPanel</li>
                      <Button
                        variant="outlined"
                        sx={{ mt: "1rem", width: "100%", borderRadius: "20px" }}
                      >
                        Buy Now
                      </Button>
                    </Paper>
                    <Paper
                      elevation={0}
                      sx={{
                        mt: "2rem",
                        p:'1.5rem',
                        position: "relative",
                        overflow: "hidden",
                        maxWidth:{lg:'350px', xs:'100%'}, borderRadius: "0.5rem"
                      }}
                    >
                      <span className="most_popular_badge">Most Popular</span>
                      <img src="https://hostim.themetags.com/wp-content/uploads/2022/09/settings_icon.svg" alt="" />
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      3GB NVMe SSD
                      </Typography>
                      <Typography variant="body2" fontWeight={'bold'}>
                        <span style={{ fontSize: "3rem" }}>৳ 2500</span>/year
                      </Typography>
                      <Typography variant="body1" sx={{my:'1rem'}}>Packed with great features, such as one click software installs, 24/7 support.</Typography>
                      <li style={{marginTop:'1rem'}}>2 Websites</li>
                      <li style={{marginTop:'1rem'}}>3GB SSD Storage</li>
                      <li style={{marginTop:'1rem'}}>30 GB Bandwidth</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Email Account</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Databases</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Subdomains</li>
                      <li style={{marginTop:'1rem'}}>Free SSL certificate</li>
                      <li style={{marginTop:'1rem'}}>Free cPanel</li>
                      <Button
                        variant="contained"
                        sx={{ mt: "1rem", width: "100%", borderRadius: "20px" }}
                      >
                        Buy Now
                      </Button>
                    </Paper>
                    <Paper
                      elevation={0}
                      sx={{ mt: "2rem", p:'1.5rem', maxWidth:{lg:'350px', xs:'100%'}, borderRadius: "0.5rem" }}
                    >
                      <img src="https://hostim.themetags.com/wp-content/uploads/2022/09/server_icon.svg" alt="" />
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      3GB NVMe SSD
                      </Typography>
                      <Typography variant="body2" fontWeight={'bold'}>
                        <span style={{ fontSize: "3rem" }}>৳ 2500</span>/year
                      </Typography>
                      <Typography variant="body1" sx={{my:'1rem'}}>Packed with great features, such as one click software installs, 24/7 support.</Typography>
                      <li style={{marginTop:'1rem'}}>2 Websites</li>
                      <li style={{marginTop:'1rem'}}>3GB SSD Storage</li>
                      <li style={{marginTop:'1rem'}}>30 GB Bandwidth</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Email Account</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Databases</li>
                      <li style={{marginTop:'1rem'}}>Unlimited Subdomains</li>
                      <li style={{marginTop:'1rem'}}>Free SSL certificate</li>
                      <li style={{marginTop:'1rem'}}>Free cPanel</li>
                      <Button
                        variant="outlined"
                        sx={{ mt: "1rem", width: "100%", borderRadius: "20px" }}
                      >
                        Buy Now
                      </Button>
                    </Paper>
                  </Box>
                  </TabPanel>
              </Box>
            </TabContext>
          </Box>
        </Container>
      </Box>
    </>
  );
}
