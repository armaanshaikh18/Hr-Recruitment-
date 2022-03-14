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
import "./Login.css";
import photo from "../utils/Images/vertical.png";
import background from "../utils/Images/vertical.png";
import image from "../utils/Images/vertical1.png";
import CliqHR from "../utils/Images/hr.png";
import circle from "../utils/Images/circle.png";

import pizza from "../utils/Images/pizza.png";
import eclipse from "../utils/Images/eclipse.png";
import emailjs from "emailjs-com";
import auth from "./auth";
import * as Yup from "yup";

// import {onLogin} from './../../../Redux/Authentication/authAction';
// import { connect } from "react-redux";
// import { withRouter, Link, useHistory } from "react-router-dom";
// import Logo from "./../../../../assets/nimap-logo.png";

// import { Formik, Form, Field, ErrorMessage } from 'formik'
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
    height: "65vh",
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
  const classes = useStyle();
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("Please enter valid email")
      .required("Required"),
  });

  const onEmailChange = (e) => {
    // setEmail(e.taget.value);
  };
  function sendEmail(e) {
    // e.preventDefault(),
    // emailjs
    //   .sendForm(
    //     "service_4qfi0sk",
    //     "template_ievl6fa",
    //     e.target,
    //     "dKflt-gKUtDiSJKZv"
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));
  }
  //   const dispatch = useDispatch();
  //   const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("")
  //   const initialValues = {
  //     email: "",
  //     password: "",
  //   };
  //   const { register, handleSubmit, errors } = useForm();

  // const validationSchema = Yup.object().shape({
  //     email: Yup.string().email('please enter valid email').required("Required"),
  //     password: Yup.string().required("Required")
  // })
  //   const history = useHistory();

  //   const onSubmit = (e) => {
  //     const data = {
  //       email: email,
  //     };

  //     dispatch(onSubmitEmail(data, history));
  //   };

  return (
    <Box
      component="form"
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
        <Grid style={{ marginRight: "80%", paddingTop: "20px auto" }}>
          <img src={CliqHR} alt="cliq" />
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
            {/* <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}> */}

            <form onSubmit={sendEmail}>
              <TextField
                style={{ width: "260px" }}
                // error
                // id="outlined-error-helper-text"
                type="email"
                className="mt-5"
                //   value={email}
                label="Enter Email Address"
                //   inputRef={register}
                name="email"
                //   onChange={(e) => setEmail(e.target.value)}
                fullWidth
                variant="outlined"
                // helperText="Enter a valid Email"
                required
              ></TextField>

              <Button
                // onClick={() => {
                //   auth.login(() => {
                //     props.history.push("/resetpassword");
                //   });
                // }}
                type="submit"
                className={`${classes.buttonStyle} mt-2`}
                variant="contained"
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
            {/*</Formik> */}
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
