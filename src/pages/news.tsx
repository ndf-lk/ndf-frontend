import {
  Box,
  Skeleton,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/system";
import HomeSectionWrapper from "../components/HomeSectionWrapper";
import { NewsCard } from "../components/NewsCard";
import { useNews } from "../hooks/news/useNews";
import { INews } from "../types/news";

import "../styles/news.css";
const NewsPage = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const news = useNews();

  return (
    <>
      <section
        style={{
          background:
            "url('https://cdn.suwalls.com/wallpapers/anime/school-days-33347-1920x1080.jpg')",
        }}
        className="header overlay"
      >
        <Container>
          {isSmall ? (
            <>
              <NewsCardMessage isSmall={isSmall} />
            </>
          ) : (
            <>
              <Grid container rowSpacing={1} columnSpacing={3}>
                <Grid item xs={6}>
                  <NewsCardMessage isSmall={isSmall} />
                </Grid>
              </Grid>
            </>
          )}
        </Container>
      </section>

      <HomeSectionWrapper sx={{ background: "#EFEFEF", pb: 1 }}>
        <Container>
          <Box mb={{ xs: 9.25, md: 14 }}>
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

              {news.isSuccess && (
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
    </>
  );
};

const NewsCardMessage = ({ isSmall }: { isSmall: boolean }) => {
  return (
    <>
      <Typography
        variant={isSmall ? "h3" : "h2"}
        component="h2"
        mt={isSmall ? 0 : 20}
        style={{ color: "white" }}
      >
        Ukrane-Russia war intensifies
      </Typography>
      <Typography
        variant={isSmall ? "body2" : "body1"}
        component="p"
        mt={2}
        style={{ color: "white" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac
        molestie nisl. Morbi pretium sit amet nibh vitae tincidunt. Etiam vel
      </Typography>
    </>
  );
};
export default NewsPage;
