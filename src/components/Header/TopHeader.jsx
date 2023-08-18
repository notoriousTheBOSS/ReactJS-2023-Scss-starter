import location from "../../assets/icons/location.svg";
import search from "../../assets/icons/search.svg";
import shopcard from "../../assets/icons/shopcard.svg";

const TopHeader = () => {
    return (
        <nav className="flex items-center justify-between h-[51.858px]">
            <ul className="flex gap-[7px]">
                <img src={location} alt="" />
                <h2 className="font-[Medium] text-[14px] leading-[17px]">
                    Tashkent
                </h2>
            </ul>
            <ul className="flex gap-[20px]">
                <img src={search} alt="" />
                <img src={shopcard} alt="" />
            </ul>
        </nav>
    );
};

export default TopHeader;
