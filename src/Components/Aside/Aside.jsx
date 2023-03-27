import React from "react";


const Aside = () => {
    return (
        <div className="w-full m-0 md:w-1/3 lg:w-1/3 md:mt-16 lg:mt-16  bg-orange-100 text-white shadow-2xl min-h-screen max-h-full">
            <div className=" bg-[#dfbc91] w-full ">
                <div className=" mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className=" text-5xl tracking-normal font-bold h-12 text-gray-400">

                    </h1>
                </div>
                {/* decoración*/}
                <div className="w-full border-2 border-dotted border-slate-400"></div>
                <div className="w-full border-2 border-dotted border-slate-400 "></div>
                <div className="w-full border-2 border-dotted border-slate-400"></div>
                <div className="w-full border-2 border-dotted border-slate-400"></div>
                <div className="w-full border-2 border-dotted border-slate-400"></div>
                <div className="w-full border-2 border-dotted border-slate-400"></div>
            </div>
            {/* arreglar que cuando de abra el menu en movil, ocultar los avatars y el diamante, hacer hidde */}
            {/* diamante superior */}
            <div className="inline-block items-center translate-y-10 ml-2 mr-2 rotate-45 bg-[#c5c2c2] w-[65px] h-[65px]  border-solid border-orange-100 border-8">
            </div>
            {/* contenedor gris aside */}
            <div className=" mx-10 mb-0 bg-[#c5c2c2] py-16 px-5 rounded-b-full">
                <div className="flex flex-row md:flex-col lg:flex-row justify-center items-center">
                    {/* contenedor de los avatars */}
                    <div className="flex ">
                        <div className="m-2 md:m-1 lg:m-2 relative rounded-full">
                            <img className="w-40 rounded-full border-orange-100 border-8" src="/images/clau.jpeg" alt="" />
                            <span className="absolute -top-20 left-0 right-0 bottom-0 flex justify-center items-center font-bold text-orange-100 text-lg md:text-sm lg:text-lg opacity-0 bg-[#797777] rounded-full bg-opacity-100 hover:bg-opacity-60 hover:opacity-100 hover:translate-y-20 transition duration-500 ease-in-out">Claudia Da Rosa <br /> . <br />  Profesora de 1 y 2 ciclo de la EGB</span>
                        </div>
                        <div className="m-2 md:m-1 lg:m-2 relative rounded-full">
                            <img className="w-40 rounded-full border-orange-100 border-8" src="/images/cris.jpeg" alt="" />
                            <span className="absolute -top-20 left-0 right-0 bottom-0 flex justify-center items-center font-bold text-orange-100 text-lg md:text-sm lg:text-lg opacity-0 bg-[#797777] rounded-full bg-opacity-100 hover:bg-opacity-60 hover:opacity-100 hover:translate-y-20 transition duration-500 ease-in-out">Cristina Murguía <br /> . <br /> Profesora de Matemática <br /> Full Stack Web Developer</span>
                        </div>

                    </div>
                </div>
                <div className="mt-10 font-bold text-2xl">Siempre apasionadas por la educación de calidad</div>

                <div className=" mt-10">
                    <span>   <img className=" inline-block w-8" src="/images/pasto2.png" alt="" /></span>
                    <span>   <img className=" inline-block w-8" src="/images/piedra1.png" alt="" /></span>
                    <span>   <img className=" inline-block w-8" src="/images/pasto1.png" alt="" /></span>
                    <span>   <img className=" inline-block w-8" src="/images/piedra2.png" alt="" /></span>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
};
// after:w-0 after:h-0 after:border-r-[15rem] after:border-r-transparent 
// after:border-b-[15rem] after:border-b-transparent  after:border-t-[15rem] after:border-t-[#c5c2c2]

export default Aside;

