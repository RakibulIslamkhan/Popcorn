import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  ImageList,
  ImageListItem,
  Tab,
  Box,
  Container,
  Grid,
  ImageListItemBar,
} from "@mui/material";
import React, { useState } from "react";
import itemData from "../../dummyData/item";
import ImgGame from "../../dummyData/game";
import FsLightbox from "fslightbox-react";

export default function GameGallery() {
  const [value, setValue] = useState("1");
  const [toggler, setToggler] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const categories = itemData.filter((item) => item.value === value);
  console.log(itemData);
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
                <TabPanel value="1" sx={{p:'0'}}>
                  <ImageList
                    sx={{
                      gridTemplateColumns: {
                        lg: "repeat(4, 1fr) !important",
                        xs: "repeat(1, 1fr) !important",
                      },
                    }}
                  >
                    {ImgGame.map((item) => (
                      <>
                        <ImageListItem
                          key={item.img}
                          sx={{ m: "0.3em", cursor: "pointer" }}
                          onClick={() => setToggler(!toggler)}
                        >
                          <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                          />
                        </ImageListItem>
                      </>
                    ))}
                    <FsLightbox
                      toggler={toggler}
                      sources={ImgGame.map((item) => item.img)}
                    />
                  </ImageList>
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
