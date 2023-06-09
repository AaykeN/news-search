import {
  Box,
  Card,
  Divider,
  CardMedia,
  Typography,
  CardContent,
  CardActionArea,
} from "@mui/material";
import "./MyFavouritesPanel.css";
import MoreIcon from "./MoreIcon";
import { useState } from "react";
import LikedIcon from "../NewsItem/LikedIcon";
import { useNewsContext } from "../../context/NewsContext";
import { Link } from "react-router-dom";

const MyFavouritePanel = () => {
  const { myFavourites } = useNewsContext();
  const myFavouritesAmount = myFavourites.length;

  const handleRemove = (e) => {
    e.preventDefault();
    alert("button Clicked");
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  return (
    <>
      <Box className="myFavouritePanel__box" sx={{ marginBottom: "32px" }}>
        <Typography className="myFavouritePanel__heading">
          Your Favourites
        </Typography>
        <Link to="/likes">
          <Typography variant="caption">
            See All ({myFavouritesAmount})
          </Typography>
        </Link>
      </Box>
      {myFavouritesAmount === 0 ? (
        <Typography color="text.secondary" sx={{ textAlign: "center" }}>
          Nothing here yet
        </Typography>
      ) : (
        myFavourites
          .slice(-3)
          .reverse()
          .map((likedArticle) => (
            <Card
              key={crypto.randomUUID()}
              className="myFavouritePanel__card"
              sx={{ position: "relative" }}
            >
              <Box className=".myFavouritePanel__cardActionArea-box">
                <CardContent className="myFavouritePanel__cardContent">
                  <CardActionArea
                    href={likedArticle.url}
                    disableRipple={true}
                    target="_blank"
                  >
                    <Typography
                      className="myFavouritePanel__title"
                      variant="body2"
                    >
                      {likedArticle.title.split(" ").slice(0, 13).join(" ") +
                        "..."}
                    </Typography>
                  </CardActionArea>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography color="#9F9F9F" sx={{ fontSize: "11px" }}>
                      {likedArticle.source.name}
                    </Typography>
                    <LikedIcon
                      article={likedArticle}
                      onClick={handleRemove}
                      className="myFavouritePanel__icon"
                    />
                  </Box>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                className="myFavouritePanel__cardMedia-img"
                image={likedArticle.urlToImage}
                alt={likedArticle.title}
              />
            </Card>
          ))
      )}
    </>
  );
};

export default MyFavouritePanel;
