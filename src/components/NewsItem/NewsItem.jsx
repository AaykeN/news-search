import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
} from "@mui/material";
import noImage from "../../images/no-image.jpg";
import "./NewsItem.css";
import LikedIcon from "./LikedIcon";
import { CardActionArea } from "@mui/material";
import { useNewsContext } from "../../context/NewsContext";

const NewsItem = ({ article }) => {
  const { handleSetLike, setMyFavourites, myFavourites } = useNewsContext();
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className="newsItem__card" variant="outlined">
        <CardActionArea
          target="_blank"
          href={article.url}
          disableRipple={true}
          sx={{ width: "100%", height: "100%" }}
        >
          <CardMedia
            component="img"
            height="184"
            image={article.urlToImage ? article.urlToImage : noImage}
            alt={article.title}
          />

          <CardContent
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <Typography
              gutterBottom
              variant="h6"
              className="newsItem__cardContent-title"
            >
              {article.title.split(" ").slice(0, 10).join(" ") + "..."}
            </Typography>

            <Typography
              gutterBottom
              variant="body2"
              color="text.secondary"
              className="newsItem__cardContent-description"
            >
              {article.description?.split(" ").slice(0, 16).join(" ") + "..."}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="newsItem__cardActions">
          <Typography variant="caption" color="text.secondary">
            {new Date(article.publishedAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            - {article.source.name}
          </Typography>

          <LikedIcon article={article} />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default NewsItem;
