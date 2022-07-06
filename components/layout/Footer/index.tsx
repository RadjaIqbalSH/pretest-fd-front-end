import React from "react";
import Image from "next/image";
export const Footer = () => {
  return (
    <div className=" w-full border-2 pt-10 pb-10 border-t-gray-500">
      <div className="max-w-[1500px] px-10 2xl:px-0 mx-auto flex lg:flex-row flex-col-reverse">
        <div className="flex-grow flex flex-col space-y-10">
          <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 font-bold text-lg">
            <li className="w-full flex flex-col space-y-4">
              <a className="w-fit cursor-pointer hover:text-red-400 transition-all" href="">
                About Us
              </a>
              <a className="w-fit cursor-pointer hover:text-red-400 transition-all" href="">
                Feedback
              </a>
              <a className="w-fit cursor-pointer hover:text-red-400 transition-all" href="">
                Contact
              </a>
            </li>
            <li className="w-full flex flex-col space-y-4">
              <a className="w-fit cursor-pointer hover:text-red-400 transition-all" href="">
                Term &amp; Conditions
              </a>
              <a className="w-fit cursor-pointer hover:text-red-400 transition-all" href="">
                Privacy Policy
              </a>
              <a className="w-fit cursor-pointer hover:text-red-400 transition-all" href="">
                Help
              </a>
            </li>
            <li className="w-full flex flex-col space-y-4">
              <a className="w-fit cursor-pointer hover:text-red-400 transition-all" href="">
                Awards
              </a>
              <a className="w-fit cursor-pointer hover:text-red-400 transition-all" href="">
                Newsletter
              </a>
            </li>
          </ul>
          <div className="flex flex-col space-y-2">
            <a href="">
              <Image src={"/logo/fd-logo.png"} width={150} height={40}></Image>
            </a>
            <p>Copyright &copy; 2015 - 2017 Female Daily Network - All right reserved</p>
          </div>
        </div>
        <div className="w-[320px] flex-none mb-8 lg:mb-0">
          <p className="font-bold text-lg ">Download Our Mobile App</p>
          <div className="w-full flex items-center space-x-4 mt-4">
            <a className="cursor-pointer" href="">
              <Image src={"/logo/app-store.png"} width={150} height={50}></Image>
            </a>
            <a className="cursor-pointer" href="">
              <Image src={"/logo/play-store.png"} width={150} height={50}></Image>
            </a>
          </div>
          <div className="w-full flex items-center space-x-4 mt-14">
            <a className="cursor-pointer" href="">
              <Image src={"/logo/facebook.png"} width={30} height={30}></Image>
            </a>
            <a className="cursor-pointer" href="">
              <Image src={"/logo/twitter.png"} width={30} height={30}></Image>
            </a>
            <a className="cursor-pointer" href="">
              <Image src={"/logo/instagram.png"} width={30} height={30}></Image>
            </a>
            <a className="cursor-pointer" href="">
              <Image src={"/logo/youtube.png"} width={30} height={30}></Image>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
