import Image from "next/image";
import grp1 from "@/app/assets/Group.png"
import grp2 from "@/app/assets/zara-logo-1 1.png"
import grp3 from "@/app/assets/gucci-logo-1 1.png"
import grp4 from "@/app/assets/prada-logo-1 1.png"
import grp5 from "@/app/assets/Group (1).png"



export default function Two(){
    return(
        <main>
            <div className=" sm:hidden lg:block w-[1440px] h-[122px] absolute top-[797px] bg-black flex items-center">
                <Image className=" w-[166.48px] h-[33.16px] absolute top-[44px] left-[100px]" src={grp1} alt="brand1"></Image>
                <Image className="w-[91px] h-[38px] absolute top-[42px] left-[372.48px]" src={grp2} alt="brand2"></Image>
                <Image className="w-[156px] h-[36px] absolute top-[43px] left-[569.48px]" src={grp3} alt="brand3"></Image>
                <Image className="w-[194px] h-[32px] absolute top-[45px] left-[831.48px]" src={grp4} alt="brand4"></Image>
                <Image className="w-[206.79px] h-[33.35px] absolute top-[44px] left-[1131.48px]" src={grp5} alt="brand4"></Image>
            </div>
            <div className="sm:block lg:hidden sm:bg-black sm:w-[390px] sm:h-[146px] ">

            </div>
            
        </main>
        
    )
}



