import {
  Button,
  AppBar,
  Avatar,
  Toolbar,
  ListItem,
  Container,
  TextField,
  CardMedia,
  IconButton,
  Typography,
  ListItemText,
  InputAdornment,
  ListItemAvatar,
  Box,
} from "@mui/material";
import "./Header.css";
import { useTheme } from "@mui/material/styles";
import logo from "../../images/logo2.png";
import logoMobile from "../../images/logoMobile.png";
import SearchIcon from "@mui/icons-material/Search";
import { useNewsContext } from "../../context/NewsContext";
import Searchbar from "../Searchbar/Searchbar";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Header = () => {
  const theme = useTheme();
  return (
    <AppBar className="header__AppBar" position="static">
      <Container maxWidth="xl">
        <Toolbar
          className="header__Toolbar"
          variant="regular"
          disableGutters={true}
        >
          <Link to="/">
            <Box display="flex" alignItems="center">
              <Box
                component="img"
                src={logo}
                alt="logo"
                sx={{
                  width: "100px",
                  height: "auto",
                  [theme.breakpoints.down("sm")]: {
                    display: "none",
                  },
                }}
              />
              <Box
                component="img"
                src={logoMobile}
                alt="logo"
                sx={{
                  width: "40px",
                  height: "auto",
                  display: "none",
                  [theme.breakpoints.down("sm")]: {
                    display: "flex",
                  },
                }}
              />
            </Box>
          </Link>

          <Box gap={3} display="flex" alignItems="center">
            <Searchbar displayLargeScreen="none" displaySmallScreen="block" />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                [theme.breakpoints.down("lg")]: {
                  display: "none",
                },
              }}
            >
              <Typography variant="body2" color="#252525">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </Typography>
            </Box>
            <Link
              to="/likes"
              style={{
                display: "flex",
              }}
            >
              <FavoriteBorderIcon sx={{ color: "black" }} />
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

{
  /* 
          <Box
            sx={{
              display: "block",
              [theme.breakpoints.down("lg")]: {
                display: "block",
              },
            }}
          >
            <form className="header__form" onSubmit={handleSubmitSearch}>
              <TextField
                placeholder="Search..."
                onChange={handleSetKeyword}
                className="header__textField"
                InputLabelProps={{
                  shrink: false,
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        type="submit"
                        onClick={handleSubmitSearch}
                        className="header__iconButton"
                        aria-label="search"
                      >
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                size="small"
              />
            </form>
          </Box> */
}
