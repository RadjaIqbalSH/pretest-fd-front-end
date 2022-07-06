import { Brands } from "@components";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Section } from "@radjaiqbalsh/fd-pretest-component-library";

export const TopBrands = () => {
  return (
    <Section title="Top Brands" subTitle="We all know and love" showMore={true} icon={<HiOutlineChevronRight className=" w-5 h-5" />}>
      <div className="w-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 2xl:flex 2xl:gap-8 mt-10">
        {Array.from(Array(6), (e, i) => {
          return <Brands brandsSrc={`/brands/${i + 1}.png`} key={i} />;
        })}
      </div>
    </Section>
  );
};
