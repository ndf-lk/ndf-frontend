import {
  Box,
  Chip,
  Container,
  TextField,
  FormControl,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
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

  const books = useBooks(category);

  useEffect(() => {
    books.refetch();
  }, [category]);

  return (
    <>
      <HomeSectionWrapper sx={{ pb: 1 }}>
        <Container>
          <Box mb={{ xs: 9.25, md: 14 }}>
            <Stack
              sx={{ width: "100%", mb: 10, mt: 5 }}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
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

              <FormControl sx={{ m: 1, minWidth: 200 }} size="medium">
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
                  <MenuItem value={"Transactions"}>Transactions</MenuItem>
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
            </Stack>
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
            </TableContainer>
          </Box>
        </Container>
      </HomeSectionWrapper>
    </>
  );
};
