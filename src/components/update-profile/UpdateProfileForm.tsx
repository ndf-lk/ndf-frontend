import { useFormik } from "formik";
import {
  Box,
  TextField,
  Modal,
  Grid,
  Stack,
  Avatar,
  Typography,
} from "@mui/material";
import { InputLabel } from "../InuptLabel";
import { IUser } from "../../types/user";
import { useMutation, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useSnackbar } from "notistack";
import httpConfig from "../../utils/request";
import { useState, useEffect } from "react";
import { DashboardMainButton } from "../Buttons/DashboardMainButton";
import { ImageUploader } from "../ImageUploader/image-uploader";

export const UpdateProfileForm = (props: {
  currentUser: UseQueryResult<{ data: IUser }, unknown>;
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [openImageUploaderModal, setOpenImageUplaoderModal] = useState(false);
  const [profileImage, setProfileImage] = useState(
    props.currentUser.data?.data?.profileImgUrl!
  );

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const updateProfileMutation = useMutation(
    (userData: {
      firstName: string | undefined;
      lastName: string | undefined;
      address: string | undefined;
      district: string | undefined;
      position: string | undefined;
      birthDay: string | undefined;
      seat: string | undefined;
      profileImgUrl: string | undefined;
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
      updateProfileMutation.mutate({
        ...values,
        profileImgUrl: profileImage,
      });
    },
  });

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "90%" : "50%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 3,
    p: 4,
  };

  return (
    <>
      <Modal
        open={openImageUploaderModal}
        onClose={() => setOpenImageUplaoderModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ImageUploader setImage={setProfileImage} path={"users/upload"} />
        </Box>
      </Modal>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ mt: 7 }}
      >
        <Typography
          variant={"h2"}
          style={{
            fontSize: "20px",
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: 600,
            color: "#333333",
          }}
        >
          Your Profile
        </Typography>

        <Avatar
          sx={{ width: 56, height: 56 }}
          onClick={() => setOpenImageUplaoderModal(true)}
          src={profileImage}
          style={{
            cursor: "pointer",
          }}
        />
      </Stack>

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

          <DashboardMainButton
            sx={{ mt: 7 }}
            type="submit"
            loading={updateProfileMutation.isLoading}
          >
            Edit details
          </DashboardMainButton>
        </form>
      </Box>
    </>
  );
};
