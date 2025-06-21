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
import HomePageHotel from "./pages/Hoteler/HomePage";
import HotelerRoom from "./pages/Hoteler/HotelerRoom";
import RoomDetail from "./pages/Hoteler/HotelerRoomDetail";
import HotelerContactPage from "./pages/Hoteler/HotelerContactPage";
import HotelerAboutPage from "./pages/Hoteler/HotelerAboutPage";
import HotelerService from "./pages/Hoteler/ServicePage/HotelerService.tsx";
import HotelerBroadbandInternetService from "./pages/Hoteler/ServicePage/BroadbandInternetService.tsx";
import HotelerNews from "./pages/Hoteler/NewsPage/HotelerNews.tsx";
import BenefitPage from "./pages/Hoteler/NewsPage/BenefitPage.tsx";

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
    
      <Route path="/Hoteler" element={<HomePageHotel/>}>
          <Route path="rooms" element={<HotelerRoom/>}/>
          <Route path="rooms/details" element={<RoomDetail/>}/>
          <Route path="contact" element={<HotelerContactPage/>}/>
          <Route path="about" element={<HotelerAboutPage />} />
          <Route path="service" element={<HotelerService/>}/>
          <Route path="Broadband-Internet" element={<HotelerBroadbandInternetService/>} />
          <Route path="news" element={<HotelerNews/>}/>
          <Route path="Benefit-from-a-15-discount-reservations" element={<BenefitPage/>}/>
      </Route>
      {/* Hoteler routes */}
     
    </Routes>
  );
}

export default App;
