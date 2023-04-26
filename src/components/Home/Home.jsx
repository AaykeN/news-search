import { Container, Divider, Grid } from "@mui/material";

// Components
import Header from "../Header/Header";
import DisplayResults from "../DisplayResults/DisplayResults";
import MyFavouritePanel from "../MyFavouritesPanel/MyFavouritePanel";
import { useNewsContext } from "../../context/NewsContext";
import { Navigate } from "react-router-dom";
import DisplayChips from "../DisplayChips/DisplayChips";
import Newsletter from "../Newsletter/Newsletter";

const Home = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ marginTop: "20px" }}>
        <DisplayChips />
        <Divider sx={{ margin: "18px 0 18px 0" }} />

        <Grid container columnSpacing={6}>
          <Grid item lg={9}>
            <DisplayResults />
          </Grid>
          <Grid item lg={3} sm={6}>
            <MyFavouritePanel style={{ overflowY: "scroll" }} />
            <Divider sx={{ margin: "18px 0 18px 0" }} />
            <Newsletter />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
