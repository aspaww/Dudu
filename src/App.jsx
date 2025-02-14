// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/shop" element={<Layout><ShopPage /></Layout>} />
        <Route path="/product/:id" element={<Layout><ProductDetail /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
