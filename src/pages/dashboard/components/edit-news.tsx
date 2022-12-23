import { Container, Typography, Box, TextField, Stack } from "@mui/material";
import HomeSectionWrapper from "../../../components/HomeSectionWrapper";
import { InputLabel } from "../../../components/InuptLabel";
import { DashboardMainButton } from "../../../components/Buttons/DashboardMainButton";
import { useContext, useState } from "react";
import { LanguageContext } from "../../../context/userLangctx";
import { Languages } from "../../../enum/lang";
import { useSnackbar } from "notistack";
import { ImageUploader } from "../../../components/ImageUploader/image-uploader";
import ReactEditor from "./../components/react-editor";
import { request } from "../../../utils/request";
import { queryClient } from "../../../utils/query_client";
import { useMutation } from "@tanstack/react-query";
import { IRestApiResponse } from "../../../interfaces/api-response";
import { UploadScenarios } from "../../../enum/file-uploader";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";

export const NewsEditor = ({
  newsBody,
  titleOfNews,
  newsBannerImage,
  isUpdate,
  id,
}: {
  newsBody: string;
  titleOfNews: string;
  newsBannerImage: string | null;
  isUpdate: boolean;
  id?: string;
}) => {
  const [body, setBody] = useState(newsBody);
  const [newsTitle, setNewsTitle] = useState(titleOfNews);
  const [bannerImage, setBannerImage] = useState<string | null | undefined>(
    newsBannerImage
  );
  const { enqueueSnackbar } = useSnackbar();
  const { language }: { language: string } = useContext(LanguageContext);
  const navigate = useNavigate();

  const createNewsMutation = useMutation(
    (newsData: {
      title: string;
      bannerImage: string | null | undefined;
      lang: string;
      body: any;
    }) =>
      request(
        {
          path: isUpdate ? `news/${id}` : "news/create",
          method: isUpdate ? "PATCH" : "POST",
        },
        newsData,
        true
      ),
    {
      onSuccess: (response: IRestApiResponse) => {
        console.log(response);
        enqueueSnackbar(
          `${
            isUpdate ? "Post updated successfully" : "Post created successfully"
          }`,
          { variant: "success" }
        );
        queryClient.invalidateQueries(["news"]);
      },
    }
  );
  const deleteNewsMutation = useMutation(
    (newsId: string) =>
      request(
        {
          path: `news/${newsId}`,
          method: "DELETE",
        },
        {},
        true
      ),
    {
      onSuccess: (response: IRestApiResponse) => {
        console.log(response);
        enqueueSnackbar("Post deleted successfully", { variant: "success" });
        queryClient.invalidateQueries(["news"]);
        navigate("/dashboard/news");
      },
    }
  );

  const postNews = () => {
    createNewsMutation.mutate({
      title: newsTitle,
      bannerImage: bannerImage,
      lang: language,
      body: body,
    });
  };

  const deleteNews = async () => {
    await deleteNewsMutation.mutateAsync(id!);
    navigate("/dashboard/news");
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
          {bannerImage && (
            <>
              <section
                style={{
                  background: `url('${bannerImage}')`,
                  borderRadius: 5,
                  marginBottom: 20,
                }}
                className="header overlay"
              ></section>
            </>
          )}

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
              {isUpdate ? `Update news ${newsTitle}` : "Create new post"}
            </Typography>

            <Box>
              <Stack direction="row" spacing={2}>
                {isUpdate ? (
                  <LoadingButton
                    variant="text"
                    size="small"
                    startIcon={<DeleteIcon />}
                    color="error"
                    onClick={() => deleteNews()}
                    loading={deleteNewsMutation.isLoading}
                  >
                    Delete News
                  </LoadingButton>
                ) : null}
              </Stack>
            </Box>
          </Stack>

          <Typography
            variant={"body1"}
            sx={{ mt: 2, mb: 5 }}
            style={{
              fontFamily: "Open Sans",
              fontStyle: "normal",
              color: "#404040",
            }}
          >
            {
              /* 
// @ts-ignore */
              `This post will be posted in ${Languages[language]}`
            }
          </Typography>
          <Box sx={{ mt: 5 }}>
            <InputLabel text={"News Title"} />
            <TextField
              id="newsTitle"
              fullWidth
              sx={{ mb: 1, mt: 1 }}
              value={newsTitle}
              onChange={(e) => setNewsTitle(e.target.value)}
            />

            <Box sx={{ mt: 5, mb: 5 }}>
              <ImageUploader
                setImage={setBannerImage}
                uploadType={UploadScenarios.articleCover}
              />
            </Box>

            <Box
              sx={{ mt: 5 }}
              style={{
                borderRadius: 5,
                border: "1px solid #bdbdbd",
              }}
            >
              <ReactEditor setBody={(e: string) => setBody(e)} />
            </Box>

            <DashboardMainButton
              sx={{ mt: 8 }}
              type="submit"
              onClick={() => postNews()}
              loading={createNewsMutation.isLoading}
            >
              {isUpdate ? "Update Post" : "Publish"}
            </DashboardMainButton>
          </Box>
        </Container>
      </HomeSectionWrapper>
    </>
  );
};
