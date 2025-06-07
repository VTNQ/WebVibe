import AutoScrollBanner from "@/components/Moderno/HomePage/AutoScrollBanerr";
import BigSaleComponent from "@/components/Moderno/HomePage/BigSaleComponent";
import HeroSlider from "@/components/Moderno/HomePage/HeroSlider";
import NavBar from "@/components/Moderno/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const FashionPage = () => {
  const location = useLocation();

  // Kiểm tra nếu path là chính xác "/fashion"
  const isFashionRoot = location.pathname === "/fashion";

  return (
    <>
      <NavBar />
      {isFashionRoot && (
        <>
          <HeroSlider />
          <AutoScrollBanner />
          <BigSaleComponent/>
        </>
      )}

      <Outlet />
    </>
  );
};

export default FashionPage;
