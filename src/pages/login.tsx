import {
  Container,
  Typography,
  Grid,
  Divider,
  TextField,
  Button,
  ButtonProps,
  styled,
} from "@mui/material";
import { JoinNDF } from "../components/Join";
import { Link } from "react-router-dom";
import AuthSectionWrapper from "../components/AuthenticationWrapper";

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

export const LoginPage = () => {
  return (
    <>
      <AuthSectionWrapper>
        <Container sx={{ mt: { xs: 0, sm: 15, md: 15 } }} maxWidth="md">
          <Typography
            variant="h5"
            style={{
              fontWeight: 700,
              fontSize: "24px",
              color: "#494949",
              fontFamily: "Open Sans",
            }}
          >
            Log in
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
            Log into your NDF account here
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
            You can login here and gain access and edit your profile
          </Typography>
          <Divider sx={{ mt: 4, mb: 3 }} />
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
            Email
          </Typography>
          <TextField variant="outlined" fullWidth />
          <Typography
            variant="h5"
            sx={{ mb: 1, mt: 3 }}
            style={{
              fontWeight: 700,
              color: "#333333",
              fontSize: "16px",
              fontFamily: "Open Sans",
            }}
          >
            Password
          </Typography>
          <TextField variant="outlined" fullWidth />
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
                Log in
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
              to="/register"
              style={{
                fontWeight: 700,
                color: "#333333",
                fontSize: "14px",
                fontFamily: "Open Sans",
              }}
            >
              Sign Up here
            </Typography>
          </Typography>
        </Container>
      </AuthSectionWrapper>
    </>
  );
};
