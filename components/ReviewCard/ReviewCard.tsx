export interface IDataReviewCard {
  avatarUrl: string;
  name: string;
  title: string;
  productUrl: string;
  productName: string;
  productBrand: string;
  stars: number;
  publish: string;
  productDescription: string;
}

export interface IReviewCard {
  keyIndex: string;
  className: string;
  starIcon: JSX.Element;
  starIconFill: JSX.Element;
  data: IDataReviewCard;
}

export const ReviewCard = ({ keyIndex, className, starIcon, starIconFill, data }: IReviewCard) => {
  let showStatus: boolean = true;

  const handleShow = (id: string) => {
    const productDescription = document.getElementById(`product-description-${id}`);
    const readMore = document.getElementById(`read-more-${id}`);
    if (showStatus) {
      readMore!.innerHTML = 'Read Less';
      productDescription?.classList.remove('line-clamp-4');
    } else {
      readMore!.innerHTML = 'Read More';
      productDescription?.classList.add('line-clamp-4');
    }
    showStatus = !showStatus;
  };

  return (
    <div
      className={[
        'mb-20 px-4 pt-4 pb-10 border-2 border-gray-50 rounded-lg relative',
        className,
      ].join(' ')}
      key={keyIndex}
    >
      <div className="w-full h-fit absolute left-0 -bottom-20 flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-gray-50 relative overflow-hidden">
          <img className="w-full h-full object-cover" src={data.avatarUrl} alt="Avatar"></img>
        </div>
        <p className="mt-2 w-full truncate text-center">{data.name}</p>
        <p className="w-full truncate text-center">{data.title}</p>
      </div>
      <div className="w-full h-20 flex space-x-4">
        <div className="flex-none w-20 h-20 bg-white relative overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-contain"
            src={data.productUrl}
            alt="Product image"
          ></img>
        </div>
        <div className="flex-none w-[60%] h-20">
          <p className="mt-2 text-xl font-semibold w-full truncate hover:text-red-500 cursor-pointer">
            {data.productName}
          </p>
          <p className="mt-0 w-full truncate">{data.productBrand}</p>
        </div>
      </div>
      <div className="border-t-2 mt-4 border-gray-50"></div>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center">
          {Array.from(Array(5), (value: any, index: number) => {
            if (index + 1 <= data.stars) return <span key={index}>{starIconFill}</span>;
            else return <span key={index}>{starIcon}</span>;
          })}
        </div>
        <p className="text-gray-100 text-sm">{data.publish}</p>
      </div>
      <p id={`product-description-${keyIndex}`} className="mt-2 text-sm line-clamp-4">
        {data.productDescription}
      </p>
      <button
        id={`read-more-${keyIndex}`}
        className="mt-2 text-sm text-red-400 hover:text-red-500"
        onClick={() => handleShow(keyIndex)}
      >
        Read more
      </button>
    </div>
  );
};
