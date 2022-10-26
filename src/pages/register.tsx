import {
  Container,
  Typography,
  Box,
  Grid,
  Divider,
  TextField,
  Button,
  ButtonProps,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import AuthSectionWrapper from "../components/AuthenticationWrapper";
//import { InputLabel } from "../components/InuptLabel";

const ColorButton = styled(Button)<ButtonProps>(() => ({
  color: "#FFFFFF",
  fontSize: "16px",
  fontWeight: 700,
  textTransform: "none",
  backgroundColor: "#871C25",
  "&:hover": {
    backgroundColor: "#871C25",
  },
}));

const RegisterPage = () => {
  return (
    <>
      <AuthSectionWrapper>
        <Container sx={{ mt: { xs: 0, sm: 10, md: 10 } }} maxWidth="md">
          <Typography
            variant="h5"
            style={{
              fontWeight: 700,
              fontSize: "24px",
              color: "#494949",
              fontFamily: "Open Sans",
            }}
          >
            Register
          </Typography>
          <Typography
            variant="h5"
            sx={{ mt: 5 }}
            style={{
              fontWeight: 700,
              color: "#494949",
              fontSize: "20px",
              fontFamily: "Open Sans",
            }}
          >
            Join NDF now
          </Typography>
          <Typography
            sx={{ mt: 1 }}
            style={{
              fontWeight: 600,
              color: "#868585",
              fontSize: "16px",
              fontFamily: "Open Sans",
            }}
          >
            Lets get you all set up so you can verify your personal account and
            begin setting up your profile
          </Typography>
          <Divider sx={{ mt: 4, mb: 3 }} />

          <Box sx={{ mt: 5 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={4} sm={4} md={6}>
                <InputLabel text={"First Name"} />
                <TextField fullWidth sx={{ mb: 1, mt: 1 }} variant="outlined" />
              </Grid>

              <Grid item xs={4} sm={4} md={6}>
                <InputLabel text={"Last Name"} />
                <TextField fullWidth sx={{ mb: 1, mt: 1 }} variant="outlined" />
              </Grid>

              <Grid item xs={4} sm={4} md={6}>
                <InputLabel text={"Phone Number"} />
                <TextField fullWidth sx={{ mb: 1, mt: 1 }} variant="outlined" />
              </Grid>

              <Grid item xs={4} sm={4} md={6}>
                <InputLabel text={"Email"} />
                <TextField fullWidth sx={{ mb: 1, mt: 1 }} variant="outlined" />
              </Grid>

              <Grid item xs={4} sm={8} md={12}>
                <InputLabel text={"Password"} />
                <TextField fullWidth sx={{ mb: 1, mt: 1 }} variant="outlined" />
              </Grid>

              <Grid item xs={4} sm={8} md={12}>
                <InputLabel text={"Confirm password"} />
                <TextField fullWidth sx={{ mb: 1, mt: 1 }} variant="outlined" />
              </Grid>
            </Grid>
          </Box>

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 4, md: 10 }}
          >
            <Grid item xs={4} sm={4} md={4}>
              <ColorButton
                variant="contained"
                fullWidth
                size="large"
                sx={{ mt: 5 }}
              >
                Sign up
              </ColorButton>
            </Grid>
          </Grid>

          <Typography
            variant="h5"
            sx={{ mb: 1, mt: 3 }}
            style={{
              color: "#333333",
              fontSize: "14px",
              fontFamily: "Open Sans",
            }}
          >
            Do not have an account ?{" "}
            <Typography
              component={Link}
              to="/login"
              style={{
                fontWeight: 700,
                color: "#333333",
                fontSize: "14px",
                fontFamily: "Open Sans",
              }}
            >
              Login here
            </Typography>
          </Typography>
        </Container>
      </AuthSectionWrapper>
    </>
  );
};

const InputLabel = ({ text }: { text: string }) => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{ mb: 1 }}
        style={{
          fontWeight: 700,
          color: "#333333",
          fontSize: "16px",
          fontFamily: "Open Sans",
        }}
      >
        {text}
      </Typography>
    </>
  );
};

export default RegisterPage;
