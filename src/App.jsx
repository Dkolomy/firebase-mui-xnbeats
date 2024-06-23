import { Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { Box, Container } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact";
import Home from "./components/home";
import Login from "./components/login";

import ReduxStore from "./store";

const App = () => {
  return (
    <Provider store={ReduxStore}>
      <Container maxWidth="lg">
        <Header />
        <Box
          sx={{ display: "flex", flexDirection: "column", minHeight: "87vh" }}
        >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </Box>
      </Container>
    </Provider>
  );
};

export default App;
