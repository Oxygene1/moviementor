import { useRoutes } from "react-router-dom";
import { ProtectedRoute } from "../helpers";
import Landingpage from "../pages/landingpage/landingpage";
import { LoginScreen } from "../pages/login";
import { WelcomePage } from "../pages/welcome";

export const Routes = () => {
  const route = useRoutes([
    {
      path: "/",
      element: <Landingpage />,
    },
    {
      path: "/login",
      element: <LoginScreen />,
    },
    {
      path: "/movies",
      element: (
        <ProtectedRoute>
          <WelcomePage />
        </ProtectedRoute>
      ),
    },
  ]);
  return route;
};
