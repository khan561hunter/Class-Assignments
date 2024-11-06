import Link from "next/link";
import React from "react";
import '@fontsource/montserrat';





export default function Navbar(){
    return(
        <main id="home" className=" w-[1440px] h-[1132px] bg-[#252B42] left-[-720px] top-[-590px]">
           
            <div className=" w-1332 h-91 left-[59px]  ">
                
                    <Link href="/">
                    <div  id="navbar-nav" className="w-[187px] h-[58px] py-[17px] px-[136px] ">
                        <div id="BrandName" className="w-[152px] h-[32px] my-[13px] ">
                            <div className="text-white font-bold text-2xl relative flex tracking-[0.1px]  ">
                                <h3>BrandName</h3>
                            </div>
                        </div>
                    </div></Link>
                
                <nav id="collapse navbar-collapse" className="w-[815px] h-[58px] py-[16px] px-[364px] px-[25%] my-[-3.5%]">
                    <div id="navbar-nav" className="w-[275px] h-[24px] py-[17px]  ">
                        <ul className=" font-bold gap-[21px] text-sm tracking-[0.2px] flex items-center font-sans  ">
                            <li>
                                <Link href="/"><div className=" text-white w-[43px] h-[24px]">Home</div></Link><br/>
                            </li>
                            <li>
                                <Link href="/product"><div className="text-white w-[59px] h-[24px] ">Product</div></Link><br/>
                            </li>
                            <li>
                                <Link href="/contact"><div className="text-white w-[52px] h-[24px] ">Contact</div></Link><br/>
                            </li>
                            <li>
                                <Link href="/pricing"><div className="text-white w-[58px] h-[24px] ">Pricing</div></Link><br/>
                            </li>
                        </ul>
                    </div>
                    <ul id="navbar-nav" className="w-[189px] h-[52px] top-[3px] px-[626px] gap-[45px] px-[50%] font-montserrat">
                        <li className="w-[41px] h-[22px] ">
                            <Link href="/login"></Link><div className="text-white font-bold text-[14px] leading-[22px] tracking-[0.2px] my-[-38%] ">
                                Login</div>
                        

                        </li>
                        <li id="nav-item" className="w-[214px] h-[52px] pt-[15px] pl-[25px] pr-[25px] pb-[15px] gap-[15px]">
                            <div className="w-[110px] h-[52px] bg-[#23A6F0] rounded-l-lg mx-14 my-[-51px] ">
                                <Link href="/join"><div className="text-white px-6 py-4 font-bold text-sm tracking-[0.2px]">
                                JOIN US

                                </div>
                                    </Link>
                            </div>
                            
                        </li>
                    </ul>
                    
                </nav>
                
                
                

                
            </div>

            <div id="container" className="w-[1046px] h-[1028px] py-[104px] px-[197px] pt-[80px] pb-[80px] gap-[80px]">
                <div id="row" className="w-[701px] h-[496px] pt-[40px] pb-[40px] gap-[40px] ">
                    <div className="w-[77px] h-[24px]  py-[5%] px-[420px] my-[8%]">
                        <h5 className="text-[#23A6F0] font-bold text-base tracking-[0.1px]">Welcome</h5>

                    </div>

                </div>
                <div className="w-[542px] h-[160px] mx-[30%] my-[-45%]">
                   
                    <h1 id="font" className="text-white text-[58px] leading-[80px] font-semibold text-center tracking-[0.2px]">Selling on the <br/><div className="text-nowrap"> internet like a pro</div></h1>
                </div>
                <div className="mx-[30%] my-[48%]"><div className="text-white font-normal w-[536px] h-[60px] text-center  text-xl leading-[30px] tracking-[0.2px]  ">
                   We know how large objects will act,but things on a <br/> small scale just do not act that way 
                </div></div>
                

                <div className="w-[365px] h-[52px] gap-[10px] my-[-40%] mx-[43%] ">
                    <div className=" bg-[#23A6F0] w-[193px] h-[52px] rounded-[5px]  pt-[15px] pr-[40px] pb-[15px] pl-[40px] gap-[10px] ">
                        <div className="w-[135px] h-[22px] text-white text-14px text-nowrap leading-[22px] tracking-[0.2px] text-center font-bold mx-[-10px]">
                            Get Qoute Now</div>
                    </div>
                    <div className="border border-customBlue w-[162px] h-[52px] border-1 rounded-[5px] border-solid pt-[15px] pb-[15px] pr-[40px] pl-[40px] mx-[56%] my-[-14.25%]">
                        <div className="w-[82px] h-[22px] text-[#23A6F0] font-bold text-center text-nowrap text-14 my-[-5%] flex justify-items mx-[-8%]">
                            
                            Learn More
                            
                        </div>

                    </div>
                </div>

            </div>
            <div className="w-[1046px] h-[292px] gap-[30px] mx-[10%] my-[-20%]">
                <div className=" bg-[#FFFFFF] w-[328px] h-[292px] pt-[35px] pr-[40px] pl-[40px] pb-[35px] gap-[20px] ">
                    <div className="w-[70px] h-[76px] pt-[22px] pr-[19px] pb-[22px] pl-[19px] gap-[10px] rounded-[10px] bg-[#FFDCD1]"></div>
                    <div className="w-[135px] h-[24px] ">
                        <h5 className="font-bold text-base tracking-[0.1px] text-nowrap my-[13%]">training courses</h5>
                    </div>
                    <div className="w-[50px] h-[2px] bg-[#E74040] my-[10%]"></div>
                    <div className="w-[222px] h-[60px] font-normal text-sm tracking-[0.2px] text-[#737373] ">
                        <div className="text-nowrap">The gradual accumulation of </div><div className="text-nowrap">information about atomic and</div> small-scale behaviour...

                    </div>

                </div>
                <div className=" bg-[#FFFFFF] w-[328px] h-[292px] pt-[35px] pr-[40px] pl-[40px] pb-[35px] gap-[20px] mx-[34.5%] my-[-27.9%] ">
                    <div className="w-[70px] h-[76px] pt-[22px] pr-[19px] pb-[22px] pl-[19px] gap-[10px] rounded-[10px] bg-[#B9EAA8]"></div>
                    <div className="w-[135px] h-[24px] ">
                        <h5 className="font-bold text-base tracking-[0.1px] text-nowrap my-[13%]">training courses</h5>
                    </div>
                    <div className="w-[50px] h-[2px] bg-[#E74040] my-[10%]"></div>
                    <div className="w-[222px] h-[60px] font-normal text-sm tracking-[0.2px] text-[#737373] ">
                        <div className="text-nowrap">The gradual accumulation of </div><div className="text-nowrap">information about atomic and</div> small-scale behaviour...

                    </div>

                </div>
                <div className=" bg-[#23A6F0] w-[328px] h-[292px] pt-[35px] pr-[40px] pl-[40px] pb-[35px] gap-[20px] mx-[69.1%] my-[-27.75%] ">
                    <div className="w-[70px] h-[76px] pt-[22px] pr-[19px] pb-[22px] pl-[19px] gap-[10px] rounded-[10px] bg-[#FFFFFF]"></div>
                    <div className="w-[135px] h-[24px] ">
                        <h5 className="font-bold text-base tracking-[0.1px] text-nowrap my-[13%] text-white">training courses</h5>
                    </div>
                    <div className="w-[50px] h-[2px] bg-[#FFFFFF] my-[10%]"></div>
                    <div className="w-[222px] h-[60px] font-normal text-sm tracking-[0.2px] text-[#FFFFFF] ">
                        <div className="text-nowrap">The gradual accumulation of </div><div className="text-nowrap">information about atomic and</div> small-scale behaviour...

                    </div>

                </div>

            </div>
        </main>

    )
}