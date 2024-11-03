import { useState } from 'react'
import Image from '@tiptap/extension-image'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import Blockquote from '@tiptap/extension-blockquote'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Text from '@tiptap/extension-text'
import Bold from '@tiptap/extension-bold'
import Heading from '@tiptap/extension-heading'
import MenuList from './MenuList'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { EditorContent, useEditor } from '@tiptap/react'
import "./style.scss";

import { all, createLowlight } from 'lowlight'
import cpp from 'highlight.js/lib/languages/cpp'
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'

const lowlight = createLowlight(all)
lowlight.register('html', html)
lowlight.register('css', css)
lowlight.register('js', js)
lowlight.register('ts', ts)
lowlight.register('cpp', cpp);

export default () => {
    const [content, setContent] = useState('');
    const editor = useEditor({
        extensions: [
            Image,
            ListItem,
            BulletList,
            Document,
            Paragraph,
            Text,
            TaskList,
            TaskItem.configure({
                nested: true,
            }),
            Blockquote,
            Heading.configure({
                levels: [1, 2, 3]
            }),
            CodeBlockLowlight.configure({
                lowlight,
            }),
        ],
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
            }
        },
        content: content,
    })

    if (!editor) {
        return null
    }

    return (
        <div className="flex h-dvh">
            <div className="overflow-x-hidden">
                <EditorContent editor={editor} />
            </div>
            <div className="pl-4 py-4 border-l border-l-gray w-[300px] flex flex-col h-full overflow-hidden">
                <div className="flex-grow-0 overflow-y-auto">
                    <div className="p-2 text-2xl font-NanumGothic font-bold">
                        Edit Tool
                    </div>
                    <MenuList editor={editor} />
                </div>
            </div>

        </div>
    )
}
