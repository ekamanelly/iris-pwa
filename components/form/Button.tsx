import Image from "next/image";

export function Button({ children, text, extraStyle }: any) {
  return (
    <div
      className={`flex h-full w-full justify-center items-center rounded-md ${extraStyle}`}
    >
      {children && (
        <div className=" transform -translate-y-[3px] w-[17px] h-[16px] mr-[9px]  ">{children}</div>
      )}
      <button>{text}</button>
    </div>
  );
}
