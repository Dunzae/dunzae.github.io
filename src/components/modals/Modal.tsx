import { useAppSelector } from "@slices/store";
import ShortCutComponent from "./ShortCut";

function ModalComponent() {
    const hidden = true;

    return (
        <div className={`${hidden ? 'hidden' : 'fixed'} top-0 left-0 bottom-0 right-0 bg-gray-100 z-[10000] bg-opacity-50`}
            onClick={(e) => e.stopPropagation()}
            onScroll={(e) => e.stopPropagation()}
        >
            <div className="w-full h-full flex items-center justify-center ">
                <div className="w-[80%] h-[80%] bg-white border border-gray-200 relative rounded-xl shadow-lg bg-[url('./assets/images/shortcutBackgournd.png')] bg-contain bg-no-repeat bg-[50%_50%]">
                    <ShortCutComponent />
                </div>
            </div>
        </div>
    )
}

export default ModalComponent;