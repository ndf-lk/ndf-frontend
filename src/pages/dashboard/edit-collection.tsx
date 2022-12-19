import { Container, Typography, CircularProgress } from "@mui/material";
import { useParams } from "react-router";
import HomeSectionWrapper from "../../components/HomeSectionWrapper";
import useGalleryCollection from "../../hooks/gallery/useGalleryCollection";
import { GalleryUploader } from "./components/gallery-uploader";

export const EditCollectionsPage = () => {
  const { id } = useParams();
  const collection = useGalleryCollection(id!);
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
            Edit Collection {collection?.data?.data?.title}
          </Typography>
          {collection.isLoading && (
            <>
              <CircularProgress />
            </>
          )}

          {collection.isSuccess && collection.data && (
            <>
              <GalleryUploader
                collectionTitle={collection.data?.data?.title}
                collectionDescription={collection.data?.data?.description}
                isUpdate={true}
                id={collection.data?.data?._id}
                collectionImages={collection.data?.data?.content}
              />
            </>
          )}
        </Container>
      </HomeSectionWrapper>
    </>
  );
};
