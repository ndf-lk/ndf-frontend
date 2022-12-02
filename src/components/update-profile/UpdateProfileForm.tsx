import { useFormik } from "formik";
import {
  Box,
  TextField,
  Grid,
  styled,
  Button,
  ButtonProps,
  CircularProgress,
} from "@mui/material";
import { useMe } from "../../hooks/me/useMe";
import { InputLabel } from "../InuptLabel";
import { IUser } from "../../types/user";
import { PropaneSharp } from "@mui/icons-material";

export const UpdateProfileForm = (props: {
  currentUser: {
    data: {
      data: IUser;
    };
  };
}) => {
  const ColorButton = styled(Button)<ButtonProps>(() => ({
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: 700,
    textTransform: "none",
    backgroundColor: "#871C25",
    "&:hover": {
      backgroundColor: "#871C25",
    },
  }));

  const formik = useFormik({
    initialValues: {
      firstName: props.currentUser.data?.data?.firstName,
      lastName: props.currentUser.data?.data?.lastName,
      address: props.currentUser.data?.data?.address,
      district: props.currentUser.data?.data?.district,
      position: props.currentUser.data?.data?.position,
      birthDay: props.currentUser.data?.data?.birthDay,
      seat: props.currentUser.data?.data?.seat,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Box sx={{ mt: 5 }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={4} md={6}>
              <InputLabel text={"First name"} />
              <TextField
                id="firstName"
                fullWidth
                sx={{ mb: 1, mt: 1 }}
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
            </Grid>

            <Grid item xs={4} sm={4} md={6}>
              <InputLabel text={"Last name"} />
              <TextField
                id="lastName"
                fullWidth
                sx={{ mb: 1, mt: 1 }}
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
            </Grid>

            <Grid item xs={4} sm={4} md={7}>
              <InputLabel text={"Address"} />
              <TextField
                id="address"
                fullWidth
                sx={{ mb: 1, mt: 1 }}
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.address}
              />
            </Grid>

            <Grid item xs={4} sm={4} md={5}>
              <InputLabel text={"District"} />
              <TextField
                id="district"
                fullWidth
                sx={{ mb: 1, mt: 1 }}
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.district}
              />
            </Grid>

            <Grid item xs={4} sm={4} md={6}>
              <InputLabel text={"Position"} />
              <TextField
                id="position"
                fullWidth
                sx={{ mb: 1, mt: 1 }}
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.position}
              />
            </Grid>

            <Grid item xs={4} sm={4} md={3}>
              <InputLabel text={"Date"} />
              <TextField
                fullWidth
                sx={{ mb: 1, mt: 1 }}
                variant="outlined"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.birthDay}
                id="birthDay"
              />
            </Grid>

            <Grid item xs={4} sm={4} md={3}>
              <InputLabel text={"Seat"} />
              <TextField
                id="seat"
                fullWidth
                sx={{ mb: 1, mt: 1 }}
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.seat}
              />
            </Grid>
          </Grid>

          <ColorButton sx={{ mt: 7 }} type="submit">
            {" "}
            Edit details{" "}
          </ColorButton>
        </form>
      </Box>
    </>
  );
};
