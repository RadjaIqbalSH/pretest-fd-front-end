import React from 'react';
import { FiMenu } from 'react-icons/fi';

export const BurgerMenu = () => {
  return (
    <button className="w-6 h-full">
      <FiMenu className="w-full h-full hover:text-red-400" />
    </button>
  );
};
