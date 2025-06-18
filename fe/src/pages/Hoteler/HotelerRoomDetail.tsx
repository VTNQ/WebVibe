import React, { useEffect } from "react";
import RoomSuggestion from "../../components/Hoteler/RoomSuggestion";
import {
  FaBed,
  FaWifi,
  FaUserFriends,
} from "react-icons/fa";
import { MdOutlineBathroom } from "react-icons/md";
import { TbRulerMeasure } from "react-icons/tb";
import { LuSnowflake } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";

export default function RoomDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { image, title, price } = location.state || {};

  useEffect(() => {
    if (!title || !image || !price) {
      navigate("/hoteler/rooms");
    }
  }, [title, image, price, navigate]);

  return (
    <div className="bg-[#f9f6f1] min-h-screen">
      {/* Hero Image full width */}
      <div className="w-full overflow-hidden">
        <img
          src="https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/bg6.jpg"
          alt="Room facility"
          className="w-full max-h-[600px] object-cover object-center"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-12">
        {/* Left content */}
        <div className="lg:col-span-2">
          <h2 className="text-4xl font-serif font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">40-inch LED TV / Mini bar / Non-smoking / USB charging</p>

          {/* Features */}
          <div className="flex flex-wrap gap-6 text-gray-700 mb-12">
            <div className="flex items-center gap-2">
              <TbRulerMeasure className="text-[#b68c5a] text-lg" />
              <span>600 m<sup>2</sup></span>
            </div>
            <div className="flex items-center gap-2">
              <FaUserFriends className="text-[#b68c5a] text-lg" />
              <span>2 Guests</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBed className="text-[#b68c5a] text-lg" />
              <span>2 Bed</span>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineBathroom className="text-[#b68c5a] text-lg" />
              <span>2 Bathroom</span>
            </div>
            <div className="flex items-center gap-2">
              <FaWifi className="text-[#b68c5a] text-lg" />
              <span>Wifi Available</span>
            </div>
            <div className="flex items-center gap-2">
              <LuSnowflake className="text-[#b68c5a] text-lg" />
              <span>Air Conditioning</span>
            </div>
          </div>

          {/* Additional image */}
          <div className="mb-8">
            <img
                src={image}
                alt={title}
                className="w-full max-h-[600px] object-cover object-center"
            />
          </div>

          {/* Description */}
          <div className="mb-10">
            <h3 className="text-2xl font-serif font-semibold mb-4">Description of the Room</h3>
            <p className="text-gray-600 leading-relaxed">
              Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar
              tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus
              interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed
              vitae leo vitae nisl pellentesque semper.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-6 bg-white border border-[#e2d3c2] p-6 rounded-xl">
              <div>
                <p className="text-sm text-gray-500">Room Size</p>
                <p className="text-lg font-serif">600Sq</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Rooms Bed</p>
                <p className="text-lg font-serif">2 Single Bed</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Occupancy</p>
                <p className="text-lg font-serif">Three Persons</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">View</p>
                <p className="text-lg font-serif">Sea View</p>
              </div>
            </div>
          </div>

          {/* Facility icons */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6">Facility of the Room</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "Air Conditioner",
                "Parking",
                "Swimming Pool",
                "Security",
                "Gymnasium",
                "Playground",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-14 h-14 border border-[#e2d3c2] rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <span className="text-gray-700 font-serif">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="border border-[#e2d3c2] rounded-xl p-6 h-fit">
          <h3 className="text-xl font-serif font-semibold mb-6">
            Reserve: <span className="text-[#b68c5a] ml-2 font-normal">From ${price}/night</span>
          </h3>

          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-sm text-gray-600">Check In</label>
              <input type="date" className="w-full border rounded px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Check Out</label>
              <input type="date" className="w-full border rounded px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Rooms</label>
              <select className="w-full border rounded px-4 py-2">
                <option>1 Room</option>
              </select>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm text-gray-600">Adults</label>
                <select className="w-full border rounded px-4 py-2">
                  <option>1</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm text-gray-600">Children</label>
                <select className="w-full border rounded px-4 py-2">
                  <option>0</option>
                </select>
              </div>
            </div>

            <div className="mt-4 border-t pt-4">
              <h4 className="text-lg font-serif font-semibold mb-2">Extra Services</h4>
              {[
                "Laundry",
                "Car Rental",
                "Breakfast",
                "Sea View",
                "Wifi",
              ].map((item, idx) => (
                <label key={idx} className="flex justify-between items-center text-sm mb-2">
                  <span>{item}</span>
                  <span className="text-gray-500">$10 / Night</span>
                </label>
              ))}
            </div>

            <div className="mt-6">
              <div className="flex justify-between mb-2 text-sm">
                <span>Total Base Price</span>
                <span>${price}</span>
              </div>
              <div className="flex justify-between mb-4 text-lg font-semibold">
                <span>Total</span>
                <span>${price}</span>
              </div>
              <button className="w-full bg-[#b68c5a] text-white py-3 uppercase font-semibold hover:bg-[#a07746] transition">
                Book your stay now
              </button>
              <RoomSuggestion />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
