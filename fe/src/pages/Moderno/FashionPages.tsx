import AutoScrollBanner from "@/components/Moderno/HomePage/AutoScrollBanerr";
import BigSaleComponent from "@/components/Moderno/HomePage/BigSaleComponent";
import CategoryGrid from "@/components/Moderno/HomePage/CategoryGrid";
import FooterFashion from "@/components/Moderno/HomePage/FooterFashion";
import HeroSlider from "@/components/Moderno/HomePage/HeroSlider";
import MissionStatement from "@/components/Moderno/HomePage/MissionStatement";
import ReviewSlider from "@/components/Moderno/HomePage/ReviewSlider";
import SummerDiscount from "@/components/Moderno/HomePage/SummerDiscount ";
import NavBar from "@/components/Moderno/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const FashionPage = () => {
  const location = useLocation();

  // Kiểm tra nếu path là chính xác "/fashion"
  const isFashionRoot = location.pathname === "/Morderno";

  return (
    <>
      <NavBar />
      {isFashionRoot && (
        <>
          <HeroSlider />
          <AutoScrollBanner />
          <BigSaleComponent/>
          <SummerDiscount/>
          <MissionStatement/>
          <CategoryGrid/>
          <ReviewSlider/>
          <AutoScrollBanner />
      
        </>
      )}

      <Outlet />
      <FooterFashion/>
    </>
  );
};

export default FashionPage;
