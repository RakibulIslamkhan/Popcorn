import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Tab,
  Box,
  Container,
  Grid,
  Paper,
  styled,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import itemData from "../../dummyData/item";

export default function Gallery() {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const categories = itemData.filter((item) => item.value === value);
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.default",
          py: "3em",
          color: "text.primary",
        }}
      >
        <Container maxWidth="lg">
          <Box>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box
                  sx={{
                    borderBottom: 1,
                    maxWidth: { xs: "520px", lg: "100%" },
                  }}
                >
                  <TabList
                    onChange={handleChange}
                    // centered={true}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                  >
                    <Tab label="UI/UX Design" value="1" />
                    <Tab label="Responsive Design" value="2" />
                    <Tab label="Website Development" value="3" />
                    <Tab label="WordPress" value={"4"} />
                    <Tab label="eCommerce" value={"5"} />
                    <Tab label="Mobile App" value={"6"} />
                    <Tab label="Web App" value={"7"} />
                    <Tab label="Maintenance" value={"8"} />
                  </TabList>
                </Box>
                <Box sx={{ mt: "2em" }}>
                  <TabPanel value="1" sx={{ p: "0 !important" }}>
                    <Grid container columnSpacing={4}>
                      <Grid item xs={12} md={6}>
                        <Box sx={{ p: "1rem", position: "relative" }}>
                          <img
                            src="https://popcorn.com.bd/wp-content/uploads/2022/12/Pro-1-01.png"
                            alt=""
                            height={"100%"}
                            width={"100%"}
                          />
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: "50px",
                              left: "45px",
                              background: "rgba(0, 0, 0, 0.6)",
                              p: "25px 20px",
                              borderRadius: "10px",
                              width: "85%",
                              color: "#fff",
                            }}
                          >
                            <Typography variant="h4">Website UI/UX</Typography>
                            <Box sx={{ display: "flex", my: "1rem", gap: 1 }}>
                              <Typography>$35</Typography>
                              <Typography className="real_price">
                                $50
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <Typography>Technology Figma/XD</Typography>
                              <Button
                                sx={{
                                  background:
                                    "linear-gradient(96.49deg, #F16262 0%, #3200FF 102.71%)",
                                  color: "#fff",
                                }}
                              >
                                Order
                              </Button>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Grid container>
                          <Grid item xs={12} md={12}>
                            <Box sx={{ p: "1rem",position:'relative' }}className="gm-feature-item">
                              <img
                                src="https://popcorn.com.bd/wp-content/uploads/2022/12/Pro-2-01.png"
                                alt=""
                                height={"100%"}
                                width={"100%"}
                              />
                              <Box
                                sx={{
                                  position: "absolute",
                                  bottom: "50px",
                                  left: "45px",
                                  background: "rgba(0, 0, 0, 0.6)",
                                  p: "25px 20px",
                                  borderRadius: "10px",
                                  width: "85%",
                                  color: "#fff",
                                  visibility:'hidden'
                                }}
                                className="gm-feature-item-content"
                              >
                                <Typography variant="h4">
                                  Website UI/UX
                                </Typography>
                                <Box
                                  sx={{ display: "flex", my: "1rem", gap: 1 }}
                                >
                                  <Typography>$35</Typography>
                                  <Typography className="real_price">
                                    $50
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <Typography>Technology Figma/XD</Typography>
                                  <Button
                                    sx={{
                                      background:
                                        "linear-gradient(96.49deg, #F16262 0%, #3200FF 102.71%)",
                                      color: "#fff",
                                    }}
                                  >
                                    Order
                                  </Button>
                                </Box>
                              </Box>
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box sx={{ px: "1rem",position:'relative' }}className="gm-feature-item">
                              <img
                                src="https://popcorn.com.bd/wp-content/uploads/2022/12/Pro-3-01.png"
                                alt=""
                                height={"100%"}
                                width={"100%"}
                              />
                              <Box
                                sx={{
                                  position: "absolute",
                                  bottom: "25px",
                                  left: "28px",
                                  background: "rgba(0, 0, 0, 0.6)",
                                  p: "25px 20px",
                                  borderRadius: "10px",
                                  width: "80%",
                                  color: "#fff",
                                  visibility:'hidden',
                                  transition: 'all 0.3s ease-in',
                                }}
                                className="gm-feature-item-content"
                              >
                                <Typography variant="h4">
                                  Website UI/UX
                                </Typography>
                                <Box
                                  sx={{ display: "flex", my: "1rem", gap: 1 }}
                                >
                                  <Typography>$35</Typography>
                                  <Typography className="real_price">
                                    $50
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <Typography>Technology Figma/XD</Typography>
                                  <Button
                                    sx={{
                                      background:
                                        "linear-gradient(96.49deg, #F16262 0%, #3200FF 102.71%)",
                                      color: "#fff",
                                    }}
                                  >
                                    Order
                                  </Button>
                                </Box>
                              </Box>
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box sx={{ px: "1rem", position:'relative' }}className="gm-feature-item">
                              <img
                                src="https://popcorn.com.bd/wp-content/uploads/2022/12/Pro-4-01.png"
                                alt=""
                                height={"100%"}
                                width={"100%"}
                              />
                              <Box
                                sx={{
                                  position: "absolute",
                                  bottom: "25px",
                                  left: "28px",
                                  background: "rgba(0, 0, 0, 0.6)",
                                  p: "25px 20px",
                                  borderRadius: "10px",
                                  width: "80%",
                                  color: "#fff",
                                  visibility:'hidden',
                                }}
                                className="gm-feature-item-content"
                              >
                                <Typography variant="h4">
                                  Website UI/UX
                                </Typography>
                                <Box
                                  sx={{ display: "flex", my: "1rem", gap: 1 }}
                                >
                                  <Typography>$35</Typography>
                                  <Typography className="real_price">
                                    $50
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <Typography>Technology Figma/XD</Typography>
                                  <Button
                                    sx={{
                                      background:
                                        "linear-gradient(96.49deg, #F16262 0%, #3200FF 102.71%)",
                                      color: "#fff",
                                    }}
                                  >
                                    Order
                                  </Button>
                                </Box>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </TabPanel>
                  <TabPanel value="2">
                    <ImageList
                      sx={{
                        width: "500",
                      }}
                    >
                      {categories.map((item) => (
                        <ImageListItem key={item.img} sx={{ m: "0.3em" }}>
                          <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </TabPanel>
                  <TabPanel value="3">
                    <ImageList
                      sx={{
                        width: "500",
                      }}
                    >
                      {categories.map((item) => (
                        <ImageListItem key={item.img} sx={{ m: "0.3em" }}>
                          <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </TabPanel>
                  <TabPanel value="4">
                    <ImageList
                      sx={{
                        width: "500",
                      }}
                    >
                      {categories.map((item) => (
                        <ImageListItem key={item.img} sx={{ m: "0.3em" }}>
                          <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </TabPanel>
                  <TabPanel value="5">
                    <ImageList
                      sx={{
                        width: "500",
                        gridTemplateColumns: {
                          lg: "repeat(4, 1fr) !important",
                          xs: "repeat(1, 1fr) !important",
                        },
                      }}
                    >
                      {categories.map((item) => (
                        <ImageListItem key={item.img} sx={{ m: "0.3em" }}>
                          <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </TabPanel>
                  <TabPanel value="6">
                    <ImageList
                      sx={{
                        width: "500",
                      }}
                    >
                      {categories.map((item) => (
                        <ImageListItem key={item.img} sx={{ m: "0.3em" }}>
                          <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </TabPanel>
                </Box>
              </TabContext>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
