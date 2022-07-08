import { FeaturesLeftSection } from "./FeaturesLeftSection";
import { FeaturesRightSection } from "./FeaturesRightSection";
import { FeaturesBoard } from "./FeatureBoard";

export function Features({ children }: any) {
  return (
    <div className="xl:pl-[113px] xl:pr-[135px] lg:pl-[63px] lg:pr-[85px] md:pl-[13px] md:pr-[13px] px-[36px]  text-white">
      <div className="grid md:grid-cols-2 lg:gap-x-[28px] lg:gap-y-[28px] md:gap-x-[8px] md:gap-y-[8px] gap-y-[28px]  ">
          <FeaturesLeftSection />
        <div className="">
          <div className="mb-[24px]">
          <FeaturesRightSection />

          </div>
          <FeaturesBoard />
        </div>
      </div>
    </div>
  );
}
