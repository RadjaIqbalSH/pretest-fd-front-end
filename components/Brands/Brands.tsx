export interface IBrands {
  brandSrc: string;
}

export const Brands = ({ brandSrc }: IBrands) => {
  return (
    <div className="w-[160px] h-fit rounded-lg bg-white">
      <div className="aspect-square w-full bg-white relative">
        <img className="w-full h-full object-contain" src={brandSrc} alt="Brand image"></img>
      </div>
    </div>
  );
};
