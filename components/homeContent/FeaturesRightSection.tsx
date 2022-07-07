import Image from "next/image";
import { featureList } from "../../constants/featureslist";
import { FeatureCard } from "./FeatureCard";

import arrowImage from '../../assets/image/arrow.png'
import fourCircleImage from "../../assets/image/fourCircle.png";

export function FeaturesRightSection() {
    return ( 
        <div className="w-[591px] ">
        <div className="pt-[31px] pl-[29px] pr-[25px] pb-[48px]  bg-iris-gray rounded-md">
        <div className="flex justify-between items-center mb-[23px]">
           <div className="flex items-center">
             <div className="w-[13.9px] h-[13.5px] mr-[10px] ">
               <Image src={fourCircleImage} layout="responsive" />
             </div>
             <p>Lorem</p>
           </div>
           <div>
             <div className="w-[13.9px] h-[13.5px]">
               <Image src={arrowImage} />
             </div>
           </div>
         </div>
         <div className="w-[511px] h-[320px] overflow-y-auto">
           <div className="grid grid-cols-3 gap-y-[10px] gap-x-[8px] ">
             {featureList.map((feature) => (
               <FeatureCard {...feature} />
             ))}
           </div>
         </div>
        </div>
         <div className="mt-[24px] h-[75px] flex it pl-[29px] pr-[25px] bg-iris-gray rounded-md">
           <div className="w-full flex justify-between items-center">
             <div className="flex items-center">
               <div className="w-[13.9px] h-[13.5px] mr-[10px] ">
                 <Image src={fourCircleImage} layout="responsive" />
               </div>
               <p>Lorem</p>
             </div>
             <div>
               <div className="w-[13.9px] h-[13.5px]">
                 <Image src={arrowImage} />
               </div>
             </div>
           </div>
         </div>
       </div>
     );
}
