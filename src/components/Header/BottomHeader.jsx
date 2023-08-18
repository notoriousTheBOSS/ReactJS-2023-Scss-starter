import React from "react";
import { NavLink } from "react-router-dom";

const BottomHeader = () => {
    return (
        <nav className="h-[79.64px] flex items-center justify-center">
            <ul className="flex gap-x-[67px]">
                <li className="font-[Regular] text-[#000]">
                    <NavLink to="/flowers">Flowers</NavLink>
                </li>
                <li className="font-[Regular]">
                    <NavLink to="/plants">Plants</NavLink>
                </li>
                <li className="font-[Regular]">
                    <NavLink to="/gifts">Gifts</NavLink>
                </li>
                <li className="font-[Regular]">
                    <NavLink to="/discounts">Discounts</NavLink>
                </li>
                <li className="font-[Regular]">
                    <NavLink to="/about">About us</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default BottomHeader;
