import React from "react";
import Image from "next/image";

export interface IBrandsProps {
  brandsSrc: string;
}

export const Brands = ({ brandsSrc }: IBrandsProps) => {
  return (
    <div className="h-fit w-[222px] flex items-center justify-center">
      <Image src={brandsSrc} width={100} height={100}></Image>
    </div>
  );
};
