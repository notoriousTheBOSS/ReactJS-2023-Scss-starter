import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="mt-[131px] h-[600px] text-center flex items-center flex-col justify-center">
            <h1 className="text-[60px]">Oops! You seem to be lost.</h1>
            <p className="text-[30px] mb-[30px]">
                Here are some helpful links:
            </p>
            <div className="flex items-center justify-center gap-10">
                <Link to="/">
                    <button className="px-[20px] py-[10px] rounded-md bg-[black] hover:bg-[#595CFF] text-white">
                        Home
                    </button>
                </Link>
                <Link to="/flowers">
                    <button className="px-[20px] py-[10px] rounded-md bg-[black] hover:bg-[#595CFF]  text-white">
                        Flowers
                    </button>
                </Link>
                <Link to="/plants">
                    <button className="px-[20px] py-[10px] rounded-md bg-[black] hover:bg-[#595CFF]  text-white">
                        Plants
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
