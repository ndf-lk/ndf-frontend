import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import {
  Box,
  TextField,
  Grid,
  styled,
  Button,
  ButtonProps,
  LinearProgress,
} from "@mui/material";

export const DashboardMainButton = styled(LoadingButton)<LoadingButtonProps>(
  () => ({
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: 700,
    textTransform: "none",
    backgroundColor: "#871C25",
    "&:hover": {
      backgroundColor: "#871C25",
    },
  })
);
