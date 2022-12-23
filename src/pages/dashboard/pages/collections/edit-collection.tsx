import {
  Container,
  Box,
  Stack,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useParams } from "react-router";
import HomeSectionWrapper from "../../../../components/HomeSectionWrapper";
import useGalleryCollection from "../../../../hooks/gallery/useGalleryCollection";
import { GalleryUploader } from "../../components/gallery-uploader";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { IRestApiResponse } from "../../../../interfaces/api-response";
import { request } from "../../../../utils/request";
import { useSnackbar } from "notistack";
import { queryClient } from "../../../../utils/query_client";

export const EditCollectionsPage = () => {
  const { id } = useParams();
  const collection = useGalleryCollection(id!);

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const deleteNewsMutation = useMutation(
    (collectionId: string) =>
      request(
        {
          path: `gallery/${collectionId}`,
          method: "DELETE",
        },
        {},
        true
      ),
    {
      onSuccess: (response: IRestApiResponse) => {
        console.log(response);
        enqueueSnackbar("Collection deleted successfully", {
          variant: "success",
        });
        queryClient.invalidateQueries(["gallery"]);
      },
    }
  );

  const deleteCollection = async (id: string) => {
    await deleteNewsMutation.mutateAsync(id);
    navigate("/dashboard/collections");
  };

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
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            sx={{ mb: 10 }}
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

            <Box>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="text"
                  size="small"
                  startIcon={<DeleteIcon />}
                  color="error"
                  onClick={() => deleteCollection(collection?.data?.data?._id)}
                >
                  Delete Collection
                </Button>
              </Stack>
            </Box>
          </Stack>

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
