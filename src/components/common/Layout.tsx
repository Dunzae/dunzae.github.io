import SideBarComponent from "@components/common/Sidebar";
import MenubarComponent from "@components/common/menu/Menubar";
import SlideMenuComponent from "@components/common/menu/SlideMenu";
import { toggleIsFold } from "@slices/menu";
import { useAppDispatch, useAppSelector } from "@slices/store";
import { motion } from "motion/react";
import { useMediaQuery } from 'react-responsive'

interface ILayoutComponent {
    children: React.ReactNode
}

function LayoutComponent({
    children
}: ILayoutComponent) {
    const modalHidden = useAppSelector(({ modal }) => modal.hidden)
    const slideMenuHidden = useAppSelector(({ menu }) => menu.slideMenuHidden)
    const isFold = useAppSelector(({ menu }) => menu.isFold)
    const dispatch = useAppDispatch();

    const isDesktop = useMediaQuery({ query: '(min-width : 1024px)' });

    const foldOnClick = () => {
        dispatch(toggleIsFold());
    }

    return (
        <div className={`pb-[62px] box-border lg:pb-0 lg:h-dvh lg:flex lg:flex-row ${modalHidden ? 'overflow-y-visible' : 'overflow-y-hidden'}`}>
            <motion.div
                animate={!isDesktop ? {} : isFold ? {
                    transform: "translateX(-100%)",
                    minWidth: "0%",
                    width: "0%"
                } : {
                    transform: "translateX(0%)",
                    minWidth: "320px",
                    width: "24%"
                }}
                initial={!isDesktop ? {} : isFold ? {
                    transform: "translateX(-100%)",
                    minWidth: "0%",
                    width: "0%"
                } : {
                    transform: "translateX(0%)",
                    minWidth: "320px",
                    width: "24%"
                }}
                transition={{ duration: .2, ease: "linear" }}
                className="w-full bg-white lg:min-w-[320px] lg:w-[24%] lg:h-full lg:flex-shrink-0 lg:overflow-x-hidden">
                <SideBarComponent isFold={isFold} isFoldOnClick={foldOnClick} />
            </motion.div>
            {/* 사이드 메뉴바 */}
            <div className="lg:flex lg:h-full lg:flex-shrink-0 lg:basis-0">
                <div className="w-full lg:flex lg:items-center relative">
                    <div className="fixed bottom-0 left-0 right-0 z-[1001] bg-white lg:static lg:w-[100px] lg:h-full">
                        <MenubarComponent isFold={isFold} isFoldOnClick={foldOnClick} />
                    </div>
                    <div className={`fixed top-0 left-0 right-0 bottom-0 z-[1000] lg:pb-0 lg:w-[430px] lg:absolute lg:left-full lg:h-dvh lg:bg-white lg:z-[1000] ${slideMenuHidden ? "hidden" : "flex"}`}>
                        <SlideMenuComponent hidden={false} />
                    </div>
                </div>
            </div>
            <div className={`w-full h-full relative z-1 overflow-y-scroll`}>
                {children}
            </div>
        </div >
    )
}

export default LayoutComponent;