import React from "react";
import "./style.scss";
import rightarrow from "../../../assets/icons/rightarrow.svg";
import thinright from "../../../assets/icons/thinright.svg";
import thinleft from "../../../assets/icons/thinleft.svg";

const index = () => {
    return (
        <>
            <div className="container">
                <div className="backgroundimage relative mt-[172px]">
                    <div className="content pl-[100px] pt-[216px]">
                        <h3 className="text-[32px] font-[RMedium] mt-[-5px] mb-[-5px] cursor-pointer">
                            Title
                        </h3>
                        <p className="text-[18px] font-[Medium] mt-[-3px] mb-[-2px] pt-[20px] pb-[40px] cursor-pointer">
                            Description
                        </p>
                        <button className="w-[138px] h-[50px] flex bg-black hover:bg-[#595CFF] justify-center text-white rounded-md items-center gap-3">
                            <p className="font-[Medium] text-[14px]">Button</p>
                            <img src={rightarrow} alt="" />
                        </button>
                    </div>
                    <div className="arrows absolute flex gap-[19px] right-[48px] bottom-[40px]">
                        <img src={thinleft} alt="" />
                        <img src={thinright} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
