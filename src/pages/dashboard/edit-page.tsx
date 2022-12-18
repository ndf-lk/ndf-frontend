import {
  Container,
  Typography,
  Box,
  Modal,
  TextField,
  Button,
} from "@mui/material";
import HomeSectionWrapper from "../../components/HomeSectionWrapper";
import { InputLabel } from "../../components/InuptLabel";
import { DashboardMainButton } from "../../components/Buttons/DashboardMainButton";
import { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../../context/userLangctx";
import { Languages } from "../../enum/lang";
import { useSnackbar } from "notistack";
import { ImageUploader } from "../../components/ImageUploader/image-uploader";
import ReactEditor from "./components/react-editor";

export const EditPage = () => {
  const [body, setBody] = useState("");
  const [newsTitle, setNewsTitle] = useState("");
  const [bannerImage, setBannerImage] = useState<string | null | undefined>(
    null
  );
  const [openImageUploaderModal, setOpenImageUplaoderModal] = useState(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const { language }: { language: string } = useContext(LanguageContext);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "90%" : "50%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 3,
    p: 4,
  };

  /*
  const createNewsMutation = useMutation(
    (newsData: {
      title: string;
      bannerImage: string | null | undefined;
      lang: string;
      body: any;
    }) => 
      axios.post(({
        method: "post",
        url: "news/create",
        data: JSON.stringify(newsData),
      }),
    {
      onSuccess: (response) => {
        console.log(response);
        enqueueSnackbar("Post created successfully", { variant: "success" });
      },

      onError: (error: AxiosError) => {
        const errorMessages: any = error?.response?.data;

        if (!errorMessages) {
          enqueueSnackbar(error.message, { variant: "error" });
          return;
        }

        if (!Array.isArray(errorMessages.message)) {
          enqueueSnackbar(errorMessages.message, { variant: "error" });
          return;
        }

        for (const message of errorMessages?.message) {
          enqueueSnackbar(message, { variant: "error" });
        }
      },
      onMutate: () => {},
    }
  );

    */

  const postNews = () => {
    console.log(body);
  };

  return (
    <>
      <Modal
        open={openImageUploaderModal}
        onClose={() => setOpenImageUplaoderModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ImageUploader setImage={setBannerImage} path={"news/upload"} />
        </Box>
      </Modal>

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
              <img
                src={bannerImage}
                style={{
                  width: "100%",
                }}
              />
            </>
          )}

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
            Create new post
          </Typography>

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

            <Button
              sx={{ mt: 3 }}
              onClick={() => setOpenImageUplaoderModal(true)}
              variant="outlined"
              style={{
                width: isMobile ? "100%" : "15%",
                height: 40,
                fontSize: 15,
              }}
            >
              Upload banner
            </Button>

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
            >
              Publish
            </DashboardMainButton>
          </Box>
        </Container>
      </HomeSectionWrapper>
    </>
  );
};
