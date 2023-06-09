import React from "react";
import BorderDotted from "../Decorations/BorderDotted";


const Aside = () => {
    return (
        <div className="w-full m-0 md:w-1/3 lg:w-1/3 md:mt-16 lg:mt-16  bg-orange-100 text-white shadow-2xl min-h-screen max-h-full">
            <div className=" bg-[#dfbc91] w-full ">
                <div className=" mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <div className=" text-5xl tracking-normal font-bold h-12 text-gray-400">
                        {/* Put As-sense */}
                    </div>
                </div>
                {/* decoration border-dotted*/}
                <BorderDotted />
            </div>
            <div className="flex flex-col items-center">
                {/* diamond top */}
                <div className="translate-y-10 ml-2 mr-2 rotate-45 bg-[#c5c2c2] w-[65px] h-[65px]  border-solid border-orange-100 border-8">
                </div>
                {/* gray container aside */}
                <div className=" flex flex-col items-center mx-10 mb-0 bg-[#c5c2c2] py-16 px-5 rounded-b-full">
                    <div className="flex flex-row md:flex-col lg:flex-row justify-center items-center">
                        {/* container for the avatars */}
                        <div className="flex ">
                            <div className="m-2 md:m-1 lg:m-2 relative rounded-full">
                                <img className="w-40 rounded-full border-orange-100 border-8" src="/images/clau.jpeg" alt="" />
                                <span className="absolute -top-20 left-0 right-0 bottom-0 flex justify-center items-center font-bold text-orange-100 text-lg md:text-sm lg:text-lg opacity-0 bg-[#797777] rounded-full bg-opacity-100 hover:bg-opacity-60 hover:opacity-100 hover:translate-y-20 transition duration-500 ease-in-out text-center">Claudia Da Rosa <br /> . <br />  Profesora de 1 y 2 ciclo de la EGB</span>
                            </div>
                            <div className="m-2 md:m-1 lg:m-2 relative rounded-full">
                                <img className="w-40 rounded-full border-orange-100 border-8" src="/images/cris.jpeg" alt="" />
                                <span className="absolute -top-20 left-0 right-0 bottom-0 flex justify-center items-center font-bold text-orange-100 text-lg md:text-sm lg:text-lg opacity-0 bg-[#797777] rounded-full bg-opacity-100 hover:bg-opacity-60 hover:opacity-100 hover:translate-y-20 transition duration-500 ease-in-out text-center">Cristina Murguía <br /> . <br /> Profesora de Matemática <br /> Full Stack Web Developer</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 font-bold text-2xl text-center">Apasionadas por la educación de calidad</div>
                    {/* decoration with images */}
                    <div className=" mt-10">
                        <span>   <img className=" inline-block w-8" src="/images/pasto2.png" alt="" /></span>
                        <span>   <img className=" inline-block w-8" src="/images/piedra1.png" alt="" /></span>
                        <span>   <img className=" inline-block w-8" src="/images/pasto1.png" alt="" /></span>
                        <span>   <img className=" inline-block w-8" src="/images/piedra2.png" alt="" /></span>
                    </div>
                </div>
            </div>

            <div>
            </div>
        </div>
    )
};


export default Aside;

