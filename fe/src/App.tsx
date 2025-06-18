import * as React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepages";
import ProductPage from "./pages/Productpage";
import AboutUsPage from "./pages/AboutUsPages";
import ContactPage from "./pages/ContactPage";
import FashionPage from "./pages/Moderno/FashionPages";
import ProductPageModerno from "./pages/Moderno/ProductPages";
import ProductDetail from "./pages/Moderno/ProductDetail";
import BlogPage from "./pages/Moderno/BlogPages";
import BlogDetailPage from "./pages/Moderno/BlogDetailPage";
import HotelerRoom from "./pages/Hoteler/HotelerRoom";
import RoomDetail from "./pages/Hoteler/HotelerRoomDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutUs" element={<AboutUsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/product" element={<ProductPage />} />

      {/* Nested route dưới /Morderno */}
      <Route path="/Morderno" element={<FashionPage />}>
        <Route path="product" element={<ProductPageModerno />} />
        <Route path="blog/:id" element={<BlogDetailPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="product/:id" element={<ProductDetail />} />
      </Route>

      {/* Hoteler routes */}
      <Route path="/hoteler/rooms" element={<HotelerRoom />} />
      <Route path="/hoteler/rooms/details" element={<RoomDetail />} />
    </Routes>
  );
}

export default App;
