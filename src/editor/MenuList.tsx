import TodoIcon from "@assets/icons/Todo.png"
import Header1Icon from "@assets/icons/header1.png";
import Header2Icon from "@assets/icons/header2.png"
import Header3Icon from "@assets/icons/header3.png"
import BlockQuoteIcon from "@assets/icons/blockquote.png"
import BulletIcon from "@assets/icons/bullet.png"
import CodeIcon from "@assets/icons/code.png"
import ImageIcon from "@assets/icons/image.png"
import MenuCell from "./MenuCell";
import type { Editor } from "@tiptap/react";
import { ChangeEvent, SyntheticEvent, useRef } from "react";

interface IMenuList {
    editor: Editor
}

function MenuList({ editor }: IMenuList) {
    const ref = useRef<HTMLInputElement>(null);

    const todoOnClick = () => editor.chain().focus().toggleTaskList().run()
    const header1OnClick = () => editor.chain().focus().toggleHeading({ level: 1 }).run()
    const header2OnClick = () => editor.chain().focus().toggleHeading({ level: 2 }).run()
    const header3OnClick = () => editor.chain().focus().toggleHeading({ level: 3 }).run()
    const blockquoteOnClick = () => editor.chain().focus().toggleBlockquote().run()
    const bulletOnClick = () => editor.chain().focus().toggleBulletList().run()
    const codeOnClick = () => {
        if (ref.current) {
            ref.current.click();
        }
    }
    // const imageOnClick = () => editor.chain().focus().setImage({ src : url}).run()

    return (
        <div className="p-2 flex flex-col w-full h-auto bg-white rounded-[20px]">
            <div>
                <input className="hidden" type="file" id="lavel" accept="image/png, image/jpeg" ref={ref}  onChange={(e) => {
                    if(e.target && e.target.files) {
                        const file = e.target.files[0];
                        const imageUrl = URL.createObjectURL(file);

                        editor.chain().focus().setImage({src : imageUrl}).run();
                    }
                }}/>
            </div>
            <div className="mb-2">
                <MenuCell
                    icon={Header1Icon}
                    title="제목1"
                    body="제목 크기1"
                    onClick={header1OnClick}
                />
            </div>
            <div className="mb-2">
                <MenuCell
                    icon={Header2Icon}
                    title="제목2"
                    body="제목 크기2"
                    onClick={header2OnClick}
                />
            </div>
            <div className="mb-2">
                <MenuCell
                    icon={Header3Icon}
                    title="제목3"
                    body="제목 크기3"
                    onClick={header3OnClick}
                />
            </div>
            <div className="mb-2">
                <MenuCell
                    icon={BlockQuoteIcon}
                    title="인용문"
                    body="인용할 문단을 써주세요."
                    onClick={blockquoteOnClick}
                />
            </div>
            <div className="mb-2">
                <MenuCell
                    icon={TodoIcon}
                    title="할 일 목록"
                    body="체크표시를 할 목록을 만드세요."
                    onClick={todoOnClick}
                />
            </div>
            <div className="mb-2">
                <MenuCell
                    icon={BulletIcon}
                    title="글머리"
                    body="간단한 글머리 기호 목록을 생성하세요."
                    onClick={bulletOnClick}
                />
            </div>
            <div className="mb-2">
                <MenuCell
                    icon={CodeIcon}
                    title="코드"
                    body="코드 스니펫을 작성하세요."
                    onClick={codeOnClick}
                />
            </div>
            <div className="mb-2">
                <MenuCell
                    icon={ImageIcon}
                    title="이미지"
                    body="이미지를 추가하세요."
                    onClick={codeOnClick}
                />
            </div>
        </div>
    )
}

export default MenuList;