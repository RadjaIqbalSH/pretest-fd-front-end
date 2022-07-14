import { useSelector } from 'react-redux';
import { selectProduct } from '@store/product';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { Ads } from '@radjaiqbalsh/fd-pretest-component-library';
import { ReviewCard } from '@components/ReviewCard';

export const LatestReview = () => {
  const {
    data: { latestReview },
  } = useSelector(selectProduct);
  const carousel = useRef({} as HTMLDivElement);
  const [position, setPosition] = useState<number>(0);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [divChilds, setDivChilds] = useState<number>(0);
  const [dotNavigation, setDotNavigation] = useState<number>(0);

  const handleNext = useCallback(() => {
    if (position === dotNavigation - 1) return;
    setPosition(position + 1);
  }, [position, dotNavigation]);

  const handlePrev = useCallback(() => {
    if (position === 0) return;
    setPosition(position - 1);
  }, [position]);

  useEffect(() => {
    carousel.current.style.marginLeft = `-${
      (carousel.current.children[0].clientWidth + 4 + 32) * divChilds * position
    }px`;
  }, [position, screenWidth, divChilds]);

  useEffect(() => {
    if (screenWidth >= 1280) {
      setDotNavigation(Math.ceil(carousel.current.children.length / 2));
      setDivChilds(2);
    } else {
      setDotNavigation(Math.ceil(carousel.current.children.length));
      setDivChilds(1);
    }
  }, [screenWidth]);

  useEffect(() => {
    if (position > dotNavigation - 1) setPosition(0);
  }, [dotNavigation, position]);

  useEffect(() => (window.onresize = () => setScreenWidth(screen.width)));

  return (
    <div className="container mt-16">
      <div className="mx-auto grid grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-x-8 max-w-[1120px]">
        <div className="col-span-2 flex flex-col space-y-8">
          <div className="flex justify-between items-end mx-automb-8">
            <div>
              <h1 className="text-2xl font-bold">Latest Reviews</h1>
              <p className="text-lg text-black-300">So you can make better purchase decision</p>
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
              {latestReview.map(
                ({ user, profile = [], product: { image, name, desc } }, index: number) => {
                  return (
                    <ReviewCard
                      key={index.toString()}
                      className="w-[300px] sm:w-[352px] h-fit"
                      keyIndex={index.toString()}
                      starIcon={<FiStar className="w-4 h-4 text-gray-100 fill-gray-100" />}
                      starIconFill={<FiStar className="w-4 h-4 text-red-500 fill-red-500" />}
                      data={{
                        avatarUrl: '/profile/3.png',
                        name: user,
                        title: profile.join(' '),
                        productUrl: image,
                        productName: name,
                        productBrand: desc,
                        stars: Math.floor(5),
                        publish: '2 hours ago',
                        productDescription: `it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
                      }}
                    />
                  );
                },
              )}
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <button className="w-fit h-fit" onClick={handlePrev}>
              <FiChevronLeft className="w-6 h-6 text-red-400 hover:text-red-500" />
            </button>
            {Array.from(Array(dotNavigation), (val, index: number) => {
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
        <Ads
          className="col-span-2 lg:col-span-1 mx-auto lg:mr-0 lg:mt-24 w-[300px] h-[250px]"
          label="MR2"
          label2="300x250"
        />
      </div>
    </div>
  );
};
