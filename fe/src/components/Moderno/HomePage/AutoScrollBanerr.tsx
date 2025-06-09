import React from 'react';

const AutoScrollBanner = () => {
  const items = [
    "HIGH QUALITY COTTON",
    "FREE DELIVERY",
    "MONEY BACK GUARANTEE",
    "24/7 SUPPORT"
  ];

  const renderItems = () =>
    items.map((item, index) => (
      <span key={index} className="mx-6 font-semibold whitespace-nowrap">
        {item} ・
      </span>
    ));

  return (
    <div className="overflow-hidden border-t border-b border-black w-full font-manrope mt-[-1vh]">
      <div className="flex w-max animate-marquee p-5">
        {renderItems()}
        {renderItems()}
        {renderItems()}
        {renderItems()}
        {renderItems()}
      </div>
    </div>
  );
};

export default AutoScrollBanner;
