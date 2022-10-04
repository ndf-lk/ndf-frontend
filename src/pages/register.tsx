import {
  TextField,
  Container,
  Paper,
  Typography,
  Divider,
} from "@mui/material";
import { useState } from "react";

const RegisterPage = () => {
  return (
    <>
      <Container sx={{ mt: 8 }}>
        <Paper
          variant="outlined"
          square
          sx={{ p: 4, borderTop: (t) => `7px solid #170F1E` }}
        >
          <Typography variant={"h2"}>Registration Details</Typography>
          <Divider sx={{ mt: 4, mb: 2 }} />
          <Typography variant={"body1"} sx={{ mt: 3 }}>
            Please enter your team member details to register
          </Typography>
        </Paper>

        <Paper variant="outlined" square sx={{ p: 5, mt: 7, mb: 7 }}>
          <Typography variant={"h5"}>Team Name</Typography>

          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            fullWidth
            sx={{ mt: 4 }}
          />
        </Paper>

        <Paper variant="outlined" square sx={{ p: 5, mt: 7, mb: 7 }}>
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            fullWidth
            sx={{ mt: 4 }}
          />

          <TextField
            id="outlined-basic"
            label="Batch"
            variant="outlined"
            fullWidth
            sx={{ mt: 4 }}
          />

          <TextField
            id="outlined-basic"
            label="Student ID"
            variant="outlined"
            fullWidth
            sx={{ mt: 4 }}
          />

          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            fullWidth
            sx={{ mt: 4 }}
          />

          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            fullWidth
            sx={{ mt: 4 }}
          />

          <TextField
            id="outlined-basic"
            label="Guardian Name"
            variant="outlined"
            fullWidth
            sx={{ mt: 4 }}
          />

          <TextField
            id="outlined-basic"
            label="Guardian’s Phone Number "
            variant="outlined"
            fullWidth
            sx={{ mt: 4, mb: 4 }}
          />
        </Paper>
      </Container>
    </>
  );
};

export default RegisterPage;
