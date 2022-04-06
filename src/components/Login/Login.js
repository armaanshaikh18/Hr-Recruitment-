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

import { Formik, Field, ErrorMessage } from "formik";

const useStyle = makeStyles({
  paperStyle: {
    // backgroundColor: "#fff",
    // position: "absolute",
    borderRadius: "30px",
    padding: 20,
    height: 440,
    width: 350,
    margin: "80px auto",
    marginTop: "-470px",
  },
  avatarStyle: {
    backgroundColor: "#17B8C8",
    margin: 10,
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    width: "138px",
    height: "40px",
    margin: "28px 0 0 28px",
  },

  buttonStyle: {
    height: "40px",
    width: "125px",
    background: "linear-gradient(90deg,#FF771B ,#F55CA2 ,#A256A8 ,#344CB6)",
    fontSize: "12px",
    textTransform: "capitalize",
    color: "#fff",
    marginRight: 120,
    borderRadius: "8px",
    marginTop: 30,
    marginBottom: 30,
    "&:hover": {
      backgroundColor: "#17B8C8",
    },
  },
  input: {
    boxShadow: "0px 8px 24px #9891C636",
    border: "none",
    backgroundColor: "transparent",
    borderRadius: "8px",
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
        "& .MuiTextField-root": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid style={{ background: "#F7F7F9", height: "100vh" }}>
        <Grid className={classes.header}>
          <img src={CliqHR} alt="cliq" className={classes.logo} />
          <img src={background} alt="background" />
        </Grid>
        <Grid
          style={{
            marginRight: "80%",
          }}
        >
          <Grid style={{ marginTop: "60%", paddingLeft: "75%" }}>
            <img src={pizza} alt="pizza" />
          </Grid>
          <Grid style={{ paddingLeft: "320%" }}>
            <img src={eclipse} alt="eclipse" />
          </Grid>
        </Grid>
        <Grid style={{ marginLeft: "93%" }}>
          <img src={circle} alt="circle" />
        </Grid>
        <Paper elevation={2} className={classes.paperStyle}>
          <Grid
            style={{
              marginLeft: "275px",
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
                fontWeight: "900",
                fontFamily: "Nunito Sans, Black",
                marginTop: "-40px",

                font: "60px",
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
            <h4
              style={{
                font: "22px",
                marginRight: "50px",

                fontFamily: "Nunito Sans, SemiBold",
              }}
            >
              We analyzed the time saved by over
              <br /> 4,000 teams after switching to
              <br /> CliqHR to manage their projects. <br />
              That's 52 days back every year!
            </h4>
          </Grid>
          <Grid>
            <form onSubmit={handleSubmit}>
              <TextField
                size="small"
                id="email"
                type="email"
                className={classes.input}
                inputProps={{
                  pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$",
                }}
                placeholder="Your  Email Address"
                name="email"
                fullWidth
                variant="outlined"
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              <Button
                type="submit"
                className={`${classes.buttonStyle} mt-2`}
                variant="contained"
                // onClick={(e) => handleSubmit(e)}
              >
                Get more time
              </Button>
              <Grid
                style={{
                  marginLeft: "275px",
                  marginTop: "-75px",
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

export default EnterEmail;
