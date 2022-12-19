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
import { useSnackbar } from "notistack";
import { useState, useEffect } from "react";
import { DashboardMainButton } from "../Buttons/DashboardMainButton";
import { ImageUploader } from "../ImageUploader/image-uploader";
import { request } from "../../utils/request";
import { useMutation } from "@tanstack/react-query";
import { useUserStore } from "../../store/createUserSlice";
import { AvatarUploader } from "./avatar-uploader";
import { UploadScenarios } from "../../enum/file-uploader";

export const UpdateProfileForm = (props: { currentUser: IUser }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [openImageUploaderModal, setOpenImageUplaoderModal] = useState(false);
  const { setUser } = useUserStore();

  const [profileImage, setProfileImage] = useState<string | null | undefined>(
    props.currentUser.profileImgUrl
  );

  const handleProfileImg = (res: any) => {
    setProfileImage(res.url);
  };

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
      profileImgUrl: string | undefined | null;
    }) =>
      request(
        {
          path: "users/update",
          method: "POST",
        },
        userData,
        true
      ),
    {
      onSuccess: (response) => {
        setUser(response.data);
        enqueueSnackbar("Profile updated successfully", { variant: "success" });
      },

      onError: (error) => {
        console.log(error);
      },
      onMutate: () => {},
    }
  );

  const formik = useFormik({
    initialValues: {
      firstName: props.currentUser.firstName,
      lastName: props.currentUser.lastName,
      address: props.currentUser.address,
      district: props.currentUser.district,
      position: props.currentUser.position,
      birthDay: props.currentUser.birthDay,
      seat: props.currentUser.seat,
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
          <ImageUploader
            setImage={setProfileImage}
            uploadType={UploadScenarios.userProfile}
          />
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

        <AvatarUploader
          handleFile={handleProfileImg}
          sx={{ width: 56, height: 56 }}
          currentImageUrl={props.currentUser.profileImgUrl}
          scenario={UploadScenarios.userProfile}
          alt={props.currentUser.firstName}
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
            Save Profile
          </DashboardMainButton>
        </form>
      </Box>
    </>
  );
};
