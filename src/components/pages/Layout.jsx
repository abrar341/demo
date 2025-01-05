// components/Layout.js
import React from "react";

import { Outlet } from "react-router-dom";
import TopNavbar from "./Navbar";
import AsideBar from "./Asidebar";

const Layout = () => {
    return (
        <div className="flex bg-gray-100 flex-col w-full">
            {/* Top Navbar */}
            <TopNavbar />

            <div className="flex flex-grow">
                {/* Aside Bar */}
                <AsideBar />

                {/* Main Content */}
                <div className="w-full  rounded-tl-3xl p-6 bg-white">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
