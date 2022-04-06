import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Row,
  Alert,
} from "reactstrap";
import InputAdornment from "@mui/material/InputAdornment";
// import TimeZoneSelect from "./TimeZoneSelect";
import MuiPhoneNumber from "material-ui-phone-number";
// import { TimezonePicker } from "baseui/timezonepicker";
import Profile from "../utils/Images/pro.jpg";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
// import TimezoneSelect from "react-timezone-select";
import ResponsiveDrawer from "../Dashboard/Sidebar/ResponsiveDrawer";
import { CountryRegionData } from "react-country-region-selector";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@mui/icons-material/Send";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import yellow from "@material-ui/core/colors/yellow";
import Box from "@material-ui/core/Box";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CountrySelect from "./CountrySelect";
import TimezoneSelect from "react-timezone-select";
import "../Forms/style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    // marginBottom: "200px",
    top: "90px",
    width: "77%",
    marginLeft: "240px",
    // height: "250px",
    // borderShadow: "none",
  },

  customBorderRadius: {
    position: " fixed",
    height: "510px",
    marginTop: "80px",
    borderRadius: 25,
  },
  inp: {
    height: "32px",
    background: "none",
    fontSize: "13px",
  },
  header: {
    marginTop: "10px",
    textAlign: "left",
    color: "#211572",
    fontWeight: "bold",
  },
  headerinfo: {
    textAlign: "left",
    marginRight: "65%",
    color: "#D2D4D6",
  },
  textField: {
    marginRight: "90px",
    width: "65%",

    "& input::placeholder": {
      fontSize: "12px",
    },
  },
  timezone: {
    marginTop: "20px",
    width: "66%",
    "& input::placeholder": {
      fontSize: "14px",
    },
    // minHeight: "100px !important",
  },
}));

export default function Variants(props) {
  const classes = useStyles();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [selectedTimezone, setSelectedTimezone] = useState({});
  const [value, setValue] = React.useState("Europe/London");
  const Input = styled("input")({
    display: "none",
  });
  return (
    <>
      <div className="personal_details_parent">
        <ResponsiveDrawer />

        <div className={`${classes.root} Personal_Information `}>
          <Paper className={classes.customBorderRadius} elevation={6}>
            <Box p={1}>
              <Typography variant="h5" className={classes.header}>
                Personal Information
              </Typography>
              <Typography variant="h8" className={classes.headerinfo}>
                Enter the required information below to register
              </Typography>

              <Form>
                <Grid container style={{ marginTop: "25px" }}>
                  <Grid item xs={5}>
                    <Col md={4}>
                      <Label
                        style={{
                          marginRight: "65%",
                          color: "#130D3C",
                        }}
                      >
                        <strong className="modalTitle"> First Name</strong>
                      </Label>
                    </Col>
                    <TextField
                      size="small"
                      id="first-name"
                      placeholder="First Name"
                      variant="outlined"
                      className={classes.textField}
                      // value={this.state.firstName}
                      // onChange={this.handleChange("firstName")}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <Col md={4}>
                      <Label style={{ marginRight: "65%" }}>
                        <strong className="modalTitle">Last Name</strong>
                      </Label>
                    </Col>
                    <TextField
                      id="last-name"
                      size="small"
                      placeholder="Last Name"
                      variant="outlined"
                      className={classes.textField}
                      // value={this.state.lastName}
                      // onChange={this.handleChange("lastName")}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <Col md={4}>
                      <Label style={{ marginRight: "65%" }}>
                        <strong className="modalTitle">Email ID</strong>
                      </Label>
                    </Col>
                    <TextField
                      id="email"
                      type="email"
                      size="small"
                      placeholder="Enter Email"
                      variant="outlined"
                      endAdornment={
                        <InputAdornment position="end"></InputAdornment>
                      }
                      className={classes.textField}
                      // value={this.state.lastName}
                      // onChange={this.handleChange("lastName")}
                      margin="normal"
                    />
                  </Grid>

                  <Grid item xs={5}>
                    <Col md={4}>
                      <Label style={{ marginRight: "65%" }}>
                        <strong className="modalTitle"> Contact Number</strong>
                      </Label>
                    </Col>
                    <MuiPhoneNumber
                      style={{
                        marginRight: "100px",
                        marginTop: "15px",
                        width: "65%",
                      }}
                      name="phone"
                      size="small"
                      placeholder="Contact Number"
                      variant="outlined"
                      data-cy="user-phone"
                      defaultCountry={"us"}
                      //   value={this.state.phone}
                      //   onChange={this.handlePhoneChange}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <Col md={4}>
                      <Label style={{ marginRight: "65%" }}>
                        <strong className="modalTitle"> Country</strong>
                      </Label>
                    </Col>
                    <CountrySelect />
                  </Grid>
                  <Grid item xs={5}>
                    <Col md={4}>
                      <Label style={{ marginRight: "65%" }}>
                        <strong className="modalTitle"> Time Zone</strong>
                      </Label>
                    </Col>
                    <TimezoneSelect
                      placeholder="Select Your TimeZone"
                      className={classes.timezone}
                      value={selectedTimezone}
                      onChange={setSelectedTimezone}
                    />
                  </Grid>
                  <Grid item xs={24} style={{ marginTop: "-14%" }}>
                    <Stack direction="row" spacing={2}>
                      <Avatar
                        alt="Remy Sharp"
                        src={Profile}
                        sx={{ width: 126, height: 121 }}
                      />
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <label htmlFor="contained-button-file">
                        <Input
                          accept="image/*"
                          id="contained-button-file"
                          multiple
                          type="file"
                        />
                        <button
                          variant="contained"
                          className="profile"
                          component="span"
                        >
                          <div style={{ color: "#FF771B" }}>Add Image</div>
                        </button>
                      </label>
                    </Stack>
                  </Grid>
                  <Grid item xs={5} style={{ marginTop: "45px" }}>
                    <button className="save">Save</button>
                    <button className="cancel">Cancel</button>
                  </Grid>
                </Grid>
              </Form>
            </Box>
          </Paper>
        </div>
      </div>
    </>
  );
}
