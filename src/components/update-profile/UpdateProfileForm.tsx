import { useFormik } from "formik";
import {
  Box,
  TextField,
  Grid,
  styled,
  Button,
  ButtonProps,
  LinearProgress,
} from "@mui/material";
import { InputLabel } from "../InuptLabel";
import { IUser } from "../../types/user";
import { useMutation, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useSnackbar } from "notistack";
import httpConfig from "../../utils/request";
import { IAPIError } from "../../types/error";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";

export const UpdateProfileForm = (props: {
  currentUser: UseQueryResult<{ data: IUser }, unknown>;
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const ColorButton = styled(LoadingButton)<LoadingButtonProps>(() => ({
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: 700,
    textTransform: "none",
    backgroundColor: "#871C25",
    "&:hover": {
      backgroundColor: "#871C25",
    },
  }));

  const updateProfileMutation = useMutation(
    (userData: {
      firstName: string | undefined;
      lastName: string | undefined;
      address: string | undefined;
      district: string | undefined;
      position: string | undefined;
      birthDay: string | undefined;
      seat: string | undefined;
    }) =>
      httpConfig({
        method: "post",
        url: "users/update",
        data: JSON.stringify(userData),
      }),
    {
      onSuccess: (response) => {
        console.log(response);
        enqueueSnackbar("Profile updated successfully", { variant: "success" });
      },

      onError: (error: AxiosError) => {
        const errorMessages: any = error?.response?.data;

        if (!errorMessages) {
          enqueueSnackbar(error.message, { variant: "error" });
          return;
        }

        if (!Array.isArray(errorMessages.message)) {
          enqueueSnackbar(errorMessages.message, { variant: "error" });
          return;
        }

        for (const message of errorMessages?.message) {
          enqueueSnackbar(message, { variant: "error" });
        }
      },
      onMutate: () => {},
    }
  );

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
    onSubmit: (values: {
      firstName: string | undefined;
      lastName: string | undefined;
      address: string | undefined;
      district: string | undefined;
      position: string | undefined;
      birthDay: string | undefined;
      seat: string | undefined;
    }) => {
      updateProfileMutation.mutate(values);
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

          <ColorButton
            sx={{ mt: 7 }}
            type="submit"
            loading={updateProfileMutation.isLoading}
          >
            {" "}
            Edit details{" "}
          </ColorButton>
        </form>
      </Box>
    </>
  );
};
