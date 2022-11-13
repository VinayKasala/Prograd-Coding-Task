import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#c62828",
    },
  },
});

const AddReservation = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    persons: "",
    departureDate: "",
    arrivalDate: "",
    totalAmount: "",
  });
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      persons: "",
      departureDate: "",
      arrivalDate: "",
      amount: "",
    });
    setOpen(false);
  };

  const handleInput = (e) => {
    if (e.target.name === "persons") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value * 1000,
      });
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const handleSumbit = async () => {
    try {
      const res = await axios.post("", formData);
      return res;
    } catch (e) {
      console.log(e);
    }
    console.log(formData);
  };
  return (
    <div className="add-reserve">
      <ThemeProvider theme={darkTheme}>
        <Button
          variant="contained"
          className="btn"
          disableElevation
          onClick={handleClickOpen}
          id="upload-btn"
        >
          New Reservation
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add a New reservation</DialogTitle>
          <DialogContent style={{ padding: " 20px" }}>
            <TextField
              autoFocus
              margin="dense"
              id="link"
              label="Name"
              variant="outlined"
              type="text"
              name="name"
              fullWidth
              onChange={(e) => handleInput(e)}
              helperText="Please enter your name"
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email"
              type="text"
              fullWidth
              variant="outlined"
              name="email"
              onChange={(e) => handleInput(e)}
              helperText="Please enter your email"
            />
            <TextField
              autoFocus
              margin="dense"
              id="phone"
              label="Phone NUmber"
              name="phone"
              variant="outlined"
              type="text"
              fullWidth
              onChange={(e) => handleInput(e)}
              helperText="Please enter your phone number"
            />
            <TextField
              autoFocus
              margin="dense"
              id="persons"
              label="Number of persons"
              name="persons"
              variant="outlined"
              type="number"
              fullWidth
              onChange={(e) => handleInput(e)}
              helperText="Please enter number of persons"
            />

            <TextField
              id="date"
              label="Departure Date"
              name="departureDate"
              type="date"
              placeholder="Departure Date"
              onChange={(e) => handleInput(e)}
              style={{ marginTop: "18px" }}
              sx={{ width: "100%" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="date"
              label="Arrival Date"
              name="arrivalDate"
              type="date"
              placeholder="Arrival Date"
              onChange={(e) => handleInput(e)}
              style={{ marginTop: "18px" }}
              sx={{ width: "100%" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <h3>Amount to be paid:{formData.amount * 1000}</h3>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} id="upload-btn-cancel">
              Cancel
            </Button>
            <Button
              variant="contained"
              id="upload-btn-submit"
              onClick={handleSumbit}
            >
              MAKE RESERVATION
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
};

export default AddReservation;
