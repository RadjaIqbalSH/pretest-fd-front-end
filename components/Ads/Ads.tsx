import classNames from "classnames";

export interface AdsProps {
  label: string;
  height: string;
}

export const Ads = ({ label, height }: AdsProps) => {
  return (
    <div className={classNames(`mx-auto w-full lg:w-[970px] h-[${height}] bg-gray-200 flex flex-col items-center justify-center`)}>
      <p className="text-3xl font-semibold text-gray-600">{label}</p>
    </div>
  );
};
