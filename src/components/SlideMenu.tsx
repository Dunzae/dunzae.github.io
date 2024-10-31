import NotificationComponent from "./Notification";
import NotificationComponent2 from "./Notification2";
import NotificationComponent3 from "./Notification3";
import NotificationComponent4 from "./Notification4";

interface ISlideMenuComponent {
    hidden: boolean
}

function SlideMenuComponent({
    hidden
}: ISlideMenuComponent) {
    return (
        <div style={{ scrollbarWidth: 'thin' }}
            className={"h-full w-full flex-shirink-0 overflow-y-scroll lg:bg-white lg:border-r-2 lg:shadow-[4px_0_24px_rgba(0,0,0,0.15)] " +
                `${hidden ? 'hidden' : 'flex'}`
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
    )
}

export default SlideMenuComponent;