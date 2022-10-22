import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  ButtonGroup,
  Box,
  Stack,
  Button,
  Container,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu as Menus,
  styled,
  useTheme,
  AppBarProps as MuiAppBarProps,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { useState } from "react";
import Menubar from "./Menu";
import { Link } from "react-router-dom";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const Header = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar
        sx={{
          borderBottom: (t) => `1px solid ${t.palette.primary}`,
          height: {
            xs: "100px",
            md: "120px",
          },
          // @ts-ignore
          background:
            "linear-gradient(90deg, rgba(130,24,36,1) 35%, rgba(216,83,46,1) 100%);",
          borderRadius: 0,
        }}
        position="sticky"
        elevation={0}
      >
        <Container
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Stack direction="row" sx={{ mt: 5 }}>
              <Box component="a" display="block">
                <Box
                  component="img"
                  alt="test"
                  src="/logo.png"
                  height={{ xs: 45, md: 55, display: "block" }}
                  width="auto"
                />
              </Box>

              <Box component="a" display="block">
                <Box
                  component="img"
                  alt="test"
                  src="/logo-desc.png"
                  height={{ xs: 50, md: 70, display: "block" }}
                  width="auto"
                />
              </Box>
            </Stack>
          </Box>

          <>
            <MenuIcon
              onClick={handleDrawerOpen}
              sx={{ fontSize: 30, display: { xs: "flex", md: "none" } }}
            />
          </>
        </Container>
      </AppBar>

      <Box>
        <ButtonGroup
          fullWidth
          aria-label="text button group"
          variant="text"
          color="inherit"
          sx={{ fontSize: 30, display: { xs: "none", md: "flex" } }}
        >
          <Button variant="text" component={Link} to="/home">
            Home
          </Button>
          <Button component={Link} to="/news">
            News
          </Button>
          <Button>Contact</Button>
          <Button>Join Us</Button>
        </ButtonGroup>
      </Box>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box mr={28}>
              <Box component="a" display="block">
                <Box
                  component="img"
                  alt="test"
                  src="/logo.png"
                  height={{ xs: 45, md: 55, display: "block" }}
                  width="auto"
                />
              </Box>
            </Box>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <CloseIcon />
              ) : (
                <KeyboardBackspaceIcon />
              )}
            </IconButton>
          </Box>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem key={"hello"} disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>

          <ListItem key={"about"} disablePadding>
            <ListItemButton component={Link} to="/about">
              <ListItemText primary={"About"} />
            </ListItemButton>
          </ListItem>

          <ListItem key={"events"} disablePadding>
            <ListItemButton component={Link} to="/events">
              <ListItemText primary={"Events"} />
            </ListItemButton>
          </ListItem>

          <ListItem key={"blog"} disablePadding>
            <ListItemButton component={Link} to="/blog">
              <ListItemText primary={"Blogs"} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </>
  );
};
