import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IMenu {
  isFold: boolean,
  location: string,
  slideMenuHidden: boolean,
}

const initialState: IMenu = {
  isFold: false,
  location: '/',
  slideMenuHidden: true,
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleIsFold: (state) => {
      state.isFold = !state.isFold
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload
    },
    setSlideMenuHidden: (state, action: PayloadAction<boolean>) => {
      state.slideMenuHidden = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleIsFold, setLocation, setSlideMenuHidden } = menuSlice.actions

export default menuSlice.reducer