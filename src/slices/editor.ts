import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Editor } from '@tiptap/react'

export interface IEditor {
  editor : Editor | null,
  width : number,
  fontType : string,
  fontWeight : string,
}

const initialState: IEditor = {
  editor : null,
  width : 0,
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
    },
    setWidth : (state, action : PayloadAction<number>) => {
      state.width = action.payload;
    }
  },
})

export const { setEditor, setFontType, setFontWeight, setWidth } = editorSlice.actions

export default editorSlice.reducer