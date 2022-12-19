import {
  Stack,
  Button,
  Avatar,
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
import HomeSectionWrapper from "../../components/HomeSectionWrapper";
import { useUsers } from "../../hooks/users/useUsers";
import { IUser } from "../../types/user";

export const UsersPage = () => {
  const users = useUsers();

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
              Users
            </Typography>

            <Box>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" size="small">
                  {" "}
                  Add user{" "}
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
                      Avatar
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
                      First name
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
                      Last Name
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
                      Email
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
                      phone
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.isSuccess && (
                  <>
                    {users.data && (
                      <>
                        {users?.data?.data?.map((user: IUser) => {
                          return (
                            <>
                              <TableRow
                                key={user?._id}
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
                                  <Avatar src={user?.profileImgUrl}></Avatar>
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
                                  {user?.firstName}
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
                                  {user?.lastName}
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
                                  <a href={`to:${user?.email}`}>
                                    {user?.email}
                                  </a>
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
                                  <a href={`tele:${user?.phone}`}>
                                    {user?.phone}
                                  </a>
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

            {users.isLoading && <LinearProgress />}
            {users.isRefetching && <LinearProgress />}
          </TableContainer>
        </Container>
      </HomeSectionWrapper>
    </>
  );
};
