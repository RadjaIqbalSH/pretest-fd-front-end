import React from "react";

export const NavLink = () => {
  return (
    <div className="w-full h-16 md:flex border-2 border-y-gray-200 hidden">
      <div className="flex items-center space-x-6 mx-auto h-full font-bold ">
        <a className="cursor-pointer hover:text-red-400 transition-all">SKINCARE</a>
        <a className="cursor-pointer hover:text-red-400 transition-all">MAKE UP</a>
        <a className="cursor-pointer hover:text-red-400 transition-all">BODY</a>
        <a className="cursor-pointer hover:text-red-400 transition-all">HAIR</a>
        <a className="cursor-pointer hover:text-red-400 transition-all">FRAGRANCE</a>
        <a className="cursor-pointer hover:text-red-400 transition-all">NAILS</a>
        <a className="cursor-pointer hover:text-red-400 transition-all">TOOLS</a>
        <a className="cursor-pointer hover:text-red-400 transition-all">BRANDS</a>
      </div>
    </div>
  );
};
