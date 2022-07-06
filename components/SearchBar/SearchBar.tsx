import React from "react";
import { FiSearch } from "react-icons/fi";

export const SearchBar = () => {
  return (
    <div className="w-full flex items-center relative">
      <input className="w-full py-2 rounded-md outline-none pl-12 pr-2 border-2 border-gray-200 relative" type="text" />
      <button className="absolute left-4 w-5 h-5">
        <FiSearch className="w-full h-full hover:text-gray-500 transition-all" />
      </button>
    </div>
  );
};