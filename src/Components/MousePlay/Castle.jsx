import React from "react";

const Castle = () => {
    return (
        <div className="flex flex-row justify-center items-center w-full">
            <div>

                <div className="flex flex-row">      {/* borde superior típico de castillo */}
                    <div className="w-[20px] h-[20px] bg-slate-400"></div>
                    <div className="w-[20px] h-[20px] bg-transparent"></div>
                    <div className="w-[20px] h-[20px] bg-slate-400"></div>
                    <div className="w-[20px] h-[20px] bg-transparent"></div>
                    <div className="w-[20px] h-[20px] bg-slate-400"></div>
                    <div className="w-[20px] h-[20px] bg-transparent"></div>
                    <div className="w-[20px] h-[20px] bg-slate-400"></div>
                    <div className="w-[20px] h-[20px] bg-transparent"></div>
                    <div className="w-[20px] h-[20px] bg-slate-400"></div>
                    <div className="w-[20px] h-[20px] bg-transparent"></div>
                    <div className="w-[20px] h-[20px] bg-slate-400"></div>
                    <div className="w-[20px] h-[20px] bg-transparent"></div>
                    <div className="w-[20px] h-[20px] bg-slate-400"></div>
                    <div className="w-[20px] h-[20px] bg-transparent"></div>
                    <div className="w-[20px] h-[20px] bg-slate-400"></div>
                </div>      {/* borde superior típico de castillo */}

                <div className="w-[300px] h-[270px] bg-slate-400 flex flex-row items-end justify-center">  {/* pared del frente detrás de la puerta */}
                    <div className="w-[20px] h-[20px] bg-slate-600 -translate-x-4 -translate-y-40"></div>      {/* ladrillo */}
                    <div className="w-[20px] h-[20px] bg-slate-500 -translate-x-6 -translate-y-20"></div>      {/* ladrillo */}
                    <div className="w-40 h-60 bg-white rounded-t-full"> {/* fondo que se ve al abrir la puerta */}
                        <div className="w-40 h-60 flex flex-row">  {/* puerta */}
                            <div className="w-20 h-60 bg-slate-500 rounded-tl-full border-2 border-slate-900 hover:-translate-x-4 transition duration-500 ease-in-out">  {/* hoja izquierda de la puerta */}
                                <div className=" w-9/12 h-20 bg-slate-400 mt-2 ml-3 rounded-tl-full border-2 border-slate-900"></div>

                                <div className="w-2 h-2 rounded-full bg-black translate-y-20 translate-x-14 ml-2"></div>  {/* picaporte izquierdo */}

                            </div>
                            {/* hoja derecha de la puerta con animación hover*/}
                            <div className="w-20 h-60 bg-slate-500 rounded-tr-full hover:translate-x-4 transition duration-500 ease-in-out border-2 border-slate-900">
                                <div className=" w-9/12 h-20 bg-slate-400 mt-2 ml-2 mr-2 rounded-tr-full border-2 border-slate-900"></div>
                                <div className="w-2 h-2 rounded-full bg-black translate-y-20 ml-2"></div>  {/* picaporte derecho */}
                            </div>
                        </div>   {/* puerta */}

                    </div>   {/* fondo que se ve al abrir la puerta */}
                    <div className="w-[20px] h-[20px] bg-slate-600 translate-x-5 -translate-y-20"></div>      {/* ladrillo */}
                    <div className="w-[20px] h-[20px] bg-slate-500 translate-x-6 -translate-y-52"></div>      {/* ladrillo */}
                </div>   {/* pared del frente detrás de la puerta */}
            </div>
        </div>

    );
};

export default Castle;