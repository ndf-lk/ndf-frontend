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
} from "@mui/material";
import "../styles/dashboard.css";
import { InputLabel } from "../components/InuptLabel";
import { useMe } from "../hooks/me/useMe";
import { useEffect } from "react";
import { useSnackbar } from "notistack";
import { UpdateProfileForm } from "../components/update-profile/UpdateProfileForm";

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

const GalleryButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "white",
  backgroundColor: "#6E00FF",
  "&:hover": {
    backgroundColor: "#6E00FF",
  },
}));

export const DashboardPage = () => {
  const currentUser: any = useMe();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
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
              <GalleryButton variant="contained" size="small">
                {" "}
                Upload to gallery{" "}
              </GalleryButton>
            </Box>
          </Stack>

          <Typography
            variant={"h2"}
            sx={{ mt: 5 }}
            style={{
              fontSize: "20px",
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: 600,
              color: "#333333",
            }}
          >
            Your Profile
          </Typography>

          {currentUser.isLoading && <CircularProgress />}
          {currentUser.data && <UpdateProfileForm currentUser={currentUser} />}
        </Container>
      </HomeSectionWrapper>
    </>
  );
};
