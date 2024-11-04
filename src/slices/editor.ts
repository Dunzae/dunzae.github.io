import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Editor } from '@tiptap/react'

export interface IEditor {
  editor : Editor | null,
  fontType : string,
  fontWeight : string,
}

const initialState: IEditor = {
  editor : null,
  fontType : "Roboto",
  fontWeight : "normal"
}

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setEditor : (state, action : PayloadAction<Editor>) => {
      return {...state, editor : action.payload}
    },
    setFontType : (state, action : PayloadAction<string>) => {
      state.fontType = action.payload;
    },
    setFontWeight : (state, action : PayloadAction<string>) => {
      state.fontWeight = action.payload;
    }
  },
})

export const { setEditor, setFontType, setFontWeight } = editorSlice.actions

export default editorSlice.reducer