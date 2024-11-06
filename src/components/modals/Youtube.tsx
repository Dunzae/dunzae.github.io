import { setHidden } from "@slices/modal";
import { useAppDispatch, useAppSelector } from "@slices/store";
import { ChangeEvent, KeyboardEvent, useState } from "react";

function YoutubeComponent() {
    const [url, setUrl] = useState('');
    const dispatch = useAppDispatch();
    const editor = useAppSelector(({editor}) => editor.editor)
    
    const onChange = (e : ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
    }

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            dispatch(setHidden(true));
            editor?.chain().focus().setYoutubeVideo({src : url}).run();
            setUrl('');
        }
    }

    return (
        <div className="flex flex-col h-full">
            <div className="font-NanumGothic text-3xl p-5 font-bold border-b border-b-slate-300">
                유투브 주소 입력
            </div>
            <div className="flex w-full h-full items-end">
                <input type="text" 
                        value={url}
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        className="outline-none w-full h-10 font-NanumGothic font-bold text-3xl px-5 py-8"
                        placeholder="유투브 URL 주소를 입력해주세요"
                    />
            </div>


        </div>
    )
}

export default YoutubeComponent;