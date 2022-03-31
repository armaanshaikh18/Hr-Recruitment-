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

// import Header from "../../../commons/Header/Header";
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
// import { useDispatch, useSelector } from "react-redux";
// import { onChangePassword } from "./../../../Redux/UserApi/UsersAction";
// import cogoToast from "cogo-toast";
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
    // marginBottom: "-250px",
    marginLeft: "950px",
    width: "25%",
    borderRadius: "15px",
    height: "470px",
  },
  root: {
    position: "static",
    marginLeft: "25px",
    marginTop: "80px",
    // top: 10,
  },
  reset: {
    // position: "absolute"
    paddingTop: "25px",
    marginTop: "50px",
    marginLeft: "30px",
    color: "#211572",
  },
  back: {
    top: "25%",
    height: "553px",
    marginLeft: "50px",
    opacity: "1",
    width: "799px",
    // width: "750px",
    // marginRight: "40%",
    // marginTop: "2%",
  },
  cliq: {
    // marginRight: "100%",
    marginLeft: "65px",
    marginTop: "25px",
  },
  btn1: {
    left: "5px",
    marginTop: "55px",
    color: "white",
    background: "linear-gradient(90deg,#FF771B ,#F55CA2 ,#A256A8 ,#344CB6)",
    "&:hover": {
      backgroundColor: "#3598CB",
    },
  },
  in: {
    height: 40,
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
      <Grid style={{ marginTop: "10px" }}>
        <img src={CliqHR} alt="cliq" className={classes.cliq} />
      </Grid>
      <Grid>
        {/* <img src={CliqHR} alt="cliq" /> */}
        <img src={signin} alt="lap" className={classes.back} />
      </Grid>

      <Paper
        elevation={3}
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
              {/* <Input  type="password" name="select2"  id="exampleSelect" value={new_pass} onChange={(e)=>{setNewPasswd(e.target.value)}} > */}
              <OutlinedInput
                className={classes.in}
                inputProps={{
                  pattern:
                    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$",
                }}
                onChange={(e) => setpassword(e.target.value)}
                // id="outlined-adornment-password"
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
                // labelWidth={70}
              />

              {/* </Input> */}
            </Col>
          </FormGroup>

          <FormGroup row className={`mt-5 `} style={{ marginTop: "25px" }}>
            <Label for="exampleEmail" sm={5}>
              <strong style={{ marginRight: "58%", fontSize: "12px" }}>
                Confirm Password
              </strong>
            </Label>
            <Col sm={7}>
              {/* <Input  type="password" name="select2"  id="exampleSelect" value={confirm_pass} onChange={(e)=>{setConfirmPasswd(e.target.value)}} >
                            
                        </Input> */}

              <OutlinedInput
                className={classes.in}
                type={confPassword ? "text" : "password"}
                inputProps={{
                  pattern:
                    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$",
                }}
                onChange={(e) => setpasswordConfirm(e.target.value)}
                // ref={passwordConfirmRef}
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
    </Fragment>
  );
}
