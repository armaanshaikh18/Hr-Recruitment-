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
  FormControlLabel,
  Switch,
  LoadingButton,
} from "@mui/material";
import TextField from "@material-ui/core/TextField";
import Top from "../../utils/Images/modalTop.svg";
import { makeStyles } from "@material-ui/core/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "35%",
  // height: "115%",

  bgcolor: "background.paper",
  //   border: "2px solid #000",
  borderRadius: "20px",
  boxShadow: 24,
  p: 2,
  zIndex: 10,
  // overflow: "scroll",
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
  modalTop: {
    left: "552px",
    width: "521px",
    height: "12px",
    // bottom: "65px",
  },
}));
export default function AddVideoModal({ show, closeModal }) {
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
          <Typography variant="h6" className={classes.header}>
            Add Video
          </Typography>
          <hr></hr>
          <Form>
            <Grid item xs={6}>
              <Col md={8}>
                <Label
                  style={{
                    marginRight: "65%",
                    color: "#130D3C",
                  }}
                >
                  <strong style={{ color: "#130D3C", fontSize: "14px" }}>
                    {" "}
                    Title{" "}
                  </strong>
                </Label>
              </Col>
              <TextField
                style={{ marginTop: "5px" }}
                id="title"
                label="Company Introduction"
                variant="outlined"
                className={classes.textField}
                // value={this.state.firstName}
                // onChange={this.handleChange("firstName")}
                margin="normal"
              />
            </Grid>
            <Grid item xs={5}>
              <Col md={8}>
                <Label
                  style={{
                    marginRight: "65%",
                    color: "#130D3C",
                  }}
                >
                  <strong style={{ color: "#130D3C" }}> Description </strong>
                </Label>
              </Col>

              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Enter Company Description"
                style={{ width: 500, height: 100 }}
              />
            </Grid>
            <Grid item xs={6}>
              <Col md={8}>
                <Label
                  style={{
                    marginRight: "65%",
                    color: "#130D3C",
                  }}
                >
                  <strong style={{ color: "#130D3C" }}> Link </strong>
                </Label>
              </Col>

              <TextField
                style={{ marginTop: "5px" }}
                id="first-name"
                label="Video Link"
                variant="outlined"
                className={classes.textField}
                // value={this.state.firstName}
                // onChange={this.handleChange("firstName")}
                margin="normal"
              />
              <Button
                variant="contained"
                component="span"
                style={{
                  marginTop: "5px",
                  //   paddingLeft: "25px",
                  marginLeft: "10px",
                  backgroundColor: "#FF771B1A",
                  color: "#FF771B",
                }}
              >
                Refresh Link
              </Button>
            </Grid>
            <br />
            <Grid item xs={5}>
              <Col md={8}>
                <Label
                  style={{
                    marginRight: "65%",
                    color: "#130D3C",
                  }}
                >
                  <strong style={{ color: "#130D3C" }}> Thumbnail </strong>
                </Label>
              </Col>
            </Grid>
            <Box
              sx={{
                display: "flex",
                "& > :not(style)": {
                  m: 1,
                  width: 120,
                  height: 120,
                },
              }}
            >
              <Button
                variant="contained"
                type="file"
                component="span"
                style={{
                  marginTop: "5px",
                  //   paddingLeft: "25px",
                  marginLeft: "10px",
                  backgroundColor: "#FFF",
                  color: "#807AAC",
                }}
              >
                Upload
              </Button>
              <Button
                variant="contained"
                component="span"
                style={{
                  marginTop: "5px",
                  //   paddingLeft: "25px",
                  marginLeft: "10px",
                  backgroundColor: "#FFF",
                  color: "#807AAC",
                }}
              >
                Upload
              </Button>
              <Button
                variant="contained"
                component="span"
                style={{
                  marginTop: "5px",
                  //   paddingLeft: "25px",
                  marginLeft: "10px",
                  backgroundColor: "#FFF",
                  color: "#807AAC",
                }}
              >
                Upload
              </Button>
              <Button
                variant="contained"
                component="span"
                style={{
                  marginTop: "5px",
                  //   paddingLeft: "25px",
                  marginLeft: "10px",
                  backgroundColor: "#FFF",
                  color: "#807AAC",
                }}
              >
                Upload
              </Button>
            </Box>
            <FormControlLabel
              sx={{
                display: "block",
              }}
              label="Publish"
              control={
                <Switch
                  //   checked={loading}
                  //   onChange={() => setLoading(!loading)}
                  //   name="loading"
                  color="primary"
                />
              }
            />
            <Grid item xs={5} style={{ marginLeft: "-20px" }}>
              <Button
                variant="contained"
                style={{
                  float: "left",
                  marginLeft: "28px",
                  //   padding: "10px 24px",
                  //   textAlign: "left",
                  color: "#fff",
                  backgroundColor: "#FF771B",
                  //   width: "65px",
                  borderRadius: "5px",
                }}
              >
                Send
              </Button>
              <Button
                variant="contained"
                onClick={closeModal}
                style={{
                  //   float: "left",
                  marginLeft: "30px",
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
