import React from "react";
import { Article } from "@components";
import { useSelector } from "react-redux";
import { selectProduct } from "../../../store/slice/product";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Section } from "@radjaiqbalsh/fd-pretest-component-library";

export const LatestArticle = () => {
  const { data = [] } = useSelector(selectProduct);
  return (
    <Section title="Latest Article" subTitle="Say you can make better purchese decision" showMore={true} icon={<HiOutlineChevronRight className=" w-5 h-5" />}>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 mt-10">
        {data[`latest articles`].map((value, index) => {
          return <Article key={index} productSrc={value.image} title={value.title} author={value.author} lastRelese={value.published_at} />;
        })}
      </div>
    </Section>
  );
};
