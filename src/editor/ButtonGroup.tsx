import { VscOpenPreview } from "react-icons/vsc";
import { FiUploadCloud } from "react-icons/fi";
import { FaRegKeyboard } from "react-icons/fa6";
import { useAppDispatch } from "@slices/store";
import { setHidden } from "@slices/modal";

function ButtonGroup() {
    const dispatch = useAppDispatch();
    const onShortCutClick = () => {
        dispatch(setHidden(false));
    }

    return (
        <>
            <button
                onClick={onShortCutClick}
                className='hidden w-fit rounded-lg gap-2 justify-center items-center font-NanumGothic font-bold text-md bg-white shadow-lg p-2 lg:flex lg:w-full lg:justify-start lg:rounded-none'
            >
                <span> <FaRegKeyboard /></span>
                <span> 단축키 </span>
            </button>
            <button className='flex w-fit rounded-lg gap-2 justify-center items-center font-NanumGothic font-bold text-md bg-white shadow-lg p-2 lg:w-full lg:justify-start lg:rounded-none'>
                <span> <VscOpenPreview /></span>
                <span className="text-center"> 미리보기 </span>
            </button>
            <button className='flex w-fit rounded-lg gap-2 justify-center items-center font-NanumGothic font-bold text-md bg-white shadow-lg p-2 lg:w-full lg:justify-start lg:rounded-none' >
                <span>
                    <FiUploadCloud />
                </span>
                <span className="text-center">
                    제출하기
                </span>
            </button>
        </>
    )
}

export default ButtonGroup;