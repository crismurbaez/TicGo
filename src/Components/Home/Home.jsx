import React from "react";
import { useState, useEffect } from "react";
import BorderDotted from "../Decorations/BorderDotted";
import MousePlay from "../MousePlay/MousePlay";



const Home = () => {

    return (
        <div id='home' className=" mt-16 ml-0 w-full md:w-2/3 lg:w-2/3 bg-orange-100 min-h-screen max-h-full">
            <div className=" bg-[#dfbc91]">
                <div className=" mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className=" text-5xl tracking-normal font-bold text-orange-100">
                        Inicio
                    </h1>
                </div>
                {/* decoración*/}
                <BorderDotted />
            </div>
            <MousePlay />
        </div >
    )
};

export default Home;