import { useTheme } from "@emotion/react";
import { alpha, styled } from "@mui/material/styles";
import {
  Container,
  TextField,
  Paper,
  Box,
  Button,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
import { HeroPage } from "../components/Hero";
import HomeSectionWrapper from "../components/HomeSectionWrapper";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      center: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

const CssTextField = styled(TextField)({
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
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#D8532E",
    },
  },
});

const HomePage = () => {
  return (
    <>
      <HeroPage />

      <Container>
        <Box mb={{ xs: 5, md: 8 }} mt={{ xs: 0, md: -70 }}>
          <Grid container rowSpacing={10} justifyContent="space-between">
            <Grid item xs={12} md={8}>
              <Box display="flex" alignItems="flex-start" gap={4} mb={5}>
                <Box>
                  <Box
                    component="img"
                    alt="test"
                    src="/header.png"
                    maxWidth="100%"
                  />
                  <Typography variant={"h2"} textAlign="left" sx={{ mt: 5 }}>
                    National Democratic Front
                  </Typography>
                  <Typography sx={{ mt: 5 }}>
                    The primary objective of the National Democratic Front,
                    which extends beyond traditional political parties, is to
                    create a prosperous Sri Lanka. For that, we are committed to
                    the public service by denying all privileges on behalf of
                    the people. We call back to the motherland the 'gentlemanly
                    politics (Mahatma Politics)' that has faded from this
                    country after the national leaders of the past.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Grid container spacing={{ xs: 4, md: 6 }}>
                <Grid item xs={12} sm={6} md={12}>
                  <Paper
                    sx={{
                      background: "#821824",
                      p: 5,
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

                      <Button fullWidth sx={{ mt: 5 }} variant="contained">
                        Join Now
                      </Button>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <HomeSectionWrapper sx={{ background: "#EFEFEF" }}>
        <Container>
          <Box mb={{ xs: 9.25, md: 14 }}>
            <Typography variant={"h2"} textAlign="center" sx={{ mb: 10 }}>
              Latest Trending News
            </Typography>

            <Grid
              container
              spacing={{ xs: 1, md: 3 }}
              columns={{ xs: 1, sm: 8, md: 12 }}
            >
              {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={1} sm={4} md={4} key={index}>
                  <Box sx={{ p: 20, border: "1px solid black" }}>
                    <Typography> Test Title </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </HomeSectionWrapper>
    </>
  );
};

export default HomePage;
