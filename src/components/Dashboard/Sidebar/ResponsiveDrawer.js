import * as React from "react";
import Box from "@mui/material/Box";
import Badge from "@material-ui/core/Badge";
import Drawer from "@mui/material/Drawer";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Navbar from "../Navbar/Navbar";
import Candidate from "../../utils/Images/candidate.png";
import { Link, NavLink } from "react-router-dom";
import PersonalDetails from "../../Forms/PersonalDetails";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";

import CliqHR from "../../utils/Images/hr.png";
const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: theme.palette.action.selected,
    borderRight: "5px solid #FF771B",
  },
  paperStyle: {
    borderRadius: "30px",
    padding: 20,
    height: 440,
    width: 280,
  },

  typography: {
    marginRight: "15px",
    // paddingLeft: "25px",
    size: "18px",
    color: "#807AAC",
    // backgroundColor: "#fff",
  },
  badge: {
    marginRight: "10px",
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    // console.log(index)
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <div>
        <Navbar />
      </div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 200,
            height: 580,
            borderRadius: "10px",
            marginTop: "80px",
          },
        }}
      >
        <Paper elevation={4} style={{ position: "fixed" }}>
          <List>
            <ListItem
              width="10%"
              className={classes.ListItem}
              button
              // selected={selectedIndex === 1}
              // onClick={(event) => handleListItemClick(event, 1)}
              activeStyle={{ borderRight: "5px solid #FF771B" }}
              component={NavLink}
              exact
              to="/personaldetails"
            >
              {/* <ListItemIcon className={classes.listicon}> */}
              {/* <img src={Dashboard} className={classes.icons} /> */}
              {/* </ListItemIcon> */}
              <ListItemText>
                <Typography variant="subtitle2" className={classes.typography}>
                  <Badge>
                    <img
                      src={Candidate}
                      alt="candidate"
                      className={classes.badge}
                    />
                  </Badge>
                  Personal Details
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              width="10%"
              className={classes.ListItem}
              button
              // selected={selectedIndex === 1}
              // onClick={(event) => handleListItemClick(event, 1)}
              component={Link}
              exact
              to="/Activity"
            >
              {/* <ListItemIcon className={classes.listicon}> */}
              {/* <img src={Dashboard} className={classes.icons} /> */}
              {/* </ListItemIcon> */}
              <ListItemText disableTypography>
                <Typography variant="subtitle2" className={classes.typography}>
                  Activity
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              width="10%"
              className={classes.ListItem}
              button
              // selected={selectedIndex === 1}
              // onClick={(event) => handleListItemClick(event, 1)}
              component={Link}
              exact
              to="/emailSetting"
            >
              {/* <ListItemIcon className={classes.listicon}> */}
              {/* <img src={Dashboard} className={classes.icons} /> */}
              {/* </ListItemIcon> */}
              <ListItemText disableTypography>
                <Typography variant="subtitle2" className={classes.typography}>
                  Email Settings
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              width="10%"
              className={classes.ListItem}
              button
              // selected={selectedIndex === 1}
              // onClick={(event) => handleListItemClick(event, 1)}
              activeStyle={{ borderRight: "5px solid #FF771B" }}
              component={NavLink}
              exact
              to="/changePassword"
            >
              {/* <ListItemIcon className={classes.listicon}> */}
              {/* <img src={Dashboard} className={classes.icons} /> */}
              {/* </ListItemIcon> */}
              <ListItemText disableTypography>
                <Typography variant="subtitle2" className={classes.typography}>
                  Change Password
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              width="10%"
              className={classes.ListItem}
              button
              // selected={selectedIndex === 1}
              // onClick={(event) => handleListItemClick(event, 1)}
              activeStyle={{ borderRight: "5px solid #FF771B" }}
              component={NavLink}
              exact
              to="/companyinfo"
            >
              {/* <ListItemIcon className={classes.listicon}> */}
              {/* <img src={Dashboard} className={classes.icons} /> */}
              {/* </ListItemIcon> */}
              <ListItemText disableTypography>
                <Typography variant="subtitle2" className={classes.typography}>
                  Company Profile
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              width="10%"
              className={classes.ListItem}
              button
              // selected={selectedIndex === 1}
              // onClick={(event) => handleListItemClick(event, 1)}
              component={NavLink}
              exact
              to="/companyinfo"
            >
              {/* <ListItemIcon className={classes.listicon}> */}
              {/* <img src={Dashboard} className={classes.icons} /> */}
              {/* </ListItemIcon> */}
              <ListItemText disableTypography>
                <Typography variant="subtitle2" className={classes.typography}>
                  Team Management
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              width="10%"
              className={classes.ListItem}
              button
              // selected={selectedIndex === 1}
              // onClick={(event) => handleListItemClick(event, 1)}
              component={Link}
              exact
              to="/planBilling"
            >
              {/* <ListItemIcon className={classes.listicon}> */}
              {/* <img src={Dashboard} className={classes.icons} /> */}
              {/* </ListItemIcon> */}
              <ListItemText disableTypography>
                <Typography variant="subtitle2" className={classes.typography}>
                  Plan & Billing
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              width="10%"
              className={classes.ListItem}
              button
              // selected={selectedIndex === 1}
              // onClick={(event) => handleListItemClick(event, 1)}
              component={Link}
              exact
              to="integration"
            >
              {/* <ListItemIcon className={classes.listicon}> */}
              {/* <img src={Dashboard} className={classes.icons} /> */}
              {/* </ListItemIcon> */}
              <ListItemText disableTypography>
                <Typography variant="subtitle2" className={classes.typography}>
                  Integration
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              width="10%"
              className={classes.ListItem}
              button
              // selected={selectedIndex === 1}
              // onClick={(event) => handleListItemClick(event, 1)}
              component={Link}
              exact
              to="/privacy"
            >
              {/* <ListItemIcon className={classes.listicon}> */}
              {/* <img src={Dashboard} className={classes.icons} /> */}
              {/* </ListItemIcon> */}
              <ListItemText disableTypography>
                <Typography variant="subtitle2" className={classes.typography}>
                  Privacy Policy
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              width="10%"
              className={classes.ListItem}
              button
              // selected={selectedIndex === 1}
              // onClick={(event) => handleListItemClick(event, 1)}
              component={Link}
              exact
              to="/terms"
            >
              {/* <ListItemIcon className={classes.listicon}> */}
              {/* <img src={Dashboard} className={classes.icons} /> */}
              {/* </ListItemIcon> */}
              <ListItemText disableTypography>
                <Typography variant="subtitle2" className={classes.typography}>
                  Terms & Conditions
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
          <List>
            <ListItem
              width="10%"
              // className={classes.ListItem}
              button
              // selected={selectedIndex === 1}
              // onClick={(event) => handleListItemClick(event, 1)}
              component={Link}
              exact
              to="/globalSetting"
            >
              {/* <ListItemIcon className={classes.listicon}> */}
              {/* <img src={Dashboard} className={classes.icons} /> */}
              {/* </ListItemIcon> */}
              <ListItemText disableTypography>
                <Typography variant="subtitle2" className={classes.typography}>
                  Global Setting
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              width="10%"
              // className={classes.ListItem}
              button
              // selected={selectedIndex === 1}
              // onClick={(event) => handleListItemClick(event, 1)}
              component={Link}
              exact
              to="/logOut"
            >
              {/* <ListItemIcon className={classes.listicon}> */}
              {/* <img src={Dashboard} className={classes.icons} /> */}
              {/* </ListItemIcon> */}
              <ListItemText disableTypography>
                <Typography variant="subtitle2" className={classes.typography}>
                  Log Out
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Box>
  );
}
