import Image from "next/image";

export function Button({icon, text}:any) {
    return ( 
        <div className="flex h-full w-full justify-center items-center">
            <div className="w-[17px] h-[16px] mr-[9px] " >
                <Image src={icon} layout='responsive'/>
            </div>
            <button>
                {text}
            </button>
        </div>
     );
}
