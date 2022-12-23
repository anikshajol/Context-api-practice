import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import ErrorPage from "../components/ErrorPage";
import Main from "../Layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

export default router;
