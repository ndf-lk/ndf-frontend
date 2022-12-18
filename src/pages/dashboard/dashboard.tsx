import HomeSectionWrapper from "../../components/HomeSectionWrapper";
import {
  Container,
  Box,
  Typography,
  styled,
  Button,
  ButtonProps,
  Stack,
} from "@mui/material";
import "../../styles/dashboard.css";
import { useEffect, useState } from "react";
import { UpdateProfileForm } from "../../components/update-profile/UpdateProfileForm";
import { decodeToken } from "../../utils/auth_token";
import { useUserStore } from "../../store/createUserSlice";

const GalleryButton = styled(Button)<ButtonProps>(() => ({
  color: "white",
  backgroundColor: "#6E00FF",
  "&:hover": {
    backgroundColor: "#6E00FF",
  },
}));

const CreatePostButton = styled(Button)<ButtonProps>(() => ({
  color: "white",
  backgroundColor: "#FF7A49",
  "&:hover": {
    backgroundColor: "#FF7A49",
  },
}));

export const DashboardPage = () => {
  const { user } = useUserStore();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const tokenpayload = decodeToken();
    if (tokenpayload?.["cognito:groups"].includes("admin")) {
      setIsAdmin(true);
    }
  }, []);

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
              Dashboard
            </Typography>
            <Box>
              {isAdmin ? (
                <>
                  <Stack direction="row" spacing={2}>
                    <CreatePostButton
                      variant="contained"
                      size="small"
                      LinkComponent={"a"}
                      href="/dashboard/create"
                    >
                      New post
                    </CreatePostButton>

                    <GalleryButton variant="contained" size="small">
                      Upload to gallery
                    </GalleryButton>
                  </Stack>
                </>
              ) : null}
            </Box>
          </Stack>

          {user ? <UpdateProfileForm currentUser={user} /> : <>please login</>}
        </Container>
      </HomeSectionWrapper>
    </>
  );
};
