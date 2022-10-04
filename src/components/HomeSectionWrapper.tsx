import React from "react";
import { Box, BoxProps } from "@mui/material";

interface HomeSectionWrapperProps extends BoxProps {
  children: React.ReactNode;
}

export const HomeSectionWrapper = React.forwardRef(
  ({ children, ...props }: HomeSectionWrapperProps, ref: any) => {
    return (
      <Box
        component="section"
        pt={{ xs: 10, md: 36 }}
        pb={{ xs: 10, md: 36 }}
        sx={props.sx}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

HomeSectionWrapper.displayName = "HomeSectionWrapper";

export default HomeSectionWrapper;
