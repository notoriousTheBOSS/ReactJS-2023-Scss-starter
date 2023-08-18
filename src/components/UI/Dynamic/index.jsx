import React from "react";
import "./style.scss";
import Dynamic from "./Dynamic";
import Cards from "../Cards";
import data from "../../../database";
import thinleft from "../../../assets/icons/thinleft.svg";
import thinright from "../../../assets/icons/thinright.svg";

const index = () => {
    const { newFlowers } = data;
    return (
        <div>
            <Dynamic />
            <div className="mb-[100px]">
                <div className="container">
                    <div className="wrapper">
                        <div className="top flex items-center justify-between">
                            <h1 className="text-[24px] font-[Medium] ">
                                Similar flowers
                            </h1>
                            <div className="arrows flex items-center gap-[19px] mr-[92px]">
                                <img src={thinleft} alt="" />
                                <img src={thinright} alt="" />
                            </div>
                        </div>
                        <div className="flex gap-10 mt-[44px] overflow-hidden">
                            {newFlowers.map((flowers, index) => {
                                return <Cards state={flowers} key={index} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
