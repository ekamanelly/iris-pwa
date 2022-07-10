import React, { useState } from "react";

export function Accordion({ children, extraStyle }: any) {
  const AccordionHeader = children[0];
  const AccordionContent = children[1];
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  return (
    <div
      className={`transform transition-transform  pt-[1.69rem]  bg-iris-gray rounded-md
      } ${open ? "h-max" : "h-[4.75rem]"} ${extraStyle}`}
    >
      {React.cloneElement(AccordionHeader, { toggleOpen, isOpen: open })}
      {open && AccordionContent}
    </div>
  );
}
