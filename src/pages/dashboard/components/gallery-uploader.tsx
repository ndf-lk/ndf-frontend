import { useState } from "react";
import {
  TextField,
  IconButton,
  Typography,
  Grid,
  Container,
  Card,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DashboardMainButton } from "../../../components/Buttons/DashboardMainButton";
import "../../../styles/gallery.css";
import { ImageUploader } from "../../../components/ImageUploader/image-uploader";
import { UploadScenarios } from "../../../enum/file-uploader";
import { useMutation } from "@tanstack/react-query";
import { request } from "../../../utils/request";
import { IRestApiResponse } from "../../../interfaces/api-response";
import { useSnackbar } from "notistack";

interface IGalleryImage {
  img: string;
  title?: string;
}

export const GalleryUploader = ({
  collectionTitle,
  collectionDescription,
  isUpdate,
  id,
  collectionImages,
}: {
  collectionTitle: string;
  collectionDescription: string;
  isUpdate: boolean;
  id?: string;
  collectionImages: Array<IGalleryImage>;
}) => {
  const [images, setImages] = useState<Array<IGalleryImage>>(collectionImages);
  const [title, setTitle] = useState<string>(collectionTitle);
  const [description, setDescription] = useState<string>(collectionDescription);
  const { enqueueSnackbar } = useSnackbar();

  const addNewImage = (img: string) => {
    setImages((images) => [...images, { img: img }]);
  };

  const removeImage = (i: string) => {
    const removedArray = images.filter((img: IGalleryImage) => {
      return img.img != i;
    });

    setImages(removedArray);
  };

  const createCollectionMutation = useMutation(
    (newsData: {
      title: string;
      description: string;
      bannerImg: string | null | undefined;
      content: Array<IGalleryImage>;
    }) =>
      request(
        {
          path: isUpdate ? `gallery/${id}` : "gallery",
          method: isUpdate ? "PATCH" : "POST",
        },
        newsData,
        true
      ),
    {
      onSuccess: (response: IRestApiResponse) => {
        console.log(response);
        enqueueSnackbar("Collection created successfully", {
          variant: "success",
        });
      },
    }
  );
  const createCollection = () => {
    createCollectionMutation.mutate({
      title: title,
      description: description,
      bannerImg: images[0]?.img,
      content: images,
    });
  };

  return (
    <>
      <Typography
        variant="h5"
        sx={{ mb: 1, mt: 5 }}
        style={{
          fontWeight: 700,
          color: "#333333",
          fontSize: "16px",
          fontFamily: "Open Sans",
        }}
      >
        Collection Title
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Typography
        variant="h5"
        sx={{ mb: 1, mt: 5 }}
        style={{
          fontWeight: 700,
          color: "#333333",
          fontSize: "16px",
          fontFamily: "Open Sans",
        }}
      >
        Collection Description
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="description..."
        multiline
        rows={5}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Box sx={{ mt: 4 }}>
        <ImageUploader
          setImage={addNewImage}
          uploadType={UploadScenarios.articleCover}
          buttonName="Add Image"
        />
      </Box>

      <Container sx={{ mt: 10 }} maxWidth="xl">
        <Box mb={{ xs: 9.25, md: 14 }} className="gallery-image">
          <Grid
            container
            spacing={{ xs: 1, md: 3 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
          >
            {images.map((img: IGalleryImage) => {
              return (
                <>
                  <Grid item xs={1} sm={4} md={4}>
                    <Card
                      sx={{
                        mb: 5,
                        cursor: "pointer",
                        textDecoration: "none",
                      }}
                      key={img.img}
                    >
                      <div>
                        <img
                          height="200"
                          src={img.img}
                          style={{ backgroundRepeat: "no-repeat" }}
                        />
                      </div>

                      <IconButton
                        aria-label="delete"
                        color="error"
                        style={{
                          top: 0,
                        }}
                        onClick={() => removeImage(img.img)}
                      >
                        <CloseIcon />
                      </IconButton>
                    </Card>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Box>
      </Container>

      <DashboardMainButton
        loading={createCollectionMutation.isLoading}
        onClick={() => createCollection()}
      >
        Save
      </DashboardMainButton>
    </>
  );
};
