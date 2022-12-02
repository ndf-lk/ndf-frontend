import {
  Container,
  Typography,
  Grid,
  Divider,
  TextField,
  styled,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import { Stack, Box } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { FacebookOutlined } from "@mui/icons-material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import axios from "axios";
import AppConfig from "../config";

const contactdata = [
  {
    text: "contact.ndf.lk@gmail.com",
    icon: <MailOutlineIcon style={{ color: "white" }} />,
    link: "mailto:contact.ndf.lk@gmail.com",
  },
  {
    text: "NDF Building, No. 201/07, Pore, Athurugiriya",
    icon: <LocationOnIcon style={{ color: "white" }} />,
    link: "https://goo.gl/maps/WQzoTh6sVpQJb1e86",
  },
  {
    text: "0117364566, 0763581404, 077003001",
    icon: <LocalPhoneIcon style={{ color: "white" }} />,
    link: "tel:0117364566",
  },
  {
    text: "/NationalDemocraticFront.lk",
    icon: <InstagramIcon style={{ color: "white" }} />,
    link: "https://www.instagram.com/NationalDemocraticFront.lk/",
  },
  {
    text: "/NationalDemocraticFront.lk",
    icon: <FacebookOutlined style={{ color: "white" }} />,
    link: "https://www.facebook.com/NationalDemocraticFront.lk",
  },
  {
    text: "@nationaldemocraticfront",
    icon: <YouTubeIcon style={{ color: "white" }} />,
    link: "https://www.youtube.com/@nationaldemocraticfront",
  },
];

const ColorButton = styled(LoadingButton)<LoadingButtonProps>(() => ({
  color: "#FFFFFF",
  fontSize: "16px",
  fontWeight: 700,
  textTransform: "none",
  backgroundColor: "#871C25",
  "&:hover": {
    backgroundColor: "#871C25",
  },
}));

export const ContactPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  let navigate = useNavigate();

  const submitData = async () => {
    setIsLoading(true);

    await axios({
      method: "post",
      url: `${AppConfig.BACKEND_API}contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        user: name,
        subject: subject,
        userMessage: message,
        userEmail: email,
      }),
    })
      .then(function (response) {
        console.log(JSON.stringify(response.data));

        enqueueSnackbar("Your Message posted successfully", {
          variant: "success",
        });
      })
      .catch(function (error) {
        console.log(error);
        enqueueSnackbar("Cant send your message. please try again later", {
          variant: "error",
        });
      });

    setEmail("");
    setName("");
    setSubject("");
    setMessage("");
    setIsLoading(false);
  };

  return (
    <>
      <Grid container columns={{ xs: 1, sm: 1, md: 5 }}>
        <Grid item xs={1} sm={1} md={2}>
          <Box
            height={{ xs: 700, sm: 200, md: "100%" }}
            sx={{
              width: "100%",
              background:
                "linear-gradient(90deg, #821824 -4.86%, #D8532E 104.34%)",
            }}
          >
            <Container sx={{ mt: { xs: 0 }, p: 10 }} maxWidth="md">
              <Box sx={{ p: 10 }}>
                <Typography
                  variant="h5"
                  style={{
                    fontWeight: 700,
                    fontSize: "30px",
                    color: "white",
                    fontFamily: "Open Sans",
                  }}
                >
                  Contact us
                </Typography>

                <Stack spacing={2} sx={{ mt: 10 }}>
                  {contactdata.map((details) => {
                    return (
                      <>
                        <Stack
                          direction="row"
                          spacing={10}
                          style={{
                            marginTop: 50,
                            textDecoration: "none",
                          }}
                          component="a"
                          href={details.link}
                          target="_blank"
                        >
                          {details.icon}
                          <Typography
                            variant="body1"
                            style={{
                              color: "white",
                              fontFamily: "Open Sans",
                            }}
                          >
                            {details.text}
                          </Typography>
                        </Stack>
                      </>
                    );
                  })}
                </Stack>
              </Box>
            </Container>
          </Box>
        </Grid>

        <Grid item xs={1} sm={2} md={3}>
          <Container sx={{ mt: { xs: 0, sm: 15, md: 15 } }} maxWidth="md">
            <Typography
              variant="h5"
              sx={{ mt: 5, mb: 15 }}
              style={{
                fontWeight: 700,
                color: "#494949",
                fontSize: "30px",
                fontFamily: "Open Sans",
              }}
            >
              Send us a message
            </Typography>

            <Typography
              variant="h5"
              sx={{ mb: 1, mt: 5 }}
              style={{
                fontWeight: 700,
                color: "#333333",
                fontSize: "16px",
                fontFamily: "Open Sans",
              }}
            >
              Email
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Typography
              variant="h5"
              sx={{ mb: 1, mt: 5 }}
              style={{
                fontWeight: 700,
                color: "#333333",
                fontSize: "16px",
                fontFamily: "Open Sans",
              }}
            >
              Name
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Typography
              variant="h5"
              sx={{ mb: 1, mt: 5 }}
              style={{
                fontWeight: 700,
                color: "#333333",
                fontSize: "16px",
                fontFamily: "Open Sans",
              }}
            >
              Subject
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <Typography
              variant="h5"
              sx={{ mb: 1, mt: 5 }}
              style={{
                fontWeight: 700,
                color: "#333333",
                fontSize: "16px",
                fontFamily: "Open Sans",
              }}
            >
              Your message
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="I want to talk about..."
              multiline
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 4, md: 10 }}
            >
              <Grid item xs={4} sm={4} md={4}>
                <ColorButton
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{ mt: 5, mb: 20 }}
                  onClick={() => submitData()}
                  loading={isLoading}
                >
                  Send Message
                </ColorButton>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
