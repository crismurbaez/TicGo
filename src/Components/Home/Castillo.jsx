import React from "react";

const Castillo = () => {
    return (
        <div className="flex flex-row justify-center items-center w-full">
            <div>

                <div className="flex flex-row">      {/* borde superior típico de castillo */}
                    <div className="w-[20px] h-[20px] bg-slate-400"></div>
                    <div className="w-[20px] h-[20px] bg-orange-100"></div>
                    <div className="w-[20px] h-[20px] bg-slate-400"></div>
                    <div className="w-[20px] h-[20px] bg-orange-100"></div>
                    <div className="w-[20px] h-[20px] bg-slate-400"></div>
                    <div className="w-[20px] h-[20px] bg-orange-100"></div>
                    <div className="w-[20px] h-[20px] bg-slate-400"></div>
                    <div className="w-[20px] h-[20px] bg-orange-100"></div>
                    <div className="w-[20px] h-[20px] bg-slate-400"></div>
                    <div className="w-[20px] h-[20px] bg-orange-100"></div>
                    <div className="w-[20px] h-[20px] bg-slate-400"></div>
                    <div className="w-[20px] h-[20px] bg-orange-100"></div>
                    <div className="w-[20px] h-[20px] bg-slate-400"></div>
                    <div className="w-[20px] h-[20px] bg-orange-100"></div>
                    <div className="w-[20px] h-[20px] bg-slate-400"></div>
                </div>      {/* borde superior típico de castillo */}

                <div className="w-[300px] h-[270px] bg-slate-400 flex flex-row items-end justify-center">  {/* pared del frente detrás de la puerta */}
                    <div className="w-40 h-60 bg-white rounded-t-full"> {/* fondo que se ve al abrir la puerta */}
                        <div className="w-40 h-60 flex flex-row">  {/* puerta */}
                            <div className="w-20 h-60 bg-slate-500 rounded-tl-full">  {/* hoja derecha de la puerta */}
                                <div className=" w-9/12 h-20 bg-slate-400 mt-2 ml-3 mr-1 rounded-tl-full"></div>
                                <div className="w-2 h-2 rounded-full bg-white translate-y-20 translate-x-14 ml-2"></div>
                            </div>
                            {/* hoja izquierda de la puerta con animación hover*/}
                            <div className="w-20 h-60 bg-slate-500 rounded-tr-full hover:translate-x-4 transition duration-500 ease-in-out ">
                                <div className=" w-9/12 h-20 bg-slate-400 mt-2 ml-1 mr-2 rounded-tr-full"></div>
                                <div className="w-2 h-2 rounded-full bg-white translate-y-20 ml-2"></div>
                            </div>
                        </div>   {/* puerta */}
                    </div>   {/* fondo que se ve al abrir la puerta */}

                </div>   {/* pared del frente detrás de la puerta */}
            </div>
        </div>
    );
};

export default Castillo;