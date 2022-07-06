import React from "react";
import Image from "next/image";
import { HiStar, HiOutlineStar } from "react-icons/hi";
import { Card } from "@radjaiqbalsh/fd-pretest-component-library";

export const BestProducts = () => {
  return (
    <div className="mx-auto min-w-0 max-w-[1800px] mt-20 h-[500px] mb-20 bg-[#FDDAE0] flex">
      <Image src={"/logo/ads-girl.png"} width={450} height={400}></Image>
      <div className="flex flex-row  space-x-10 w-[1350px] items-center">
        <div className="flex-none flex flex-col items-end justify-center space-y-8 w-96 h-full">
          <p className="w-full text-3xl font-bold">Looking for product that are just simply perfect for you?</p>
          <p className="w-full text-xl font-semibold">Here are some products that we believe match your skin, hair, and body! Have we mentioned that they solve your concerns too?</p>
          <button className="py-4 px-8 bg-red-500 text-white rounded-md w-fit hover:bg-red-400">See My Matches</button>
        </div>
        <div className="flex-grow w-full h-full my-8 flex items-center space-x-8">
          {Array.from(Array(3), (e, i) => {
            return <Card skinType="Match Skin Type" productSrc={`/product/${i + 1}.png`} type="no-avatar" rate={4.9} rates={5} productName="VAl BY VALARIE THOMAS" productDescription="Pure Pressed Blush" productColor="Natural Rose" key={i} icon={<HiOutlineStar className="w-5 h-5" />} iconFill={<HiStar className="w-5 h-5 text-orange-500" />} />;
          })}
        </div>
      </div>
    </div>
  );
};
