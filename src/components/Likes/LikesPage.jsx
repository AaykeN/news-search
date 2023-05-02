import { Typography, Grid, Box } from "@mui/material";
import { useNewsContext } from "../../context/NewsContext";
import NewsItem from "../NewsItem/NewsItem";
import MoreIcon from "../MyFavouritesPanel/MoreIcon";

const LikesPage = () => {
  const { myFavourites } = useNewsContext();
  const myFavouritesAmount = myFavourites.length;
  const displayNews = myFavourites.map((article, index) => {
    return <NewsItem key={index} article={article} />;
  });

  return (
    <>
      <Box className="myFavouritePanel__box" sx={{ marginBottom: "32px" }}>
        <Typography sx={{ fontWeight: "600", fontSize: "18px" }}>
          Your Favourites ({myFavouritesAmount})
        </Typography>
        <MoreIcon />
      </Box>
      {myFavouritesAmount === 0 ? (
        <Typography color="text.secondary" sx={{ textAlign: "center" }}>
          Nothing here yet
        </Typography>
      ) : (
        <>
          <Grid container columnSpacing={6} rowSpacing={3}>
            {displayNews}
          </Grid>
        </>
      )}
    </>
  );
};

export default LikesPage;
