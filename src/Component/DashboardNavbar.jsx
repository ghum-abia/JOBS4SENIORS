import { Link, useLocation } from 'react-router'
import { useState } from "react";
import { RiHome5Fill } from "react-icons/ri";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaToolbox } from "react-icons/fa6";
import { RiNotification4Fill } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";


function DashboardSidebar() {

    const [notifications, setNotifications] = useState(3); // Notification count
    const [messages, setMessages] = useState(2); // Message count

    const location = useLocation(); // Get current path
    const menuItems = [
        { name: "Home", path: "/dashboard", icon: <RiHome5Fill size={20} /> },
        { name: "connect", path: "/connect", icon: <HiMiniUserGroup size={20} /> },
        { name: "Job", path: "/job", icon: <FaToolbox size={20} /> },
        { name: "Notifications", id: "notifications", path: "/notifications", icon: <RiNotification4Fill size={20} /> },
        { name: "messages", id: 'messages', path: "/messages", icon: <AiOutlineMessage size={20} /> },
        { name: "profile", path: "/profile", icon: <RiNotification4Fill size={20} /> },
    ];

    return (
        <div >
            <div className=''>
                
                <nav className="bg-white fixed top-0 left-0 w-full z-[1000] shadow-md flex justify-between items-center  px-6">


                    <div className='flex items-center'>

                        <Link to='/'><img src="/logo.svg" alt="" className='pr-2 -mt-2' /></Link>
                        <div className='text-[#15411F] font-semibold text-[16px] '>
                            <Link to='/'>
                                JOBS4SENIORS
                            </Link>
                        </div>

                    </div>


                    <div>
                        <ul className="flex space-x-4 justify-center ">
                            {menuItems.map((item) => (
                                <li key={item.path} className="relative">
                                    <Link
                                        to={item.path}
                                      
                                        className={location.pathname === item.path || location.pathname === `${item.path}/` || (item.path !== '/' && location.pathname.startsWith(item.path)) ? "border-b-2 text-[#15411F] flex flex-col items-center px-4 py-6 transition-colors text-lg"  : "text-gray-300 border-[#15411F] hover:text-[#15411F] hover:border-[#15411F] flex flex-col items-center px-4 py-6 transition-colors text-lg" }
                                    >
                                        {item.icon}
                                        {item.id === "notifications" && notifications > 0 && (
                                            <span className="absolute top-4 right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                                {notifications}{'+'}
                                            </span>
                                        )}
                                        {item.id === "messages" && messages > 0 && (
                                            <span className="absolute top-4 right-2 bg-red-500 text-white text-xs font-bold w-4 h-4  flex items-center justify-center rounded-full">
                                                {messages}
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div className="border-l-2 border-gray-300 pl-3">

                        <div className="flex items-center h-10 rounded-2xl overflow-hidden border-gray-300 border-1">
                            <div>
                                <input type="text" placeholder="Search for anything (Jobs)" className="p-2 outline-none rounded-2xl bg-[#F6F6F6] w-70 px-6 py-4" />
                            </div>
                            <button className="bg-[#15411FD9] text-white px-6 h-full cursor-pointer ">
                                <CiSearch />
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default DashboardSidebar