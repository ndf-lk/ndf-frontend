import { Stack, Button, Box, Container, Grid, Typography } from "@mui/material";

export const HeroPage = () => {
  const headerTemplateTwoImageHeight = 500;
  const isSmDown = true;

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
                  borderRadius: 1,
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
                  A New Political Party
                </Typography>
                <Typography sx={{ mt: 5 }}>
                  Yes, a new political party. A topic that everyone is talking
                  about these days. This is a new political movement in which we
                  can all stand. We are committed to introduce a new political
                  approach to the country that goes beyond tradition. This is
                  one aspect of its deviation.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
