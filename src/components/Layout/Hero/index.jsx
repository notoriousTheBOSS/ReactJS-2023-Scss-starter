import rightarrow from "../../../assets/icons/rightarrow.svg";
import blackRightArrow from "../../../assets/icons/blackRightArrow.svg";
import "./style.scss";
import { Carousel } from "antd";
const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};
const index = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <section>
            <div className="container">
                <div className="wrapper overflow-hidden relative flex flex-col gap-10 mt-[172px]">
                    <Carousel autoplay afterChange={onChange}>
                        <div>
                            <div className="bg-image flex flex-col">
                                <h1 className="font-[RMedium] text-[28px] mt-[-7px] mb-[-7px]">
                                    40% OFF
                                </h1>
                                <p className="font-[Medium] text-[18px] pb-[24px] pt-[10px] mt-[-3px] mb-[-2px]">
                                    Best deals this week. Fresh flowers, plants
                                    and gifts
                                </p>
                                <button className="w-[138px] h-[50px] bg-[#000000] hover:bg-[#595CFF] flex items-center justify-center gap-x-[12px] rounded-md">
                                    <p className="text-white font-[Medium] text-[14px]">
                                        Shop now
                                    </p>
                                    <img src={rightarrow} alt="" />
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="bg-image flex flex-col">
                                <h1 className="font-[RMedium] text-[28px] mt-[-7px] mb-[-7px]">
                                    40% OFF
                                </h1>
                                <p className="font-[Medium] text-[18px] pb-[24px] pt-[10px] mt-[-3px] mb-[-2px]">
                                    Best deals this week. Fresh flowers, plants
                                    and gifts
                                </p>
                                <button className="w-[138px] h-[50px] bg-[#000000] hover:bg-[#595CFF] flex items-center justify-center gap-x-[12px] rounded-md">
                                    <p className="text-white font-[Medium] text-[14px]">
                                        Shop now
                                    </p>
                                    <img src={rightarrow} alt="" />
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="bg-image flex flex-col">
                                <h1 className="font-[RMedium] text-[28px] mt-[-7px] mb-[-7px]">
                                    40% OFF
                                </h1>
                                <p className="font-[Medium] text-[18px] pb-[24px] pt-[10px] mt-[-3px] mb-[-2px]">
                                    Best deals this week. Fresh flowers, plants
                                    and gifts
                                </p>
                                <button className="w-[138px] h-[50px] bg-[#000000] hover:bg-[#595CFF] flex items-center justify-center gap-x-[12px] rounded-md">
                                    <p className="text-white font-[Medium] text-[14px]">
                                        Shop now
                                    </p>
                                    <img src={rightarrow} alt="" />
                                </button>
                            </div>
                        </div>
                        <div>
                            <h3 style={contentStyle}>
                                <div className="bg-image flex flex-col">
                                    <h1 className="font-[RMedium] text-[28px] mt-[-7px] mb-[-7px]">
                                        40% OFF
                                    </h1>
                                    <p className="font-[Medium] text-[18px] pb-[24px] pt-[10px] mt-[-3px] mb-[-2px]">
                                        Best deals this week. Fresh flowers,
                                        plants and gifts
                                    </p>
                                    <button className="w-[138px] h-[50px] bg-[#000000] hover:bg-[#595CFF] flex items-center justify-center gap-x-[12px] rounded-md">
                                        <p className="text-white font-[Medium] text-[14px]">
                                            Shop now
                                        </p>
                                        <img src={rightarrow} alt="" />
                                    </button>
                                </div>
                            </h3>
                        </div>
                    </Carousel>

                    <div className="flex gap-10">
                        <div className="left-wrapper">
                            <h1 className="font-[RMedium] text-[28px] mt-[-7px] mb-[-7px]">
                                Nice little gifts
                            </h1>
                            <p className="text-[18px] font-[Medium] pb-[24px] pt-[10px] mb-[-3px] mt-[-2px]">
                                for loved ones
                            </p>
                            <button className="flex gap-[12px] items-center justify-center hover:scale-110">
                                <p className="text-[14px] font-[Medium]">
                                    View now
                                </p>
                                <img src={blackRightArrow} />
                            </button>
                        </div>
                        <div className="right-wrapper">
                            <h1 className="font-[RMedium] text-[28px] mt-[-7px] mb-[-7px]">
                                Plants
                            </h1>
                            <p className="text-[18px] font-[Medium] pb-[24px] pt-[10px] mb-[-3px] mt-[-2px]">
                                for home comfort
                            </p>
                            <button className="flex gap-[12px] items-center justify-center hover:scale-110">
                                <p className="text-[14px] font-[Medium]">
                                    View now
                                </p>
                                <img src={blackRightArrow} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;
