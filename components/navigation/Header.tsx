





export function Header({ children }: any) {
  const logo = children[0];
  const searchField = children[1];
  const navMenu = children[2];
  return (
    <div className="h-[96px] w-full bg-black flex items-center pl-[40px] pr-[38px] ">
      <div className="w-[195px] h-[23px] mr-[233px]">{logo}</div>
      <div className="w-[657px] h-[45px] mr-[41px] rounded-lg overflow-hidden">{searchField}</div>
      {navMenu}
    </div>
  );
}
