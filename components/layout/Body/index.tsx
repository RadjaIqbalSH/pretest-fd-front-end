import React from "react";
import { HiStar, HiOutlineStar, HiOutlineChevronRight, HiUser } from "react-icons/hi";
import Image from "next/image";
import { Ads } from "@components";
import { EditorsChoise } from "./EditorsChoise";
import { BestProducts } from "./BestProduct";
import { LatestArticle } from "./LatestArticle";
import { LatestReview } from "./LatestReview";
import { PopularGroups } from "./PopularGroups";
import { LatestVideos } from "./LatestVideos";
import { TrendingThisWeek } from "./TrendingThisWeek";
import { TopBrands } from "./TopBrands";

export const Body = () => {
  return (
    <>
      <div className="w-full">
        {/* TOP ADS */}
        <div className="w-full px-8 mt-10 flex flex-col space-y-4">
          <Ads label="Top Frame 970x50" height="50px" />
          <Ads label="Top Frame 970x250" height="250px" />
        </div>
        {/* TOP ADS */}

        {/* EDITOR CHOISE */}
        <EditorsChoise />
        {/* EDITOR CHOISE */}

        {/* BEST PRODUSCT */}
        <BestProducts />
        {/* BEST PRODUSCT */}

        {/* MIDDLE ADS */}
        <div className="w-full px-8">
          <Ads label="Top Frame 970x250" height="250px" />
        </div>
        {/* MIDDLE ADS */}

        {/* LATEST ARTICLE */}
        <LatestArticle />
        {/* LATEST ARTICLE */}

        {/* LAST REVIEW */}
        <LatestReview />
        {/* LAST ARTICLE */}

        {/* POPULAR GROUPS */}
        <PopularGroups />
        {/* POPULAR GROUP */}

        {/* LATEST VIDEO */}
        <LatestVideos />
        {/* LATEST VIDEO */}

        {/* TRENDING THIS WEEK */}
        <TrendingThisWeek />
        {/* TRENDING THIS WE */}

        {/* TOP BRANDS */}
        <TopBrands />
        {/* TOP BRANDS */}

        <div className="mx-auto max-w-[1500px] px-10 2xl:px-0 mt-20 mb-20">
          <p className="text-2xl font-bold">Female Daily - Find everithing you want to know about beauty on Female Daily</p>
          <p className="text-xl mt-5">Product review, Tips &amp; Trick, Expert and Consumer Opinions, Beauty Rurorials, Discussion, Beauty Workshops, anythins! We are to be your friendly solution to all things beauty, inside and out!</p>
        </div>
      </div>
    </>
  );
};
