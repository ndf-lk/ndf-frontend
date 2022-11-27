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
import { Link } from "react-router-dom";

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
        <Stack
          justifyContent="space-around"
          alignItems="center"
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Box style={{ float: "left", padding: 20 }}>
            <Box
              component="img"
              alt="test"
              src="/logo-home.png"
              width={{ xs: 100, md: 150 }}
            />

            <Typography variant={"h4"} sx={{ color: "white" }}>
              {content.main.title}
            </Typography>

            <Typography variant={"body1"} sx={{ color: "white" }}>
              {content.main.secondary}
            </Typography>

            <Box textAlign="left" sx={{ mt: 5 }}>
              {/*@ts-ignore */}
              <ColorButton size="small" component={Link} to="/register">
                {content.party_membership_btn}
              </ColorButton>
            </Box>
          </Box>

          <Box style={{ float: "left", padding: 20 }}>
            <Typography variant={"h4"} sx={{ color: "white" }}>
              Langauges
            </Typography>

            <Stack sx={{ mt: 10 }} style={{ textAlign: "left" }}>
              <Typography
                style={{ color: "white", textDecoration: "none" }}
                sx={{ mt: 5 }}
              >
                සිංහල
              </Typography>

              <Typography
                style={{ color: "white", textDecoration: "none" }}
                sx={{ mt: 5 }}
              >
                English
              </Typography>

              <Typography
                style={{ color: "white", textDecoration: "none" }}
                sx={{ mt: 5 }}
              >
                தமிழ்
              </Typography>
            </Stack>
          </Box>

          {content.links.map((footernav) => {
            return (
              <>
                <Box style={{ float: "left", padding: 20, textAlign: "left" }}>
                  <Typography variant={"h4"} sx={{ color: "white" }}>
                    {footernav.title}
                  </Typography>
                  <Stack sx={{ mt: 10 }} style={{ textAlign: "left" }}>
                    {footernav.links.map((links) => {
                      return (
                        <>
                          <Typography
                            style={{ color: "white", textDecoration: "none" }}
                            sx={{ mt: 5 }}
                            component={Link}
                            to={`${links.link}`}
                          >
                            {links.label}{" "}
                          </Typography>
                        </>
                      );
                    })}
                  </Stack>
                </Box>
              </>
            );
          })}
        </Stack>
      </footer>
    </>
  );
};

export default Footer;
