import About from "@/components/Hoteler/Home/About";
import ColorVideoPanel from "@/components/Hoteler/Home/ColorVideoPanel";
import ExpertTeam from "@/components/Hoteler/Home/ExpertTeam";
import Footer from "@/components/Hoteler/Home/Footer";
import HeroBookingSection from "@/components/Hoteler/Home/HeroBookingSection";
import HotelNavbar from "@/components/Hoteler/Home/HotelNavbar";
import HotelRoomList from "@/components/Hoteler/Home/HotelRoomList";
import MenuSection from "@/components/Hoteler/Home/MenuSection";
import OutdoorActivitiesSection from "@/components/Hoteler/Home/OutdoorActivitiesSection";
import SpecialOffers from "@/components/Hoteler/Home/SpecialOffers";
import { Outlet, useLocation } from "react-router-dom";

const HomePage = () => {
    const location = useLocation();
    const isFashionRoot = location.pathname === "/Hoteler";
    return (
        <>
            <HotelNavbar />
            {isFashionRoot && (
                <>
                    <HeroBookingSection />
                    <SpecialOffers />
                    <OutdoorActivitiesSection />
                    <HotelRoomList />
                    <MenuSection />
                    <ColorVideoPanel />
                    <ExpertTeam />
                    <About />
                </>
            )}
            <Outlet />
            <Footer />
        </>
    )
}
export default HomePage;