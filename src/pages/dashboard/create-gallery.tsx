import { GalleryUploader } from "./components/gallery-uploader";
import { Container, Typography } from "@mui/material";
import HomeSectionWrapper from "../../components/HomeSectionWrapper";
import "../../styles/gallery.css";

export const GalleryCreatePage = () => {
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
            Create Image Collection
          </Typography>
          <GalleryUploader
            collectionTitle=""
            collectionDescription=""
            isUpdate={false}
            id=""
            collectionImages={[]}
          />
        </Container>
      </HomeSectionWrapper>
    </>
  );
};
