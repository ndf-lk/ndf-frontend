import { Button, Stack, Box, Typography, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import "../styles/landing.css";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText("#FFFFFF"),
  fontWeight: 800,
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 10,
  paddingBottom: 10,
  backgroundColor: "#FFFFFF",
  fontFamily: "'Noto Sans', sans-serif",
  borderRadius: 10,
  width: 200,
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
  "&:hover": {
    backgroundColor: "#FFFFFF",
  },
}));

const IndexPage = () => {
  return (
    <>
      <div
        className="center"
        style={{
          background:
            "linear-gradient(69.4deg, #821824 34.07%, #E85E30 111.52%)",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,

          width: "100%",
        }}
      >
        <Typography
          variant={"h3"}
          textAlign="center"
          className="headerText"
          sx={{ mt: 5 }}
          style={{
            fontWeight: 900,
          }}
        >
          ආයුබෝවන් Welcome வரவேற்பு
        </Typography>

        <Typography
          variant={"h5"}
          textAlign="center"
          className="subtext"
          sx={{ mt: 2 }}
          style={{
            fontWeight: 500,
          }}
        >
          ජාතික ප්‍රජාතන්ත්‍රවාදී පෙරමුණේ නිල වෙබ් අඩවියට ඔබ සාදරයෙන් පිළිගනිමු!
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 3 }}
        >
          <ColorButton size="large">English</ColorButton>
          <ColorButton size="large"> Tamil</ColorButton>
          <ColorButton size="large"> Sinhala</ColorButton>
        </Stack>

        <Box
          component="img"
          className="image_block"
          textAlign="center"
          alt="test"
          src="/logo-home.png"
          height="30%"
          width="auto"
        />
      </div>
    </>
  );
};

export default IndexPage;
