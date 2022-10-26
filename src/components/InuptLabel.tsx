import { Typography } from "@mui/material";

export const InputLabel = ({ text }: { text: string }) => {
  return (
    <>
      <Typography
        style={{
          fontSize: "16px",
          fontFamily: "Open Sans",
          fontStyle: "normal",
          fontWeight: 400,
          color: "#7D7D7D",
        }}
        sx={{ mb: 1, mt: 1 }}
      >
        {text}
      </Typography>
    </>
  );
};
