import { RouterProvider } from "react-router-dom";
import router from "./router/routes";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
};

export default App;
