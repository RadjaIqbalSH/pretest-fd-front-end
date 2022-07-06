import React from "react";
import { FiLock } from "react-icons/fi";

export const LoginButton = () => {
  return (
    <>
      <button className="hidden h-full w-full text-white bg-red-500 hover:bg-red-300 transition-all md:flex items-center justify-center space-x-2">
        <FiLock /> <p>LOGIN / SIGNUP</p>
      </button>
      <button className="h-fit w-fit p-4 text-white rounded-full bg-red-500 hover:bg-red-300 transition-all flex md:hidden items-center justify-center space-x-2">
        <FiLock />
      </button>
    </>
  );
};
