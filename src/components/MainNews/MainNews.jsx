import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Typography, Card, Box, CardActionArea } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LikedIcon from "../NewsItem/LikedIcon";

const MainNews = ({ article, index }) => {
  const theme = useTheme();

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
          height: "550px",
          width: "100%",
          marginBottom: "32px",
          [theme.breakpoints.down("lg")]: {
            height: "500px",
          },
          [theme.breakpoints.down("sm")]: {
            height: "470px",
          },
        }}
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
                "linear-gradient(to top, rgba(0, 0, 0, 0.93), rgba(0, 0, 0, 0.018))",
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
              zIndex: 1,
              [theme.breakpoints.down("md")]: {
                width: "100%",
              },
            }}
          >
            <Typography
              variant="h4"
              marginBottom={1}
              sx={{
                fontWeight: "800",
                [theme.breakpoints.down("md")]: {
                  width: "100%",
                  fontSize: "1.8rem",
                },
              }}
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
            <Box
              display="flex"
              alignItems="center"
              gap={4}
              sx={{
                [theme.breakpoints.down("md")]: {
                  gap: "5px",
                },
              }}
            >
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
};

export default MainNews;
