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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  height: "52%",
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  borderRadius: "20px",
  boxShadow: 24,
  p: 3,
  zIndex: 10,
  //   overflow: "scroll",
};
const useStyles = makeStyles((theme) => ({
  //   grid: {
  //     marginTop: "25px",
  //     padding: "0 27px",
  //     marginRight: "45px",
  //   },
  textField: {
    // marginLeft: "45px",
    marginRight: "90px",
    width: "140%",
  },
  header: {
    marginTop: "10px",
    marginLeft: "25px",
    textAlign: "left",
    color: "#211572",
    fontWeight: "bold",
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
          <Typography variant="h6" className={classes.header}>
            Create Album
          </Typography>
          <Form>
            <Grid item xs={8}>
              <Col md={8}>
                <Label
                  style={{
                    marginRight: "65%",
                    color: "#130D3C",
                  }}
                >
                  <strong style={{ color: "#130D3C", fontSize: "12px" }}>
                    Album Name
                  </strong>
                </Label>
              </Col>
              <TextField
                id="album"
                label="Album Name"
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
                      <strong style={{ color: "#130D3C", fontSize: "12px" }}>
                        Images (Max Size limit is 2MB)
                      </strong>
                      <Paper
                        variant="outlined"
                        elevation={2}
                        square
                        style={{ height: 100, width: 400, marginTop: "20px" }}
                      >
                        <Typography
                          variant="h8"
                          style={{
                            color: "#D2D4D6",
                            marginLeft: "60px",
                            fontSize: "14px",
                          }}
                        >
                          Drop file here format should be PNG/JPG
                        </Typography>

                        <Stack direction="row" alignItems="center" spacing={2}>
                          <label htmlFor="contained-button-file">
                            <Input
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
                            />
                          </label>
                        </Stack>
                      </Paper>
                    </Label>
                  </Col>
                </Grid>
              </Grid>
              <Grid
                item
                xs={6}
                style={{ marginLeft: "-20px", marginTop: "5px" }}
              >
                <Button
                  variant="contained"
                  style={{
                    float: "left",
                    marginLeft: "30px",
                    // padding: "10px 24px",
                    //   textAlign: "left",
                    color: "#fff",
                    backgroundColor: "#FF771B",
                    // width: "65px",
                    borderRadius: "5px",
                  }}
                >
                  Create
                </Button>
                <Button
                  variant="contained"
                  onClick={closeModal}
                  style={{
                    marginTop: "-65px",
                    //   float: "left",
                    marginLeft: "140px",
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
            </Grid>
          </Form>
        </Box>
      </Modal>
    </div>
  );
}
