import { setHidden } from "@slices/modal";
import { useAppDispatch } from "@slices/store";
import router from "../../router";

import ExitIcon from "@assets/icons/exit.png";

function SettingComponent() {
    const dispatch = useAppDispatch();

    const loginOnClick = () => {
        dispatch(setHidden(true));
        router.navigate("/login")
    }

    const exitOnClick = () => {
        dispatch(setHidden(true));
    }

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="min-w-[300px] max-w-[80%] max-h-[80%] flex flex-col bg-white border border-gray-200 relative rounded-xl shadow-lg"
        >
            <div
                className="absolute top-0 right-0 cursor-pointer flex items-center"
            >
                <div onClick={exitOnClick}>
                    <img src={ExitIcon} className="w-20 h-20" />
                </div>
            </div>
            <div className="font-NanumGothic text-3xl p-5 font-bold border-b border-b-slate-300">
                설정
            </div>
            <div className="font-NanumGothic font-bold text-center flex flex-col gap-2">
                <div className="w-full h-16 p-4 text-xl border-b border-b-gray-200 cursor-pointer" onClick={loginOnClick}>
                    로그인
                </div>
                <div className="w-full h-16 p-4 text-xl border-b border-b-gray-200 cursor-pointer">
                    관리 페이지
                </div>
            </div>
        </div>
    )
}

export default SettingComponent;