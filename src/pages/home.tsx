import { styled } from "@mui/material/styles";
import {
  Container,
  TextField,
  Paper,
  Box,
  Button,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { HeroPage } from "../components/Hero";
import { useContext } from "react";
import { LanguageContext } from "../context/userLangctx";
import { getData } from "../data/content";
import { NewsCard } from "../components/NewsCard";
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
  const { language } = useContext(LanguageContext);
  const content = getData(language);
  console.log(content);

  return (
    <>
      <HeroPage />

      <Container>
        <Box mt={{ xs: 0, md: -80 }}>
          <Grid container rowSpacing={10} justifyContent="space-between">
            <Grid item xs={12} md={8}>
              <Box display="flex" alignItems="flex-start" gap={4} mb={5}>
                <Box>
                  <Box
                    component="img"
                    alt="test"
                    src="/header.png"
                    maxWidth="100%"
                    sx={{
                      borderRadius: 1,
                    }}
                  />
                  <Typography variant={"h2"} textAlign="left" sx={{ mt: 5 }}>
                    {content.seconary.title}
                  </Typography>
                  <Typography sx={{ mt: 5 }}>
                    {content.seconary.body}
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

        <Box mb={{ xs: 7, md: 10 }}>
          <Typography variant={"h3"} textAlign="left" sx={{ mt: 10, mb: 10 }}>
            {content.promises.title}
          </Typography>

          {content.promises.points.map((promise) => {
            return (
              <>
                <Accordion square={true}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      variant="body1"
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      {promise.point}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{promise.desecription}</Typography>
                  </AccordionDetails>
                </Accordion>
              </>
            );
          })}

          <Typography sx={{ mt: 5 }}>{content.promises.body_end}</Typography>
        </Box>
      </Container>

      <HomeSectionWrapper sx={{ background: "#EFEFEF", pb: 1 }}>
        <Container>
          <Box mb={{ xs: 9.25, md: 14 }}>
            <Typography variant={"h2"} textAlign="center" sx={{ mb: 10 }}>
              {content.news_page.trending}
            </Typography>

            <Grid
              container
              spacing={{ xs: 1, md: 3 }}
              columns={{ xs: 1, sm: 8, md: 12 }}
            >
              {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={1} sm={4} md={4} key={index}>
                  <NewsCard />
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
