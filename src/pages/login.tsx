import { Container, Box } from "@mui/material";
import { JoinNDF } from "../components/Join";

export const LoginPage = () => {
  return (
    <>
      <Container
        style={{
          maxWidth: 600,
        }}
      >
        <Box mt={20} mb={20}>
          <JoinNDF />
        </Box>
      </Container>
    </>
  );
};
