import { KeyboardArrowUp } from "@mui/icons-material";
import {
  Box,
  Fab,
  Fade,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useMemo, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}
export default function Layout({ children, props }) {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("theme")) || false;
    }
  });
  const prefersDarkMode = useMediaQuery(
    `(prefers-color-scheme:${darkMode ? "dark" : "light"})`
  );
  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light
            primary: {
              main: "#142C8E",
            },
            background: {
              default: "#F5F5F5",
              paper: "#FFFFFF",
            },
            text: {
              primary: "#1B1B1B",
              secondary: "#151519",
            },
          }
        : {
            // palette values for dark mode
            primary: {
              main: "#142C8E",
            },
            background: {
              default: "#000f2c",
              paper: "#151519",
            },
            text: {
              primary: "#FFFFFF",
              secondary: "#F5F5F5",
            },
          }),
    },
    typography: {
      fontFamily: ["'Ubuntu', sans-serif"].join(","),
      fontWeight: 400,
    },
  });
  // Update the theme only if the mode changes
  const theme = useMemo(
    () => createTheme(getDesignTokens(prefersDarkMode ? "dark" : "light")),
    [prefersDarkMode]
  );
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkMode));
  }, [darkMode]);
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Toolbar id="back-to-top-anchor" />
      {children}
      <ScrollTop {...props}>
        <Fab
          size="small"
          aria-label="scroll back to top"
          sx={{
            background:
              "linear-gradient(95.45deg, #0082F8 0.64%, #1C40F2 98.23%)",
            color: "#fff",
          }}
        >
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
      <Footer checked={darkMode} change={() => setDarkMode(!darkMode)} />
    </ThemeProvider>
  );
}
