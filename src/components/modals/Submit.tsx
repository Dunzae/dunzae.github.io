import { useCallback, useRef, useState } from "react";
import ExitIcon from "@assets/icons/exit.png";
import { IoSend } from "react-icons/io5";
import { setHidden, setType } from "@slices/modal";
import { useAppDispatch, useAppSelector } from "@slices/store";
import ax from "@utils/axios";
import router from "router"


function SubmitComponent() {
    const ref = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const editor = useAppSelector(({ editor }) => editor.editor);
    const accessToken = useAppSelector(({ auth }) => auth.accessToken);
    const [title, setTitle] = useState('');
    const [thumbnail, setThumbnail] = useState<string | null>(null);

    const exitOnClick = () => {
        dispatch(setHidden(true));
        setThumbnail(null);
    }

    const submitOnClick = useCallback(async () => {
        setTitle("");
        setThumbnail(null);
        dispatch(setHidden(true));

        if (!accessToken) {
            alert("로그인되지 않았습니다.");
            return router.navigate("/login");
        } else {
            const post = editor?.getHTML()
            const result = await ax.postApi("/post", { post });
            if (result.error !== undefined) {
                dispatch(setType("Fail"));
                dispatch(setHidden(false));
            } else {
                dispatch(setHidden(false));
                dispatch(setType("Success"));
            }
        }

        
    }, [editor, accessToken])

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        if (e.dataTransfer) {
            const file = e.dataTransfer.files[0];
            if (file) {
                const url = URL.createObjectURL(file); // 로컬 파일 URL 생성
                setThumbnail(url);
            }
        }
    }
    const onPictureClick = () => {
        ref.current?.click();
    }
    const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            const file = e.target.files[0];
            if (file) {
                const url = URL.createObjectURL(file); // 로컬 파일 URL 생성
                setThumbnail(url);
            }
        }
    }

    const titleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="w-[600px] h-[600px] flex flex-col bg-white border border-gray-200 relative rounded-xl shadow-lg"
        >
            <div

                className="absolute top-0 right-0 cursor-pointer flex items-center"
            >
                <div onClick={submitOnClick}>
                    <IoSend size={40} />
                </div>
                <div onClick={exitOnClick}>
                    <img src={ExitIcon} className="w-20 h-20" />
                </div>
            </div>
            <div className="font-NanumGothic text-3xl p-5 font-bold border-b border-b-slate-300">
                제출하기
            </div>
            <div>
                <input
                    value={title}
                    onChange={titleOnChange}
                    className="p-4 w-full outline-none"
                    type="text" placeholder="제목을 입력해주세요."
                />
            </div>
            <div className="w-full h-full flex-grow border-4 border-black-200 border-dashed flex justify-center items-center overflow-hidden text-gray-500 font-NanumGothic" onDrop={onDrop} onClick={onPictureClick}>
                {thumbnail !== null ?
                    <img src={thumbnail} className="w-full h-full object-contain object-center" />
                    : "사진을 드래그하거나 클릭해주세요."}
                <input
                    ref={ref}
                    type="file"
                    className="hidden"
                    onChange={onFileSelect}
                />
            </div>
        </div>
    )
}

export default SubmitComponent;