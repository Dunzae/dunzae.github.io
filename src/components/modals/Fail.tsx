import ExitIcon from "@assets/icons/exit.webp";
import { setHidden } from "@slices/modal";
import { useAppDispatch } from "@slices/store";

function FailComponent() {
    const dispatch = useAppDispatch();
    const exitOnClick = () => {
        dispatch(setHidden(true));
    }

    return (
        <div className="w-[600px] h-[600px] flex flex-col bg-white border border-gray-200 relative rounded-xl shadow-lg">
            <div
                className="absolute top-0 right-0 cursor-pointer flex items-center"
            >
                <div onClick={exitOnClick}>
                    <img src={ExitIcon} className="w-20 h-20" alt="exit"/>
                </div>
            </div>
            <div className="font-NanumGothic text-3xl p-5 font-bold border-b border-b-slate-300 w-full h-full flex items-center justify-center">
                실패하였습니다
            </div>
        </div>
    )
}

export default FailComponent;