import {
  Container,
  Grid,
  Skeleton,
  Typography,
  TypographyProps,
} from "@mui/material";
import { useParams } from "react-router-dom";
import Output from "editorjs-react-renderer";
import useNewsDetails from "../hooks/news/useNewsDetails";

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
              <Typography variant="h2" sx={{ mt: 10, mb: 5 }}>
                {newsDetails.data.data.title}
              </Typography>
              <section
                style={{
                  background: `url('${newsDetails.data.data.bannerImage}')`,
                  borderRadius: 5,
                }}
                className="header overlay"
              >
                <Container>
                  <Grid container rowSpacing={1} columnSpacing={3}>
                    <Grid item xs={6}></Grid>
                  </Grid>
                </Container>
              </section>

              <Output data={newsDetails.data.data.body} />
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
