import { useAppSelector } from "@slices/store";
import { useState } from "react";

function BubbleMenuComponent() {
    const editor = useAppSelector(({ editor }) => editor.editor)
    const [fontType, setFontType] = useState('Roboto');
    const [fontWeight, setFontWeight] = useState('normal');

    if (editor === null) return null;

    return (
        <div className='bubble-menu'>
            <select
                value={fontType}
                onClick={(e) => {
                    e.stopPropagation();
                }}
                onChange={(e) => {
                    setFontType(e.target.value);
                }}
                className="font-Roboto w-[100px] outline-none text-center text-[14px] cursor-poiasdasdnter">
                <option className="font-Roboto" value="Roboto">Roboto</option>
                <option className="font-Poppins" value="Poppins">Poppins</option>
                <option className="font-Agdasima" value="Agdasima">Agdasima</option>
                <option className="font-Titillium" value="Titillium">Titillium</option>
                <option className="font-NanumGothic font-bold" value="NanumGothic">나눔고딕</option>
            </select>
            <select
                value={fontWeight}
                onClick={(e) => {
                    e.stopPropagation();
                }}
                onChange={(e) => {
                    setFontWeight(e.target.value)
                }}
                className="font-Roboto w-[100px] outline-none text-center text-[14px] cursor-pointer">
                <option className="font-normal" value="normal">normal</option>
                <option className="font-bold" value="bold">bold</option>
            </select>
        </div>
    )
}

export default BubbleMenuComponent;