import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";
import "./style.scss";
const index = () => {
    return (
        <header className="w-full bg-white fixed h-[131.5px] z-50 top-0">
            <div className="container">
                <div>
                    <TopHeader />
                    <BottomHeader />
                </div>
            </div>
        </header>
    );
};

export default index;
