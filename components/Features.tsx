import Image from "next/image";
import fourCircleImage from "../assets/image/fourCircle.png";

export function Features({ children }: any) {
  return (
    <div className="pl-[113px] pr-[135px]  bg-black ">
      <div className="p-[27px] bg-red-500 flex justify-between ">
        <div className="w-[591px] h-[344px] mr-[19px] pt-[31px] pl-[29px] pr-[25px] bg-red-700">
          <div className="flex justify-between items-center mb-[23px]">
            <div className="flex items-center">
              <div className="w-[13.9px] h-[13.5px] mr-[10px] ">
                <Image src={fourCircleImage} layout="responsive" />
              </div>
              <p>Lorem</p>
            </div>
            <div>
              <div className="w-[13.9px] h-[13.5px]">
                <Image src={fourCircleImage} />
              </div>
            </div>
          </div>
          <div className="h-[109px] w-[471px]">
            <div className="mb-[42px]">
              <p className=" text-[14px] text-white font-normal ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur
              </p>
            </div>
            <div className="flex ">
                <div className="flex">one</div>
                <div className="flex">one</div>
                <div className="flex">one</div>
                <div className="flex">one</div>
            </div>
          </div>
        </div>
        <div className="w-[591px] h-[438px] bg-red-900">right</div>
      </div>

      {/* {Children.LeftChild}
            {Children.RightChild} */}
    </div>
  );
}
