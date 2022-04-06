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
    // marginRight: "85px",
    opacity: "0.9",
    width: "18%",
    padding: "0px 8px",
    justifyContent: "end",
    fontSize: "1.2rem",
    height: "32px",
    borderRadius: "10px",
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
    marginLeft: "30px",
    // paddingLeft: "25px",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  badge: {
    marginRight: "8px",
  },

  sectionDesktop: {
    marginRight: "-1%",
    color: "grey",
    display: "flex",
    // position: "absolute",
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
        position="fixed"
        style={{
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            <img src={CliqHR} alt="cliq" className={classes.cliq} />
          </Typography>
          <Typography className={classes.title} variant="h8" noWrap>
            <Badge>
              <img src={Home} alt="home" className={classes.badge} />
            </Badge>
            Dashboard
          </Typography>
          <Typography className={classes.title} variant="h8" noWrap>
            <Badge>
              <img src={Candidate} alt="candidate" className={classes.badge} />
            </Badge>
            Candidate
          </Typography>
          <Typography className={classes.title} variant="h8" noWrap>
            <Badge>
              <img src={Asses} alt="asses" className={classes.badge} />
            </Badge>
            Assessment
          </Typography>
          <Typography className={classes.title} variant="h8" noWrap>
            <Badge>
              <img src={Library} alt="lib" className={classes.badge} />
            </Badge>
            Library
          </Typography>
          <Typography className={classes.title} variant="h8" noWrap>
            <Badge>
              <img src={Interview} alt="interview" className={classes.badge} />
            </Badge>
            Interview
          </Typography>
          <Typography className={classes.title} variant="h8" noWrap>
            <Badge>
              <img src={Reports} alt="reports" className={classes.badge} />
            </Badge>
            Reports
          </Typography>
          <InputBase
            style={{ marginLeft: "160px" }}
            className={`${classes.searchInput} md-4`}
            placeholder="Search"
            onChange={(e) => searchItem(e.target.value)}
            value={search}
            startAdornment={<SearchOutlinedIcon fontSize="small" />}
          />

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
