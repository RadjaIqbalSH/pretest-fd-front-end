import React, { useRef, useState, useEffect } from 'react';
import { useCallback } from 'react';

import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Card } from '@components/Card';

export const TrendingThisWeek = () => {
  const carousel = useRef({} as HTMLDivElement);

  const [childs, setChilds] = useState<number>(0);
  const [position, setPosition] = useState<number>(1);
  const [divChilds, setDivChilds] = useState<number>(0);
  const [screenWidth, setScreenWidth] = useState<number>(0);

  const handleNext = useCallback(() => {
    if (position === divChilds - 1) return;
    setPosition(position + 1);
  }, [position, divChilds]);

  const handlePrev = useCallback(() => {
    if (position === 0) return;
    setPosition(position - 1);
  }, [position]);

  const handleDivChilds = useCallback((payload: number) => {
    setDivChilds(Math.ceil(carousel.current.children.length / payload));
  }, []);

  useEffect(() => {
    carousel.current.style.marginLeft = `-${
      (carousel.current.children[0].clientWidth * childs + 32 * childs) * position
    }px`;
  }, [position, screenWidth, childs]);

  useEffect(() => {
    if (screenWidth >= 1280) {
      handleDivChilds(6);
      setChilds(6);
    } else if (screenWidth >= 1024) {
      handleDivChilds(5);
      setChilds(5);
    } else if (screenWidth >= 768) {
      handleDivChilds(4);
      setChilds(4);
    } else if (screenWidth >= 580) {
      handleDivChilds(3);
      setChilds(3);
    } else if (screenWidth >= 386) {
      handleDivChilds(2);
      setChilds(2);
    } else {
      handleDivChilds(1);
      setChilds(1);
    }
  }, [screenWidth, handleDivChilds]);

  useEffect(() => {
    if (position > divChilds - 1) setPosition(0);
  }, [divChilds, position]);

  useEffect(() => (window.onresize = () => setScreenWidth(screen.width)));
  return (
    <div className="container mt-16">
      <div className="mx-auto max-w-[1120px] flex flex-col space-y-8">
        <div className="flex justify-between items-end mx-automb-8">
          <div>
            <h1 className="text-2xl font-bold">Trending This Week</h1>
            <p className="text-lg text-black-300">See our weekly most reviewed products</p>
          </div>
          <button className="flex items-center space-x-4 text-red-400 hover:text-red-500 cursor-pointer">
            <p className="text-lg font-semibold cursor-pointer">Show more</p>
            <FiChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="w-full h-fit overflow-hidden">
          <div
            ref={carousel}
            className="w-fit h-fit flex space-x-8 transition-all ease-out duration-700"
          >
            {Array.from(Array(7), (value: any, index: number) => {
              return (
                <Card
                  key={index.toString()}
                  className="w-[160px]"
                  keyIndex={index.toString()}
                  starIcon={<FiStar className="w-4 h-4 text-gray-100 fill-gray-100" />}
                  starIconFill={<FiStar className="w-4 h-4 text-red-500 fill-red-500" />}
                  data={{
                    rate: 3.5,
                    stars: Math.ceil(3.5),
                    reviews: 10 + index * 2,
                    productUrl: '/product/2.png',
                    productName: 'JUICE BAUTY',
                    productDescription: 'Phyto-Pigments Flawless Serum',
                    productColor: 'Rosy Beige',
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <button className="w-fit h-fit" onClick={handlePrev}>
            <FiChevronLeft className="w-6 h-6 text-red-400 hover:text-red-500" />
          </button>
          {Array.from(Array(divChilds), (val, index: number) => {
            return (
              <button
                className={[
                  'w-2 h-2 rounded-full hover:bg-red-500 transition-all',
                  `${index === position ? 'bg-red-500' : 'bg-red-400'}`,
                ].join(' ')}
                key={index}
                onClick={() => setPosition(index)}
              ></button>
            );
          })}
          <button className="w-fit h-fit" onClick={handleNext}>
            <FiChevronRight className="w-6 h-6 text-red-400 hover:text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};
