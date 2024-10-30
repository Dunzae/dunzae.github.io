import TitleComponent from "@components/Title";
import ProfileComponent from "@components/Profile";
import MenubarComponent from "@components/Menubar";
import NotificationComponent from "./Notification";
import NotificationComponent2 from "./Notification2";
import NotificationComponent3 from "./Notification3";
import NotificationComponent4 from "./Notification4";
import { useState } from "react";
interface ILayoutComponent {
    children: React.ReactNode
}

function LayoutComponent({
    children
}: ILayoutComponent) {
    const [notificationClicked, setNotificationClicked] = useState(false);
    return (
        <div className="h-auto lg:flex lg:flex-row">
            <div className="h-[100px] fixed bg-white lg:min-w-[320px] lg:w-[24%] lg:h-full lg:flex lg:flex-col lg:bg-[url('assets/images/sideBarBackground.jpg')] lg:bg:transparent lg:bg-cover lg:bg-origin lg:bg-[-80px_0%] lg:justify-center">
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
            </div>
            {/* 제목과 프로필란의 공간 차지를 위한 div */}
            <div className="h-[100px] lg:min-w-[320px] lg:w-[24%] lg:h-full flex-shrink-0" />
            {/* 사이드 메뉴바 */}
            <div className="lg:w-[100px] lg:flex lg:h-dvh lg:flex-shrink-0 lg:relative">
                <div className="fixed overflow-y-scroll top-[110px] bottom-0 w-full lg:top-0 lg:flex lg:w-[100px] lg:items-center z-[10000] lg:overflow-visible">

                    {/* 메뉴의 슬라이드 영역 */}
                    <div style={{ scrollbarWidth: 'thin' }}
                        className={"min-h-full pb-[100px] lg:w-[400px] lg:h-dvh overflow-y-scroll lg:top-0 lg:left-[100%] lg:bg-white lg:absolute lg:border-r-2 lg:shadow-[4px_0_24px_rgba(0,0,0,0.15)] " +
                            `${notificationClicked ? 'flex' : 'hidden'}`
                        }
                    >
                        <div className="lg:px-[20px] lg:py-[20px] lg:min-h-dvh bg-[#fafafa]">
                            <div className="mb-[10px]">
                                <NotificationComponent />
                            </div>
                            <div className="mb-[10px]">
                                <NotificationComponent2 />
                            </div>
                            <div className="mb-[10px]">
                                <NotificationComponent3 />
                            </div>
                            <div className="mb-[10px]">
                                <NotificationComponent4 />
                            </div>
                            <div className="mb-[10px]">
                                <NotificationComponent4 />
                            </div>
                            <div className="mb-[10px]">
                                <NotificationComponent4 />
                            </div>
                            <div className="mb-[10px]">
                                <NotificationComponent4 />
                            </div>
                            <div className="mb-[10px]">
                                <NotificationComponent4 />
                            </div>
                            <div className="mb-[10px]">
                                <NotificationComponent4 />
                            </div>
                            <div className="mb-[10px]">
                                <NotificationComponent4 />
                            </div>
                            <div className="mb-[10px]">
                                <NotificationComponent4 />
                            </div>
                            <div className="mb-[10px]">
                                <NotificationComponent4 />
                            </div>
                            <div className="mb-[10px]">
                                <NotificationComponent4 />
                            </div>
                            <div className="mb-[10px]">
                                <NotificationComponent4 />
                            </div>
                        </div>
                    </div>
                    <div className="fixed bottom-0 left-0 bg-white lg:absolute lg:top-0 lg:w-full">
                        <MenubarComponent currentPath="/" setNotificationClicked={setNotificationClicked}/>
                    </div>
                </div>
            </div>
            <div className="w-full min-h-full">
                {children}
            </div>
        </div>
    )
}

export default LayoutComponent;