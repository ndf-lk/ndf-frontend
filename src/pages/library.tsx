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
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
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
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
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
                        <TableCell align="right">{row.calories}</TableCell>
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
