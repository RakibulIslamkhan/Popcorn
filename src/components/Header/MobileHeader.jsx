import React, { useState } from "react";
import { Box, Button, IconButton, Menu, MenuItem, Typography, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const pages = [
    // "HOME",
    "HOSTING",
    "DOMAINS",
    "SERVERS",
    "EMAIL",
    "PRO SERVICES",
    "CLOUD",
    "SECURITY & BACKUP",
  ];
export default function MobileHeader() {
    const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
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
          <MenuIcon
            sx={{
              color: `${theme.palette.mode === "dark" ? "#fff" : "#000"}`,
            }}
          />
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
              bgcolor: `${theme.palette.mode === "dark" ? "#000f2c" : "#fff"}`,
              borderRadius: "0px",
            },
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
              <Link underline="none" href={`/${page.replace(/\s/g, "-")}`}>
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
    </>
  );
}
