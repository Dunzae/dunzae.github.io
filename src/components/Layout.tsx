import { useState } from "react";
import SideBarComponent from "./SideBar";
import MenubarComponent from "@components/Menubar";
import SlideMenuComponent from "./SlideMenu";
import { useAppSelector } from "@slices/store";

interface ILayoutComponent {
    children: React.ReactNode
}

function LayoutComponent({
    children
}: ILayoutComponent) {
    const slideMenuHidden = useAppSelector(({ menu }) => menu.slideMenuHidden)
    const location = useAppSelector(({ menu }) => menu.location)
    return (
        <div className="min-h-dvh h-auto lg:flex lg:flex-row">
            <div className="h-[100px] fixed bg-white lg:min-w-[320px] lg:w-[24%] lg:h-full lg:flex lg:flex-col lg:bg-[url('assets/images/sideBarBackground.jpg')] lg:bg:transparent lg:bg-cover lg:bg-origin lg:bg-[-80px_0%] lg:justify-center">
                <SideBarComponent />
            </div>
            {/* 제목과 프로필란의 공간 차지를 위한 div */}
            <div className="h-[100px] lg:min-w-[320px] lg:w-[24%] lg:h-full flex-shrink-0" />
            {/* 사이드 메뉴바 */}
            <div className="lg:w-[100px] lg:flex lg:h-dvh lg:flex-shrink-0 lg:relative">
                <div className="fixed overflow-y-scroll top-[110px] bottom-0 w-full lg:top-0 lg:flex lg:w-[100px] lg:items-center z-[10000] lg:overflow-visible">

                    {/* 메뉴의 슬라이드 영역 */}
                    <div
                        className={"min-h-full pb-[100px] lg:pb-0 lg:w-[500px] lg:h-dvh lg:top-0 lg:left-[100%] lg:bg-white lg:absolute lg:border-r-2 lg:shadow-[4px_0_24px_rgba(0,0,0,0.15)] " +
                            `${slideMenuHidden ? 'hidden' : 'flex'}`
                        }
                    >
                        <SlideMenuComponent hidden={slideMenuHidden} />
                    </div>
                    <div className="fixed bottom-0 left-0 bg-white lg:absolute lg:top-0 lg:w-full">
                        <MenubarComponent />
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