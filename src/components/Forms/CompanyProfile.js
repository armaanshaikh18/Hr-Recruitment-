// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import {
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Col,
//   Row,
//   Alert,
// } from "reactstrap";
// import MuiPhoneNumber from "material-ui-phone-number";
// import Profile from "../utils/Images/pro.jpg";
// import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
// import TimezoneSelect from "react-timezone-select";
// import ResponsiveDrawer from "../Dashboard/Sidebar/ResponsiveDrawer";
// import { CountryRegionData } from "react-country-region-selector";
// import TextField from "@material-ui/core/TextField";
// import SendIcon from "@mui/icons-material/Send";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
// import yellow from "@material-ui/core/colors/yellow";
// import Box from "@material-ui/core/Box";
// import InputLabel from "@mui/material/InputLabel";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import { styled } from "@mui/material/styles";
// import Typography from "@material-ui/core/Typography";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
// import CountrySelect from "./CountrySelect";
// import Link from "@mui/material/Link";
// import CompanyInfo from "../Forms/company/CompanyInfo";
// import { useHistory } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     // top: "90px",
//     width: "77%",
//     marginLeft: "20px",
//   },

//   customBorderRadius: {
//     height: "575px",
//     marginTop: "80px",
//     borderRadius: 25,
//   },
//   inp: {
//     height: "32px",
//     background: "none",
//     fontSize: "13px",
//   },
//   header: {
//     marginTop: "10px",
//     marginLeft: "25px",
//     textAlign: "left",
//     color: "#211572",
//   },
//   headerinfo: {
//     textAlign: "left",
//     marginRight: "65%",
//     color: "#D2D4D6",
//   },
//   textField: {
//     // marginLeft: "45px",
//     marginRight: "90px",
//     width: "65%",
//   },
// }));

// export default function Variants(props) {
//   const classes = useStyles();
//   const history = useHistory();
//   const [firstname, setFirstName] = useState("");
//   const [lastname, setLastName] = useState("");
//   const preventDefault = (event) => event.preventDefault();

//   const Input = styled("input")({
//     display: "none",
//   });
//   return (
//     <>
//       <div className="personal_details_parent">
//         <ResponsiveDrawer />

//         <div className={`${classes.root} Personal_Information `}>
//           <Paper className={classes.customBorderRadius} elevation={15}>
//             <Box p={1}>
//               <Typography variant="h5" className={classes.header}>
//                 Company Profile
//               </Typography>
//               <Box
//                 sx={{
//                   marginLeft: "25px",
//                   marginTop: "12px",
//                   display: "flex",
//                   flexWrap: "wrap",
//                   justifyContent: "left",
//                   typography: "body1",
//                   "& > :not(style) + :not(style)": {
//                     ml: 2,
//                   },
//                 }}
//                 onClick={preventDefault}
//               >
//                 <Link
//                   onClick={() => {
//                     history.push("companyinfo");
//                   }}
//                   underline="hover"
//                 >
//                   {" Company Info"}
//                 </Link>
//                 <br />
//                 <Link href="#" underline="hover" style={{ marginLeft: "15px" }}>
//                   {"Videos"}
//                 </Link>
//                 <br />
//                 <Link href="#" underline="hover" style={{ marginLeft: "15px" }}>
//                   {"Links"}
//                 </Link>
//                 <br />
//                 <Link href="#" underline="hover" style={{ marginLeft: "15px" }}>
//                   {"Photos"}
//                 </Link>
//                 <br />
//               </Box>
//             </Box>
//           </Paper>
//         </div>
//       </div>
//     </>
//   );
// }
