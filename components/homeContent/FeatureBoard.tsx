import Image from "next/image";
import { useState } from "react";
import arrowImage from "../../assets/image/arrow.png";
import fourCircleImage from "../../assets/image/fourCircle.png";
import FeatureTittle from "./FeatureTittle";

export function FeaturesBoard({ children, extraStyle }: any) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className={`transform transition-transform   pt-[31px] pl-[29px] pr-[25px] bg-iris-gray rounded-md h-max
      } ${extraStyle}`}
    >
      <FeatureTittle>
        {{
          LeadingImage: (
            <div className="w-[13.9px] h-[13.5px] mr-[10px] ">
              <Image src={fourCircleImage} layout="responsive" />
            </div>
          ),
          tittle: <p className="font-extrabold text-base">Lorem</p>,
          trailingImage: (
            <div
              className={`transform transition-transform w-[13.9px] h-[13.5px] ${
                open && "rotate-180"
              }  `}
            >
              <Image src={arrowImage} layout="responsive" />
            </div>
          ),
        }}
      </FeatureTittle>
      <div
        className={`transform transition-transform  ${
          open && "hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
