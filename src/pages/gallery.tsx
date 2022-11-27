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
  Tabs,
  Tab,
} from "@mui/material";
import { useTheme } from "@mui/system";
import React, { useState } from "react";
import HomeSectionWrapper from "../components/HomeSectionWrapper";
import { useGallery } from "../hooks/gallery/useGallery";
import useGalleryCollection from "../hooks/gallery/useGalleryCollection";
import "../styles/gallery.css";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const GalleryPage = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const [collectionId, setCollectionId] = useState<string | null>(null);

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleOpen = (id: string) => {
    setSelectedAlbum(id);
    setCollectionId(id);
    a11yProps(1);
    // setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const gallery = useGallery();
  const galleryCollection = useGalleryCollection(collectionId!);
  const collection = useGalleryCollection(selectedAlbum);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ p: 10, textAlign: "center", mt: 5 }}>
        <Typography variant="h3">
          {collection.data?.data?.title ? (
            <> {collection.data.data.title}</>
          ) : (
            <> Our Gallery</>
          )}
        </Typography>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          aria-label="basic tabs example"
        >
          <Tab label="Albums" {...a11yProps(0)} />
          <Tab label="All Photos" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
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
                  {gallery.data.data.map((gallery: any) => (
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
                          <img
                            height="200"
                            src={gallery.bannerImg}
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
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Container sx={{ mt: 10 }}>
          <Box mb={{ xs: 9.25, md: 14 }} className="gallery-image">
            <Grid
              container
              spacing={{ xs: 1, md: 3 }}
              columns={{ xs: 1, sm: 8, md: 12 }}
            >
              {collection.isLoading ? (
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

              {collection.isSuccess && (
                <>
                  {collection.data?.data?.content && (
                    <>
                      {collection.data.data.content.map(
                        (collectionDetails: any) => (
                          <>
                            <Grid item xs={1} sm={4} md={4}>
                              <Card
                                sx={{
                                  mb: 5,
                                  cursor: "pointer",
                                  textDecoration: "none",
                                }}
                                onClick={() =>
                                  handleOpen(collection.data.data._id)
                                }
                              >
                                <img
                                  height="200"
                                  src={collectionDetails.img}
                                  alt={collectionDetails.title}
                                  style={{ backgroundRepeat: "no-repeat" }}
                                />
                              </Card>
                            </Grid>
                          </>
                        )
                      )}
                    </>
                  )}
                </>
              )}
            </Grid>
          </Box>
        </Container>
      </TabPanel>
    </>
  );
};
export default GalleryPage;
