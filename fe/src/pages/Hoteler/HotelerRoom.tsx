import RoomCard from "../../components/Hoteler/RoomCard";

export default function HotelerRoom() {
  const rooms = [
    {
      title: "Double Room",
      price: 299,
      image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/room-1-600x800.jpg"
    },
    {
      title: "Tripple Room",
      price: 399,
      image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/room-2-600x800.jpg"
    },
    {
      title: "Deluxe Room",
      price: 499,
      image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/room-3-600x800.jpg"
    },
    {
      title: "Junior Suite",
      price: 599,
      image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/room-5-600x800.jpg"
    },
    {
      title: "Family Room",
      price: 699,
      image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/room-6-600x800.jpg"
    }
  ];

  return (
    <div>
      {/* Banner */}
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[400px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/page-title-bg.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-semibold">Rooms</h1>
          <div className="mt-4 text-sm flex justify-center items-center gap-2">
            <span className="text-white/70">Home</span>
            <span className="text-white font-semibold">› Rooms</span>
          </div>
        </div>
      </div>

      {/* Room List */}
      <section className="py-16 px-6 bg-[#f9f6f1]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-2 text-sm tracking-[0.3em] text-gray-700 uppercase">
                <span className="text-[#b68c5a] text-xl">~</span>
                <span>Hoteler Luxury Rooms</span>
                <span className="text-[#b68c5a] text-xl">~</span>
                </div>
                <h2 className="text-4xl font-serif font-semibold mt-3">Luxury Rooms & Suites</h2>
                </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4">
              <RoomCard {...rooms[0]} />
            </div>
            <div className="md:col-span-5">
              <RoomCard {...rooms[1]} />
            </div>
            <div className="md:col-span-3">
              <RoomCard {...rooms[2]} />
            </div>
            <div className="md:col-span-6">
              <RoomCard {...rooms[3]} />
            </div>
            <div className="md:col-span-6">
              <RoomCard {...rooms[4]} />
            </div>
          </div>
        </div>
      </section>

      {/* Call Button */}
      <a
        href="tel:0368285760"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg"
        title="Gọi ngay"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h1.586a1 1 0 01.707.293l2.914 2.914a1 1 0 01.293.707V9a1 1 0 01-1 1h-1.586a1 1 0 00-.707.293l-2.914 2.914a1 1 0 00-.293.707V19a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2z"
          />
        </svg>
      </a>
    </div>
  );
}
