import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { ThemeProvider } from "@mui/material";
import themeFactory from "../config/theme";
import Values from "values.js";
import Footer from "../components/footer";

const MainLayout: React.FC<{
  children: React.ReactNode;
  hideNewsBar: boolean;
}> = ({ children, hideNewsBar }) => {
  let primaryColor = "#D8532E";
  let secondaryColor = "#821824";
  let selectedHeaderFont = "Open Sans";
  let selectedBodyFont = "Open Sans";
  const primary = new Values(primaryColor);
  const secondary = new Values(secondaryColor);

  const theme = themeFactory({
    primary: {
      main: primaryColor,
      A100: primary.tint(75).hexString(),
      A200: primary.tint(85).hexString(),
      A400: primary.tint(90).hexString(),
      dark: primary.shade(15).hexString(),
      light: primary.tint(85).hexString(),
    },
    secondary: {
      main: secondaryColor,
      A100: secondary.tint(75).hexString(),
      A200: secondary.tint(85).hexString(),
      A400: secondary.tint(90).hexString(),
      dark: secondary.shade(15).hexString(),
      light: secondary.tint(85).hexString(),
    },
    headerFont: selectedHeaderFont,
    bodyFont: selectedBodyFont,
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header hideNewsBar={hideNewsBar} />
        <div>{children}</div>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default MainLayout;
