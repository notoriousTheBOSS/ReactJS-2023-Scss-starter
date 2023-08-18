import React from "react";
import { useState } from "react";
import data from "../../../database";
import bouqet from "../../../assets/icons/bouqet.svg";
import benefits from "../../../assets/icons/benefits.svg";
import freshflowers from "../../../assets/icons/freshflowers.svg";
import plus from "../../../assets/icons/plus.svg";
import minus from "../../../assets/icons/minus.svg";
import shop from "../../../assets/icons/shop.svg";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "antd";

const Dynamic = () => {
    const { id } = useParams();
    const [counter, setCounter] = useState(0);
    const [accordion1, setAccordion1] = useState(false);
    const [accordion2, setAccordion2] = useState(false);
    const [accordion3, setAccordion3] = useState(false);
    function btn1() {
        const greyBtn = document.querySelector(".greyBtn");

        greyBtn.classList.add(
            "outline",
            "outline-[#595CFF]",
            "scale-[0.8]",
            "outline-offset-2"
        );
    }
    function btn2() {
        const redBtn = document.querySelector(".redBtn");

        redBtn.classList.add(
            "outline",
            "outline-[#595CFF]",
            "scale-[0.8]",
            "outline-offset-2"
        );
    }
    function btn3() {
        const orangeBtn = document.querySelector(".orangeBtn");

        orangeBtn.classList.add(
            "outline",
            "outline-[#595CFF]",
            "scale-[0.8]",
            "outline-offset-2"
        );
    }

    const { newFlowers, relevantFlowers, allPlants } = data;
    const dbarray = [...newFlowers, ...relevantFlowers, ...allPlants];
    const product = dbarray.find((product) => product.id == id);
    const { image, title, price, previousPrice } = product;

    return (
        <div className="container">
            <div className="mt-[142px]">
                <Breadcrumb
                    className="mb-[26px] h-[51px] flex items-center"
                    routes={[
                        {
                            href: "/",
                            breadcrumbName: "Home",
                        },
                        {
                            href: "/flowers",
                            breadcrumbName: "All Flowers",
                        },
                        {
                            href: "",
                            breadcrumbName: `${product.title}`,
                        },
                    ]}
                />
            </div>
            <div className="flex mb-[160px]">
                <div className="left flex flex-col mr-[72px]  min-w-[568px]">
                    <img className="w-[568px] h-[568px]" src={image} alt="" />
                    <div className="icons flex items-center justify-center max-w-[506px] gap-[40px] mt-[20px]">
                        <div className="max-w-[142px] flex items-center justify-center gap-[10px]">
                            <img src={benefits} alt="" />
                            <p className="text-[12px] font-[Regular]">
                                Benefits description
                            </p>
                        </div>
                        <div className="max-w-[142px] flex items-center justify-center gap-[10px]">
                            <img src={freshflowers} alt="" />
                            <p className="text-[12px] font-[Regular]">
                                Always fresh flowers{" "}
                            </p>
                        </div>
                        <div className="max-w-[142px] flex items-center justify-center gap-[10px]">
                            <img src={bouqet} alt="" />
                            <p className="text-[12px] font-[Regular]">
                                Take photo of bouquet{" "}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="right w-full">
                    <div>
                        <h1 className="text-[24px] font-[Medium] mt-[-4px] mb-[-4px] pb-[20px]">
                            {title}
                        </h1>
                        <div className="flex gap-[20px] h-[28px]">
                            <p className="text-[28px] font-[Medium] mt-[-7px] mb-[-7px]">
                                {price}
                            </p>
                            <p className="text-[18px] font-[Medium] text-[#82828B] line-through mt-[4px]">
                                {previousPrice}
                            </p>
                        </div>
                    </div>
                    <hr className="mt-[15px] mb-[40px]" />
                    <div className="mb-[38px]">
                        <h3 className="font-[Regular]">Count:</h3>
                        <div className="flex mt-[24.5px] gap-[5px]">
                            <button
                                onClick={() => setCounter(counter + 1)}
                                className="w-[24px] h-[24px] bg-[#F0F0F5] rounded-full flex items-center justify-center"
                            >
                                <img src={plus} alt="" />
                            </button>
                            <p className="w-[49px] flex items-center justify-center text-[14px] font-[Medium]">
                                {counter}
                            </p>
                            <button
                                onClick={() =>
                                    setCounter(
                                        counter > 0 ? counter - 1 : counter
                                    )
                                }
                                className="w-[24px] h-[24px] bg-[#F0F0F5] rounded-full flex items-center justify-center"
                            >
                                <img src={minus} alt="" />
                            </button>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-[Regular]">Color:</h3>
                        <div className="flex gap-[19px] mt-[20px] mb-[54px]">
                            <div
                                onClick={btn1}
                                className="greyBtn w-[36px] h-[36px] rounded-full bg-[#F0F0F5]"
                            ></div>
                            <div
                                onClick={btn2}
                                className="redBtn w-[36px] h-[36px] rounded-full bg-[#EE7764]"
                            ></div>
                            <div
                                onClick={btn3}
                                className="orangeBtn w-[36px] h-[36px] rounded-full bg-[#FFBC2C]"
                            ></div>
                        </div>
                    </div>
                    <div className="flex gap-[20px] mb-[40px]">
                        <button className="bg-black hover:bg-[#595CFF] font-[Medium] text-[14px] w-[309px] h-[56px] flex items-center justify-center text-white rounded-md">
                            Button
                        </button>
                        <button className="border w-[56px] h-[56px] flex items-center justify-center rounded-md">
                            <img src={shop} alt="" />
                        </button>
                    </div>
                    <div>
                        <button className="flex  w-full flex-col items-center justify-between border-b-2">
                            <div
                                onClick={() => setAccordion1(!accordion1)}
                                className="title flex  w-full  items-center justify-between  h-[58px]"
                            >
                                <p className="font-[Regular] text-[14px]">
                                    Bouquet contents
                                </p>

                                <img src={!accordion1 ? plus : minus} alt="" />
                            </div>
                            {accordion1 ? (
                                <p className="flex text-left p-0 mb-[15px]">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nesciunt a autem placeat.
                                    Reprehenderit, beatae reiciendis.
                                    Repellendus ut recusandae sed numquam veniam
                                    exercitationem, earum molestiae aliquam.
                                </p>
                            ) : (
                                ""
                            )}
                        </button>
                        <button className="flex  w-full flex-col items-center justify-between border-b-2">
                            <div
                                onClick={() => setAccordion2(!accordion2)}
                                className="title flex  w-full  items-center justify-between  h-[58px]"
                            >
                                <p className="font-[Regular] text-[14px]">
                                    Details
                                </p>

                                <img src={!accordion2 ? plus : minus} alt="" />
                            </div>
                            {accordion2 ? (
                                <p className="flex text-left p-0 mb-[15px]">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nesciunt a autem placeat.
                                    Reprehenderit, beatae reiciendis.
                                    Repellendus ut recusandae sed numquam veniam
                                    exercitationem, earum molestiae aliquam.
                                </p>
                            ) : (
                                ""
                            )}
                        </button>
                        <button className="flex  w-full flex-col items-center justify-between border-b-2">
                            <div
                                onClick={() => setAccordion3(!accordion3)}
                                className="title flex  w-full  items-center justify-between  h-[58px]"
                            >
                                <p className="font-[Regular] text-[14px]">
                                    Delivery & Pay policy
                                </p>

                                <img src={!accordion3 ? plus : minus} alt="" />
                            </div>
                            {accordion3 ? (
                                <p className="flex text-left p-0 mb-[15px]">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nesciunt a autem placeat.
                                    Reprehenderit, beatae reiciendis.
                                    Repellendus ut recusandae sed numquam veniam
                                    exercitationem, earum molestiae aliquam.
                                </p>
                            ) : (
                                ""
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dynamic;
