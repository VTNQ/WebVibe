// RoomSuggestion.tsx
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import RoomCard from "./RoomCard"; // Cập nhật đường dẫn nếu cần

const suggestions = [
  {
    title: "Double Room",
    price: 299,
    image:
      "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/room-1-600x800.jpg",
  },
  {
    title: "Tripple Room",
    price: 399,
    image:
      "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/room-2-600x800.jpg",
  },
  {
    title: "Deluxe Room",
    price: 499,
    image:
      "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/room-3-600x800.jpg",
  },
  {
    title: "Family Room",
    price: 699,
    image:
      "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/room-6-600x800.jpg",
  },
];

export default function RoomSuggestion() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % suggestions.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % suggestions.length);
  };

  return (
    <div className="mt-8 relative">
      <h4 className="text-lg font-serif font-semibold mb-4">
        Other Room Suggestion
      </h4>

      <div className="relative">
        {/* Nốt Prev */}
        <button type="button"
          onClick={handlePrev}
          className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10 hover:bg-gray-100"
        >
          <FaChevronLeft className="text-gray-600" />
        </button>

        {/* Room Card */}
        <div className="cursor-pointer">
          <RoomCard {...suggestions[index]} />
        </div>

        {/* Nốt Next */}
        <button type="button"
          onClick={handleNext}
          className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10 hover:bg-gray-100"
        >
          <FaChevronRight className="text-gray-600" />
        </button>
      </div>
    </div>
  );
}
