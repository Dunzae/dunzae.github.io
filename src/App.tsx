import { RouterProvider } from "react-router-dom";
import router from "./router"
import "normalize.css"
import "./global.css";

const App = () => {
  return (
    <RouterProvider router={router} />
  )
};
export default App;