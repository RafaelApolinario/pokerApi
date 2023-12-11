import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Favorite from "../pages/Favorite";
import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokemon",
    element: <Pokemon />,
  },
  {
    path: "/favorite",
    element: <Favorite />,
  },
]);

function RoutesApp() {
  return <RouterProvider router={router} />;
}

export default RoutesApp;
