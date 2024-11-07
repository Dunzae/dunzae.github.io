import { setHidden } from "@slices/modal";
import { useAppDispatch, useAppSelector } from "@slices/store";

import ExitIcon from "@assets/icons/exit.png";
import { useRef } from "react";

function PreviewComponent() {
    const ref = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const editor = useAppSelector(({ editor }) => editor.editor);
    const exitOnClick = () => {
        dispatch(setHidden(true));
    }

    if (editor === null) return;

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="w-[80%] h-[80%] flex flex-col bg-white border overflow-hidden border-gray-200 relative rounded-xl shadow-lg"
        >
            <div
                onClick={exitOnClick}
                className="absolute top-0 right-0 cursor-pointer"
            >
                <img src={ExitIcon} className="w-20 h-20" />
            </div>
            <div className="font-NanumGothic text-3xl p-5 font-bold border-b border-b-slate-300">
                게시글 미리보기
            </div>
            <div className="flex-grow overflow-y-scroll p-4 max-w-full prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl my-5 focus:outline-none" dangerouslySetInnerHTML={{ __html: editor.getHTML() }}>
            </div>
        </div>
    )
}

export default PreviewComponent;