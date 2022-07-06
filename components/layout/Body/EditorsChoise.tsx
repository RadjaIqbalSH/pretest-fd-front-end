import React from "react";
import { useSelector } from "react-redux";
import { selectProduct } from "../../../store/slice/product";
import { HiStar, HiOutlineStar } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Section, Card } from "@radjaiqbalsh/fd-pretest-component-library";

export const EditorsChoise = () => {
  const { data = [] } = useSelector(selectProduct);
  return (
    <Section title="Editor's Choise" subTitle="Curated with love" showMore={false} icon={<HiOutlineChevronRight className=" w-5 h-5" />}>
      <div className="w-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 2xl:flex 2xl:items-center 2xl:space-x-8">
        {data[`editor's choice`].map((value, index) => {
          return <Card type="top-avatar" avatarSrc={`/profile/${index + 1}.png`} name={value.editor} title={value.role} productSrc={value.product.image} rate={value.product.rating} rates={7} productName={value.product.name} productDescription={value.product.description} productColor="Merah" key={index} icon={<HiOutlineStar className="w-5 h-5" />} iconFill={<HiStar className="w-5 h-5 text-orange-500" />} />;
        })}
      </div>
    </Section>
  );
};
