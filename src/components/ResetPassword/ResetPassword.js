import React, { Fragment, useRef, useState } from "react";
import {
  Paper,
  Button,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  Toolbar,
  Table,
  Grid,
  makeStyles,
  Card,
} from "@material-ui/core";
import { useAuth } from "../Login/AuthContext";
import { Link, useHistory } from "react-router-dom";

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
} from "reactstrap";

import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import CliqHR from "../utils/Images/hr.png";
import signin from "../utils/Images/signin.png";
import { red } from "@material-ui/core/colors";

const useStyle = makeStyles({
  header: {
    marginTop: "-35%",
    width: " 371px",
    height: "383px",
    boxShadow: "0px 2px 20px #9891C61A",

    marginLeft: "950px",
    borderRadius: "15px",
  },
  root: {
    position: "static",
    marginLeft: "25px",
    marginTop: "50px",
    // top: 10,
  },
  reset: {
    // position: "absolute"
    paddingTop: "20px",
    marginTop: "140px",
    marginLeft: "30px",
    color: "#211572",
  },
  back: {
    marginTop: "3%",
    height: "453px",
    marginLeft: "100px",
    opacity: "1",
    width: "699px",
  },
  cliq: {
    marginLeft: "100px",
    marginTop: "35px",
  },
  btn1: {
    height: "35px",
    width: "115px",
    background: "linear-gradient(90deg,#262F74 ,#48367B ,#A64A8F ,#FF5DA1)",
    fontSize: "12px",
    textTransform: "capitalize",
    color: "#fff",
    marginRight: 120,
    borderRadius: "8px",
    marginTop: 50,
    marginBottom: 30,
    "&:hover": {
      backgroundColor: "#17B8C8",
    },
  },
  in: {
    height: 40,
    width: 300,
    "& input::placeholder": {
      fontSize: "12px",
    },
  },
});

export default function ChangePasswd(props) {
  const classes = useStyle();

  const [showPassword, setShowPassword] = React.useState(false);
  const [confPassword, setConfPassword] = React.useState(false);

  const [password, setpassword] = useState();
  const [passwordConfirm, setpasswordConfirm] = useState();
  const [err, seterr] = useState();
  const [loading, setloading] = useState(false);
  const history = useHistory();

  const { signUp } = useAuth();

  console.log(password, passwordConfirm);
  const handleSubmit = (e) => {
    console.log("reach", e);
    e.preventDefault();
    setloading(true);
    if (password === passwordConfirm) {
      // console.log(history.push);
      history.push("personaldetails");
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
    <Fragment>
      <Grid style={{ background: "#F7F7F9", height: "100vh" }}>
        <Grid>
          <img src={CliqHR} alt="cliq" className={classes.cliq} />
        </Grid>
        <Grid>
          <img src={signin} alt="lap" className={classes.back} />
        </Grid>

        <Paper
          elevation={1}
          style={{ borderRadius: "10px" }}
          className={classes.header}
        >
          <div>
            <h2 className={classes.reset}>Reset Your Password</h2>
          </div>
          <Form className={classes.root} onSubmit={handleSubmit}>
            <FormGroup row className={`mt-5 `}>
              <Label for="exampleEmail" sm={5}>
                <strong
                  style={{
                    marginRight: "65%",
                    fontSize: "12px",
                    color: "#130D3C",
                  }}
                >
                  Create Password
                </strong>
              </Label>
              <Col sm={7}>
                <OutlinedInput
                  placeholder="Create Password"
                  className={classes.in}
                  inputProps={{
                    pattern:
                      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$",
                  }}
                  onChange={(e) => setpassword(e.target.value)}
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
            </FormGroup>

            <FormGroup row className={`mt-5 `} style={{ marginTop: "25px" }}>
              <Label for="exampleEmail" sm={5}>
                <strong style={{ marginRight: "58%", fontSize: "12px" }}>
                  Confirm Password
                </strong>
              </Label>
              <Col sm={7}>
                <OutlinedInput
                  placeholder="Confirm Password"
                  className={classes.in}
                  type={confPassword ? "text" : "password"}
                  inputProps={{
                    pattern:
                      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$",
                  }}
                  onChange={(e) => setpasswordConfirm(e.target.value)}
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
            <Button
              variant="contained"
              className={`${classes.btn1} mt-4`}
              size="small"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Paper>
      </Grid>
    </Fragment>
  );
}
