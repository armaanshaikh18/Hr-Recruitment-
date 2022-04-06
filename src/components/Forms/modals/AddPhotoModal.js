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
  Stack,
  LoadingButton,
} from "@mui/material";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "../../Forms/style.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  height: "56%",
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  borderRadius: "20px",
  boxShadow: 24,
  p: 3,
  zIndex: 10,
  //   overflow: "scroll",
};
const useStyles = makeStyles((theme) => ({
  textField: {
    // marginLeft: "45px",
    marginRight: "90px",
    width: "140%",
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
}));
export default function AddPhotoModal({ show, closeModal }) {
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
          <Typography variant="h7" className={classes.header}>
            Create Album
          </Typography>
          <hr></hr>
          <Form>
            <Grid item xs={8}>
              <Col md={8}>
                <Label
                  style={{
                    marginRight: "65%",
                    color: "#130D3C",
                  }}
                >
                  <strong className="modalTitle">Album Name</strong>
                </Label>
              </Col>
              <TextField
                id="album"
                placeholder="Album Name"
                size="small"
                variant="outlined"
                className={classes.textField}
                // value={this.state.firstName}
                // onChange={this.handleChange("firstName")}
                margin="normal"
              />
              <Grid container className={classes.grid}>
                <Grid item xs={8}>
                  <Col md={4}>
                    <Label
                      style={{
                        marginRight: "65%",
                        color: "#130D3C",
                      }}
                    >
                      <strong className="modalTitle">
                        Images (Max Size limit is 2MB)
                      </strong>
                      <Paper
                        variant="outlined"
                        elevation={2}
                        square
                        style={{
                          height: 120,
                          width: 400,
                          marginTop: "20px",
                          textAlign: "center",
                        }}
                      >
                        <Typography variant="h8" className="paper-text">
                          Drop file here format should be PNG/JPG
                        </Typography>
                        <br />
                        <div className="midon">OR</div>

                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={2}
                          style={{ justifyContent: "center" }}
                        >
                          <label htmlFor="contained-button-file">
                            {/* <Input
                              accept="image/*"
                              id="contained-button-file"
                              multiple
                              type="file"
                            /> */}
                            <button
                              variant="contained"
                              component="span"
                              className="upload"
                            >
                              Upload Images
                            </button>
                            {/* <Input
                              style={{
                                // display: "flex",
                                marginTop: "20px",
                                marginLeft: "90px",
                              }}
                              accept="image/*"
                              id="contained-button-file"
                              multiple
                              type="file"
                              label="Upload"
                            /> */}
                          </label>
                        </Stack>
                      </Paper>
                    </Label>
                  </Col>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <button variant="contained" className="save">
                  Create album
                </button>
                <button
                  variant="contained"
                  onClick={closeModal}
                  className="cancel"
                >
                  Cancel
                </button>
              </Grid>
            </Grid>
          </Form>
        </Box>
      </Modal>
    </div>
  );
}
