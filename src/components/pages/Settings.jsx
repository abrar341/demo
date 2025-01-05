// Settings.js
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Settings = () => {
    const location = useLocation();
    const menuItems = [
        { id: 1, label: "General", path: "/settings/general" },
        { id: 2, label: "Password", path: "/settings/password" },
        { id: 3, label: "Price", path: "/settings/price" },
        { id: 4, label: "Treatments", path: "/settings/treatments" },
    ];

    return (
        <div>
            {/* Settings Title */}
            <div className="py-3 px-1">
                <h1 className="text-2xl font-bold text-gray-700">Settings</h1>
            </div>

            {/* Main Layout */}
            <div className="flex flex-col md:flex-row md:w-full">
                {/* Sidebar Menu */}
                <aside className=" h-1/5 w-full md:w-1/4 rounded-2xl bg-blue-50 p-2">
                    <nav>
                        <ul className="space-y-2 ">
                            {menuItems.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        to={item.path}
                                        className={`block  py-2 px-4 text-sm  ${location.pathname === item.path
                                            ? "rounded-lg bg-white text-purple-500 font-semibold "
                                            : "text-gray-600 hover:bg-white hover:rounded-lg"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* Main Content */}
                <div className="w-full mt-5 md:mt-0">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Settings;
