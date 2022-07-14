import React from 'react';
import Image from 'next/image';
import { Ads } from '@radjaiqbalsh/fd-pretest-component-library';
export const Footer = () => {
  return (
    <>
      <div className="w-full border-t-2 pt-10 pb-10 border-gray-500 mt-16">
        <div className="container">
          <div className="max-w-[1120px] mx-auto flex lg:flex-row flex-col-reverse">
            <div className="flex-grow flex flex-col space-y-10">
              <ul className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 font-bold text-lg">
                <li className="w-full flex flex-col space-y-4">
                  <a className="w-fit cursor-pointer hover:text-red-500 transition-all" href="">
                    About Us
                  </a>
                  <a className="w-fit cursor-pointer hover:text-red-500 transition-all" href="">
                    Feedback
                  </a>
                  <a className="w-fit cursor-pointer hover:text-red-500 transition-all" href="">
                    Contact
                  </a>
                </li>
                <li className="w-full flex flex-col space-y-4">
                  <a className="w-fit cursor-pointer hover:text-red-500 transition-all" href="">
                    Term &amp; Conditions
                  </a>
                  <a className="w-fit cursor-pointer hover:text-red-500 transition-all" href="">
                    Privacy Policy
                  </a>
                  <a className="w-fit cursor-pointer hover:text-red-500 transition-all" href="">
                    Help
                  </a>
                </li>
                <li className="w-full flex flex-col space-y-4">
                  <a className="w-fit cursor-pointer hover:text-red-500 transition-all" href="">
                    Awards
                  </a>
                  <a className="w-fit cursor-pointer hover:text-red-500 transition-all" href="">
                    Newsletter
                  </a>
                </li>
              </ul>
              <div className="flex flex-col space-y-2">
                <a href="">
                  <Image
                    src={'/logo/fd-logo.png'}
                    width={150}
                    height={40}
                    alt="Company logo"
                  ></Image>
                </a>
                <p>Copyright &copy; 2015 - 2017 Female Daily Network - All right reserved</p>
              </div>
            </div>
            <div className="w-[320px] flex-none mb-8 lg:mb-0">
              <p className="font-bold text-lg ">Download Our Mobile App</p>
              <div className="w-full flex items-center space-x-4 mt-4">
                <a className="w-[133px] h-10 bg-red-200 cursor-pointer relative" href="">
                  <Image
                    className="w-full h-full object-contain object-center"
                    src={'/logo/app-store.png'}
                    layout="fill"
                    alt="App Store"
                  ></Image>
                </a>
                <a className="w-[133px] h-10 cursor-pointer relative" href="">
                  <Image
                    className="w-full h-full object-contain object-center"
                    src={'/logo/play-store.png'}
                    layout="fill"
                    alt="Play Store"
                  ></Image>
                </a>
              </div>
              <div className="w-full flex items-center space-x-4 mt-14">
                <a className="w-8 h-8 cursor-pointer relative" href="">
                  <Image
                    className="w-full h-full object-contain object-center"
                    src={'/logo/facebook.png'}
                    layout="fill"
                    alt="Facebook"
                  ></Image>
                </a>
                <a className="w-8 h-8 cursor-pointer relative" href="">
                  <Image
                    className="w-full h-full object-contain object-center"
                    src={'/logo/twitter.png'}
                    layout="fill"
                    alt="Twitter"
                  ></Image>
                </a>
                <a className="w-8 h-8 cursor-pointer relative" href="">
                  <Image
                    className="w-full h-full object-contain object-center"
                    src={'/logo/instagram.png'}
                    layout="fill"
                    alt="Instagram"
                  ></Image>
                </a>
                <a className="w-8 h-8 cursor-pointer relative" href="">
                  <Image
                    className="w-full h-full object-contain object-center"
                    src={'/logo/youtube.png'}
                    layout="fill"
                    alt="Youtube"
                  ></Image>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-8 mb-8">
        <Ads
          className="mx-auto max-w-[320px] sm:max-w-[468px] lg:max-w-[970px] max-h-[50px] sm:max-h-[60px] lg:max-h-[50px]"
          label="Bottom Frame 970x50, 468x60, 320x50"
        />
      </div>
    </>
  );
};
