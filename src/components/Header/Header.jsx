import {
  Stack,
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
import logo from "../../images/logo2.png";
import SearchIcon from "@mui/icons-material/Search";
import { useNewsContext } from "../../context/NewsContext";

const Header = () => {
  const { handleSetKeyword, handleSubmitSearch, handleLogout } =
    useNewsContext();

  const localStorageUserName = localStorage.getItem("userName");
  return (
    <AppBar className="header__AppBar" position="sticky">
      <Container maxWidth="xl">
        <Toolbar
          className="header__Toolbar"
          variant="regular"
          disableGutters={true}
        >
          <Box
            src={logo}
            component="img"
            alt="logo"
            sx={{ width: "100px", height: "auto" }}
          />

          <form className="header__form" onSubmit={handleSubmitSearch}>
            <TextField
              placeholder="Search..."
              onChange={handleSetKeyword}
              variant="outlined"
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
          <Box>
            <Typography variant="body2" color="black">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
