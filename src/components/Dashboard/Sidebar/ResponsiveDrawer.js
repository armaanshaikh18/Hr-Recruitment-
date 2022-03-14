import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
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
import PersonalDetails from "../../Forms/PersonalDetails";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";

import CliqHR from "../../utils/Images/hr.png";
const drawerWidth = 220;
// const drawerHeight = 120;

const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: theme.palette.action.selected,
    borderRight: "5px solid #00a8ff",
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <div>
        <Navbar />
      </div>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          //   height: drawerHeight,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            marginTop: "70px",
            borderRadius: "20px",
          },
        }}
      >
        <Toolbar />

        <Box sx={{ overflow: "auto" }}>
          <ListItem
            width="10%"
            button
            // selected={selectedIndex === 1}
            // onClick={(event) => handleListItemClick(event, 1)}
            // component={NavLink}
            activeStyle={{ borderRight: "5px solid #00a8ff" }}
            // exact
            // to="/Dashboard"
          >
            <ListItemIcon className={classes.listicon}>
              {/* <img src={dashboard} className={classes.images}></img> */}
            </ListItemIcon>
            <ListItemText disableTypography>
              <Typography variant="subtitle2" className={classes.ListItemText}>
                Personal Details
              </Typography>
            </ListItemText>
            {/* {openDashboard ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>
          <ListItem
            width="10%"
            button
            // selected={selectedIndex === 1}
            // onClick={(event) => handleListItemClick(event, 1)}
            // component={NavLink}
            activeStyle={{ borderRight: "5px solid #00a8ff" }}
            // exact
            // to="/Dashboard"
          >
            <ListItemIcon className={classes.listicon}>
              {/* <img src={dashboard} className={classes.images}></img> */}
            </ListItemIcon>
            <ListItemText disableTypography>
              <Typography variant="subtitle2" className={classes.ListItemText}>
                Activity
              </Typography>
            </ListItemText>
            {/* {openDashboard ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>
          <ListItem
            width="10%"
            button
            // selected={selectedIndex === 1}
            // onClick={(event) => handleListItemClick(event, 1)}
            // component={NavLink}
            activeStyle={{ borderRight: "5px solid #00a8ff" }}
            // exact
            // to="/Dashboard"
          >
            <ListItemIcon className={classes.listicon}>
              {/* <img src={dashboard} className={classes.images}></img> */}
            </ListItemIcon>
            <ListItemText disableTypography>
              <Typography variant="subtitle2" className={classes.ListItemText}>
                Email Setting
              </Typography>
            </ListItemText>
            {/* {openDashboard ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>
          <ListItem
            width="10%"
            button
            // selected={selectedIndex === 1}
            // onClick={(event) => handleListItemClick(event, 1)}
            // component={NavLink}
            activeStyle={{ borderRight: "5px solid #00a8ff" }}
            // exact
            // to="/Dashboard"
          >
            <ListItemIcon className={classes.listicon}>
              {/* <img src={dashboard} className={classes.images}></img> */}
            </ListItemIcon>
            <ListItemText disableTypography>
              <Typography variant="subtitle2" className={classes.ListItemText}>
                Change Password
              </Typography>
            </ListItemText>
            {/* {openDashboard ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>
          <ListItem
            width="10%"
            button
            // selected={selectedIndex === 1}
            // onClick={(event) => handleListItemClick(event, 1)}
            // component={NavLink}
            activeStyle={{ borderRight: "5px solid #00a8ff" }}
            // exact
            // to="/Dashboard"
          >
            <ListItemIcon className={classes.listicon}>
              {/* <img src={dashboard} className={classes.images}></img> */}
            </ListItemIcon>
            <ListItemText disableTypography>
              <Typography variant="subtitle2" className={classes.ListItemText}>
                Company Profile
              </Typography>
            </ListItemText>
            {/* {openDashboard ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>
          <ListItem
            width="10%"
            button
            // selected={selectedIndex === 1}
            // onClick={(event) => handleListItemClick(event, 1)}
            // component={NavLink}
            activeStyle={{ borderRight: "5px solid #00a8ff" }}
            // exact
            // to="/Dashboard"
          >
            <ListItemIcon className={classes.listicon}>
              {/* <img src={dashboard} className={classes.images}></img> */}
            </ListItemIcon>
            <ListItemText disableTypography>
              <Typography variant="subtitle2" className={classes.ListItemText}>
                Team Management
              </Typography>
            </ListItemText>
            {/* {openDashboard ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>
          <ListItem
            width="10%"
            button
            // selected={selectedIndex === 1}
            // onClick={(event) => handleListItemClick(event, 1)}
            // component={NavLink}
            activeStyle={{ borderRight: "5px solid #00a8ff" }}
            // exact
            // to="/Dashboard"
          >
            <ListItemIcon className={classes.listicon}>
              {/* <img src={dashboard} className={classes.images}></img> */}
            </ListItemIcon>
            <ListItemText disableTypography>
              <Typography variant="subtitle2" className={classes.ListItemText}>
                Plan & Billing
              </Typography>
            </ListItemText>
            {/* {openDashboard ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>
          <ListItem
            width="10%"
            button
            // selected={selectedIndex === 1}
            // onClick={(event) => handleListItemClick(event, 1)}
            // component={NavLink}
            activeStyle={{ borderRight: "5px solid #00a8ff" }}
            // exact
            // to="/Dashboard"
          >
            <ListItemIcon className={classes.listicon}>
              {/* <img src={dashboard} className={classes.images}></img> */}
            </ListItemIcon>
            <ListItemText disableTypography>
              <Typography variant="subtitle2" className={classes.ListItemText}>
                Integration
              </Typography>
            </ListItemText>
            {/* {openDashboard ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>
          <ListItem
            width="10%"
            button
            // selected={selectedIndex === 1}
            // onClick={(event) => handleListItemClick(event, 1)}
            // component={NavLink}
            activeStyle={{ borderRight: "5px solid #00a8ff" }}
            // exact
            // to="/Dashboard"
          >
            <ListItemIcon className={classes.listicon}>
              {/* <img src={dashboard} className={classes.images}></img> */}
            </ListItemIcon>
            <ListItemText disableTypography>
              <Typography variant="subtitle2" className={classes.ListItemText}>
                Privacy Policy
              </Typography>
            </ListItemText>
            {/* {openDashboard ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>
          <ListItem
            width="10%"
            button
            // selected={selectedIndex === 1}
            // onClick={(event) => handleListItemClick(event, 1)}
            // component={NavLink}
            activeStyle={{ borderRight: "5px solid #00a8ff" }}
            // exact
            // to="/Dashboard"
          >
            <ListItemIcon className={classes.listicon}>
              {/* <img src={dashboard} className={classes.images}></img> */}
            </ListItemIcon>
            <ListItemText disableTypography>
              <Typography variant="subtitle2" className={classes.ListItemText}>
                Terms & Conditions
              </Typography>
            </ListItemText>
            {/* {openDashboard ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>
          {/* <List>
            {[
              "Personal Profile",
              "Activity",
              "Email setting",
              "Change Password",
              "Company Profile",
              "Team Management",
              "Plan & Billing",
              "Integration",
              "Privacy Policy",
              "Term & Condition",
            ].map((text, index) => (
              <ListItem
                button
                key={text}
                activeStyle={{ borderRight: "5px solid #00a8ff" }}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem> */}
          {/* ))}
          </List> */}
          <Divider />

          {/* <List>
            {["Global Setting", "Log Out"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 1 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {/* <PersonalDetails /> */}
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </Box>
    </Box>
  );
}
