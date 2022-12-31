import {
  Box,
  Container,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import useNewsDetails from "../hooks/news/useNewsDetails";
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon,
  EmailIcon,
  EmailShareButton,
} from "react-share";

const PostPage = () => {
  const { id } = useParams();
  const newsDetails = useNewsDetails(id!);

  return (
    <>
      <Container sx={{ mt: 5 }}>
        {newsDetails.isLoading ? (
          <>
            <Skeleton width="60%" height={50} sx={{ mb: 5, mt: 10 }} />
            <Skeleton variant="rectangular" height={200} />
            <TextLoading />
          </>
        ) : null}
        <section style={{ marginBottom: 50 }}>
          {newsDetails.isSuccess && (
            <>
              <section
                style={{
                  background: `url('${newsDetails.data.data.bannerImage}')`,
                  borderRadius: 5,
                  marginTop: "10px",
                }}
                className="header"
              >
                <Container>
                  <Grid container rowSpacing={1} columnSpacing={3}>
                    <Grid item xs={6}></Grid>
                  </Grid>
                </Container>
              </section>

              <Typography variant="h2" sx={{ mt: 10, mb: 10 }}>
                {newsDetails.data.data.title}
              </Typography>
              <Box sx={{ mt: 5 }}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: newsDetails.data.data.body,
                  }}
                />
              </Box>

              <Typography variant="h6" sx={{ mt: 10, mb: 3 }}>
                Share on
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
              >
                <FacebookShareButton
                  url={window.location.href}
                  quote={newsDetails.data.data.title}
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>

                <WhatsappShareButton
                  url={window.location.href}
                  title={newsDetails.data.data.title}
                  separator=":: "
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>

                <LinkedinShareButton url={window.location.href}>
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>

                <EmailShareButton
                  url={window.location.href}
                  subject={newsDetails.data.data.title}
                  body={newsDetails.data.data.title}
                >
                  <EmailIcon size={32} round />
                </EmailShareButton>
              </Stack>
            </>
          )}
        </section>
      </Container>
    </>
  );
};
export default PostPage;

function TextLoading() {
  return (
    <div>
      <Skeleton sx={{ mt: 4 }} />
      <Skeleton width="60%" />

      <Skeleton sx={{ mt: 4 }} />
      <Skeleton width="60%" />

      <Skeleton width="90%" />
      <Skeleton />

      <Skeleton sx={{ mt: 4 }} />
      <Skeleton width="60%" />
    </div>
  );
}
