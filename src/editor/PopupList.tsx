import TextIcon from "@assets/icons/popupListTextI.png"
import TodoIcon from "@assets/icons/Todo.png"
import Header1Icon from "@assets/icons/header1.png";
import Header2Icon from "@assets/icons/header2.png"
import Header3Icon from "@assets/icons/header3.png"
import PopupCell from "./PopupCell";
import type { Editor } from "@tiptap/react";

interface IPopupList {
    editor : Editor
}

function PopupList({editor} : IPopupList) {
    const textOnClick = () => editor.chain().focus().newlineInCode().run()
    const todoOnClick = () => editor.chain().focus().toggleTaskList().run();
    const header1OnClick = () => editor.chain().focus().toggleHeading({ level: 1 }).run()
    const header2OnClick = () => editor.chain().focus().toggleHeading({ level: 2 }).run()
    const header3OnClick = () => editor.chain().focus().toggleHeading({ level: 3 }).run()


    return (
        <div className="p-2 flex flex-col w-full h-auto bg-white rounded-[20px]">
            <div className="mb-2">
                <PopupCell 
                    icon={TextIcon}
                    title="텍스트"
                    body="일반 텍스트를 입력하세요."
                    onClick={textOnClick}
                />
            </div>
            <div className="mb-2">
                <PopupCell 
                    icon={TodoIcon}
                    title="할 일 목록"
                    body="체크표시를 할 목록을 만드세요."
                    onClick={todoOnClick}
                />
            </div>
            <div className="mb-2">
                <PopupCell 
                    icon={Header1Icon}
                    title="제목1"
                    body="제목 크기1"
                    onClick={header1OnClick}
                />
            </div>
            <div className="mb-2">
                <PopupCell 
                    icon={Header2Icon}
                    title="제목2"
                    body="제목 크기2"
                    onClick={header2OnClick}
                />
            </div>
            <div className="mb-2">
                <PopupCell 
                    icon={Header3Icon}
                    title="제목3"
                    body="제목 크기3"
                    onClick={header3OnClick}
                />
            </div>
            

            
        </div>
    )
}

export default PopupList;