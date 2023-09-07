import Libary from "./components/Libary";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import PrivetRouter from "./routers/PrivetRouter";
import PublicRouter from "./routers/PublicRouter";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { check_login } from "./redux/loginSlice";
import DashBord from "./pages/dashboard/DashBord";
import Books from "./pages/books/Books";
import Categories from "./pages/categories/Categories";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivetRouter>
        <Libary />
      </PrivetRouter>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivetRouter>
            <DashBord />
          </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/books",
        element: (
          <PrivetRouter>
            <Books />
          </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/categories",
        element: (
          <PrivetRouter>
            <Categories />
          </PrivetRouter>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <PublicRouter>
        <Login />
      </PublicRouter>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicRouter>
        <Signup />
      </PublicRouter>
    ),
  },
  {
    path: "/",
    element: <Navigate to={"/dashboard"} />,
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(check_login());
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
