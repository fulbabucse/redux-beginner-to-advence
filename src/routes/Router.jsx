import { createBrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";
import Home from "../components/Home";
import Root from "../layouts/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

export default router;
