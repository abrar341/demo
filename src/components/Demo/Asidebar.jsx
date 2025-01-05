import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CalendarCheck, LayoutDashboard, Mail, Settings, Star } from "lucide-react";

const menuItems = [
    { id: 1, label: "Dashboard", icon: <LayoutDashboard />, path: "/dashboard" },
    { id: 2, label: "Inbox", icon: <Mail />, path: "/inbox", badge: 2 },
    { id: 3, label: "Schedule", icon: <CalendarCheck />, path: "/schedule" },
    { id: 4, label: "Reviews", icon: <Star />, path: "/reviews" },
    { id: 5, label: "Settings", icon: <Settings />, path: "/settings" },
];

const AsideBar = () => {
    const location = useLocation();

    return (
        <aside className="w-25 h-screen flex flex-col">
            <nav className="py-6">
                <ul className="space-y-2 pl-6">
                    {menuItems.map((item) => {
                        const isActive = location.pathname.startsWith(item.path);

                        return (
                            <li
                                key={item.id}
                                className={`relative flex flex-col items-center justify-center p-2 cursor-pointer 
                                    ${isActive ? "bg-white rounded-bl-2xl rounded-tl-2xl" : ""}`}
                            >
                                <Link to={item.path} className="flex flex-col items-center">
                                    <div className="relative">
                                        <span
                                            className={`text-2xl ${isActive
                                                ? "text-purple-500"
                                                : "text-gray-600"
                                                }`}
                                        >
                                            {item.icon}
                                        </span>
                                        {item.badge && (
                                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                                                {item.badge}
                                            </span>
                                        )}
                                    </div>
                                    <span
                                        className={`mt-1 text-xs ${isActive
                                            ? "text-purple-500 font-semibold"
                                            : "text-gray-600"
                                            }`}
                                    >
                                        {item.label}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
};

export default AsideBar;
