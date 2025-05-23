import NotificationComponent from "./Notification";

interface ISlideMenuComponent {
    hidden: boolean
}

function SlideMenuComponent({
    hidden
}: ISlideMenuComponent) {
    return (
        <div
            className={"h-full w-full flex-shirink-0 overflow-y-scroll lg:bg-white lg:border-r-2 lg:shadow-[4px_0_24px_rgba(0,0,0,0.15)] " +
                `${hidden ? 'hidden' : 'flex'}`
            }
        >
            <div className="w-full lg:px-[20px] lg:py-[20px] lg:min-h-dvh bg-[#fafafa]">
                <div className="mb-[10px]">
                    <NotificationComponent />
                </div>
            </div>
        </div>
    )
}

export default SlideMenuComponent;