import React from "react";

const teamMembers = [
  {
    name: "Michael Dean",
    title: "Office Manager",
    image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/team1-1-400x532.jpg",
  },
  {
    name: "Frank Burton",
    title: "Reservation Agent",
    image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/team2-1-400x532.jpg",
  },
  {
    name: "Mya Mullins",
    title: "Night Auditor",
    image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/team3-1-400x532.jpg",
  },
  {
    name: "Ralph Nguyen",
    title: "Guest Relations Officer",
    image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/team4-1-400x532.jpg",
  }, 
];

const ExpertTeam = () => {
  return (
    <div className="py-16 bg-white text-center">
      <h5 className="text-sm tracking-widest text-gray-500 uppercase mb-2">HOEXR HOTEL TEAM</h5>
      <h2 className="text-4xl font-serif mb-10">Expert Team Persons</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-20">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="border border-[#aa8453] p-4 hover:shadow-lg transition rounded-md"
          >
            <div className="border border-gray-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />
            </div>
            <h3 className="text-xl font-serif mt-4">{member.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertTeam;
