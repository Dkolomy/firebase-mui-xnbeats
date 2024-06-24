import { Navigate, Route, Routes } from "react-router-dom";
import { Box, Container } from "@mui/material";
//import { Provider } from "react-redux";
//import { store } from "./state/store";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact";
import Home from "./components/home";
import Login from "./components/login";


const App = () => {
  return (
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
  );
};

export default App;
