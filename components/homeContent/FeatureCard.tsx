export function FeatureCard({ mainText, subText, rating, active }: any) {
  return (
    <div className={`h-[100px] py-[15px] cursor-pointer px-[24px] bg-black rounded-md hover:border-iris-red border-transparent border-[2px] `}>
      <div className="flex justify-center items-center flex-col">
        <p className="text-[13px] text-[#8E8B8F] whitespace-nowrap">{subText} </p>
        <h2 className="whitespace-nowrap ">{mainText}</h2>
        <p className="text-[13px] text-[#8E8B8F] whitespace-nowrap">{rating}%</p>
      </div>
    </div>
  );
}
