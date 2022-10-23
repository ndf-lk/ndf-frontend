import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Skeleton,
  Box,
  ImageList,
  ImageListItem,
  SwipeableDrawer,
  useMediaQuery,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/system";
import { useState } from "react";
import HomeSectionWrapper from "../components/HomeSectionWrapper";
import { useGallery } from "../hooks/gallery/useGallery";
import useGalleryCollection from "../hooks/gallery/useGalleryCollection";
import "../styles/gallery.css";

const GalleryPage = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = useState(false);
  const [collectionId, setCollectionId] = useState<string>("1");
  const handleOpen = (id: string) => {
    setCollectionId(id);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const gallery = useGallery();
  const galleryCollection = useGalleryCollection(collectionId);

  return (
    <>
      <SwipeableDrawer
        onClose={handleClose}
        onOpen={() => setOpen(true)}
        open={open}
        anchor={isSmall ? "bottom" : "left"}
      >
        <Container sx={{ height: isSmall ? 700 : 900 }}>
          <ImageList
            variant="woven"
            cols={3}
            gap={8}
            sx={
              {
                // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                //  transform: "translateZ(0)",
              }
            }
          >
            {galleryCollection.isLoading ? (
              <>
                <Box sx={{ height: isSmall ? 700 : 900 }}>
                  {Array.from(Array(6)).map((_, index) => (
                    <Skeleton variant="rectangular" />
                  ))}
                </Box>
              </>
            ) : null}

            {galleryCollection.isSuccess && (
              <>
                {galleryCollection.data.data.content && (
                  <>
                    {galleryCollection.data?.data?.content.map(
                      (content: { img: string; title: string }) => (
                        <>
                          <ImageListItem>
                            <img
                              src={content.img}
                              srcSet={content.img}
                              alt={content.title}
                              loading="lazy"
                            />
                          </ImageListItem>
                        </>
                      )
                    )}
                  </>
                )}
              </>
            )}
          </ImageList>
        </Container>
      </SwipeableDrawer>

      <HomeSectionWrapper sx={{ background: "#EFEFEF", pb: 1 }}>
        <Container sx={{ mt: 10 }}>
          <Box mb={{ xs: 9.25, md: 14 }} className="gallery-image">
            <Grid
              container
              spacing={{ xs: 1, md: 3 }}
              columns={{ xs: 1, sm: 8, md: 12 }}
            >
              {gallery.isLoading ? (
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

              {gallery.isSuccess && (
                <>
                  {gallery.data.data.map((gallery) => (
                    <>
                      <Grid item xs={1} sm={4} md={4}>
                        <Card
                          sx={{
                            mb: 5,
                            cursor: "pointer",
                            textDecoration: "none",
                          }}
                          onClick={() => handleOpen(gallery._id)}
                        >
                          <CardMedia
                            component="img"
                            height="200"
                            image={gallery.bannerImg}
                            alt={gallery.title}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5">
                              {gallery.title}
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 3 }}>
                              {gallery.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </>
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
export default GalleryPage;
