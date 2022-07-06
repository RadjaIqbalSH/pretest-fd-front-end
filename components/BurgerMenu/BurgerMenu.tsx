import React from "react";
import { FiMenu } from "react-icons/fi";

export const BurgerMenu = () => {
  return (
    <button className="block md:hidden w-8 h-8">
      <FiMenu className="w-full h-full hover:text-red-400" />
    </button>
  );
};
