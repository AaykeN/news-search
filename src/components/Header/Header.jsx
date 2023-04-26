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
import SearchIcon from "@mui/icons-material/Search";
import { useNewsContext } from "../../context/NewsContext";
import Searchbar from "../Searchbar/Searchbar";

const Header = () => {
  const theme = useTheme();

  const { handleSetKeyword, handleSubmitSearch, handleLogout } =
    useNewsContext();

  const localStorageUserName = localStorage.getItem("userName");
  return (
    <AppBar className="header__AppBar" position="static">
      <Container maxWidth="xl">
        <Toolbar
          className="header__Toolbar"
          variant="regular"
          disableGutters={true}
        >
          <Box display="flex" alignItems="center" gap={3}>
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{ width: "100px", height: "auto" }}
            />
          </Box>

          <Box
            sx={{
              display: "block",
              [theme.breakpoints.down("lg")]: {
                display: "none",
              },
            }}
          >
            <Typography variant="body2" color="black">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </Typography>
          </Box>
          {/* 
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
          </Box> */}
          <Searchbar displayLargeScreen="none" displaySmallScreen="block" />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
