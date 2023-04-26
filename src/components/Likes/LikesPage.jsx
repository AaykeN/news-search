import { Typography, Grid } from "@mui/material";
import { useNewsContext } from "../../context/NewsContext";
import NewsItem from "../NewsItem/NewsItem";

const LikesPage = () => {
  const { myFavourites } = useNewsContext();
  const myFavouritesAmount = myFavourites.length;
  const displayNews = myFavourites.map((article, index) => {
    return <NewsItem key={index} article={article} />;
  });

  return (
    <>
      {myFavouritesAmount === 0 ? (
        <Typography color="text.secondary" sx={{ textAlign: "center" }}>
          Nothing here yet
        </Typography>
      ) : (
        <>
          <Typography
            sx={{ fontWeight: "600", marginBottom: "32px", fontSize: "18px" }}
          >
            Your Favourites ({myFavouritesAmount})
          </Typography>
          <Grid container columnSpacing={6} rowSpacing={3}>
            {displayNews}
          </Grid>
        </>
      )}
    </>
  );
};

export default LikesPage;
