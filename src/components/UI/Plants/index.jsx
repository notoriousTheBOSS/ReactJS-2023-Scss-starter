import { React, useState } from "react";
import PlantsCard from "./../PlantsCard";
import data from "../../../database";
import { Button, Dropdown, Breadcrumb } from "antd";
import dropdown from "../../../assets/icons/dropdown.svg";

const items = [
    {
        key: "1",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
            >
                1st menu item
            </a>
        ),
    },
    {
        key: "2",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.com"
            >
                2nd menu item
            </a>
        ),
    },
    {
        key: "3",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.luohanacademy.com"
            >
                3rd menu item
            </a>
        ),
    },
];

const index = () => {
    const { allPlants } = data;
    const [splice, setSplice] = useState(false);

    return (
        <div>
            <div className="container">
                <div className="wrapper w-full mt-[142px]">
                    <Breadcrumb
                        className="mb-[20.14px] h-[51px] flex items-center"
                        routes={[
                            {
                                href: "/",
                                breadcrumbName: "Home",
                            },
                            {
                                href: "/plants",
                                breadcrumbName: "Plants",
                            },
                        ]}
                    />
                    <div className="top flex items-center justify-between">
                        <h1 className="text-[32px] font-[Medium] mb-[40px]">
                            All Plants
                        </h1>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="dropdown flex items-center gap-20">
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                placement="bottom"
                            >
                                <Button className="p-0 border-none flex gap-[14px] items-center">
                                    <p className="text-[14px] font-[Regular]">
                                        Sort by
                                    </p>
                                    <img src={dropdown} alt="" />
                                </Button>
                            </Dropdown>
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                placement="bottom"
                            >
                                <Button className="p-0 border-none flex gap-[14px] items-center">
                                    <p className="text-[14px] font-[Regular]">
                                        Color
                                    </p>
                                    <img src={dropdown} alt="" />
                                </Button>
                            </Dropdown>
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                placement="bottom"
                            >
                                <Button className="p-0 border-none flex gap-[14px] items-center">
                                    <p className="text-[14px] font-[Regular]">
                                        Price
                                    </p>
                                    <img src={dropdown} alt="" />
                                </Button>
                            </Dropdown>
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                placement="bottom"
                            >
                                <Button className="p-0 border-none flex gap-[14px] items-center">
                                    <p className="text-[14px] font-[Regular]">
                                        Flower type
                                    </p>
                                    <img src={dropdown} alt="" />
                                </Button>
                            </Dropdown>
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                placement="bottom"
                            >
                                <Button className="p-0 border-none flex gap-[14px] items-center">
                                    <p className="text-[14px] font-[Regular]">
                                        Occasion
                                    </p>
                                    <img src={dropdown} alt="" />
                                </Button>
                            </Dropdown>
                        </div>
                        <div className="flex gap-1">
                            <p>{allPlants.length} </p>
                            <p>items</p>
                        </div>
                    </div>
                    <hr className="mt-[20px]" />
                    <div className="flex gap-10 mt-[40px] flex-wrap">
                        {splice
                            ? allPlants.map((flowers, index) => {
                                  return (
                                      <PlantsCard state={flowers} key={index} />
                                  );
                              })
                            : allPlants.slice(0, 8).map((flowers, index) => {
                                  return (
                                      <PlantsCard state={flowers} key={index} />
                                  );
                              })}
                    </div>
                    <div className="w-[100%] text-center">
                        <button
                            onClick={() => setSplice(!splice)}
                            className="hover:bg-[#595CFF] w-[223px] h-[46px] mb-[100px] mt-[40px] text-[14px] font-[Medium] text-center text-white bg-[#000000] rounded-md"
                        >
                            {!splice ? "See more" : "See less"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
