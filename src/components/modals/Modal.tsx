import { useAppDispatch, useAppSelector } from "@slices/store";
import ShortCutComponent from "./ShortCut";
import { setHidden } from "@slices/modal";
import ExitIcon from "@assets/icons/exit.png";

function ModalComponent() {
    const dispatch = useAppDispatch();
    const hidden = useAppSelector(({ modal }) => modal.hidden);

    const exitOnClick = () => {
        dispatch(setHidden(true));
    }

    return (
        <div
            onClick={(e) => {
                dispatch(setHidden(true));
            }}
            className={`${hidden ? 'hidden' : 'fixed'} top-0 left-0 bottom-0 right-0 bg-gray-100 z-[10000] bg-opacity-50`}
        >
            <div className="w-full h-full flex items-center justify-center">
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="w-[80%] h-[80%] bg-white border border-gray-200 relative rounded-xl shadow-lg bg-[url('./assets/images/shortcutBackgournd.png')] bg-contain bg-no-repeat bg-[50%_50%]"
                >
                    <div
                        onClick={exitOnClick}
                        className="absolute top-0 right-0 cursor-pointer"
                    >
                        <img src={ExitIcon} className="w-20 h-20" />
                    </div>
                    <ShortCutComponent />
                </div>
            </div>
        </div>
    )
}

export default ModalComponent;