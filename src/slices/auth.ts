import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IAuth {
    accessToken? : string,
    refreshToken? : string
}

const initialState: IAuth = {
    accessToken : undefined,
    refreshToken : undefined,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken : (state, action : PayloadAction<string | undefined>) => {
        state.accessToken = action.payload
    },
    setRefreshToken : (state, action : PayloadAction<string | undefined>) => {
        state.refreshToken = action.payload
    }
  },
})

export const { setAccessToken, setRefreshToken } = authSlice.actions

export default authSlice.reducer