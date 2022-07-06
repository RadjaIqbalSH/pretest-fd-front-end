import React from "react";
import { Group } from "@components";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Section } from "@radjaiqbalsh/fd-pretest-component-library";

export const PopularGroups = () => {
  return (
    <Section title="Popular Group" subTitle="Say you can make better purchese decision" showMore={true} icon={<HiOutlineChevronRight className=" w-5 h-5" />}>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-10">
        {Array.from(Array(4), (e, i) => {
          return <Group avatarSrc={`/group/${i + 1}.png`} title="Embarase The Curls" description="May our curls pop and never stop!" key={i} />;
        })}
      </div>
    </Section>
  );
};
