import { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNewsContext } from "../../context/NewsContext";
import { Button, Menu, MenuItem, Typography } from "@mui/material";

const MoreIcon = () => {
  const { clearMyFavourites } = useNewsContext();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ padding: "0", minWidth: "0" }}
      >
        <MoreHorizIcon sx={{ color: "black" }} />
      </Button>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem disableGutters sx={{ padding: 0 }}>
          <Button
            onClick={clearMyFavourites}
            variant="contained"
            disableElevation={true}
            sx={{
              maxHeight: "22px",
              padding: "13px",
              height: "100%",
              bgcolor: "#FD7575",
              textTransform: "none",
              "&:hover": {
                bgcolor: "#f88f8f",
              },
            }}
          >
            <Typography sx={{ fontSize: "11px", letterSpacing: "1px" }}>
              Clear All
            </Typography>
          </Button>
        </MenuItem>
      </Menu>
    </>
  );
};

export default MoreIcon;
