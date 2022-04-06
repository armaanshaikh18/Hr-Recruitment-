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
import Profile from "../utils/Images/pro.jpg";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import TimezoneSelect from "react-timezone-select";
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
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { Link, useHistory } from "react-router-dom";
import "../Forms/style.css";

const useStyle = makeStyles((theme) => ({
  root: {
    // marginBottom: "200px",
    top: "90px",
    width: "68%",
    marginLeft: "240px",
    // borderShadow: "none",
  },

  customBorderRadius: {
    height: "440px",
    marginTop: "80px",
    borderRadius: 25,
  },
  in: {
    width: "30%",
    height: "40px",
    "& input::placeholder": {
      fontSize: "12px",
    },
  },
  header: {
    marginTop: "15px",
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
  },
  form: {
    position: "static",
    marginLeft: "25px",
    marginTop: "40px",
    // top: 10,
  },
  forgot: {
    color: "#FF771B",
    paddingLeft: "185px",
    textDecoration: "none",
    fontSize: "12px",
  },
}));

export default function ChangePassword(props) {
  const classes = useStyle();

  const [showPassword, setShowPassword] = React.useState(false);
  const [confPassword, setConfPassword] = React.useState(false);

  const [password, setpassword] = useState();
  const [passwordConfirm, setpasswordConfirm] = useState();
  const [err, seterr] = useState();
  const [loading, setloading] = useState(false);
  const history = useHistory();

  const Input = styled("input")({
    display: "none",
  });
  console.log(password, passwordConfirm);

  const handleSubmit = (e) => {
    console.log("reach", e);
    e.preventDefault();
    setloading(true);
    if (password === passwordConfirm) {
    } else {
      seterr("Passwords do not match!");
    }
    setloading(false);
  };

  const handleTogglePassword = () =>
    setShowPassword((showPassword) => !showPassword);
  const handleToggleConfPassword = () =>
    setConfPassword((confPassword) => !confPassword);
  return (
    <>
      <div className="personal_details_parent">
        <ResponsiveDrawer />

        <div className={`${classes.root} Personal_Information `}>
          <Paper className={classes.customBorderRadius} elevation={6}>
            <Box p={1}>
              <Typography variant="h5" className={classes.header}>
                Change Password
              </Typography>

              <Form className={classes.form} onSubmit={handleSubmit}>
                <FormGroup row className={`mt-5 `}>
                  <Label for="exampleEmail" sm={5}>
                    <strong className="modalTitle">Current Password</strong>
                  </Label>
                  <Col sm={7}>
                    <OutlinedInput
                      size="small"
                      className={classes.in}
                      inputProps={{
                        pattern:
                          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$",
                      }}
                      onChange={(e) => setpassword(e.target.value)}
                      placeholder="Enter Current Password"
                      type={showPassword ? "text" : "password"}
                      required
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            //   aria-label="toggle password visibility"
                            onClick={handleTogglePassword}
                            //   onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </Col>
                  <Link href="forget-password" className={classes.forgot}>
                    Forgot Password?
                  </Link>
                </FormGroup>

                <FormGroup
                  row
                  className={`mt-5 `}
                  style={{ marginTop: "10px" }}
                >
                  <Label for="exampleEmail" sm={5}>
                    <strong className="modalTitle">Create New Password</strong>
                  </Label>
                  <Col sm={7}>
                    <OutlinedInput
                      className={classes.in}
                      type={confPassword ? "text" : "password"}
                      inputProps={{
                        pattern:
                          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$",
                      }}
                      onChange={(e) => setpasswordConfirm(e.target.value)}
                      placeholder="Create New Password"
                      required
                      // value={confirm_pass}
                      // onChange={(e) => {
                      //   setConfirmPasswd(e.target.value);
                      // }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            //   aria-label="toggle password visibility"
                            onClick={handleToggleConfPassword}
                            //   onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {confPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </Col>
                  <label style={{ color: "red" }}>{err ? err : ""}</label>
                </FormGroup>
                <Grid item xs={5} style={{ marginTop: "65px" }}>
                  <button variant="contained" type="submit" className="save">
                    Save
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
