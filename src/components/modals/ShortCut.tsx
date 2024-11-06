import { useAppDispatch } from "@slices/store";
import { setHidden } from "@slices/modal";

import ExitIcon from "@assets/icons/exit.png";

// special key
import ControlKey from "@assets/icons/controlKey.png";

// button
import BButton from "@assets/icons/bButton.png"
import CButton from "@assets/icons/cButton.png";
import VButton from "@assets/icons/vButton.png";


function ShortCutComponent() {
    const dispatch = useAppDispatch();

    const exitOnClick = () => {
        dispatch(setHidden(true));
    }
    return (
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
            <div className="font-NanumGothic text-3xl p-5 font-bold border-b border-b-slate-300">
                에디터 단축키
            </div>
            <div className="p-5">
                <div>
                    <p className="font-NanumGothic font-bold text-2xl mb-4">수정</p>
                    <ul className="flex flex-col gap-4 lg:gap-2">
                        <li className="relative pl-[20px] flex">
                            <div className="hidden absolute left-0 text-[20px] lg:flex items-center h-full">
                                •
                            </div>
                            <div className="justify-center border border-slate-200 shadow-lg flex gap-2 items-center lg:justify-start px-4 py-2 rounded-2xl flex-wrap bg-white">
                                <div className="flex gap-1">
                                    <div className="inline-block flex-shrink-0">
                                        <img src={ControlKey} className="w-14 h-14 object-cover mx-1 box-border" />
                                    </div>
                                    <div className="inline-block flex-shrink-0">
                                        <img src={BButton} className="w-14 h-14 object-cover mx-1 box-border" />
                                    </div>
                                </div>

                                <div className="font-NanumGothic font-bold text-md text-center bg-white">
                                    지정한 문자열을 굵게 표시
                                </div>
                            </div>
                        </li>
                        <li className="relative pl-[20px] flex">
                            <div className="hidden absolute left-0 text-[20px] lg:flex items-center h-full">
                                •
                            </div>
                            <div className="justify-center border border-slate-200 shadow-lg flex gap-2 items-center lg:justify-start px-4 py-2 rounded-2xl flex-wrap bg-white">
                                <div className="flex gap-1">
                                    <div className="inline-block flex-shrink-0">
                                        <img src={ControlKey} className="w-14 h-14 object-cover mx-1 box-border" />
                                    </div>
                                    <div className="inline-block flex-shrink-0">
                                        <img src={CButton} className="w-14 h-14 object-cover mx-1 box-border" />
                                    </div>
                                </div>

                                <div className="font-NanumGothic font-bold text-md text-center">
                                    지정한 문자열을 복사
                                </div>
                            </div>
                        </li>
                        <li className="relative pl-[20px] flex">
                            <div className="hidden absolute left-0 text-[20px] lg:flex items-center h-full">
                                •
                            </div>
                            <div className="justify-center border border-slate-200 shadow-lg flex gap-2 items-center lg:justify-start px-4 py-2 rounded-2xl flex-wrap bg-white">
                                <div className="flex gap-1">
                                    <div className="inline-block flex-shrink-0">
                                        <img src={ControlKey} className="w-14 h-14 object-cover mx-1 box-border" />
                                    </div>
                                    <div className="inline-block flex-shrink-0">
                                        <img src={VButton} className="w-14 h-14 object-cover mx-1 box-border" />
                                    </div>
                                </div>

                                <div className="font-NanumGothic font-bold text-md text-center">
                                    지정한 문자열을 붙여넣기
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default ShortCutComponent;