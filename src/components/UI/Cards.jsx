import React from "react";
import { Link } from "react-router-dom";
import boldright from "../../assets/icons/boldright.svg";
import hovershop from "../../assets/icons/hovershop.svg";
import hoversearch from "../../assets/icons/hoversearch.svg";

const Cards = ({ state: { image, title, price, previousPrice, id } }) => {
    return (
        <Link to={`/flowers/${id}`}>
            <div className="qanaqadirstrelka card w-[260px] h-[366px] hover:border-b-2 hover:shadow-2xl relative">
                <button className="qanaqadirbutton hidden absolute right-[16px] top-[235px] w-[46px] h-[46px] justify-center bg-[#595CFF] rounded-full items-center">
                    <img src={boldright} alt="" />
                </button>
                <div className="qanaqadirdiv hidden relative justify-center items-center gap-[30px] ">
                    <button className="w-[46px] h-[46px] absolute bg-white flex justify-center top-[199px] left-[69px] items-center rounded-md">
                        <img src={hovershop} alt="" />
                    </button>
                    <button className="w-[46px] h-[46px] absolute bg-white flex justify-center top-[199px] right-[69px] items-center rounded-md">
                        <img src={hoversearch} alt="" />
                    </button>
                </div>
                <img src={image} alt="img" />
                <div className="flex mt-[20px] text-center flex-col">
                    <h3 className="font-[Medium] text-[18px] mb-[8.5px]">
                        {title}
                    </h3>
                    <div className="flex gap-4 items-center justify-center">
                        <p className="text-[14px] font-[Medium]">{price}</p>
                        <p className="text-[14px] font-[Medium] text-[#82828B] line-through">
                            {previousPrice ? previousPrice : ""}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Cards;
