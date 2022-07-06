import { HiStar, HiOutlineStar } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Card, Section } from "@radjaiqbalsh/fd-pretest-component-library";

export const TrendingThisWeek = () => {
  return (
    <Section title="Trending This Week" subTitle="See our weekly most reviwed products" showMore={false} icon={<HiOutlineChevronRight className=" w-5 h-5" />}>
      <div className="w-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 2xl:flex 2xl:items-center mt-10">
        {Array.from(Array(6), (e, i) => {
          return <Card productSrc={`/product/${i + 1}.png`} type="no-avatar" rate={4} rates={5} productName="Juice Beauty" productDescription="Phyto-Pigments Flawless Serum" productColor="Rosy Beige" key={i} icon={<HiOutlineStar className="w-5 h-5" />} iconFill={<HiStar className="w-5 h-5 text-orange-500" />} />;
        })}
      </div>
    </Section>
  );
};
