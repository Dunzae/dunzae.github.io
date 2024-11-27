import TitleComponent from "./Title";
import ProfileComponent from "./Profile";
import { RxExit } from "react-icons/rx";

interface SideBarComponentProps {
    isFold: boolean
    isFoldOnClick: () => void
}

function SideBarComponent({ isFold, isFoldOnClick }: SideBarComponentProps) {
    return (
        <div className="h-[100px] lg:h-full lg:flex lg:flex-col lg:bg-[url('assets/images/sideBarBackground.webp')] lg:bg-cover lg:bg-origin lg:bg-[-80px_0%] lg:justify-center">
            {!isFold && <div className="h-auto flex flex-col">
                <div className={`hidden lg:block lg:absolute lg:top-0 lg:right-0 lg:text-white lg:p-4 lg:cursor-pointer`}
                    onClick={isFoldOnClick}
                >
                    <RxExit size={30} className="rotate-180" />
                </div>
                <div className="text-black flex justify-center bg-white lg:bg-transparent lg:w-full lg:text-white lg:flex lg:justify-center ">
                    <TitleComponent />
                </div>
                <div className="hidden lg:flex">
                    <ProfileComponent
                    />
                </div>
            </div>}
        </div>
    )
}

export default SideBarComponent;