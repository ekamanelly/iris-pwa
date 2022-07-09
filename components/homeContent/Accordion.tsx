import React, { useState } from "react";

export function Accordion({ children, extraStyle }: any) {
  const AccordionHeader = children[0];
  const AccordionContent = children[1];
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  return (
    <div
      className={`transform transition-transform  pt-[31px] pl-[29px] pr-[25px] bg-iris-gray rounded-md h-max
      } ${extraStyle}`}
    >
      {React.cloneElement(AccordionHeader, { toggleOpen, isOpen:open})}

      <div className={`transform transition-transform  ${open && "hidden"}`}>
        {AccordionContent}
      </div>
    </div>
  );
}
