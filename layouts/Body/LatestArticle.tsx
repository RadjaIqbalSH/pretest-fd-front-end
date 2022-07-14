import { useSelector } from 'react-redux';
import { selectProduct } from '@store/product';
import { FiChevronRight } from 'react-icons/fi';
import { ArticleCard } from '@radjaiqbalsh/fd-pretest-component-library';

export const LatestArticle = () => {
  const {
    data: { latestArticle },
  } = useSelector(selectProduct);
  return (
    <div className="container mt-16">
      <div className="flex justify-between items-end mx-auto max-w-[1120px] mb-8">
        <div>
          <h1 className="text-2xl font-bold">Latest Articles</h1>
          <p className="text-lg text-black-300">So you can make better purchase decision</p>
        </div>
        <button className="flex items-center space-x-4 text-red-400 hover:text-red-300 cursor-pointer">
          <p className="text-lg font-semibold cursor-pointer">Show more</p>
          <FiChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div className="mx-auto max-w-[1120px] h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestArticle.map(({ title, author, image, published_at }, index: number) => {
          return (
            <ArticleCard
              key={index.toString()}
              className="w-full h-fit"
              keyIndex={index.toString()}
              data={{
                articleUrl: image,
                title: title,
                userName: author,
                publish: published_at,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
