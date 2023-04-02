import React, { useState } from "react";

const Mouse = () => {

    return (
        <div
        >
            <div >
                <div className="flex flex-row items-end ">

                    <div className="w-[15px] h-[10px] bg-[#b88d58] rounded-t-full hover:rotate-45 hover:-translate-y-3 hover:translate-x-1 transition duration-500 ease-in-out">
                        <div className="w-2 h-2 bg-[#b88d58] rounded-full translate-x-2 -translate-y-1"></div> {/* oreja */}
                        <div className="w-1 h-1 bg-black rounded-full translate-x-1 -translate-y-1"></div> {/* ojo */}
                        <div className="w-1 h-1 bg-black rounded-full -translate-x-1 -translate-y-2 -rotate-90"></div> {/* bigote de arriba */}
                        <div className="w-1 h-2 bg-black rounded-full -translate-x-1 -translate-y-3 rotate-45 "></div> {/* bigote de abajo */}
                    </div> {/* cabeza */}

                    <div className="w-[35px] h-[20px] bg-[#b88d58] rounded-t-full"></div> {/* cuerpo */}

                    <div className="w-[15px] hover:border-t-transparent hover:border-l-transparent hover:border-r-transparent   hover:w-[30px]  hover:rounded-b-full  hover:-translate-x-2 hover:-translate-y-1 hover:-rotate-3 hover:border-b-[#b88d58] h-[15px] border-4 border-b-transparent
                     border-[#b88d58] bg-transparent rounded-t-full rotate-45 translate-y-2 -translate-x-1
                      transition duration-300 ease-in-out">
                    </div> {/* cola */}
                </div>
            </div>
        </div >
    );
};
export default Mouse;