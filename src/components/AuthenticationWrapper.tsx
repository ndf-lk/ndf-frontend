import React from "react";
import { Stack, Box, Grid } from "@mui/material";

interface AuthSectionWrapperProps {
  children: React.ReactNode;
}

export const AuthSectionWrapper = React.forwardRef(
  ({ children, ...props }: AuthSectionWrapperProps, ref: any) => {
    return (
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 1, md: 3 }}
      >
        <Grid item xs={1} sm={1} md={1}>
          <Box
            height={{ xs: 200, sm: 200, md: "100vh" }}
            sx={{
              width: "100%",
              background:
                "linear-gradient(90deg, #821824 -4.86%, #D8532E 104.34%)",
            }}
          >
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              style={{ height: "95%" }}
            >
              <Box component="a" display="block">
                <Box
                  component="img"
                  alt="test"
                  src="/logo.png"
                  height={{ xs: 45, sm: 50, md: 100, display: "block" }}
                  width="auto"
                />
              </Box>

              <Box component="a" display="block">
                <Box
                  component="img"
                  alt="test"
                  src="/logo-desc.png"
                  height={{ xs: 50, sm: 50, md: 100, display: "block" }}
                  sx={{ mt: 5 }}
                  width="auto"
                />
              </Box>
            </Stack>
          </Box>
        </Grid>

        <Grid item xs={1} sm={2} md={2}>
          {children}
        </Grid>
      </Grid>
    );
  }
);

AuthSectionWrapper.displayName = "AuthSectionWrapper";

export default AuthSectionWrapper;
