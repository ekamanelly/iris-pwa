export function FeatureCard({ mainText, subText, rating, active }: any) {
  return (
    <div className={`h-[100px] py-[15px] px-[24px] bg-black rounded-md ${active} `}>
      <div className="flex justify-center items-center flex-col">
        <p className="text-[13px] text-[#8E8B8F]">{subText} </p>
        <h2>{mainText}</h2>
        <p className="text-[13px] text-[#8E8B8F]">{rating}%</p>
      </div>
    </div>
  );
}
