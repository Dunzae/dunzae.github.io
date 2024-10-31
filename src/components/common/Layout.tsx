import SideBarComponent from "@components/common/SideBar";
import MenubarComponent from "@components/common/menu/Menubar";
import SlideMenuComponent from "@components/common/menu/SlideMenu";
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
        <div className="pb-[62px] lg:pb-0 lg:h-dvh lg:flex lg:flex-row">
            <div className="bg-white lg:min-w-[320px] lg:w-[24%] lg:h-full lg:flex-shrink-0">
                <SideBarComponent />
            </div>
            {/* 사이드 메뉴바 */}
            <div className="lg:flex lg:h-full lg:flex-shrink-0 lg:basis-0">
                <div className="w-full lg:flex lg:items-center relative">
                    <div className="fixed bottom-0 left-0 right-0 z-[1001] bg-white lg:static lg:w-[100px] lg:full">
                        <MenubarComponent />
                    </div>
                    <div className={`h-full pb-[100px] lg:pb-0 lg:w-[430px] lg:absolute lg:left-full lg:h-dvh lg:bg-white lg:z-[1000] ${slideMenuHidden ? "hidden" : "flex"}`}>
                        <SlideMenuComponent hidden={false} />
                    </div>
                </div>
            </div>
            <div className="w-full h-full overflow-y-scroll relative z-1 scroll-">
                {children}
            </div>
        </div>
    )
}

export default LayoutComponent;