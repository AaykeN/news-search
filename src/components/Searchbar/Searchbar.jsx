import { TextField, IconButton, InputAdornment, Box } from "@mui/material";
import "./Searchbar.css";
import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useNewsContext } from "../../context/NewsContext";
import { red } from "@mui/material/colors";

const Searchbar = ({ displaySmallScreen, displayLargeScreen }) => {
  const theme = useTheme();

  const { handleSetKeyword, handleSubmitSearch } = useNewsContext();
  return (
    <Box
      sx={{
        display: displayLargeScreen,
        [theme.breakpoints.down("lg")]: {
          display: displaySmallScreen,
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
    </Box>
  );
};

export default Searchbar;
