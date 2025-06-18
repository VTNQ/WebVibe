import { FaUserFriends, FaBed, FaWifi } from "react-icons/fa";
import { MdOutlineBathroom } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function RoomCard({ image, title, price }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/hoteler/rooms/details", {
      state: { image, title, price },
    });
  };

  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md bg-[#f9f6f1] transition-all duration-700">
      {/* Ảnh phòng */}
      <img
        src={image}
        alt={title}
        className="w-full h-[300px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Overlay mờ nhẹ */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-700" />

      {/* Luôn hiện title/price */}
      <div className="absolute bottom-4 left-4 z-20 text-white transition-all duration-700 group-hover:opacity-0">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm">${price} / Night</p>
      </div>

      {/* Hover: show thêm thông tin */}
      <div className="absolute bottom-[-120px] left-0 w-full px-4 pb-4 z-30 opacity-0 group-hover:bottom-4 group-hover:opacity-100 transition-all duration-700 ease-out">
        <div className="text-white mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm">${price} / Night</p>
        </div>

        <button
          onClick={handleBooking}
          className="w-full mb-3 py-2 border border-white text-white text-sm uppercase font-medium hover:bg-white hover:text-black transition"
        >
          Book Now
        </button>

        <div className="flex justify-start gap-4 text-white text-xl">
          <FaUserFriends title="Guests" />
          <FaBed title="Bed" />
          <MdOutlineBathroom title="Bathroom" />
          <FaWifi title="Wi-Fi" />
        </div>
      </div>
    </div>
  );
}
