import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// pages
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import CountriesList from "./pages/CountriesList";

const App = () => {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/countries" element={<CountriesList />} exact />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Layout>
  );
};

export default App;
