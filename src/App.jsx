import "./App.css";
import { NewsContextProvider } from "./context/NewsContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </NewsContextProvider>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
