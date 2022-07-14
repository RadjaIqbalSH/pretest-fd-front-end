import { Card } from '@radjaiqbalsh/fd-pretest-component-library';
import React, { useRef, useState, useEffect, MouseEventHandler, TouchEventHandler } from 'react';
import { FiStar } from 'react-icons/fi';

export const BestProducts = () => {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const innerSlider = useRef({} as HTMLDivElement);
  const slider = useRef({} as HTMLDivElement);
  const [screenWidth, setScreenWidth] = useState<number>(0);

  const handleMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    if (slider.current.clientWidth >= innerSlider.current.clientWidth) return;
    setIsPressed(true);
    const offsetX: number = e.nativeEvent.offsetX;
    const offsetLeft: number = innerSlider.current.offsetLeft;
    setStartX(offsetX - offsetLeft);
    slider.current.style.cursor = 'grabbing';
  };

  const handleMouseUp: MouseEventHandler<HTMLDivElement> = (e) => {
    if (slider.current.clientWidth >= innerSlider.current.clientWidth) return;
    setIsPressed(false);
    slider.current.style.cursor = 'grab';
  };

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (slider.current.clientWidth >= innerSlider.current.clientWidth) return;
    if (!isPressed) return;
    e.preventDefault;
    const offsetX: number = e.nativeEvent.offsetX;
    innerSlider.current.style.left = `${offsetX - startX}px`;
    checkBoundary();
  };

  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    if (slider.current.clientWidth >= innerSlider.current.clientWidth) return;
    slider.current.style.cursor = 'grab';
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    slider.current.style.cursor = 'default';
  };

  const checkBoundary = () => {
    const outer = slider.current.getBoundingClientRect();
    const inner = innerSlider.current.getBoundingClientRect();
    if (parseInt(innerSlider.current.style.left) > 0) {
      innerSlider.current.style.left = '0px';
    } else if (inner.right < outer.right) {
      innerSlider.current.style.left = `-${inner.width - outer.width}px`;
    }
  };

  const handleTouchDown: TouchEventHandler<HTMLDivElement> = (e) => {
    if (slider.current.clientWidth >= innerSlider.current.clientWidth) return;
    setIsPressed(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX: number = e.touches[0].clientX - window.pageXOffset - rect.left;
    const offsetLeft: number = innerSlider.current.offsetLeft;
    setStartX(offsetX - offsetLeft);
  };

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
    if (slider.current.clientWidth >= innerSlider.current.clientWidth) return;
    if (!isPressed) return;
    e.preventDefault;
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX: number = e.touches[0].clientX - window.pageXOffset - rect.left;
    innerSlider.current.style.left = `${offsetX - startX}px`;
    checkBoundary();
  };

  const handleTouchEnd: TouchEventHandler<HTMLDivElement> = (e) => {
    setIsPressed(false);
  };

  useEffect(() => {
    checkBoundary();
  }, [screenWidth]);

  useEffect(() => (window.onresize = () => setScreenWidth(screen.width)));
  return (
    <div className="bg-[#FDDAE0] mt-16 lg:bg-[url('/logo/ads-girl.png')] lg:bg-no-repeat lg:bg-contain lg:bg-left-bottom">
      <div className="container">
        <div className="mx-auto h-fit max-w-[1120px] py-8 flex flex-col sm:flex-row items-center space-x-0 justify-end">
          <div className="flex-none w-72 hidden lg:block 2xl:hidden"></div>
          <div className="flex-none flex flex-col items-end w-full sm:w-[310px] h-full pb-8 sm:pr-8">
            <p className="w-full text-2xl font-bold">
              Looking for products that are just simply perfect for you?
            </p>
            <p className="w-full text-lg mt-4">
              Here are some products that we believe match your skin, hair, and body! have we
              mentioned that they solve your concerns too?
            </p>
            <button className="py-2 px-8 mt-12 rounded-md text-white bg-red-500 hover:bg-red-300 transition-all">
              See My Matches
            </button>
          </div>
          <div
            ref={slider}
            className="sm:shrink h-[410px] w-full sm:w-[660px] overflow-x-hidden relative"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchDown}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={innerSlider}
              className="flex space-x-8 w-fit h-fit cursor-grab absolute left-0 top-0 pointer-events-none"
            >
              {Array.from(Array(3), (value: any, index: number) => {
                return (
                  <Card
                    key={index.toString()}
                    className="w-[198.4px]"
                    keyIndex={index.toString()}
                    starIcon={<FiStar className="w-4 h-4 text-gray-100 fill-gray-100" />}
                    starIconFill={<FiStar className="w-4 h-4 text-red-500 fill-red-500" />}
                    data={{
                      skinType: 'Match Skin Type',
                      rate: 3.5,
                      stars: Math.floor(3.5),
                      reviews: 10 + index,
                      productUrl: `/product/${index + 1}.png`,
                      productName: 'VAL BY VALERIE THOMAS',
                      productDescription: 'Pure pressed blush',
                      productColor: 'Neutral Rose',
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
