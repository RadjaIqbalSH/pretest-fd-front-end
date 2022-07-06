import React from "react";
import Image from "next/image";

export interface IArticleProps {
  productSrc: string;
  title?: string;
  author?: string;
  lastRelese?: string;
}

export const Article = ({ productSrc, title = "", author = "", lastRelese = "" }: IArticleProps) => {
  return (
    <div className="h-fit w-[480px]">
      <Image className="rounded-xl" src={productSrc} width={470} height={250}></Image>
      <p className="mt-4 text-2xl font-semibold">{title ? title : "-"}</p>
      <p className="text-gray-400 mt-4">
        <span className="font-semibold text-gray-500">{author ? author : "-"}</span> {lastRelese ? `| ${lastRelese}` : "-"}
      </p>
    </div>
  );
};
