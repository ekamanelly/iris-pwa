import Image from "next/image";

interface ITitle {
  LeadingImage?: React.ReactChild;
  Title?: React.ReactChild;
  TrailingImage?: React.ReactChild;
  isOpen?:boolean;
  toggleOpen?: () => void;
}

export function AccordionHeader({
  LeadingImage,
  Title,
  TrailingImage,
  isOpen,
  toggleOpen
}: 
ITitle) {
  return (
    <div onClick={toggleOpen} className="flex justify-between items-center md:pb-[27px] pb-[15px] ">
      <div className="flex items-center">
        <div className="w-[13.9px] h-[13.5px] mr-[10px] ">{LeadingImage}</div>
        {Title}
      </div>
      <div>
        <div
          className={`transform transition-transform w-[13.9px] h-[13.5px] ${
            isOpen && "rotate-180"
          }  `}
        >
          {TrailingImage}
        </div>
      </div>
    </div>
  );
}

