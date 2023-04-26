import NewsItem from "../NewsItem/NewsItem";
import { useNewsContext } from "../../context/NewsContext";
import LinearProgress from "@mui/material/LinearProgress";
import { Grid, Typography, Container, Stack, Box } from "@mui/material";
import "./DisplayResults.css";
import OrangeButton from "../Button/OrangeButton";
import MainNews from "../MainNews/MainNews";

const DisplayResults = () => {
  const { news, isLoading, setPageSize, keyWord } = useNewsContext();
  const handleLoadMore = () => {
    setPageSize((prevPageSize) => prevPageSize + 8);
  };

  const displayMainNews = news.slice(0, 1).map((article, index) => {
    return (
      <MainNews key={`mainNews-${index}`} article={article} index={index} />
    );
  });

  const displayNews = news.slice(1).map((article, index) => {
    return <NewsItem key={index} article={article} />;
  });

  return (
    <>
      <Typography
        sx={{ fontWeight: "600", marginBottom: "32px", fontSize: "18px" }}
      >
        {keyWord === "a"
          ? "Latest News"
          : keyWord.charAt(0).toUpperCase() + keyWord.slice(1)}
      </Typography>

      {displayMainNews}

      <Grid container columnSpacing={3} rowSpacing={3}>
        {news.length === 0 ? (
          <Container
            sx={{
              textAlign: "center",
              minHeight: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Stack sx={{ display: isLoading ? "block" : "none" }}>
              <Typography color="text.primary">No Result Found</Typography>
              <Typography color="text.secondary">
                Try different or more general keywords
              </Typography>
            </Stack>
          </Container>
        ) : (
          displayNews
        )}
      </Grid>

      {isLoading ? (
        <Box className="displayResults__box">
          <OrangeButton
            text={"Load More"}
            onClick={handleLoadMore}
            sx={{ display: news.length === 0 ? "none" : "block" }}
          />
        </Box>
      ) : (
        <LinearProgress className="displayResults__linearProgress" />
      )}
    </>
  );
};

export default DisplayResults;

// const displayMainNews = news.slice(0, 1).map((article, index) => {
//   return (
//     <Card
//       sx={{
//         objectFit: "cover",
//         geight: "450px",
//         width: "100%",
//         marginBottom: "32px",
//       }}
//       component="img"
//       src={article.urlToImage}
//       key={index}
//       alt={article.title}
//     />
//   );
// });
