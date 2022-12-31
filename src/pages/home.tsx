import {
  Container,
  Skeleton,
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Stack,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { HeroPage } from "../components/Hero";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/userLangctx";
import { getData } from "../data/content";
import { NewsCard } from "../components/NewsCard";
import HomeSectionWrapper from "../components/HomeSectionWrapper";
import { useNews } from "../hooks/news/useNews";
import { INews } from "../types/news";
import { JoinNDF } from "../components/Join";
import { Timeline } from "react-twitter-widgets";
import { Carousel } from "react-responsive-carousel";
import { useHomeBanner } from "../hooks/banner/useHomeBanner";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
  const [ytVideo, setYtVideo] = useState("");
  const { language } = useContext(LanguageContext);
  const content = getData(language);
  const news = useNews(language, 6);
  const bannerImages = useHomeBanner();

  useEffect(() => {
    const channelId = "UCPT8ds2Qu7LyETEoLBzoaNg";

    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=" +
        encodeURIComponent(
          `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
        )
    )
      .then((response) => response.json())
      .then((data) => {
        const guid = data.items[0].guid;
        const embedURL = `https://youtube.com/embed/${guid.replace(
          "yt:video:",
          ""
        )}`;

        console.log(data);
        setYtVideo(embedURL);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <HeroPage />

      <Container>
        <Box mt={{ xs: 0, md: -80 }}>
          <Grid container rowSpacing={10} justifyContent="space-between">
            <Grid item xs={12} md={8}>
              <Box display="flex" alignItems="flex-start" gap={4} mb={5}>
                <Box>
                  {bannerImages.isLoading && <CircularProgress />}
                  {bannerImages.isSuccess && bannerImages.data && (
                    <>
                      <Carousel
                        showThumbs={false}
                        transitionTime={1000}
                        interval={2000}
                        swipeScrollTolerance={5}
                        infiniteLoop={true}
                        autoPlay={true}
                        swipeable={true}
                        showStatus={false}
                      >
                        {bannerImages.data.data.banners.map((image: string) => {
                          return (
                            <div>
                              <img src={image} />
                            </div>
                          );
                        })}
                      </Carousel>
                    </>
                  )}
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

                <Grid item xs={12} sm={6} md={12}>
                  <iframe
                    width="100%"
                    height="200c"
                    src={ytVideo}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      border: "none",
                    }}
                  />
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

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{ mt: 10, mb: 10 }}
        >
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNationalDemocraticFront.lk&tabs=timeline&width=350&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=234405398704718"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            width="100%"
            height={400}
            frameBorder={0}
          />

          <Timeline
            dataSource={{ sourceType: "profile", screenName: "ndf_lk" }}
            options={{
              height: 400,
              width: 400,
            }}
          />

          <iframe src={ytVideo} width="100%" height={400} frameBorder={0} />
        </Stack>
      </Container>
    </>
  );
};

export default HomePage;
