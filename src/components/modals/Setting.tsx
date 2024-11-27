import { setHidden } from "@slices/modal";
import { useAppDispatch, useAppSelector } from "@slices/store";
import router from "../../router";
import ExitIcon from "@assets/icons/exit.webp";
import { setAccessToken, setRefreshToken } from "@slices/auth";
import { removeLocalStorageItem, setLocalStorageItem } from "@utils/storage";

function SettingComponent() {
    const dispatch = useAppDispatch();
    const accessToken = useAppSelector(({ auth }) => auth.accessToken)

    const loginOnClick = () => {
        dispatch(setHidden(true));
        router.navigate("/login")
    }

    const logoutOnClick = () => {
        dispatch(setAccessToken(undefined));
        dispatch(setRefreshToken(undefined));
        removeLocalStorageItem("token");
        dispatch(setHidden(true));
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
                    <img src={ExitIcon} className="w-20 h-20" alt="exit"/>
                </div>
            </div>
            <div className="font-NanumGothic text-3xl p-5 font-bold border-b border-b-slate-300">
                설정
            </div>
            <div className="font-NanumGothic font-bold text-center flex flex-col gap-2">
                {!accessToken ?
                    <div className="w-full h-16 p-4 text-xl border-b border-b-gray-200 cursor-pointer" onClick={loginOnClick}>
                        로그인
                    </div>
                    : <div className="w-full h-16 p-4 text-xl border-b border-b-gray-200 cursor-pointer" onClick={logoutOnClick}>
                        로그아웃
                    </div>}
                
            </div>
        </div>
    )
}

export default SettingComponent;