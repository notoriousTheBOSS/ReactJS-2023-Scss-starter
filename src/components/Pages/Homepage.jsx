import React from "react";
import Home from "../UI/Home";
import Relevant from "../UI/Relevant";
import Mainslider from "../UI/Mainslider";

const Homepage = () => {
    return (
        <>
            <Mainslider />
            <div className="mt-[79px] mb-[60px]">
                <Home />
            </div>
            <Relevant />
        </>
    );
};

export default Homepage;
