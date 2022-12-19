import styled from "@emotion/styled";
import { Paper, Typography, Button, Box, TextField } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { Link } from "react-router-dom";
import { useUserStore } from "../store/createUserSlice";
import { useNavigate } from "react-router-dom";
import { setAuthToken, setRefreshToken } from "../helpers/token";
import { request } from "../utils/request";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, user } = useUserStore();
  const navigate = useNavigate();

  const signIn = async () => {
    const res = await request(
      {
        path: `auth/sign-in`,
        method: "POST",
      },
      {
        name: email,
        password: password,
      },
      true
    );

    setAuthToken(res.data.idToken.jwtToken);
    setRefreshToken(res.data.refreshToken.token);

    const resUser = await request(
      {
        path: "users/me",
        method: "GET",
      },
      null,
      true
    );

    setUser(resUser.data);
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
        {user ? (
          <>
            <>
              {user && (
                <>
                  <Typography
                    variant={"h5"}
                    textAlign="center"
                    sx={{ color: "white", mt: 5 }}
                  >
                    Welcome Back {user.firstName}
                  </Typography>

                  <CssTextField
                    label="first Name"
                    value={user.firstName}
                    fullWidth
                    sx={{ mt: 5 }}
                  />

                  <CssTextField
                    label="last Name"
                    value={user.lastName}
                    fullWidth
                    sx={{ mt: 5 }}
                  />

                  <CssTextField
                    label="Address"
                    value={user.lastName}
                    fullWidth
                    sx={{ mt: 5 }}
                  />

                  <LoadingButton
                    fullWidth
                    sx={{ mt: 8, mb: 2 }}
                    variant="contained"
                    onClick={() => navigate("/dashboard")}
                  >
                    Edit details
                  </LoadingButton>
                </>
              )}
            </>
          </>
        ) : (
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
              >
                Sign-In
              </LoadingButton>

              <Button
                variant="text"
                component={Link}
                to="/register"
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
            :
          </>
        )}
      </Paper>
    </>
  );
};
