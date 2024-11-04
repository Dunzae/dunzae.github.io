import { setFontType, setFontWeight } from "@slices/editor";
import { useAppDispatch, useAppSelector } from "@slices/store";

function GlobalTool() {
    const dispatch = useAppDispatch();
    const fontType = useAppSelector(({editor}) => editor.fontType);
    const fontWeight = useAppSelector(({editor}) => editor.fontWeight);

    const fontTypeOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setFontType(e.target.value));
    }

    const fontWeightOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setFontWeight(e.target.value));
    }

    return (
        <>
            <div className="text-2xl font-NanumGothic font-bold mb-5">
                전역 설정
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between font-medium border-b border-b-slate-200 pb-2 mb-2">
                    <span className="flex-auto flex-shrink-0">Font Type </span>
                    <span className="flex overflow-x-hidden">
                        <select className="font-Roboto w-[100px] outline-none text-center text-[14px] cursor-pointer" value={fontType} onChange={fontTypeOnChange}>
                            <option className="font-Roboto" value="Roboto">Roboto</option>
                            <option className="font-Poppins" value="Poppins">Poppins</option>
                            <option className="font-Agdasima" value="Agdasima">Agdasima</option>
                            <option className="font-Titillium" value="Titillium">Titillium</option>
                            <option className="font-NanumGothic font-bold" value="NanumGothic">나눔고딕</option>
                        </select>
                    </span>
                </div>

                <div className="flex justify-between font-medium border-b border-b-slate-200 pb-2 mb-2">
                    <span className="flex-auto flex-shrink-0">Font Weight </span>
                    <span className="flex overflow-x-hidden">
                        <select className="font-Roboto w-[100px] outline-none text-center text-[14px] cursor-pointer" value={fontWeight} onChange={fontWeightOnChange}>
                            <option className="font-normal" value="normal">normal</option>
                            <option className="font-bold" value="bold">bold</option>
                        </select>
                    </span>
                </div>
            </div>
        </>
    )
}

export default GlobalTool;