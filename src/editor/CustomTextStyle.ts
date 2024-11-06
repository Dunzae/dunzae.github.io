import { Mark, mergeAttributes, SingleCommands } from "@tiptap/react"
export interface TextStyleOptions {
    HTMLAttributes: Record<string, any>,
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        textStyle: {
            setFontFamily: (fontFamily: string) => ReturnType,
            setFontWeight: (fontWeight: string) => ReturnType,
        }
    }
}

const CustomTextStyle = Mark.create<TextStyleOptions>({
    name: 'textStyle',
    addOptions() {
        return {
            HTMLAttributes: {},
        }
    },
    renderHTML({ HTMLAttributes }) {
        return ['span', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
    },
    addCommands() {
        return {
            setFontFamily: (fontFamily: string) => ({ commands }) => {
                this.options.HTMLAttributes =  { class: `font-family : ${fontFamily};`}
                return commands.setMark('textStyle');
            },
            setFontWeight: (fontWeight: string) => ({ commands }) => {
                this.options.HTMLAttributes =  { style: `font-weight : ${fontWeight};`}
                return commands.setMark('textStyle');
            }
        }
    }
})

export default CustomTextStyle;