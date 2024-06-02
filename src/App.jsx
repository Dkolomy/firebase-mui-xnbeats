import { Navigate, Route, Routes } from "react-router-dom";
import { Box, Container} from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";

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
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </Box>
    </Container>
  );
};

const Home = () => {
  return <span>Home</span>;
};

const Dashboard = () => {
  return <span>Dashboard</span>;
};

const Contact = () => {
  return <span>Contact</span>;
};

const Copyright = () => {
  return <span>Copyright</span>;
};
export default App;
