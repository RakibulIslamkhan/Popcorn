import React, { useState } from "react";
import {
  Box,
  Container,
  Divider,
  Paper,
  Tab,
  Tabs,
  Typography,
  styled,
} from "@mui/material";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    // justifyContent: 'center',
    backgroundColor: "transparent",
    left: 0,
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#fff",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    color: "#fff",
    "&.Mui-selected": {
      color: "#fff",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
    "&.MuiButtonBase-root": {
      alignItems: "flex-start",
    },
  })
);
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
export default function Values() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ background: "#0902DA", py: "3rem", color: "#fff", height:{xs:'95vh',lg:'500px'} }}>
        <Container maxWidth="lg">
          <Box>
            <Box>
              <Typography variant="h5" fontWeight={"bold"}>
                Our Values
              </Typography>
              <Divider
                sx={{ borderTop: "3px solid #00155F", width: "3%", my: "1rem" }}
              />
              <Typography sx={{mb:'2rem'}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat repellendus iure aut accusamus laborum labore. Ipsam,
                laborum? Culpa modi voluptatum, repudiandae tenetur illo enim
                reprehenderit quibusdam mollitia accusantium unde asperiores.
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                height: 224,
                gap: "2rem",
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box>
                <StyledTabs
                  orientation="vertical"
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                  sx={{ alignItems: "flex-start", textAlign: "left" }}
                >
                  <StyledTab label="Solution for All" {...a11yProps(0)} />
                  <StyledTab
                    label="Technology you can relay on"
                    {...a11yProps(1)}
                  />
                  <StyledTab label="24/7 Expert Support" {...a11yProps(2)} />
                  <StyledTab label="Trustable Transparency" {...a11yProps(3)} />
                  <StyledTab
                    label="A Team You Can Count On"
                    {...a11yProps(4)}
                  />
                </StyledTabs>
              </Box>
              <Paper
                elevation={0}
                sx={{
                  bgcolor: "background.default",
                  color: "text.primary",
                  width: {lg:"50%", md:"100%"},
                }}
              >
                <TabPanel value={value} index={0}>
                  <Typography variant="h6" sx={{ my: "0.5rem" }}>
                    A Team You Can Count On1
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laboriosam suscipit consequuntur, nihil voluptatum doloribus
                    quod aliquam placeat modi rem distinctio!
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Typography variant="h6" sx={{ my: "0.5rem" }}>
                    A Team You Can Count On2
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laboriosam suscipit consequuntur, nihil voluptatum doloribus
                    quod aliquam placeat modi rem distinctio!
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Typography variant="h6" sx={{ my: "0.5rem" }}>
                    A Team You Can Count On3
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laboriosam suscipit consequuntur, nihil voluptatum doloribus
                    quod aliquam placeat modi rem distinctio!
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <Typography variant="h6" sx={{ my: "0.5rem" }}>
                    A Team You Can Count On4
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laboriosam suscipit consequuntur, nihil voluptatum doloribus
                    quod aliquam placeat modi rem distinctio!
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={4}>
                  <Typography variant="h6" sx={{ my: "0.5rem" }}>
                    A Team You Can Count On5
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laboriosam suscipit consequuntur, nihil voluptatum doloribus
                    quod aliquam placeat modi rem distinctio!
                  </Typography>
                </TabPanel>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
