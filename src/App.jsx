// @ts-nocheck
import * as React from "react";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import TopBar from "./components/topBar";
import { styled } from "@mui/material/styles";
import SideBar from "./components/SideBar";
import { ThemeProvider, createTheme,  } from "@mui/material/styles"; 
import { getDesignTokens } from "./Theme";
import { Outlet } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [mode, setMode] = React.useState(localStorage.getItem("currentMode"));
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <TopBar setMode={setMode} open={open} handleDrawerOpen={handleDrawerOpen}></TopBar>

        <SideBar open={open} handleDrawerClose={handleDrawerClose} />

        

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet></Outlet>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
