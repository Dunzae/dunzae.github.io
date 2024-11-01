import { RouterProvider } from "react-router-dom";
import router from "./router"
import "normalize.css"
import "./global.css";
import { store } from './slices/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
};
export default App;