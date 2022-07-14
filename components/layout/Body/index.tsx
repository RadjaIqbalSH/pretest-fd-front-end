import React from 'react';
import { Ads } from '@components';
import { EditorsChoise } from './EditorsChoise';
import { BestProducts } from './BestProduct';
import { LatestArticle } from './LatestArticle';
import { LatestReview } from './LatestReview';
import { PopularGroups } from './PopularGroups';
import { LatestVideos } from './LatestVideos';
import { TrendingThisWeek } from './TrendingThisWeek';
import { TopBrands } from './TopBrands';

export const Body = () => {
  return (
    <>
      <div className="w-full">
        {/* TOP ADS */}

        <div className="container mt-4">
          <Ads className="mx-auto max-w-[970px] h-[50px]" label="Top Frame 970x50" />
        </div>
        <div className="container mt-8">
          <Ads className="mx-auto max-w-[970px] h-[250px]" label="BillBoard 970x250" />
        </div>

        {/* TOP ADS */}

        {/* EDITOR CHOISE */}
        <EditorsChoise />
        {/* EDITOR CHOISE */}

        {/* BEST PRODUSCT */}
        <BestProducts />
        {/* BEST PRODUSCT */}

        {/* MIDDLE ADS */}
        <div className="container mt-16">
          <Ads
            className="mx-auto max-w-[970px] h-[250px]"
            label="Horizontal 970x250"
            label2="Internal Campaign Only"
          />
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
      </div>
    </>
  );
};
