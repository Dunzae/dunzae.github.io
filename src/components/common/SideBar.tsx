import TitleComponent from "@components/common/Title";
import ProfileComponent from "@components/common/Profile";

function SideBarComponent() {
    return (
        <div className="h-[100px] lg:h-full lg:flex lg:flex-col lg:bg-[url('assets/images/sideBarBackground.jpg')] lg:bg-cover lg:bg-origin lg:bg-[-80px_0%] lg:justify-center">
            <div className="h-auto flex flex-col">
                <div className="text-black flex justify-center bg-white lg:bg-transparent lg:w-full lg:text-white lg:flex lg:justify-center ">
                    <TitleComponent />
                </div>
                <div className="hidden lg:flex">
                    <ProfileComponent
                        nameColor="white"
                        tagColor="gray"
                    />
                </div>
            </div>
        </div>
    )
}

export default SideBarComponent;