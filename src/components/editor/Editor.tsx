import { useState, useEffect } from "react";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";

// Node
import Text from '@tiptap/extension-text'
import Image from '@tiptap/extension-image'
import Document from "@tiptap/extension-document"
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import Blockquote from '@tiptap/extension-blockquote'
import Paragraph from '@tiptap/extension-paragraph'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Heading from '@tiptap/extension-heading'
import Youtube from "@tiptap/extension-youtube"
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'

// Mark
import Bold from '@tiptap/extension-bold'
import CustomTextStyle from "./CustomTextStyle";
import BubbleMenuExtension from "@tiptap/extension-bubble-menu";

// components
import BubbleMenuComponent from "./BubbleMenu";

// for codeBlock
import { all, createLowlight } from 'lowlight'
import cpp from 'highlight.js/lib/languages/cpp'
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import { useAppDispatch } from "@slices/store";
import { setEditor } from "@slices/editor";

const lowlight = createLowlight(all)
lowlight.register('html', html)
lowlight.register('css', css)
lowlight.register('js', js)
lowlight.register('ts', ts)
lowlight.register('cpp', cpp);

function Editor() {
    const dispatch = useAppDispatch();
    const [content, setContent] = useState('');
    const editor = useEditor({
        extensions: [
            Text,
            Bold,
            Image,
            Youtube,
            Document,
            Paragraph.configure({
                HTMLAttributes: {
                    class: "not-prose text-xl font-NanumGothic"
                }
            }),
            Blockquote,
            BulletList.configure({
                HTMLAttributes: {
                    class : "list-disc ml-2"
                }
            }),
            ListItem,
            Heading.configure({
                HTMLAttributes : {
                    class : ""
                },
                levels: [1, 2, 3]
            }),
            TaskList,
            TaskItem.configure({
                nested: true,
            }),
            CodeBlockLowlight.configure({
                lowlight,
            }),
            CustomTextStyle,
            BubbleMenuExtension,
        ],
        editorProps: {
            attributes: {
                class: `max-w-full prose lg:prose-base focus:outline-none`,
            }
        },
        autofocus: true,
        content: content,
        onUpdate: ({editor}) => {
            setContent(editor.getHTML())
        }
    })

    if (editor === null) return null;

    useEffect(() => {
        dispatch(setEditor(editor));
    }, [editor])

    return (
        <div className="relative">
            <EditorContent editor={editor}/>
            <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
                <BubbleMenuComponent />
            </BubbleMenu>
        </div>
    )
}

export default Editor;