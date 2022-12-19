import {
  Stack,
  Button,
  Box,
  Container,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import HomeSectionWrapper from "../../../../components/HomeSectionWrapper";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import { useNews } from "../../../../hooks/news/useNews";
import { useContext } from "react";
import { LanguageContext } from "../../../../context/userLangctx";
import { INews } from "../../../../types/news";

export const ViewNewsPage = () => {
  const { language } = useContext(LanguageContext);
  const news = useNews(language, 100);

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
              News
            </Typography>

            <Box>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  size="small"
                  component={Link}
                  to={"/dashboard/news/create"}
                >
                  Create News
                </Button>
              </Stack>
            </Box>
          </Stack>
          <TableContainer
            component={Box}
            style={{
              borderRadius: 5,
            }}
            sx={{ mt: 2, maxHeight: 800 }}
          >
            {news.isLoading && <LinearProgress />}
            {news.isRefetching && <LinearProgress />}
            <Table
              stickyHeader
              sx={{ minWidth: 650 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography
                      sx={{ mt: 1 }}
                      style={{
                        fontWeight: 600,
                        color: "#868585",
                        fontSize: "16px",
                        fontFamily: "Open Sans",
                      }}
                    >
                      Title
                    </Typography>
                  </TableCell>

                  <TableCell align="right">
                    <Typography
                      sx={{ mt: 1 }}
                      style={{
                        fontWeight: 600,
                        color: "#868585",
                        fontSize: "16px",
                        fontFamily: "Open Sans",
                      }}
                    ></Typography>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {news.isSuccess && (
                  <>
                    {news.data && (
                      <>
                        {news?.data?.data?.map((news: INews) => {
                          return (
                            <>
                              <TableRow
                                key={news?._id}
                                className="table_row"
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell
                                  component="th"
                                  scope="row"
                                  className="table-cell text"
                                  style={{
                                    fontWeight: 600,
                                    color: "#333333",
                                    fontSize: "16px",
                                    fontFamily: "Open Sans",
                                  }}
                                >
                                  {news.title}
                                </TableCell>

                                <TableCell
                                  component="th"
                                  scope="row"
                                  className="table-cell text"
                                  align="right"
                                  style={{
                                    fontWeight: 600,
                                    color: "#333333",
                                    fontSize: "16px",
                                    fontFamily: "Open Sans",
                                  }}
                                >
                                  <Button
                                    variant="text"
                                    component={Link}
                                    to={`/dashboard/news/edit/${news._id}`}
                                    endIcon={<ArrowRightAltIcon />}
                                  >
                                    Edit News
                                  </Button>
                                </TableCell>
                              </TableRow>
                            </>
                          );
                        })}
                      </>
                    )}
                  </>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </HomeSectionWrapper>
    </>
  );
};
