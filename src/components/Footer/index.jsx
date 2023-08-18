import "./style.scss";
import instagram from "../../assets/icons/instagram.svg";
import whatsup from "../../assets/icons/whatsup.svg";
import facebooksvg from "../../assets/icons/facebooksvg.svg";

const index = () => {
    return (
        <footer className="bg-[#F9F9FB]">
            <div className="container">
                <div className="h-[356px] pt-[58px]">
                    <div className="top h-[228px] border-b border-b-[#AFB1BD] border-opacity-[0.199] flex">
                        <div className="one mr-[231px]">
                            <h1 className="font-[Regular]">Title</h1>
                            <p className="mt-[18px] mb-[17px] text-[12px] font-[Medium]">
                                +998991234567
                            </p>
                            <div className="flex gap-[20px] items-center justify-between max-w-[112px]">
                                <img src={instagram} />
                                <img src={whatsup} />
                                <img src={facebooksvg} />
                            </div>
                        </div>
                        <div className="two mr-[171px]">
                            <ul className="flex flex-col gap-y-3">
                                <h1 className="font-[Regular]">Help</h1>
                                <li className="font-[Medium]">
                                    <a href="#">Contact us</a>
                                </li>
                                <li className="font-[Medium]">
                                    <a href="#">Delivery information</a>
                                </li>
                                <li className="font-[Medium]">
                                    <a href="#">Payment information</a>
                                </li>
                                <li className="font-[Medium]">
                                    <a href="#">Customer service</a>
                                </li>
                                <li className="font-[Medium]">
                                    <a href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="three mr-[232px]">
                            <ul className="flex flex-col gap-y-3">
                                <h1 className="font-[Regular]">About us</h1>
                                <li className="font-[Medium]">
                                    <a href="#">Our Stores</a>
                                </li>
                                <li className="font-[Medium]">
                                    <a href="#">Flower care</a>
                                </li>
                                <li className="font-[Medium]">
                                    <a href="#">Site map</a>
                                </li>
                            </ul>
                        </div>
                        <div className="four">
                            <ul className="flex flex-col gap-y-3">
                                <h1 className="font-[Regular]">Legal</h1>
                                <li className="font-[Medium]">
                                    <a href="#">Privacy policy</a>
                                </li>
                                <li className="font-[Medium]">
                                    <a href="#">Terms & Conditions</a>
                                </li>
                                <li className="font-[Medium]">
                                    <a href="#">Cookie policy</a>
                                </li>
                                <li className="font-[Medium]">
                                    <a href="#">Item 4</a>
                                </li>
                                <li className="font-[Medium]">
                                    <a href="#">Item 5</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="mt-[20px] font-[Regular] text-[12px] text-[#AFB1BD]">
                        © Copyright, SERIUS{" "}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default index;
