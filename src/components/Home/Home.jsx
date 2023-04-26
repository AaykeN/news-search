import { Container, Grid } from "@mui/material";

// Components
import Header from "../Header/Header";
import DisplayResults from "../DisplayResults/DisplayResults";
import MyFavouritePanel from "../MyFavouritesPanel/MyFavouritePanel";
import { useNewsContext } from "../../context/NewsContext";
import { Navigate } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <Container maxWidth="xl" sx={{ marginTop: "20px" }}>
        <Grid container columnSpacing={6}>
          <Grid item lg={9}>
            <DisplayResults />
          </Grid>
          <Grid item lg={3} sm={6}>
            <MyFavouritePanel style={{ overflowY: "scroll" }} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
