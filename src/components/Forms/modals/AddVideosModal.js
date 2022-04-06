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
import "../../Forms/style.css";
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
    border: "1px solid #E1E3E6",
    borderRadius: "8px",
    background: "transparent",
    marginRight: "90px",
    width: "200%",
    "& input::placeholder": {
      fontSize: "12px",
    },
  },
  header: {
    marginTop: "10px",
    marginLeft: "25px",
    textAlign: "left",
    color: "#211572",
    fontWeight: "900",
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
          <Typography variant="h7" className={classes.header}>
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
                  <strong className="modalTitle"> Title </strong>
                </Label>
              </Col>
              <TextField
                style={{ marginTop: "5px" }}
                id="title"
                size="small"
                placeholder="Company Introduction"
                variant="outlined"
                className={classes.textField}
                // value={this.state.firstName}
                // onChange={this.handleChange("firstName")}
                margin="normal"
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
                  <strong className="modalTitle"> Description </strong>
                </Label>
              </Col>
              <TextField
                style={{ marginTop: "5px" }}
                id="title"
                multiline={true}
                rows={4}
                placeholder="Company Introduction"
                variant="outlined"
                className={classes.textField}
                // value={this.state.firstName}
                // onChange={this.handleChange("firstName")}
                margin="normal"
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
                  <strong className="modalTitle"> Link </strong>
                </Label>
              </Col>

              <TextField
                style={{ marginTop: "5px" }}
                id="first-name"
                size="small"
                placeholder="Video Link"
                variant="outlined"
                className={classes.textField}
                // value={this.state.firstName}
                // onChange={this.handleChange("firstName")}
                margin="normal"
              />
              <button
                variant="contained"
                component="span"
                className="profile"
                style={{ marginBottom: "10px" }}
              >
                Refresh Link
              </button>
            </Grid>

            <Grid item xs={5}>
              <Col md={8}>
                <Label
                  style={{
                    marginRight: "65%",
                    color: "#130D3C",
                  }}
                >
                  <strong className="modalTitle"> Thumbnail </strong>
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
              style={{ marginTop: "15px", marginBottom: "15px" }}
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

            <Grid item xs={12}>
              <button variant="contained" className="save">
                Send
              </button>
              <button
                variant="contained"
                onClick={closeModal}
                className="cancel"
              >
                Cancel
              </button>
            </Grid>
          </Form>
        </Box>
      </Modal>
    </div>
  );
}
