import styled from "@emotion/styled";
import { Paper, Typography, Button, Box, TextField, Link } from "@mui/material";
import { useContext, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import AppConfig from "../config";
import axios from "axios";
import { useSnackbar } from "notistack";
import { AuthTokenContext } from "../context/AuthTokenContext";

const CssTextField = styled(TextField)({
  color: "white",
  label: {
    color: "white",
  },
  ".MuiInput": {
    color: "white",
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#D8532E",

    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",

      color: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",

      color: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#D8532E",
      color: "white",
    },
  },
});

export const JoinNDF = () => {
  const { token, setToken } = useContext(AuthTokenContext);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const message = "Your notification here";

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
        console.log(token);
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
      <Paper
        sx={{
          background: "#821824",
          p: 5,

          borderRadius: 1,
        }}
      >
        <center>
          <Box
            component="img"
            alt="test"
            src="/logo.png"
            height={{ xs: 45, md: 55, display: "block" }}
            width="auto"
          />
        </center>
        {isLogin ? (
          <>
            <Typography
              variant={"h5"}
              textAlign="center"
              sx={{ color: "white", mt: 5 }}
            >
              Login to your NDF Account
            </Typography>
            <Typography
              variant={"body1"}
              textAlign="center"
              sx={{ color: "white" }}
            >
              Get latest campaign updates
            </Typography>

            <Box>
              <CssTextField
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                sx={{ mt: 5 }}
                id="custom-css-outlined-input"
              />

              <CssTextField
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                sx={{ mt: 5 }}
                fullWidth
                id="custom-css-outlined-input"
              />

              <LoadingButton
                fullWidth
                sx={{ mt: 8, mb: 2 }}
                variant="contained"
                onClick={() => signIn()}
                loading={isLoading}
              >
                Sign-In
              </LoadingButton>

              <Button
                variant="text"
                onClick={() => setIsLogin(false)}
                size="small"
                style={{
                  padding: 0,
                  marginBottom: "-10%",
                  color: "#F5F5F5",
                  fontSize: 15,
                }}
              >
                Do not have a account ?
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Typography
              variant={"h5"}
              textAlign="center"
              sx={{ color: "white", mt: 5 }}
            >
              Join NDF now
            </Typography>
            <Typography
              variant={"body1"}
              textAlign="center"
              sx={{ color: "white" }}
            >
              Get latest campaign updates
            </Typography>

            <Box>
              <CssTextField
                label="Your name"
                sx={{ mt: 5 }}
                fullWidth
                id="custom-css-outlined-input"
              />

              <CssTextField
                label="Email"
                fullWidth
                sx={{ mt: 5 }}
                id="custom-css-outlined-input"
              />

              <LoadingButton
                fullWidth
                sx={{ mt: 8, mb: 2 }}
                variant="contained"
                onClick={() => signIn()}
                loading={isLoading}
              >
                Sign-Up
              </LoadingButton>

              <Button
                variant="text"
                size="small"
                onClick={() => setIsLogin(true)}
                style={{
                  padding: 0,
                  marginBottom: "-10%",
                  color: "#F5F5F5",
                  fontSize: 15,
                }}
              >
                Already have a account ?
              </Button>
            </Box>
          </>
        )}
        :
      </Paper>
    </>
  );
};