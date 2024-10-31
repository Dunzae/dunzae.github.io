import TitleComponent from "@components/Title";
import ProfileComponent from "@components/Profile";

function SideBarComponent() {
    return (
        <div className="h-auto">
            <div className="h-full flex flex-col">
                <div className="text-black flex justify-center bg-white lg:bg-transparent lg:w-full lg:text-white lg:flex lg:justify-center lg:mb-2">
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