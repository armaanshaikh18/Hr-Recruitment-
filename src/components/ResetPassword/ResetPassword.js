import React, { Fragment, useState } from "react";
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
import auth from "../Login/auth";

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

const useStyle = makeStyles({
  header: {
    marginTop: "-38%",
    // marginBottom: "-250px",
    marginLeft: "900px",
    width: "25%",
    borderRadius: "15px",
    height: "350px",
  },
  root: {
    position: "absolute",
    left: 940,
    bottom: 220,
    // top: 10,
  },
  reset: {
    marginTop: "50px",
    marginRight: "50px",
    color: "#211572",
  },
  back: {
    height: "550px",
    width: "750px",
    marginRight: "40%",
    marginTop: "2%",
  },
  cliq: {
    marginRight: "80%",
    marginTop: "",
  },
  btn1: {
    left: "-100px",
    marginTop: "55px",
    color: "white",
    backgroundColor: "#3598CB",
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
  //   const dispatch = useDispatch();
  //   const [curr_pass, setCurrentPasswd] = useState("");
  //   const [new_pass, setNewPasswd] = useState("");
  //   const [confirm_pass, setConfirmPasswd] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  //   const onSubmit = async () => {
  //     const data = {
  //       current_password: curr_pass,
  //       new_password: new_pass,
  //       confirm_password: confirm_pass,
  //     };
  // console.log(data);
  // await dispatch(onChangePassword(data));
  //   };

  //   const msg = useSelector((state) => {
  //     return state.accounts;
  //   });

  // console.log(msg);
  //   const { error_msg, success_msg } = msg;

  const handleTogglePassword = () =>
    setShowPassword((showPassword) => !showPassword);

  return (
    <Fragment>
      <Grid style={{ marginTop: "10px" }}>
        <img src={CliqHR} alt="cliq" className={classes.cliq} />
      </Grid>
      <Grid>
        {/* <img src={CliqHR} alt="cliq" /> */}
        <img src={signin} alt="lap" className={classes.back} />
      </Grid>
      {/* <Header title="Change Password"></Header> */}

      {/* <Grid>  
               <InputBase 
                 className={classes.searchInput}
                 placeholder="Search"
                onChange={(e)=>searchItem(e.target.value)}
                                
                value={search}
                 startAdornment={<SearchOutlinedIcon fontSize="small" />} 
                    />
            
            </Grid>  */}

      {/* <Header className="col-md-2"></Header> */}

      <Paper
        elevation={3}
        style={{ borderRadius: "10px" }}
        className={classes.header}
      >
        <div>
          <h2 className={classes.reset}>Reset Your Password</h2>
        </div>
        <Form className={classes.root}>
          <FormGroup row className={`mt-5 `}>
            <Label for="exampleEmail" sm={5}>
              <strong style={{ marginRight: "65%", fontSize: "12px" }}>
                New Password
              </strong>
            </Label>
            <Col sm={7}>
              {/* <Input  type="password" name="select2"  id="exampleSelect" value={new_pass} onChange={(e)=>{setNewPasswd(e.target.value)}} > */}
              <OutlinedInput
                className={classes.in}
                // id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                // value={new_pass}
                // onChange={(e) => {
                //   setNewPasswd(e.target.value);
                // }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      //   aria-label="toggle password visibility"
                      //   onClick={handleTogglePassword}
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

          <FormGroup row className={`mt-5 `}>
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
                type={showPassword ? "text" : "password"}
                // value={confirm_pass}
                // onChange={(e) => {
                //   setConfirmPasswd(e.target.value);
                // }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      //   aria-label="toggle password visibility"
                      //   onClick={handleTogglePassword}
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
          <Button
            onClick={() => {
              auth.logout(() => {
                props.history.push("dashboard");
              });
            }}
            variant="contained"
            className={`${classes.btn1} mt-4`}
            size="small"
            // onClick={onSubmit}
          >
            Submit
          </Button>
        </Form>
      </Paper>
    </Fragment>
  );
}
