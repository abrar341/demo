import { ChevronDown } from "lucide-react";
import React from "react";

import { IoIosNotificationsOutline } from "react-icons/io";


const TopNavbar = () => {
    return (
        <header className="bg-gray-100 min-w-[350px] px-6 py-3 flex flex-wrap gap-3 md:gap-0 justify-center items-center md:justify-between min-w-full">
            <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-800">Cosmediate</h1>
            </div>
            <div className="flex-grow max-w-md mx-4 order-last md:order-none">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full py-2 px-4 bg-gray-100 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
            <div className="flex items-center space-x-6">
                <button className="relative">
                    <IoIosNotificationsOutline className="text-purple-600 text-xl" />
                    <span className="absolute top-0 right-0 block h-2 w-2 bg-red-500 rounded-full"></span>
                </button>

                {/* User Profile */}
                <div className="flex items-center bg-gray-100 space-x-2">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLMjBEjwc03n50U1PTaNyjQL4hrtjmNOmNAg&s"
                        alt="User"
                        className="h-8 w-8 p-1 border rounded-full"
                        loading="lazy" // Lazy loading added here
                    />
                    <div className="text-sm">
                        <p className="font-medium text-gray-800">Tim Bouwman</p>
                        <p className="text-gray-500 text-xs">Abstec Amsterdam</p>
                    </div>
                    <ChevronDown className="w-4" />
                </div>

            </div>
        </header>
    );
};

export default TopNavbar;
