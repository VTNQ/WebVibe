import { useState } from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";

const HeroBookingSection = () => {
  const [checkIn, setCheckIn] = useState("2025-06-18");
  const [checkOut, setCheckOut] = useState("2025-06-19");
  const [guests, setGuests] = useState({ rooms: 1, adults: 1, children: 0 });

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/slider-3.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0" style={{
  background: 'linear-gradient(360deg, #00000000 0%, #000000 100%)'
}}></div>
      {/* Title */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">Book Your Dream Hotel<br />With Hoteler</h1>
      </div>

      {/* Booking Box */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 w-full max-w-6xl px-4">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-4 text-black">
          {/* Check In */}
          <div className="flex items-center gap-3 w-full md:w-1/4 border rounded-md p-3">
            <FaCalendarAlt className="text-gray-600" />
            <div className="w-full">
              <label className="text-sm text-gray-500">Check In</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="block w-full text-sm mt-1 outline-none"
              />
            </div>
          </div>

          {/* Check Out */}
          <div className="flex items-center gap-3 w-full md:w-1/4 border rounded-md p-3">
            <FaCalendarAlt className="text-gray-600" />
            <div className="w-full">
              <label className="text-sm text-gray-500">Check Out</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="block w-full text-sm mt-1 outline-none"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="flex items-center gap-3 w-full md:w-1/4 border rounded-md p-3">
            <FaUser className="text-gray-600" />
            <div>
              <label className="text-sm text-gray-500">Guests</label>
              <p className="text-sm mt-1">
                {guests.rooms} Room, {guests.adults} Adult, {guests.children} Child
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="w-full md:w-auto">
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition w-full md:w-auto">
              Check Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBookingSection;
