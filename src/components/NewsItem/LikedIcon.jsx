import { IconButton } from "@mui/material";
import "./NewsItem.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useState } from "react";
import { useNewsContext } from "../../context/NewsContext";

const LikedIcon = ({ article }) => {
  const { handleSetLike, setMyFavourites, myFavourites } = useNewsContext();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const isLiked =
      JSON.parse(localStorage.getItem("myFavourites"))?.some(
        (item) => item.title === article.title || item.url === article.url
      ) || false;
    setLiked(isLiked);
  }, [article, myFavourites]);

  const updatemyFavourites = (e) => {
    if (liked) {
      const filteredNews = myFavourites.filter(
        (item) => item.title !== article.title && item.url !== article.url
      );
      e.stopPropagation();

      setLiked(false);
      setMyFavourites(filteredNews);
      localStorage.setItem("myFavourites", JSON.stringify(filteredNews));
    } else {
      handleSetLike(article);
      localStorage.setItem(
        "myFavourites",
        JSON.stringify([...myFavourites, article])
      );
    }
    setLiked(!liked);
  };

  return (
    <IconButton
      onClick={updatemyFavourites}
      type="submit"
      size="small"
      variant="plain"
      sx={{ color: liked ? "#ec5252" : "inherit" }}
    >
      {liked ? (
        <FavoriteIcon fontSize="inherit" />
      ) : (
        <FavoriteBorderIcon fontSize="inherit" />
      )}
    </IconButton>
  );
};

export default LikedIcon;
