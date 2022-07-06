import {v4 as UUID} from "uuid"
import { NavItem } from "./NavItem";






export function Nav({items, }:any) {
    return ( 
        <div className="w-[232px] md:flex justify-between ">
         {   items &&
          items.map((item:any, idx:number) =>
          idx === 0 ? (
                <NavItem {...{ ...item, extraStyle: "mr-[53px] bg-pink" }} />
              ) : (
                  <NavItem { ...item} key={UUID()} />
            )
          )}
        </div>
     );
}