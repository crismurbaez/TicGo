import React from "react";
import Information from "./Information";
import Castle from "./Castle";
import MouseAnimation from './MouseAnimation';

const MousePlay = () => {
    return (
        <div>
            <div className="bg-orange-100  min-h-screen max-h-full mx-auto py-6 sm:px-6 lg:px-8">
                <div className="flex flex-row items-center">
                    {/* castle */}
                    <Information />
                    <Castle />
                </div>

                <div className="flex flex-row justify-start items-center w-full">
                    {/* mouse */}
                    <MouseAnimation />
                </div>
            </div>
        </div>
    )
};

export default MousePlay;