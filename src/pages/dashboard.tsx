import HomeSectionWrapper from "../components/HomeSectionWrapper";
import {
  Container,
  Box,
  Typography,
  TextField,
  Grid,
  styled,
  Button,
  ButtonProps,
  Stack,
  CircularProgress,
  Avatar,
} from "@mui/material";
import "../styles/dashboard.css";
import { InputLabel } from "../components/InuptLabel";
import { useMe } from "../hooks/me/useMe";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { UpdateProfileForm } from "../components/update-profile/UpdateProfileForm";
import { decodeToken } from "../utils/auth_token";
import { Create } from "@mui/icons-material";
import { Link } from "react-router-dom";

const GalleryButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "white",
  backgroundColor: "#6E00FF",
  "&:hover": {
    backgroundColor: "#6E00FF",
  },
}));

const CreatePostButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "white",
  backgroundColor: "#FF7A49",
  "&:hover": {
    backgroundColor: "#FF7A49",
  },
}));

export const DashboardPage = () => {
  const currentUser: any = useMe();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const tokenpayload = decodeToken();
    console.log(tokenpayload);
    if (tokenpayload?.["cognito:groups"].includes("admin")) {
      setIsAdmin(true);
    }
  }, []);

  useEffect(() => {
    // @todo
    // handle error better here with types
    if (currentUser.isError) {
      if (currentUser.error.response.data.message) {
        enqueueSnackbar(currentUser.error.response.data.message, {
          variant: "error",
        });
      } else {
        enqueueSnackbar(currentUser.error.message, { variant: "error" });
      }
    }
  }, [currentUser]);

  return (
    <>
      <HomeSectionWrapper sx={{ background: "#EFEFEF", pb: 1 }}>
        <Container
          className="dashboard-container"
          sx={{
            background: "#ffff",
            borderRadius: 3,
            padding: 10,
            marginBottom: 20,
          }}
          maxWidth="xl"
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography
              variant={"h2"}
              style={{
                fontSize: "28px",
                fontFamily: "Open Sans",
                fontStyle: "normal",
                fontWeight: 600,
                color: "#333333",
              }}
            >
              Dashboard
            </Typography>
            <Box>
              {isAdmin ? (
                <>
                  <Stack direction="row" spacing={2}>
                    <CreatePostButton
                      variant="contained"
                      size="small"
                      LinkComponent={"a"}
                      href="/dashboard/create"
                    >
                      New post
                    </CreatePostButton>

                    <GalleryButton variant="contained" size="small">
                      Upload to gallery
                    </GalleryButton>
                  </Stack>
                </>
              ) : null}
            </Box>
          </Stack>

          {currentUser.isLoading && <CircularProgress />}
          {currentUser.data && <UpdateProfileForm currentUser={currentUser} />}
        </Container>
      </HomeSectionWrapper>
    </>
  );
};
