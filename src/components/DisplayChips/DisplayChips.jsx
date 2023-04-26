import {
  Box,
  Chip,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { useNewsContext } from "../../context/NewsContext";
import { newsCategories } from "../../data/data";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import Searchbar from "../Searchbar/Searchbar";

const DisplayChips = () => {
  const theme = useTheme();

  const { setKeyWord, keyWord } = useNewsContext();

  const handleClick = (label) => {
    setKeyWord(label);
  };

  return (
    <Stack
      direction="row"
      spacing={4}
      sx={{
        position: "sticky",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stack direction="row" spacing={4} overflow="auto">
        {newsCategories.map((category, index) => (
          <Chip
            disableRipple
            key={index}
            label={category.label}
            Small
            variant={keyWord === category.value ? "filled" : "outlined"}
            onClick={() => handleClick(category.value)}
            sx={{
              padding: "none",
              bgcolor: keyWord === category.value ? "#f8ece2" : "",
              border: "none",
              color: keyWord === category.value ? "#FF7800" : "",
            }}
          />
        ))}
      </Stack>
      <Searchbar displaySmallScreen="none" displayLargeScreen="block" />
    </Stack>
  );
};

export default DisplayChips;
