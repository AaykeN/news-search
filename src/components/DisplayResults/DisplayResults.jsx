import NewsItem from "../NewsItem/NewsItem";
import { useNewsContext } from "../../context/NewsContext";
import LinearProgress from "@mui/material/LinearProgress";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
  Grid,
  Typography,
  Container,
  Stack,
  CardMedia,
  Card,
  Box,
  CardActionArea,
} from "@mui/material";
import "./DisplayResults.css";
import OrangeButton from "../Button/OrangeButton";
import LikedIcon from "../NewsItem/LikedIcon";

const DisplayResults = () => {
  const { news, isLoading, setPageSize, keyWord } = useNewsContext();
  const handleLoadMore = () => {
    setPageSize((prevPageSize) => prevPageSize + 8);
  };

  const displayMainNews = news.slice(0, 1).map((article, index) => {
    return (
      <CardActionArea
        target="_blank"
        href={article.url}
        disableRipple={true}
        sx={{ zIndex: 1 }}
      >
        <Card
          sx={{
            objectFit: "cover",
            height: "550px", // adjust this value to your desired height
            width: "100%",
            marginBottom: "32px",
          }}
          key={index}
        >
          <Box
            sx={{
              position: "relative",
              height: "100%",
              "&:after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.018))",
              },
            }}
          >
            <Box
              onClick={(e) => e.stopPropagation()}
              sx={{
                position: "absolute",
                right: 10,
                top: 10,
                bgcolor: "white",
                borderRadius: "5px",
                zIndex: "2",
              }}
            >
              <LikedIcon article={article} />
            </Box>
            <Card
              component="img"
              src={article.urlToImage}
              alt={article.title}
              sx={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "90%",
                padding: "26px",
                color: "#fff",
                zIndex: 1, // add zIndex property to make the text box appear on top of the gradient background
              }}
            >
              <Typography
                variant="h4"
                marginBottom={1}
                sx={{ fontWeight: "800" }}
              >
                {article.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="#bfbebe"
                marginBottom={4}
                lineHeight="normal"
              >
                {article.description}
              </Typography>
              <Box display="flex" alignItems="center" gap={4}>
                <Box display="flex" alignItems="center" marginRight={2}>
                  <CalendarMonthIcon
                    fontSize="small"
                    sx={{ color: "#bfbebe", marginRight: "5px" }}
                  />
                  <Typography
                    lineHeight="normal"
                    variant="subtitle2"
                    color="#bfbebe"
                  >
                    {new Date(article.publishedAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <PersonIcon
                    fontSize="small"
                    sx={{ color: "#bfbebe", marginRight: "5px" }}
                  />
                  <Typography
                    lineHeight="normal"
                    variant="subtitle2"
                    color="#bfbebe"
                  >
                    By {article.author}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Card>
      </CardActionArea>
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
        Latest News
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
