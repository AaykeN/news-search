import { Divider, Grid } from "@mui/material";

// Components
import DisplayResults from "../DisplayResults/DisplayResults";
import MyFavouritePanel from "../MyFavouritesPanel/MyFavouritePanel";
import Newsletter from "../Newsletter/Newsletter";
import { useTheme } from "@mui/material/styles";

const Home = () => {
  const theme = useTheme();
  return (
    <>
      <Grid container columnSpacing={6}>
        <Grid item lg={9}>
          <DisplayResults />
        </Grid>
        <Grid
          item
          lg={3}
          sx={{
            display: "block",
            [theme.breakpoints.down("lg")]: {
              display: "none",
            },
          }}
        >
          <MyFavouritePanel style={{ overflowY: "scroll" }} />
          <Divider sx={{ margin: "18px 0 18px 0" }} />
          <Newsletter />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
