import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Row,
  Alert,
} from "reactstrap";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import MuiPhoneNumber from "material-ui-phone-number";
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
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import AddVideoModal from "../modals/AddVideosModal";
import Link from "@mui/material/Link";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    // top: "90px",
    width: "80%",
    marginLeft: "240px",
  },

  customBorderRadius: {
    height: "1000px",
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
  },
}));

export default function Variants(props) {
  const classes = useStyles();
  const [addVideo, setAddVideo] = useState(false);
  const history = useHistory();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const preventDefault = (event) => event.preventDefault();

  const AddVideo = () => {
    setAddVideo(true);
  };
  console.log(addVideo);
  const closeVideo = () => {
    setAddVideo(false);
  };

  const Input = styled("input")({
    display: "none",
  });
  return (
    <>
      <div className="personal_details_parent">
        <ResponsiveDrawer />

        <div className={`${classes.root} Personal_Information `}>
          <Paper className={classes.customBorderRadius} elevation={15}>
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
                  onClick={() => {
                    history.push("companyinfo");
                  }}
                  underline="hover"
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
                Company Video links
              </Typography>
              <Button
                variant="contained"
                onClick={AddVideo}
                component="span"
                style={{
                  //   paddingLeft: "25px",

                  float: "right",
                  backgroundColor: "#FF771B",
                  color: "#fff",
                }}
              >
                Add Videos
              </Button>
            </Box>
          </Paper>
        </div>
      </div>
      <AddVideoModal show={addVideo} closeModal={closeVideo} />
    </>
  );
}
