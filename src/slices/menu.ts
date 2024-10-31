import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IMenu {
  location: string,
  slideMenuHidden : boolean,
}

const initialState: IMenu = {
  location : '/',
  slideMenuHidden : true,
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setLocation : (state, action : PayloadAction<string>) => {
      state.location = action.payload
    },
    setSlideMenuHidden : (state, action : PayloadAction<boolean>) => {
      state.slideMenuHidden = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLocation, setSlideMenuHidden } = menuSlice.actions

export default menuSlice.reducer