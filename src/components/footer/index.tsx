import {
  Box,
  Typography,
  Stack,
  Grid,
  Button,
  ButtonProps,
} from "@mui/material";
import "./footer.css";
import { getData } from "../../data/footer";
import { useContext } from "react";
import { styled } from "@mui/material/styles";
import { LanguageContext } from "../../context/userLangctx";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText("#FFFFFF"),
  fontWeight: 700,
  backgroundColor: "#FFFFFF",
  fontFamily: "'Noto Sans', sans-serif",
  width: 250,
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
  "&:hover": {
    backgroundColor: "#FFFFFF",
  },
}));

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const content = getData(language);
  console.log(content);

  return (
    <>
      <footer className="footer">
        <Box
          sx={{
            borderRadius: 0,
            margin: 0,
          }}
        >
          <Box>
            <Box
              component="img"
              className="footer_main_img"
              textAlign="center"
              alt="test"
              src="/logo-home.png"
              width={{ xs: 100, md: 150 }}
            />

            <Typography
              variant={"h4"}
              textAlign="center"
              sx={{ color: "white" }}
            >
              {content.main.title}
            </Typography>

            <Typography
              variant={"body1"}
              textAlign="center"
              sx={{ color: "white" }}
            >
              {content.main.secondary}
            </Typography>

            <Box textAlign="center" sx={{ mt: 5 }}>
              <ColorButton> {content.party_membership_btn} </ColorButton>
            </Box>

            <Typography
              variant={"body1"}
              textAlign="center"
              className="footer_description"
              mt={{ xs: 5, md: 5 }}
              sx={{
                color: "white",
              }}
            >
              {content.description}
            </Typography>
          </Box>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
