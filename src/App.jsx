import "./App.css";
import { NewsContextProvider } from "./context/NewsContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header/Header";
import { Container } from "@mui/material";
import DisplayChips from "./components/DisplayChips/DisplayChips";
import LikesPage from "./components/Likes/LikesPage";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto Flex", '"Helvetica Neue"', "Arial", "sans-serif"].join(
      ","
    ),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <NewsContextProvider>
            <Header />
            <Container
              maxWidth="xl"
              sx={{ marginTop: "20px", marginBottom: "40px" }}
            >
              <DisplayChips />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/likes" element={<LikesPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Container>
          </NewsContextProvider>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
