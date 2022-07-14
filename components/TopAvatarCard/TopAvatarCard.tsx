export interface IDataTopAvatarCard {
  avatarUrl: string;
  name: string;
  title: string;
  rate: number;
  stars: number;
  reviews: number;
  productUrl: string;
  productName: string;
  productDescription: string;
  productColor: string;
}

export interface ITopAvatarCard {
  keyIndex: string;
  className?: string;
  starIcon: JSX.Element;
  starIconFill: JSX.Element;
  data: IDataTopAvatarCard;
}

export const TopAvatarCard = ({
  keyIndex,
  className,
  starIcon,
  starIconFill,
  data,
}: ITopAvatarCard) => {
  return (
    <div
      className={[
        'h-fit rounded-lg border-2 border-gray-50 relative mt-12 px-4 py-8',
        className,
      ].join(' ')}
      key={keyIndex}
    >
      <div className="flex space-x-2 w-full h-14 pl-4 absolute -top-[48px] left-0">
        <div className="w-14 h-full rounded-full relative overflow-hidden border-2 border-gray-50">
          <img
            className="w-full h-full object-cover object-center bg-white"
            src={data.avatarUrl}
            alt="Author Image"
            title="Author Image"
          ></img>
        </div>
        <div className="h-full">
          <p className="w-24 truncate font-semibold">{data.name}</p>
          <p className="w-24 truncate font-semibold text-xs text-black-200">{data.title}</p>
        </div>
      </div>
      <div className="aspect-square w-full bg-white relative">
        <img
          className="w-full h-full object-contain object-center"
          src={data.productUrl}
          alt="Product image"
        ></img>
      </div>
      <div className="flex items-center space-x-2 mt-4">
        <p>{data.rate}</p>
        <div className="flex items-center">
          {Array.from(Array(5), (value: any, index: number) => {
            if (index + 1 <= data.stars) return <span key={index}>{starIconFill}</span>;
            else return <span key={index}>{starIcon}</span>;
          })}
        </div>
        <p>({data.reviews})</p>
      </div>
      <p className="mt-2 w-full text-lg font-bold truncate">{data.productName}</p>
      <p className="w-full line-clamp-2">{data.productDescription}</p>
      <p className="text-black-300 w-full truncate">{data.productColor}</p>
    </div>
  );
};
