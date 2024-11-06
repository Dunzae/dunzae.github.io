import { useAppSelector } from "@slices/store";
import ShortCutComponent from "./ShortCut";

function ModalComponent() {
    const hidden = false;

    return (
        <div className={`${hidden ? 'hidden' : 'fixed'} top-0 left-0 bottom-0 right-0 bg-gray-100 z-[10000] bg-opacity-50`}
            onClick={(e) => e.stopPropagation()}
            onScroll={(e) => e.stopPropagation()}
        >
            <ShortCutComponent />
        </div>
    )
}

export default ModalComponent;