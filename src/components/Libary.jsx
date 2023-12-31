import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { TextField } from "@mui/material";
import RightSideBar from "./common/RightSideBar";
import { mainNavbarItems } from "../utils/DrawerMenu";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changesidebar } from "../redux/sideBarActiveSlice";

const drawerWidth = 240;

function Libary(props) {
  const { activeBar } = useSelector((state) => state.sidebar);
  const [searchValue, setSearchValue] = React.useState("");
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    // this function handel drawer open and close funtionality
    setMobileOpen(!mobileOpen);
  };
  const handelBarActiveWhenClick = (label) => {
    // this function handel which bar will active
    dispatch(changesidebar(label));
  };

  const handelSearch = (e) => {
    // this function handel search funtionality  
    if (e.key == "Enter" && searchValue != "") {
      navigate(`/dashboard/search/book/${searchValue}`);
      setSearchValue("");
    }
  };

  const drawer = (
    <div>
      <Toolbar
        sx={{
          backgroundColor: "#449342",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ImportContactsIcon />
        <Typography variant="h6" sx={{ marginLeft: "10px" }}>
          Libary
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {mainNavbarItems.map((item, index) => (
          <ListItem
            key={item.id}
            disablePadding
            sx={{
              ":hover": {
                backgroundColor:
                  activeBar !== item.label ? "#032F33" : "#012225",
              },
            }}
          >
            <ListItemButton
              sx={{
                color: "#E4F2F0",

                backgroundColor: activeBar == item.label && "#012225",
              }}
              onClick={() => {
                navigate(item.route);
                handelBarActiveWhenClick(item.label);
              }}
            >
              <ListItemIcon sx={{ color: "#E4F2F0" }}>
                {index % 2 === 0 ? item.icon : item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#FFFFFF",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="green"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* search box  */}
          <TextField
            id="filled-search"
            label="Search Books..."
            type="search"
            variant="filled"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyUp={handelSearch}
            sx={{ width: "400px", backgroundColor: "#F1F3F4" }}
          />
          {/* right side bar  */}
          <RightSideBar />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#02373C",
              color: "#E4F2F0",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#02373C",
              color: "#E4F2F0",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          bgcolor: "#E4F2F0",
          minHeight: "100vh",
          overflow: "scroll",
        }}
      >
        <Toolbar />
        {/* render all child component  */}
        <Outlet />
      </Box>
    </Box>
  );
}

Libary.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Libary;
