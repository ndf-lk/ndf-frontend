import {
  Box,
  Chip,
  Container,
  TextField,
  FormControl,
  Grid,
  Table,
  LinearProgress,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import HomeSectionWrapper from "../components/HomeSectionWrapper";
import { useState, useEffect } from "react";
import "../styles/library.css";
import { useBooks } from "../hooks/library/useBooks";

export const LibraryPage = () => {
  const [category, setCategory] = useState("Novels");
  const [keyword, setKeyword] = useState(null);

  const books = useBooks(category, keyword);

  useEffect(() => {
    books.refetch();
  }, [category]);

  useEffect(() => {
    books.refetch();
  }, [keyword]);

  return (
    <>
      <HomeSectionWrapper sx={{ pb: 1 }}>
        <Container>
          <Grid
            sx={{ width: "100%", mb: 50, m: 1 }}
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={5}>
              <Typography
                variant="h5"
                style={{
                  fontWeight: 700,
                  fontSize: "24px",
                  color: "#494949",
                  fontFamily: "Open Sans",
                }}
              >
                Our Library
              </Typography>
            </Grid>

            <Grid item xs={2} sm={4} md={5}>
              <TextField
                sx={{ m: 1 }}
                id="outlined-basic"
                label="Search Here"
                variant="outlined"
                onClick={(e: any) => setKeyword(e.target.value)}
                style={{ float: "right" }}
                fullWidth
              />
            </Grid>

            <Grid item xs={2} sm={4} md={2}>
              <FormControl
                size="medium"
                sx={{ m: 1 }}
                fullWidth
                style={{ float: "right" }}
              >
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <MenuItem value={"Law"}>Law</MenuItem>
                  <MenuItem value={"Biography"}>Biography</MenuItem>
                  <MenuItem value={"Translations"}>Translations</MenuItem>
                  <MenuItem value={"Political"}>Political</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                  <MenuItem value={"Novels"}>Novels</MenuItem>
                  <MenuItem value={"Languages"}>Languages</MenuItem>
                  <MenuItem value={"BillsActsRegulations"}>
                    Bills, Acts, Regulations
                  </MenuItem>
                  <MenuItem value={"Educational"}>Educational</MenuItem>
                  <MenuItem value={"SinhalaLiterature"}>
                    Sinhala Literature
                  </MenuItem>
                  <MenuItem value={"SLHistory"}>SL History</MenuItem>
                  <MenuItem value={"Sociology"}>Sociology</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Box mb={{ xs: 9.25, md: 14 }}>
            <Stack></Stack>

            <TableContainer
              component={Box}
              style={{
                borderRadius: 5,
              }}
              sx={{ mt: 2, maxHeight: 800 }}
              className="main_table"
            >
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
                        Book Id
                      </Typography>
                    </TableCell>

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
                        Book Name
                      </Typography>
                    </TableCell>
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
                        Category
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
                      >
                        Author
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {books.isSuccess && (
                    <>
                      {books.data && (
                        <>
                          {books?.data?.data?.map((book: any) => {
                            return (
                              <>
                                <TableRow
                                  key={book?._id}
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
                                    {book?.number}
                                  </TableCell>

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
                                    {book?.book_name}
                                  </TableCell>

                                  <TableCell
                                    component="th"
                                    scope="row"
                                    className="table-cell text"
                                  >
                                    <Chip
                                      label={book?.category}
                                      style={{
                                        fontWeight: 600,
                                        color: "#333333",
                                        fontSize: "14px",
                                        fontFamily: "Open Sans",
                                      }}
                                    />
                                  </TableCell>
                                  <TableCell
                                    align="right"
                                    className="table-cell text"
                                    style={{
                                      color: "#333333",
                                      fontSize: "16px",
                                      fontFamily: "Open Sans",
                                    }}
                                  >
                                    {book?.author}
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

              {books.isLoading && <LinearProgress />}
              {books.isRefetching && <LinearProgress />}
            </TableContainer>
          </Box>
        </Container>
      </HomeSectionWrapper>
    </>
  );
};
