import React from 'react';
import Image from 'next/image';

import { SearchBar, BurgerMenu, CompanyLogo, LoginButton, NavLink } from '@components';
import Link from 'next/link';

export const Header = () => {
  return (
    <>
      <div className="flex items-center h-16">
        <div className="flex-grow w-full px-8 py-2 h-full flex items-center space-x-6 justify-between">
          <div className="flex-none w-44 flex items-center space-x-4">
            <BurgerMenu />
            <CompanyLogo />
          </div>
          <div className="flex-grow hidden md:block">
            <SearchBar />
          </div>
        </div>
        <div className="flex-none w-fit h-fit md:h-full md:w-60 mr-8 md:mr-0">
          <LoginButton />
        </div>
      </div>
      <div className="w-full py-4 px-8 block md:hidden">
        <SearchBar />
      </div>
      <NavLink />
    </>
  );
};
