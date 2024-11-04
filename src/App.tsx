import { RouterProvider } from "react-router-dom";
import router from "./router"
import "normalize.css"
import "./global.css";
import { store } from './slices/store'
import { Provider } from 'react-redux'
import ModalComponent from "@components/common/Modal";

const App = () => {
  return (
    <Provider store={store}>
      <ModalComponent />
      <RouterProvider router={router} />
    </Provider>
  )
};
export default App;