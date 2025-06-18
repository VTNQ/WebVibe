import React from "react";

const menuItems = [
  {
    image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/pricing1-1.png",
    title: "Pasta With Fish",
    desc: "Lorem Ipsum is that it smt",
    price: "$39",
    label: "STARTER",
  },
  {
    image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/pricing1-3-1.png",
    title: "Fresh Meat",
    desc: "Lorem Ipsum is that it smt",
    price: "$26",
    label: "NEW",
  },
  {
    image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/pricing1-7.png",
    title: "Spaghetti",
    desc: "Lorem Ipsum is that it smt",
    price: "$37",
    label: "NEW",
  },
  {
    image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/pricing1-5.png",
    title: "Vegetarian Soup",
    desc: "Lorem Ipsum is that it smt",
    price: "$42",
    label: "GLUTAN FREE",
  },
];

const rightItems = [
  {
    image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/pricing1-2-1.png",
    title: "Noodles",
    desc: "Lorem Ipsum is that it smt",
    price: "$16+",
    label: "NEW",
  },
  {
    image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/pricing1-4.png",
    title: "Chicken",
    desc: "Lorem Ipsum is that it smt",
    price: "$19",
    label: "VEGAN",
  },
  {
    image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/pricing1-6.png",
    title: "Vegetarian Fried",
    desc: "Lorem Ipsum is that it smt",
    price: "$34",
    label: "NEW",
  },
  {
    image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/pricing1-8.png",
    title: "Salmon Pasta",
    desc: "Lorem Ipsum is that it smt",
    price: "$71",
    label: "FISH",
  },
];

const MenuSection = () => {
  const renderMenu = (items) =>
    items.map((item, idx) => (
      <div key={idx} className="flex items-center gap-4 py-4 border-b border-dotted border-gray-300">
        <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
        <div className="flex-1">
          <p className="text-xs text-gray-500">{item.desc}</p>
          <p className="font-serif text-lg">{item.title}</p>
        </div>
        <div className="text-right">
          <span className="text-[10px] border border-gray-400 px-2 py-0.5 text-gray-700 rounded-sm mr-2">{item.label}</span>
          <p className="text-lg font-semibold">{item.price}</p>
        </div>
      </div>
    ));

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-widest text-gray-400">Hoteler Best Menus</p>
        <h2 className="text-4xl font-serif">Unique Specialty Foods</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>{renderMenu(menuItems)}</div>
        <div>{renderMenu(rightItems)}</div>
      </div>
    </div>
  );
};

export default MenuSection;
