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
import MuiPhoneNumber from "material-ui-phone-number";
import Profile from "../../utils/Images/pro.jpg";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import CountrySelect from "../CountrySelect";
// import Profile from "../utils/Images/pro.jpg";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import TimezoneSelect from "react-timezone-select";
import ResponsiveDrawer from "../../Dashboard/Sidebar/ResponsiveDrawer";
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
import Customize from "../../../core/Customize";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
// import CountrySelect from "./CountrySelect";
import Link from "@mui/material/Link";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import CompanyText from "../CompanyText";
// import CompanyInfo from "../Forms/company/CompanyInfo";
import { useHistory } from "react-router-dom";
import "../../Forms/style.css";
const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: theme.palette.action.selected,

    borderRight: "5px solid #FF771B",
  },
  root: {
    // top: "90px",
    width: "80%",
    marginLeft: "240px",
  },

  customBorderRadius: {
    height: "1220px",
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
    marginLeft: "25px",
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
    // marginLeft: "45px",
    marginRight: "90px",
    width: "65%",
    "& input::placeholder": {
      fontSize: "12px",
    },
  },
  grid: {
    marginTop: "25px",
    padding: "0 27px",
  },
}));

export default function Variants(props) {
  const classes = useStyles();
  const history = useHistory();
  const [firstname, setFirstName] = useState("");
  // const [editorState, setEditorState] = useState("");
  const [lastname, setLastName] = useState("");
  const preventDefault = (event) => event.preventDefault();

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
                Company Profile
              </Typography>
              <Box
                sx={{
                  marginLeft: "25px",
                  marginTop: "12px",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "left",

                  typography: "body1",
                  "& > :not(style) + :not(style)": {
                    ml: 2,
                  },
                }}
                onClick={preventDefault}
              >
                <Link
                  activeStyle={{ color: "#FF771B" }}
                  onClick={() => {
                    history.push("companyinfo");
                  }}
                  underline="hover"
                  cursor="pointer"
                >
                  Company Info
                </Link>
                <br />
                <Link
                  onClick={() => {
                    history.push("companyvideo");
                  }}
                  underline="hover"
                  style={{ marginLeft: "30px" }}
                >
                  Videos
                </Link>

                <br />
                <Link
                  onClick={() => {
                    history.push("companylink");
                  }}
                  underline="hover"
                  style={{ marginLeft: "30px" }}
                >
                  Links
                </Link>
                <br />
                <Link
                  onClick={() => {
                    history.push("companyphoto");
                  }}
                  underline="hover"
                  style={{ marginLeft: "30px" }}
                >
                  Photos
                </Link>
                <br />
              </Box>
              <hr></hr>
              <Typography variant="h8" className={classes.header}>
                Company Information
              </Typography>

              <Form>
                <Grid container className={classes.grid}>
                  <Grid item xs={5}>
                    <Col md={4}>
                      <Label
                        style={{
                          marginRight: "65%",
                          color: "#130D3C",
                        }}
                      >
                        <strong className="modalTitle"> Company Name</strong>
                      </Label>
                    </Col>
                    <TextField
                      size="small"
                      id="first-name"
                      placeholder="Enter Company Name"
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
                        <strong className="modalTitle">Company Website</strong>
                      </Label>
                    </Col>
                    <TextField
                      size="small"
                      id="last-name"
                      placeholder="Enter Company Website"
                      variant="outlined"
                      className={classes.textField}
                      // value={this.state.lastName}
                      // onChange={this.handleChange("lastName")}
                      margin="normal"
                    />
                  </Grid>
                </Grid>
                <Grid container className={classes.grid}>
                  <Grid item xs={5}>
                    <Col md={4}>
                      <Label
                        style={{
                          marginRight: "65%",
                          color: "#130D3C",
                        }}
                      >
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
                      placeholder="Contact Number"
                      size="small"
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
                        <strong className="modalTitle">Industry</strong>
                      </Label>
                    </Col>
                    <TextField
                      size="small"
                      id="last-name"
                      placeholder="Select Industry"
                      variant="outlined"
                      className={classes.textField}
                      // value={this.state.lastName}
                      // onChange={this.handleChange("lastName")}
                      margin="normal"
                    />
                  </Grid>
                </Grid>
                <Grid container className={classes.grid}>
                  <Grid item xs={5}>
                    <Col md={4}>
                      <Label
                        style={{
                          marginRight: "65%",
                          color: "#130D3C",
                        }}
                      >
                        <strong className="modalTitle"> Address Line 1</strong>
                      </Label>
                    </Col>
                    <TextField
                      size="small"
                      id="first-name"
                      placeholder="Area/Street/Landmark"
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
                        <strong className="modalTitle">Address Line 2</strong>
                      </Label>
                    </Col>
                    <TextField
                      size="small"
                      id="last-name"
                      placeholder="City/Town/Location"
                      variant="outlined"
                      className={classes.textField}
                      // value={this.state.lastName}
                      // onChange={this.handleChange("lastName")}
                      margin="normal"
                    />
                  </Grid>
                </Grid>
                <Grid container className={classes.grid}>
                  <Grid item xs={5}>
                    <Col md={4}>
                      <Label
                        style={{
                          marginRight: "65%",
                          color: "#130D3C",
                        }}
                      >
                        <strong className="modalTitle"> Country</strong>
                      </Label>
                    </Col>
                    <CountrySelect />
                  </Grid>
                  <Grid item xs={5}>
                    <Col md={4}>
                      <Label style={{ marginRight: "65%" }}>
                        <strong className="modalTitle">Zip Code</strong>
                      </Label>
                    </Col>
                    <TextField
                      size="small"
                      id="last-name"
                      placeholder="Enter Your Zip Code"
                      variant="outlined"
                      className={classes.textField}
                      // value={this.state.lastName}
                      // onChange={this.handleChange("lastName")}
                      margin="normal"
                    />
                  </Grid>
                </Grid>
                <Grid container className={classes.grid}>
                  <Grid item xs={5}>
                    <Col md={4}>
                      <Label
                        style={{
                          marginRight: "65%",
                          color: "#130D3C",
                        }}
                      >
                        <strong className="modalTitle">About Company</strong>
                      </Label>
                      <CompanyText />
                    </Col>
                  </Grid>
                </Grid>
                <Grid container className={classes.grid}>
                  <Grid item xs={5}>
                    <Col md={4}>
                      <Label
                        style={{
                          marginRight: "65%",
                          color: "#130D3C",
                        }}
                      >
                        <strong className="modalTitle">Attach File</strong>
                        <Paper
                          variant="outlined"
                          elevation={2}
                          square
                          style={{
                            height: 120,
                            width: 850,
                            textAlign: "center",
                          }}
                        >
                          <Typography variant="h12" className="paper-text">
                            Drop file here format should be PDF
                            <br />
                            <div className="midon">OR</div>
                          </Typography>

                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={2}
                            style={{ justifyContent: "center" }}
                          >
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
                                className="upload"
                              >
                                Upload File
                              </Button>
                            </label>
                          </Stack>
                        </Paper>
                      </Label>
                    </Col>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={24}
                  style={{ marginTop: "-70%", marginLeft: "950px" }}
                >
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
                      <button className="profile">Add Logo</button>
                    </label>
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={5}
                  style={{ marginTop: "560px", marginLeft: "25px" }}
                >
                  <button variant="contained" className="save">
                    Send
                  </button>
                  <button variant="contained" className="cancel">
                    Cancel
                  </button>
                </Grid>
              </Form>
            </Box>
          </Paper>
        </div>
      </div>
    </>
  );
}
