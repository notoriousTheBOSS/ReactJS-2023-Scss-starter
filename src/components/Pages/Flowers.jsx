import React from "react";
import Home from "../UI/Home";
import Hero from "../Layout/Hero";
import Relevant from "../UI/Relevant";

const Flowers = () => {
    return (
        <>
            <Hero />
            <div className="mt-[47px] mb-[93px]">
                <Home />
            </div>
            <Relevant />
        </>
    );
};

export default Flowers;
