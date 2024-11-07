import { setHidden } from "@slices/modal";
import { IoSend } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@slices/store";
import { KeyboardEvent } from "react";

import ExitIcon from "@assets/icons/exit.png";

function YoutubeComponent() {
    const dispatch = useAppDispatch();
    const editor = useAppSelector(({ editor }) => editor.editor)
    const editorWidth = useAppSelector(({ editor }) => editor.width);

    const exitOnClick = () => {
        dispatch(setHidden(true));
    }

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(setHidden(true));
            editor?.chain().focus().setYoutubeVideo({ src: e.currentTarget.value, width: editorWidth - 32 }).run();
        }
    }

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="w-[600px] h-[600px] flex flex-col bg-white border border-gray-200 relative rounded-xl shadow-lg"
        >
            <div
                className="absolute top-0 right-0 cursor-pointer flex items-center"
            >
                <div onClick={exitOnClick}>
                    <IoSend size={40} />
                </div>
                <div onClick={exitOnClick}>
                    <img src={ExitIcon} className="w-20 h-20" />
                </div>
            </div>
            <div className="font-NanumGothic text-3xl p-5 font-bold border-b border-b-slate-300">
                유투브 주소 입력
            </div>
            <div className="flex w-full h-full items-end bg-[url('./assets/images/youtubeBackgournd.png')] bg-cover bg-no-repeat bg-[50%_100%]">
                <input type="text"
                    onKeyDown={onKeyDown}
                    className="outline-none w-full h-10 font-NanumGothic font-bold text-xl px-5 py-8"
                    placeholder="유투브 URL 주소를 입력해주세요"
                />
            </div>


        </div>
    )
}

export default YoutubeComponent;