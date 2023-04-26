import { Box, Chip, Stack } from "@mui/material";
import React from "react";
import { useNewsContext } from "../../context/NewsContext";
import { newsCategories } from "../../data/data";

const DisplayChips = () => {
  const { setKeyWord, keyWord } = useNewsContext();

  const handleClick = (label) => {
    setKeyWord(label);
  };

  return (
    <Stack direction="row" spacing={4} overflow="auto">
      {newsCategories.map((category, index) => (
        <Chip
          disableRipple
          key={index}
          label={category.label}
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
  );
};

export default DisplayChips;
