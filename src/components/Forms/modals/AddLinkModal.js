import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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
import Typography from "@mui/material/Typography";
import Grid from "@material-ui/core/Grid";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import {
  Modal,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  LoadingButton,
} from "@mui/material";
import twitter from "../../utils/Images/twitter.png";
import facebook from "../../utils/Images/book.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextField from "@material-ui/core/TextField";
import Top from "../../utils/Images/modalTop.svg";

import { makeStyles } from "@material-ui/core/styles";

const style = {
  position: "absolute",
  top: "53%",
  left: "80%",
  transform: "translate(-50%, -50%)",
  width: "25%",
  height: "45%",
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  borderRadius: "20px",
  boxShadow: 24,
  p: 3,
  zIndex: 10,
  //   overflow: "scroll",
};
const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: "25px",
    padding: "0 27px",
    marginRight: "45px",
  },
  textField: {
    // marginLeft: "45px",
    marginRight: "90px",
    width: "200%",
  },
  header: {
    marginTop: "10px",
    marginLeft: "25px",
    textAlign: "left",
    color: "#211572",
    fontWeight: "bold",
  },
  icons: {
    top: " 592px",
    left: " 1300px",
    width: "26px",
    height: "18px",
    marginRight: "5px",
  },
  // modalTop: {
  //   left: "552px",
  //   width: "521px",
  //   height: "12px",
  // },
}));
export default function AddLinkModal({ show, closeModal }) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        open={show}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <img src={Top} alt="top" className={classes.modalTop} /> */}

          <Form>
            <Grid item xs={6}>
              <Col md={4}>
                <Label
                  style={{
                    marginRight: "65%",
                    color: "#130D3C",
                  }}
                >
                  <strong
                    style={{
                      color: "#130D3C",
                      fontSize: "14px",
                      display: "inline-block",
                    }}
                  >
                    Select Social Profile
                  </strong>
                </Label>
                <Box sx={{ minWidth: 120, marginTop: "20px" }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Social
                    </InputLabel>
                    <Select
                      style={{ width: "200%" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      //   value={age}
                      label="Social "
                      //   onChange={handleChange}
                    >
                      <MenuItem value={1} className={classes.menu}>
                        <img
                          src={twitter}
                          alt="tweet"
                          className={classes.icons}
                        />
                        Twitter
                      </MenuItem>
                      <MenuItem value={1} className={classes.menu}>
                        <img
                          src={facebook}
                          alt="face"
                          className={classes.icons}
                        />
                        Facebook
                      </MenuItem>
                      {/* <i>
                        <FontAwesomeIcon icon="fa-brands fa-facebook" />
                      </i> */}
                      {/* <MenuItem value={2}>Facebook</MenuItem>
                      <MenuItem value={3}>Instagram</MenuItem> */}
                    </Select>
                  </FormControl>
                </Box>
              </Col>
            </Grid>
            <Grid item xs={6} style={{ marginTop: "10px" }}>
              <Col md={8}>
                <Label
                  style={{
                    marginRight: "65%",
                    color: "#130D3C",
                  }}
                >
                  <strong
                    style={{
                      color: "#130D3C",
                      fontSize: "14px",
                    }}
                  >
                    Link
                  </strong>
                </Label>
              </Col>
              <TextField
                id="link"
                label="Enter Link"
                variant="outlined"
                className={classes.textField}
                // value={this.state.firstName}
                // onChange={this.handleChange("firstName")}
                margin="normal"
              />
            </Grid>

            <Grid
              item
              xs={6}
              style={{ marginLeft: "-20px", marginTop: "25px" }}
            >
              <Button
                variant="contained"
                style={{
                  float: "left",
                  marginLeft: "30px",
                  //   padding: "10px 24px",
                  //   textAlign: "left",
                  color: "#fff",
                  backgroundColor: "#FF771B",
                  //   width: "65px",
                  borderRadius: "5px",
                }}
              >
                Save
              </Button>
              <Button
                variant="contained"
                onClick={closeModal}
                style={{
                  marginTop: "-65px",
                  //   float: "left",
                  marginLeft: "120px",
                  //   padding: "10px 24px",
                  //   textAlign: "left",
                  color: "#130D3C",
                  backgroundColor: "#FFF",
                  width: "25%",
                  borderRadius: "5px",
                }}
              >
                Cancel
              </Button>
            </Grid>
          </Form>
        </Box>
      </Modal>
    </div>
  );
}
