import React from "react";
import { FiUser, FiList, FiMail } from "react-icons/fi";
import Image from "next/image";

export interface IGroupProps {
  avatarSrc: string;
  title: string;
  description: string;
}

export const Group = ({ avatarSrc, title, description }: IGroupProps) => {
  return (
    <div className="h-fit p-8 shadow-gray-200 shadow-xl rounded-xl hover:shadow-none transition-all cursor-pointer flex flex-col items-center justify-center">
      {avatarSrc && <Image src={avatarSrc} width={200} height={200}></Image>}
      <p className="mt-6 text-2xl font-bold w-full text-center">{title ? title : "-"}</p>
      <div className="flex items-center w-full space-x-12 mt-8 justify-center">
        <FiUser className="w-6 h-6" />
        <FiList className="w-6 h-6" />
        <FiMail className="w-6 h-6" />
      </div>
      <p className="text-gray-800 mt-8 font-semibold text-lg">{description ? description : "-"}</p>
    </div>
  );
};
