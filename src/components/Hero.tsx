import {
  useMediaQuery,
  Stack,
  Button,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { getData } from "../data/content";
import { LanguageContext } from "../context/userLangctx";
import { useTheme } from "@emotion/react";

export const HeroPage = () => {
  const headerTemplateTwoImageHeight = 500;

  const { language } = useContext(LanguageContext);
  const content = getData(language);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box pt={{ xs: 11.5 }}>
        <Container>
          <Grid
            spacing={{
              xs: 0,
              md: 0,
            }}
            justifyContent="center"
            sx={{
              mb: {
                xs: 14,
                md: 0,
              },
              height: {
                md: headerTemplateTwoImageHeight,
              },
            }}
            gap={{ xs: 10, md: 0 }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: {
                  xs: "flex-start",
                  md: "center",
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  p: 5,

                  borderRadius: 4,
                  paddingLeft: isSmall ? 5 : 20,
                  paddingRight: isSmall ? 5 : 20,
                  marginLeft: isSmall ? 2 : 20,
                  marginRight: isSmall ? 2 : 20,
                  background: "#EFEFEF;",
                }}
                mb={{ xs: 4, md: 4 }}
              >
                <Typography
                  variant={"h2"}
                  component="h1"
                  textAlign={"center"}
                  sx={{
                    flexWrap: "wrap",
                    fontWeight: 900,
                    gap: 2,
                    ".primary-title": {
                      color: (t) => t.palette.secondary.main,
                    },
                  }}
                >
                  {content.main.title}
                </Typography>
                <Typography sx={{ mt: 5 }}>{content.main.body}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
