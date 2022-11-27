import { styled } from "@mui/material/styles";
import {
  Container,
  Skeleton,
  TextField,
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { HeroPage } from "../components/Hero";
import { useContext } from "react";
import { LanguageContext } from "../context/userLangctx";
import { getData } from "../data/content";
import { NewsCard } from "../components/NewsCard";
import HomeSectionWrapper from "../components/HomeSectionWrapper";
import { useNews } from "../hooks/news/useNews";
import { INews } from "../types/news";
import { JoinNDF } from "../components/Join";

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

const HomePage = () => {
  const { language } = useContext(LanguageContext);
  const content = getData(language);
  const news = useNews(language, 6);

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
                  <JoinNDF />
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
              {news.isLoading ? (
                <>
                  {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={1} sm={4} md={4} key={index}>
                      <Skeleton variant="rectangular" height={200} />
                      <Box sx={{ pt: 0.5 }}>
                        <Skeleton />
                        <Skeleton width="60%" />
                      </Box>
                    </Grid>
                  ))}
                </>
              ) : null}

              {news.isSuccess && news.data && (
                <>
                  {news.data.data.map((news: INews) => (
                    <Grid item xs={1} sm={4} md={4} key={news._id}>
                      <NewsCard data={news} />
                    </Grid>
                  ))}
                </>
              )}
            </Grid>
          </Box>
        </Container>
      </HomeSectionWrapper>

      <Container>
        <Divider />

        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNationalDemocraticFront.lk&tabs=timeline&width=350&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=234405398704718"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          width={350}
          height={400}
          frameBorder={0}
        />
      </Container>
    </>
  );
};

export default HomePage;
