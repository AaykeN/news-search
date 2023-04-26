import { Button } from "@mui/material";
import { useNewsContext } from "../../context/NewsContext";

const OrangeButton = ({ text, onClick }) => {
  const { news, isLoginInProgress } = useNewsContext();

  let sx = {
    margin: "16px 0",
    backgroundColor: "#eda232",
    "&:hover": {
      backgroundColor: "#f2af4c",
    },
  };

  if (text === "Sign In") {
    sx.display = isLoginInProgress ? "none " : "block";
  } else if (text === "Load More") {
    sx.display = news.length === 0 ? "none" : "block";
  }

  return (
    <>
      <Button
        sx={sx}
        variant="contained"
        onClick={onClick}
        disableElevation={true}
      >
        {text}
      </Button>
    </>
  );
};

export default OrangeButton;
