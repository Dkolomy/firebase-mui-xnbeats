import { Navigate, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <hr/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <hr/>
      <Copyright />
    </Container>
  );
};

const Header = () => {
  return <span>Header Header Header Header</span>;
};

const Home = () => {
  return <span>Home</span>;
};

const Dashboard = () => {
  return <span>Dashboard</span>;
};

const Copyright = () => {
  return <span>Copyright</span>;
};
export default App;
