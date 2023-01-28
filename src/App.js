import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./Redux/store/store";
import router from "./Routes/Routes";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
