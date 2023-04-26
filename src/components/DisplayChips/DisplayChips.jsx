import { Chip, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { useNewsContext } from "../../context/NewsContext";
import { newsCategories } from "../../data/data";
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
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        freeMode
        centeredSlidesBounds
        modules={[FreeMode]}
        className="flex overflow-x-hidden"
      >
        {newsCategories.map((category, index) => (
          <SwiperSlide style={{ width: "auto", height: "auto" }}>
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
          </SwiperSlide>
        ))}
      </Swiper>
      <Searchbar displaySmallScreen="none" displayLargeScreen="block" />
    </Stack>
  );
};

export default DisplayChips;
