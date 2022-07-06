import { HiOutlineChevronRight } from "react-icons/hi";
import Image from "next/image";
import { Section } from "@radjaiqbalsh/fd-pretest-component-library";

export const LatestVideos = () => {
  return (
    <Section title="Latest Videos" subTitle="Watch and learn, ladies" showMore={true} icon={<HiOutlineChevronRight className=" w-5 h-5" />}>
      <div className="w-[1500px] flex items-center space-x-8 mt-10">
        <div className="flex-grow h-[500px] w-full bg-red-100 relative">
          <Image src={"/video/1.png"} layout="fill" className="h-full"></Image>
        </div>
        <div className="flex-none flex flex-col space-y-4 w-[500px] h-[500px]">
          <div className="w-full h-[250px] bg-red-500 relative">
            <Image src={"/video/2.png"} layout="fill" className="h-full"></Image>
          </div>
          <div className="w-full h-[250px] bg-red-500 relative">
            <Image src={"/video/3.png"} layout="fill" className="h-full"></Image>
          </div>
        </div>
      </div>
    </Section>
  );
};
