import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-40 bg-gradient-to-r from-indigo-500 to-purple-600 text-white mt-10">
      <div className="p-6 flex flex-col md:flex-row items-center justify-between">
        <div className="w-1/2">Routes left</div>
        <div className="w-1/3">A subscription modal</div>
      </div>
    </div>
  );
};

export default Footer;
