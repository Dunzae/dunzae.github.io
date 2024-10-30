import {
    IoHome, IoHomeOutline,
    IoPerson, IoPersonOutline, IoSettingsOutline, IoSettings 
} from "react-icons/io5";
import { IoMdNotifications, IoMdNotificationsOutline } from "react-icons/io";
import { BsChatSquareText, BsChatSquareTextFill } from "react-icons/bs";
import {  } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

interface IMenubarComponent {
    currentPath: string,
    setNotificationClicked : React.Dispatch<React.SetStateAction<boolean>>
}

function MenubarComponent({
    currentPath,
    setNotificationClicked
}: IMenubarComponent) {
    const navigate = useNavigate();

    return (
        <div className="border-t border-t-[#E6E6E6] lg:h-full lg:border-t-0 lg:border-r lg:border-r-[#E6E6E6] lg:flex lg:items-center">
            <ul className="w-full flex flex-row flex-grow-0 bg-white lg:flex lg:flex-col lg:items-center lg:py-5">
                <li onClick={() => navigate("/")} className="p-4 flex flex-grow justify-center lg:flex-grow-0 lg:mx-2 lg:my-8 lg:p-2 lg:w-[60px] lg:h-[30px] lg:flex lg:justify-center lg:items-center lg:cursor-pointer">
                    {currentPath === "/" ? <IoHome size={30} /> : <IoHomeOutline size={30} />}
                </li>
                <li className="p-4 flex flex-grow justify-center lg:flex-grow-0 lg:mx-2 lg:my-8 lg:p-2 lg:w-[60px] lg:h-[30px] lg:flex lg:justify-center lg:items-center lg:cursor-pointer" 
                 onClick={() => setNotificationClicked(_s => !_s)}
                >
                    {currentPath === "/notification" ? <IoMdNotifications size={30} /> : <IoMdNotificationsOutline size={30} />}
                </li>
                <li onClick={() => navigate("/chat")} className="p-4 flex flex-grow justify-center lg:flex-grow-0 lg:mx-2 lg:my-8 lg:p-2 lg:w-[60px] lg:h-[30px] lg:flex lg:justify-center lg:items-center lg:cursor-pointer">
                    {currentPath === "/chat" ? <BsChatSquareTextFill size={30} /> : <BsChatSquareText size={30} />}
                </li>
                <li onClick={() => navigate("/profile")} className="p-4 flex flex-grow justify-center lg:flex-grow-0 lg:mx-2 lg:my-8 lg:p-2 lg:w-[60px] lg:h-[30px] lg:flex lg:justify-center lg:items-center lg:cursor-pointer">
                    {currentPath === "/profile" ? <IoPerson size={30} /> : <IoPersonOutline size={30} />}
                </li>
                <li className="p-4 flex flex-grow justify-center lg:flex-grow-0 lg:mx-2 lg:my-8 lg:p-2 lg:w-[60px] lg:h-[30px] lg:flex lg:justify-center lg:items-center lg:cursor-pointer">
                    {currentPath === "/profile" ? <IoSettings  size={30} /> : <IoSettingsOutline size={30} />}
                </li>
            </ul>
        </div>

    )
}

export default MenubarComponent;