import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LightPopcorn from "../../icons/popcorn";
import DarkPopcorn from "../../icons/dark";
import Link from "next/link";

const pages = [
  "DOMAINS",
  "HOSTING",
  "SERVERS",
  "CLOUD",
  "EMAIL",
  "SECURITY & BACKUP",
  "PRO SERVICES",
];
export default function Header() {
  const [fix, setFix] = useState(false);
  const setFixed = () => {
    if (window.scrollY >= 80) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  // window.addEventListener("scroll", setFixed);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const theme = useTheme();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        // position="static"
        sx={{
          height: "80px",
          // boxShadow: "none",
          bgcolor:'background.default',
        }}
        className={fix ? "navbar-fixed" : null}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: "80px" }}>
            <Link href="/">
              {theme.palette.mode === 'dark' ? <DarkPopcorn/> : <LightPopcorn/>}
            </Link>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: { xs: "flex-end", lg: "flex-start" },
              }}
            >
              <IconButton
                size="large"
                aria-label="menu-icon"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={{color:`${theme.palette.mode === 'dark' ? '#fff' :'#000'}`}} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    maxWidth: "100%",
                    width: "100%",
                    left: "0px !important",
                    backgroundColor:'background.default',
                    borderRadius: "0px",
                  }
                }}
                sx={{
                  display: { xs: "block", md: "none" },
                  // width: "100%",
                  mt: "0.9em",
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ width: "100%" }}
                  >
                      <Link
                        underline="none"
                        href={`/${page.replace(/\s/g, "-")}`}
                      >
                    <Typography textAlign="center" color="text.primary">
                        {page}
                    </Typography>
                      </Link>
                  </MenuItem>
                ))}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5em",
                    mx: "1em",
                  }}
                >
                  <Button
                    fullWidth
                    sx={{
                      color: "#18A0FB",
                      border: "1px solid #18A0FB",
                      px: "2em",
                    }}
                  >
                    SUPPORT
                  </Button>
                  <Button
                    size="large"
                    fullWidth
                    variant="contained"
                    sx={{
                      bgcolor: "#18A0FB",
                      boxShadow: "none",
                      px: "2em",
                    }}
                  >
                    Login
                  </Button>
                </Box>
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block" }}
                >
                  <Link
                    href={`/${page.replace(/\s/g, "-")}`}
                  >
                    <Typography color="text.primary">
                    {page}
                    </Typography>
                  </Link>
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                width: "17%",
                justifyContent: "space-between",
              }}
            >
              <Button
                sx={{
                  color: `${theme.palette.mode === "dark" ? "#fff" : "#18A0FB"}`,
                  border: `1px solid ${theme.palette.mode === "dark" ? "#000" : "#18A0FB"}`,
                  px: "2em",
                }}
              >
                SUPPORT
              </Button>
              <Button
                size="large"
                variant="contained"
                sx={{
                  bgcolor: `${theme.palette.mode === "dark" ? "#000" : "#18A0FB"}`,
                  boxShadow: "none",
                  px: "2em",
                  color: `${theme.palette.common.white}`,
                }}
              >
                Login
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}