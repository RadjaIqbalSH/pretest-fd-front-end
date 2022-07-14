import { FiChevronRight } from 'react-icons/fi';

export const LatestVideos = () => {
  return (
    <div className="container mt-8 ">
      <div className="flex justify-between items-end mx-auto max-w-[1120px] mb-8">
        <div>
          <h1 className="text-2xl font-bold">Latest Videos</h1>
          <p className="text-lg text-black-300">Watch and learn, ladies</p>
        </div>
        <button className="flex items-center space-x-4 text-red-400 hover:text-red-300 cursor-pointer">
          <p className="text-lg font-semibold cursor-pointer">Show more</p>
          <FiChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div className="mx-auto h-fit max-w-[1120px]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="col-span-2 aspect-video md:w-full md:h-full bg-gray-100 relative">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ilzOBW-fBJU"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-span-2 md:col-span-1 w-full h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-4">
            <div className="aspect-video bg-red-100 relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/QUyBYYyXhBI"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video bg-red-100 relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/nuDmtdh_Mf8"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
