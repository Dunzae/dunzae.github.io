"use client";

import { useState } from "react";
import {
    IoHome, IoHomeOutline,
    IoPerson, IoPersonOutline,
    IoSettingsOutline, IoSettings
} from "react-icons/io5";
import { IoMdNotifications, IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlinePencilSquare, HiPencilSquare } from "react-icons/hi2";
import { motion } from "framer-motion";

export interface MenuBarProps {
    className?: string,
}

export function MenuBar({ className }: MenuBarProps) {
    const [isShown, setIsShown] = useState(false);
    const [selected, setSelected] = useState("home");

    return (
        <div className={`${className} fixed bottom-0 left-0 right-0 z-[1001] lg:flex lg:min-w-[100px] lg:h-full lg:relative`}>
            <div className="border-t border-t-[#E6E6E6] lg:h-full lg:border-t-0 lg:border-r lg:border-r-[#E6E6E6] lg:flex lg:items-center">
                <ul className="w-full flex flex-row flex-grow-0 lg:w-[100px] lg:flex lg:flex-col lg:items-center lg:py-5">
                    <li data-move={true} data-to="" className="p-4 flex flex-grow justify-center lg:flex-grow-0 lg:mx-2 lg:my-8 lg:p-2 lg:w-[60px] lg:h-[30px] lg:flex lg:justify-center lg:items-center lg:cursor-pointer">
                        {selected === "home" ? <IoHome size={30} /> : <IoHomeOutline size={30} />}
                    </li>
                    <li data-move={false} data-to="notification" className="p-4 flex flex-grow justify-center lg:flex-grow-0 lg:mx-2 lg:my-8 lg:p-2 lg:w-[60px] lg:h-[30px] lg:flex lg:justify-center lg:items-center lg:cursor-pointer"
                        onClick={() => setIsShown(!isShown)}
                    >
                        {selected === "notification" ? <IoMdNotifications size={30} /> : <IoMdNotificationsOutline size={30} />}
                    </li>
                    <li data-move={true} data-to="write" className="p-4 flex flex-grow justify-center lg:flex-grow-0 lg:mx-2 lg:my-8 lg:p-2 lg:w-[60px] lg:h-[30px] lg:flex lg:justify-center lg:items-center lg:cursor-pointer">
                        {selected === "editor" ? <HiPencilSquare size={30} /> : <HiOutlinePencilSquare size={30} />}
                    </li>
                    <li data-move={true} data-to="profile" className="p-4 flex flex-grow justify-center lg:flex-grow-0 lg:mx-2 lg:my-8 lg:p-2 lg:w-[60px] lg:h-[30px] lg:flex lg:justify-center lg:items-center lg:cursor-pointer">
                        {selected === "profile" ? <IoPerson size={30} /> : <IoPersonOutline size={30} />}
                    </li>
                    <li data-move={false} data-to="setting" className="p-4 flex flex-grow justify-center lg:flex-grow-0 lg:mx-2 lg:my-8 lg:p-2 lg:w-[60px] lg:h-[30px] lg:flex lg:justify-center lg:items-center lg:cursor-pointer">
                        {selected === "setting" ? <IoSettings size={30} /> : <IoSettingsOutline size={30} />}
                    </li>
                </ul>
            </div >

            <motion.div
                animate={{ transform: isShown ? "scaleX(100%)" : "scaleX(0%)" }}
                transition={{ duration: 0.3, ease: "linear" }}
                className={`fixed top-[100px] bottom-[68px] left-0 right-0 w-full overflow-y-auto p-4 bg-[#fafafa] 
                    lg:absolute lg:top-0 lg:bottom-0 lg:origin-left lg:left-full lg:w-[450px] lg:border-r-2 lg:shadow-[4px_0_24px_rgba(0,0,0,0.15)]`}
            >
                <div className={`w-full lg:h-full ${isShown ? "lg:flex" : "lg:hidden"}`}>
                    asdads
                </div>
            </motion.div>
        </div >
    )
}