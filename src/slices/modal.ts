import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IModal {
    type? : string,
    hidden : boolean
    
}

const initialState: IModal = {
    type : undefined,
    hidden : true
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setHidden : (state, action : PayloadAction<boolean>) => {
        state.hidden = action.payload;
    },
    setType : (state, action : PayloadAction<string>) => {
        state.type = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setHidden, setType } = modalSlice.actions

export default modalSlice.reducer