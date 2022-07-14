import React, { useRef, useState, useEffect, MouseEventHandler, TouchEventHandler } from 'react';
import { FiChevronRight, FiUser, FiMessageCircle, FiList } from 'react-icons/fi';
import { GroupCard } from '@radjaiqbalsh/fd-pretest-component-library';

export const PopularGroups = () => {
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
          <h1 className="text-2xl font-bold">Editor's Choise</h1>
          <p className="text-lg text-black-300">Curated with love</p>
        </div>
        <button className="flex items-center space-x-4 text-red-400 hover:text-red-300 cursor-pointer">
          <p className="text-lg font-semibold cursor-pointer">Show more</p>
          <FiChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div
        ref={slider}
        className="mx-auto h-[432px] max-w-[1120px] overflow-x-hidden relative"
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
          className="px-4 pt-4 flex space-x-8 w-fit h-fit cursor-grab absolute left-0 top-0 pointer-events-none"
        >
          {Array.from(Array(4), (e, index) => {
            return (
              <GroupCard
                key={index.toString()}
                className="w-[248px] h-fit"
                keyIndex={index.toString()}
                icon1={<FiUser className="w-5 h-5" />}
                icon2={<FiList className="w-5 h-5" />}
                icon3={<FiMessageCircle className="w-5 h-5" />}
                data={{
                  avatarUrl: `/group/${index + 1}.png`,
                  title: 'Embrace The Curl',
                  description: 'May our curl pop and never stop!',
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
