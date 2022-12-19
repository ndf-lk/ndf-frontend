import { useState } from "react";
import {
  CircularProgress,
  Box,
  Grid,
  Container,
  Typography,
  Card,
  IconButton,
} from "@mui/material";
import HomeSectionWrapper from "../../../components/HomeSectionWrapper";
import { useHomeBanner } from "../../../hooks/banner/useHomeBanner";
import { useSnackbar } from "notistack";

import CloseIcon from "@mui/icons-material/Close";
import { ImageUploader } from "../../../components/ImageUploader/image-uploader";
import { UploadScenarios } from "../../../enum/file-uploader";
import { request } from "../../../utils/request";
import { queryClient } from "../../../utils/query_client";
import { IRestApiResponse } from "../../../interfaces/api-response";
import { useMutation } from "@tanstack/react-query";
import { DashboardMainButton } from "../../../components/Buttons/DashboardMainButton";

const UpdateImages = ({
  bannerImages,
  title,
  id,
}: {
  bannerImages: string[];
  title: string;
  id: string;
}) => {
  const [images, setImages] = useState<Array<string>>(bannerImages);
  const { enqueueSnackbar } = useSnackbar();

  const addNewImage = (img: string) => {
    setImages((images) => [...images, img]);
  };

  const removeImage = (i: string) => {
    const removedArray = images.filter((img: string) => {
      return img != i;
    });

    setImages(removedArray);
  };

  const updateBannersMutation = useMutation(
    (bannerData: { title: string; banners: string[] }) =>
      request(
        {
          path: `banners/${id}`,
          method: "PATCH",
        },
        bannerData,
        true
      ),
    {
      onSuccess: (response: IRestApiResponse) => {
        console.log(response);
        enqueueSnackbar("Banner Images Updated successfully", {
          variant: "success",
        });
        queryClient.invalidateQueries(["gallery"]);
      },
    }
  );
  const updateBanners = () => {
    updateBannersMutation.mutate({
      title: title,
      banners: images,
    });
  };

  return (
    <>
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
            {images.map((img: string) => {
              return (
                <>
                  <Grid item xs={1} sm={4} md={4}>
                    <Card
                      sx={{
                        mb: 5,
                        cursor: "pointer",
                        textDecoration: "none",
                      }}
                      key={img}
                    >
                      <div>
                        <img
                          height="200"
                          src={img}
                          style={{ backgroundRepeat: "no-repeat" }}
                        />
                      </div>

                      <IconButton
                        aria-label="delete"
                        color="error"
                        style={{
                          top: 0,
                        }}
                        onClick={() => removeImage(img)}
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
        loading={updateBannersMutation.isLoading}
        onClick={() => updateBanners()}
      >
        Update Banners
      </DashboardMainButton>
    </>
  );
};

export const UpdateBanenrPage = () => {
  const banners = useHomeBanner();

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
            Update Home Banners
          </Typography>

          {banners.isLoading && <CircularProgress />}

          {banners.isSuccess && banners.data && (
            <>
              <UpdateImages
                bannerImages={banners.data.data.banners}
                id={banners.data.data._id}
                title={banners.data.data.title}
              />
            </>
          )}
        </Container>
      </HomeSectionWrapper>
    </>
  );
};
