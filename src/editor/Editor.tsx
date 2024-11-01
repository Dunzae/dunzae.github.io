import { useState } from 'react'
import PopupList from './PopupList'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Text from '@tiptap/extension-text'
import Bold from '@tiptap/extension-bold'
import Heading from '@tiptap/extension-heading'
import { EditorContent, useEditor } from '@tiptap/react'

export default () => {
    const [content, setContent] = useState('');
    const editor = useEditor({
        extensions: [
            Document,
            Paragraph,
            Text,
            TaskList,
            TaskItem.configure({
                nested: true,
            }),
            Heading.configure({
                levels: [1,2,3]
            })
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
            <div className="ml-4 w-[300px] h-full overflow-auto">
                <div className="p-2 text-2xl font-NanumGothic font-bold">
                    Edit Tool
                </div>
                <PopupList editor={editor} />
            </div>
        </div>
    )
}
