import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Typography, Card, Box, CardActionArea } from "@mui/material";
import React from "react";
import LikedIcon from "../NewsItem/LikedIcon";

const MainNews = ({ article, index }) => {
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
};

export default MainNews;
