import Dashboard from "../pages/Dashboard";
import PageNotFound from "../pages/404";
import SignUp from "../pages/SignUp";
import { Route, Routes } from "react-router";

function CustomRoutes() {
  const appRoutes = [
    {
      id: 1,
      path: "/",
      element: <Dashboard />,
    },
    {
      id: 2,
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      id: 3,
      path: "/signUp",
      element: <SignUp />,
    },
    {
      id: 5,
      path: "*",
      element: <PageNotFound />,
    },
  ];

  return (
    <Routes>
      {appRoutes.map((appRoute) => (
        <Route
          key={appRoute.id}
          path={appRoute.path}
          element={appRoute.element}
        />
      ))}
    </Routes>
  );
}

export default CustomRoutes;
