import { RouterProvider } from "react-router-dom";
import router from "./router"
import "normalize.css"
import "./global.css";
import { store } from './slices/store'
import { Provider } from 'react-redux'
import ModalComponent from "@components/modals/Modal";
import { useEffect } from "react";
import { getLocalStorageItem, removeLocalStorageItem, setLocalStorageItem } from "@utils/storage";
import { setAccessToken, setRefreshToken } from "@slices/auth";
import ax from "@utils/axios";
import ServerError from "@utils/error";

const App = () => {
  useEffect(() => {
    const token = getLocalStorageItem("token");
    if (token !== undefined) {
      const checkAndRefreshToken = async function() {
        const { accessToken, refreshToken } = token;
        const result = await ax.postApi("/auth/check", {
          accessToken,
          refreshToken
        })
  
        if(!result.error && result.data?.accessToken && result.data?.refreshToken) {
          setLocalStorageItem("token", { 
            accessToken : result.data?.accessToken,
            refreshToken,
          })

          store.dispatch(setAccessToken(result.data.accessToken));
          store.dispatch(setRefreshToken(result.data.refreshToken));
        } else if(result.error === "The token is invalid") {
          removeLocalStorageItem("token");
        } 
      }
      checkAndRefreshToken();
    }
  }, [])

  return (
    <Provider store={store}>
      <ModalComponent />
      <RouterProvider router={router} />
    </Provider>
  )
};
export default App;