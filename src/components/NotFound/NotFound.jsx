import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import OrangeButton from "../Button/OrangeButton";
import { useNewsContext } from "../../context/NewsContext";

const NotFound = () => {
  const { isLoggedIn } = useNewsContext();
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      navigate("/home");
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h1">404</Typography>
        <Typography variant="h5">The page can't be found</Typography>
        <OrangeButton text={"Back to Homepage"} onClick={handleClick} />
      </Box>
    </>
  );
};

export default NotFound;
