import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ax from '@utils/axios'

export interface IAuth {
  accessToken?: string,
  refreshToken?: string
}

const initialState: IAuth = {
  accessToken: undefined,
  refreshToken: undefined,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | undefined>) => {
      state.accessToken = action.payload

      if(action.payload !== undefined) {
        ax.interceptors.request.use((config) => {
          config.headers.Authorization = `Bearer ${action.payload}`;
          return config;
        });
      }
    },
    setRefreshToken: (state, action: PayloadAction<string | undefined>) => {
      state.refreshToken = action.payload
    }
  },
})

export const { setAccessToken, setRefreshToken } = authSlice.actions

export default authSlice.reducer