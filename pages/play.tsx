import { Fragment, useState } from "react";

export function Play(props: any) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className={`transform transition-all w-full h-[57px] ${
        !open ? "bg-black h-[57px]" : "bg-amber-700 accordion-h"
      }`}
    >
      {open && (
        <Fragment>
          <div className="db">d</div>
          <div className="db">sd</div>
          <div className="db">sd</div>
          <div className="db">ssd</div>
          <div className="db">d</div>
          <div className="db">sd</div>
          <div className="db">sd</div>
          <div className="db">ssd</div>
          <div className="db">d</div>
          <div className="db">sd</div>
          <div className="db">sd</div>
          <div className="db">ssd</div>
        </Fragment>
      )}
    </div>
  );
}

export default Play;
