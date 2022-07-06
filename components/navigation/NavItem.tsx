
export interface INavItem {
    text: "string";
    onClick : (e:any) => void;
    extraStyle?:string
}


export function NavItem({text,onClick, extraStyle, ...rest}:INavItem) {
    const classes = `text-[15px] text-white font-extrabold ${extraStyle}`

    return ( 
        <div onClick={onClick} className={classes} >
            <h4>{text}</h4>
        </div>

     );
}
