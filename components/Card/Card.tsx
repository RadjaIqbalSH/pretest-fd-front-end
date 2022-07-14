export interface IDataCard {
  skinType?: string;
  rate: number;
  stars: number;
  reviews: number;
  productUrl: string;
  productName: string;
  productDescription: string;
  productColor: string;
}

export interface ICard {
  keyIndex: string;
  className: string;
  starIcon: JSX.Element;
  starIconFill: JSX.Element;
  data: IDataCard;
}

export const Card = ({ keyIndex, className, starIcon, starIconFill, data }: ICard) => {
  return (
    <div
      key={keyIndex}
      className={['h-fit rounded-lg bg-white', className, data.skinType ? 'px-4 py-8' : ''].join(
        ' ',
      )}
    >
      <div className="aspect-square w-full bg-white relative">
        <img
          className="w-full h-full object-contain"
          src={data.productUrl}
          alt="Product image"
        ></img>
      </div>
      {data.skinType && (
        <p className="w-full font-semibold text-sm mt-4 text-red-500 truncate">{data.skinType}</p>
      )}
      <div className="flex items-center space-x-2 mt-2">
        <p>{data.rate}</p>
        <div className="flex items-center">
          {Array.from(Array(5), (value: any, index: number) => {
            if (index + 1 <= data.stars) return <span key={index}>{starIconFill}</span>;
            else return <span key={index}>{starIcon}</span>;
          })}
        </div>
        <p>({data.reviews})</p>
      </div>
      <p className="mt-2 w-full text-lg font-bold truncate ">{data.productName}</p>
      <p className="w-full line-clamp-2">{data.productDescription}</p>
      <p className="w-full truncate text-black-300">{data.productColor}</p>
    </div>
  );
};
