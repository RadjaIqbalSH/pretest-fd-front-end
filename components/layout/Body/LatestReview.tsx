import { HiOutlineChevronRight } from "react-icons/hi";
import { useSelector } from "react-redux";
import { selectProduct } from "../../../store/slice/product";
import { HiStar, HiOutlineStar } from "react-icons/hi";
import { Card } from "@radjaiqbalsh/fd-pretest-component-library";

export const LatestReview = () => {
  const { data = [] } = useSelector(selectProduct);
  return (
    <div className="w-[1500px] pt-20 flex space-x-8 mx-10 2xl:mx-auto">
      <div className="w-fit">
        <div className="flex items-end justify-between">
          <div className="flex flex-col space-y-2">
            <p className="text-3xl font-bold">Latest Reviews</p>
            <p className="text-lg text-gray-400">So you can make better purchese decision</p>
          </div>
          <button className="flex items-center space-x-2 text-red-400 hover:text-red-200 transition-all">
            <p className="text-lg ">See more</p>
            <HiOutlineChevronRight className=" w-5 h-5" />
          </button>
        </div>
        <div className="w-[1000px] flex items-start space-x-8 overflow-x-hidden mt-10 pb-32">
          {data[`latest review`].map((value, index) => {
            return <Card key={index} type="bottom-avatar" productSrc={value.product.image} avatarSrc={`/profile/${index + 1}.png`} productName={value.product.name} productTitle={value.product.desc} rate={value.star} rates={value.star} lastRelese="2" productDescription={value.comment} name={value.user} title={value.profile.join(" ")} icon={<HiOutlineStar className="w-5 h-5" />} iconFill={<HiStar className="w-5 h-5 text-orange-500" />} />;
          })}
        </div>
      </div>
      <div className="w-[300px] h-[250px] bg-gray-300 rounded-md mt-[110px] flex flex-col items-center justify-center space-y-2">
        <p className="text-2xl font-bold text-gray-500">MR 2</p>
        <p className="text-lg font-semibold text-gray-500">300x250</p>
      </div>
    </div>
  );
};
