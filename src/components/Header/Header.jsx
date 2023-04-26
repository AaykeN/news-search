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
} from "@mui/material";
import "./Header.css";
import logo from "../../images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { useNewsContext } from "../../context/NewsContext";

const Header = () => {
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
          <CardMedia
            component="img"
            sx={{ width: "115px" }}
            image={logo}
            alt="Paella dish"
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

          <Stack>
            <ListItem sx={{ padding: "0" }}>
              <ListItemAvatar sx={{ minWidth: "0" }}>
                <Avatar
                  src="https://cdn-icons-png.flaticon.com/512/186/186313.png"
                  alt="avatarcd "
                />
              </ListItemAvatar>
              <ListItemText
                className="header__listItemText"
                primary={
                  <Typography variant="subtitle2" color="text.primary">
                    Hey{" "}
                    {localStorageUserName.charAt(0).toUpperCase() +
                      localStorageUserName.slice(1)}
                  </Typography>
                }
                secondary={
                  <Button
                    className="header__listItemText-button"
                    onClick={handleLogout}
                  >
                    <Typography variant="caption" color="text.secondary">
                      Sign Out
                    </Typography>
                  </Button>
                }
              />
            </ListItem>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
