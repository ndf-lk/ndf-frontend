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
} from "@mui/material";
import HomeSectionWrapper from "../components/HomeSectionWrapper";
import { NewsCard } from "../components/NewsCard";
import "../styles/library.css";

function createData(
  name: string,
  author: string,
  catogery: string,

) {
  return { name, author, catogery};
}

const rows = [
  createData("වානේ පන්නරය ලැබූ හැටි - 01", "නිකොලායි ඔස්ත්‍රොව්ස්කි", "Novel"),
  createData("වානේ පන්නරය ලැබූ හැටි - 02", "නිකොලායි ඔස්ත්‍රොව්ස්කි", "Novel"),
  createData("The Prince and the Pauper", "Mark Twain", "Novel"),
  createData("ප්‍රේමානිසංස", "චන්ද්‍රරත්න බණ්ඩාර", "Novel"),
  createData("HADASSAH - One Night with the King", "Tommy Tenney", "Novel"),
  createData("The Wrong Boy", "Willy Russell", "Novel"),
  createData("මානික්කාවත", "මහින්ද ප්‍රසාද් මස්ඉඹුල", "Novel")

];

export const LibraryPage = () => {
  return (
    <>
      <HomeSectionWrapper sx={{ background: "#EFEFEF", pb: 1 }}>
        <Container>
          <Box mb={{ xs: 9.25, md: 14 }}>
            <Grid
              container
              spacing={{ xs: 1, md: 3 }}
              columns={{ xs: 1, sm: 8, md: 12 }}
            >
              <Stack
                direction="row"
                sx={{ width: "100%" }}
                justifyContent="flex-end"
                alignItems="center"
                spacing={2}
              >
                <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                  >
                    <MenuItem value={"Novel"}>Novel</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <TableContainer
                component={Box}
                style={{
                  borderRadius: 5,
                }}
                sx={{ background: "white", mt: 2 }}
                className="main_table"
              >
                <Table
                  sx={{ minWidth: 650 }}
                  aria-label="simple table"
                  style={{ padding: 20 }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Book Name</TableCell>
                      <TableCell>Category</TableCell>
                      <TableCell align="right">Author</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>

                        <TableCell component="th" scope="row">
                          <Chip label="Novel" />
                        </TableCell>
                        <TableCell align="right">{row.catogery}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Box>
        </Container>
      </HomeSectionWrapper>
    </>
  );
};
