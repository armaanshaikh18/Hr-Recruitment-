import React, { useState } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import { NavLink } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MuiListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import CliqHR from "../../utils/Images/hr.png";
import Home from "../../utils/Images/Home.png";
import Candidate from "../../utils/Images/candidate.png";
import Asses from "../../utils/Images/Asses.png";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

import Library from "../../utils/Images/lib.png";
import Interview from "../../utils/Images/interview.png";
import Reports from "../../utils/Images/reports.png";
import { ListItem } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    backgroundColor: "white",
    // width: "330px",
  },
  searchInput: {
    // marginLeft: "15px",
    opacity: "0.9",
    width: "20%",
    padding: "0px 8px",
    justifyContent: "end",
    fontSize: "1.2rem",
    height: "42px",
    borderRadius: "15px",
    border: " 1px solid black",

    backgroundColor: "white",
    "& .MuiSvgIcon-root": {
      marginRight: "8px",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: "#807AAC",
    marginLeft: "25px",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  // search: {
  //   // marginLeft: "20%",
  //   position: "relative",
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: alpha(theme.palette.common.black, 0.25),
  //   "&:hover": {
  //     backgroundColor: alpha(theme.palette.common.black, 0.35),
  //   },
  //   marginRight: theme.spacing(2),
  //   marginLeft: 0,
  //   width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     marginLeft: theme.spacing(3),
  //     width: "auto",
  //   },
  // },
  // searchIcon: {
  //   padding: theme.spacing(0, 2),
  //   height: "100%",
  //   position: "absolute",
  //   pointerEvents: "none",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   color: "black",
  // },
  // inputRoot: {
  //   color: "black",
  // },
  // inputInput: {
  //   padding: theme.spacing(1, 1, 1, 0),
  //   // vertical padding + font size from searchIcon
  //   paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  //   transition: theme.transitions.create("width"),
  //   width: "100%",
  //   [theme.breakpoints.up("md")]: {
  //     width: "20ch",
  //   },
  // },
  sectionDesktop: {
    // marginRight: "125px",
    color: "grey",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [search, searchItem] = useState("");
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "white",
          width: "130%",
          // marginLeft: "-150px",
          // marginRight: "50px",
        }}
      >
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography className={classes.title} variant="h6" noWrap>
            <img src={CliqHR} alt="cliq" className={classes.cliq} />
          </Typography>
          <Typography className={classes.title} variant="h8" noWrap>
            <Badge>
              <img style={{ marginLeft: "25px" }} src={Home} alt="home" />
            </Badge>
            Dashboard
          </Typography>
          <Typography className={classes.title} variant="h8" noWrap>
            <Badge>
              <img src={Candidate} alt="home" />
            </Badge>
            Candidate
          </Typography>
          <Typography className={classes.title} variant="h8" noWrap>
            <Badge>
              <img src={Asses} alt="home" />
            </Badge>
            Assessment
          </Typography>
          <Typography className={classes.title} variant="h8" noWrap>
            <Badge>
              <img src={Library} alt="home" />
            </Badge>
            Library
          </Typography>
          <Typography className={classes.title} variant="h8" noWrap>
            <Badge>
              <img src={Interview} alt="home" />
            </Badge>
            Interview
          </Typography>
          <Typography className={classes.title} variant="h8" noWrap>
            <Badge>
              <img src={Reports} alt="home" />
            </Badge>
            Reports
          </Typography>
          <InputBase
            style={{ marginLeft: "10px" }}
            className={`${classes.searchInput} md-4`}
            placeholder="Search"
            onChange={(e) => searchItem(e.target.value)}
            value={search}
            startAdornment={<SearchOutlinedIcon fontSize="small" />}
          />

          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div> */}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
