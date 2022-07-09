import {v4 as UUID} from 'uuid'
import Image from "next/image";

interface ISlider {
  images:string[]
  children?:React.ReactNode
}

export function Slider({images,children}: ISlider) {
  return (
    <div className="flex justify-center pt-[42px] mb-[81px] md:px-5">
      <div className="w-full  relative">
        <div className=" h-60 absolute inset-0 flex justify-center">
          <div className=" transform translate-y-[169px] z-10 w-[149px] h-[149px]">
            {children }
          </div>
        </div>
        <div className="flex w-full overflow-x-auto container-snap">
          <div className="flex">
            {images.map(image=>(<div className="w-[264px] h-[264px] cursor-pointer  " key={UUID()}>
            <Image
                layout="responsive"
                width={200}
                height={200}
                src={image}
              />
            </div>))}
          </div>
        </div>
      </div>
    </div>
  );
}
