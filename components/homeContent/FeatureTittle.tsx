import Image from "next/image";

interface ITittle {
  children: {
    LeadingImage?: React.ReactChild;
    tittle?: React.ReactChild;
    trailingImage?: React.ReactChild;
  };
  onClick?: () => void;
}

export function FeatureTittle({ children, onClick }: ITittle) {
  return (
    <div className="flex justify-between items-center pb-[27px]">
      <div className="flex items-center">
        {children.LeadingImage}
        {children.tittle}
      </div>
      <div>{children.trailingImage}</div>
    </div>
  );
}

export default FeatureTittle;
