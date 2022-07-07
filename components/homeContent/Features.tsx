import Image from "next/image";
import fourCircleImage from "../../assets/image/fourCircle.png";
import { featureList } from "../../constants/featureslist";
import { FeatureCard } from "../homeContent/FeatureCard";
import arrowImage from '../../assets/image/arrow.png'
import { FeaturesLeftSection } from "./FeaturesLeftSection";
import {FeaturesRightSection} from "./FeaturesRightSection";

export function Features({ children }: any) {
  return (
    <div className="pl-[113px] pr-[135px] ">
      <div className="p-[27px]  flex justify-between ">
      <FeaturesLeftSection/>
      <FeaturesRightSection/>

      </div>
    </div>
  );
}
