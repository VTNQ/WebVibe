import React from "react";
import { FaBath, FaBed, FaRulerCombined, FaSnowflake, FaUserFriends, FaWifi } from "react-icons/fa";
const rooms = [
    {
        name: "Royal Suite",
        price: "$979 / Night",
        image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/room-1.jpg",
        size: "600 m²",
        guests: "2 Guests",
        bed: "2 Bed",
        bath: "2 Bathroom",
        wifi: true,
        ac: true,
    },
    {
        name: "Premier Room",
        price: "$789 / Night",
        image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/room-2.jpg",
        size: "700 m²",
        guests: "2 Guests",
        bed: "2 Bed",
        bath: "2 Bathroom",
        wifi: true,
        ac: false,
    },
    {
        name: "Skyline Suite",
        price: "$939 / Night",
        image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/room-3.jpg",
        size: "900 m²",
        guests: "2 Guests",
        bed: "2 Bed",
        bath: "2 Bathroom",
        wifi: true,
        ac: false,
    },
]
const HotelRoomList = () => {
    return (
        <div className="bg-[#F8F5F0] text-center py-20 px-4">
            <div className="mb-12">
                <p className="text-xs tracking-widest text-gray-500 uppercase">
                    Customer Services
                </p>
                <h2 className="text-3xl font-serif font-semibold mt-2">
                    Book your stay and relax in <br /> luxury hotel
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {rooms.map((room, index) => (
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                        <img src={room.image} alt={room.name} className="w-full h-60 object-cover" />
                        <div className="p-6 text-left">
                            <h3 className="text-xl font-serif font-semibold mb-1">{room.name}</h3>
                            <p className="text-[#b08968] mb-4 font-medium">{room.price}</p>
                            <hr className="mb-4 border-gray-200" />

                            <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <FaRulerCombined className="text-lg text-gray-500" />
                                    <span>{room.size}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaUserFriends className="text-lg text-gray-500" />
                                    <span>{room.guests}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaBed className="text-lg text-gray-500" />
                                    <span>{room.bed}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaBath className="text-lg text-gray-500" />
                                    <span>{room.bath}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaWifi className="text-lg text-gray-500" />
                                    <span>Wifi Available</span>
                                </div>
                                {room.ac && (
                                    <div className="flex items-center gap-2">
                                        <FaSnowflake className="text-lg text-gray-500" />
                                        <span>Air Conditioning</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                ))}
            </div>
            <div className="mt-20 max-w-2xl mx-auto text-gray-700 text-sm italic">
                <p className="text-4xl text-gray-400 mb-4">“</p>
                <p>
                    Staying at Hoteler was an unforgettable experience. The staff went
                    above and beyond to ensure our comfort and satisfaction. The room was
                    immaculate, with breath-taking views.
                </p>
                <p className="mt-4 font-semibold">John Smith</p>
                <p className="text-xs text-gray-500">Front Desk Manager</p>
                <div className="flex justify-center items-end gap-4 mt-6">
                    {/* Ảnh bên trái */}
                    <img
                        src="https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/testimonials3-150x150.jpg"
                        className="w-16 h-16 rounded-full object-cover transition-transform duration-300"
                    />

                    {/* Ảnh ở giữa (nâng lên và lớn hơn) */}
                    <img
                        src="https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/testimonials1-150x150.jpg"
                        className="w-20 h-20 rounded-full object-cover ring-2 ring-white shadow-lg z-10 transform -translate-y-2"
                    />

                    {/* Ảnh bên phải */}
                    <img
                        src="https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/testimonials2-150x150.jpg"
                        className="w-16 h-16 rounded-full object-cover transition-transform duration-300"
                    />
                </div>

            </div>
        </div>
    )
}
export default HotelRoomList;