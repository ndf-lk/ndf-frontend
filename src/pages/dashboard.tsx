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
} from "@mui/material";
import "../styles/dashboard.css";

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

export const DashboardPage = () => {
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
              <Grid item xs={4} sm={4} md={4}>
                <InputLabel text={"Your Profile"} />
                <TextField fullWidth sx={{ mb: 1, mt: 1 }} variant="filled" />
              </Grid>

              <Grid item xs={4} sm={4} md={8}>
                <InputLabel text={"Address"} />
                <TextField fullWidth sx={{ mb: 1, mt: 1 }} variant="filled" />
              </Grid>

              <Grid item xs={4} sm={4} md={5}>
                <InputLabel text={"Position"} />
                <TextField fullWidth sx={{ mb: 1, mt: 1 }} variant="filled" />
              </Grid>

              <Grid item xs={4} sm={4} md={5}>
                <InputLabel text={"District"} />
                <TextField fullWidth sx={{ mb: 1, mt: 1 }} variant="filled" />
              </Grid>

              <Grid item xs={4} sm={4} md={3}>
                <InputLabel text={"Date"} />
                <TextField fullWidth sx={{ mb: 1, mt: 1 }} variant="filled" />
              </Grid>

              <Grid item xs={4} sm={4} md={3}>
                <InputLabel text={"Seat"} />
                <TextField fullWidth sx={{ mb: 1, mt: 1 }} variant="filled" />
              </Grid>
            </Grid>

            <ColorButton sx={{ mt: 7 }}> Edit details </ColorButton>
          </Box>
        </Container>
      </HomeSectionWrapper>
    </>
  );
};

const InputLabel = ({ text }: { text: string }) => {
  return (
    <>
      <Typography
        style={{
          fontSize: "16px",
          fontFamily: "Open Sans",
          fontStyle: "normal",
          fontWeight: 400,
          color: "#7D7D7D",
        }}
        sx={{ mb: 1, mt: 1 }}
      >
        {text}
      </Typography>
    </>
  );
};
