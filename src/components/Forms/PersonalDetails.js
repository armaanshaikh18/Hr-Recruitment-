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
  },
  headerinfo: {
    textAlign: "left",
    marginRight: "65%",
    color: "#D2D4D6",
  },
  textField: {
    // marginLeft: "45px",
    marginRight: "90px",
    width: "65%",
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
                        <strong style={{ color: "#130D3C" }}>
                          {" "}
                          First Name
                        </strong>
                      </Label>
                    </Col>
                    <TextField
                      id="first-name"
                      label="First Name"
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
                        <strong>Last Name</strong>
                      </Label>
                    </Col>
                    <TextField
                      id="last-name"
                      label="Last Name"
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
                        <strong>Email ID</strong>
                      </Label>
                    </Col>
                    <TextField
                      id="email"
                      label="Email"
                      type="email"
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
                        <strong> Contact No</strong>
                      </Label>
                    </Col>
                    <MuiPhoneNumber
                      style={{
                        marginRight: "100px",
                        marginTop: "15px",
                        width: "65%",
                      }}
                      name="phone"
                      variant="outlined"
                      label="Phone Number"
                      data-cy="user-phone"
                      defaultCountry={"us"}
                      //   value={this.state.phone}
                      //   onChange={this.handlePhoneChange}
                    />
                    {/* <TextField
              id="contact"
              label="Contact"
              variant="outlined"
              className={classes.textField}
              type="number"
              // maxlength="10"
              // value={this.state.lastName}
              // onChange={this.handleChange("lastName")}
              margin="normal"
            /> */}
                  </Grid>
                  <Grid item xs={5}>
                    <Col md={4}>
                      <Label style={{ marginRight: "65%" }}>
                        <strong> Select Country</strong>
                      </Label>
                    </Col>
                    {/* <InputLabel id="demo-multiple-name-label">Name</InputLabel> */}
                    <CountrySelect />
                    {/* <Select
              id="country"
              variant="outlined"
              className={classes.textField}
              // labelId="demo-simple-select-label"
              // id="demo-simple-select"
              // value={age}
              labelId="Country"
              margin="normal"

              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select> */}

                    {/* <TextField
              id="country"
              label="Country"
              value={props.country}
              select
              // onChange={props.handleChange("country")}
            >
              {CountryRegionData.map((option, index) => (
                <MenuItem key={option[0]} value={option}>
                  {option[0]}
                </MenuItem>
              ))}
            </TextField>
            <br />
            <TextField
              id="region"
              label="Region"
              value={props.region}
              select
              // onChange={props.handleChange("region")}
            >
              {getRegions(props.country).map((option, index) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField> */}
                  </Grid>
                  <Grid item xs={5}>
                    <Col md={4}>
                      <Label style={{ marginRight: "65%" }}>
                        <strong> Time Zone</strong>
                      </Label>
                    </Col>
                    <TimezoneSelect
                      value={selectedTimezone}
                      onChange={setSelectedTimezone}
                    />
                    {/* <TimezoneSelect /> */}
                    {/* <TimezonePicker
                      value={value}
                      onChange={({ id }) => setValue(id)}
                      date={new Date("2022-03-31T08:50:00.050Z")}
                    /> */}
                    {/* <TimezonePicker date={new Date(2019, 2, 1)} /> */}

                    {/* <Select
                      id="time"
                      variant="outlined"
                      className={classes.textField}
                      // labelId="demo-simple-select-label"
                      // id="demo-simple-select"
                      // value={age}
                      labelId="Time"
                      margin="normal"

                      // onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select> */}
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
                        <Button
                          variant="contained"
                          component="span"
                          style={{
                            marginTop: "15px",
                            marginLeft: "10px",
                            backgroundColor: "#FF771B",
                            color: "#fff",
                          }}
                        >
                          Add Image
                        </Button>
                      </label>
                    </Stack>
                  </Grid>
                  <Grid item xs={5} style={{ marginTop: "45px" }}>
                    <Button
                      variant="contained"
                      style={{
                        float: "left",
                        marginLeft: "5px",
                        //   padding: "10px 24px",
                        //   textAlign: "left",
                        color: "#fff",
                        backgroundColor: "#FF771B",
                        width: "25%",
                        borderRadius: "10px",
                      }}
                    >
                      Send
                    </Button>
                    <Button
                      variant="contained"
                      style={{
                        float: "left",
                        marginLeft: "30px",
                        //   padding: "10px 24px",
                        //   textAlign: "left",
                        color: "#130D3C",
                        backgroundColor: "#FFF",
                        width: "25%",
                        borderRadius: "10px",
                      }}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
                {/* <FormGroup xs={12}>
          <Row>
            <Col md={2}>
              <Label className={classes.lbl}>
                <strong>First Name</strong>
              </Label>
            </Col>
            <Col md={4}>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                size="small"
                // helperText={
                //   nameError ? (
                //     <span style={{ color: "red" }}>
                //       This is Required Field
                //     </span>
                //   ) : (
                //     ""
                //   )
                // }
                className={classes.inp}
                type="text"
                // value={firstname}
                // onChange={(newValue) => onChangeName(newValue)}
                name="firstname"
              ></TextField>
            </Col>

            <Col md={2}>
              <Label className={classes.lbl}>
                <strong>Last Name</strong>
              </Label>
            </Col>
            <Col md={4}>
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                size="small"
                // helperText={
                //   lastError ? (
                //     <span style={{ color: "red" }}>
                //       This is Required Field
                //     </span>
                //   ) : (
                //     ""
                //   )
                // }
                className={classes.inp}
                type="text"
                // value={lastname}
                // onChange={(newValue) => onChangeLast(newValue)}
                name="lastname"
              ></TextField>
            </Col>
          </Row>
          <FormGroup xs={12}>
            <Row>
              <Col md={2}>
                <Label className={classes.lbl}>
                  <strong>Email Id</strong>
                </Label>
              </Col>
              <Col md={4}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  size="small"
                  // helperText={
                  //   nameError ? (
                  //     <span style={{ color: "red" }}>
                  //       This is Required Field
                  //     </span>
                  //   ) : (
                  //     ""
                  //   )
                  // }
                  className={classes.inp}
                  type="email"
                  // value={firstname}
                  // onChange={(newValue) => onChangeName(newValue)}
                  name="email"
                ></TextField>
              </Col>

              <Col md={2}>
                <Label className={classes.lbl}>
                  <strong>Contact Number</strong>
                </Label>
              </Col>
              <Col md={4}>
                <TextField
                  id="outlined-basic"
                  label="Contact No"
                  variant="outlined"
                  size="small"
                  // helperText={
                  //   lastError ? (
                  //     <span style={{ color: "red" }}>
                  //       This is Required Field
                  //     </span>
                  //   ) : (
                  //     ""
                  //   )
                  // }
                  className={classes.inp}
                  type="number"
                  // value={lastname}
                  // onChange={(newValue) => onChangeLast(newValue)}
                  name="contact"
                ></TextField>
              </Col>
            </Row>
          </FormGroup>
        </FormGroup> */}
              </Form>
            </Box>
          </Paper>
        </div>
      </div>
    </>
  );
}
