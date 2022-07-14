import React, { useRef, useState, useEffect, MouseEventHandler, TouchEventHandler } from 'react';

import { Brands } from '@components/Brands';

import { FiChevronRight } from 'react-icons/fi';

export const TopBrands = () => {
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
    <div className="container mt-16">
      <div className="flex justify-between items-end mx-auto max-w-[1120px] mb-8">
        <div>
          <h1 className="text-2xl font-bold">Top Brands</h1>
          <p className="text-lg text-black-300">We all know and love</p>
        </div>
        <button className="flex items-center space-x-4 text-red-400 hover:text-red-300 cursor-pointer">
          <p className="text-lg font-semibold cursor-pointer">Show more</p>
          <FiChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div
        ref={slider}
        className="mx-auto h-[160px] max-w-[1120px] overflow-x-hidden relative"
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
          {Array.from(Array(6), (value, index: number) => {
            return <Brands brandSrc={`/brands/${index + 1}.png`} key={index} />;
          })}
        </div>
      </div>
      <div className="mx-auto max-w-[1120px]">
        <p className="text-2xl font-bold">
          Female Daily - Find everithing you want to know about beauty on Female Daily
        </p>
        <p className="text-lg mt-5">
          Product review, Tips &amp; Trick, Expert and Consumer Opinions, Beauty Rurorials,
          Discussion, Beauty Workshops, anythins! We are to be your friendly solution to all things
          beauty, inside and out!
        </p>
      </div>
    </div>
  );
};
