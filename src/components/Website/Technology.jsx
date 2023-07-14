import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  ImageList,
  ImageListItem,
  Tab,
  Box,
  Container,
  ImageListItemBar,
} from "@mui/material";
import React, { useState } from "react";
import Tool from "../../dummyData/tool";

export default function Technology() {
    const [value, setValue] = useState("1");
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const categories = Tool.filter((item) => item.value === value);
  return (
    <>
        <Box
        sx={{
          bgcolor: "background.default",
          py: "3em",
          color: "text.primary",
        }}
      >
        <Container maxWidth="md">
          <Box>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box
                  sx={{
                    // borderBottom: 1,
                    maxWidth: { xs: "520px", lg: "100%" },
                  }}
                >
                  <TabList
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                    sx={{"& .MuiTabs-flexContainer":{justifyContent: 'center', borderBottom:'2px solid', borderColor:'divider'}}}
                  >
                    <Tab label="Mobile" value="1" />
                    <Tab label="Frontend" value="2" />
                    <Tab label="Backend" value="3" />
                    <Tab label="Database" value={"4"} />
                    <Tab label="Engine" value={"5"} />
                  </TabList>
                </Box>
                <Box sx={{ mt: "2em" }}>
                  <TabPanel value="1" sx={{ p: "0 !important" }}>
                  <ImageList
                    sx={{
                      width: "500",
                      gridTemplateColumns: {
                        lg: "repeat(6, 1fr) !important",
                        xs: "repeat(3, 1fr) !important",
                      },
                        gridGap: "2rem !important",
                    }}
                  >
                    {Tool.map((item) => (
                      <>
                        <ImageListItem
                          key={item.img}
                        >
                          <img
                            src={`${item.img}?w=80&h=80&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=80&h=80&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            className="tech-img"
                          />
                          <ImageListItemBar
                            position="below"
                            title={item.title}
                            align="center"
                          />
                        </ImageListItem>
                      </>
                    ))}
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
  )
}
