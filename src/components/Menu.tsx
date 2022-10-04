import React from "react";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Menubar: React.FC = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        gap: 12,
      }}
    >
      <Link style={{ textDecoration: "none" }} to="/">
        <Typography fontSize={16} fontWeight="600">
          Home
        </Typography>
      </Link>

      <Link style={{ textDecoration: "none" }} to="/about">
        <Typography fontSize={16} fontWeight="600">
          About
        </Typography>
      </Link>

      <Link style={{ textDecoration: "none" }} to="/events">
        <Typography fontSize={16} fontWeight="600">
          Events
        </Typography>
      </Link>

      <Link style={{ textDecoration: "none" }} to="/blog">
        <Typography fontSize={16} fontWeight="600">
          Blog
        </Typography>
      </Link>

      <Link style={{ textDecoration: "none" }} to="#">
        <Typography fontSize={16} fontWeight="600">
          Forum
        </Typography>
      </Link>
    </Box>
  );
};

export default Menubar;
