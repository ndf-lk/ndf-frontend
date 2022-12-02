import { Container, Typography, Box, Grid, TextField } from "@mui/material";
import HomeSectionWrapper from "../../components/HomeSectionWrapper";
import { InputLabel } from "../../components/InuptLabel";
import { EDITOR_JS_TOOLS } from "../../components/editor/constants";
import { createReactEditorJS } from "react-editor-js";
import { DashboardMainButton } from "../../components/Buttons/DashboardMainButton";
import { useContext, useState, useRef, useCallback } from "react";
import { LanguageContext } from "../../context/userLangctx";
import { Languages } from "../../enum/lang";
import { EditorCore } from "../../components/editor/editor-core";
import { useSnackbar } from "notistack";

export const EditPage = () => {
  const ReactEditorJS = createReactEditorJS();
  const [newsTitle, setNewsTitle] = useState("");
  const editorCore = useRef<EditorCore | null>(null);
  const { enqueueSnackbar } = useSnackbar();

  const handleInitialize = useCallback((instance: EditorCore) => {
    editorCore.current = instance;
  }, []);

  const { language }: { language: string } = useContext(LanguageContext);

  const onSave = async () => {
    if (editorCore !== null) {
      const data = await editorCore?.current?.save();
      console.log(newsTitle)
      console.log(data);
    } else {
      enqueueSnackbar("EditorJs instance not found", { variant: "error" });
    }
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

            <Box
              sx={{ mt: 5 }}
              style={{
                borderRadius: 5,
                border: "1px solid #bdbdbd",
              }}
            >
              <ReactEditorJS
                onInitialize={handleInitialize}
                tools={EDITOR_JS_TOOLS}
              />
            </Box>

            <DashboardMainButton sx={{ mt: 8 }} type="submit" onClick={onSave}>
              Publish
            </DashboardMainButton>
          </Box>
        </Container>
      </HomeSectionWrapper>
    </>
  );
};
