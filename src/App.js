import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <div className="max-w-screen-xl	mx-auto">
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </Provider>
    </div>
  );
}

export default App;
