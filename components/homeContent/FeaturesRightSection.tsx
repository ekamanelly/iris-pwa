import Image from "next/image";
import { featureList } from "../../constants/featureslist";
import { FeatureCard } from "./FeatureCard";

import arrowImage from "../../assets/image/arrow.png";
import fourCircleImage from "../../assets/image/fourCircle.png";
import FeatureTittle from "./FeatureTittle";
import { FeaturesBoard } from "./FeatureBoard";
import { useState } from "react";

export function FeaturesRightSection() {
  const [active, setActive] = useState(0);
  return (
    <FeaturesBoard>
      <div className="pb-[48px]">
        <div className="max-w-[511px] h-[320px] mt-[24px] overflow-y-auto ">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-[10px] gap-x-[8px] ">
            {featureList.map((feature, idx) =>
              active === idx ? (
                <FeatureCard {...{ ...feature, active: true }} />
              ) : (
                <FeatureCard {...feature} />
              )
            )}
          </div>
        </div>
      </div>
    </FeaturesBoard>
  );
}
