import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FiMenu, FiUser, FiSearch, FiX } from 'react-icons/fi';

export const Header = () => {
  const [menuHandler, setMenuHandler] = useState(false);

  const NavLink = () => {
    return (
      <>
        <Link href="/" passHref>
          <a className="text-lg font-bold hover:text-black-300 transition-all">SKINCARE</a>
        </Link>
        <Link href="/" passHref>
          <a className="text-lg font-bold hover:text-black-300 transition-all">MAKE UP</a>
        </Link>
        <Link href="/" passHref>
          <a className="text-lg font-bold hover:text-black-300 transition-all">BODY</a>
        </Link>
        <Link href="/" passHref>
          <a className="text-lg font-bold hover:text-black-300 transition-all">HAIR</a>
        </Link>
        <Link href="/" passHref>
          <a className="text-lg font-bold hover:text-black-300 transition-all">FRAGRANCE</a>
        </Link>
        <Link href="/" passHref>
          <a className="text-lg font-bold hover:text-black-300 transition-all">NAILS</a>
        </Link>
        <Link href="/" passHref>
          <a className="text-lg font-bold hover:text-black-300 transition-all">TOOLS</a>
        </Link>
        <Link href="/" passHref>
          <a className="text-lg font-bold hover:text-black-300 transition-all">BRANDS</a>
        </Link>
      </>
    );
  };

  const DropMenus = () => {
    return (
      <div
        className={`flex flex-col items-center space-y-4 w-full h-fit bg-white px-6 pt-6 pb-10 absolute ${
          menuHandler ? 'top-0' : '-top-[500px]'
        } border-b-2 border-black-100 z-50`}
      >
        <div className="w-full h-fit">
          <button className="w-8 h-8" onClick={() => setMenuHandler(false)}>
            <FiX className="w-full h-full hover:text-black-300" />
          </button>
        </div>
        <NavLink />
      </div>
    );
  };

  return (
    <>
      <div className="w-full h-20 flex items-center relative border-b-2 border-black-100 transition-all">
        <button className="flex-none w-7 h-full mx-6" onClick={() => setMenuHandler(true)}>
          <FiMenu className="w-full h-full hover:text-black-300 transition-all" />
        </button>
        <Link href="/" passHref>
          <a className="flex-none w-40 h-full relative mr-10">
            <Image
              src={'/logo/fd-logo.png'}
              layout="fill"
              title="Female Daily"
              alt="Company Logo"
              objectFit="contain"
            />
          </a>
        </Link>
        <div className="flex-grow md:flex items-center w-full h-full mr-10 relative hidden">
          <input
            className="w-full py-2 rounded-md outline-none pl-12 pr-2 border-2 border-gray-100 relative"
            type="text"
            placeholder="Search products, articles, topics, brands, etc"
          />
          <button className="absolute left-4 w-5 h-5">
            <FiSearch className="w-full h-full text-gray-100 transition-all" />
          </button>
        </div>
        <div className="flex-grow h-full md:hidden"></div>
        <button className="flex-none flex items-center justify-center space-x-4 p-3 mr-6 md:mr-0 h-fit md:h-full w-fit md:px-10 bg-red-500 hover:bg-red-300 font-semibold text-lg text-white rounded-full md:rounded-none transition-all">
          <FiUser className="w-5 h-5" />
          <span className="hidden md:block">LOGIN / SIGNUP</span>
        </button>
        <DropMenus />
      </div>
      <div className="w-full h-20 px-6 md:hidden border-b-2 border-gray-100">
        <div className="flex-grow flex items-center w-full h-full mr-10 relative">
          <input
            className="w-full py-2 rounded-md outline-none pl-12 pr-2 border-2 border-gray-100 relative"
            type="text"
            placeholder="Search products, articles, topics, brands, etc"
          />
          <button className="absolute left-4 w-5 h-5">
            <FiSearch className="w-full h-full text-gray-100 transition-all" />
          </button>
        </div>
      </div>
      <div className="lg:flex items-center justify-center space-x-8 w-full h-16 border-b-2 border-gray-100 overflow-x-auto hidden">
        <NavLink />
      </div>
    </>
  );
};
