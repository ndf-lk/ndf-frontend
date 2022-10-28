import {
  Container,
  Typography,
  Grid,
  Divider,
  TextField,
  styled,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
import AuthSectionWrapper from "../components/AuthenticationWrapper";
import { useContext, useState } from "react";
import { AuthTokenContext } from "../context/AuthTokenContext";
import AppConfig from "../config";
import axios from "axios";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { useNavigate } from "react-router-dom";

const ColorButton = styled(LoadingButton)<LoadingButtonProps>(() => ({
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
  const { token, setToken } = useContext(AuthTokenContext);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  login;

  const message = "Your notification here";

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  let navigate = useNavigate();

  const signIn = async () => {
    setIsLoading(true);
    const config = {
      method: "post",
      url: `${AppConfig.BACKEND_API}auth/sign-in`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        name: email,
        password: password,
      },
    };

    await axios(config)
      .then(function (response) {
        setToken(response.data.data);
        console.log(response.data.data);
        enqueueSnackbar("Login success", { variant: "success" });
        return navigate("/home");
      })
      .catch(function (error) {
        if (error.response.data.message) {
          enqueueSnackbar(error.response.data.message, { variant: "error" });
        } else {
          enqueueSnackbar(error.message, { variant: "error" });
        }
      });

    setIsLoading(false);
  };

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
          <TextField
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
          <TextField
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
                onClick={() => signIn()}
                loading={isLoading}
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
