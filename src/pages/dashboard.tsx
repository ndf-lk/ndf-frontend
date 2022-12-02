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
} from "@mui/material";
import "../styles/dashboard.css";
import { InputLabel } from "../components/InuptLabel";
import { useMe } from "../hooks/me/useMe";
import { useEffect } from "react";
import { useSnackbar } from "notistack";

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

          <Box sx={{ mt: 5 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={4} sm={4} md={6}>
                <InputLabel text={"First name"} />
                <TextField
                  fullWidth
                  sx={{ mb: 1, mt: 1 }}
                  variant="outlined"
                  value={currentUser.data?.data?.firstName}
                />
              </Grid>

              <Grid item xs={4} sm={4} md={6}>
                <InputLabel text={"Last name"} />
                <TextField
                  fullWidth
                  sx={{ mb: 1, mt: 1 }}
                  variant="outlined"
                  value={currentUser.data?.data?.lastName}
                />
              </Grid>

              <Grid item xs={4} sm={4} md={7}>
                <InputLabel text={"Address"} />
                <TextField fullWidth sx={{ mb: 1, mt: 1 }} variant="outlined" />
              </Grid>

              <Grid item xs={4} sm={4} md={5}>
                <InputLabel text={"District"} />
                <TextField fullWidth sx={{ mb: 1, mt: 1 }} variant="outlined" />
              </Grid>

              <Grid item xs={4} sm={4} md={6}>
                <InputLabel text={"Position"} />
                <TextField fullWidth sx={{ mb: 1, mt: 1 }} variant="outlined" />
              </Grid>

              <Grid item xs={4} sm={4} md={3}>
                <InputLabel text={"Date"} />
                <TextField
                  fullWidth
                  sx={{ mb: 1, mt: 1 }}
                  variant="outlined"
                  type="date"
                />
              </Grid>

              <Grid item xs={4} sm={4} md={3}>
                <InputLabel text={"Seat"} />
                <TextField fullWidth sx={{ mb: 1, mt: 1 }} variant="outlined" />
              </Grid>
            </Grid>

            <ColorButton sx={{ mt: 7 }}> Edit details </ColorButton>
          </Box>
        </Container>
      </HomeSectionWrapper>
    </>
  );
};
