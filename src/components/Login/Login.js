import React, { Component, useState } from "react";
// import {Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {
  Paper,
  Grid,
  makeStyles,
  Avatar,
  TextField,
  Button,
  Box,
} from "@material-ui/core";

// toster
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  showErrorNotification,
  configToast,
  showSuccessNotification,
} from "../../core/Toaster";
import "./Login.css";
import { useHistory, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import photo from "../utils/Images/vertical.png";
import background from "../utils/Images/vertical.png";
import image from "../utils/Images/vertical1.png";
import CliqHR from "../utils/Images/hr.png";
import circle from "../utils/Images/circle.png";
import useForm from "../../hooks/use-forms";
import pizza from "../utils/Images/pizza.png";
import eclipse from "../utils/Images/eclipse.png";
import emailjs from "emailjs-com";
// import auth from "./AuthContext";
import * as Yup from "yup";

// import {onLogin} from './../../../Redux/Authentication/authAction';
// import { connect } from "react-redux";
// import { withRouter, Link, useHistory } from "react-router-dom";
// import Logo from "./../../../../assets/nimap-logo.png";

import { Formik, Field, ErrorMessage } from "formik";
// import * as Yup from 'yup';
// import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import EnterOtpValue from "./EnterOtp";
// import { onSubmitEmail } from "./../../../../Redux/Authentication/authAction";

const useStyle = makeStyles({
  paperStyle: {
    // backgroundColor: "#fff",
    // position: "absolute",
    borderRadius: "30px",
    padding: 20,
    height: 440,
    width: 280,
    margin: "80px auto",
    marginTop: "-500px",
  },
  avatarStyle: {
    backgroundColor: "#17B8C8",
    margin: 10,
  },

  buttonStyle: {
    background: "linear-gradient(90deg,#FF771B ,#F55CA2 ,#A256A8 ,#344CB6)",

    marginRight: 120,
    borderRadius: "8px",
    marginTop: 30,
    marginBottom: 30,
    "&:hover": {
      backgroundColor: "#17B8C8",
    },
  },
});

function EnterEmail(props) {
  // console.log(props);
  const [email, setEmail] = useState();
  const [err, seterr] = useState();

  const [loading, setloading] = useState(false);
  const classes = useStyle();
  const history = useHistory();
  const { login } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("email", email);
    history.push("resetpassword");
  }

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid>
        <Grid style={{ marginLeft: "93%" }}>
          <img src={background} alt="background" />
        </Grid>
        <Grid
          style={{
            marginRight: "80%",
          }}
        >
          <img src={CliqHR} alt="cliq" style={{ marginLeft: "55px" }} />
          <Grid style={{ marginTop: "60%", paddingLeft: "75%" }}>
            <img src={pizza} alt="pizza" />
          </Grid>
          <Grid style={{ paddingLeft: "320%" }}>
            <img src={eclipse} alt="eclipse" />
          </Grid>
          <Grid style={{ marginLeft: "465%" }}>
            <img src={circle} alt="circle" />
          </Grid>
        </Grid>
        <Paper elevation={10} className={classes.paperStyle}>
          <Grid
            style={{
              marginLeft: "205px",
              marginTop: "-20px",
              borderRadius: "20px",
            }}
          >
            {" "}
            <img src={photo} alt="photo" style={{ borderRadius: "20px" }} />
          </Grid>
          <Grid>
            <h1
              style={{
                marginTop: "-40px",
                font: "72px",
                color: "#211572",
                marginRight: "60px",
              }}
            >
              Save one day
              <br />
              every week.
              <br />
              Guarenteed.
            </h1>
          </Grid>
          <Grid>
            <h5
              style={{
                font: "15px",
                marginRight: "50px",
                fontStyle: "oblique",
              }}
            >
              We analyzed the time saved by over
              <br /> 4,000 teams after switching to
              <br /> CliqHR to manage their projects. <br />
              That's 52 days back every year!
            </h5>
          </Grid>
          <Grid>
            <form onSubmit={handleSubmit}>
              <TextField
                // error
                style={{ width: "260px" }}
                id="email"
                // value={validationSchema}
                // error
                // id="outlined-error-helper-text"
                type="email"
                // pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"}
                className="mt-5"
                inputProps={{
                  pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$",
                }}
                //   value={email}
                label="Enter Email Address"
                //   inputRef={register}
                name="email"
                //   onChange={(e) => setEmail(e.target.value)}
                fullWidth
                // helperText="Incorrect entry."
                variant="outlined"
                // helperText="Enter a valid Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              <Button
                // onClick={() => {
                //   auth.login(() => {
                //     props.history.push("/resetpassword");
                //   });
                // }}
                type="submit"
                className={`${classes.buttonStyle} mt-2`}
                variant="contained"
                // onClick={(e) => handleSubmit(e)}
              >
                Get more time
              </Button>
              <Grid
                style={{
                  marginLeft: "205px",
                  marginTop: "-70px",
                  borderRadius: "15px",
                }}
              >
                {" "}
                <img src={image} alt="photo" style={{ borderRadius: "20px" }} />
              </Grid>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );
}

// const mapStateToProps = (state)=>({
//     auth:state.auth,
// });

export default EnterEmail;
