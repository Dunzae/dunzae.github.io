import {
    IoHome, IoHomeOutline,
    IoPerson, IoPersonOutline, IoSettingsOutline, IoSettings
} from "react-icons/io5";
import { IoMdNotifications, IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlinePencilSquare, HiPencilSquare } from "react-icons/hi2";

import { useNavigate } from "react-router-dom";
import { setLocation, setSlideMenuHidden } from "@slices/menu";
import { SyntheticEvent, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@slices/store"
import { setHidden, setType } from "@slices/modal";

function MenubarComponent() {
    const location = useAppSelector(({ menu }) => menu.location);
    const slideMenuHidden = useAppSelector(({ menu }) => menu.slideMenuHidden);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onClick = useCallback((e: SyntheticEvent<HTMLLIElement>) => {
        const to = "/" + e.currentTarget.dataset.to;
        if (to !== undefined) {
            if (["/", "/notification", "/write", "/profile", "/setting"].includes(to)) {
                dispatch(setLocation(to));
                if (to === "/notification") {
                    dispatch(setSlideMenuHidden(!slideMenuHidden));
                } else 
                {
                    if (to === "/setting") {
                        dispatch(setType("Setting"));
                        dispatch(setHidden(false));
                    }
                    dispatch(setSlideMenuHidden(true))
                }

                if (e.currentTarget.dataset.move === 'true') {
                    navigate(to);
                }
            }
        }
    }, [location, slideMenuHidden])

    return (
        <div className="border-t border-t-[#E6E6E6] lg:h-full lg:border-t-0 lg:border-r lg:border-r-[#E6E6E6] lg:flex lg:items-center">
            <ul className="w-full flex flex-row flex-grow-0 bg-white lg:flex lg:flex-col lg:items-center lg:py-5">
                <li data-move={true} data-to="" onClick={onClick} className="p-4 flex flex-grow justify-center lg:flex-grow-0 lg:mx-2 lg:my-8 lg:p-2 lg:w-[60px] lg:h-[30px] lg:flex lg:justify-center lg:items-center lg:cursor-pointer">
                    {location === "/" ? <IoHome size={30} /> : <IoHomeOutline size={30} />}
                </li>
                
                <li data-move={true} data-to="write" onClick={onClick} className="p-4 flex flex-grow justify-center lg:flex-grow-0 lg:mx-2 lg:my-8 lg:p-2 lg:w-[60px] lg:h-[30px] lg:flex lg:justify-center lg:items-center lg:cursor-pointer">
                    {location === "/write" ? <HiPencilSquare size={30} /> : <HiOutlinePencilSquare size={30} />}
                </li>
                <li data-move={true} data-to="profile" onClick={onClick} className="p-4 flex flex-grow justify-center lg:flex-grow-0 lg:mx-2 lg:my-8 lg:p-2 lg:w-[60px] lg:h-[30px] lg:flex lg:justify-center lg:items-center lg:cursor-pointer">
                    {location === "/profile" ? <IoPerson size={30} /> : <IoPersonOutline size={30} />}
                </li>
                <li data-move={false} data-to="setting" onClick={onClick} className="p-4 flex flex-grow justify-center lg:flex-grow-0 lg:mx-2 lg:my-8 lg:p-2 lg:w-[60px] lg:h-[30px] lg:flex lg:justify-center lg:items-center lg:cursor-pointer">
                    {location === "/setting" ? <IoSettings size={30} /> : <IoSettingsOutline size={30} />}
                </li>
            </ul>
        </div >

    )
}

export default MenubarComponent;